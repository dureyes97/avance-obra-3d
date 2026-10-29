/** @jsx jsx */
// Construction progress of E15, I16 and E16 (Revit CON-CN models as 3D object scene layers served locally by
// arcgis-poc/serve.mjs) plus an output data source with one record per element, filled in the browser from
// /data/avance-elements.json. Native Chart, Table, Filter and List widgets use that data source; this widget keeps
// the 3D view in step with it: filters from other widgets hide elements, selections are highlighted, and a click in
// the scene selects the element's record. Nothing is read from or written to a portal.
import {
  React, jsx, css, Immutable, DataSourceComponent, DataSourceStatus, ReactRedux, getAppStore, appActions,
  type AllWidgetProps, type FeatureLayerDataSource, type ImmutableArray, type IMState
} from 'jimu-core'
import ArcGISMap from 'esri/Map'
import WebScene from 'esri/WebScene'
import SceneView from 'esri/views/SceneView'
import SceneLayer from 'esri/layers/SceneLayer'
import FeatureLayer from 'esri/layers/FeatureLayer'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
import Graphic from 'esri/Graphic'
import Point from 'esri/geometry/Point'
import Polygon from 'esri/geometry/Polygon'
import Slice from 'esri/widgets/Slice'
import SceneFilter from 'esri/layers/support/SceneFilter'
import { CUTOFF_STATE_KEY, SCHEDULE, isoDay, scheduleClass, timelapseWhere, today } from './avance-schedule'
import { SchedulePanel } from './avance-schedule-panel'
import type { IMConfig } from '../config'
import { FIELD_NAMES, ID_FIELD } from '../output-schema'
import { BASEMAPS, createBasemapSwitcher } from './basemaps'
import { packageFootprint } from './package-footprint'

