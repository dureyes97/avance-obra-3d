/** @jsx jsx */
import { React, jsx, css, getAppStore } from 'jimu-core'
import type { AllWidgetSettingProps } from 'jimu-for-builder'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { TextInput } from 'jimu-ui'
import type { IMConfig } from '../config'
import { outputDataSourceJson } from '../output-schema'

const style = css`
  .note { font-size: 12px; color: var(--ref-palette-neutral-1000); margin: 8px 0 0; line-height: 1.4; }
`

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const { id, config, onSettingChange } = props

  const save = React.useCallback((nextConfig: IMConfig) => {
    const label = getAppStore().getState().appStateInBuilder?.appConfig.widgets[id]?.label ?? 'Avance de obra 3D'
    // Registering the output data source here makes it selectable in Chart, Table, Filter and List settings.
    onSettingChange({ id, config: nextConfig }, [outputDataSourceJson(id, `Elementos de avance (${label})`)])
  }, [id, onSettingChange])

  React.useEffect(() => {
    if (!props.outputDataSources?.length) save(config)
  }, [props.outputDataSources, config, save])

  return (
    <div css={style} className="widget-setting-avance-obra-3d">
      <SettingSection title="Datos">
        <SettingRow flow="wrap" label="URL de los datos (sitio publicado o serve.mjs local)">
          <TextInput size="sm" value={config.serverUrl} onAcceptValue={value => { save(config.set('serverUrl', value.replace(/\/$/, ''))) }} />
        </SettingRow>
        <SettingRow flow="wrap" label="Grupo de paquetes (slpk.json)">
          <TextInput size="sm" value={config.group} onAcceptValue={value => { save(config.set('group', value)) }} />
        </SettingRow>
        <SettingRow flow="wrap" label="Web scene (URL del visor o del elemento; vacío = escena propia)">
          <TextInput size="sm" value={config.webSceneUrl ?? ''} onAcceptValue={value => { save(config.set('webSceneUrl', value.trim())) }} />
        </SettingRow>
        <p className="note">
          Con un web scene, el widget dibuja sobre esa escena y usa sus capas E15, I16, E16 y Volumetría.
          La tabla de elementos (avance y fechas) y las huellas prediales se leen de esta URL: el sitio
          https://dureyes97.github.io/avance-plmb o, para trabajar en local, http://localhost:8765.
          El widget crea la fuente de datos «Elementos de avance»: elígela en los widgets de Gráfico, Tabla, Filtro o Lista.
        </p>
      </SettingSection>
    </div>
  )
}

export default Setting
