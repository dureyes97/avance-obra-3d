import type { ImmutableObject } from 'jimu-core'

export interface Config {
  /** Base URL of /data/avance-elements.json and /predial-station-footprints.json: the published site
   *  (dureyes97.github.io/avance-plmb) or the local arcgis-poc/serve.mjs, which also serves the scene layer packages. */
  serverUrl: string
  /** slpk.json group of the progress packages. */
  group: string
  /** Web scene viewer or item URL to draw on; its E15, I16, E16 and volumetry layers are used. Empty: the widget's own scene. */
  webSceneUrl?: string
}

export type IMConfig = ImmutableObject<Config>
