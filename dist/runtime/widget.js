System.register(["jimu-core/emotion","jimu-core","esri/Map","esri/WebScene","esri/views/SceneView","esri/layers/SceneLayer","esri/layers/FeatureLayer","esri/layers/GraphicsLayer","esri/Graphic","esri/geometry/Point","esri/geometry/Polygon","esri/widgets/Slice","esri/layers/support/SceneFilter","esri/layers/BaseTileLayer"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Map__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_WebScene__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_views_SceneView__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_SceneLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Slice__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_support_SceneFilter__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_BaseTileLayer__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Map__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_WebScene__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_views_SceneView__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_SceneLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Slice__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_support_SceneFilter__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_BaseTileLayer__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_Map__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Map__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_WebScene__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_WebScene__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_views_SceneView__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_views_SceneView__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_layers_SceneLayer__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_SceneLayer__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_Graphic__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Graphic__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_widgets_Slice__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_Slice__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_layers_support_SceneFilter__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_support_SceneFilter__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_layers_BaseTileLayer__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_BaseTileLayer__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/avance-obra-3d/src/output-schema.ts"
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/avance-obra-3d/src/output-schema.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIELD_NAMES: () => (/* binding */ FIELD_NAMES),
/* harmony export */   ID_FIELD: () => (/* binding */ ID_FIELD),
/* harmony export */   outputDataSourceJson: () => (/* binding */ outputDataSourceJson)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
// Schema of the widget's output data source: one record per Revit element, columns of avance-elements.json.
// Shared by the setting (which registers the data source in the app config) and the runtime (which fills it).

const ID_FIELD = 'OBJECTID';
// [name, alias, kind]; names match the scene layer fields so the 3D view and the table describe the same element.
const COLUMNS = [
    [ID_FIELD, 'OBJECTID', 'oid'],
    ['OID', 'ObjectID en la capa de escena', 'number'],
    ['Seccion', 'Sección', 'string'],
    ['EstadoAvance', 'Estado de avance', 'string'],
    ['Avance', 'Avance (%)', 'number'],
    ['Actividad', 'Actividad', 'string'],
    ['ActividadNombre', 'Nombre de actividad', 'string'],
    ['Contratista', 'Contratista', 'string'],
    ['Categoria', 'Categoría Revit', 'string'],
    ['Nivel', 'Nivel', 'string'],
    ['Disciplina', 'Disciplina', 'string'],
    ['Modelo', 'Modelo Revit', 'string'],
    ['UE', 'Unidad de ejecución', 'string'],
    ['Family', 'Familia', 'string'],
    ['Type', 'Tipo', 'string'],
    ['IfcGUID', 'IfcGUID', 'string'],
    ['ExtId', 'ID de Revit', 'string'],
    ['FechaInicio', 'Inicio (texto)', 'string'],
    ['FechaFin', 'Fin (texto)', 'string'],
    ['FechaInicioDate', 'Inicio', 'date'],
    ['FechaFinDate', 'Fin', 'date'],
    ['z', 'Cota base (m)', 'number']
];
const TYPES = {
    oid: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number, jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.OID],
    number: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number, jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.Double],
    string: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String, jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.String],
    date: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Date, jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.Date]
};
const FIELD_NAMES = COLUMNS.map(([name]) => name);
function outputDataSourceJson(widgetId, label) {
    const fields = {};
    for (const [name, alias, kind] of COLUMNS) {
        const [type, esriType] = TYPES[kind];
        fields[name] = { jimuName: name, name, alias, type, esriType };
    }
    return {
        id: `${widgetId}_output`,
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer,
        label,
        isOutputFromWidget: true,
        isDataInDataSourceInstance: true, // the records live in the browser; no service, no portal item
        schema: { label, idField: ID_FIELD, fields }
    };
}


/***/ },

/***/ "./your-extensions/widgets/avance-obra-3d/src/runtime/avance-schedule-panel.tsx"
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/avance-obra-3d/src/runtime/avance-schedule-panel.tsx ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchedulePanel: () => (/* binding */ SchedulePanel)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _avance_schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avance-schedule */ "./your-extensions/widgets/avance-obra-3d/src/runtime/avance-schedule.ts");

/** @jsx jsx */
// Schedule (4D) controls of the Avance de obra 3D panel: cut-off date with playback, planned vs. reported progress,
// planned S-curve and breakdown by schedule class. The host owns the cut-off and the timelapse options and decides
// how to apply them.


