// Basemaps of the progress viewer, ported from arcgis-poc/basemaps.js. The IDECA/UAECD 2025 orthophoto WMS only
// offers EPSG:4326, so each Web Mercator tile is requested from the service's REST exportImage through the
// Mapas Bogotá proxy (the direct serviciosgis host is unreliable).
import BaseTileLayer from 'esri/layers/BaseTileLayer'

const PROXY = 'https://catalogopmb.catastrobogota.gov.co/PMBWeb/proxy.jsp?'
const ORTHO_URL = 'https://serviciosgis.catastrobogota.gov.co/image/rest/services/imagenesfunciones/orthourbana2025funcion/ImageServer'
const TILE_SIZE = 256
const ATTRIBUTION = 'UAECD / IDECA · Ortofotomosaico urbano Bogotá 2025 (SDP, SIGLA S.A.S.) · CC BY 4.0'

const mercator = (lon: number, lat: number) => [6378137 * lon * Math.PI / 180, 6378137 * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))]

const OrthoTileLayer = (BaseTileLayer as any).createSubclass({
  properties: { coverage: null }, // [xmin, ymin, xmax, ymax] in Web Mercator, from the service extent
  async fetchTile (level: number, row: number, col: number, options?: { signal?: AbortSignal }) {
    const [xmin, ymin, xmax, ymax] = this.getTileBounds(level, row, col)
    const canvas = document.createElement('canvas')
    canvas.width = TILE_SIZE
    canvas.height = TILE_SIZE
    const c = this.coverage
    if (c && (xmax < c[0] || xmin > c[2] || ymax < c[1] || ymin > c[3])) return canvas // outside Bogotá: transparent
    const params = new URLSearchParams({
      bbox: [xmin, ymin, xmax, ymax].join(','), bboxSR: '3857', imageSR: '3857', size: `${TILE_SIZE},${TILE_SIZE}`,
      format: 'jpgpng', transparent: 'true', renderingRule: JSON.stringify({ rasterFunction: 'ColorBalance' }), f: 'image'
    })
    const response = await fetch(`${PROXY}${ORTHO_URL}/exportImage?${params.toString()}`, { signal: options?.signal })
    if (!response.ok) throw new Error(`Ortofoto ${response.status}`)
    const bitmap = await createImageBitmap(await response.blob())
    canvas.getContext('2d').drawImage(bitmap, 0, 0, TILE_SIZE, TILE_SIZE)
    bitmap.close()
    return canvas
  }
})

// value -> [label, Esri basemap id, IDECA orthophoto on top]; «scene» is the web scene's own basemap.
export const BASEMAPS: { [value: string]: [string, string, boolean] } = {
  scene: ['Del web scene', null, false],
  ideca: ['Ortofoto IDECA 2025 (5 cm)', 'satellite', true],
  satellite: ['Imágenes Esri', 'satellite', false],
  hybrid: ['Imágenes Esri con etiquetas', 'hybrid', false],
  topo: ['Topográfico', 'topo-vector', false],
  streets: ['Calles', 'streets-vector', false],
  gray: ['Gris claro', 'gray-vector', false],
  dark: ['Gris oscuro', 'dark-gray-vector', false],
  osm: ['OpenStreetMap', 'osm', false]
}

export function createBasemapSwitcher (map: __esri.Map, onNote: (note: string) => void) {
  const ortho = new OrthoTileLayer({ title: 'Ortofoto IDECA 2025', copyright: ATTRIBUTION, listMode: 'hide' })
  // Service extent, so tiles outside its coverage are never requested.
  fetch(`${PROXY}${ORTHO_URL}?f=json`).then(async response => await response.json()).then(({ extent: e }) => {
    if (e?.spatialReference?.wkid === 4326 || e?.spatialReference?.latestWkid === 4326) {
      ortho.coverage = [...mercator(e.xmin, e.ymin), ...mercator(e.xmax, e.ymax)]
    }
  }).catch(error => {
    console.warn('Ortofoto IDECA', error)
    onNote('No se pudo consultar la ortofoto IDECA (servicio o proxy sin respuesta). Se muestran las imágenes de Esri.')
  })
  let own: __esri.Basemap = null
  return (value: string) => {
    const [, basemap, withOrtho] = BASEMAPS[value] ?? BASEMAPS.ideca
    own = own ?? map.basemap // the first one replaced is the web scene's
    if (basemap) map.basemap = basemap as any
    else if (own) map.basemap = own
    if (withOrtho && !map.layers.includes(ortho)) map.layers.add(ortho, 0) // under every model and footprint layer
    if (!withOrtho) map.layers.remove(ortho)
    onNote(withOrtho ? 'UAECD / IDECA · imagen 31/08/2025 · GSD nativo 5 cm, visible al acercarse · CC BY 4.0. Fuera de Bogotá se ven las imágenes de Esri.' : '')
  }
}
