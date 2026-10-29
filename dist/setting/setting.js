System.register(["jimu-core/emotion","jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
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

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ },

/***/ "jimu-ui/advanced/setting-components"
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/avance-obra-3d/src/setting/setting.tsx ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _output_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../output-schema */ "./your-extensions/widgets/avance-obra-3d/src/output-schema.ts");

/** @jsx jsx */




const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  .note { font-size: 12px; color: var(--ref-palette-neutral-1000); margin: 8px 0 0; line-height: 1.4; }
`;
const Setting = (props) => {
    var _a;
    const { id, config, onSettingChange } = props;
    const save = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((nextConfig) => {
        var _a, _b, _c;
        const label = (_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appConfig.widgets[id]) === null || _b === void 0 ? void 0 : _b.label) !== null && _c !== void 0 ? _c : 'Avance de obra 3D';
        // Registering the output data source here makes it selectable in Chart, Table, Filter and List settings.
        onSettingChange({ id, config: nextConfig }, [(0,_output_schema__WEBPACK_IMPORTED_MODULE_4__.outputDataSourceJson)(id, `Elementos de avance (${label})`)]);
    }, [id, onSettingChange]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        var _a;
        if (!((_a = props.outputDataSources) === null || _a === void 0 ? void 0 : _a.length))
            save(config);
    }, [props.outputDataSources, config, save]);
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: style, className: "widget-setting-avance-obra-3d", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Datos", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: "wrap", label: "URL de los datos (sitio publicado o serve.mjs local)", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: "sm", value: config.serverUrl, onAcceptValue: value => { save(config.set('serverUrl', value.replace(/\/$/, ''))); } }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: "wrap", label: "Grupo de paquetes (slpk.json)", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: "sm", value: config.group, onAcceptValue: value => { save(config.set('group', value)); } }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: "wrap", label: "Web scene (URL del visor o del elemento; vac\u00EDo = escena propia)", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: "sm", value: (_a = config.webSceneUrl) !== null && _a !== void 0 ? _a : '', onAcceptValue: value => { save(config.set('webSceneUrl', value.trim())); } }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "note", children: "Con un web scene, el widget dibuja sobre esa escena y usa sus capas E15, I16, E16 y Volumetr\u00EDa. La tabla de elementos (avance y fechas) y las huellas prediales se leen de esta URL: el sitio https://dureyes97.github.io/avance-plmb o, para trabajar en local, http://localhost:8765. El widget crea la fuente de datos \u00ABElementos de avance\u00BB: el\u00EDgela en los widgets de Gr\u00E1fico, Tabla, Filtro o Lista." })] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hdmFuY2Utb2JyYS0zZC9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEdBQTRHO0FBQzVHLDhHQUE4RztBQUNFO0FBRXpHLE1BQU0sUUFBUSxHQUFHLFVBQVU7QUFFbEMsa0hBQWtIO0FBQ2xILE1BQU0sT0FBTyxHQUFrRTtJQUM3RSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDO0lBQzdCLENBQUMsS0FBSyxFQUFFLCtCQUErQixFQUFFLFFBQVEsQ0FBQztJQUNsRCxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQ2hDLENBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQztJQUM5QyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDO0lBQ2xDLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUM7SUFDcEMsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxRQUFRLENBQUM7SUFDcEQsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQztJQUN4QyxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUM7SUFDMUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUM1QixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDO0lBQ3RDLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUM7SUFDcEMsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxDQUFDO0lBQ3ZDLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUM7SUFDL0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQztJQUMxQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQ2hD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QUssRUFBQywrQkFBK0IsWUFDM0QsZ0VBQUMsOENBQVMsSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBSSxHQUMvRixFQUNiLGdFQUFDLDJFQUFVLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsc0VBQWlFLFlBQzdGLGdFQUFDLDhDQUFTLElBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUUsWUFBTSxDQUFDLFdBQVcsbUNBQUksRUFBRSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBSSxHQUN4SCxFQUNiLHVFQUFHLFNBQVMsRUFBQyxNQUFNLG9iQUtmLElBQ1csR0FDYixDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE9BQU87QUFFZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hdmFuY2Utb2JyYS0zZC9zcmMvb3V0cHV0LXNjaGVtYS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hdmFuY2Utb2JyYS0zZC9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTY2hlbWEgb2YgdGhlIHdpZGdldCdzIG91dHB1dCBkYXRhIHNvdXJjZTogb25lIHJlY29yZCBwZXIgUmV2aXQgZWxlbWVudCwgY29sdW1ucyBvZiBhdmFuY2UtZWxlbWVudHMuanNvbi5cbi8vIFNoYXJlZCBieSB0aGUgc2V0dGluZyAod2hpY2ggcmVnaXN0ZXJzIHRoZSBkYXRhIHNvdXJjZSBpbiB0aGUgYXBwIGNvbmZpZykgYW5kIHRoZSBydW50aW1lICh3aGljaCBmaWxscyBpdCkuXG5pbXBvcnQgeyBEYXRhU291cmNlVHlwZXMsIEVzcmlGaWVsZFR5cGUsIEppbXVGaWVsZFR5cGUsIHR5cGUgRGF0YVNvdXJjZUpzb24sIHR5cGUgRmllbGRTY2hlbWEgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBjb25zdCBJRF9GSUVMRCA9ICdPQkpFQ1RJRCdcblxuLy8gW25hbWUsIGFsaWFzLCBraW5kXTsgbmFtZXMgbWF0Y2ggdGhlIHNjZW5lIGxheWVyIGZpZWxkcyBzbyB0aGUgM0QgdmlldyBhbmQgdGhlIHRhYmxlIGRlc2NyaWJlIHRoZSBzYW1lIGVsZW1lbnQuXG5jb25zdCBDT0xVTU5TOiBBcnJheTxbc3RyaW5nLCBzdHJpbmcsICdvaWQnIHwgJ251bWJlcicgfCAnc3RyaW5nJyB8ICdkYXRlJ10+ID0gW1xuICBbSURfRklFTEQsICdPQkpFQ1RJRCcsICdvaWQnXSxcbiAgWydPSUQnLCAnT2JqZWN0SUQgZW4gbGEgY2FwYSBkZSBlc2NlbmEnLCAnbnVtYmVyJ10sXG4gIFsnU2VjY2lvbicsICdTZWNjacOzbicsICdzdHJpbmcnXSxcbiAgWydFc3RhZG9BdmFuY2UnLCAnRXN0YWRvIGRlIGF2YW5jZScsICdzdHJpbmcnXSxcbiAgWydBdmFuY2UnLCAnQXZhbmNlICglKScsICdudW1iZXInXSxcbiAgWydBY3RpdmlkYWQnLCAnQWN0aXZpZGFkJywgJ3N0cmluZyddLFxuICBbJ0FjdGl2aWRhZE5vbWJyZScsICdOb21icmUgZGUgYWN0aXZpZGFkJywgJ3N0cmluZyddLFxuICBbJ0NvbnRyYXRpc3RhJywgJ0NvbnRyYXRpc3RhJywgJ3N0cmluZyddLFxuICBbJ0NhdGVnb3JpYScsICdDYXRlZ29yw61hIFJldml0JywgJ3N0cmluZyddLFxuICBbJ05pdmVsJywgJ05pdmVsJywgJ3N0cmluZyddLFxuICBbJ0Rpc2NpcGxpbmEnLCAnRGlzY2lwbGluYScsICdzdHJpbmcnXSxcbiAgWydNb2RlbG8nLCAnTW9kZWxvIFJldml0JywgJ3N0cmluZyddLFxuICBbJ1VFJywgJ1VuaWRhZCBkZSBlamVjdWNpw7NuJywgJ3N0cmluZyddLFxuICBbJ0ZhbWlseScsICdGYW1pbGlhJywgJ3N0cmluZyddLFxuICBbJ1R5cGUnLCAnVGlwbycsICdzdHJpbmcnXSxcbiAgWydJZmNHVUlEJywgJ0lmY0dVSUQnLCAnc3RyaW5nJ10sXG4gIFsnRXh0SWQnLCAnSUQgZGUgUmV2aXQnLCAnc3RyaW5nJ10sXG4gIFsnRmVjaGFJbmljaW8nLCAnSW5pY2lvICh0ZXh0byknLCAnc3RyaW5nJ10sXG4gIFsnRmVjaGFGaW4nLCAnRmluICh0ZXh0byknLCAnc3RyaW5nJ10sXG4gIFsnRmVjaGFJbmljaW9EYXRlJywgJ0luaWNpbycsICdkYXRlJ10sXG4gIFsnRmVjaGFGaW5EYXRlJywgJ0ZpbicsICdkYXRlJ10sXG4gIFsneicsICdDb3RhIGJhc2UgKG0pJywgJ251bWJlciddXG5dXG5cbmNvbnN0IFRZUEVTID0ge1xuICBvaWQ6IFtKaW11RmllbGRUeXBlLk51bWJlciwgRXNyaUZpZWxkVHlwZS5PSURdLFxuICBudW1iZXI6IFtKaW11RmllbGRUeXBlLk51bWJlciwgRXNyaUZpZWxkVHlwZS5Eb3VibGVdLFxuICBzdHJpbmc6IFtKaW11RmllbGRUeXBlLlN0cmluZywgRXNyaUZpZWxkVHlwZS5TdHJpbmddLFxuICBkYXRlOiBbSmltdUZpZWxkVHlwZS5EYXRlLCBFc3JpRmllbGRUeXBlLkRhdGVdXG59IGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBGSUVMRF9OQU1FUyA9IENPTFVNTlMubWFwKChbbmFtZV0pID0+IG5hbWUpXG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRwdXREYXRhU291cmNlSnNvbiAod2lkZ2V0SWQ6IHN0cmluZywgbGFiZWw6IHN0cmluZyk6IERhdGFTb3VyY2VKc29uIHtcbiAgY29uc3QgZmllbGRzOiB7IFtqaW11TmFtZTogc3RyaW5nXTogRmllbGRTY2hlbWEgfSA9IHt9XG4gIGZvciAoY29uc3QgW25hbWUsIGFsaWFzLCBraW5kXSBvZiBDT0xVTU5TKSB7XG4gICAgY29uc3QgW3R5cGUsIGVzcmlUeXBlXSA9IFRZUEVTW2tpbmRdXG4gICAgZmllbGRzW25hbWVdID0geyBqaW11TmFtZTogbmFtZSwgbmFtZSwgYWxpYXMsIHR5cGUsIGVzcmlUeXBlIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGlkOiBgJHt3aWRnZXRJZH1fb3V0cHV0YCxcbiAgICB0eXBlOiBEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyLFxuICAgIGxhYmVsLFxuICAgIGlzT3V0cHV0RnJvbVdpZGdldDogdHJ1ZSxcbiAgICBpc0RhdGFJbkRhdGFTb3VyY2VJbnN0YW5jZTogdHJ1ZSwgLy8gdGhlIHJlY29yZHMgbGl2ZSBpbiB0aGUgYnJvd3Nlcjsgbm8gc2VydmljZSwgbm8gcG9ydGFsIGl0ZW1cbiAgICBzY2hlbWE6IHsgbGFiZWwsIGlkRmllbGQ6IElEX0ZJRUxELCBmaWVsZHMgfVxuICB9IGFzIERhdGFTb3VyY2VKc29uXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzLCBnZXRBcHBTdG9yZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbmltcG9ydCB7IFNldHRpbmdTZWN0aW9uLCBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IG91dHB1dERhdGFTb3VyY2VKc29uIH0gZnJvbSAnLi4vb3V0cHV0LXNjaGVtYSdcblxuY29uc3Qgc3R5bGUgPSBjc3NgXG4gIC5ub3RlIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogdmFyKC0tcmVmLXBhbGV0dGUtbmV1dHJhbC0xMDAwKTsgbWFyZ2luOiA4cHggMCAwOyBsaW5lLWhlaWdodDogMS40OyB9XG5gXG5cbmNvbnN0IFNldHRpbmcgPSAocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4pID0+IHtcbiAgY29uc3QgeyBpZCwgY29uZmlnLCBvblNldHRpbmdDaGFuZ2UgfSA9IHByb3BzXG5cbiAgY29uc3Qgc2F2ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKChuZXh0Q29uZmlnOiBJTUNvbmZpZykgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWcud2lkZ2V0c1tpZF0/LmxhYmVsID8/ICdBdmFuY2UgZGUgb2JyYSAzRCdcbiAgICAvLyBSZWdpc3RlcmluZyB0aGUgb3V0cHV0IGRhdGEgc291cmNlIGhlcmUgbWFrZXMgaXQgc2VsZWN0YWJsZSBpbiBDaGFydCwgVGFibGUsIEZpbHRlciBhbmQgTGlzdCBzZXR0aW5ncy5cbiAgICBvblNldHRpbmdDaGFuZ2UoeyBpZCwgY29uZmlnOiBuZXh0Q29uZmlnIH0sIFtvdXRwdXREYXRhU291cmNlSnNvbihpZCwgYEVsZW1lbnRvcyBkZSBhdmFuY2UgKCR7bGFiZWx9KWApXSlcbiAgfSwgW2lkLCBvblNldHRpbmdDaGFuZ2VdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5vdXRwdXREYXRhU291cmNlcz8ubGVuZ3RoKSBzYXZlKGNvbmZpZylcbiAgfSwgW3Byb3BzLm91dHB1dERhdGFTb3VyY2VzLCBjb25maWcsIHNhdmVdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3N0eWxlfSBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy1hdmFuY2Utb2JyYS0zZFwiPlxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiRGF0b3NcIj5cbiAgICAgICAgPFNldHRpbmdSb3cgZmxvdz1cIndyYXBcIiBsYWJlbD1cIlVSTCBkZSBsb3MgZGF0b3MgKHNpdGlvIHB1YmxpY2FkbyBvIHNlcnZlLm1qcyBsb2NhbClcIj5cbiAgICAgICAgICA8VGV4dElucHV0IHNpemU9XCJzbVwiIHZhbHVlPXtjb25maWcuc2VydmVyVXJsfSBvbkFjY2VwdFZhbHVlPXt2YWx1ZSA9PiB7IHNhdmUoY29uZmlnLnNldCgnc2VydmVyVXJsJywgdmFsdWUucmVwbGFjZSgvXFwvJC8sICcnKSkpIH19IC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgPFNldHRpbmdSb3cgZmxvdz1cIndyYXBcIiBsYWJlbD1cIkdydXBvIGRlIHBhcXVldGVzIChzbHBrLmpzb24pXCI+XG4gICAgICAgICAgPFRleHRJbnB1dCBzaXplPVwic21cIiB2YWx1ZT17Y29uZmlnLmdyb3VwfSBvbkFjY2VwdFZhbHVlPXt2YWx1ZSA9PiB7IHNhdmUoY29uZmlnLnNldCgnZ3JvdXAnLCB2YWx1ZSkpIH19IC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgPFNldHRpbmdSb3cgZmxvdz1cIndyYXBcIiBsYWJlbD1cIldlYiBzY2VuZSAoVVJMIGRlbCB2aXNvciBvIGRlbCBlbGVtZW50bzsgdmFjw61vID0gZXNjZW5hIHByb3BpYSlcIj5cbiAgICAgICAgICA8VGV4dElucHV0IHNpemU9XCJzbVwiIHZhbHVlPXtjb25maWcud2ViU2NlbmVVcmwgPz8gJyd9IG9uQWNjZXB0VmFsdWU9e3ZhbHVlID0+IHsgc2F2ZShjb25maWcuc2V0KCd3ZWJTY2VuZVVybCcsIHZhbHVlLnRyaW0oKSkpIH19IC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibm90ZVwiPlxuICAgICAgICAgIENvbiB1biB3ZWIgc2NlbmUsIGVsIHdpZGdldCBkaWJ1amEgc29icmUgZXNhIGVzY2VuYSB5IHVzYSBzdXMgY2FwYXMgRTE1LCBJMTYsIEUxNiB5IFZvbHVtZXRyw61hLlxuICAgICAgICAgIExhIHRhYmxhIGRlIGVsZW1lbnRvcyAoYXZhbmNlIHkgZmVjaGFzKSB5IGxhcyBodWVsbGFzIHByZWRpYWxlcyBzZSBsZWVuIGRlIGVzdGEgVVJMOiBlbCBzaXRpb1xuICAgICAgICAgIGh0dHBzOi8vZHVyZXllczk3LmdpdGh1Yi5pby9hdmFuY2UtcGxtYiBvLCBwYXJhIHRyYWJhamFyIGVuIGxvY2FsLCBodHRwOi8vbG9jYWxob3N0Ojg3NjUuXG4gICAgICAgICAgRWwgd2lkZ2V0IGNyZWEgbGEgZnVlbnRlIGRlIGRhdG9zIMKrRWxlbWVudG9zIGRlIGF2YW5jZcK7OiBlbMOtZ2VsYSBlbiBsb3Mgd2lkZ2V0cyBkZSBHcsOhZmljbywgVGFibGEsIEZpbHRybyBvIExpc3RhLlxuICAgICAgICA8L3A+XG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=