const STEPS = [[1, '1 día'], [7, '1 semana'], [30, '1 mes']];
const FRAME_MS = 700;
const CURVE_POINTS = 80;
const number = (value, digits = 0) => Number(value).toLocaleString('es-CO', { maximumFractionDigits: digits, minimumFractionDigits: digits });
const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  font-size: 12px;
  h4 { font-size: 12px; font-weight: 600; margin: 10px 0 4px; }
  .date { display: flex; align-items: center; gap: 6px; }
  .date input[type=date] { flex: 1; min-width: 0; }
  button { font-size: 12px; padding: 2px 8px; border-radius: 4px; border: 1px solid currentColor; background: transparent; color: inherit; cursor: pointer; }
  button[aria-pressed=true] { background: rgba(78, 168, 255, 0.25); }
  input[type=range] { width: 100%; margin: 6px 0 2px; }
  .ends { display: flex; justify-content: space-between; font-size: 11px; opacity: 0.7; }
  .row { display: flex; align-items: center; gap: 6px; margin: 6px 0; }
  .row select { flex: 1; min-width: 0; }
  label { display: flex; align-items: center; gap: 6px; margin: 3px 0; cursor: pointer; }
  .kpis { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
  .kpi { border: 1px solid rgba(127, 140, 153, 0.35); border-radius: 5px; padding: 4px 6px; }
  .kpi small { display: block; font-size: 10px; opacity: 0.75; text-transform: uppercase; letter-spacing: 0.03em; }
  .kpi b { font-size: 17px; font-weight: 600; font-variant-numeric: tabular-nums; }
  .kpi.bad b { color: #ef6464; }
  .kpi.good b { color: #44c58a; }
  .bar { display: flex; height: 8px; border-radius: 3px; overflow: hidden; margin: 4px 0 6px; background: rgba(127, 140, 153, 0.2); }
  .classes div { display: flex; align-items: center; gap: 6px; margin: 2px 0; }
  .classes span { flex: 1; }
  .classes b { font-weight: normal; opacity: 0.75; font-variant-numeric: tabular-nums; }
  .swatch { width: 10px; height: 10px; border-radius: 2px; flex: none; display: inline-block; }
  svg { width: 100%; height: 90px; display: block; }
  .hint { opacity: 0.75; margin: 6px 0 0; line-height: 1.35; }
`;
function SchedulePanel(props) {
    var _a;
    const { elements, cutoff, onCutoffChange } = props;
    const [step, setStep] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(7);
    const [playing, setPlaying] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    // Slider from the first scheduled day to the later of the last scheduled day and today.
    const [first, last] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        const range = (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.scheduleRange)(elements);
        return range ? [range[0], Math.max(range[1], (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.today)())] : [(0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.today)() - 365 * _avance_schedule__WEBPACK_IMPORTED_MODULE_2__.DAY, (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.today)()];
    }, [elements]);
    // Timelapse: one step per frame until the last day.
    const latest = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(cutoff);
    latest.current = cutoff;
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (!playing)
            return;
        const timer = setInterval(() => {
            const next = Math.min(latest.current + step * _avance_schedule__WEBPACK_IMPORTED_MODULE_2__.DAY, last);
            onCutoffChange(next);
            if (next >= last)
                setPlaying(false);
        }, FRAME_MS);
        return () => { clearInterval(timer); };
    }, [playing, step, last, onCutoffChange]);
    const play = () => {
        if (!playing && cutoff >= last)
            onCutoffChange(first);
        setPlaying(!playing);
    };
    const pick = (ms) => { setPlaying(false); onCutoffChange((0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.toDay)(ms)); };
    const kpis = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        var _a, _b;
        const counts = {};
        let scheduled = 0;
        let planned = 0;
        let reported = 0;
        for (const a of elements) {
            const value = (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.scheduleClass)(a, cutoff);
            counts[value] = ((_a = counts[value]) !== null && _a !== void 0 ? _a : 0) + 1;
            const fraction = (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.plannedFraction)(a, cutoff);
            if (fraction == null)
                continue;
            scheduled++;
            planned += fraction;
            reported += Math.min(Math.max((_b = a.Avance) !== null && _b !== void 0 ? _b : 0, 0), 100) / 100;
        }
        return { counts, scheduled, planned: scheduled ? 100 * planned / scheduled : 0, reported: scheduled ? 100 * reported / scheduled : 0 };
    }, [elements, cutoff]);
    // Planned S-curve over the slider range; the reported value is a single point at today (the report date).
    const curve = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        const scheduled = elements.filter(a => a.FechaInicioDate != null || a.FechaFinDate != null);
        if (!scheduled.length)
            return '';
        const points = [];
        for (let i = 0; i <= CURVE_POINTS; i++) {
            const day = first + (last - first) * i / CURVE_POINTS;
            const mean = scheduled.reduce((sum, a) => sum + (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.plannedFraction)(a, day), 0) / scheduled.length;
            points.push(`${(100 * i / CURVE_POINTS).toFixed(2)},${(100 - 100 * mean).toFixed(2)}`);
        }
        return points.join(' ');
    }, [elements, first, last]);
    const xOf = (day) => last > first ? 100 * (day - first) / (last - first) : 0;
    const gap = kpis.planned - kpis.reported;
    const total = elements.length;
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { css: style, className: "avance-schedule-panel", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "date", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "date", value: (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.isoDay)(cutoff), min: (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.isoDay)(first), max: (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.isoDay)(last), "aria-label": "Fecha de corte", onChange: e => { const ms = Date.parse(e.target.value); if (!Number.isNaN(ms))
                            pick(ms); } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", onClick: () => { pick((0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.today)()); }, children: "Hoy" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "range", min: first, max: last, step: _avance_schedule__WEBPACK_IMPORTED_MODULE_2__.DAY, value: Math.min(Math.max(cutoff, first), last), "aria-label": "Fecha de corte", onChange: e => { pick(Number(e.target.value)); } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "ends", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.isoDay)(first) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.isoDay)(last) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", onClick: play, "aria-pressed": playing, children: playing ? '❚❚ Pausa' : '▶ Reproducir' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { value: step, "aria-label": "Paso de la reproducci\u00F3n", onChange: e => { setStep(Number(e.target.value)); }, children: STEPS.map(([days, label]) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", { value: days, children: [label, " por paso"] }, days)) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: props.buildUp, onChange: e => { props.onBuildUpChange(e.target.checked); } }), "Mostrar la obra a la fecha (oculta lo que a\u00FAn no inicia)"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: props.hideUnscheduled, onChange: e => { props.onHideUnscheduledChange(e.target.checked); } }), "Ocultar elementos sin programaci\u00F3n"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", { children: ["Al ", (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.isoDay)(cutoff)] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpis", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", { children: "Programado" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", { children: [number(kpis.planned, 1), " %"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi good", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", { children: "Real (\u00FAltimo reporte)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", { children: [number(kpis.reported, 1), " %"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `kpi ${gap > 0.05 ? 'bad' : 'good'}`, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", { children: gap > 0.05 ? 'Atraso' : 'Adelanto' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", { children: [number(Math.abs(gap), 1), " pts"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `kpi ${kpis.counts.Atrasado ? 'bad' : 'good'}`, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", { children: "Atrasados" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: number((_a = kpis.counts.Atrasado) !== null && _a !== void 0 ? _a : 0) })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: "Curva programada" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { viewBox: "-2 -4 104 108", preserveAspectRatio: "none", role: "img", "aria-label": `Curva de avance programado; al corte ${number(kpis.planned, 1)} %, real ${number(kpis.reported, 1)} %`, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "0", y1: "100", x2: "100", y2: "100", stroke: "currentColor", strokeOpacity: "0.3", vectorEffect: "non-scaling-stroke" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "0", y1: "0", x2: "100", y2: "0", stroke: "currentColor", strokeOpacity: "0.15", strokeDasharray: "2 2", vectorEffect: "non-scaling-stroke" }), curve && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", { points: curve, fill: "none", stroke: "#4ea8ff", strokeWidth: "2", vectorEffect: "non-scaling-stroke" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: xOf(cutoff), y1: "0", x2: xOf(cutoff), y2: "100", stroke: "#f2c94c", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: xOf((0,_avance_schedule__WEBPACK_IMPORTED_MODULE_2__.today)()), cy: 100 - kpis.reported, r: "2", fill: "#44c58a" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "ends", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Azul: programado \u00B7 Verde: real hoy" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Amarillo: corte" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", { children: ["Cronograma \u00B7 ", number(kpis.scheduled), " de ", number(total), " elementos con fechas"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "bar", "aria-hidden": "true", children: _avance_schedule__WEBPACK_IMPORTED_MODULE_2__.SCHEDULE.map(s => { var _a; return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { style: { width: `${100 * ((_a = kpis.counts[s.value]) !== null && _a !== void 0 ? _a : 0) / Math.max(total, 1)}%`, background: s.css } }, s.value); }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "classes", children: _avance_schedule__WEBPACK_IMPORTED_MODULE_2__.SCHEDULE.map(s => {
                    var _a;
                    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { title: s.note, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "swatch", style: { background: s.css } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: s.value }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: number((_a = kpis.counts[s.value]) !== null && _a !== void 0 ? _a : 0) })] }, s.value));
                }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "hint", children: "El programado sale de las fechas de actividad; el real es el \u00FAltimo % reportado, as\u00ED que antes de hoy compara el plan con lo que hay hoy." })] }));
}


/***/ },

/***/ "./your-extensions/widgets/avance-obra-3d/src/runtime/avance-schedule.ts"
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/avance-obra-3d/src/runtime/avance-schedule.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CUTOFF_STATE_KEY: () => (/* binding */ CUTOFF_STATE_KEY),
/* harmony export */   DAY: () => (/* binding */ DAY),
/* harmony export */   SCHEDULE: () => (/* binding */ SCHEDULE),
/* harmony export */   isoDay: () => (/* binding */ isoDay),
/* harmony export */   plannedFraction: () => (/* binding */ plannedFraction),
/* harmony export */   scheduleClass: () => (/* binding */ scheduleClass),
/* harmony export */   scheduleRange: () => (/* binding */ scheduleRange),
/* harmony export */   timelapseWhere: () => (/* binding */ timelapseWhere),
/* harmony export */   toDay: () => (/* binding */ toDay),
/* harmony export */   today: () => (/* binding */ today)
/* harmony export */ });
// Schedule (4D) rules of the Avance de obra 3D widget. The cut-off date lives in the app state under CUTOFF_STATE_KEY,
// so another widget of the experience can read or set it. Kept inside the widget so it installs as one folder (portal).
const CUTOFF_STATE_KEY = 'avance-4d';
const DAY = 86400000;
// Dates in avance-elements.json are UTC midnights (epoch ms), so cut-offs are handled as UTC days too.
const toDay = (ms) => Math.floor(ms / DAY) * DAY;
const today = () => toDay(Date.now());
const isoDay = (ms) => new Date(ms).toISOString().slice(0, 10);
const SCHEDULE = [
    { value: 'Construido', color: [68, 197, 138], css: '#44c58a', note: 'Terminado y con fin programado a la fecha' },
    { value: 'Atrasado', color: [239, 100, 100], css: '#ef6464', note: 'Fin programado vencido y avance menor a 100 %' },
    { value: 'En ejecución', color: [242, 201, 76], css: '#f2c94c', note: 'Entre el inicio y el fin programados' },
    { value: 'Inicia en 30 días', color: [78, 168, 255], css: '#4ea8ff', note: 'Inicio programado en los próximos 30 días' },
    { value: 'Más adelante', color: [96, 112, 128], css: '#607080', note: 'Inicio programado a más de 30 días' },
    { value: 'Sin programación', color: [154, 165, 177], css: '#9aa5b1', note: 'Sin fechas de actividad' }
];
const span = (a) => {
    var _a, _b;
    const start = (_a = a.FechaInicioDate) !== null && _a !== void 0 ? _a : a.FechaFinDate;
    const end = (_b = a.FechaFinDate) !== null && _b !== void 0 ? _b : a.FechaInicioDate;
    return start == null ? null : [start, Math.max(start, end)];
};
// Class of an element at the cut-off date. Avance is the latest report, so an element finished ahead of its planned
// end only counts as built from the report date (today) on. Without an end date an unfinished element is never late.
function scheduleClass(a, cutoff) {
    var _a;
    const dates = span(a);
    if (!dates)
        return 'Sin programación';
    const [start, end] = dates;
    const done = ((_a = a.Avance) !== null && _a !== void 0 ? _a : 0) >= 100;
    if (done && (end <= cutoff || cutoff >= today()))
        return 'Construido';
    if (end <= cutoff && a.FechaFinDate != null)
        return 'Atrasado';
    if (start <= cutoff)
        return 'En ejecución';
    return start - cutoff <= 30 * DAY ? 'Inicia en 30 días' : 'Más adelante';
}
// Share of the element's planned duration elapsed at the cut-off (0..1), or null without dates.
function plannedFraction(a, cutoff) {
    const dates = span(a);
    if (!dates)
        return null;
    const [start, end] = dates;
    if (cutoff >= end)
        return 1;
    if (cutoff < start)
        return 0;
    return (cutoff - start + DAY) / (end - start + DAY); // dates are inclusive days
}
// Where clause for «Mostrar la obra a la fecha» (hide what has not started) and «Ocultar sin programación»; null = all.
function timelapseWhere(cutoff, buildUp, hideUnscheduled) {
    const day = `timestamp '${isoDay(cutoff)} 00:00:00'`;
    const started = `(FechaInicioDate <= ${day} OR (FechaInicioDate IS NULL AND FechaFinDate <= ${day}))`;
    const unscheduled = '(FechaInicioDate IS NULL AND FechaFinDate IS NULL)';
    if (buildUp)
        return hideUnscheduled ? started : `(${started} OR ${unscheduled})`;
    return hideUnscheduled ? `NOT ${unscheduled}` : null;
}
// First and last scheduled day, for the cut-off slider.
function scheduleRange(rows) {
    let min = Infinity;
    let max = -Infinity;
    for (const a of rows) {
        const dates = span(a);
        if (!dates)
            continue;
        min = Math.min(min, dates[0]);
        max = Math.max(max, dates[1]);
    }
    return min === Infinity ? null : [min, max];
}


/***/ },

/***/ "./your-extensions/widgets/avance-obra-3d/src/runtime/basemaps.ts"
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/avance-obra-3d/src/runtime/basemaps.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASEMAPS: () => (/* binding */ BASEMAPS),
/* harmony export */   createBasemapSwitcher: () => (/* binding */ createBasemapSwitcher)
/* harmony export */ });
/* harmony import */ var esri_layers_BaseTileLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esri/layers/BaseTileLayer */ "esri/layers/BaseTileLayer");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Basemaps of the progress viewer, ported from arcgis-poc/basemaps.js. The IDECA/UAECD 2025 orthophoto WMS only
// offers EPSG:4326, so each Web Mercator tile is requested from the service's REST exportImage through the
// Mapas Bogotá proxy (the direct serviciosgis host is unreliable).

const PROXY = 'https://catalogopmb.catastrobogota.gov.co/PMBWeb/proxy.jsp?';
const ORTHO_URL = 'https://serviciosgis.catastrobogota.gov.co/image/rest/services/imagenesfunciones/orthourbana2025funcion/ImageServer';
const TILE_SIZE = 256;
const ATTRIBUTION = 'UAECD / IDECA · Ortofotomosaico urbano Bogotá 2025 (SDP, SIGLA S.A.S.) · CC BY 4.0';
const mercator = (lon, lat) => [6378137 * lon * Math.PI / 180, 6378137 * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))];
const OrthoTileLayer = esri_layers_BaseTileLayer__WEBPACK_IMPORTED_MODULE_0__["default"].createSubclass({
    properties: { coverage: null }, // [xmin, ymin, xmax, ymax] in Web Mercator, from the service extent
    fetchTile(level, row, col, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const [xmin, ymin, xmax, ymax] = this.getTileBounds(level, row, col);
            const canvas = document.createElement('canvas');
            canvas.width = TILE_SIZE;
            canvas.height = TILE_SIZE;
            const c = this.coverage;
            if (c && (xmax < c[0] || xmin > c[2] || ymax < c[1] || ymin > c[3]))
                return canvas; // outside Bogotá: transparent
            const params = new URLSearchParams({
                bbox: [xmin, ymin, xmax, ymax].join(','), bboxSR: '3857', imageSR: '3857', size: `${TILE_SIZE},${TILE_SIZE}`,
                format: 'jpgpng', transparent: 'true', renderingRule: JSON.stringify({ rasterFunction: 'ColorBalance' }), f: 'image'
            });
            const response = yield fetch(`${PROXY}${ORTHO_URL}/exportImage?${params.toString()}`, { signal: options === null || options === void 0 ? void 0 : options.signal });
            if (!response.ok)
                throw new Error(`Ortofoto ${response.status}`);
            const bitmap = yield createImageBitmap(yield response.blob());
            canvas.getContext('2d').drawImage(bitmap, 0, 0, TILE_SIZE, TILE_SIZE);
            bitmap.close();
            return canvas;
        });
    }
});
// value -> [label, Esri basemap id, IDECA orthophoto on top]; «scene» is the web scene's own basemap.
const BASEMAPS = {
    scene: ['Del web scene', null, false],
    ideca: ['Ortofoto IDECA 2025 (5 cm)', 'satellite', true],
    satellite: ['Imágenes Esri', 'satellite', false],
    hybrid: ['Imágenes Esri con etiquetas', 'hybrid', false],
    topo: ['Topográfico', 'topo-vector', false],
    streets: ['Calles', 'streets-vector', false],
    gray: ['Gris claro', 'gray-vector', false],
    dark: ['Gris oscuro', 'dark-gray-vector', false],
    osm: ['OpenStreetMap', 'osm', false]
};
function createBasemapSwitcher(map, onNote) {
    const ortho = new OrthoTileLayer({ title: 'Ortofoto IDECA 2025', copyright: ATTRIBUTION, listMode: 'hide' });
    // Service extent, so tiles outside its coverage are never requested.
    fetch(`${PROXY}${ORTHO_URL}?f=json`).then((response) => __awaiter(this, void 0, void 0, function* () { return yield response.json(); })).then(({ extent: e }) => {
        var _a, _b;
        if (((_a = e === null || e === void 0 ? void 0 : e.spatialReference) === null || _a === void 0 ? void 0 : _a.wkid) === 4326 || ((_b = e === null || e === void 0 ? void 0 : e.spatialReference) === null || _b === void 0 ? void 0 : _b.latestWkid) === 4326) {
            ortho.coverage = [...mercator(e.xmin, e.ymin), ...mercator(e.xmax, e.ymax)];
        }
    }).catch(error => {
        console.warn('Ortofoto IDECA', error);
        onNote('No se pudo consultar la ortofoto IDECA (servicio o proxy sin respuesta). Se muestran las imágenes de Esri.');
    });
    let own = null;
    return (value) => {
        var _a;
        const [, basemap, withOrtho] = (_a = BASEMAPS[value]) !== null && _a !== void 0 ? _a : BASEMAPS.ideca;
        own = own !== null && own !== void 0 ? own : map.basemap; // the first one replaced is the web scene's
        if (basemap)
            map.basemap = basemap;
        else if (own)
            map.basemap = own;
        if (withOrtho && !map.layers.includes(ortho))
            map.layers.add(ortho, 0); // under every model and footprint layer
        if (!withOrtho)
            map.layers.remove(ortho);
        onNote(withOrtho ? 'UAECD / IDECA · imagen 31/08/2025 · GSD nativo 5 cm, visible al acercarse · CC BY 4.0. Fuera de Bogotá se ven las imágenes de Esri.' : '');
    };
}


/***/ },

/***/ "./your-extensions/widgets/avance-obra-3d/src/runtime/package-footprint.ts"
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/avance-obra-3d/src/runtime/package-footprint.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   packageFootprint: () => (/* binding */ packageFootprint)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Ground footprint of a scene layer package, from the oriented bounding boxes of its leaf nodes (I3S node pages): one
// convex polygon per leaf, in WGS84. Used to hide the context volumetry where the stations are.
const A = 6378137;
const E2 = 6.69437999014e-3;
const toEcef = ([lon, lat, h]) => {
    const [l, p] = [lon * Math.PI / 180, lat * Math.PI / 180];
    const n = A / Math.sqrt(1 - E2 * Math.pow(Math.sin(p), 2));
    return [(n + h) * Math.cos(p) * Math.cos(l), (n + h) * Math.cos(p) * Math.sin(l), (n * (1 - E2) + h) * Math.sin(p)];
};
// Lon/lat of an ECEF point (a few fixed-point iterations are plenty at building heights).
const toLonLat = ([x, y, z]) => {
    const r = Math.hypot(x, y);
    let lat = Math.atan2(z, r * (1 - E2));
    for (let i = 0; i < 4; i++) {
        const n = A / Math.sqrt(1 - E2 * Math.pow(Math.sin(lat), 2));
        lat = Math.atan2(z + E2 * n * Math.sin(lat), r);
    }
    return [Math.atan2(y, x) * 180 / Math.PI, lat * 180 / Math.PI];
};
// Rotates v by the unit quaternion [x, y, z, w].
const rotate = ([qx, qy, qz, qw], v) => {
    const t = [2 * (qy * v[2] - qz * v[1]), 2 * (qz * v[0] - qx * v[2]), 2 * (qx * v[1] - qy * v[0])];
    return [v[0] + qw * t[0] + qy * t[2] - qz * t[1], v[1] + qw * t[1] + qz * t[0] - qx * t[2], v[2] + qw * t[2] + qx * t[1] - qy * t[0]];
};
const hull = (points) => {
    const sorted = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const half = (list) => {
        const out = [];
        for (const p of list) {
            while (out.length >= 2 && cross(out[out.length - 2], out[out.length - 1], p) <= 0)
                out.pop();
            out.push(p);
        }
        out.pop();
        return out;
    };
    return [...half(sorted), ...half([...sorted].reverse())];
};
const obbRing = (obb) => {
    const center = toEcef(obb.center);
    const corners = [];
    for (let i = 0; i < 8; i++) {
        const signs = [i & 1 ? 1 : -1, i & 2 ? 1 : -1, i & 4 ? 1 : -1];
        const offset = rotate(obb.quaternion, [signs[0] * obb.halfSize[0], signs[1] * obb.halfSize[1], signs[2] * obb.halfSize[2]]);
        corners.push(toLonLat([center[0] + offset[0], center[1] + offset[1], center[2] + offset[2]]));
    }
    const ring = hull(corners);
    return [...ring, ring[0]];
};
// Approximate area in m² of a small lon/lat ring.
const area = (ring) => {
    const kx = 111320 * Math.cos(ring[0][1] * Math.PI / 180);
    let sum = 0;
    for (let i = 0; i < ring.length - 1; i++)
        sum += kx * ring[i][0] * 110574 * ring[i + 1][1] - kx * ring[i + 1][0] * 110574 * ring[i][1];
    return Math.abs(sum / 2);
};
// A leaf box this large spans a whole corridor (e.g. 884 × 54 m in I16) and would hide the buildings along it; the
// smaller leaves around it already cover the structure.
const MAX_LEAF_AREA = 20000;
// Rings of the leaf boxes of a WGS84 scene layer (…/SceneServer/layers/0); empty when the node pages can't be read.
function packageFootprint(layerUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const rings = [];
        for (let page = 0;; page++) {
            const response = yield fetch(`${layerUrl}/nodepages/${page}`).catch(() => null);
            if (!(response === null || response === void 0 ? void 0 : response.ok))
                break;
            const { nodes } = yield response.json();
            for (const node of nodes !== null && nodes !== void 0 ? nodes : []) {
                if (!node.mesh || ((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) || !node.obb)
                    continue;
                const ring = obbRing(node.obb);
                if (area(ring) <= MAX_LEAF_AREA)
                    rings.push(ring);
            }
            if (!(nodes === null || nodes === void 0 ? void 0 : nodes.length))
                break;
        }
        return rings;
    });
}


/***/ },

/***/ "esri/Graphic"
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Graphic__;

/***/ },

/***/ "esri/Map"
/*!***************************!*\
  !*** external "esri/Map" ***!
  \***************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Map__;

/***/ },

/***/ "esri/WebScene"
/*!********************************!*\
  !*** external "esri/WebScene" ***!
  \********************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_WebScene__;

/***/ },

/***/ "esri/geometry/Point"
/*!**************************************!*\
  !*** external "esri/geometry/Point" ***!
  \**************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__;

/***/ },

/***/ "esri/geometry/Polygon"
/*!****************************************!*\
  !*** external "esri/geometry/Polygon" ***!
  \****************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__;

/***/ },

/***/ "esri/layers/BaseTileLayer"
/*!********************************************!*\
  !*** external "esri/layers/BaseTileLayer" ***!
  \********************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_BaseTileLayer__;

/***/ },

/***/ "esri/layers/FeatureLayer"
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;

/***/ },

/***/ "esri/layers/GraphicsLayer"
/*!********************************************!*\
  !*** external "esri/layers/GraphicsLayer" ***!
  \********************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__;

/***/ },

/***/ "esri/layers/SceneLayer"
/*!*****************************************!*\
  !*** external "esri/layers/SceneLayer" ***!
  \*****************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_SceneLayer__;

/***/ },

/***/ "esri/layers/support/SceneFilter"
/*!**************************************************!*\
  !*** external "esri/layers/support/SceneFilter" ***!
  \**************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_support_SceneFilter__;

/***/ },

/***/ "esri/views/SceneView"
/*!***************************************!*\
  !*** external "esri/views/SceneView" ***!
  \***************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_views_SceneView__;

/***/ },

/***/ "esri/widgets/Slice"
/*!*************************************!*\
  !*** external "esri/widgets/Slice" ***!
  \*************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_Slice__;

/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/avance-obra-3d/src/runtime/widget.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var esri_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/Map */ "esri/Map");
/* harmony import */ var esri_WebScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/WebScene */ "esri/WebScene");
/* harmony import */ var esri_views_SceneView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/views/SceneView */ "esri/views/SceneView");
/* harmony import */ var esri_layers_SceneLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/layers/SceneLayer */ "esri/layers/SceneLayer");
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/layers/GraphicsLayer */ "esri/layers/GraphicsLayer");
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/Graphic */ "esri/Graphic");
/* harmony import */ var esri_geometry_Point__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! esri/geometry/Point */ "esri/geometry/Point");
/* harmony import */ var esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! esri/geometry/Polygon */ "esri/geometry/Polygon");
/* harmony import */ var esri_widgets_Slice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! esri/widgets/Slice */ "esri/widgets/Slice");
/* harmony import */ var esri_layers_support_SceneFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! esri/layers/support/SceneFilter */ "esri/layers/support/SceneFilter");
/* harmony import */ var _avance_schedule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./avance-schedule */ "./your-extensions/widgets/avance-obra-3d/src/runtime/avance-schedule.ts");
/* harmony import */ var _avance_schedule_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./avance-schedule-panel */ "./your-extensions/widgets/avance-obra-3d/src/runtime/avance-schedule-panel.tsx");
/* harmony import */ var _output_schema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../output-schema */ "./your-extensions/widgets/avance-obra-3d/src/output-schema.ts");
/* harmony import */ var _basemaps__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./basemaps */ "./your-extensions/widgets/avance-obra-3d/src/runtime/basemaps.ts");
/* harmony import */ var _package_footprint__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./package-footprint */ "./your-extensions/widgets/avance-obra-3d/src/runtime/package-footprint.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/** @jsx jsx */
// Construction progress of E15, I16 and E16 (Revit CON-CN models as 3D object scene layers served locally by
// arcgis-poc/serve.mjs) plus an output data source with one record per element, filled in the browser from
// /data/avance-elements.json. Native Chart, Table, Filter and List widgets use that data source; this widget keeps
// the 3D view in step with it: filters from other widgets hide elements, selections are highlighted, and a click in
// the scene selects the element's record. Nothing is read from or written to a portal.

















// Status rule of build_avance.py: no % -> Sin dato, >= 100 -> Terminado, <= 0 -> No iniciado, else En curso.
const STATUS = [
    { value: 'Terminado', color: [68, 197, 138], css: '#44c58a' },
    { value: 'En curso', color: [242, 201, 76], css: '#f2c94c' },
    { value: 'No iniciado', color: [239, 100, 100], css: '#ef6464' },
    { value: 'Sin dato', color: [154, 165, 177], css: '#9aa5b1' }
];
const SECTION_LABELS = { E15: 'Estación 15 · Calle 63', I16: 'Interestación 16 · viaducto', E16: 'Estación 16 · Calle 72' };
const KEY_FIELDS = [
    ['Avance', 'Avance (%)'], ['Actividad', 'Actividad'], ['ActividadNombre', 'Nombre de actividad'], ['FechaInicio', 'Inicio'],
    ['FechaFin', 'Fin'], ['Contratista', 'Contratista'], ['UE', 'Unidad de ejecución'], ['Categoria', 'Categoría'], ['Family', 'Familia'],
    ['Type', 'Tipo'], ['Nivel', 'Nivel'], ['IfcGUID', 'IfcGUID'], ['ExtId', 'ID de Revit'], ['Seccion', 'Sección'], ['Modelo', 'Modelo Revit']
];
// Hosted scene layers of the same progress packages (public, gov-esri-co portal items 0b569dac…, d6ed0c07…, 44c4cd17…);
// sections without one load from the local serve.mjs. Same OBJECTID_1, so avance-elements.json still matches them.
const HOSTED_SECTIONS = {
    E15: 'https://tiles.arcgis.com/tiles/BQTQBNBsmxjF8vus/arcgis/rest/services/E15_Avance_3DObject/SceneServer/layers/0',
    I16: 'https://tiles.arcgis.com/tiles/BQTQBNBsmxjF8vus/arcgis/rest/services/I16_Avance_3DObject_/SceneServer/layers/0',
    E16: 'https://tiles.arcgis.com/tiles/BQTQBNBsmxjF8vus/arcgis/rest/services/E16_Avance_3DObject/SceneServer/layers/0'
};
const sectionUrl = (server, name) => { var _a; return (_a = HOSTED_SECTIONS[name.replace(/^AV_/, '')]) !== null && _a !== void 0 ? _a : `${server}/slpk/${name}/SceneServer/layers/0`; };
// Default scene to draw on: «Avance de obra - PLMB» in the SDP portal, which holds the three services and the volumetry.
const DEFAULT_WEB_SCENE = 'https://sinupotdes.sdp.gov.co/portalp/home/webscene/viewer.html?webscene=839de5bdfa814f60b2a1baa743bc7f56';
// Portal URL and item id from a web scene viewer or item URL.
const parseWebScene = (url) => {
    var _a;
    const id = (_a = url === null || url === void 0 ? void 0 : url.match(/(?:webscene|id)=([0-9a-f]{32})/i)) === null || _a === void 0 ? void 0 : _a[1];
    return id ? { portalUrl: url.split(/\/(?:home|apps)\//)[0], id } : null;
};
const serviceUrl = (url) => url === null || url === void 0 ? void 0 : url.replace(/\/layers\/\d+\/?$/, '').replace(/\/$/, '').toLowerCase();
// The scene layer of a map that points to the given service, if any.
const findSceneLayer = (map, url) => map.allLayers.find(l => l.type === 'scene' && serviceUrl(l.url) === serviceUrl(url));
// Public building volumetry (facades) from the Esri Colombia portal, item 935c0605d691425ab55fd4e63c8c544d.
const VOLUMETRY_URL = 'https://arcgis.esri.co/server/rest/services/Hosted/Volumetria_2021__Octubre_2026_Fachada/SceneServer/layers/0';
const HIGHLIGHT_LIMIT = 5000; // larger selections are counted but not highlighted, to keep the view responsive
const meshFill = (color) => ({ type: 'mesh-3d', symbolLayers: [{ type: 'fill', material: color ? { color, colorMixMode: 'replace' } : undefined }] });
const RENDERERS = {
    status: {
        type: 'unique-value',
        field: 'EstadoAvance',
        uniqueValueInfos: STATUS.map(s => ({ value: s.value, label: s.value, symbol: meshFill([...s.color, s.value === 'Sin dato' ? 0.55 : 1]) })),
        defaultSymbol: meshFill([154, 165, 177, 0.55])
    },
    // Package drawingInfo carries a polygon-3d renderer, which 3D object layers reject; draw with source colours.
    source: { type: 'simple', symbol: meshFill(null) }
};
// Schedule colours depend on the cut-off date, so each section gets a unique-value renderer on its object ids; only
// elements with activity dates are listed, the rest take the «Sin programación» default.
function scheduleRenderer(elements, cutoff) {
    const byClass = new Map();
    for (const a of elements) {
        const value = (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_13__.scheduleClass)(a, cutoff);
        if (!byClass.has(value))
            byClass.set(value, []);
        byClass.get(value).push(a.OID);
    }
    const symbols = new Map(_avance_schedule__WEBPACK_IMPORTED_MODULE_13__.SCHEDULE.map(s => [s.value, meshFill([...s.color, s.value === 'Sin programación' ? 0.35 : 1])]));
    return {
        type: 'unique-value',
        field: 'OBJECTID_1',
        uniqueValueInfos: [...byClass].flatMap(([value, oids]) => oids.map(oid => ({ value: oid, label: value, symbol: symbols.get(value) }))),
        defaultSymbol: symbols.get('Sin programación')
    };
}
const number = (value) => Number(value).toLocaleString('es-CO');
const statusCss = (value) => { var _a, _b; return (_b = (_a = STATUS.find(s => s.value === value)) === null || _a === void 0 ? void 0 : _a.css) !== null && _b !== void 0 ? _b : '#9aa5b1'; };
const scheduleCss = (value) => { var _a, _b; return (_b = (_a = _avance_schedule__WEBPACK_IMPORTED_MODULE_13__.SCHEDULE.find(s => s.value === value)) === null || _a === void 0 ? void 0 : _a.css) !== null && _b !== void 0 ? _b : '#9aa5b1'; };
const SPIN_DEGREES_PER_SECOND = 6;
const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
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
`;
function Widget(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const server = ((_b = (_a = props.config) === null || _a === void 0 ? void 0 : _a.serverUrl) !== null && _b !== void 0 ? _b : 'https://dureyes97.github.io/avance-plmb').replace(/\/$/, '');
    const group = (_d = (_c = props.config) === null || _c === void 0 ? void 0 : _c.group) !== null && _d !== void 0 ? _d : 'avance';
    const webSceneUrl = (_f = (_e = props.config) === null || _e === void 0 ? void 0 : _e.webSceneUrl) !== null && _f !== void 0 ? _f : DEFAULT_WEB_SCENE;
    const outputId = (_g = props.outputDataSources) === null || _g === void 0 ? void 0 : _g[0];
    const useDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => outputId ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)({ dataSourceId: outputId, mainDataSourceId: outputId }) : null, [outputId]);
    const container = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(null);
    const viewRef = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(null);
    const sectionsRef = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef([]);
    const highlights = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef([]);
    const tableRef = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(null);
    const switchBasemap = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(null);
    const volumetryRef = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(null);
    const [ds, setDs] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [table, setTable] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [sections, setSections] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState([]);
    const [layerViewsReady, setLayerViewsReady] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(0);
    const [queryVersion, setQueryVersion] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(0);
    const [selection, setSelection] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState([]);
    const [colorMode, setColorMode] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('schedule');
    // Cut-off date in the app state, shared with the Avance 4D widget if it is also in the experience.
    const sharedCutoff = jimu_core__WEBPACK_IMPORTED_MODULE_1__.ReactRedux.useSelector((state) => { var _a, _b; return (_b = (_a = state.widgetsState) === null || _a === void 0 ? void 0 : _a[_avance_schedule__WEBPACK_IMPORTED_MODULE_13__.CUTOFF_STATE_KEY]) === null || _b === void 0 ? void 0 : _b.cutoff; });
    const cutoff = sharedCutoff !== null && sharedCutoff !== void 0 ? sharedCutoff : (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_13__.today)();
    const setCutoff = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((value) => { (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_1__.appActions.widgetStatePropChange(_avance_schedule__WEBPACK_IMPORTED_MODULE_13__.CUTOFF_STATE_KEY, 'cutoff', value)); }, []);
    const [buildUp, setBuildUp] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [hideUnscheduled, setHideUnscheduled] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const timelapse = colorMode === 'schedule' ? (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_13__.timelapseWhere)(cutoff, buildUp, hideUnscheduled) : null;
    const [tip, setTip] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [slicing, setSlicing] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [spinning, setSpinning] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [groundOpacity, setGroundOpacity] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(100);
    const [underground, setUnderground] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [basemap, setBasemap] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(parseWebScene(webSceneUrl) ? 'scene' : 'ideca');
    const [volumetryOn, setVolumetryOn] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(true);
    const [basemapNote, setBasemapNote] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('');
    const [statusText, setStatusText] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('Iniciando…');
    const [visibleCount, setVisibleCount] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [collapsed, setCollapsed] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    // ---------- Scene and local packages ----------
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        let cancelled = false;
        const footprintLayer = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_7__["default"]({ title: 'Huellas CAD', elevationInfo: { mode: 'on-the-ground' } });
        const sceneItem = parseWebScene(webSceneUrl);
        const map = sceneItem
            ? new esri_WebScene__WEBPACK_IMPORTED_MODULE_3__["default"]({ portalItem: { id: sceneItem.id, portal: { url: sceneItem.portalUrl } } })
            : new esri_Map__WEBPACK_IMPORTED_MODULE_2__["default"]({ basemap: 'satellite', ground: 'world-elevation' });
        switchBasemap.current = (0,_basemaps__WEBPACK_IMPORTED_MODULE_16__.createBasemapSwitcher)(map, setBasemapNote);
        const view = new esri_views_SceneView__WEBPACK_IMPORTED_MODULE_4__["default"](Object.assign(Object.assign({ container: container.current, map, qualityProfile: 'high', environment: { lighting: { type: 'virtual' } } }, (sceneItem ? {} : { camera: { position: { longitude: -74.0662, latitude: 4.6440, z: 3050 }, heading: 15, tilt: 55 } })), { ui: { components: ['zoom', 'compass'] } }));
        viewRef.current = view;
        Promise.all([
            // Sections: the web scene's layers of the progress services, or the local packages listed by serve.mjs.
            sceneItem
                ? map.load().then(() => Object.keys(HOSTED_SECTIONS).map(code => `AV_${code}`))
                : fetch(`${server}/slpk/index.json?group=${encodeURIComponent(group)}`).then((r) => __awaiter(this, void 0, void 0, function* () { return r.ok ? yield r.json() : []; })),
            fetch(`${server}/predial-station-footprints.json`).then((r) => __awaiter(this, void 0, void 0, function* () { return r.ok ? yield r.json() : { stations: [] }; }), () => ({ stations: [] }))
        ]).then(([names, footprints]) => {
            var _a;
            if (cancelled)
                return;
            if (!names.length) {
                setStatusText(`No hay paquetes del grupo «${group}» en ${server}. ¿Está corriendo serve.mjs?`);
                return;
            }
            const volumetry = (_a = findSceneLayer(map, VOLUMETRY_URL)) !== null && _a !== void 0 ? _a : new esri_layers_SceneLayer__WEBPACK_IMPORTED_MODULE_5__["default"]({ url: VOLUMETRY_URL });
            volumetry.set({ title: 'Volumetría 2021 · fachadas', popupEnabled: false });
            if (!map.layers.includes(volumetry))
                map.add(volumetry, 0);
            volumetryRef.current = volumetry;
            setVolumetryOn(volumetry.visible);
            map.add(footprintLayer);
            const stationRings = [];
            const list = names.map(name => {
                var _a, _b, _c, _d, _e;
                const code = name.replace(/^AV_/, '');
                const url = sectionUrl(server, name);
                const layer = (_a = findSceneLayer(map, url)) !== null && _a !== void 0 ? _a : new esri_layers_SceneLayer__WEBPACK_IMPORTED_MODULE_5__["default"]({ url });
                layer.set({ title: (_b = SECTION_LABELS[code]) !== null && _b !== void 0 ? _b : name, outFields: ['*'], popupEnabled: false, visible: true, renderer: RENDERERS.status });
                if (!map.allLayers.includes(layer))
                    map.add(layer);
                for (const part of (_e = (_d = (_c = footprints.stations) === null || _c === void 0 ? void 0 : _c.find(s => s.station === code)) === null || _d === void 0 ? void 0 : _d.parts) !== null && _e !== void 0 ? _e : []) {
                    stationRings.push(part.coordinates);
                    footprintLayer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_8__["default"]({
                        geometry: new esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_10__["default"]({ rings: [part.coordinates], spatialReference: { wkid: 4326 } }),
                        symbol: { type: 'simple-fill', color: [255, 159, 67, 0.2], outline: { color: [255, 209, 161], width: 1.2 } }
                    }));
                }
                return { name, code, layer };
            });
            sectionsRef.current = list;
            setSections(list);
            // Hide the volumetry buildings that touch a station: predial footprints plus the packages' own leaf boxes.
            Promise.all(names.map((name) => __awaiter(this, void 0, void 0, function* () { return yield (0,_package_footprint__WEBPACK_IMPORTED_MODULE_17__.packageFootprint)(sectionUrl(server, name)); }))).then(packages => {
                if (cancelled)
                    return;
                const rings = [...stationRings, ...packages.flat()];
                volumetry.filter = new esri_layers_support_SceneFilter__WEBPACK_IMPORTED_MODULE_12__["default"]({
                    geometries: rings.map(ring => new esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_10__["default"]({ rings: [ring], spatialReference: { wkid: 4326 } })),
                    spatialRelationship: 'disjoint'
                });
            }, error => { console.warn('volumetry filter', error); });
            for (const section of list) {
                view.whenLayerView(section.layer).then(layerView => {
                    section.layerView = layerView;
                    setLayerViewsReady(n => n + 1);
                }, error => { console.error(section.name, error); setStatusText(`No se pudo cargar ${section.name}: ${error.message}`); });
            }
            if (!sceneItem)
                view.when(() => { home(); }, (error) => { console.warn('SceneView', error); });
        }, error => {
            console.error(error);
            setStatusText(sceneItem ? `No se pudo abrir el web scene: ${error.message}` : `No se pudo leer ${server}: ${error.message}. Inicia serve.mjs.`);
        });
        view.on('click', event => { onSceneClick(event); });
        view.on('pointer-move', event => { onPointerMove(event); });
        view.on('pointer-leave', () => { setTip(null); });
        return () => { cancelled = true; view.destroy(); viewRef.current = null; };
    }, [server, group, webSceneUrl]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => { var _a; (_a = switchBasemap.current) === null || _a === void 0 ? void 0 : _a.call(switchBasemap, basemap); }, [basemap]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        var _a;
        const ground = (_a = viewRef.current) === null || _a === void 0 ? void 0 : _a.map.ground;
        if (!ground)
            return;
        ground.opacity = groundOpacity / 100;
        // A see-through surface is only useful if the camera may also go below it.
        ground.navigationConstraint = { type: underground || groundOpacity < 100 ? 'none' : 'stay-above' };
    }, [groundOpacity, underground]);
    // Scheduled elements per section, for the schedule renderer.
    const scheduledBySection = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        var _a;
        const map = new Map();
        for (const a of (_a = table === null || table === void 0 ? void 0 : table.attributes) !== null && _a !== void 0 ? _a : []) {
            if (a.FechaInicioDate == null && a.FechaFinDate == null)
                continue;
            if (!map.has(a.Seccion))
                map.set(a.Seccion, []);
            map.get(a.Seccion).push(a);
        }
        return map;
    }, [table]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        var _a;
        for (const s of sections) {
            s.layer.renderer = (colorMode === 'schedule' ? scheduleRenderer((_a = scheduledBySection.get(s.code)) !== null && _a !== void 0 ? _a : [], cutoff) : RENDERERS[colorMode]);
        }
    }, [sections, colorMode, scheduledBySection, cutoff]);
    // Slice tool in the view's top-right corner while «Cortar» is on.
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        const view = viewRef.current;
        if (!slicing || !view)
            return;
        const slice = new esri_widgets_Slice__WEBPACK_IMPORTED_MODULE_11__["default"]({ view });
        view.ui.add(slice, 'top-right');
        return () => { view.ui.remove(slice); slice.destroy(); };
    }, [slicing, sections]);
    // Orbit around the centre of the view; any drag or zoom by the user stops it.
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        const view = viewRef.current;
        if (!spinning || !view)
            return;
        let frame = 0;
        let last = performance.now();
        const turn = (now) => {
            const camera = view.camera.clone();
            camera.heading = (camera.heading + SPIN_DEGREES_PER_SECOND * (now - last) / 1000) % 360;
            last = now;
            view.goTo({ target: view.center, heading: camera.heading, tilt: camera.tilt, scale: view.scale }, { animate: false }).catch(() => null);
            frame = requestAnimationFrame(turn);
        };
        frame = requestAnimationFrame(turn);
        const stop = view.on(['drag', 'mouse-wheel'], () => { setSpinning(false); });
        return () => { cancelAnimationFrame(frame); stop.remove(); };
    }, [spinning]);
    function home() {
        return __awaiter(this, void 0, void 0, function* () {
            const view = viewRef.current;
            const extents = yield Promise.all(sectionsRef.current.filter(s => s.layer.visible).map((s) => __awaiter(this, void 0, void 0, function* () { return yield s.layer.when().then(l => l.fullExtent, () => null); })));
            const valid = extents.filter(Boolean);
            if (!view || !valid.length)
                return;
            const union = valid.reduce((a, b) => a.clone().union(b));
            view.goTo({ target: union.expand(1.1), tilt: 55, heading: 15 }, { duration: 1200 }).catch(error => { console.warn('goTo', error); });
        });
    }
    function goTo(section) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            yield section.layer.when();
            (_a = viewRef.current) === null || _a === void 0 ? void 0 : _a.goTo({ target: section.layer.fullExtent, tilt: 60, heading: 20 }, { duration: 1200 }).catch(error => { console.warn('goTo', error); });
        });
    }
    // ---------- Element table -> output data source ----------
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        let cancelled = false;
        fetch(`${server}/data/avance-elements.json`).then((r) => __awaiter(this, void 0, void 0, function* () {
            if (!r.ok)
                throw new Error(`HTTP ${r.status}`);
            return yield r.json();
        })).then(({ columns, rows }) => {
            if (cancelled)
                return;
            const attributes = rows.map((row, i) => {
                const record = { [_output_schema__WEBPACK_IMPORTED_MODULE_15__.ID_FIELD]: i + 1 };
                columns.forEach((column, c) => { if (_output_schema__WEBPACK_IMPORTED_MODULE_15__.FIELD_NAMES.includes(column))
                    record[column] = row[c]; });
                return record;
            });
            const recordIdByElement = new Map(attributes.map(a => [`${a.Seccion}:${a.OID}`, a[_output_schema__WEBPACK_IMPORTED_MODULE_15__.ID_FIELD]]));
            const lon = columns.indexOf('lon');
            const lat = columns.indexOf('lat');
            const matcher = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_6__["default"]({
                source: attributes.map((a, i) => { var _a, _b; return new esri_Graphic__WEBPACK_IMPORTED_MODULE_8__["default"]({ attributes: a, geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_9__["default"]({ longitude: (_a = rows[i][lon]) !== null && _a !== void 0 ? _a : 0, latitude: (_b = rows[i][lat]) !== null && _b !== void 0 ? _b : 0 }) }); }),
                objectIdField: _output_schema__WEBPACK_IMPORTED_MODULE_15__.ID_FIELD,
                geometryType: 'point',
                spatialReference: { wkid: 4326 },
                fields: _output_schema__WEBPACK_IMPORTED_MODULE_15__.FIELD_NAMES.map(name => ({
                    name,
                    type: name === _output_schema__WEBPACK_IMPORTED_MODULE_15__.ID_FIELD ? 'oid' : name.endsWith('Date') ? 'date' : ['OID', 'Avance', 'z'].includes(name) ? 'double' : 'string'
                }))
            });
            const loaded = { attributes, recordIdByElement, matcher };
            tableRef.current = loaded;
            setTable(loaded);
        }).catch(error => { console.error(error); setStatusText(`No se pudo leer la tabla de elementos: ${error.message}`); });
        return () => { cancelled = true; };
    }, [server]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (!ds || !table)
            return;
        // Same mechanism as the Chart widget's output: records kept in the data source instance.
        ds.setSourceRecords(table.attributes.map(attributes => ds.buildRecord({ attributes })));
        ds.setStatus(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.Unloaded);
        ds.setCountStatus(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.Unloaded);
        setQueryVersion(v => v + 1);
    }, [ds, table]);
    // ---------- Filters set by other widgets, plus this panel's timelapse -> scene ----------
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        var _a;
        if (!table)
            return;
        let cancelled = false;
        const experience = (_a = ds === null || ds === void 0 ? void 0 : ds.getCurrentQueryParams()) === null || _a === void 0 ? void 0 : _a.where;
        const where = [experience && experience !== '1=1' ? `(${experience})` : null, timelapse].filter(Boolean).join(' AND ');
        const apply = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!where) {
                for (const s of sectionsRef.current)
                    if (s.layerView)
                        s.layerView.filter = null;
                setVisibleCount(null);
                return;
            }
            const ids = yield table.matcher.queryObjectIds({ where });
            if (cancelled)
                return;
            const bySection = new Map();
            for (const id of ids) {
                const a = table.attributes[Number(id) - 1];
                if (!bySection.has(a.Seccion))
                    bySection.set(a.Seccion, []);
                bySection.get(a.Seccion).push(a.OID);
            }
            // Filtered-out elements are neither drawn nor returned by hitTest.
            for (const s of sectionsRef.current)
                if (s.layerView)
                    s.layerView.filter = { objectIds: (_a = bySection.get(s.code)) !== null && _a !== void 0 ? _a : [-1] };
            setVisibleCount(ids.length);
        });
        apply().catch(error => { console.error('filtro', error); setStatusText(`No se pudo aplicar el filtro: ${error.message}`); });
        return () => { cancelled = true; };
    }, [ds, table, queryVersion, layerViewsReady, timelapse]);
    // ---------- Selection (from any widget) -> highlight ----------
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        for (const h of highlights.current)
            h.remove();
        highlights.current = [];
        if (!table || !selection.length)
            return;
        const bySection = new Map();
        for (const id of selection.slice(0, HIGHLIGHT_LIMIT)) {
            const a = table.attributes[Number(id) - 1];
            if (!a)
                continue;
            if (!bySection.has(a.Seccion))
                bySection.set(a.Seccion, []);
            bySection.get(a.Seccion).push(a.OID);
        }
        for (const s of sectionsRef.current) {
            const oids = bySection.get(s.code);
            if (oids && s.layerView)
                highlights.current.push(s.layerView.highlight(oids));
        }
    }, [table, selection, layerViewsReady]);
    // A click selects the element's record, so Table, List and Chart follow the 3D view.
    function onSceneClick(event) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const view = viewRef.current;
            const layers = sectionsRef.current.filter(s => s.layer.visible).map(s => s.layer);
            const { results } = yield view.hitTest(event, { include: layers });
            const hit = results.find(r => r.type === 'graphic');
            const dataSource = dsRef.current;
            if (!hit) {
                dataSource === null || dataSource === void 0 ? void 0 : dataSource.clearSelection();
                setSelection([]);
                return;
            }
            const section = sectionsRef.current.find(s => s.layer === hit.graphic.layer);
            const recordId = (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.recordIdByElement.get(`${section.code}:${hit.graphic.getObjectId()}`);
            if (recordId == null) {
                setStatusText('El elemento no está en la tabla de avance: regenera avance-elements.json.');
                return;
            }
            if (dataSource)
                dataSource.selectRecordsByIds([recordId]);
            else
                setSelection([recordId]);
        });
    }
    const dsRef = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(null);
    dsRef.current = ds;
    // Hover card: one hitTest at a time, the latest pointer position wins.
    const hover = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef({ busy: false, next: null });
    function onPointerMove(event) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            hover.current.next = event;
            if (hover.current.busy)
                return;
            hover.current.busy = true;
            try {
                while (hover.current.next) {
                    const current = hover.current.next;
                    hover.current.next = null;
                    const view = viewRef.current;
                    if (!view)
                        return;
                    const { results } = yield view.hitTest(current, { include: sectionsRef.current.filter(s => s.layer.visible).map(s => s.layer) });
                    const hit = results.find(r => r.type === 'graphic');
                    const section = hit && sectionsRef.current.find(s => s.layer === hit.graphic.layer);
                    const recordId = section && ((_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.recordIdByElement.get(`${section.code}:${hit.graphic.getObjectId()}`));
                    setTip(recordId ? { x: current.x, y: current.y, a: tableRef.current.attributes[recordId - 1] } : null);
                }
            }
            catch (_b) {
                setTip(null);
            }
            finally {
                hover.current.busy = false;
            }
        });
    }
    // ---------- Panel ----------
    const total = (_h = table === null || table === void 0 ? void 0 : table.attributes.length) !== null && _h !== void 0 ? _h : 0;
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (!table)
            return;
        const filtered = visibleCount == null ? '' : ` · ${number(visibleCount)} visibles con el filtro de la experiencia`;
        setStatusText(`${sections.length} secciones · ${number(total)} elementos${filtered}${outputId ? '' : ' · abre la configuración del widget para crear la fuente de datos'}`);
    }, [table, sections.length, total, visibleCount, outputId]);
    const selected = selection.length === 1 && table ? table.attributes[Number(selection[0]) - 1] : null;
    const statusCounts = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        var _a, _b;
        const counts = {};
        for (const a of (_a = table === null || table === void 0 ? void 0 : table.attributes) !== null && _a !== void 0 ? _a : [])
            counts[a.EstadoAvance] = ((_b = counts[a.EstadoAvance]) !== null && _b !== void 0 ? _b : 0) + 1;
        return counts;
    }, [table]);
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { css: style, className: "jimu-widget widget-avance-obra-3d", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "view", ref: container }), tip && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "tip", style: { left: tip.x + 14, top: tip.y + 14 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", { children: [tip.a.Family || tip.a.Categoria || 'Elemento', tip.a.Nivel ? ` · ${tip.a.Nivel}` : ''] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "swatch", style: { background: statusCss(tip.a.EstadoAvance) } }), tip.a.EstadoAvance, tip.a.Avance != null ? ` · ${number(tip.a.Avance)} %` : '', (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "swatch", style: { background: scheduleCss((0,_avance_schedule__WEBPACK_IMPORTED_MODULE_13__.scheduleClass)(tip.a, cutoff)) } }), (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_13__.scheduleClass)(tip.a, cutoff), " al ", (0,_avance_schedule__WEBPACK_IMPORTED_MODULE_13__.isoDay)(cutoff), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), tip.a.Actividad && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Actividad" }), " ", tip.a.Actividad, (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})] }), (tip.a.FechaInicio || tip.a.FechaFin) && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Programado" }), " ", (_j = tip.a.FechaInicio) !== null && _j !== void 0 ? _j : '?', " \u2192 ", (_k = tip.a.FechaFin) !== null && _k !== void 0 ? _k : '?'] })] })), useDataSource && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { widgetId: props.id, useDataSource: useDataSource, onDataSourceCreated: created => { setDs(created); }, onQueryRequired: () => { setQueryVersion(v => v + 1); }, onDataSourceInfoChange: () => { setQueryVersion(v => v + 1); }, onSelectionChange: (ids) => { setSelection(ids ? ids.asMutable() : []); } })), collapsed
                ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", className: "collapse", onClick: () => { setCollapsed(false); }, children: "Avance \u25B8" })
                : ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "panel", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", { children: ["Avance de obra \u00B7 E15 \u00B7 I16 \u00B7 E16 ", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", style: { float: 'right' }, onClick: () => { setCollapsed(true); }, title: "Ocultar panel", children: "\u25C2" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Secciones" }), sections.map(s => {
                            var _a;
                            return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", defaultChecked: true, onChange: e => { s.layer.visible = e.target.checked; } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: (_a = SECTION_LABELS[s.code]) !== null && _a !== void 0 ? _a : s.name }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", onClick: e => { e.preventDefault(); goTo(s); }, children: "Ir" })] }, s.name));
                        }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: volumetryOn, onChange: e => { setVolumetryOn(e.target.checked); if (volumetryRef.current)
                                        volumetryRef.current.visible = e.target.checked; } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Volumetr\u00EDa 2021 \u00B7 fachadas" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Color" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", name: `${props.id}-color`, checked: colorMode === 'status', onChange: () => { setColorMode('status'); } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Estado de avance" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", name: `${props.id}-color`, checked: colorMode === 'schedule', onChange: () => { setColorMode('schedule'); } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Cronograma (4D)" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", name: `${props.id}-color`, checked: colorMode === 'source', onChange: () => { setColorMode('source'); } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Colores del modelo" })] }), colorMode === 'status' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "legend", children: STATUS.map(s => { var _a; return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "swatch", style: { background: s.css } }), s.value, " \u00B7 ", number((_a = statusCounts[s.value]) !== null && _a !== void 0 ? _a : 0)] }, s.value); }) })), colorMode === 'schedule' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_avance_schedule_panel__WEBPACK_IMPORTED_MODULE_14__.SchedulePanel, { elements: (_l = table === null || table === void 0 ? void 0 : table.attributes) !== null && _l !== void 0 ? _l : [], cutoff: cutoff, onCutoffChange: setCutoff, buildUp: buildUp, onBuildUpChange: setBuildUp, hideUnscheduled: hideUnscheduled, onHideUnscheduledChange: setHideUnscheduled })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", { children: ["Terreno \u00B7 ", groundOpacity, " %"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "range", min: 0, max: 100, step: 5, value: groundOpacity, "aria-label": "Opacidad del terreno", onChange: e => { setGroundOpacity(Number(e.target.value)); } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: underground || groundOpacity < 100, disabled: groundOpacity < 100, onChange: e => { setUnderground(e.target.checked); } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Navegar bajo la superficie" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Mapa base" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { value: basemap, "aria-label": "Mapa base", onChange: e => { setBasemap(e.target.value); }, children: Object.entries(_basemaps__WEBPACK_IMPORTED_MODULE_16__.BASEMAPS).filter(([value]) => value !== 'scene' || parseWebScene(webSceneUrl)).map(([value, [label]]) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: value, children: label }, value)) }), basemapNote && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "note", children: basemapNote }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Elemento seleccionado" }), selected
                            ? ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dt", { children: "Estado" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dd", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "swatch", style: { background: statusCss(selected.EstadoAvance) } }), selected.EstadoAvance] }), KEY_FIELDS.filter(([field]) => selected[field] != null && selected[field] !== '').map(([field, label]) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dt", { children: label }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dd", { children: String(selected[field]) })] }, field)))] }))
                            : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "note", children: selection.length > 1 ? `${number(selection.length)} elementos seleccionados${selection.length > HIGHLIGHT_LIMIT ? ` (se resaltan ${number(HIGHLIGHT_LIMIT)})` : ''}.` : 'Haz clic en un elemento o selecciónalo en una tabla, lista o gráfico.' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "tools", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", onClick: () => { home(); }, children: "Encuadrar todo" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", "aria-pressed": slicing, onClick: () => { setSlicing(!slicing); }, title: "Plano de corte para ver el interior", children: "Cortar" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", "aria-pressed": spinning, onClick: () => { setSpinning(!spinning); }, title: "Gira alrededor del centro de la vista; arrastrar lo detiene", children: "Girar" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "status", role: "status", children: statusText })] }))] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hdmFuY2Utb2JyYS0zZC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRHQUE0RztBQUM1Ryw4R0FBOEc7QUFDRTtBQUV6RyxNQUFNLFFBQVEsR0FBRyxVQUFVO0FBRWxDLGtIQUFrSDtBQUNsSCxNQUFNLE9BQU8sR0FBa0U7SUFDN0UsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDLEtBQUssRUFBRSwrQkFBK0IsRUFBRSxRQUFRLENBQUM7SUFDbEQsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQztJQUNoQyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUM7SUFDOUMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQztJQUNsQyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDO0lBQ3BDLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxDQUFDO0lBQ3BELENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUM7SUFDeEMsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxDQUFDO0lBQzFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDNUIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQztJQUN0QyxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDO0lBQ3BDLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFFBQVEsQ0FBQztJQUN2QyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQy9CLENB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O0lBQzNDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQ3pELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsYUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBSSxDQUFDLEVBQUM7SUFDbEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNySCxDQUFDO0FBRUQsMEZBQTBGO0FBQzFGLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBTyxFQUFvQixFQUFFO0lBQ3JELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsYUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBSSxDQUFDLEVBQUM7UUFDcEQsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDaEUsQ0FBQztBQUVELGlEQUFpRDtBQUNqRCxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFXLEVBQUUsQ0FBTyxFQUFRLEVBQUU7SUFDM0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkksQ0FBQztBQUVELE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBK0IsRUFBMkIsRUFBRTtJQUN4RSxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RixNQUFNLElBQUksR0FBRyxDQUFDLElBQTZCLEVBQUUsRUFBRTtRQUM3QyxNQUFNLEdBQUcsR0FBNEIsRUFBRTtRQUN2QyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3JCLE9BQU8sR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUM1RixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUM7UUFDRCxHQUFHLENBQUMsR0FBRyxFQUFFO1FBQ1QsT0FBTyxHQUFHO0lBQ1osQ0FBQztJQUNELE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUEyRCxFQUEyQixFQUFFO0lBQ3ZHLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2pDLE1BQU0sT0FBTyxHQUE0QixFQUFFO0lBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLENB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SUFDdkssRUFDTix1RUFBRyxTQUFTLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxRQUFRLFlBQUUsVUFBVSxHQUFLLElBQ2hELENBQ0wsSUFDRCxDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2F2YW5jZS1vYnJhLTNkL3NyYy9vdXRwdXQtc2NoZW1hLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hdmFuY2Utb2JyYS0zZC9zcmMvcnVudGltZS9hdmFuY2Utc2NoZWR1bGUtcGFuZWwudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hdmFuY2Utb2JyYS0zZC9zcmMvcnVudGltZS9hdmFuY2Utc2NoZWR1bGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2F2YW5jZS1vYnJhLTNkL3NyYy9ydW50aW1lL2Jhc2VtYXBzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hdmFuY2Utb2JyYS0zZC9zcmMvcnVudGltZS9wYWNrYWdlLWZvb3RwcmludC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvR3JhcGhpY1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9NYXBcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvV2ViU2NlbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvUG9pbnRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvUG9seWdvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvQmFzZVRpbGVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9TY2VuZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9zdXBwb3J0L1NjZW5lRmlsdGVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3ZpZXdzL1NjZW5lVmlld1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL1NsaWNlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hdmFuY2Utb2JyYS0zZC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNjaGVtYSBvZiB0aGUgd2lkZ2V0J3Mgb3V0cHV0IGRhdGEgc291cmNlOiBvbmUgcmVjb3JkIHBlciBSZXZpdCBlbGVtZW50LCBjb2x1bW5zIG9mIGF2YW5jZS1lbGVtZW50cy5qc29uLlxuLy8gU2hhcmVkIGJ5IHRoZSBzZXR0aW5nICh3aGljaCByZWdpc3RlcnMgdGhlIGRhdGEgc291cmNlIGluIHRoZSBhcHAgY29uZmlnKSBhbmQgdGhlIHJ1bnRpbWUgKHdoaWNoIGZpbGxzIGl0KS5cbmltcG9ydCB7IERhdGFTb3VyY2VUeXBlcywgRXNyaUZpZWxkVHlwZSwgSmltdUZpZWxkVHlwZSwgdHlwZSBEYXRhU291cmNlSnNvbiwgdHlwZSBGaWVsZFNjaGVtYSB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGNvbnN0IElEX0ZJRUxEID0gJ09CSkVDVElEJ1xuXG4vLyBbbmFtZSwgYWxpYXMsIGtpbmRdOyBuYW1lcyBtYXRjaCB0aGUgc2NlbmUgbGF5ZXIgZmllbGRzIHNvIHRoZSAzRCB2aWV3IGFuZCB0aGUgdGFibGUgZGVzY3JpYmUgdGhlIHNhbWUgZWxlbWVudC5cbmNvbnN0IENPTFVNTlM6IEFycmF5PFtzdHJpbmcsIHN0cmluZywgJ29pZCcgfCAnbnVtYmVyJyB8ICdzdHJpbmcnIHwgJ2RhdGUnXT4gPSBbXG4gIFtJRF9GSUVMRCwgJ09CSkVDVElEJywgJ29pZCddLFxuICBbJ09JRCcsICdPYmplY3RJRCBlbiBsYSBjYXBhIGRlIGVzY2VuYScsICdudW1iZXInXSxcbiAgWydTZWNjaW9uJywgJ1NlY2Npw7NuJywgJ3N0cmluZyddLFxuICBbJ0VzdGFkb0F2YW5jZScsICdFc3RhZG8gZGUgYXZhbmNlJywgJ3N0cmluZyddLFxuICBbJ0F2YW5jZScsICdBdmFuY2UgKCUpJywgJ251bWJlciddLFxuICBbJ0FjdGl2aWRhZCcsICdBY3RpdmlkYWQnLCAnc3RyaW5nJ10sXG4gIFsnQWN0aXZpZGFkTm9tYnJlJywgJ05vbWJyZSBkZSBhY3RpdmlkYWQnLCAnc3RyaW5nJ10sXG4gIFsnQ29udHJhdGlzdGEnLCAnQ29udHJhdGlzdGEnLCAnc3RyaW5nJ10sXG4gIFsnQ2F0ZWdvcmlhJywgJ0NhdGVnb3LDrWEgUmV2aXQnLCAnc3RyaW5nJ10sXG4gIFsnTml2ZWwnLCAnTml2ZWwnLCAnc3RyaW5nJ10sXG4gIFsnRGlzY2lwbGluYScsICdEaXNjaXBsaW5hJywgJ3N0cmluZyddLFxuICBbJ01vZGVsbycsICdNb2RlbG8gUmV2aXQnLCAnc3RyaW5nJ10sXG4gIFsnVUUnLCAnVW5pZGFkIGRlIGVqZWN1Y2nDs24nLCAnc3RyaW5nJ10sXG4gIFsnRmFtaWx5JywgJ0ZhbWlsaWEnLCAnc3RyaW5nJ10sXG4gIFsnVHlwZScsICdUaXBvJywgJ3N0cmluZyddLFxuICBbJ0lmY0dVSUQnLCAnSWZjR1VJRCcsICdzdHJpbmcnXSxcbiAgWydFeHRJZCcsICdJRCBkZSBSZXZpdCcsICdzdHJpbmcnXSxcbiAgWydGZWNoYUluaWNpbycsICdJbmljaW8gKHRleHRvKScsICdzdHJpbmcnXSxcbiAgWydGZWNoYUZpbicsICdGaW4gKHRleHRvKScsICdzdHJpbmcnXSxcbiAgWydGZWNoYUluaWNpb0RhdGUnLCAnSW5pY2lvJywgJ2RhdGUnXSxcbiAgWydGZWNoYUZpbkRhdGUnLCAnRmluJywgJ2RhdGUnXSxcbiAgWyd6JywgJ0NvdGEgYmFzZSAobSknLCAnbnVtYmVyJ11cbl1cblxuY29uc3QgVFlQRVMgPSB7XG4gIG9pZDogW0ppbXVGaWVsZFR5cGUuTnVtYmVyLCBFc3JpRmllbGRUeXBlLk9JRF0sXG4gIG51bWJlcjogW0ppbXVGaWVsZFR5cGUuTnVtYmVyLCBFc3JpRmllbGRUeXBlLkRvdWJsZV0sXG4gIHN0cmluZzogW0ppbXVGaWVsZFR5cGUuU3RyaW5nLCBFc3JpRmllbGRUeXBlLlN0cmluZ10sXG4gIGRhdGU6IFtKaW11RmllbGRUeXBlLkRhdGUsIEVzcmlGaWVsZFR5cGUuRGF0ZV1cbn0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IEZJRUxEX05BTUVTID0gQ09MVU1OUy5tYXAoKFtuYW1lXSkgPT4gbmFtZSlcblxuZXhwb3J0IGZ1bmN0aW9uIG91dHB1dERhdGFTb3VyY2VKc29uICh3aWRnZXRJZDogc3RyaW5nLCBsYWJlbDogc3RyaW5nKTogRGF0YVNvdXJjZUpzb24ge1xuICBjb25zdCBmaWVsZHM6IHsgW2ppbXVOYW1lOiBzdHJpbmddOiBGaWVsZFNjaGVtYSB9ID0ge31cbiAgZm9yIChjb25zdCBbbmFtZSwgYWxpYXMsIGtpbmRdIG9mIENPTFVNTlMpIHtcbiAgICBjb25zdCBbdHlwZSwgZXNyaVR5cGVdID0gVFlQRVNba2luZF1cbiAgICBmaWVsZHNbbmFtZV0gPSB7IGppbXVOYW1lOiBuYW1lLCBuYW1lLCBhbGlhcywgdHlwZSwgZXNyaVR5cGUgfVxuICB9XG4gIHJldHVybiB7XG4gICAgaWQ6IGAke3dpZGdldElkfV9vdXRwdXRgLFxuICAgIHR5cGU6IERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXIsXG4gICAgbGFiZWwsXG4gICAgaXNPdXRwdXRGcm9tV2lkZ2V0OiB0cnVlLFxuICAgIGlzRGF0YUluRGF0YVNvdXJjZUluc3RhbmNlOiB0cnVlLCAvLyB0aGUgcmVjb3JkcyBsaXZlIGluIHRoZSBicm93c2VyOyBubyBzZXJ2aWNlLCBubyBwb3J0YWwgaXRlbVxuICAgIHNjaGVtYTogeyBsYWJlbCwgaWRGaWVsZDogSURfRklFTEQsIGZpZWxkcyB9XG4gIH0gYXMgRGF0YVNvdXJjZUpzb25cbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuLy8gU2NoZWR1bGUgKDREKSBjb250cm9scyBvZiB0aGUgQXZhbmNlIGRlIG9icmEgM0QgcGFuZWw6IGN1dC1vZmYgZGF0ZSB3aXRoIHBsYXliYWNrLCBwbGFubmVkIHZzLiByZXBvcnRlZCBwcm9ncmVzcyxcbi8vIHBsYW5uZWQgUy1jdXJ2ZSBhbmQgYnJlYWtkb3duIGJ5IHNjaGVkdWxlIGNsYXNzLiBUaGUgaG9zdCBvd25zIHRoZSBjdXQtb2ZmIGFuZCB0aGUgdGltZWxhcHNlIG9wdGlvbnMgYW5kIGRlY2lkZXNcbi8vIGhvdyB0byBhcHBseSB0aGVtLlxuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgREFZLCBTQ0hFRFVMRSwgaXNvRGF5LCBwbGFubmVkRnJhY3Rpb24sIHNjaGVkdWxlQ2xhc3MsIHNjaGVkdWxlUmFuZ2UsIHRvZGF5LCB0b0RheSB9IGZyb20gJy4vYXZhbmNlLXNjaGVkdWxlJ1xuXG5jb25zdCBTVEVQUyA9IFtbMSwgJzEgZMOtYSddLCBbNywgJzEgc2VtYW5hJ10sIFszMCwgJzEgbWVzJ11dIGFzIGNvbnN0XG5jb25zdCBGUkFNRV9NUyA9IDcwMFxuY29uc3QgQ1VSVkVfUE9JTlRTID0gODBcbmNvbnN0IG51bWJlciA9ICh2YWx1ZTogbnVtYmVyLCBkaWdpdHMgPSAwKSA9PiBOdW1iZXIodmFsdWUpLnRvTG9jYWxlU3RyaW5nKCdlcy1DTycsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBkaWdpdHMsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZGlnaXRzIH0pXG5cbmNvbnN0IHN0eWxlID0gY3NzYFxuICBmb250LXNpemU6IDEycHg7XG4gIGg0IHsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNjAwOyBtYXJnaW46IDEwcHggMCA0cHg7IH1cbiAgLmRhdGUgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgfVxuICAuZGF0ZSBpbnB1dFt0eXBlPWRhdGVdIHsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XG4gIGJ1dHRvbiB7IGZvbnQtc2l6ZTogMTJweDsgcGFkZGluZzogMnB4IDhweDsgYm9yZGVyLXJhZGl1czogNHB4OyBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogaW5oZXJpdDsgY3Vyc29yOiBwb2ludGVyOyB9XG4gIGJ1dHRvblthcmlhLXByZXNzZWQ9dHJ1ZV0geyBiYWNrZ3JvdW5kOiByZ2JhKDc4LCAxNjgsIDI1NSwgMC4yNSk7IH1cbiAgaW5wdXRbdHlwZT1yYW5nZV0geyB3aWR0aDogMTAwJTsgbWFyZ2luOiA2cHggMCAycHg7IH1cbiAgLmVuZHMgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGZvbnQtc2l6ZTogMTFweDsgb3BhY2l0eTogMC43OyB9XG4gIC5yb3cgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgbWFyZ2luOiA2cHggMDsgfVxuICAucm93IHNlbGVjdCB7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxuICBsYWJlbCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyBtYXJnaW46IDNweCAwOyBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmtwaXMgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IGdhcDogNHB4OyB9XG4gIC5rcGkgeyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyNywgMTQwLCAxNTMsIDAuMzUpOyBib3JkZXItcmFkaXVzOiA1cHg7IHBhZGRpbmc6IDRweCA2cHg7IH1cbiAgLmtwaSBzbWFsbCB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDEwcHg7IG9wYWNpdHk6IDAuNzU7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAwLjAzZW07IH1cbiAgLmtwaSBiIHsgZm9udC1zaXplOiAxN3B4OyBmb250LXdlaWdodDogNjAwOyBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zOyB9XG4gIC5rcGkuYmFkIGIgeyBjb2xvcjogI2VmNjQ2NDsgfVxuICAua3BpLmdvb2QgYiB7IGNvbG9yOiAjNDRjNThhOyB9XG4gIC5iYXIgeyBkaXNwbGF5OiBmbGV4OyBoZWlnaHQ6IDhweDsgYm9yZGVyLXJhZGl1czogM3B4OyBvdmVyZmxvdzogaGlkZGVuOyBtYXJnaW46IDRweCAwIDZweDsgYmFja2dyb3VuZDogcmdiYSgxMjcsIDE0MCwgMTUzLCAwLjIpOyB9XG4gIC5jbGFzc2VzIGRpdiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyBtYXJnaW46IDJweCAwOyB9XG4gIC5jbGFzc2VzIHNwYW4geyBmbGV4OiAxOyB9XG4gIC5jbGFzc2VzIGIgeyBmb250LXdlaWdodDogbm9ybWFsOyBvcGFjaXR5OiAwLjc1OyBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zOyB9XG4gIC5zd2F0Y2ggeyB3aWR0aDogMTBweDsgaGVpZ2h0OiAxMHB4OyBib3JkZXItcmFkaXVzOiAycHg7IGZsZXg6IG5vbmU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICBzdmcgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA5MHB4OyBkaXNwbGF5OiBibG9jazsgfVxuICAuaGludCB7IG9wYWNpdHk6IDAuNzU7IG1hcmdpbjogNnB4IDAgMDsgbGluZS1oZWlnaHQ6IDEuMzU7IH1cbmBcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZVBhbmVsUHJvcHMge1xuICBlbGVtZW50czogQXJyYXk8eyBbZmllbGQ6IHN0cmluZ106IGFueSB9PlxuICBjdXRvZmY6IG51bWJlclxuICBvbkN1dG9mZkNoYW5nZTogKGN1dG9mZjogbnVtYmVyKSA9PiB2b2lkXG4gIGJ1aWxkVXA6IGJvb2xlYW5cbiAgb25CdWlsZFVwQ2hhbmdlOiAob246IGJvb2xlYW4pID0+IHZvaWRcbiAgaGlkZVVuc2NoZWR1bGVkOiBib29sZWFuXG4gIG9uSGlkZVVuc2NoZWR1bGVkQ2hhbmdlOiAob246IGJvb2xlYW4pID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNjaGVkdWxlUGFuZWwgKHByb3BzOiBTY2hlZHVsZVBhbmVsUHJvcHMpIHtcbiAgY29uc3QgeyBlbGVtZW50cywgY3V0b2ZmLCBvbkN1dG9mZkNoYW5nZSB9ID0gcHJvcHNcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPig3KVxuICBjb25zdCBbcGxheWluZywgc2V0UGxheWluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICAvLyBTbGlkZXIgZnJvbSB0aGUgZmlyc3Qgc2NoZWR1bGVkIGRheSB0byB0aGUgbGF0ZXIgb2YgdGhlIGxhc3Qgc2NoZWR1bGVkIGRheSBhbmQgdG9kYXkuXG4gIGNvbnN0IFtmaXJzdCwgbGFzdF0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByYW5nZSA9IHNjaGVkdWxlUmFuZ2UoZWxlbWVudHMpXG4gICAgcmV0dXJuIHJhbmdlID8gW3JhbmdlWzBdLCBNYXRoLm1heChyYW5nZVsxXSwgdG9kYXkoKSldIDogW3RvZGF5KCkgLSAzNjUgKiBEQVksIHRvZGF5KCldXG4gIH0sIFtlbGVtZW50c10pXG5cbiAgLy8gVGltZWxhcHNlOiBvbmUgc3RlcCBwZXIgZnJhbWUgdW50aWwgdGhlIGxhc3QgZGF5LlxuICBjb25zdCBsYXRlc3QgPSBSZWFjdC51c2VSZWYoY3V0b2ZmKVxuICBsYXRlc3QuY3VycmVudCA9IGN1dG9mZlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcGxheWluZykgcmV0dXJuXG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBuZXh0ID0gTWF0aC5taW4obGF0ZXN0LmN1cnJlbnQgKyBzdGVwICogREFZLCBsYXN0KVxuICAgICAgb25DdXRvZmZDaGFuZ2UobmV4dClcbiAgICAgIGlmIChuZXh0ID49IGxhc3QpIHNldFBsYXlpbmcoZmFsc2UpXG4gICAgfSwgRlJBTUVfTVMpXG4gICAgcmV0dXJuICgpID0+IHsgY2xlYXJJbnRlcnZhbCh0aW1lcikgfVxuICB9LCBbcGxheWluZywgc3RlcCwgbGFzdCwgb25DdXRvZmZDaGFuZ2VdKVxuICBjb25zdCBwbGF5ID0gKCkgPT4ge1xuICAgIGlmICghcGxheWluZyAmJiBjdXRvZmYgPj0gbGFzdCkgb25DdXRvZmZDaGFuZ2UoZmlyc3QpXG4gICAgc2V0UGxheWluZyghcGxheWluZylcbiAgfVxuICBjb25zdCBwaWNrID0gKG1zOiBudW1iZXIpID0+IHsgc2V0UGxheWluZyhmYWxzZSk7IG9uQ3V0b2ZmQ2hhbmdlKHRvRGF5KG1zKSkgfVxuXG4gIGNvbnN0IGtwaXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjb3VudHM6IHsgW3ZhbHVlOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9XG4gICAgbGV0IHNjaGVkdWxlZCA9IDBcbiAgICBsZXQgcGxhbm5lZCA9IDBcbiAgICBsZXQgcmVwb3J0ZWQgPSAwXG4gICAgZm9yIChjb25zdCBhIG9mIGVsZW1lbnRzKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHNjaGVkdWxlQ2xhc3MoYSwgY3V0b2ZmKVxuICAgICAgY291bnRzW3ZhbHVlXSA9IChjb3VudHNbdmFsdWVdID8/IDApICsgMVxuICAgICAgY29uc3QgZnJhY3Rpb24gPSBwbGFubmVkRnJhY3Rpb24oYSwgY3V0b2ZmKVxuICAgICAgaWYgKGZyYWN0aW9uID09IG51bGwpIGNvbnRpbnVlXG4gICAgICBzY2hlZHVsZWQrK1xuICAgICAgcGxhbm5lZCArPSBmcmFjdGlvblxuICAgICAgcmVwb3J0ZWQgKz0gTWF0aC5taW4oTWF0aC5tYXgoYS5BdmFuY2UgPz8gMCwgMCksIDEwMCkgLyAxMDBcbiAgICB9XG4gICAgcmV0dXJuIHsgY291bnRzLCBzY2hlZHVsZWQsIHBsYW5uZWQ6IHNjaGVkdWxlZCA/IDEwMCAqIHBsYW5uZWQgLyBzY2hlZHVsZWQgOiAwLCByZXBvcnRlZDogc2NoZWR1bGVkID8gMTAwICogcmVwb3J0ZWQgLyBzY2hlZHVsZWQgOiAwIH1cbiAgfSwgW2VsZW1lbnRzLCBjdXRvZmZdKVxuXG4gIC8vIFBsYW5uZWQgUy1jdXJ2ZSBvdmVyIHRoZSBzbGlkZXIgcmFuZ2U7IHRoZSByZXBvcnRlZCB2YWx1ZSBpcyBhIHNpbmdsZSBwb2ludCBhdCB0b2RheSAodGhlIHJlcG9ydCBkYXRlKS5cbiAgY29uc3QgY3VydmUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzY2hlZHVsZWQgPSBlbGVtZW50cy5maWx0ZXIoYSA9PiBhLkZlY2hhSW5pY2lvRGF0ZSAhPSBudWxsIHx8IGEuRmVjaGFGaW5EYXRlICE9IG51bGwpXG4gICAgaWYgKCFzY2hlZHVsZWQubGVuZ3RoKSByZXR1cm4gJydcbiAgICBjb25zdCBwb2ludHM6IHN0cmluZ1tdID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBDVVJWRV9QT0lOVFM7IGkrKykge1xuICAgICAgY29uc3QgZGF5ID0gZmlyc3QgKyAobGFzdCAtIGZpcnN0KSAqIGkgLyBDVVJWRV9QT0lOVFNcbiAgICAgIGNvbnN0IG1lYW4gPSBzY2hlZHVsZWQucmVkdWNlKChzdW0sIGEpID0+IHN1bSArIHBsYW5uZWRGcmFjdGlvbihhLCBkYXkpLCAwKSAvIHNjaGVkdWxlZC5sZW5ndGhcbiAgICAgIHBvaW50cy5wdXNoKGAkeygxMDAgKiBpIC8gQ1VSVkVfUE9JTlRTKS50b0ZpeGVkKDIpfSwkeygxMDAgLSAxMDAgKiBtZWFuKS50b0ZpeGVkKDIpfWApXG4gICAgfVxuICAgIHJldHVybiBwb2ludHMuam9pbignICcpXG4gIH0sIFtlbGVtZW50cywgZmlyc3QsIGxhc3RdKVxuICBjb25zdCB4T2YgPSAoZGF5OiBudW1iZXIpID0+IGxhc3QgPiBmaXJzdCA/IDEwMCAqIChkYXkgLSBmaXJzdCkgLyAobGFzdCAtIGZpcnN0KSA6IDBcblxuICBjb25zdCBnYXAgPSBrcGlzLnBsYW5uZWQgLSBrcGlzLnJlcG9ydGVkXG4gIGNvbnN0IHRvdGFsID0gZWxlbWVudHMubGVuZ3RoXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3N0eWxlfSBjbGFzc05hbWU9XCJhdmFuY2Utc2NoZWR1bGUtcGFuZWxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT17aXNvRGF5KGN1dG9mZil9IG1pbj17aXNvRGF5KGZpcnN0KX0gbWF4PXtpc29EYXkobGFzdCl9IGFyaWEtbGFiZWw9XCJGZWNoYSBkZSBjb3J0ZVwiIG9uQ2hhbmdlPXtlID0+IHsgY29uc3QgbXMgPSBEYXRlLnBhcnNlKGUudGFyZ2V0LnZhbHVlKTsgaWYgKCFOdW1iZXIuaXNOYU4obXMpKSBwaWNrKG1zKSB9fSAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHBpY2sodG9kYXkoKSkgfX0+SG95PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49e2ZpcnN0fSBtYXg9e2xhc3R9IHN0ZXA9e0RBWX0gdmFsdWU9e01hdGgubWluKE1hdGgubWF4KGN1dG9mZiwgZmlyc3QpLCBsYXN0KX0gYXJpYS1sYWJlbD1cIkZlY2hhIGRlIGNvcnRlXCIgb25DaGFuZ2U9e2UgPT4geyBwaWNrKE51bWJlcihlLnRhcmdldC52YWx1ZSkpIH19IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVuZHNcIj48c3Bhbj57aXNvRGF5KGZpcnN0KX08L3NwYW4+PHNwYW4+e2lzb0RheShsYXN0KX08L3NwYW4+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwbGF5fSBhcmlhLXByZXNzZWQ9e3BsYXlpbmd9PntwbGF5aW5nID8gJ+KdmuKdmiBQYXVzYScgOiAn4pa2IFJlcHJvZHVjaXInfTwvYnV0dG9uPlxuICAgICAgICA8c2VsZWN0IHZhbHVlPXtzdGVwfSBhcmlhLWxhYmVsPVwiUGFzbyBkZSBsYSByZXByb2R1Y2Npw7NuXCIgb25DaGFuZ2U9e2UgPT4geyBzZXRTdGVwKE51bWJlcihlLnRhcmdldC52YWx1ZSkpIH19PlxuICAgICAgICAgIHtTVEVQUy5tYXAoKFtkYXlzLCBsYWJlbF0pID0+IDxvcHRpb24ga2V5PXtkYXlzfSB2YWx1ZT17ZGF5c30+e2xhYmVsfSBwb3IgcGFzbzwvb3B0aW9uPil9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3Byb3BzLmJ1aWxkVXB9IG9uQ2hhbmdlPXtlID0+IHsgcHJvcHMub25CdWlsZFVwQ2hhbmdlKGUudGFyZ2V0LmNoZWNrZWQpIH19IC8+TW9zdHJhciBsYSBvYnJhIGEgbGEgZmVjaGEgKG9jdWx0YSBsbyBxdWUgYcO6biBubyBpbmljaWEpPC9sYWJlbD5cbiAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17cHJvcHMuaGlkZVVuc2NoZWR1bGVkfSBvbkNoYW5nZT17ZSA9PiB7IHByb3BzLm9uSGlkZVVuc2NoZWR1bGVkQ2hhbmdlKGUudGFyZ2V0LmNoZWNrZWQpIH19IC8+T2N1bHRhciBlbGVtZW50b3Mgc2luIHByb2dyYW1hY2nDs248L2xhYmVsPlxuXG4gICAgICA8aDQ+QWwge2lzb0RheShjdXRvZmYpfTwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImtwaXNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrcGlcIj48c21hbGw+UHJvZ3JhbWFkbzwvc21hbGw+PGI+e251bWJlcihrcGlzLnBsYW5uZWQsIDEpfSAlPC9iPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtwaSBnb29kXCI+PHNtYWxsPlJlYWwgKMO6bHRpbW8gcmVwb3J0ZSk8L3NtYWxsPjxiPntudW1iZXIoa3Bpcy5yZXBvcnRlZCwgMSl9ICU8L2I+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtga3BpICR7Z2FwID4gMC4wNSA/ICdiYWQnIDogJ2dvb2QnfWB9PjxzbWFsbD57Z2FwID4gMC4wNSA/ICdBdHJhc28nIDogJ0FkZWxhbnRvJ308L3NtYWxsPjxiPntudW1iZXIoTWF0aC5hYnMoZ2FwKSwgMSl9IHB0czwvYj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BrcGkgJHtrcGlzLmNvdW50cy5BdHJhc2FkbyA/ICdiYWQnIDogJ2dvb2QnfWB9PjxzbWFsbD5BdHJhc2Fkb3M8L3NtYWxsPjxiPntudW1iZXIoa3Bpcy5jb3VudHMuQXRyYXNhZG8gPz8gMCl9PC9iPjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoND5DdXJ2YSBwcm9ncmFtYWRhPC9oND5cbiAgICAgIDxzdmcgdmlld0JveD1cIi0yIC00IDEwNCAxMDhcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPXtgQ3VydmEgZGUgYXZhbmNlIHByb2dyYW1hZG87IGFsIGNvcnRlICR7bnVtYmVyKGtwaXMucGxhbm5lZCwgMSl9ICUsIHJlYWwgJHtudW1iZXIoa3Bpcy5yZXBvcnRlZCwgMSl9ICVgfT5cbiAgICAgICAgPGxpbmUgeDE9XCIwXCIgeTE9XCIxMDBcIiB4Mj1cIjEwMFwiIHkyPVwiMTAwXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlT3BhY2l0eT1cIjAuM1wiIHZlY3RvckVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiMTAwXCIgeTI9XCIwXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlT3BhY2l0eT1cIjAuMTVcIiBzdHJva2VEYXNoYXJyYXk9XCIyIDJcIiB2ZWN0b3JFZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIiAvPlxuICAgICAgICB7Y3VydmUgJiYgPHBvbHlsaW5lIHBvaW50cz17Y3VydmV9IGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzRlYThmZlwiIHN0cm9rZVdpZHRoPVwiMlwiIHZlY3RvckVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiIC8+fVxuICAgICAgICA8bGluZSB4MT17eE9mKGN1dG9mZil9IHkxPVwiMFwiIHgyPXt4T2YoY3V0b2ZmKX0geTI9XCIxMDBcIiBzdHJva2U9XCIjZjJjOTRjXCIgc3Ryb2tlV2lkdGg9XCIxLjVcIiB2ZWN0b3JFZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIiAvPlxuICAgICAgICA8Y2lyY2xlIGN4PXt4T2YodG9kYXkoKSl9IGN5PXsxMDAgLSBrcGlzLnJlcG9ydGVkfSByPVwiMlwiIGZpbGw9XCIjNDRjNThhXCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbmRzXCI+PHNwYW4+QXp1bDogcHJvZ3JhbWFkbyDCtyBWZXJkZTogcmVhbCBob3k8L3NwYW4+PHNwYW4+QW1hcmlsbG86IGNvcnRlPC9zcGFuPjwvZGl2PlxuXG4gICAgICA8aDQ+Q3Jvbm9ncmFtYSDCtyB7bnVtYmVyKGtwaXMuc2NoZWR1bGVkKX0gZGUge251bWJlcih0b3RhbCl9IGVsZW1lbnRvcyBjb24gZmVjaGFzPC9oND5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIHtTQ0hFRFVMRS5tYXAocyA9PiA8aSBrZXk9e3MudmFsdWV9IHN0eWxlPXt7IHdpZHRoOiBgJHsxMDAgKiAoa3Bpcy5jb3VudHNbcy52YWx1ZV0gPz8gMCkgLyBNYXRoLm1heCh0b3RhbCwgMSl9JWAsIGJhY2tncm91bmQ6IHMuY3NzIH19IC8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGFzc2VzXCI+XG4gICAgICAgIHtTQ0hFRFVMRS5tYXAocyA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3MudmFsdWV9IHRpdGxlPXtzLm5vdGV9PjxpIGNsYXNzTmFtZT1cInN3YXRjaFwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IHMuY3NzIH19IC8+PHNwYW4+e3MudmFsdWV9PC9zcGFuPjxiPntudW1iZXIoa3Bpcy5jb3VudHNbcy52YWx1ZV0gPz8gMCl9PC9iPjwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwiaGludFwiPkVsIHByb2dyYW1hZG8gc2FsZSBkZSBsYXMgZmVjaGFzIGRlIGFjdGl2aWRhZDsgZWwgcmVhbCBlcyBlbCDDumx0aW1vICUgcmVwb3J0YWRvLCBhc8OtIHF1ZSBhbnRlcyBkZSBob3kgY29tcGFyYSBlbCBwbGFuIGNvbiBsbyBxdWUgaGF5IGhveS48L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIi8vIFNjaGVkdWxlICg0RCkgcnVsZXMgb2YgdGhlIEF2YW5jZSBkZSBvYnJhIDNEIHdpZGdldC4gVGhlIGN1dC1vZmYgZGF0ZSBsaXZlcyBpbiB0aGUgYXBwIHN0YXRlIHVuZGVyIENVVE9GRl9TVEFURV9LRVksXG4vLyBzbyBhbm90aGVyIHdpZGdldCBvZiB0aGUgZXhwZXJpZW5jZSBjYW4gcmVhZCBvciBzZXQgaXQuIEtlcHQgaW5zaWRlIHRoZSB3aWRnZXQgc28gaXQgaW5zdGFsbHMgYXMgb25lIGZvbGRlciAocG9ydGFsKS5cbmV4cG9ydCBjb25zdCBDVVRPRkZfU1RBVEVfS0VZID0gJ2F2YW5jZS00ZCdcbmV4cG9ydCBjb25zdCBEQVkgPSA4NjQwMDAwMFxuXG4vLyBEYXRlcyBpbiBhdmFuY2UtZWxlbWVudHMuanNvbiBhcmUgVVRDIG1pZG5pZ2h0cyAoZXBvY2ggbXMpLCBzbyBjdXQtb2ZmcyBhcmUgaGFuZGxlZCBhcyBVVEMgZGF5cyB0b28uXG5leHBvcnQgY29uc3QgdG9EYXkgPSAobXM6IG51bWJlcikgPT4gTWF0aC5mbG9vcihtcyAvIERBWSkgKiBEQVlcbmV4cG9ydCBjb25zdCB0b2RheSA9ICgpID0+IHRvRGF5KERhdGUubm93KCkpXG5leHBvcnQgY29uc3QgaXNvRGF5ID0gKG1zOiBudW1iZXIpID0+IG5ldyBEYXRlKG1zKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxuXG5leHBvcnQgY29uc3QgU0NIRURVTEUgPSBbXG4gIHsgdmFsdWU6ICdDb25zdHJ1aWRvJywgY29sb3I6IFs2OCwgMTk3LCAxMzhdLCBjc3M6ICcjNDRjNThhJywgbm90ZTogJ1Rlcm1pbmFkbyB5IGNvbiBmaW4gcHJvZ3JhbWFkbyBhIGxhIGZlY2hhJyB9LFxuICB7IHZhbHVlOiAnQXRyYXNhZG8nLCBjb2xvcjogWzIzOSwgMTAwLCAxMDBdLCBjc3M6ICcjZWY2NDY0Jywgbm90ZTogJ0ZpbiBwcm9ncmFtYWRvIHZlbmNpZG8geSBhdmFuY2UgbWVub3IgYSAxMDAgJScgfSxcbiAgeyB2YWx1ZTogJ0VuIGVqZWN1Y2nDs24nLCBjb2xvcjogWzI0MiwgMjAxLCA3Nl0sIGNzczogJyNmMmM5NGMnLCBub3RlOiAnRW50cmUgZWwgaW5pY2lvIHkgZWwgZmluIHByb2dyYW1hZG9zJyB9LFxuICB7IHZhbHVlOiAnSW5pY2lhIGVuIDMwIGTDrWFzJywgY29sb3I6IFs3OCwgMTY4LCAyNTVdLCBjc3M6ICcjNGVhOGZmJywgbm90ZTogJ0luaWNpbyBwcm9ncmFtYWRvIGVuIGxvcyBwcsOzeGltb3MgMzAgZMOtYXMnIH0sXG4gIHsgdmFsdWU6ICdNw6FzIGFkZWxhbnRlJywgY29sb3I6IFs5NiwgMTEyLCAxMjhdLCBjc3M6ICcjNjA3MDgwJywgbm90ZTogJ0luaWNpbyBwcm9ncmFtYWRvIGEgbcOhcyBkZSAzMCBkw61hcycgfSxcbiAgeyB2YWx1ZTogJ1NpbiBwcm9ncmFtYWNpw7NuJywgY29sb3I6IFsxNTQsIDE2NSwgMTc3XSwgY3NzOiAnIzlhYTViMScsIG5vdGU6ICdTaW4gZmVjaGFzIGRlIGFjdGl2aWRhZCcgfVxuXVxuXG5pbnRlcmZhY2UgU2NoZWR1bGVkIHsgRmVjaGFJbmljaW9EYXRlPzogbnVtYmVyLCBGZWNoYUZpbkRhdGU/OiBudW1iZXIsIEF2YW5jZT86IG51bWJlciB9XG5cbmNvbnN0IHNwYW4gPSAoYTogU2NoZWR1bGVkKTogW251bWJlciwgbnVtYmVyXSB8IG51bGwgPT4ge1xuICBjb25zdCBzdGFydCA9IGEuRmVjaGFJbmljaW9EYXRlID8/IGEuRmVjaGFGaW5EYXRlXG4gIGNvbnN0IGVuZCA9IGEuRmVjaGFGaW5EYXRlID8/IGEuRmVjaGFJbmljaW9EYXRlXG4gIHJldHVybiBzdGFydCA9PSBudWxsID8gbnVsbCA6IFtzdGFydCwgTWF0aC5tYXgoc3RhcnQsIGVuZCldXG59XG5cbi8vIENsYXNzIG9mIGFuIGVsZW1lbnQgYXQgdGhlIGN1dC1vZmYgZGF0ZS4gQXZhbmNlIGlzIHRoZSBsYXRlc3QgcmVwb3J0LCBzbyBhbiBlbGVtZW50IGZpbmlzaGVkIGFoZWFkIG9mIGl0cyBwbGFubmVkXG4vLyBlbmQgb25seSBjb3VudHMgYXMgYnVpbHQgZnJvbSB0aGUgcmVwb3J0IGRhdGUgKHRvZGF5KSBvbi4gV2l0aG91dCBhbiBlbmQgZGF0ZSBhbiB1bmZpbmlzaGVkIGVsZW1lbnQgaXMgbmV2ZXIgbGF0ZS5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUNsYXNzIChhOiBTY2hlZHVsZWQsIGN1dG9mZjogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgZGF0ZXMgPSBzcGFuKGEpXG4gIGlmICghZGF0ZXMpIHJldHVybiAnU2luIHByb2dyYW1hY2nDs24nXG4gIGNvbnN0IFtzdGFydCwgZW5kXSA9IGRhdGVzXG4gIGNvbnN0IGRvbmUgPSAoYS5BdmFuY2UgPz8gMCkgPj0gMTAwXG4gIGlmIChkb25lICYmIChlbmQgPD0gY3V0b2ZmIHx8IGN1dG9mZiA+PSB0b2RheSgpKSkgcmV0dXJuICdDb25zdHJ1aWRvJ1xuICBpZiAoZW5kIDw9IGN1dG9mZiAmJiBhLkZlY2hhRmluRGF0ZSAhPSBudWxsKSByZXR1cm4gJ0F0cmFzYWRvJ1xuICBpZiAoc3RhcnQgPD0gY3V0b2ZmKSByZXR1cm4gJ0VuIGVqZWN1Y2nDs24nXG4gIHJldHVybiBzdGFydCAtIGN1dG9mZiA8PSAzMCAqIERBWSA/ICdJbmljaWEgZW4gMzAgZMOtYXMnIDogJ03DoXMgYWRlbGFudGUnXG59XG5cbi8vIFNoYXJlIG9mIHRoZSBlbGVtZW50J3MgcGxhbm5lZCBkdXJhdGlvbiBlbGFwc2VkIGF0IHRoZSBjdXQtb2ZmICgwLi4xKSwgb3IgbnVsbCB3aXRob3V0IGRhdGVzLlxuZXhwb3J0IGZ1bmN0aW9uIHBsYW5uZWRGcmFjdGlvbiAoYTogU2NoZWR1bGVkLCBjdXRvZmY6IG51bWJlcik6IG51bWJlciB8IG51bGwge1xuICBjb25zdCBkYXRlcyA9IHNwYW4oYSlcbiAgaWYgKCFkYXRlcykgcmV0dXJuIG51bGxcbiAgY29uc3QgW3N0YXJ0LCBlbmRdID0gZGF0ZXNcbiAgaWYgKGN1dG9mZiA+PSBlbmQpIHJldHVybiAxXG4gIGlmIChjdXRvZmYgPCBzdGFydCkgcmV0dXJuIDBcbiAgcmV0dXJuIChjdXRvZmYgLSBzdGFydCArIERBWSkgLyAoZW5kIC0gc3RhcnQgKyBEQVkpIC8vIGRhdGVzIGFyZSBpbmNsdXNpdmUgZGF5c1xufVxuXG4vLyBXaGVyZSBjbGF1c2UgZm9yIMKrTW9zdHJhciBsYSBvYnJhIGEgbGEgZmVjaGHCuyAoaGlkZSB3aGF0IGhhcyBub3Qgc3RhcnRlZCkgYW5kIMKrT2N1bHRhciBzaW4gcHJvZ3JhbWFjacOzbsK7OyBudWxsID0gYWxsLlxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVsYXBzZVdoZXJlIChjdXRvZmY6IG51bWJlciwgYnVpbGRVcDogYm9vbGVhbiwgaGlkZVVuc2NoZWR1bGVkOiBib29sZWFuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGRheSA9IGB0aW1lc3RhbXAgJyR7aXNvRGF5KGN1dG9mZil9IDAwOjAwOjAwJ2BcbiAgY29uc3Qgc3RhcnRlZCA9IGAoRmVjaGFJbmljaW9EYXRlIDw9ICR7ZGF5fSBPUiAoRmVjaGFJbmljaW9EYXRlIElTIE5VTEwgQU5EIEZlY2hhRmluRGF0ZSA8PSAke2RheX0pKWBcbiAgY29uc3QgdW5zY2hlZHVsZWQgPSAnKEZlY2hhSW5pY2lvRGF0ZSBJUyBOVUxMIEFORCBGZWNoYUZpbkRhdGUgSVMgTlVMTCknXG4gIGlmIChidWlsZFVwKSByZXR1cm4gaGlkZVVuc2NoZWR1bGVkID8gc3RhcnRlZCA6IGAoJHtzdGFydGVkfSBPUiAke3Vuc2NoZWR1bGVkfSlgXG4gIHJldHVybiBoaWRlVW5zY2hlZHVsZWQgPyBgTk9UICR7dW5zY2hlZHVsZWR9YCA6IG51bGxcbn1cblxuLy8gRmlyc3QgYW5kIGxhc3Qgc2NoZWR1bGVkIGRheSwgZm9yIHRoZSBjdXQtb2ZmIHNsaWRlci5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZVJhbmdlIChyb3dzOiBTY2hlZHVsZWRbXSk6IFtudW1iZXIsIG51bWJlcl0gfCBudWxsIHtcbiAgbGV0IG1pbiA9IEluZmluaXR5XG4gIGxldCBtYXggPSAtSW5maW5pdHlcbiAgZm9yIChjb25zdCBhIG9mIHJvd3MpIHtcbiAgICBjb25zdCBkYXRlcyA9IHNwYW4oYSlcbiAgICBpZiAoIWRhdGVzKSBjb250aW51ZVxuICAgIG1pbiA9IE1hdGgubWluKG1pbiwgZGF0ZXNbMF0pXG4gICAgbWF4ID0gTWF0aC5tYXgobWF4LCBkYXRlc1sxXSlcbiAgfVxuICByZXR1cm4gbWluID09PSBJbmZpbml0eSA/IG51bGwgOiBbbWluLCBtYXhdXG59XG4iLCIvLyBCYXNlbWFwcyBvZiB0aGUgcHJvZ3Jlc3Mgdmlld2VyLCBwb3J0ZWQgZnJvbSBhcmNnaXMtcG9jL2Jhc2VtYXBzLmpzLiBUaGUgSURFQ0EvVUFFQ0QgMjAyNSBvcnRob3Bob3RvIFdNUyBvbmx5XG4vLyBvZmZlcnMgRVBTRzo0MzI2LCBzbyBlYWNoIFdlYiBNZXJjYXRvciB0aWxlIGlzIHJlcXVlc3RlZCBmcm9tIHRoZSBzZXJ2aWNlJ3MgUkVTVCBleHBvcnRJbWFnZSB0aHJvdWdoIHRoZVxuLy8gTWFwYXMgQm9nb3TDoSBwcm94eSAodGhlIGRpcmVjdCBzZXJ2aWNpb3NnaXMgaG9zdCBpcyB1bnJlbGlhYmxlKS5cbmltcG9ydCBCYXNlVGlsZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0Jhc2VUaWxlTGF5ZXInXG5cbmNvbnN0IFBST1hZID0gJ2h0dHBzOi8vY2F0YWxvZ29wbWIuY2F0YXN0cm9ib2dvdGEuZ292LmNvL1BNQldlYi9wcm94eS5qc3A/J1xuY29uc3QgT1JUSE9fVVJMID0gJ2h0dHBzOi8vc2VydmljaW9zZ2lzLmNhdGFzdHJvYm9nb3RhLmdvdi5jby9pbWFnZS9yZXN0L3NlcnZpY2VzL2ltYWdlbmVzZnVuY2lvbmVzL29ydGhvdXJiYW5hMjAyNWZ1bmNpb24vSW1hZ2VTZXJ2ZXInXG5jb25zdCBUSUxFX1NJWkUgPSAyNTZcbmNvbnN0IEFUVFJJQlVUSU9OID0gJ1VBRUNEIC8gSURFQ0EgwrcgT3J0b2ZvdG9tb3NhaWNvIHVyYmFubyBCb2dvdMOhIDIwMjUgKFNEUCwgU0lHTEEgUy5BLlMuKSDCtyBDQyBCWSA0LjAnXG5cbmNvbnN0IG1lcmNhdG9yID0gKGxvbjogbnVtYmVyLCBsYXQ6IG51bWJlcikgPT4gWzYzNzgxMzcgKiBsb24gKiBNYXRoLlBJIC8gMTgwLCA2Mzc4MTM3ICogTWF0aC5sb2coTWF0aC50YW4oTWF0aC5QSSAvIDQgKyBsYXQgKiBNYXRoLlBJIC8gMzYwKSldXG5cbmNvbnN0IE9ydGhvVGlsZUxheWVyID0gKEJhc2VUaWxlTGF5ZXIgYXMgYW55KS5jcmVhdGVTdWJjbGFzcyh7XG4gIHByb3BlcnRpZXM6IHsgY292ZXJhZ2U6IG51bGwgfSwgLy8gW3htaW4sIHltaW4sIHhtYXgsIHltYXhdIGluIFdlYiBNZXJjYXRvciwgZnJvbSB0aGUgc2VydmljZSBleHRlbnRcbiAgYXN5bmMgZmV0Y2hUaWxlIChsZXZlbDogbnVtYmVyLCByb3c6IG51bWJlciwgY29sOiBudW1iZXIsIG9wdGlvbnM/OiB7IHNpZ25hbD86IEFib3J0U2lnbmFsIH0pIHtcbiAgICBjb25zdCBbeG1pbiwgeW1pbiwgeG1heCwgeW1heF0gPSB0aGlzLmdldFRpbGVCb3VuZHMobGV2ZWwsIHJvdywgY29sKVxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgY2FudmFzLndpZHRoID0gVElMRV9TSVpFXG4gICAgY2FudmFzLmhlaWdodCA9IFRJTEVfU0laRVxuICAgIGNvbnN0IGMgPSB0aGlzLmNvdmVyYWdlXG4gICAgaWYgKGMgJiYgKHhtYXggPCBjWzBdIHx8IHhtaW4gPiBjWzJdIHx8IHltYXggPCBjWzFdIHx8IHltaW4gPiBjWzNdKSkgcmV0dXJuIGNhbnZhcyAvLyBvdXRzaWRlIEJvZ290w6E6IHRyYW5zcGFyZW50XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICBiYm94OiBbeG1pbiwgeW1pbiwgeG1heCwgeW1heF0uam9pbignLCcpLCBiYm94U1I6ICczODU3JywgaW1hZ2VTUjogJzM4NTcnLCBzaXplOiBgJHtUSUxFX1NJWkV9LCR7VElMRV9TSVpFfWAsXG4gICAgICBmb3JtYXQ6ICdqcGdwbmcnLCB0cmFuc3BhcmVudDogJ3RydWUnLCByZW5kZXJpbmdSdWxlOiBKU09OLnN0cmluZ2lmeSh7IHJhc3RlckZ1bmN0aW9uOiAnQ29sb3JCYWxhbmNlJyB9KSwgZjogJ2ltYWdlJ1xuICAgIH0pXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtQUk9YWX0ke09SVEhPX1VSTH0vZXhwb3J0SW1hZ2U/JHtwYXJhbXMudG9TdHJpbmcoKX1gLCB7IHNpZ25hbDogb3B0aW9ucz8uc2lnbmFsIH0pXG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBPcnRvZm90byAke3Jlc3BvbnNlLnN0YXR1c31gKVxuICAgIGNvbnN0IGJpdG1hcCA9IGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IHJlc3BvbnNlLmJsb2IoKSlcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwLCBUSUxFX1NJWkUsIFRJTEVfU0laRSlcbiAgICBiaXRtYXAuY2xvc2UoKVxuICAgIHJldHVybiBjYW52YXNcbiAgfVxufSlcblxuLy8gdmFsdWUgLT4gW2xhYmVsLCBFc3JpIGJhc2VtYXAgaWQsIElERUNBIG9ydGhvcGhvdG8gb24gdG9wXTsgwqtzY2VuZcK7IGlzIHRoZSB3ZWIgc2NlbmUncyBvd24gYmFzZW1hcC5cbmV4cG9ydCBjb25zdCBCQVNFTUFQUzogeyBbdmFsdWU6IHN0cmluZ106IFtzdHJpbmcsIHN0cmluZywgYm9vbGVhbl0gfSA9IHtcbiAgc2NlbmU6IFsnRGVsIHdlYiBzY2VuZScsIG51bGwsIGZhbHNlXSxcbiAgaWRlY2E6IFsnT3J0b2ZvdG8gSURFQ0EgMjAyNSAoNSBjbSknLCAnc2F0ZWxsaXRlJywgdHJ1ZV0sXG4gIHNhdGVsbGl0ZTogWydJbcOhZ2VuZXMgRXNyaScsICdzYXRlbGxpdGUnLCBmYWxzZV0sXG4gIGh5YnJpZDogWydJbcOhZ2VuZXMgRXNyaSBjb24gZXRpcXVldGFzJywgJ2h5YnJpZCcsIGZhbHNlXSxcbiAgdG9wbzogWydUb3BvZ3LDoWZpY28nLCAndG9wby12ZWN0b3InLCBmYWxzZV0sXG4gIHN0cmVldHM6IFsnQ2FsbGVzJywgJ3N0cmVldHMtdmVjdG9yJywgZmFsc2VdLFxuICBncmF5OiBbJ0dyaXMgY2xhcm8nLCAnZ3JheS12ZWN0b3InLCBmYWxzZV0sXG4gIGRhcms6IFsnR3JpcyBvc2N1cm8nLCAnZGFyay1ncmF5LXZlY3RvcicsIGZhbHNlXSxcbiAgb3NtOiBbJ09wZW5TdHJlZXRNYXAnLCAnb3NtJywgZmFsc2VdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCYXNlbWFwU3dpdGNoZXIgKG1hcDogX19lc3JpLk1hcCwgb25Ob3RlOiAobm90ZTogc3RyaW5nKSA9PiB2b2lkKSB7XG4gIGNvbnN0IG9ydGhvID0gbmV3IE9ydGhvVGlsZUxheWVyKHsgdGl0bGU6ICdPcnRvZm90byBJREVDQSAyMDI1JywgY29weXJpZ2h0OiBBVFRSSUJVVElPTiwgbGlzdE1vZGU6ICdoaWRlJyB9KVxuICAvLyBTZXJ2aWNlIGV4dGVudCwgc28gdGlsZXMgb3V0c2lkZSBpdHMgY292ZXJhZ2UgYXJlIG5ldmVyIHJlcXVlc3RlZC5cbiAgZmV0Y2goYCR7UFJPWFl9JHtPUlRIT19VUkx9P2Y9anNvbmApLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4gYXdhaXQgcmVzcG9uc2UuanNvbigpKS50aGVuKCh7IGV4dGVudDogZSB9KSA9PiB7XG4gICAgaWYgKGU/LnNwYXRpYWxSZWZlcmVuY2U/LndraWQgPT09IDQzMjYgfHwgZT8uc3BhdGlhbFJlZmVyZW5jZT8ubGF0ZXN0V2tpZCA9PT0gNDMyNikge1xuICAgICAgb3J0aG8uY292ZXJhZ2UgPSBbLi4ubWVyY2F0b3IoZS54bWluLCBlLnltaW4pLCAuLi5tZXJjYXRvcihlLnhtYXgsIGUueW1heCldXG4gICAgfVxuICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgY29uc29sZS53YXJuKCdPcnRvZm90byBJREVDQScsIGVycm9yKVxuICAgIG9uTm90ZSgnTm8gc2UgcHVkbyBjb25zdWx0YXIgbGEgb3J0b2ZvdG8gSURFQ0EgKHNlcnZpY2lvIG8gcHJveHkgc2luIHJlc3B1ZXN0YSkuIFNlIG11ZXN0cmFuIGxhcyBpbcOhZ2VuZXMgZGUgRXNyaS4nKVxuICB9KVxuICBsZXQgb3duOiBfX2VzcmkuQmFzZW1hcCA9IG51bGxcbiAgcmV0dXJuICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgWywgYmFzZW1hcCwgd2l0aE9ydGhvXSA9IEJBU0VNQVBTW3ZhbHVlXSA/PyBCQVNFTUFQUy5pZGVjYVxuICAgIG93biA9IG93biA/PyBtYXAuYmFzZW1hcCAvLyB0aGUgZmlyc3Qgb25lIHJlcGxhY2VkIGlzIHRoZSB3ZWIgc2NlbmUnc1xuICAgIGlmIChiYXNlbWFwKSBtYXAuYmFzZW1hcCA9IGJhc2VtYXAgYXMgYW55XG4gICAgZWxzZSBpZiAob3duKSBtYXAuYmFzZW1hcCA9IG93blxuICAgIGlmICh3aXRoT3J0aG8gJiYgIW1hcC5sYXllcnMuaW5jbHVkZXMob3J0aG8pKSBtYXAubGF5ZXJzLmFkZChvcnRobywgMCkgLy8gdW5kZXIgZXZlcnkgbW9kZWwgYW5kIGZvb3RwcmludCBsYXllclxuICAgIGlmICghd2l0aE9ydGhvKSBtYXAubGF5ZXJzLnJlbW92ZShvcnRobylcbiAgICBvbk5vdGUod2l0aE9ydGhvID8gJ1VBRUNEIC8gSURFQ0EgwrcgaW1hZ2VuIDMxLzA4LzIwMjUgwrcgR1NEIG5hdGl2byA1IGNtLCB2aXNpYmxlIGFsIGFjZXJjYXJzZSDCtyBDQyBCWSA0LjAuIEZ1ZXJhIGRlIEJvZ290w6Egc2UgdmVuIGxhcyBpbcOhZ2VuZXMgZGUgRXNyaS4nIDogJycpXG4gIH1cbn1cbiIsIi8vIEdyb3VuZCBmb290cHJpbnQgb2YgYSBzY2VuZSBsYXllciBwYWNrYWdlLCBmcm9tIHRoZSBvcmllbnRlZCBib3VuZGluZyBib3hlcyBvZiBpdHMgbGVhZiBub2RlcyAoSTNTIG5vZGUgcGFnZXMpOiBvbmVcbi8vIGNvbnZleCBwb2x5Z29uIHBlciBsZWFmLCBpbiBXR1M4NC4gVXNlZCB0byBoaWRlIHRoZSBjb250ZXh0IHZvbHVtZXRyeSB3aGVyZSB0aGUgc3RhdGlvbnMgYXJlLlxuY29uc3QgQSA9IDYzNzgxMzdcbmNvbnN0IEUyID0gNi42OTQzNzk5OTAxNGUtM1xuXG50eXBlIFZlYzMgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl1cblxuY29uc3QgdG9FY2VmID0gKFtsb24sIGxhdCwgaF06IFZlYzMpOiBWZWMzID0+IHtcbiAgY29uc3QgW2wsIHBdID0gW2xvbiAqIE1hdGguUEkgLyAxODAsIGxhdCAqIE1hdGguUEkgLyAxODBdXG4gIGNvbnN0IG4gPSBBIC8gTWF0aC5zcXJ0KDEgLSBFMiAqIE1hdGguc2luKHApICoqIDIpXG4gIHJldHVybiBbKG4gKyBoKSAqIE1hdGguY29zKHApICogTWF0aC5jb3MobCksIChuICsgaCkgKiBNYXRoLmNvcyhwKSAqIE1hdGguc2luKGwpLCAobiAqICgxIC0gRTIpICsgaCkgKiBNYXRoLnNpbihwKV1cbn1cblxuLy8gTG9uL2xhdCBvZiBhbiBFQ0VGIHBvaW50IChhIGZldyBmaXhlZC1wb2ludCBpdGVyYXRpb25zIGFyZSBwbGVudHkgYXQgYnVpbGRpbmcgaGVpZ2h0cykuXG5jb25zdCB0b0xvbkxhdCA9IChbeCwgeSwgel06IFZlYzMpOiBbbnVtYmVyLCBudW1iZXJdID0+IHtcbiAgY29uc3QgciA9IE1hdGguaHlwb3QoeCwgeSlcbiAgbGV0IGxhdCA9IE1hdGguYXRhbjIoeiwgciAqICgxIC0gRTIpKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGNvbnN0IG4gPSBBIC8gTWF0aC5zcXJ0KDEgLSBFMiAqIE1hdGguc2luKGxhdCkgKiogMilcbiAgICBsYXQgPSBNYXRoLmF0YW4yKHogKyBFMiAqIG4gKiBNYXRoLnNpbihsYXQpLCByKVxuICB9XG4gIHJldHVybiBbTWF0aC5hdGFuMih5LCB4KSAqIDE4MCAvIE1hdGguUEksIGxhdCAqIDE4MCAvIE1hdGguUEldXG59XG5cbi8vIFJvdGF0ZXMgdiBieSB0aGUgdW5pdCBxdWF0ZXJuaW9uIFt4LCB5LCB6LCB3XS5cbmNvbnN0IHJvdGF0ZSA9IChbcXgsIHF5LCBxeiwgcXddOiBudW1iZXJbXSwgdjogVmVjMyk6IFZlYzMgPT4ge1xuICBjb25zdCB0ID0gWzIgKiAocXkgKiB2WzJdIC0gcXogKiB2WzFdKSwgMiAqIChxeiAqIHZbMF0gLSBxeCAqIHZbMl0pLCAyICogKHF4ICogdlsxXSAtIHF5ICogdlswXSldXG4gIHJldHVybiBbdlswXSArIHF3ICogdFswXSArIHF5ICogdFsyXSAtIHF6ICogdFsxXSwgdlsxXSArIHF3ICogdFsxXSArIHF6ICogdFswXSAtIHF4ICogdFsyXSwgdlsyXSArIHF3ICogdFsyXSArIHF4ICogdFsxXSAtIHF5ICogdFswXV1cbn1cblxuY29uc3QgaHVsbCA9IChwb2ludHM6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+KTogQXJyYXk8W251bWJlciwgbnVtYmVyXT4gPT4ge1xuICBjb25zdCBzb3J0ZWQgPSBbLi4ucG9pbnRzXS5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSB8fCBhWzFdIC0gYlsxXSlcbiAgY29uc3QgY3Jvc3MgPSAobywgYSwgYikgPT4gKGFbMF0gLSBvWzBdKSAqIChiWzFdIC0gb1sxXSkgLSAoYVsxXSAtIG9bMV0pICogKGJbMF0gLSBvWzBdKVxuICBjb25zdCBoYWxmID0gKGxpc3Q6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+KSA9PiB7XG4gICAgY29uc3Qgb3V0OiBBcnJheTxbbnVtYmVyLCBudW1iZXJdPiA9IFtdXG4gICAgZm9yIChjb25zdCBwIG9mIGxpc3QpIHtcbiAgICAgIHdoaWxlIChvdXQubGVuZ3RoID49IDIgJiYgY3Jvc3Mob3V0W291dC5sZW5ndGggLSAyXSwgb3V0W291dC5sZW5ndGggLSAxXSwgcCkgPD0gMCkgb3V0LnBvcCgpXG4gICAgICBvdXQucHVzaChwKVxuICAgIH1cbiAgICBvdXQucG9wKClcbiAgICByZXR1cm4gb3V0XG4gIH1cbiAgcmV0dXJuIFsuLi5oYWxmKHNvcnRlZCksIC4uLmhhbGYoWy4uLnNvcnRlZF0ucmV2ZXJzZSgpKV1cbn1cblxuY29uc3Qgb2JiUmluZyA9IChvYmI6IHsgY2VudGVyOiBWZWMzLCBoYWxmU2l6ZTogVmVjMywgcXVhdGVybmlvbjogbnVtYmVyW10gfSk6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+ID0+IHtcbiAgY29uc3QgY2VudGVyID0gdG9FY2VmKG9iYi5jZW50ZXIpXG4gIGNvbnN0IGNvcm5lcnM6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBjb25zdCBzaWducyA9IFtpICYgMSA/IDEgOiAtMSwgaSAmIDIgPyAxIDogLTEsIGkgJiA0ID8gMSA6IC0xXVxuICAgIGNvbnN0IG9mZnNldCA9IHJvdGF0ZShvYmIucXVhdGVybmlvbiwgW3NpZ25zWzBdICogb2JiLmhhbGZTaXplWzBdLCBzaWduc1sxXSAqIG9iYi5oYWxmU2l6ZVsxXSwgc2lnbnNbMl0gKiBvYmIuaGFsZlNpemVbMl1dKVxuICAgIGNvcm5lcnMucHVzaCh0b0xvbkxhdChbY2VudGVyWzBdICsgb2Zmc2V0WzBdLCBjZW50ZXJbMV0gKyBvZmZzZXRbMV0sIGNlbnRlclsyXSArIG9mZnNldFsyXV0pKVxuICB9XG4gIGNvbnN0IHJpbmcgPSBodWxsKGNvcm5lcnMpXG4gIHJldHVybiBbLi4ucmluZywgcmluZ1swXV1cbn1cblxuLy8gQXBwcm94aW1hdGUgYXJlYSBpbiBtwrIgb2YgYSBzbWFsbCBsb24vbGF0IHJpbmcuXG5jb25zdCBhcmVhID0gKHJpbmc6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+KTogbnVtYmVyID0+IHtcbiAgY29uc3Qga3ggPSAxMTEzMjAgKiBNYXRoLmNvcyhyaW5nWzBdWzFdICogTWF0aC5QSSAvIDE4MClcbiAgbGV0IHN1bSA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByaW5nLmxlbmd0aCAtIDE7IGkrKykgc3VtICs9IGt4ICogcmluZ1tpXVswXSAqIDExMDU3NCAqIHJpbmdbaSArIDFdWzFdIC0ga3ggKiByaW5nW2kgKyAxXVswXSAqIDExMDU3NCAqIHJpbmdbaV1bMV1cbiAgcmV0dXJuIE1hdGguYWJzKHN1bSAvIDIpXG59XG5cbi8vIEEgbGVhZiBib3ggdGhpcyBsYXJnZSBzcGFucyBhIHdob2xlIGNvcnJpZG9yIChlLmcuIDg4NCDDlyA1NCBtIGluIEkxNikgYW5kIHdvdWxkIGhpZGUgdGhlIGJ1aWxkaW5ncyBhbG9uZyBpdDsgdGhlXG4vLyBzbWFsbGVyIGxlYXZlcyBhcm91bmQgaXQgYWxyZWFkeSBjb3ZlciB0aGUgc3RydWN0dXJlLlxuY29uc3QgTUFYX0xFQUZfQVJFQSA9IDIwMDAwXG5cbi8vIFJpbmdzIG9mIHRoZSBsZWFmIGJveGVzIG9mIGEgV0dTODQgc2NlbmUgbGF5ZXIgKOKApi9TY2VuZVNlcnZlci9sYXllcnMvMCk7IGVtcHR5IHdoZW4gdGhlIG5vZGUgcGFnZXMgY2FuJ3QgYmUgcmVhZC5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYWNrYWdlRm9vdHByaW50IChsYXllclVybDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxBcnJheTxbbnVtYmVyLCBudW1iZXJdPj4+IHtcbiAgY29uc3QgcmluZ3M6IEFycmF5PEFycmF5PFtudW1iZXIsIG51bWJlcl0+PiA9IFtdXG4gIGZvciAobGV0IHBhZ2UgPSAwOyA7IHBhZ2UrKykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bGF5ZXJVcmx9L25vZGVwYWdlcy8ke3BhZ2V9YCkuY2F0Y2goKCkgPT4gbnVsbClcbiAgICBpZiAoIXJlc3BvbnNlPy5vaykgYnJlYWtcbiAgICBjb25zdCB7IG5vZGVzIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMgPz8gW10pIHtcbiAgICAgIGlmICghbm9kZS5tZXNoIHx8IG5vZGUuY2hpbGRyZW4/Lmxlbmd0aCB8fCAhbm9kZS5vYmIpIGNvbnRpbnVlXG4gICAgICBjb25zdCByaW5nID0gb2JiUmluZyhub2RlLm9iYilcbiAgICAgIGlmIChhcmVhKHJpbmcpIDw9IE1BWF9MRUFGX0FSRUEpIHJpbmdzLnB1c2gocmluZylcbiAgICB9XG4gICAgaWYgKCFub2Rlcz8ubGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiByaW5nc1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfR3JhcGhpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX01hcF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX1dlYlNjZW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9pbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9Qb2x5Z29uX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0Jhc2VUaWxlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0dyYXBoaWNzTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfU2NlbmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19zdXBwb3J0X1NjZW5lRmlsdGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfdmlld3NfU2NlbmVWaWV3X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19TbGljZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuLy8gQ29uc3RydWN0aW9uIHByb2dyZXNzIG9mIEUxNSwgSTE2IGFuZCBFMTYgKFJldml0IENPTi1DTiBtb2RlbHMgYXMgM0Qgb2JqZWN0IHNjZW5lIGxheWVycyBzZXJ2ZWQgbG9jYWxseSBieVxuLy8gYXJjZ2lzLXBvYy9zZXJ2ZS5tanMpIHBsdXMgYW4gb3V0cHV0IGRhdGEgc291cmNlIHdpdGggb25lIHJlY29yZCBwZXIgZWxlbWVudCwgZmlsbGVkIGluIHRoZSBicm93c2VyIGZyb21cbi8vIC9kYXRhL2F2YW5jZS1lbGVtZW50cy5qc29uLiBOYXRpdmUgQ2hhcnQsIFRhYmxlLCBGaWx0ZXIgYW5kIExpc3Qgd2lkZ2V0cyB1c2UgdGhhdCBkYXRhIHNvdXJjZTsgdGhpcyB3aWRnZXQga2VlcHNcbi8vIHRoZSAzRCB2aWV3IGluIHN0ZXAgd2l0aCBpdDogZmlsdGVycyBmcm9tIG90aGVyIHdpZGdldHMgaGlkZSBlbGVtZW50cywgc2VsZWN0aW9ucyBhcmUgaGlnaGxpZ2h0ZWQsIGFuZCBhIGNsaWNrIGluXG4vLyB0aGUgc2NlbmUgc2VsZWN0cyB0aGUgZWxlbWVudCdzIHJlY29yZC4gTm90aGluZyBpcyByZWFkIGZyb20gb3Igd3JpdHRlbiB0byBhIHBvcnRhbC5cbmltcG9ydCB7XG4gIFJlYWN0LCBqc3gsIGNzcywgSW1tdXRhYmxlLCBEYXRhU291cmNlQ29tcG9uZW50LCBEYXRhU291cmNlU3RhdHVzLCBSZWFjdFJlZHV4LCBnZXRBcHBTdG9yZSwgYXBwQWN0aW9ucyxcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcywgdHlwZSBGZWF0dXJlTGF5ZXJEYXRhU291cmNlLCB0eXBlIEltbXV0YWJsZUFycmF5LCB0eXBlIElNU3RhdGVcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IEFyY0dJU01hcCBmcm9tICdlc3JpL01hcCdcbmltcG9ydCBXZWJTY2VuZSBmcm9tICdlc3JpL1dlYlNjZW5lJ1xuaW1wb3J0IFNjZW5lVmlldyBmcm9tICdlc3JpL3ZpZXdzL1NjZW5lVmlldydcbmltcG9ydCBTY2VuZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL1NjZW5lTGF5ZXInXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInXG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnXG5pbXBvcnQgUG9pbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9Qb2ludCdcbmltcG9ydCBQb2x5Z29uIGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9seWdvbidcbmltcG9ydCBTbGljZSBmcm9tICdlc3JpL3dpZGdldHMvU2xpY2UnXG5pbXBvcnQgU2NlbmVGaWx0ZXIgZnJvbSAnZXNyaS9sYXllcnMvc3VwcG9ydC9TY2VuZUZpbHRlcidcbmltcG9ydCB7IENVVE9GRl9TVEFURV9LRVksIFNDSEVEVUxFLCBpc29EYXksIHNjaGVkdWxlQ2xhc3MsIHRpbWVsYXBzZVdoZXJlLCB0b2RheSB9IGZyb20gJy4vYXZhbmNlLXNjaGVkdWxlJ1xuaW1wb3J0IHsgU2NoZWR1bGVQYW5lbCB9IGZyb20gJy4vYXZhbmNlLXNjaGVkdWxlLXBhbmVsJ1xuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IEZJRUxEX05BTUVTLCBJRF9GSUVMRCB9IGZyb20gJy4uL291dHB1dC1zY2hlbWEnXG5pbXBvcnQgeyBCQVNFTUFQUywgY3JlYXRlQmFzZW1hcFN3aXRjaGVyIH0gZnJvbSAnLi9iYXNlbWFwcydcbmltcG9ydCB7IHBhY2thZ2VGb290cHJpbnQgfSBmcm9tICcuL3BhY2thZ2UtZm9vdHByaW50J1xuXG4vLyBTdGF0dXMgcnVsZSBvZiBidWlsZF9hdmFuY2UucHk6IG5vICUgLT4gU2luIGRhdG8sID49IDEwMCAtPiBUZXJtaW5hZG8sIDw9IDAgLT4gTm8gaW5pY2lhZG8sIGVsc2UgRW4gY3Vyc28uXG5jb25zdCBTVEFUVVMgPSBbXG4gIHsgdmFsdWU6ICdUZXJtaW5hZG8nLCBjb2xvcjogWzY4LCAxOTcsIDEzOF0sIGNzczogJyM0NGM1OGEnIH0sXG4gIHsgdmFsdWU6ICdFbiBjdXJzbycsIGNvbG9yOiBbMjQyLCAyMDEsIDc2XSwgY3NzOiAnI2YyYzk0YycgfSxcbiAgeyB2YWx1ZTogJ05vIGluaWNpYWRvJywgY29sb3I6IFsyMzksIDEwMCwgMTAwXSwgY3NzOiAnI2VmNjQ2NCcgfSxcbiAgeyB2YWx1ZTogJ1NpbiBkYXRvJywgY29sb3I6IFsxNTQsIDE2NSwgMTc3XSwgY3NzOiAnIzlhYTViMScgfVxuXVxuY29uc3QgU0VDVElPTl9MQUJFTFMgPSB7IEUxNTogJ0VzdGFjacOzbiAxNSDCtyBDYWxsZSA2MycsIEkxNjogJ0ludGVyZXN0YWNpw7NuIDE2IMK3IHZpYWR1Y3RvJywgRTE2OiAnRXN0YWNpw7NuIDE2IMK3IENhbGxlIDcyJyB9XG5jb25zdCBLRVlfRklFTERTOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPiA9IFtcbiAgWydBdmFuY2UnLCAnQXZhbmNlICglKSddLCBbJ0FjdGl2aWRhZCcsICdBY3RpdmlkYWQnXSwgWydBY3RpdmlkYWROb21icmUnLCAnTm9tYnJlIGRlIGFjdGl2aWRhZCddLCBbJ0ZlY2hhSW5pY2lvJywgJ0luaWNpbyddLFxuICBbJ0ZlY2hhRmluJywgJ0ZpbiddLCBbJ0NvbnRyYXRpc3RhJywgJ0NvbnRyYXRpc3RhJ10sIFsnVUUnLCAnVW5pZGFkIGRlIGVqZWN1Y2nDs24nXSwgWydDYXRlZ29yaWEnLCAnQ2F0ZWdvcsOtYSddLCBbJ0ZhbWlseScsICdGYW1pbGlhJ10sXG4gIFsnVHlwZScsICdUaXBvJ10sIFsnTml2ZWwnLCAnTml2ZWwnXSwgWydJZmNHVUlEJywgJ0lmY0dVSUQnXSwgWydFeHRJZCcsICdJRCBkZSBSZXZpdCddLCBbJ1NlY2Npb24nLCAnU2VjY2nDs24nXSwgWydNb2RlbG8nLCAnTW9kZWxvIFJldml0J11cbl1cbi8vIEhvc3RlZCBzY2VuZSBsYXllcnMgb2YgdGhlIHNhbWUgcHJvZ3Jlc3MgcGFja2FnZXMgKHB1YmxpYywgZ292LWVzcmktY28gcG9ydGFsIGl0ZW1zIDBiNTY5ZGFj4oCmLCBkNmVkMGMwN+KApiwgNDRjNGNkMTfigKYpO1xuLy8gc2VjdGlvbnMgd2l0aG91dCBvbmUgbG9hZCBmcm9tIHRoZSBsb2NhbCBzZXJ2ZS5tanMuIFNhbWUgT0JKRUNUSURfMSwgc28gYXZhbmNlLWVsZW1lbnRzLmpzb24gc3RpbGwgbWF0Y2hlcyB0aGVtLlxuY29uc3QgSE9TVEVEX1NFQ1RJT05TID0ge1xuICBFMTU6ICdodHRwczovL3RpbGVzLmFyY2dpcy5jb20vdGlsZXMvQlFUUUJOQnNteGpGOHZ1cy9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9FMTVfQXZhbmNlXzNET2JqZWN0L1NjZW5lU2VydmVyL2xheWVycy8wJyxcbiAgSTE2OiAnaHR0cHM6Ly90aWxlcy5hcmNnaXMuY29tL3RpbGVzL0JRVFFCTkJzbXhqRjh2dXMvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvSTE2X0F2YW5jZV8zRE9iamVjdF8vU2NlbmVTZXJ2ZXIvbGF5ZXJzLzAnLFxuICBFMTY6ICdodHRwczovL3RpbGVzLmFyY2dpcy5jb20vdGlsZXMvQlFUUUJOQnNteGpGOHZ1cy9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9FMTZfQXZhbmNlXzNET2JqZWN0L1NjZW5lU2VydmVyL2xheWVycy8wJ1xufVxuY29uc3Qgc2VjdGlvblVybCA9IChzZXJ2ZXI6IHN0cmluZywgbmFtZTogc3RyaW5nKTogc3RyaW5nID0+IEhPU1RFRF9TRUNUSU9OU1tuYW1lLnJlcGxhY2UoL15BVl8vLCAnJyldID8/IGAke3NlcnZlcn0vc2xway8ke25hbWV9L1NjZW5lU2VydmVyL2xheWVycy8wYFxuLy8gRGVmYXVsdCBzY2VuZSB0byBkcmF3IG9uOiDCq0F2YW5jZSBkZSBvYnJhIC0gUExNQsK7IGluIHRoZSBTRFAgcG9ydGFsLCB3aGljaCBob2xkcyB0aGUgdGhyZWUgc2VydmljZXMgYW5kIHRoZSB2b2x1bWV0cnkuXG5jb25zdCBERUZBVUxUX1dFQl9TQ0VORSA9ICdodHRwczovL3NpbnVwb3RkZXMuc2RwLmdvdi5jby9wb3J0YWxwL2hvbWUvd2Vic2NlbmUvdmlld2VyLmh0bWw/d2Vic2NlbmU9ODM5ZGU1YmRmYTgxNGY2MGIyYTFiYWE3NDNiYzdmNTYnXG4vLyBQb3J0YWwgVVJMIGFuZCBpdGVtIGlkIGZyb20gYSB3ZWIgc2NlbmUgdmlld2VyIG9yIGl0ZW0gVVJMLlxuY29uc3QgcGFyc2VXZWJTY2VuZSA9ICh1cmw6IHN0cmluZyk6IHsgcG9ydGFsVXJsOiBzdHJpbmcsIGlkOiBzdHJpbmcgfSB8IG51bGwgPT4ge1xuICBjb25zdCBpZCA9IHVybD8ubWF0Y2goLyg/OndlYnNjZW5lfGlkKT0oWzAtOWEtZl17MzJ9KS9pKT8uWzFdXG4gIHJldHVybiBpZCA/IHsgcG9ydGFsVXJsOiB1cmwuc3BsaXQoL1xcLyg/OmhvbWV8YXBwcylcXC8vKVswXSwgaWQgfSA6IG51bGxcbn1cbmNvbnN0IHNlcnZpY2VVcmwgPSAodXJsOiBzdHJpbmcpOiBzdHJpbmcgPT4gdXJsPy5yZXBsYWNlKC9cXC9sYXllcnNcXC9cXGQrXFwvPyQvLCAnJykucmVwbGFjZSgvXFwvJC8sICcnKS50b0xvd2VyQ2FzZSgpXG4vLyBUaGUgc2NlbmUgbGF5ZXIgb2YgYSBtYXAgdGhhdCBwb2ludHMgdG8gdGhlIGdpdmVuIHNlcnZpY2UsIGlmIGFueS5cbmNvbnN0IGZpbmRTY2VuZUxheWVyID0gKG1hcDogQXJjR0lTTWFwLCB1cmw6IHN0cmluZyk6IFNjZW5lTGF5ZXIgPT5cbiAgbWFwLmFsbExheWVycy5maW5kKGwgPT4gbC50eXBlID09PSAnc2NlbmUnICYmIHNlcnZpY2VVcmwoKGwgYXMgU2NlbmVMYXllcikudXJsKSA9PT0gc2VydmljZVVybCh1cmwpKSBhcyBTY2VuZUxheWVyXG4vLyBQdWJsaWMgYnVpbGRpbmcgdm9sdW1ldHJ5IChmYWNhZGVzKSBmcm9tIHRoZSBFc3JpIENvbG9tYmlhIHBvcnRhbCwgaXRlbSA5MzVjMDYwNWQ2OTE0MjVhYjU1ZmQ0ZTYzYzhjNTQ0ZC5cbmNvbnN0IFZPTFVNRVRSWV9VUkwgPSAnaHR0cHM6Ly9hcmNnaXMuZXNyaS5jby9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvVm9sdW1ldHJpYV8yMDIxX19PY3R1YnJlXzIwMjZfRmFjaGFkYS9TY2VuZVNlcnZlci9sYXllcnMvMCdcbmNvbnN0IEhJR0hMSUdIVF9MSU1JVCA9IDUwMDAgLy8gbGFyZ2VyIHNlbGVjdGlvbnMgYXJlIGNvdW50ZWQgYnV0IG5vdCBoaWdobGlnaHRlZCwgdG8ga2VlcCB0aGUgdmlldyByZXNwb25zaXZlXG5cbmNvbnN0IG1lc2hGaWxsID0gKGNvbG9yOiBudW1iZXJbXSB8IG51bGwpID0+ICh7IHR5cGU6ICdtZXNoLTNkJywgc3ltYm9sTGF5ZXJzOiBbeyB0eXBlOiAnZmlsbCcsIG1hdGVyaWFsOiBjb2xvciA/IHsgY29sb3IsIGNvbG9yTWl4TW9kZTogJ3JlcGxhY2UnIH0gOiB1bmRlZmluZWQgfV0gfSlcbmNvbnN0IFJFTkRFUkVSUyA9IHtcbiAgc3RhdHVzOiB7XG4gICAgdHlwZTogJ3VuaXF1ZS12YWx1ZScsXG4gICAgZmllbGQ6ICdFc3RhZG9BdmFuY2UnLFxuICAgIHVuaXF1ZVZhbHVlSW5mb3M6IFNUQVRVUy5tYXAocyA9PiAoeyB2YWx1ZTogcy52YWx1ZSwgbGFiZWw6IHMudmFsdWUsIHN5bWJvbDogbWVzaEZpbGwoWy4uLnMuY29sb3IsIHMudmFsdWUgPT09ICdTaW4gZGF0bycgPyAwLjU1IDogMV0pIH0pKSxcbiAgICBkZWZhdWx0U3ltYm9sOiBtZXNoRmlsbChbMTU0LCAxNjUsIDE3NywgMC41NV0pXG4gIH0sXG4gIC8vIFBhY2thZ2UgZHJhd2luZ0luZm8gY2FycmllcyBhIHBvbHlnb24tM2QgcmVuZGVyZXIsIHdoaWNoIDNEIG9iamVjdCBsYXllcnMgcmVqZWN0OyBkcmF3IHdpdGggc291cmNlIGNvbG91cnMuXG4gIHNvdXJjZTogeyB0eXBlOiAnc2ltcGxlJywgc3ltYm9sOiBtZXNoRmlsbChudWxsKSB9XG59XG4vLyBTY2hlZHVsZSBjb2xvdXJzIGRlcGVuZCBvbiB0aGUgY3V0LW9mZiBkYXRlLCBzbyBlYWNoIHNlY3Rpb24gZ2V0cyBhIHVuaXF1ZS12YWx1ZSByZW5kZXJlciBvbiBpdHMgb2JqZWN0IGlkczsgb25seVxuLy8gZWxlbWVudHMgd2l0aCBhY3Rpdml0eSBkYXRlcyBhcmUgbGlzdGVkLCB0aGUgcmVzdCB0YWtlIHRoZSDCq1NpbiBwcm9ncmFtYWNpw7NuwrsgZGVmYXVsdC5cbmZ1bmN0aW9uIHNjaGVkdWxlUmVuZGVyZXIgKGVsZW1lbnRzOiBBcnJheTx7IFtmaWVsZDogc3RyaW5nXTogYW55IH0+LCBjdXRvZmY6IG51bWJlcikge1xuICBjb25zdCBieUNsYXNzID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcltdPigpXG4gIGZvciAoY29uc3QgYSBvZiBlbGVtZW50cykge1xuICAgIGNvbnN0IHZhbHVlID0gc2NoZWR1bGVDbGFzcyhhLCBjdXRvZmYpXG4gICAgaWYgKCFieUNsYXNzLmhhcyh2YWx1ZSkpIGJ5Q2xhc3Muc2V0KHZhbHVlLCBbXSlcbiAgICBieUNsYXNzLmdldCh2YWx1ZSkucHVzaChhLk9JRClcbiAgfVxuICBjb25zdCBzeW1ib2xzID0gbmV3IE1hcChTQ0hFRFVMRS5tYXAocyA9PiBbcy52YWx1ZSwgbWVzaEZpbGwoWy4uLnMuY29sb3IsIHMudmFsdWUgPT09ICdTaW4gcHJvZ3JhbWFjacOzbicgPyAwLjM1IDogMV0pXSkpXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ3VuaXF1ZS12YWx1ZScsXG4gICAgZmllbGQ6ICdPQkpFQ1RJRF8xJyxcbiAgICB1bmlxdWVWYWx1ZUluZm9zOiBbLi4uYnlDbGFzc10uZmxhdE1hcCgoW3ZhbHVlLCBvaWRzXSkgPT4gb2lkcy5tYXAob2lkID0+ICh7IHZhbHVlOiBvaWQsIGxhYmVsOiB2YWx1ZSwgc3ltYm9sOiBzeW1ib2xzLmdldCh2YWx1ZSkgfSkpKSxcbiAgICBkZWZhdWx0U3ltYm9sOiBzeW1ib2xzLmdldCgnU2luIHByb2dyYW1hY2nDs24nKVxuICB9XG59XG5jb25zdCBudW1iZXIgPSAodmFsdWU6IG51bWJlcikgPT4gTnVtYmVyKHZhbHVlKS50b0xvY2FsZVN0cmluZygnZXMtQ08nKVxuY29uc3Qgc3RhdHVzQ3NzID0gKHZhbHVlOiBzdHJpbmcpID0+IFNUQVRVUy5maW5kKHMgPT4gcy52YWx1ZSA9PT0gdmFsdWUpPy5jc3MgPz8gJyM5YWE1YjEnXG5jb25zdCBzY2hlZHVsZUNzcyA9ICh2YWx1ZTogc3RyaW5nKSA9PiBTQ0hFRFVMRS5maW5kKHMgPT4gcy52YWx1ZSA9PT0gdmFsdWUpPy5jc3MgPz8gJyM5YWE1YjEnXG5jb25zdCBTUElOX0RFR1JFRVNfUEVSX1NFQ09ORCA9IDZcblxuaW50ZXJmYWNlIFNlY3Rpb24geyBuYW1lOiBzdHJpbmcsIGNvZGU6IHN0cmluZywgbGF5ZXI6IF9fZXNyaS5TY2VuZUxheWVyLCBsYXllclZpZXc/OiBfX2VzcmkuU2NlbmVMYXllclZpZXcgfVxuaW50ZXJmYWNlIFRhYmxlIHtcbiAgYXR0cmlidXRlczogQXJyYXk8eyBbZmllbGQ6IHN0cmluZ106IGFueSB9PiAvLyBpbmRleCA9IHJlY29yZCBpZCAtIDFcbiAgcmVjb3JkSWRCeUVsZW1lbnQ6IE1hcDxzdHJpbmcsIG51bWJlcj4gLy8gYCR7U2VjY2lvbn06JHtPSUR9YCAtPiByZWNvcmQgaWRcbiAgbWF0Y2hlcjogX19lc3JpLkZlYXR1cmVMYXllciAvLyBjbGllbnQtc2lkZSBjb3B5IHRoYXQgZXZhbHVhdGVzIHRoZSBkYXRhIHNvdXJjZSdzIHdoZXJlIGNsYXVzZXNcbn1cblxuY29uc3Qgc3R5bGUgPSBjc3NgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgYmFja2dyb3VuZDogIzBiMTExNztcbiAgLnZpZXcgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyB9XG4gIC5wYW5lbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDEwcHg7IGxlZnQ6IDEwcHg7IHdpZHRoOiAzMDBweDsgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7IG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDI0LCAzMiwgMC45Mik7IGNvbG9yOiAjZTZlZGYzOyBib3JkZXItcmFkaXVzOiA2cHg7IHBhZGRpbmc6IDEwcHggMTJweDsgZm9udC1zaXplOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG4gIC5wYW5lbCBoMiB7IGZvbnQtc2l6ZTogMTNweDsgbWFyZ2luOiAwIDAgNnB4OyB9XG4gIC5wYW5lbCBoMyB7IGZvbnQtc2l6ZTogMTJweDsgbWFyZ2luOiAxMHB4IDAgNHB4OyBjb2xvcjogI2M1ZDFkYzsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAucGFuZWwgbGFiZWwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgbWFyZ2luOiAycHggMDsgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5wYW5lbCBsYWJlbCBzcGFuIHsgZmxleDogMTsgfVxuICAucGFuZWwgc2VsZWN0LCAucGFuZWwgaW5wdXRbdHlwZT1yYW5nZV0geyB3aWR0aDogMTAwJTsgfVxuICAucGFuZWwgYnV0dG9uIHsgYmFja2dyb3VuZDogIzIzMzAzZDsgY29sb3I6ICNlNmVkZjM7IGJvcmRlcjogMXB4IHNvbGlkICMzNDQ0NTM7IGJvcmRlci1yYWRpdXM6IDRweDsgcGFkZGluZzogMnB4IDhweDsgY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDEycHg7IH1cbiAgLnBhbmVsIGJ1dHRvbjpob3ZlciB7IGJhY2tncm91bmQ6ICMyZDNkNGQ7IH1cbiAgLm5vdGUgeyBjb2xvcjogIzhmYTNiNTsgbWFyZ2luOiA0cHggMCAwOyBsaW5lLWhlaWdodDogMS4zNTsgfVxuICAubGVnZW5kIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IGdhcDogMnB4OyB9XG4gIC5zd2F0Y2ggeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAxMHB4OyBoZWlnaHQ6IDEwcHg7IGJvcmRlci1yYWRpdXM6IDJweDsgbWFyZ2luLXJpZ2h0OiA2cHg7IHZlcnRpY2FsLWFsaWduOiAtMXB4OyB9XG4gIGRsIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjsgZ2FwOiAycHggOHB4OyBtYXJnaW46IDRweCAwIDA7IH1cbiAgZHQgeyBjb2xvcjogIzhmYTNiNTsgfSBkZCB7IG1hcmdpbjogMDsgd29yZC1icmVhazogYnJlYWstd29yZDsgfVxuICAuc3RhdHVzIHsgbWFyZ2luLXRvcDogOHB4OyBjb2xvcjogIzhmYTNiNTsgfVxuICAuY29sbGFwc2UgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMTBweDsgbGVmdDogMTBweDsgfVxuICAudG9vbHMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDZweDsgZmxleC13cmFwOiB3cmFwOyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgLnBhbmVsIGJ1dHRvblthcmlhLXByZXNzZWQ9dHJ1ZV0geyBiYWNrZ3JvdW5kOiAjMmY2ZjlmOyBib3JkZXItY29sb3I6ICM0ZWE4ZmY7IH1cbiAgLnRpcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBwb2ludGVyLWV2ZW50czogbm9uZTsgbWF4LXdpZHRoOiAyODBweDsgYmFja2dyb3VuZDogcmdiYSgxNiwgMjQsIDMyLCAwLjk1KTsgY29sb3I6ICNlNmVkZjM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM0NDQ1MzsgYm9yZGVyLXJhZGl1czogNHB4OyBwYWRkaW5nOiA2cHggOHB4OyBmb250LXNpemU6IDEycHg7IGxpbmUtaGVpZ2h0OiAxLjM1OyB6LWluZGV4OiAyO1xuICB9XG4gIC50aXAgYiB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAycHg7IH1cbiAgLnRpcCBzcGFuIHsgY29sb3I6ICM4ZmEzYjU7IH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IHNlcnZlciA9IChwcm9wcy5jb25maWc/LnNlcnZlclVybCA/PyAnaHR0cHM6Ly9kdXJleWVzOTcuZ2l0aHViLmlvL2F2YW5jZS1wbG1iJykucmVwbGFjZSgvXFwvJC8sICcnKVxuICBjb25zdCBncm91cCA9IHByb3BzLmNvbmZpZz8uZ3JvdXAgPz8gJ2F2YW5jZSdcbiAgY29uc3Qgd2ViU2NlbmVVcmwgPSBwcm9wcy5jb25maWc/LndlYlNjZW5lVXJsID8/IERFRkFVTFRfV0VCX1NDRU5FXG4gIGNvbnN0IG91dHB1dElkID0gcHJvcHMub3V0cHV0RGF0YVNvdXJjZXM/LlswXVxuICBjb25zdCB1c2VEYXRhU291cmNlID0gUmVhY3QudXNlTWVtbygoKSA9PiBvdXRwdXRJZCA/IEltbXV0YWJsZSh7IGRhdGFTb3VyY2VJZDogb3V0cHV0SWQsIG1haW5EYXRhU291cmNlSWQ6IG91dHB1dElkIH0pIDogbnVsbCwgW291dHB1dElkXSlcblxuICBjb25zdCBjb250YWluZXIgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IHZpZXdSZWYgPSBSZWFjdC51c2VSZWY8U2NlbmVWaWV3PihudWxsKVxuICBjb25zdCBzZWN0aW9uc1JlZiA9IFJlYWN0LnVzZVJlZjxTZWN0aW9uW10+KFtdKVxuICBjb25zdCBoaWdobGlnaHRzID0gUmVhY3QudXNlUmVmPF9fZXNyaS5IYW5kbGVbXT4oW10pXG4gIGNvbnN0IHRhYmxlUmVmID0gUmVhY3QudXNlUmVmPFRhYmxlPihudWxsKVxuICBjb25zdCBzd2l0Y2hCYXNlbWFwID0gUmVhY3QudXNlUmVmPCh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkPihudWxsKVxuICBjb25zdCB2b2x1bWV0cnlSZWYgPSBSZWFjdC51c2VSZWY8U2NlbmVMYXllcj4obnVsbClcblxuICBjb25zdCBbZHMsIHNldERzXSA9IFJlYWN0LnVzZVN0YXRlPEZlYXR1cmVMYXllckRhdGFTb3VyY2U+KG51bGwpXG4gIGNvbnN0IFt0YWJsZSwgc2V0VGFibGVdID0gUmVhY3QudXNlU3RhdGU8VGFibGU+KG51bGwpXG4gIGNvbnN0IFtzZWN0aW9ucywgc2V0U2VjdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8U2VjdGlvbltdPihbXSlcbiAgY29uc3QgW2xheWVyVmlld3NSZWFkeSwgc2V0TGF5ZXJWaWV3c1JlYWR5XSA9IFJlYWN0LnVzZVN0YXRlKDApXG4gIGNvbnN0IFtxdWVyeVZlcnNpb24sIHNldFF1ZXJ5VmVyc2lvbl0gPSBSZWFjdC51c2VTdGF0ZSgwKVxuICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8c3RyaW5nIHwgbnVtYmVyPj4oW10pXG4gIGNvbnN0IFtjb2xvck1vZGUsIHNldENvbG9yTW9kZV0gPSBSZWFjdC51c2VTdGF0ZTwnc3RhdHVzJyB8ICdzY2hlZHVsZScgfCAnc291cmNlJz4oJ3NjaGVkdWxlJylcbiAgLy8gQ3V0LW9mZiBkYXRlIGluIHRoZSBhcHAgc3RhdGUsIHNoYXJlZCB3aXRoIHRoZSBBdmFuY2UgNEQgd2lkZ2V0IGlmIGl0IGlzIGFsc28gaW4gdGhlIGV4cGVyaWVuY2UuXG4gIGNvbnN0IHNoYXJlZEN1dG9mZiA9IFJlYWN0UmVkdXgudXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS53aWRnZXRzU3RhdGU/LltDVVRPRkZfU1RBVEVfS0VZXT8uY3V0b2ZmIGFzIG51bWJlcilcbiAgY29uc3QgY3V0b2ZmID0gc2hhcmVkQ3V0b2ZmID8/IHRvZGF5KClcbiAgY29uc3Qgc2V0Q3V0b2ZmID0gUmVhY3QudXNlQ2FsbGJhY2soKHZhbHVlOiBudW1iZXIpID0+IHsgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShDVVRPRkZfU1RBVEVfS0VZLCAnY3V0b2ZmJywgdmFsdWUpKSB9LCBbXSlcbiAgY29uc3QgW2J1aWxkVXAsIHNldEJ1aWxkVXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtoaWRlVW5zY2hlZHVsZWQsIHNldEhpZGVVbnNjaGVkdWxlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdGltZWxhcHNlID0gY29sb3JNb2RlID09PSAnc2NoZWR1bGUnID8gdGltZWxhcHNlV2hlcmUoY3V0b2ZmLCBidWlsZFVwLCBoaWRlVW5zY2hlZHVsZWQpIDogbnVsbFxuICBjb25zdCBbdGlwLCBzZXRUaXBdID0gUmVhY3QudXNlU3RhdGU8eyB4OiBudW1iZXIsIHk6IG51bWJlciwgYTogeyBbZmllbGQ6IHN0cmluZ106IGFueSB9IH0+KG51bGwpXG4gIGNvbnN0IFtzbGljaW5nLCBzZXRTbGljaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc3Bpbm5pbmcsIHNldFNwaW5uaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZ3JvdW5kT3BhY2l0eSwgc2V0R3JvdW5kT3BhY2l0eV0gPSBSZWFjdC51c2VTdGF0ZSgxMDApXG4gIGNvbnN0IFt1bmRlcmdyb3VuZCwgc2V0VW5kZXJncm91bmRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtiYXNlbWFwLCBzZXRCYXNlbWFwXSA9IFJlYWN0LnVzZVN0YXRlKHBhcnNlV2ViU2NlbmUod2ViU2NlbmVVcmwpID8gJ3NjZW5lJyA6ICdpZGVjYScpXG4gIGNvbnN0IFt2b2x1bWV0cnlPbiwgc2V0Vm9sdW1ldHJ5T25dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2Jhc2VtYXBOb3RlLCBzZXRCYXNlbWFwTm90ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW3N0YXR1c1RleHQsIHNldFN0YXR1c1RleHRdID0gUmVhY3QudXNlU3RhdGUoJ0luaWNpYW5kb+KApicpXG4gIGNvbnN0IFt2aXNpYmxlQ291bnQsIHNldFZpc2libGVDb3VudF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KG51bGwpXG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICAvLyAtLS0tLS0tLS0tIFNjZW5lIGFuZCBsb2NhbCBwYWNrYWdlcyAtLS0tLS0tLS0tXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgZm9vdHByaW50TGF5ZXIgPSBuZXcgR3JhcGhpY3NMYXllcih7IHRpdGxlOiAnSHVlbGxhcyBDQUQnLCBlbGV2YXRpb25JbmZvOiB7IG1vZGU6ICdvbi10aGUtZ3JvdW5kJyB9IH0pXG4gICAgY29uc3Qgc2NlbmVJdGVtID0gcGFyc2VXZWJTY2VuZSh3ZWJTY2VuZVVybClcbiAgICBjb25zdCBtYXA6IEFyY0dJU01hcCA9IHNjZW5lSXRlbVxuICAgICAgPyBuZXcgV2ViU2NlbmUoeyBwb3J0YWxJdGVtOiB7IGlkOiBzY2VuZUl0ZW0uaWQsIHBvcnRhbDogeyB1cmw6IHNjZW5lSXRlbS5wb3J0YWxVcmwgfSB9IGFzIGFueSB9KVxuICAgICAgOiBuZXcgQXJjR0lTTWFwKHsgYmFzZW1hcDogJ3NhdGVsbGl0ZScsIGdyb3VuZDogJ3dvcmxkLWVsZXZhdGlvbicgfSlcbiAgICBzd2l0Y2hCYXNlbWFwLmN1cnJlbnQgPSBjcmVhdGVCYXNlbWFwU3dpdGNoZXIobWFwLCBzZXRCYXNlbWFwTm90ZSlcbiAgICBjb25zdCB2aWV3ID0gbmV3IFNjZW5lVmlldyh7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5jdXJyZW50LFxuICAgICAgbWFwLFxuICAgICAgcXVhbGl0eVByb2ZpbGU6ICdoaWdoJyxcbiAgICAgIGVudmlyb25tZW50OiB7IGxpZ2h0aW5nOiB7IHR5cGU6ICd2aXJ0dWFsJyB9IH0gYXMgYW55LFxuICAgICAgLy8gQSB3ZWIgc2NlbmUgb3BlbnMgYXQgaXRzIG93biBpbml0aWFsIHZpZXdwb2ludC5cbiAgICAgIC4uLihzY2VuZUl0ZW0gPyB7fSA6IHsgY2FtZXJhOiB7IHBvc2l0aW9uOiB7IGxvbmdpdHVkZTogLTc0LjA2NjIsIGxhdGl0dWRlOiA0LjY0NDAsIHo6IDMwNTAgfSwgaGVhZGluZzogMTUsIHRpbHQ6IDU1IH0gYXMgYW55IH0pLFxuICAgICAgdWk6IHsgY29tcG9uZW50czogWyd6b29tJywgJ2NvbXBhc3MnXSB9XG4gICAgfSlcbiAgICB2aWV3UmVmLmN1cnJlbnQgPSB2aWV3XG5cbiAgICBQcm9taXNlLmFsbChbXG4gICAgICAvLyBTZWN0aW9uczogdGhlIHdlYiBzY2VuZSdzIGxheWVycyBvZiB0aGUgcHJvZ3Jlc3Mgc2VydmljZXMsIG9yIHRoZSBsb2NhbCBwYWNrYWdlcyBsaXN0ZWQgYnkgc2VydmUubWpzLlxuICAgICAgc2NlbmVJdGVtXG4gICAgICAgID8gKG1hcCBhcyBXZWJTY2VuZSkubG9hZCgpLnRoZW4oKCkgPT4gT2JqZWN0LmtleXMoSE9TVEVEX1NFQ1RJT05TKS5tYXAoY29kZSA9PiBgQVZfJHtjb2RlfWApKVxuICAgICAgICA6IGZldGNoKGAke3NlcnZlcn0vc2xway9pbmRleC5qc29uP2dyb3VwPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGdyb3VwKX1gKS50aGVuKGFzeW5jIHIgPT4gci5vayA/IGF3YWl0IHIuanNvbigpIDogW10pLFxuICAgICAgZmV0Y2goYCR7c2VydmVyfS9wcmVkaWFsLXN0YXRpb24tZm9vdHByaW50cy5qc29uYCkudGhlbihhc3luYyByID0+IHIub2sgPyBhd2FpdCByLmpzb24oKSA6IHsgc3RhdGlvbnM6IFtdIH0sICgpID0+ICh7IHN0YXRpb25zOiBbXSB9KSlcbiAgICBdKS50aGVuKChbbmFtZXMsIGZvb3RwcmludHNdOiBbc3RyaW5nW10sIGFueV0pID0+IHtcbiAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVyblxuICAgICAgaWYgKCFuYW1lcy5sZW5ndGgpIHsgc2V0U3RhdHVzVGV4dChgTm8gaGF5IHBhcXVldGVzIGRlbCBncnVwbyDCqyR7Z3JvdXB9wrsgZW4gJHtzZXJ2ZXJ9LiDCv0VzdMOhIGNvcnJpZW5kbyBzZXJ2ZS5tanM/YCk7IHJldHVybiB9XG4gICAgICBjb25zdCB2b2x1bWV0cnkgPSBmaW5kU2NlbmVMYXllcihtYXAsIFZPTFVNRVRSWV9VUkwpID8/IG5ldyBTY2VuZUxheWVyKHsgdXJsOiBWT0xVTUVUUllfVVJMIH0pXG4gICAgICB2b2x1bWV0cnkuc2V0KHsgdGl0bGU6ICdWb2x1bWV0csOtYSAyMDIxIMK3IGZhY2hhZGFzJywgcG9wdXBFbmFibGVkOiBmYWxzZSB9KVxuICAgICAgaWYgKCFtYXAubGF5ZXJzLmluY2x1ZGVzKHZvbHVtZXRyeSkpIG1hcC5hZGQodm9sdW1ldHJ5LCAwKVxuICAgICAgdm9sdW1ldHJ5UmVmLmN1cnJlbnQgPSB2b2x1bWV0cnlcbiAgICAgIHNldFZvbHVtZXRyeU9uKHZvbHVtZXRyeS52aXNpYmxlKVxuICAgICAgbWFwLmFkZChmb290cHJpbnRMYXllcilcbiAgICAgIGNvbnN0IHN0YXRpb25SaW5nczogQXJyYXk8QXJyYXk8W251bWJlciwgbnVtYmVyXT4+ID0gW11cbiAgICAgIGNvbnN0IGxpc3Q6IFNlY3Rpb25bXSA9IG5hbWVzLm1hcChuYW1lID0+IHtcbiAgICAgICAgY29uc3QgY29kZSA9IG5hbWUucmVwbGFjZSgvXkFWXy8sICcnKVxuICAgICAgICBjb25zdCB1cmwgPSBzZWN0aW9uVXJsKHNlcnZlciwgbmFtZSlcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBmaW5kU2NlbmVMYXllcihtYXAsIHVybCkgPz8gbmV3IFNjZW5lTGF5ZXIoeyB1cmwgfSlcbiAgICAgICAgbGF5ZXIuc2V0KHsgdGl0bGU6IFNFQ1RJT05fTEFCRUxTW2NvZGVdID8/IG5hbWUsIG91dEZpZWxkczogWycqJ10sIHBvcHVwRW5hYmxlZDogZmFsc2UsIHZpc2libGU6IHRydWUsIHJlbmRlcmVyOiBSRU5ERVJFUlMuc3RhdHVzIGFzIGFueSB9KVxuICAgICAgICBpZiAoIW1hcC5hbGxMYXllcnMuaW5jbHVkZXMobGF5ZXIpKSBtYXAuYWRkKGxheWVyKVxuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgZm9vdHByaW50cy5zdGF0aW9ucz8uZmluZChzID0+IHMuc3RhdGlvbiA9PT0gY29kZSk/LnBhcnRzID8/IFtdKSB7XG4gICAgICAgICAgc3RhdGlvblJpbmdzLnB1c2gocGFydC5jb29yZGluYXRlcylcbiAgICAgICAgICBmb290cHJpbnRMYXllci5hZGQobmV3IEdyYXBoaWMoe1xuICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2x5Z29uKHsgcmluZ3M6IFtwYXJ0LmNvb3JkaW5hdGVzXSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gfSksXG4gICAgICAgICAgICBzeW1ib2w6IHsgdHlwZTogJ3NpbXBsZS1maWxsJywgY29sb3I6IFsyNTUsIDE1OSwgNjcsIDAuMl0sIG91dGxpbmU6IHsgY29sb3I6IFsyNTUsIDIwOSwgMTYxXSwgd2lkdGg6IDEuMiB9IH0gYXMgYW55XG4gICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgbmFtZSwgY29kZSwgbGF5ZXIgfVxuICAgICAgfSlcbiAgICAgIHNlY3Rpb25zUmVmLmN1cnJlbnQgPSBsaXN0XG4gICAgICBzZXRTZWN0aW9ucyhsaXN0KVxuICAgICAgLy8gSGlkZSB0aGUgdm9sdW1ldHJ5IGJ1aWxkaW5ncyB0aGF0IHRvdWNoIGEgc3RhdGlvbjogcHJlZGlhbCBmb290cHJpbnRzIHBsdXMgdGhlIHBhY2thZ2VzJyBvd24gbGVhZiBib3hlcy5cbiAgICAgIFByb21pc2UuYWxsKG5hbWVzLm1hcChhc3luYyBuYW1lID0+IGF3YWl0IHBhY2thZ2VGb290cHJpbnQoc2VjdGlvblVybChzZXJ2ZXIsIG5hbWUpKSkpLnRoZW4ocGFja2FnZXMgPT4ge1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm5cbiAgICAgICAgY29uc3QgcmluZ3MgPSBbLi4uc3RhdGlvblJpbmdzLCAuLi5wYWNrYWdlcy5mbGF0KCldXG4gICAgICAgIHZvbHVtZXRyeS5maWx0ZXIgPSBuZXcgU2NlbmVGaWx0ZXIoe1xuICAgICAgICAgIGdlb21ldHJpZXM6IHJpbmdzLm1hcChyaW5nID0+IG5ldyBQb2x5Z29uKHsgcmluZ3M6IFtyaW5nXSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gfSkpLFxuICAgICAgICAgIHNwYXRpYWxSZWxhdGlvbnNoaXA6ICdkaXNqb2ludCdcbiAgICAgICAgfSlcbiAgICAgIH0sIGVycm9yID0+IHsgY29uc29sZS53YXJuKCd2b2x1bWV0cnkgZmlsdGVyJywgZXJyb3IpIH0pXG4gICAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2YgbGlzdCkge1xuICAgICAgICB2aWV3LndoZW5MYXllclZpZXcoc2VjdGlvbi5sYXllcikudGhlbihsYXllclZpZXcgPT4ge1xuICAgICAgICAgIHNlY3Rpb24ubGF5ZXJWaWV3ID0gbGF5ZXJWaWV3IGFzIF9fZXNyaS5TY2VuZUxheWVyVmlld1xuICAgICAgICAgIHNldExheWVyVmlld3NSZWFkeShuID0+IG4gKyAxKVxuICAgICAgICB9LCBlcnJvciA9PiB7IGNvbnNvbGUuZXJyb3Ioc2VjdGlvbi5uYW1lLCBlcnJvcik7IHNldFN0YXR1c1RleHQoYE5vIHNlIHB1ZG8gY2FyZ2FyICR7c2VjdGlvbi5uYW1lfTogJHtlcnJvci5tZXNzYWdlfWApIH0pXG4gICAgICB9XG4gICAgICBpZiAoIXNjZW5lSXRlbSkgdmlldy53aGVuKCgpID0+IHsgaG9tZSgpIH0sIChlcnJvcjogRXJyb3IpID0+IHsgY29uc29sZS53YXJuKCdTY2VuZVZpZXcnLCBlcnJvcikgfSlcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgc2V0U3RhdHVzVGV4dChzY2VuZUl0ZW0gPyBgTm8gc2UgcHVkbyBhYnJpciBlbCB3ZWIgc2NlbmU6ICR7ZXJyb3IubWVzc2FnZX1gIDogYE5vIHNlIHB1ZG8gbGVlciAke3NlcnZlcn06ICR7ZXJyb3IubWVzc2FnZX0uIEluaWNpYSBzZXJ2ZS5tanMuYClcbiAgICB9KVxuXG4gICAgdmlldy5vbignY2xpY2snLCBldmVudCA9PiB7IG9uU2NlbmVDbGljayhldmVudCkgfSlcbiAgICB2aWV3Lm9uKCdwb2ludGVyLW1vdmUnLCBldmVudCA9PiB7IG9uUG9pbnRlck1vdmUoZXZlbnQpIH0pXG4gICAgdmlldy5vbigncG9pbnRlci1sZWF2ZScsICgpID0+IHsgc2V0VGlwKG51bGwpIH0pXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZTsgdmlldy5kZXN0cm95KCk7IHZpZXdSZWYuY3VycmVudCA9IG51bGwgfVxuICB9LCBbc2VydmVyLCBncm91cCwgd2ViU2NlbmVVcmxdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7IHN3aXRjaEJhc2VtYXAuY3VycmVudD8uKGJhc2VtYXApIH0sIFtiYXNlbWFwXSlcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBncm91bmQgPSB2aWV3UmVmLmN1cnJlbnQ/Lm1hcC5ncm91bmRcbiAgICBpZiAoIWdyb3VuZCkgcmV0dXJuXG4gICAgZ3JvdW5kLm9wYWNpdHkgPSBncm91bmRPcGFjaXR5IC8gMTAwXG4gICAgLy8gQSBzZWUtdGhyb3VnaCBzdXJmYWNlIGlzIG9ubHkgdXNlZnVsIGlmIHRoZSBjYW1lcmEgbWF5IGFsc28gZ28gYmVsb3cgaXQuXG4gICAgZ3JvdW5kLm5hdmlnYXRpb25Db25zdHJhaW50ID0geyB0eXBlOiB1bmRlcmdyb3VuZCB8fCBncm91bmRPcGFjaXR5IDwgMTAwID8gJ25vbmUnIDogJ3N0YXktYWJvdmUnIH0gYXMgYW55XG4gIH0sIFtncm91bmRPcGFjaXR5LCB1bmRlcmdyb3VuZF0pXG4gIC8vIFNjaGVkdWxlZCBlbGVtZW50cyBwZXIgc2VjdGlvbiwgZm9yIHRoZSBzY2hlZHVsZSByZW5kZXJlci5cbiAgY29uc3Qgc2NoZWR1bGVkQnlTZWN0aW9uID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PHsgW2ZpZWxkOiBzdHJpbmddOiBhbnkgfT4+KClcbiAgICBmb3IgKGNvbnN0IGEgb2YgdGFibGU/LmF0dHJpYnV0ZXMgPz8gW10pIHtcbiAgICAgIGlmIChhLkZlY2hhSW5pY2lvRGF0ZSA9PSBudWxsICYmIGEuRmVjaGFGaW5EYXRlID09IG51bGwpIGNvbnRpbnVlXG4gICAgICBpZiAoIW1hcC5oYXMoYS5TZWNjaW9uKSkgbWFwLnNldChhLlNlY2Npb24sIFtdKVxuICAgICAgbWFwLmdldChhLlNlY2Npb24pLnB1c2goYSlcbiAgICB9XG4gICAgcmV0dXJuIG1hcFxuICB9LCBbdGFibGVdKVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZvciAoY29uc3QgcyBvZiBzZWN0aW9ucykge1xuICAgICAgcy5sYXllci5yZW5kZXJlciA9IChjb2xvck1vZGUgPT09ICdzY2hlZHVsZScgPyBzY2hlZHVsZVJlbmRlcmVyKHNjaGVkdWxlZEJ5U2VjdGlvbi5nZXQocy5jb2RlKSA/PyBbXSwgY3V0b2ZmKSA6IFJFTkRFUkVSU1tjb2xvck1vZGVdKSBhcyBhbnlcbiAgICB9XG4gIH0sIFtzZWN0aW9ucywgY29sb3JNb2RlLCBzY2hlZHVsZWRCeVNlY3Rpb24sIGN1dG9mZl0pXG5cbiAgLy8gU2xpY2UgdG9vbCBpbiB0aGUgdmlldydzIHRvcC1yaWdodCBjb3JuZXIgd2hpbGUgwqtDb3J0YXLCuyBpcyBvbi5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB2aWV3ID0gdmlld1JlZi5jdXJyZW50XG4gICAgaWYgKCFzbGljaW5nIHx8ICF2aWV3KSByZXR1cm5cbiAgICBjb25zdCBzbGljZSA9IG5ldyBTbGljZSh7IHZpZXcgfSlcbiAgICB2aWV3LnVpLmFkZChzbGljZSwgJ3RvcC1yaWdodCcpXG4gICAgcmV0dXJuICgpID0+IHsgdmlldy51aS5yZW1vdmUoc2xpY2UpOyBzbGljZS5kZXN0cm95KCkgfVxuICB9LCBbc2xpY2luZywgc2VjdGlvbnNdKVxuXG4gIC8vIE9yYml0IGFyb3VuZCB0aGUgY2VudHJlIG9mIHRoZSB2aWV3OyBhbnkgZHJhZyBvciB6b29tIGJ5IHRoZSB1c2VyIHN0b3BzIGl0LlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHZpZXcgPSB2aWV3UmVmLmN1cnJlbnRcbiAgICBpZiAoIXNwaW5uaW5nIHx8ICF2aWV3KSByZXR1cm5cbiAgICBsZXQgZnJhbWUgPSAwXG4gICAgbGV0IGxhc3QgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgIGNvbnN0IHR1cm4gPSAobm93OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGNhbWVyYSA9IHZpZXcuY2FtZXJhLmNsb25lKClcbiAgICAgIGNhbWVyYS5oZWFkaW5nID0gKGNhbWVyYS5oZWFkaW5nICsgU1BJTl9ERUdSRUVTX1BFUl9TRUNPTkQgKiAobm93IC0gbGFzdCkgLyAxMDAwKSAlIDM2MFxuICAgICAgbGFzdCA9IG5vd1xuICAgICAgdmlldy5nb1RvKHsgdGFyZ2V0OiB2aWV3LmNlbnRlciwgaGVhZGluZzogY2FtZXJhLmhlYWRpbmcsIHRpbHQ6IGNhbWVyYS50aWx0LCBzY2FsZTogdmlldy5zY2FsZSB9LCB7IGFuaW1hdGU6IGZhbHNlIH0pLmNhdGNoKCgpID0+IG51bGwpXG4gICAgICBmcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0dXJuKVxuICAgIH1cbiAgICBmcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0dXJuKVxuICAgIGNvbnN0IHN0b3AgPSB2aWV3Lm9uKFsnZHJhZycsICdtb3VzZS13aGVlbCddIGFzIGFueSwgKCkgPT4geyBzZXRTcGlubmluZyhmYWxzZSkgfSlcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZSk7IHN0b3AucmVtb3ZlKCkgfVxuICB9LCBbc3Bpbm5pbmddKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhvbWUgKCkge1xuICAgIGNvbnN0IHZpZXcgPSB2aWV3UmVmLmN1cnJlbnRcbiAgICBjb25zdCBleHRlbnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoc2VjdGlvbnNSZWYuY3VycmVudC5maWx0ZXIocyA9PiBzLmxheWVyLnZpc2libGUpLm1hcChhc3luYyBzID0+IGF3YWl0IHMubGF5ZXIud2hlbigpLnRoZW4obCA9PiBsLmZ1bGxFeHRlbnQsICgpID0+IG51bGwpKSlcbiAgICBjb25zdCB2YWxpZCA9IGV4dGVudHMuZmlsdGVyKEJvb2xlYW4pXG4gICAgaWYgKCF2aWV3IHx8ICF2YWxpZC5sZW5ndGgpIHJldHVyblxuICAgIGNvbnN0IHVuaW9uID0gdmFsaWQucmVkdWNlKChhLCBiKSA9PiBhLmNsb25lKCkudW5pb24oYikpXG4gICAgdmlldy5nb1RvKHsgdGFyZ2V0OiB1bmlvbi5leHBhbmQoMS4xKSwgdGlsdDogNTUsIGhlYWRpbmc6IDE1IH0sIHsgZHVyYXRpb246IDEyMDAgfSkuY2F0Y2goZXJyb3IgPT4geyBjb25zb2xlLndhcm4oJ2dvVG8nLCBlcnJvcikgfSlcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBnb1RvIChzZWN0aW9uOiBTZWN0aW9uKSB7XG4gICAgYXdhaXQgc2VjdGlvbi5sYXllci53aGVuKClcbiAgICB2aWV3UmVmLmN1cnJlbnQ/LmdvVG8oeyB0YXJnZXQ6IHNlY3Rpb24ubGF5ZXIuZnVsbEV4dGVudCwgdGlsdDogNjAsIGhlYWRpbmc6IDIwIH0sIHsgZHVyYXRpb246IDEyMDAgfSkuY2F0Y2goZXJyb3IgPT4geyBjb25zb2xlLndhcm4oJ2dvVG8nLCBlcnJvcikgfSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0gRWxlbWVudCB0YWJsZSAtPiBvdXRwdXQgZGF0YSBzb3VyY2UgLS0tLS0tLS0tLVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGZldGNoKGAke3NlcnZlcn0vZGF0YS9hdmFuY2UtZWxlbWVudHMuanNvbmApLnRoZW4oYXN5bmMgciA9PiB7XG4gICAgICBpZiAoIXIub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCAke3Iuc3RhdHVzfWApXG4gICAgICByZXR1cm4gYXdhaXQgci5qc29uKClcbiAgICB9KS50aGVuKCh7IGNvbHVtbnMsIHJvd3MgfTogeyBjb2x1bW5zOiBzdHJpbmdbXSwgcm93czogYW55W11bXSB9KSA9PiB7XG4gICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm5cbiAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSByb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY29yZDogeyBbZmllbGQ6IHN0cmluZ106IGFueSB9ID0geyBbSURfRklFTERdOiBpICsgMSB9XG4gICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBjKSA9PiB7IGlmIChGSUVMRF9OQU1FUy5pbmNsdWRlcyhjb2x1bW4pKSByZWNvcmRbY29sdW1uXSA9IHJvd1tjXSB9KVxuICAgICAgICByZXR1cm4gcmVjb3JkXG4gICAgICB9KVxuICAgICAgY29uc3QgcmVjb3JkSWRCeUVsZW1lbnQgPSBuZXcgTWFwKGF0dHJpYnV0ZXMubWFwKGEgPT4gW2Ake2EuU2VjY2lvbn06JHthLk9JRH1gLCBhW0lEX0ZJRUxEXV0pKVxuICAgICAgY29uc3QgbG9uID0gY29sdW1ucy5pbmRleE9mKCdsb24nKTsgY29uc3QgbGF0ID0gY29sdW1ucy5pbmRleE9mKCdsYXQnKVxuICAgICAgY29uc3QgbWF0Y2hlciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICBzb3VyY2U6IGF0dHJpYnV0ZXMubWFwKChhLCBpKSA9PiBuZXcgR3JhcGhpYyh7IGF0dHJpYnV0ZXM6IGEsIGdlb21ldHJ5OiBuZXcgUG9pbnQoeyBsb25naXR1ZGU6IHJvd3NbaV1bbG9uXSA/PyAwLCBsYXRpdHVkZTogcm93c1tpXVtsYXRdID8/IDAgfSkgfSkpLFxuICAgICAgICBvYmplY3RJZEZpZWxkOiBJRF9GSUVMRCxcbiAgICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSxcbiAgICAgICAgZmllbGRzOiBGSUVMRF9OQU1FUy5tYXAobmFtZSA9PiAoe1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgdHlwZTogbmFtZSA9PT0gSURfRklFTEQgPyAnb2lkJyA6IG5hbWUuZW5kc1dpdGgoJ0RhdGUnKSA/ICdkYXRlJyA6IFsnT0lEJywgJ0F2YW5jZScsICd6J10uaW5jbHVkZXMobmFtZSkgPyAnZG91YmxlJyA6ICdzdHJpbmcnXG4gICAgICAgIH0pKSBhcyBhbnlcbiAgICAgIH0pXG4gICAgICBjb25zdCBsb2FkZWQgPSB7IGF0dHJpYnV0ZXMsIHJlY29yZElkQnlFbGVtZW50LCBtYXRjaGVyIH1cbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQgPSBsb2FkZWRcbiAgICAgIHNldFRhYmxlKGxvYWRlZClcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpOyBzZXRTdGF0dXNUZXh0KGBObyBzZSBwdWRvIGxlZXIgbGEgdGFibGEgZGUgZWxlbWVudG9zOiAke2Vycm9yLm1lc3NhZ2V9YCkgfSlcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cbiAgfSwgW3NlcnZlcl0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRzIHx8ICF0YWJsZSkgcmV0dXJuXG4gICAgLy8gU2FtZSBtZWNoYW5pc20gYXMgdGhlIENoYXJ0IHdpZGdldCdzIG91dHB1dDogcmVjb3JkcyBrZXB0IGluIHRoZSBkYXRhIHNvdXJjZSBpbnN0YW5jZS5cbiAgICBkcy5zZXRTb3VyY2VSZWNvcmRzKHRhYmxlLmF0dHJpYnV0ZXMubWFwKGF0dHJpYnV0ZXMgPT4gZHMuYnVpbGRSZWNvcmQoeyBhdHRyaWJ1dGVzIH0gYXMgYW55KSkpXG4gICAgZHMuc2V0U3RhdHVzKERhdGFTb3VyY2VTdGF0dXMuVW5sb2FkZWQpXG4gICAgZHMuc2V0Q291bnRTdGF0dXMoRGF0YVNvdXJjZVN0YXR1cy5VbmxvYWRlZClcbiAgICBzZXRRdWVyeVZlcnNpb24odiA9PiB2ICsgMSlcbiAgfSwgW2RzLCB0YWJsZV0pXG5cbiAgLy8gLS0tLS0tLS0tLSBGaWx0ZXJzIHNldCBieSBvdGhlciB3aWRnZXRzLCBwbHVzIHRoaXMgcGFuZWwncyB0aW1lbGFwc2UgLT4gc2NlbmUgLS0tLS0tLS0tLVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdGFibGUpIHJldHVyblxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGV4cGVyaWVuY2UgPSAoZHM/LmdldEN1cnJlbnRRdWVyeVBhcmFtcygpIGFzIGFueSk/LndoZXJlXG4gICAgY29uc3Qgd2hlcmUgPSBbZXhwZXJpZW5jZSAmJiBleHBlcmllbmNlICE9PSAnMT0xJyA/IGAoJHtleHBlcmllbmNlIGFzIHN0cmluZ30pYCA6IG51bGwsIHRpbWVsYXBzZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyBBTkQgJylcbiAgICBjb25zdCBhcHBseSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghd2hlcmUpIHtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHNlY3Rpb25zUmVmLmN1cnJlbnQpIGlmIChzLmxheWVyVmlldykgcy5sYXllclZpZXcuZmlsdGVyID0gbnVsbFxuICAgICAgICBzZXRWaXNpYmxlQ291bnQobnVsbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBpZHMgPSBhd2FpdCB0YWJsZS5tYXRjaGVyLnF1ZXJ5T2JqZWN0SWRzKHsgd2hlcmUgfSlcbiAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVyblxuICAgICAgY29uc3QgYnlTZWN0aW9uID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcltdPigpXG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgICBjb25zdCBhID0gdGFibGUuYXR0cmlidXRlc1tOdW1iZXIoaWQpIC0gMV1cbiAgICAgICAgaWYgKCFieVNlY3Rpb24uaGFzKGEuU2VjY2lvbikpIGJ5U2VjdGlvbi5zZXQoYS5TZWNjaW9uLCBbXSlcbiAgICAgICAgYnlTZWN0aW9uLmdldChhLlNlY2Npb24pLnB1c2goYS5PSUQpXG4gICAgICB9XG4gICAgICAvLyBGaWx0ZXJlZC1vdXQgZWxlbWVudHMgYXJlIG5laXRoZXIgZHJhd24gbm9yIHJldHVybmVkIGJ5IGhpdFRlc3QuXG4gICAgICBmb3IgKGNvbnN0IHMgb2Ygc2VjdGlvbnNSZWYuY3VycmVudCkgaWYgKHMubGF5ZXJWaWV3KSBzLmxheWVyVmlldy5maWx0ZXIgPSB7IG9iamVjdElkczogYnlTZWN0aW9uLmdldChzLmNvZGUpID8/IFstMV0gfSBhcyBhbnlcbiAgICAgIHNldFZpc2libGVDb3VudChpZHMubGVuZ3RoKVxuICAgIH1cbiAgICBhcHBseSgpLmNhdGNoKGVycm9yID0+IHsgY29uc29sZS5lcnJvcignZmlsdHJvJywgZXJyb3IpOyBzZXRTdGF0dXNUZXh0KGBObyBzZSBwdWRvIGFwbGljYXIgZWwgZmlsdHJvOiAke2Vycm9yLm1lc3NhZ2V9YCkgfSlcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cbiAgfSwgW2RzLCB0YWJsZSwgcXVlcnlWZXJzaW9uLCBsYXllclZpZXdzUmVhZHksIHRpbWVsYXBzZV0pXG5cbiAgLy8gLS0tLS0tLS0tLSBTZWxlY3Rpb24gKGZyb20gYW55IHdpZGdldCkgLT4gaGlnaGxpZ2h0IC0tLS0tLS0tLS1cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGggb2YgaGlnaGxpZ2h0cy5jdXJyZW50KSBoLnJlbW92ZSgpXG4gICAgaGlnaGxpZ2h0cy5jdXJyZW50ID0gW11cbiAgICBpZiAoIXRhYmxlIHx8ICFzZWxlY3Rpb24ubGVuZ3RoKSByZXR1cm5cbiAgICBjb25zdCBieVNlY3Rpb24gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyW10+KClcbiAgICBmb3IgKGNvbnN0IGlkIG9mIHNlbGVjdGlvbi5zbGljZSgwLCBISUdITElHSFRfTElNSVQpKSB7XG4gICAgICBjb25zdCBhID0gdGFibGUuYXR0cmlidXRlc1tOdW1iZXIoaWQpIC0gMV1cbiAgICAgIGlmICghYSkgY29udGludWVcbiAgICAgIGlmICghYnlTZWN0aW9uLmhhcyhhLlNlY2Npb24pKSBieVNlY3Rpb24uc2V0KGEuU2VjY2lvbiwgW10pXG4gICAgICBieVNlY3Rpb24uZ2V0KGEuU2VjY2lvbikucHVzaChhLk9JRClcbiAgICB9XG4gICAgZm9yIChjb25zdCBzIG9mIHNlY3Rpb25zUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IG9pZHMgPSBieVNlY3Rpb24uZ2V0KHMuY29kZSlcbiAgICAgIGlmIChvaWRzICYmIHMubGF5ZXJWaWV3KSBoaWdobGlnaHRzLmN1cnJlbnQucHVzaChzLmxheWVyVmlldy5oaWdobGlnaHQob2lkcykpXG4gICAgfVxuICB9LCBbdGFibGUsIHNlbGVjdGlvbiwgbGF5ZXJWaWV3c1JlYWR5XSlcblxuICAvLyBBIGNsaWNrIHNlbGVjdHMgdGhlIGVsZW1lbnQncyByZWNvcmQsIHNvIFRhYmxlLCBMaXN0IGFuZCBDaGFydCBmb2xsb3cgdGhlIDNEIHZpZXcuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU2NlbmVDbGljayAoZXZlbnQ6IF9fZXNyaS5WaWV3Q2xpY2tFdmVudCkge1xuICAgIGNvbnN0IHZpZXcgPSB2aWV3UmVmLmN1cnJlbnRcbiAgICBjb25zdCBsYXllcnMgPSBzZWN0aW9uc1JlZi5jdXJyZW50LmZpbHRlcihzID0+IHMubGF5ZXIudmlzaWJsZSkubWFwKHMgPT4gcy5sYXllcilcbiAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGF3YWl0IHZpZXcuaGl0VGVzdChldmVudCwgeyBpbmNsdWRlOiBsYXllcnMgfSlcbiAgICBjb25zdCBoaXQgPSByZXN1bHRzLmZpbmQociA9PiByLnR5cGUgPT09ICdncmFwaGljJykgYXMgX19lc3JpLkdyYXBoaWNIaXRcbiAgICBjb25zdCBkYXRhU291cmNlID0gZHNSZWYuY3VycmVudFxuICAgIGlmICghaGl0KSB7IGRhdGFTb3VyY2U/LmNsZWFyU2VsZWN0aW9uKCk7IHNldFNlbGVjdGlvbihbXSk7IHJldHVybiB9XG4gICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25zUmVmLmN1cnJlbnQuZmluZChzID0+IHMubGF5ZXIgPT09IGhpdC5ncmFwaGljLmxheWVyKVxuICAgIGNvbnN0IHJlY29yZElkID0gdGFibGVSZWYuY3VycmVudD8ucmVjb3JkSWRCeUVsZW1lbnQuZ2V0KGAke3NlY3Rpb24uY29kZX06JHtoaXQuZ3JhcGhpYy5nZXRPYmplY3RJZCgpfWApXG4gICAgaWYgKHJlY29yZElkID09IG51bGwpIHsgc2V0U3RhdHVzVGV4dCgnRWwgZWxlbWVudG8gbm8gZXN0w6EgZW4gbGEgdGFibGEgZGUgYXZhbmNlOiByZWdlbmVyYSBhdmFuY2UtZWxlbWVudHMuanNvbi4nKTsgcmV0dXJuIH1cbiAgICBpZiAoZGF0YVNvdXJjZSkgZGF0YVNvdXJjZS5zZWxlY3RSZWNvcmRzQnlJZHMoW3JlY29yZElkXSk7IGVsc2Ugc2V0U2VsZWN0aW9uKFtyZWNvcmRJZF0pXG4gIH1cbiAgY29uc3QgZHNSZWYgPSBSZWFjdC51c2VSZWY8RmVhdHVyZUxheWVyRGF0YVNvdXJjZT4obnVsbClcbiAgZHNSZWYuY3VycmVudCA9IGRzXG5cbiAgLy8gSG92ZXIgY2FyZDogb25lIGhpdFRlc3QgYXQgYSB0aW1lLCB0aGUgbGF0ZXN0IHBvaW50ZXIgcG9zaXRpb24gd2lucy5cbiAgY29uc3QgaG92ZXIgPSBSZWFjdC51c2VSZWY8eyBidXN5OiBib29sZWFuLCBuZXh0OiBfX2VzcmkuVmlld1BvaW50ZXJNb3ZlRXZlbnQgfT4oeyBidXN5OiBmYWxzZSwgbmV4dDogbnVsbCB9KVxuICBhc3luYyBmdW5jdGlvbiBvblBvaW50ZXJNb3ZlIChldmVudDogX19lc3JpLlZpZXdQb2ludGVyTW92ZUV2ZW50KSB7XG4gICAgaG92ZXIuY3VycmVudC5uZXh0ID0gZXZlbnRcbiAgICBpZiAoaG92ZXIuY3VycmVudC5idXN5KSByZXR1cm5cbiAgICBob3Zlci5jdXJyZW50LmJ1c3kgPSB0cnVlXG4gICAgdHJ5IHtcbiAgICAgIHdoaWxlIChob3Zlci5jdXJyZW50Lm5leHQpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGhvdmVyLmN1cnJlbnQubmV4dFxuICAgICAgICBob3Zlci5jdXJyZW50Lm5leHQgPSBudWxsXG4gICAgICAgIGNvbnN0IHZpZXcgPSB2aWV3UmVmLmN1cnJlbnRcbiAgICAgICAgaWYgKCF2aWV3KSByZXR1cm5cbiAgICAgICAgY29uc3QgeyByZXN1bHRzIH0gPSBhd2FpdCB2aWV3LmhpdFRlc3QoY3VycmVudCwgeyBpbmNsdWRlOiBzZWN0aW9uc1JlZi5jdXJyZW50LmZpbHRlcihzID0+IHMubGF5ZXIudmlzaWJsZSkubWFwKHMgPT4gcy5sYXllcikgfSlcbiAgICAgICAgY29uc3QgaGl0ID0gcmVzdWx0cy5maW5kKHIgPT4gci50eXBlID09PSAnZ3JhcGhpYycpIGFzIF9fZXNyaS5HcmFwaGljSGl0XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBoaXQgJiYgc2VjdGlvbnNSZWYuY3VycmVudC5maW5kKHMgPT4gcy5sYXllciA9PT0gaGl0LmdyYXBoaWMubGF5ZXIpXG4gICAgICAgIGNvbnN0IHJlY29yZElkID0gc2VjdGlvbiAmJiB0YWJsZVJlZi5jdXJyZW50Py5yZWNvcmRJZEJ5RWxlbWVudC5nZXQoYCR7c2VjdGlvbi5jb2RlfToke2hpdC5ncmFwaGljLmdldE9iamVjdElkKCl9YClcbiAgICAgICAgc2V0VGlwKHJlY29yZElkID8geyB4OiBjdXJyZW50LngsIHk6IGN1cnJlbnQueSwgYTogdGFibGVSZWYuY3VycmVudC5hdHRyaWJ1dGVzW3JlY29yZElkIC0gMV0gfSA6IG51bGwpXG4gICAgICB9XG4gICAgfSBjYXRjaCB7IHNldFRpcChudWxsKSB9IGZpbmFsbHkgeyBob3Zlci5jdXJyZW50LmJ1c3kgPSBmYWxzZSB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tIFBhbmVsIC0tLS0tLS0tLS1cbiAgY29uc3QgdG90YWwgPSB0YWJsZT8uYXR0cmlidXRlcy5sZW5ndGggPz8gMFxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdGFibGUpIHJldHVyblxuICAgIGNvbnN0IGZpbHRlcmVkID0gdmlzaWJsZUNvdW50ID09IG51bGwgPyAnJyA6IGAgwrcgJHtudW1iZXIodmlzaWJsZUNvdW50KX0gdmlzaWJsZXMgY29uIGVsIGZpbHRybyBkZSBsYSBleHBlcmllbmNpYWBcbiAgICBzZXRTdGF0dXNUZXh0KGAke3NlY3Rpb25zLmxlbmd0aH0gc2VjY2lvbmVzIMK3ICR7bnVtYmVyKHRvdGFsKX0gZWxlbWVudG9zJHtmaWx0ZXJlZH0ke291dHB1dElkID8gJycgOiAnIMK3IGFicmUgbGEgY29uZmlndXJhY2nDs24gZGVsIHdpZGdldCBwYXJhIGNyZWFyIGxhIGZ1ZW50ZSBkZSBkYXRvcyd9YClcbiAgfSwgW3RhYmxlLCBzZWN0aW9ucy5sZW5ndGgsIHRvdGFsLCB2aXNpYmxlQ291bnQsIG91dHB1dElkXSlcblxuICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdGlvbi5sZW5ndGggPT09IDEgJiYgdGFibGUgPyB0YWJsZS5hdHRyaWJ1dGVzW051bWJlcihzZWxlY3Rpb25bMF0pIC0gMV0gOiBudWxsXG4gIGNvbnN0IHN0YXR1c0NvdW50cyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50czogeyBbc3RhdHVzOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9XG4gICAgZm9yIChjb25zdCBhIG9mIHRhYmxlPy5hdHRyaWJ1dGVzID8/IFtdKSBjb3VudHNbYS5Fc3RhZG9BdmFuY2VdID0gKGNvdW50c1thLkVzdGFkb0F2YW5jZV0gPz8gMCkgKyAxXG4gICAgcmV0dXJuIGNvdW50c1xuICB9LCBbdGFibGVdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3N0eWxlfSBjbGFzc05hbWU9XCJqaW11LXdpZGdldCB3aWRnZXQtYXZhbmNlLW9icmEtM2RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld1wiIHJlZj17Y29udGFpbmVyfSAvPlxuICAgICAge3RpcCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlwXCIgc3R5bGU9e3sgbGVmdDogdGlwLnggKyAxNCwgdG9wOiB0aXAueSArIDE0IH19PlxuICAgICAgICAgIDxiPnt0aXAuYS5GYW1pbHkgfHwgdGlwLmEuQ2F0ZWdvcmlhIHx8ICdFbGVtZW50byd9e3RpcC5hLk5pdmVsID8gYCDCtyAke3RpcC5hLk5pdmVsfWAgOiAnJ308L2I+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3dhdGNoXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogc3RhdHVzQ3NzKHRpcC5hLkVzdGFkb0F2YW5jZSkgfX0gLz57dGlwLmEuRXN0YWRvQXZhbmNlfXt0aXAuYS5BdmFuY2UgIT0gbnVsbCA/IGAgwrcgJHtudW1iZXIodGlwLmEuQXZhbmNlKX0gJWAgOiAnJ308YnIgLz5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzd2F0Y2hcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBzY2hlZHVsZUNzcyhzY2hlZHVsZUNsYXNzKHRpcC5hLCBjdXRvZmYpKSB9fSAvPntzY2hlZHVsZUNsYXNzKHRpcC5hLCBjdXRvZmYpfSBhbCB7aXNvRGF5KGN1dG9mZil9PGJyIC8+XG4gICAgICAgICAge3RpcC5hLkFjdGl2aWRhZCAmJiA8UmVhY3QuRnJhZ21lbnQ+PHNwYW4+QWN0aXZpZGFkPC9zcGFuPiB7dGlwLmEuQWN0aXZpZGFkfTxiciAvPjwvUmVhY3QuRnJhZ21lbnQ+fVxuICAgICAgICAgIHsodGlwLmEuRmVjaGFJbmljaW8gfHwgdGlwLmEuRmVjaGFGaW4pICYmIDxSZWFjdC5GcmFnbWVudD48c3Bhbj5Qcm9ncmFtYWRvPC9zcGFuPiB7dGlwLmEuRmVjaGFJbmljaW8gPz8gJz8nfSDihpIge3RpcC5hLkZlY2hhRmluID8/ICc/J308L1JlYWN0LkZyYWdtZW50Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge3VzZURhdGFTb3VyY2UgJiYgKFxuICAgICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxuICAgICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cbiAgICAgICAgICB1c2VEYXRhU291cmNlPXt1c2VEYXRhU291cmNlfVxuICAgICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e2NyZWF0ZWQgPT4geyBzZXREcyhjcmVhdGVkIGFzIEZlYXR1cmVMYXllckRhdGFTb3VyY2UpIH19XG4gICAgICAgICAgb25RdWVyeVJlcXVpcmVkPXsoKSA9PiB7IHNldFF1ZXJ5VmVyc2lvbih2ID0+IHYgKyAxKSB9fVxuICAgICAgICAgIG9uRGF0YVNvdXJjZUluZm9DaGFuZ2U9eygpID0+IHsgc2V0UXVlcnlWZXJzaW9uKHYgPT4gdiArIDEpIH19XG4gICAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U9eyhpZHM6IEltbXV0YWJsZUFycmF5PHN0cmluZyB8IG51bWJlcj4pID0+IHsgc2V0U2VsZWN0aW9uKGlkcyA/IGlkcy5hc011dGFibGUoKSA6IFtdKSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjb2xsYXBzZWRcbiAgICAgICAgPyA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIG9uQ2xpY2s9eygpID0+IHsgc2V0Q29sbGFwc2VkKGZhbHNlKSB9fT5BdmFuY2Ug4pa4PC9idXR0b24+XG4gICAgICAgIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxcIj5cbiAgICAgICAgICAgIDxoMj5BdmFuY2UgZGUgb2JyYSDCtyBFMTUgwrcgSTE2IMK3IEUxNiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBvbkNsaWNrPXsoKSA9PiB7IHNldENvbGxhcHNlZCh0cnVlKSB9fSB0aXRsZT1cIk9jdWx0YXIgcGFuZWxcIj7il4I8L2J1dHRvbj48L2gyPlxuICAgICAgICAgICAgPGgzPlNlY2Npb25lczwvaDM+XG4gICAgICAgICAgICB7c2VjdGlvbnMubWFwKHMgPT4gKFxuICAgICAgICAgICAgICA8bGFiZWwga2V5PXtzLm5hbWV9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkZWZhdWx0Q2hlY2tlZCBvbkNoYW5nZT17ZSA9PiB7IHMubGF5ZXIudmlzaWJsZSA9IGUudGFyZ2V0LmNoZWNrZWQgfX0gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57U0VDVElPTl9MQUJFTFNbcy5jb2RlXSA/PyBzLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2UgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IGdvVG8ocykgfX0+SXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dm9sdW1ldHJ5T259IG9uQ2hhbmdlPXtlID0+IHsgc2V0Vm9sdW1ldHJ5T24oZS50YXJnZXQuY2hlY2tlZCk7IGlmICh2b2x1bWV0cnlSZWYuY3VycmVudCkgdm9sdW1ldHJ5UmVmLmN1cnJlbnQudmlzaWJsZSA9IGUudGFyZ2V0LmNoZWNrZWQgfX0gLz5cbiAgICAgICAgICAgICAgPHNwYW4+Vm9sdW1ldHLDrWEgMjAyMSDCtyBmYWNoYWRhczwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aDM+Q29sb3I8L2gzPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPXtgJHtwcm9wcy5pZH0tY29sb3JgfSBjaGVja2VkPXtjb2xvck1vZGUgPT09ICdzdGF0dXMnfSBvbkNoYW5nZT17KCkgPT4geyBzZXRDb2xvck1vZGUoJ3N0YXR1cycpIH19IC8+PHNwYW4+RXN0YWRvIGRlIGF2YW5jZTwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPXtgJHtwcm9wcy5pZH0tY29sb3JgfSBjaGVja2VkPXtjb2xvck1vZGUgPT09ICdzY2hlZHVsZSd9IG9uQ2hhbmdlPXsoKSA9PiB7IHNldENvbG9yTW9kZSgnc2NoZWR1bGUnKSB9fSAvPjxzcGFuPkNyb25vZ3JhbWEgKDREKTwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPXtgJHtwcm9wcy5pZH0tY29sb3JgfSBjaGVja2VkPXtjb2xvck1vZGUgPT09ICdzb3VyY2UnfSBvbkNoYW5nZT17KCkgPT4geyBzZXRDb2xvck1vZGUoJ3NvdXJjZScpIH19IC8+PHNwYW4+Q29sb3JlcyBkZWwgbW9kZWxvPC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICB7Y29sb3JNb2RlID09PSAnc3RhdHVzJyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVnZW5kXCI+XG4gICAgICAgICAgICAgICAge1NUQVRVUy5tYXAocyA9PiA8ZGl2IGtleT17cy52YWx1ZX0+PGkgY2xhc3NOYW1lPVwic3dhdGNoXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogcy5jc3MgfX0gLz57cy52YWx1ZX0gwrcge251bWJlcihzdGF0dXNDb3VudHNbcy52YWx1ZV0gPz8gMCl9PC9kaXY+KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2NvbG9yTW9kZSA9PT0gJ3NjaGVkdWxlJyAmJiAoXG4gICAgICAgICAgICAgIDxTY2hlZHVsZVBhbmVsXG4gICAgICAgICAgICAgICAgZWxlbWVudHM9e3RhYmxlPy5hdHRyaWJ1dGVzID8/IFtdfVxuICAgICAgICAgICAgICAgIGN1dG9mZj17Y3V0b2ZmfVxuICAgICAgICAgICAgICAgIG9uQ3V0b2ZmQ2hhbmdlPXtzZXRDdXRvZmZ9XG4gICAgICAgICAgICAgICAgYnVpbGRVcD17YnVpbGRVcH1cbiAgICAgICAgICAgICAgICBvbkJ1aWxkVXBDaGFuZ2U9e3NldEJ1aWxkVXB9XG4gICAgICAgICAgICAgICAgaGlkZVVuc2NoZWR1bGVkPXtoaWRlVW5zY2hlZHVsZWR9XG4gICAgICAgICAgICAgICAgb25IaWRlVW5zY2hlZHVsZWRDaGFuZ2U9e3NldEhpZGVVbnNjaGVkdWxlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8aDM+VGVycmVubyDCtyB7Z3JvdW5kT3BhY2l0eX0gJTwvaDM+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXswfSBtYXg9ezEwMH0gc3RlcD17NX0gdmFsdWU9e2dyb3VuZE9wYWNpdHl9IGFyaWEtbGFiZWw9XCJPcGFjaWRhZCBkZWwgdGVycmVub1wiIG9uQ2hhbmdlPXtlID0+IHsgc2V0R3JvdW5kT3BhY2l0eShOdW1iZXIoZS50YXJnZXQudmFsdWUpKSB9fSAvPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt1bmRlcmdyb3VuZCB8fCBncm91bmRPcGFjaXR5IDwgMTAwfSBkaXNhYmxlZD17Z3JvdW5kT3BhY2l0eSA8IDEwMH0gb25DaGFuZ2U9e2UgPT4geyBzZXRVbmRlcmdyb3VuZChlLnRhcmdldC5jaGVja2VkKSB9fSAvPjxzcGFuPk5hdmVnYXIgYmFqbyBsYSBzdXBlcmZpY2llPC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICA8aDM+TWFwYSBiYXNlPC9oMz5cbiAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2Jhc2VtYXB9IGFyaWEtbGFiZWw9XCJNYXBhIGJhc2VcIiBvbkNoYW5nZT17ZSA9PiB7IHNldEJhc2VtYXAoZS50YXJnZXQudmFsdWUpIH19PlxuICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoQkFTRU1BUFMpLmZpbHRlcigoW3ZhbHVlXSkgPT4gdmFsdWUgIT09ICdzY2VuZScgfHwgcGFyc2VXZWJTY2VuZSh3ZWJTY2VuZVVybCkpLm1hcCgoW3ZhbHVlLCBbbGFiZWxdXSkgPT4gPG9wdGlvbiBrZXk9e3ZhbHVlfSB2YWx1ZT17dmFsdWV9PntsYWJlbH08L29wdGlvbj4pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICB7YmFzZW1hcE5vdGUgJiYgPHAgY2xhc3NOYW1lPVwibm90ZVwiPntiYXNlbWFwTm90ZX08L3A+fVxuICAgICAgICAgICAgPGgzPkVsZW1lbnRvIHNlbGVjY2lvbmFkbzwvaDM+XG4gICAgICAgICAgICB7c2VsZWN0ZWRcbiAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPGRsPlxuICAgICAgICAgICAgICAgICAgPGR0PkVzdGFkbzwvZHQ+PGRkPjxpIGNsYXNzTmFtZT1cInN3YXRjaFwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IHN0YXR1c0NzcyhzZWxlY3RlZC5Fc3RhZG9BdmFuY2UpIH19IC8+e3NlbGVjdGVkLkVzdGFkb0F2YW5jZX08L2RkPlxuICAgICAgICAgICAgICAgICAge0tFWV9GSUVMRFMuZmlsdGVyKChbZmllbGRdKSA9PiBzZWxlY3RlZFtmaWVsZF0gIT0gbnVsbCAmJiBzZWxlY3RlZFtmaWVsZF0gIT09ICcnKS5tYXAoKFtmaWVsZCwgbGFiZWxdKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2ZpZWxkfT48ZHQ+e2xhYmVsfTwvZHQ+PGRkPntTdHJpbmcoc2VsZWN0ZWRbZmllbGRdKX08L2RkPjwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9XCJub3RlXCI+e3NlbGVjdGlvbi5sZW5ndGggPiAxID8gYCR7bnVtYmVyKHNlbGVjdGlvbi5sZW5ndGgpfSBlbGVtZW50b3Mgc2VsZWNjaW9uYWRvcyR7c2VsZWN0aW9uLmxlbmd0aCA+IEhJR0hMSUdIVF9MSU1JVCA/IGAgKHNlIHJlc2FsdGFuICR7bnVtYmVyKEhJR0hMSUdIVF9MSU1JVCl9KWAgOiAnJ30uYCA6ICdIYXogY2xpYyBlbiB1biBlbGVtZW50byBvIHNlbGVjY2nDs25hbG8gZW4gdW5hIHRhYmxhLCBsaXN0YSBvIGdyw6FmaWNvLid9PC9wPn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4geyBob21lKCkgfX0+RW5jdWFkcmFyIHRvZG88L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPXtzbGljaW5nfSBvbkNsaWNrPXsoKSA9PiB7IHNldFNsaWNpbmcoIXNsaWNpbmcpIH19IHRpdGxlPVwiUGxhbm8gZGUgY29ydGUgcGFyYSB2ZXIgZWwgaW50ZXJpb3JcIj5Db3J0YXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPXtzcGlubmluZ30gb25DbGljaz17KCkgPT4geyBzZXRTcGlubmluZyghc3Bpbm5pbmcpIH19IHRpdGxlPVwiR2lyYSBhbHJlZGVkb3IgZGVsIGNlbnRybyBkZSBsYSB2aXN0YTsgYXJyYXN0cmFyIGxvIGRldGllbmVcIj5HaXJhcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGF0dXNcIiByb2xlPVwic3RhdHVzXCI+e3N0YXR1c1RleHR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=