// Status rule of build_avance.py: no % -> Sin dato, >= 100 -> Terminado, <= 0 -> No iniciado, else En curso.
const STATUS = [
  { value: 'Terminado', color: [68, 197, 138], css: '#44c58a' },
  { value: 'En curso', color: [242, 201, 76], css: '#f2c94c' },
  { value: 'No iniciado', color: [239, 100, 100], css: '#ef6464' },
  { value: 'Sin dato', color: [154, 165, 177], css: '#9aa5b1' }
]
const SECTION_LABELS = { E15: 'Estación 15 · Calle 63', I16: 'Interestación 16 · viaducto', E16: 'Estación 16 · Calle 72' }
const KEY_FIELDS: Array<[string, string]> = [
  ['Avance', 'Avance (%)'], ['Actividad', 'Actividad'], ['ActividadNombre', 'Nombre de actividad'], ['FechaInicio', 'Inicio'],
  ['FechaFin', 'Fin'], ['Contratista', 'Contratista'], ['UE', 'Unidad de ejecución'], ['Categoria', 'Categoría'], ['Family', 'Familia'],
  ['Type', 'Tipo'], ['Nivel', 'Nivel'], ['IfcGUID', 'IfcGUID'], ['ExtId', 'ID de Revit'], ['Seccion', 'Sección'], ['Modelo', 'Modelo Revit']
]
// Hosted scene layers of the same progress packages (public, gov-esri-co portal items 0b569dac…, d6ed0c07…, 44c4cd17…);
// sections without one load from the local serve.mjs. Same OBJECTID_1, so avance-elements.json still matches them.
const HOSTED_SECTIONS = {
  E15: 'https://tiles.arcgis.com/tiles/BQTQBNBsmxjF8vus/arcgis/rest/services/E15_Avance_3DObject/SceneServer/layers/0',
  I16: 'https://tiles.arcgis.com/tiles/BQTQBNBsmxjF8vus/arcgis/rest/services/I16_Avance_3DObject_/SceneServer/layers/0',
  E16: 'https://tiles.arcgis.com/tiles/BQTQBNBsmxjF8vus/arcgis/rest/services/E16_Avance_3DObject/SceneServer/layers/0'
}
const sectionUrl = (server: string, name: string): string => HOSTED_SECTIONS[name.replace(/^AV_/, '')] ?? `${server}/slpk/${name}/SceneServer/layers/0`
// Default scene to draw on: «Avance de obra - PLMB» in the SDP portal, which holds the three services and the volumetry.
const DEFAULT_WEB_SCENE = 'https://sinupotdes.sdp.gov.co/portalp/home/webscene/viewer.html?webscene=839de5bdfa814f60b2a1baa743bc7f56'
// Portal URL and item id from a web scene viewer or item URL.
const parseWebScene = (url: string): { portalUrl: string, id: string } | null => {
  const id = url?.match(/(?:webscene|id)=([0-9a-f]{32})/i)?.[1]
  return id ? { portalUrl: url.split(/\/(?:home|apps)\//)[0], id } : null
}
const serviceUrl = (url: string): string => url?.replace(/\/layers\/\d+\/?$/, '').replace(/\/$/, '').toLowerCase()
// The scene layer of a map that points to the given service, if any.
const findSceneLayer = (map: ArcGISMap, url: string): SceneLayer =>
  map.allLayers.find(l => l.type === 'scene' && serviceUrl((l as SceneLayer).url) === serviceUrl(url)) as SceneLayer
// Public building volumetry (facades) from the Esri Colombia portal, item 935c0605d691425ab55fd4e63c8c544d.
const VOLUMETRY_URL = 'https://arcgis.esri.co/server/rest/services/Hosted/Volumetria_2021__Octubre_2026_Fachada/SceneServer/layers/0'
const HIGHLIGHT_LIMIT = 5000 // larger selections are counted but not highlighted, to keep the view responsive

const meshFill = (color: number[] | null) => ({ type: 'mesh-3d', symbolLayers: [{ type: 'fill', material: color ? { color, colorMixMode: 'replace' } : undefined }] })
const RENDERERS = {
  status: {
    type: 'unique-value',
    field: 'EstadoAvance',
    uniqueValueInfos: STATUS.map(s => ({ value: s.value, label: s.value, symbol: meshFill([...s.color, s.value === 'Sin dato' ? 0.55 : 1]) })),
    defaultSymbol: meshFill([154, 165, 177, 0.55])
  },
  // Package drawingInfo carries a polygon-3d renderer, which 3D object layers reject; draw with source colours.
  source: { type: 'simple', symbol: meshFill(null) }
}
// Schedule colours depend on the cut-off date, so each section gets a unique-value renderer on its object ids; only
// elements with activity dates are listed, the rest take the «Sin programación» default.
function scheduleRenderer (elements: Array<{ [field: string]: any }>, cutoff: number) {
  const byClass = new Map<string, number[]>()
  for (const a of elements) {
    const value = scheduleClass(a, cutoff)
    if (!byClass.has(value)) byClass.set(value, [])
    byClass.get(value).push(a.OID)
  }
  const symbols = new Map(SCHEDULE.map(s => [s.value, meshFill([...s.color, s.value === 'Sin programación' ? 0.35 : 1])]))
  return {
    type: 'unique-value',
    field: 'OBJECTID_1',
    uniqueValueInfos: [...byClass].flatMap(([value, oids]) => oids.map(oid => ({ value: oid, label: value, symbol: symbols.get(value) }))),
    defaultSymbol: symbols.get('Sin programación')
  }
}
const number = (value: number) => Number(value).toLocaleString('es-CO')
const statusCss = (value: string) => STATUS.find(s => s.value === value)?.css ?? '#9aa5b1'
const scheduleCss = (value: string) => SCHEDULE.find(s => s.value === value)?.css ?? '#9aa5b1'
const SPIN_DEGREES_PER_SECOND = 6

interface Section { name: string, code: string, layer: __esri.SceneLayer, layerView?: __esri.SceneLayerView }
interface Table {
  attributes: Array<{ [field: string]: any }> // index = record id - 1
  recordIdByElement: Map<string, number> // `${Seccion}:${OID}` -> record id
  matcher: __esri.FeatureLayer // client-side copy that evaluates the data source's where clauses
}

const style = css`
  position: relative; width: 100%; height: 100%; overflow: hidden; background: #0b1117;
  .view { position: absolute; inset: 0; }
  .panel {
    position: absolute; top: 10px; left: 10px; width: 300px; max-height: calc(100% - 20px); overflow: auto;
    background: rgba(16, 24, 32, 0.92); color: #e6edf3; border-radius: 6px; padding: 10px 12px; font-size: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  }
  .panel h2 { font-size: 13px; margin: 0 0 6px; }
  .panel h3 { font-size: 12px; margin: 10px 0 4px; color: #c5d1dc; font-weight: 600; }
  .panel label { display: flex; align-items: center; gap: 6px; margin: 2px 0; cursor: pointer; }
  .panel label span { flex: 1; }
  .panel select, .panel input[type=range] { width: 100%; }
  .panel button { background: #23303d; color: #e6edf3; border: 1px solid #344453; border-radius: 4px; padding: 2px 8px; cursor: pointer; font-size: 12px; }
  .panel button:hover { background: #2d3d4d; }
  .note { color: #8fa3b5; margin: 4px 0 0; line-height: 1.35; }
  .legend { display: grid; grid-template-columns: 1fr; gap: 2px; }
  .swatch { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: 6px; vertical-align: -1px; }
  dl { display: grid; grid-template-columns: auto 1fr; gap: 2px 8px; margin: 4px 0 0; }
  dt { color: #8fa3b5; } dd { margin: 0; word-break: break-word; }
  .status { margin-top: 8px; color: #8fa3b5; }
  .collapse { position: absolute; top: 10px; left: 10px; }
  .tools { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
  .panel button[aria-pressed=true] { background: #2f6f9f; border-color: #4ea8ff; }
  .tip {
    position: absolute; pointer-events: none; max-width: 280px; background: rgba(16, 24, 32, 0.95); color: #e6edf3;
    border: 1px solid #344453; border-radius: 4px; padding: 6px 8px; font-size: 12px; line-height: 1.35; z-index: 2;
  }
  .tip b { display: block; margin-bottom: 2px; }
  .tip span { color: #8fa3b5; }
`

export default function Widget (props: AllWidgetProps<IMConfig>) {
  const server = (props.config?.serverUrl ?? 'https://dureyes97.github.io/avance-plmb').replace(/\/$/, '')
  const group = props.config?.group ?? 'avance'
  const webSceneUrl = props.config?.webSceneUrl ?? DEFAULT_WEB_SCENE
  const outputId = props.outputDataSources?.[0]
  const useDataSource = React.useMemo(() => outputId ? Immutable({ dataSourceId: outputId, mainDataSourceId: outputId }) : null, [outputId])

  const container = React.useRef<HTMLDivElement>(null)
  const viewRef = React.useRef<SceneView>(null)
  const sectionsRef = React.useRef<Section[]>([])
  const highlights = React.useRef<__esri.Handle[]>([])
  const tableRef = React.useRef<Table>(null)
  const switchBasemap = React.useRef<(value: string) => void>(null)
  const volumetryRef = React.useRef<SceneLayer>(null)

  const [ds, setDs] = React.useState<FeatureLayerDataSource>(null)
  const [table, setTable] = React.useState<Table>(null)
  const [sections, setSections] = React.useState<Section[]>([])
  const [layerViewsReady, setLayerViewsReady] = React.useState(0)
  const [queryVersion, setQueryVersion] = React.useState(0)
  const [selection, setSelection] = React.useState<Array<string | number>>([])
  const [colorMode, setColorMode] = React.useState<'status' | 'schedule' | 'source'>('schedule')
  // Cut-off date in the app state, shared with the Avance 4D widget if it is also in the experience.
  const sharedCutoff = ReactRedux.useSelector((state: IMState) => state.widgetsState?.[CUTOFF_STATE_KEY]?.cutoff as number)
  const cutoff = sharedCutoff ?? today()
  const setCutoff = React.useCallback((value: number) => { getAppStore().dispatch(appActions.widgetStatePropChange(CUTOFF_STATE_KEY, 'cutoff', value)) }, [])
  const [buildUp, setBuildUp] = React.useState(false)
  const [hideUnscheduled, setHideUnscheduled] = React.useState(false)
  const timelapse = colorMode === 'schedule' ? timelapseWhere(cutoff, buildUp, hideUnscheduled) : null
  const [tip, setTip] = React.useState<{ x: number, y: number, a: { [field: string]: any } }>(null)
  const [slicing, setSlicing] = React.useState(false)
  const [spinning, setSpinning] = React.useState(false)
  const [groundOpacity, setGroundOpacity] = React.useState(100)
  const [underground, setUnderground] = React.useState(false)
  const [basemap, setBasemap] = React.useState(parseWebScene(webSceneUrl) ? 'scene' : 'ideca')
  const [volumetryOn, setVolumetryOn] = React.useState(true)
  const [basemapNote, setBasemapNote] = React.useState('')
  const [statusText, setStatusText] = React.useState('Iniciando…')
  const [visibleCount, setVisibleCount] = React.useState<number>(null)
  const [collapsed, setCollapsed] = React.useState(false)

  // ---------- Scene and local packages ----------
  React.useEffect(() => {
    let cancelled = false
    const footprintLayer = new GraphicsLayer({ title: 'Huellas CAD', elevationInfo: { mode: 'on-the-ground' } })
    const sceneItem = parseWebScene(webSceneUrl)
    const map: ArcGISMap = sceneItem
      ? new WebScene({ portalItem: { id: sceneItem.id, portal: { url: sceneItem.portalUrl } } as any })
      : new ArcGISMap({ basemap: 'satellite', ground: 'world-elevation' })
    switchBasemap.current = createBasemapSwitcher(map, setBasemapNote)
    const view = new SceneView({
      container: container.current,
      map,
      qualityProfile: 'high',
      environment: { lighting: { type: 'virtual' } } as any,
      // A web scene opens at its own initial viewpoint.
      ...(sceneItem ? {} : { camera: { position: { longitude: -74.0662, latitude: 4.6440, z: 3050 }, heading: 15, tilt: 55 } as any }),
      ui: { components: ['zoom', 'compass'] }
    })
    viewRef.current = view

    Promise.all([
      // Sections: the web scene's layers of the progress services, or the local packages listed by serve.mjs.
      sceneItem
        ? (map as WebScene).load().then(() => Object.keys(HOSTED_SECTIONS).map(code => `AV_${code}`))
        : fetch(`${server}/slpk/index.json?group=${encodeURIComponent(group)}`).then(async r => r.ok ? await r.json() : []),
      fetch(`${server}/predial-station-footprints.json`).then(async r => r.ok ? await r.json() : { stations: [] }, () => ({ stations: [] }))
    ]).then(([names, footprints]: [string[], any]) => {
      if (cancelled) return
      if (!names.length) { setStatusText(`No hay paquetes del grupo «${group}» en ${server}. ¿Está corriendo serve.mjs?`); return }
      const volumetry = findSceneLayer(map, VOLUMETRY_URL) ?? new SceneLayer({ url: VOLUMETRY_URL })
      volumetry.set({ title: 'Volumetría 2021 · fachadas', popupEnabled: false })
      if (!map.layers.includes(volumetry)) map.add(volumetry, 0)
      volumetryRef.current = volumetry
      setVolumetryOn(volumetry.visible)
      map.add(footprintLayer)
      const stationRings: Array<Array<[number, number]>> = []
      const list: Section[] = names.map(name => {
        const code = name.replace(/^AV_/, '')
        const url = sectionUrl(server, name)
        const layer = findSceneLayer(map, url) ?? new SceneLayer({ url })
        layer.set({ title: SECTION_LABELS[code] ?? name, outFields: ['*'], popupEnabled: false, visible: true, renderer: RENDERERS.status as any })
        if (!map.allLayers.includes(layer)) map.add(layer)
        for (const part of footprints.stations?.find(s => s.station === code)?.parts ?? []) {
          stationRings.push(part.coordinates)
          footprintLayer.add(new Graphic({
            geometry: new Polygon({ rings: [part.coordinates], spatialReference: { wkid: 4326 } }),
            symbol: { type: 'simple-fill', color: [255, 159, 67, 0.2], outline: { color: [255, 209, 161], width: 1.2 } } as any
          }))
        }
        return { name, code, layer }
      })
      sectionsRef.current = list
      setSections(list)
      // Hide the volumetry buildings that touch a station: predial footprints plus the packages' own leaf boxes.
      Promise.all(names.map(async name => await packageFootprint(sectionUrl(server, name)))).then(packages => {
        if (cancelled) return
        const rings = [...stationRings, ...packages.flat()]
        volumetry.filter = new SceneFilter({
          geometries: rings.map(ring => new Polygon({ rings: [ring], spatialReference: { wkid: 4326 } })),
          spatialRelationship: 'disjoint'
        })
      }, error => { console.warn('volumetry filter', error) })
      for (const section of list) {
        view.whenLayerView(section.layer).then(layerView => {
          section.layerView = layerView as __esri.SceneLayerView
          setLayerViewsReady(n => n + 1)
        }, error => { console.error(section.name, error); setStatusText(`No se pudo cargar ${section.name}: ${error.message}`) })
      }
      if (!sceneItem) view.when(() => { home() }, (error: Error) => { console.warn('SceneView', error) })
    }, error => {
      console.error(error)
      setStatusText(sceneItem ? `No se pudo abrir el web scene: ${error.message}` : `No se pudo leer ${server}: ${error.message}. Inicia serve.mjs.`)
    })

    view.on('click', event => { onSceneClick(event) })
    view.on('pointer-move', event => { onPointerMove(event) })
    view.on('pointer-leave', () => { setTip(null) })
    return () => { cancelled = true; view.destroy(); viewRef.current = null }
  }, [server, group, webSceneUrl])

  React.useEffect(() => { switchBasemap.current?.(basemap) }, [basemap])
  React.useEffect(() => {
    const ground = viewRef.current?.map.ground
    if (!ground) return
    ground.opacity = groundOpacity / 100
    // A see-through surface is only useful if the camera may also go below it.
    ground.navigationConstraint = { type: underground || groundOpacity < 100 ? 'none' : 'stay-above' } as any
  }, [groundOpacity, underground])
  // Scheduled elements per section, for the schedule renderer.
  const scheduledBySection = React.useMemo(() => {
    const map = new Map<string, Array<{ [field: string]: any }>>()
    for (const a of table?.attributes ?? []) {
      if (a.FechaInicioDate == null && a.FechaFinDate == null) continue
      if (!map.has(a.Seccion)) map.set(a.Seccion, [])
      map.get(a.Seccion).push(a)
    }
    return map
  }, [table])
  React.useEffect(() => {
    for (const s of sections) {
      s.layer.renderer = (colorMode === 'schedule' ? scheduleRenderer(scheduledBySection.get(s.code) ?? [], cutoff) : RENDERERS[colorMode]) as any
    }
  }, [sections, colorMode, scheduledBySection, cutoff])

  // Slice tool in the view's top-right corner while «Cortar» is on.
  React.useEffect(() => {
    const view = viewRef.current
    if (!slicing || !view) return
    const slice = new Slice({ view })
    view.ui.add(slice, 'top-right')
    return () => { view.ui.remove(slice); slice.destroy() }
  }, [slicing, sections])

  // Orbit around the centre of the view; any drag or zoom by the user stops it.
  React.useEffect(() => {
    const view = viewRef.current
    if (!spinning || !view) return
    let frame = 0
    let last = performance.now()
    const turn = (now: number) => {
      const camera = view.camera.clone()
      camera.heading = (camera.heading + SPIN_DEGREES_PER_SECOND * (now - last) / 1000) % 360
      last = now
      view.goTo({ target: view.center, heading: camera.heading, tilt: camera.tilt, scale: view.scale }, { animate: false }).catch(() => null)
      frame = requestAnimationFrame(turn)
    }
    frame = requestAnimationFrame(turn)
    const stop = view.on(['drag', 'mouse-wheel'] as any, () => { setSpinning(false) })
    return () => { cancelAnimationFrame(frame); stop.remove() }
  }, [spinning])

  async function home () {
    const view = viewRef.current
    const extents = await Promise.all(sectionsRef.current.filter(s => s.layer.visible).map(async s => await s.layer.when().then(l => l.fullExtent, () => null)))
    const valid = extents.filter(Boolean)
    if (!view || !valid.length) return
    const union = valid.reduce((a, b) => a.clone().union(b))
    view.goTo({ target: union.expand(1.1), tilt: 55, heading: 15 }, { duration: 1200 }).catch(error => { console.warn('goTo', error) })
  }
  async function goTo (section: Section) {
    await section.layer.when()
    viewRef.current?.goTo({ target: section.layer.fullExtent, tilt: 60, heading: 20 }, { duration: 1200 }).catch(error => { console.warn('goTo', error) })
  }

  // ---------- Element table -> output data source ----------
  React.useEffect(() => {
    let cancelled = false
    fetch(`${server}/data/avance-elements.json`).then(async r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`)
      return await r.json()
    }).then(({ columns, rows }: { columns: string[], rows: any[][] }) => {
      if (cancelled) return
      const attributes = rows.map((row, i) => {
        const record: { [field: string]: any } = { [ID_FIELD]: i + 1 }
        columns.forEach((column, c) => { if (FIELD_NAMES.includes(column)) record[column] = row[c] })
        return record
      })
      const recordIdByElement = new Map(attributes.map(a => [`${a.Seccion}:${a.OID}`, a[ID_FIELD]]))
      const lon = columns.indexOf('lon'); const lat = columns.indexOf('lat')
      const matcher = new FeatureLayer({
        source: attributes.map((a, i) => new Graphic({ attributes: a, geometry: new Point({ longitude: rows[i][lon] ?? 0, latitude: rows[i][lat] ?? 0 }) })),
        objectIdField: ID_FIELD,
        geometryType: 'point',
        spatialReference: { wkid: 4326 },
        fields: FIELD_NAMES.map(name => ({
          name,
          type: name === ID_FIELD ? 'oid' : name.endsWith('Date') ? 'date' : ['OID', 'Avance', 'z'].includes(name) ? 'double' : 'string'
        })) as any
      })
      const loaded = { attributes, recordIdByElement, matcher }
      tableRef.current = loaded
      setTable(loaded)
    }).catch(error => { console.error(error); setStatusText(`No se pudo leer la tabla de elementos: ${error.message}`) })
    return () => { cancelled = true }
  }, [server])

  React.useEffect(() => {
    if (!ds || !table) return
    // Same mechanism as the Chart widget's output: records kept in the data source instance.
    ds.setSourceRecords(table.attributes.map(attributes => ds.buildRecord({ attributes } as any)))
    ds.setStatus(DataSourceStatus.Unloaded)
    ds.setCountStatus(DataSourceStatus.Unloaded)
    setQueryVersion(v => v + 1)
  }, [ds, table])

  // ---------- Filters set by other widgets, plus this panel's timelapse -> scene ----------
  React.useEffect(() => {
    if (!table) return
    let cancelled = false
    const experience = (ds?.getCurrentQueryParams() as any)?.where
    const where = [experience && experience !== '1=1' ? `(${experience as string})` : null, timelapse].filter(Boolean).join(' AND ')
    const apply = async () => {
      if (!where) {
        for (const s of sectionsRef.current) if (s.layerView) s.layerView.filter = null
        setVisibleCount(null)
        return
      }
      const ids = await table.matcher.queryObjectIds({ where })
      if (cancelled) return
      const bySection = new Map<string, number[]>()
      for (const id of ids) {
        const a = table.attributes[Number(id) - 1]
        if (!bySection.has(a.Seccion)) bySection.set(a.Seccion, [])
        bySection.get(a.Seccion).push(a.OID)
      }
      // Filtered-out elements are neither drawn nor returned by hitTest.
      for (const s of sectionsRef.current) if (s.layerView) s.layerView.filter = { objectIds: bySection.get(s.code) ?? [-1] } as any
      setVisibleCount(ids.length)
    }
    apply().catch(error => { console.error('filtro', error); setStatusText(`No se pudo aplicar el filtro: ${error.message}`) })
    return () => { cancelled = true }
  }, [ds, table, queryVersion, layerViewsReady, timelapse])

  // ---------- Selection (from any widget) -> highlight ----------
  React.useEffect(() => {
    for (const h of highlights.current) h.remove()
    highlights.current = []
    if (!table || !selection.length) return
    const bySection = new Map<string, number[]>()
    for (const id of selection.slice(0, HIGHLIGHT_LIMIT)) {
      const a = table.attributes[Number(id) - 1]
      if (!a) continue
      if (!bySection.has(a.Seccion)) bySection.set(a.Seccion, [])
      bySection.get(a.Seccion).push(a.OID)
    }
    for (const s of sectionsRef.current) {
      const oids = bySection.get(s.code)
      if (oids && s.layerView) highlights.current.push(s.layerView.highlight(oids))
    }
  }, [table, selection, layerViewsReady])

  // A click selects the element's record, so Table, List and Chart follow the 3D view.
  async function onSceneClick (event: __esri.ViewClickEvent) {
    const view = viewRef.current
    const layers = sectionsRef.current.filter(s => s.layer.visible).map(s => s.layer)
    const { results } = await view.hitTest(event, { include: layers })
    const hit = results.find(r => r.type === 'graphic') as __esri.GraphicHit
    const dataSource = dsRef.current
    if (!hit) { dataSource?.clearSelection(); setSelection([]); return }
    const section = sectionsRef.current.find(s => s.layer === hit.graphic.layer)
    const recordId = tableRef.current?.recordIdByElement.get(`${section.code}:${hit.graphic.getObjectId()}`)
    if (recordId == null) { setStatusText('El elemento no está en la tabla de avance: regenera avance-elements.json.'); return }
    if (dataSource) dataSource.selectRecordsByIds([recordId]); else setSelection([recordId])
  }
  const dsRef = React.useRef<FeatureLayerDataSource>(null)
  dsRef.current = ds

  // Hover card: one hitTest at a time, the latest pointer position wins.
  const hover = React.useRef<{ busy: boolean, next: __esri.ViewPointerMoveEvent }>({ busy: false, next: null })
  async function onPointerMove (event: __esri.ViewPointerMoveEvent) {
    hover.current.next = event
    if (hover.current.busy) return
    hover.current.busy = true
    try {
      while (hover.current.next) {
        const current = hover.current.next
        hover.current.next = null
        const view = viewRef.current
        if (!view) return
        const { results } = await view.hitTest(current, { include: sectionsRef.current.filter(s => s.layer.visible).map(s => s.layer) })
        const hit = results.find(r => r.type === 'graphic') as __esri.GraphicHit
        const section = hit && sectionsRef.current.find(s => s.layer === hit.graphic.layer)
        const recordId = section && tableRef.current?.recordIdByElement.get(`${section.code}:${hit.graphic.getObjectId()}`)
        setTip(recordId ? { x: current.x, y: current.y, a: tableRef.current.attributes[recordId - 1] } : null)
      }
    } catch { setTip(null) } finally { hover.current.busy = false }
  }

  // ---------- Panel ----------
  const total = table?.attributes.length ?? 0
  React.useEffect(() => {
    if (!table) return
    const filtered = visibleCount == null ? '' : ` · ${number(visibleCount)} visibles con el filtro de la experiencia`
    setStatusText(`${sections.length} secciones · ${number(total)} elementos${filtered}${outputId ? '' : ' · abre la configuración del widget para crear la fuente de datos'}`)
  }, [table, sections.length, total, visibleCount, outputId])

  const selected = selection.length === 1 && table ? table.attributes[Number(selection[0]) - 1] : null
  const statusCounts = React.useMemo(() => {
    const counts: { [status: string]: number } = {}
    for (const a of table?.attributes ?? []) counts[a.EstadoAvance] = (counts[a.EstadoAvance] ?? 0) + 1
    return counts
  }, [table])

  return (
    <div css={style} className="jimu-widget widget-avance-obra-3d">
      <div className="view" ref={container} />
      {tip && (
        <div className="tip" style={{ left: tip.x + 14, top: tip.y + 14 }}>
          <b>{tip.a.Family || tip.a.Categoria || 'Elemento'}{tip.a.Nivel ? ` · ${tip.a.Nivel}` : ''}</b>
          <i className="swatch" style={{ background: statusCss(tip.a.EstadoAvance) }} />{tip.a.EstadoAvance}{tip.a.Avance != null ? ` · ${number(tip.a.Avance)} %` : ''}<br />
          <i className="swatch" style={{ background: scheduleCss(scheduleClass(tip.a, cutoff)) }} />{scheduleClass(tip.a, cutoff)} al {isoDay(cutoff)}<br />
          {tip.a.Actividad && <React.Fragment><span>Actividad</span> {tip.a.Actividad}<br /></React.Fragment>}
          {(tip.a.FechaInicio || tip.a.FechaFin) && <React.Fragment><span>Programado</span> {tip.a.FechaInicio ?? '?'} → {tip.a.FechaFin ?? '?'}</React.Fragment>}
        </div>
      )}
      {useDataSource && (
        <DataSourceComponent
          widgetId={props.id}
          useDataSource={useDataSource}
          onDataSourceCreated={created => { setDs(created as FeatureLayerDataSource) }}
          onQueryRequired={() => { setQueryVersion(v => v + 1) }}
          onDataSourceInfoChange={() => { setQueryVersion(v => v + 1) }}
          onSelectionChange={(ids: ImmutableArray<string | number>) => { setSelection(ids ? ids.asMutable() : []) }}
        />
      )}
      {collapsed
        ? <button type="button" className="collapse" onClick={() => { setCollapsed(false) }}>Avance ▸</button>
        : (
          <div className="panel">
            <h2>Avance de obra · E15 · I16 · E16 <button type="button" style={{ float: 'right' }} onClick={() => { setCollapsed(true) }} title="Ocultar panel">◂</button></h2>
            <h3>Secciones</h3>
            {sections.map(s => (
              <label key={s.name}>
                <input type="checkbox" defaultChecked onChange={e => { s.layer.visible = e.target.checked }} />
                <span>{SECTION_LABELS[s.code] ?? s.name}</span>
                <button type="button" onClick={e => { e.preventDefault(); goTo(s) }}>Ir</button>
              </label>
            ))}
            <label>
              <input type="checkbox" checked={volumetryOn} onChange={e => { setVolumetryOn(e.target.checked); if (volumetryRef.current) volumetryRef.current.visible = e.target.checked }} />
              <span>Volumetría 2021 · fachadas</span>
            </label>
            <h3>Color</h3>
            <label><input type="radio" name={`${props.id}-color`} checked={colorMode === 'status'} onChange={() => { setColorMode('status') }} /><span>Estado de avance</span></label>
            <label><input type="radio" name={`${props.id}-color`} checked={colorMode === 'schedule'} onChange={() => { setColorMode('schedule') }} /><span>Cronograma (4D)</span></label>
            <label><input type="radio" name={`${props.id}-color`} checked={colorMode === 'source'} onChange={() => { setColorMode('source') }} /><span>Colores del modelo</span></label>
            {colorMode === 'status' && (
              <div className="legend">
                {STATUS.map(s => <div key={s.value}><i className="swatch" style={{ background: s.css }} />{s.value} · {number(statusCounts[s.value] ?? 0)}</div>)}
              </div>
            )}
            {colorMode === 'schedule' && (
              <SchedulePanel
                elements={table?.attributes ?? []}
                cutoff={cutoff}
                onCutoffChange={setCutoff}
                buildUp={buildUp}
                onBuildUpChange={setBuildUp}
                hideUnscheduled={hideUnscheduled}
                onHideUnscheduledChange={setHideUnscheduled}
              />
            )}
            <h3>Terreno · {groundOpacity} %</h3>
            <input type="range" min={0} max={100} step={5} value={groundOpacity} aria-label="Opacidad del terreno" onChange={e => { setGroundOpacity(Number(e.target.value)) }} />
            <label><input type="checkbox" checked={underground || groundOpacity < 100} disabled={groundOpacity < 100} onChange={e => { setUnderground(e.target.checked) }} /><span>Navegar bajo la superficie</span></label>
            <h3>Mapa base</h3>
            <select value={basemap} aria-label="Mapa base" onChange={e => { setBasemap(e.target.value) }}>
              {Object.entries(BASEMAPS).filter(([value]) => value !== 'scene' || parseWebScene(webSceneUrl)).map(([value, [label]]) => <option key={value} value={value}>{label}</option>)}
            </select>
            {basemapNote && <p className="note">{basemapNote}</p>}
            <h3>Elemento seleccionado</h3>
            {selected
              ? (
                <dl>
                  <dt>Estado</dt><dd><i className="swatch" style={{ background: statusCss(selected.EstadoAvance) }} />{selected.EstadoAvance}</dd>
                  {KEY_FIELDS.filter(([field]) => selected[field] != null && selected[field] !== '').map(([field, label]) => (
                    <React.Fragment key={field}><dt>{label}</dt><dd>{String(selected[field])}</dd></React.Fragment>
                  ))}
                </dl>
                )
              : <p className="note">{selection.length > 1 ? `${number(selection.length)} elementos seleccionados${selection.length > HIGHLIGHT_LIMIT ? ` (se resaltan ${number(HIGHLIGHT_LIMIT)})` : ''}.` : 'Haz clic en un elemento o selecciónalo en una tabla, lista o gráfico.'}</p>}
            <div className="tools">
              <button type="button" onClick={() => { home() }}>Encuadrar todo</button>
              <button type="button" aria-pressed={slicing} onClick={() => { setSlicing(!slicing) }} title="Plano de corte para ver el interior">Cortar</button>
              <button type="button" aria-pressed={spinning} onClick={() => { setSpinning(!spinning) }} title="Gira alrededor del centro de la vista; arrastrar lo detiene">Girar</button>
            </div>
            <p className="status" role="status">{statusText}</p>
          </div>
          )}
    </div>
  )
}
