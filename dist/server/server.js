/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.scss */ \"./src/main.global.scss\");\r\nvar AppComponent_1 = __webpack_require__(/*! ./shared/AppComponent */ \"./src/shared/AppComponent/index.ts\");\r\nvar store_1 = __webpack_require__(/*! ./redux/store */ \"./src/redux/store.tsx\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar react_2 = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\r\nfunction App() {\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },\r\n        react_1.default.createElement(react_2.PersistGate, { loading: null, persistor: store_1.persist },\r\n            react_1.default.createElement(AppComponent_1.AppComponent, null))));\r\n}\r\nexports.App = App;\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ../shared/Header */ \"./src/shared/Header/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ../shared/Layout */ \"./src/shared/Layout/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ../shared/Skeletons */ \"./src/shared/Skeletons/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ../shared/Text */ \"./src/shared/Text/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ../shared/NotFound/NotFoundBlock */ \"./src/shared/NotFound/NotFoundBlock/index.ts\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/components/index.ts?");

/***/ }),

/***/ "./src/img/1.jpg":
/*!***********************!*\
  !*** ./src/img/1.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"static/1.jpg\");\n\n//# sourceURL=webpack:///./src/img/1.jpg?");

/***/ }),

/***/ "./src/img/zoom.svg":
/*!**************************!*\
  !*** ./src/img/zoom.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"static/zoom.svg\");\n\n//# sourceURL=webpack:///./src/img/zoom.svg?");

/***/ }),

/***/ "./src/main.global.scss":
/*!******************************!*\
  !*** ./src/main.global.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"isHidden\": \"main-global__isHidden--LeR70\",\n\t\"btnReset\": \"main-global__btnReset--3_ce6\",\n\t\"visuallyHidden\": \"main-global__visuallyHidden--2z_uQ\",\n\t\"container\": \"main-global__container--15nxg\",\n\t\"jsFocusVisible\": \"main-global__jsFocusVisible--239zD\",\n\t\"focus-visible\": \"main-global__focus-visible--2FZGO\",\n\t\"centered\": \"main-global__centered--1WFD7\",\n\t\"disScroll\": \"main-global__disScroll--3rjII\",\n\t\"page--ios\": \"main-global__page--ios--2c8H3\",\n\t\"dis-scroll\": \"main-global__dis-scroll--3dYIB\",\n\t\"grid\": \"main-global__grid--2kJoT\",\n\t\"mainTitle\": \"main-global__mainTitle--3ddSU\",\n\t\"sectionTitle\": \"main-global__sectionTitle--3Xp0s\",\n\t\"btn\": \"main-global__btn--96MnM\",\n\t\"btn--stroke\": \"main-global__btn--stroke--2iRUg\",\n\t\"btn--stroke-ef\": \"main-global__btn--stroke-ef--3Ello\"\n};\n\n\n//# sourceURL=webpack:///./src/main.global.scss?");

/***/ }),

/***/ "./src/redux/slices/familySlice.tsx":
/*!******************************************!*\
  !*** ./src/redux/slices/familySlice.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.selectFamilys = exports.fetchFamilys = void 0;\r\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar individualSlice_1 = __webpack_require__(/*! ./individualSlice */ \"./src/redux/slices/individualSlice.tsx\");\r\nvar initialState = {\r\n    familys: [],\r\n    statusFM: individualSlice_1.Status.LOADING,\r\n};\r\nexports.fetchFamilys = (0, toolkit_1.createAsyncThunk)('posts/fetchFamilys', function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var data;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, axios_1.default.get('http://localhost:3002/family')];\r\n            case 1:\r\n                data = (_a.sent()).data;\r\n                return [2 /*return*/, data];\r\n        }\r\n    });\r\n}); });\r\nvar familysSlice = (0, toolkit_1.createSlice)({\r\n    name: 'family',\r\n    initialState: initialState,\r\n    reducers: {},\r\n    extraReducers: function (builder) {\r\n        // Add reducers for additional action types here, and handle loading state as needed\r\n        builder.addCase(exports.fetchFamilys.pending, function (state, action) {\r\n            // Add user to the state array\r\n            state.statusFM = individualSlice_1.Status.LOADING;\r\n            state.familys = [];\r\n        });\r\n        builder.addCase(exports.fetchFamilys.fulfilled, function (state, action) {\r\n            // Add user to the state array\r\n            state.familys = action.payload;\r\n            state.statusFM = individualSlice_1.Status.SUCCESS;\r\n        });\r\n        builder.addCase(exports.fetchFamilys.rejected, function (state, action) {\r\n            // Add user to the state array\r\n            state.statusFM = individualSlice_1.Status.ERROR,\r\n                state.familys = [];\r\n        });\r\n    },\r\n});\r\nvar selectFamilys = function (state) { return state.family; };\r\nexports.selectFamilys = selectFamilys;\r\nexports._b = _a = familysSlice.actions;\r\nexports.default = familysSlice.reducer;\r\n\n\n//# sourceURL=webpack:///./src/redux/slices/familySlice.tsx?");

/***/ }),

/***/ "./src/redux/slices/individualSlice.tsx":
/*!**********************************************!*\
  !*** ./src/redux/slices/individualSlice.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.selectIndividuals = exports.fetchIndividuals = exports.Status = void 0;\r\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar Status;\r\n(function (Status) {\r\n    Status[\"LOADING\"] = \"loading\";\r\n    Status[\"SUCCESS\"] = \"success\";\r\n    Status[\"ERROR\"] = \"error\";\r\n})(Status = exports.Status || (exports.Status = {}));\r\nexports.fetchIndividuals = (0, toolkit_1.createAsyncThunk)('posts/fetchIndividuals', function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var data;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, axios_1.default.get('http://localhost:3002/individual')];\r\n            case 1:\r\n                data = (_a.sent()).data;\r\n                return [2 /*return*/, data];\r\n        }\r\n    });\r\n}); });\r\nvar initialState = {\r\n    individual: [],\r\n    statusInd: Status.LOADING,\r\n};\r\nvar individualsSlice = (0, toolkit_1.createSlice)({\r\n    name: 'individual',\r\n    initialState: initialState,\r\n    reducers: {},\r\n    extraReducers: function (builder) {\r\n        // Add reducers for additional action types here, and handle loading state as needed\r\n        builder.addCase(exports.fetchIndividuals.pending, function (state, action) {\r\n            // Add user to the state array\r\n            state.statusInd = Status.LOADING;\r\n            state.individual = [];\r\n        });\r\n        builder.addCase(exports.fetchIndividuals.fulfilled, function (state, action) {\r\n            // Add user to the state array\r\n            state.individual = action.payload;\r\n            state.statusInd = Status.SUCCESS;\r\n        });\r\n        builder.addCase(exports.fetchIndividuals.rejected, function (state, action) {\r\n            // Add user to the state array\r\n            state.statusInd = Status.ERROR,\r\n                state.individual = [];\r\n        });\r\n    },\r\n});\r\nvar selectIndividuals = function (state) { return state.individual; };\r\nexports.selectIndividuals = selectIndividuals;\r\nexports._b = _a = individualsSlice.actions;\r\nexports.default = individualsSlice.reducer;\r\n\n\n//# sourceURL=webpack:///./src/redux/slices/individualSlice.tsx?");

/***/ }),

/***/ "./src/redux/slices/loveStorySlice.tsx":
/*!*********************************************!*\
  !*** ./src/redux/slices/loveStorySlice.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.selectLoveStorys = exports.fetchLoveStorys = void 0;\r\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar individualSlice_1 = __webpack_require__(/*! ./individualSlice */ \"./src/redux/slices/individualSlice.tsx\");\r\nvar initialState = {\r\n    loveStorys: [],\r\n    statusLv: individualSlice_1.Status.LOADING,\r\n};\r\nexports.fetchLoveStorys = (0, toolkit_1.createAsyncThunk)('posts/fetchLoveStorys', function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var data;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, axios_1.default.get('http://localhost:3002/loveStory')];\r\n            case 1:\r\n                data = (_a.sent()).data;\r\n                return [2 /*return*/, data];\r\n        }\r\n    });\r\n}); });\r\nvar loveStorysSlice = (0, toolkit_1.createSlice)({\r\n    name: 'loveStory',\r\n    initialState: initialState,\r\n    reducers: {},\r\n    extraReducers: function (builder) {\r\n        // Add reducers for additional action types here, and handle loading state as needed\r\n        builder.addCase(exports.fetchLoveStorys.pending, function (state, action) {\r\n            // Add user to the state array\r\n            state.statusLv = individualSlice_1.Status.LOADING;\r\n            state.loveStorys = [];\r\n        });\r\n        builder.addCase(exports.fetchLoveStorys.fulfilled, function (state, action) {\r\n            // Add user to the state array\r\n            state.loveStorys = action.payload;\r\n            state.statusLv = individualSlice_1.Status.SUCCESS;\r\n        });\r\n        builder.addCase(exports.fetchLoveStorys.rejected, function (state, action) {\r\n            // Add user to the state array\r\n            state.statusLv = individualSlice_1.Status.ERROR,\r\n                state.loveStorys = [];\r\n        });\r\n    },\r\n});\r\nvar selectLoveStorys = function (state) { return state.loveStory; };\r\nexports.selectLoveStorys = selectLoveStorys;\r\nexports._b = _a = loveStorysSlice.actions;\r\nexports.default = loveStorysSlice.reducer;\r\n\n\n//# sourceURL=webpack:///./src/redux/slices/loveStorySlice.tsx?");

/***/ }),

/***/ "./src/redux/slices/valuesSlice.tsx":
/*!******************************************!*\
  !*** ./src/redux/slices/valuesSlice.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setFormValue = exports.selectValues = void 0;\r\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\r\nvar initialState = {\r\n    isQuantity: 8,\r\n};\r\nvar valuesSlice = (0, toolkit_1.createSlice)({\r\n    name: 'values',\r\n    initialState: initialState,\r\n    reducers: {\r\n        setFormValue: function (state, action) {\r\n            state.isQuantity = action.payload;\r\n        },\r\n    }\r\n});\r\nvar selectValues = function (state) { return state.IValue; };\r\nexports.selectValues = selectValues;\r\nexports.setFormValue = valuesSlice.actions.setFormValue;\r\nexports.default = valuesSlice.reducer;\r\n\n\n//# sourceURL=webpack:///./src/redux/slices/valuesSlice.tsx?");

/***/ }),

/***/ "./src/redux/slices/weddingSlice.tsx":
/*!*******************************************!*\
  !*** ./src/redux/slices/weddingSlice.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.selectWeddings = exports.fetchWeddings = void 0;\r\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar individualSlice_1 = __webpack_require__(/*! ./individualSlice */ \"./src/redux/slices/individualSlice.tsx\");\r\nvar initialState = {\r\n    weddings: [],\r\n    statusWd: individualSlice_1.Status.LOADING,\r\n};\r\nexports.fetchWeddings = (0, toolkit_1.createAsyncThunk)('posts/fetchWeddings', function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var data;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, axios_1.default.get('http://localhost:3002/wedding')];\r\n            case 1:\r\n                data = (_a.sent()).data;\r\n                return [2 /*return*/, data];\r\n        }\r\n    });\r\n}); });\r\nvar weddingsSlice = (0, toolkit_1.createSlice)({\r\n    name: 'wedding',\r\n    initialState: initialState,\r\n    reducers: {},\r\n    extraReducers: function (builder) {\r\n        // Add reducers for additional action types here, and handle loading state as needed\r\n        builder.addCase(exports.fetchWeddings.pending, function (state, action) {\r\n            // Add user to the state array\r\n            state.statusWd = individualSlice_1.Status.LOADING;\r\n            state.weddings = [];\r\n        });\r\n        builder.addCase(exports.fetchWeddings.fulfilled, function (state, action) {\r\n            // Add user to the state array\r\n            state.weddings = action.payload;\r\n            state.statusWd = individualSlice_1.Status.SUCCESS;\r\n        });\r\n        builder.addCase(exports.fetchWeddings.rejected, function (state, action) {\r\n            // Add user to the state array\r\n            state.statusWd = individualSlice_1.Status.ERROR,\r\n                state.weddings = [];\r\n        });\r\n    },\r\n});\r\nvar selectWeddings = function (state) { return state.wedding; };\r\nexports.selectWeddings = selectWeddings;\r\nexports._b = _a = weddingsSlice.actions;\r\nexports.default = weddingsSlice.reducer;\r\n\n\n//# sourceURL=webpack:///./src/redux/slices/weddingSlice.tsx?");

/***/ }),

/***/ "./src/redux/store.tsx":
/*!*****************************!*\
  !*** ./src/redux/store.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.persist = exports.store = void 0;\r\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\r\nvar valuesSlice_1 = __importDefault(__webpack_require__(/*! ../redux/slices/valuesSlice */ \"./src/redux/slices/valuesSlice.tsx\"));\r\nvar individualSlice_1 = __importDefault(__webpack_require__(/*! ../redux/slices/individualSlice */ \"./src/redux/slices/individualSlice.tsx\"));\r\nvar familySlice_1 = __importDefault(__webpack_require__(/*! ../redux/slices/familySlice */ \"./src/redux/slices/familySlice.tsx\"));\r\nvar loveStorySlice_1 = __importDefault(__webpack_require__(/*! ../redux/slices/loveStorySlice */ \"./src/redux/slices/loveStorySlice.tsx\"));\r\nvar weddingSlice_1 = __importDefault(__webpack_require__(/*! ../redux/slices/weddingSlice */ \"./src/redux/slices/weddingSlice.tsx\"));\r\nvar redux_persist_1 = __webpack_require__(/*! redux-persist */ \"redux-persist\");\r\nvar storage_1 = __importDefault(__webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\"));\r\nvar persistConfig = {\r\n    key: 'app',\r\n    storage: storage_1.default,\r\n};\r\nvar rootReducer = (0, toolkit_1.combineReducers)({\r\n    IValue: valuesSlice_1.default,\r\n    individual: individualSlice_1.default,\r\n    family: familySlice_1.default,\r\n    loveStory: loveStorySlice_1.default,\r\n    wedding: weddingSlice_1.default,\r\n});\r\nvar persistedReducer = (0, redux_persist_1.persistReducer)(persistConfig, rootReducer);\r\nexports.store = (0, toolkit_1.configureStore)({\r\n    reducer: persistedReducer,\r\n    middleware: function (getDefaultMiddleware) {\r\n        return getDefaultMiddleware({\r\n            serializableCheck: {\r\n                ignoredActions: [redux_persist_1.FLUSH, redux_persist_1.REHYDRATE, redux_persist_1.PAUSE, redux_persist_1.PERSIST, redux_persist_1.PURGE, redux_persist_1.REGISTER],\r\n            },\r\n        });\r\n    },\r\n});\r\nexports.persist = (0, redux_persist_1.persistStore)(exports.store);\r\n\n\n//# sourceURL=webpack:///./src/redux/store.tsx?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n   <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n<link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\n<link href=\\\"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,500;0,600;0,700;1,300&family=Roboto:wght@400;500;700&display=swap\\\" rel=\\\"stylesheet\\\">\\n  <title>Nikol photo</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\".concat(content, \"</div>\\n</body>\\n\\n</html>\\n\"); };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar server_2 = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\r\nvar app = (0, express_1.default)();\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\r\napp.get(\"*\", function (req, res) {\r\n    var html = server_1.default.renderToString(react_1.default.createElement(server_2.StaticRouter, { location: req.url },\r\n        react_1.default.createElement(App_1.App, null)));\r\n    res.send((0, indexTemplate_1.indexTemplate)(html));\r\n});\r\napp.listen(3000, function () {\r\n    console.log(\"server started on port http://localhost:3000\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/About/About.tsx":
/*!************************************!*\
  !*** ./src/shared/About/About.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.About = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar about_module_scss_1 = __importDefault(__webpack_require__(/*! ./about.module.scss */ \"./src/shared/About/about.module.scss\"));\r\nvar main_global_scss_1 = __importDefault(__webpack_require__(/*! ../../main.global.scss */ \"./src/main.global.scss\"));\r\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\r\nfunction About(_a) {\r\n    var artRef1 = _a.artRef1;\r\n    return (react_1.default.createElement(\"section\", { ref: artRef1, className: about_module_scss_1.default.about },\r\n        react_1.default.createElement(\"div\", { className: main_global_scss_1.default.container },\r\n            react_1.default.createElement(\"div\", { className: about_module_scss_1.default.about__container },\r\n                react_1.default.createElement(\"div\", { className: main_global_scss_1.default.sectionTitle },\r\n                    react_1.default.createElement(Text_1.Text, { As: \"h2\", size: 28, mobileSize: 24, color: Text_1.Ecolor.white, weight: 700 }, \"\\u041E\\u0431\\u043E \\u043C\\u043D\\u0435\")),\r\n                react_1.default.createElement(\"div\", { className: about_module_scss_1.default.about__descr },\r\n                    react_1.default.createElement(Text_1.Text, { As: \"p\", size: 16, color: Text_1.Ecolor.white, weight: 400 }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ex obcaecati quibusdam voluptate quas laborum hic tempore iste molestiae deserunt magni magnam, consectetur accusamus quidem nemo dignissimos? Alias, atque quod?\"))))));\r\n}\r\nexports.About = About;\r\n\n\n//# sourceURL=webpack:///./src/shared/About/About.tsx?");

/***/ }),

/***/ "./src/shared/About/about.module.scss":
/*!********************************************!*\
  !*** ./src/shared/About/about.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"about__container\": \"about-module__about__container--1yGN6\",\n\t\"about__descr\": \"about-module__about__descr--6542F\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/About/about.module.scss?");

/***/ }),

/***/ "./src/shared/About/index.ts":
/*!***********************************!*\
  !*** ./src/shared/About/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./About */ \"./src/shared/About/About.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/About/index.ts?");

/***/ }),

/***/ "./src/shared/AppComponent/AppComponent.tsx":
/*!**************************************************!*\
  !*** ./src/shared/AppComponent/AppComponent.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AppComponent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Layout_1 = __webpack_require__(/*! ../Layout */ \"./src/shared/Layout/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\n__webpack_require__(/*! ../../img/1.jpg */ \"./src/img/1.jpg\");\r\n__webpack_require__(/*! ../../img/zoom.svg */ \"./src/img/zoom.svg\");\r\nfunction AppComponent() {\r\n    return (react_1.default.createElement(react_router_dom_1.Routes, null,\r\n        react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", element: react_1.default.createElement(Layout_1.Layout, null) })));\r\n}\r\nexports.AppComponent = AppComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/AppComponent/AppComponent.tsx?");

/***/ }),

/***/ "./src/shared/AppComponent/index.ts":
/*!******************************************!*\
  !*** ./src/shared/AppComponent/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AppComponent */ \"./src/shared/AppComponent/AppComponent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/AppComponent/index.ts?");

/***/ }),

/***/ "./src/shared/Footer/Footer.tsx":
/*!**************************************!*\
  !*** ./src/shared/Footer/Footer.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Footer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar footer_module_scss_1 = __importDefault(__webpack_require__(/*! ./footer.module.scss */ \"./src/shared/Footer/footer.module.scss\"));\r\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\r\nfunction Footer(_a) {\r\n    var artRef11 = _a.artRef11;\r\n    return (react_1.default.createElement(\"footer\", { ref: artRef11, className: footer_module_scss_1.default.footer },\r\n        react_1.default.createElement(\"div\", { className: footer_module_scss_1.default.footer__container },\r\n            react_1.default.createElement(\"a\", { href: \"#\", className: footer_module_scss_1.default.footer__logo },\r\n                react_1.default.createElement(Text_1.Text, { size: 16, mobileSize: 14, color: Text_1.Ecolor.white, weight: 400 }, \"\\u041D\\u0438\\u043A\\u043E\\u043B\\u044C \\u041F\\u0438\\u043D\\u0445\\u0430\\u0441\\u043E\\u0432\\u0430 \\u043B\\u043E\\u0433\\u043E\\u0442\\u0438\\u043F\")),\r\n            react_1.default.createElement(\"div\", { className: footer_module_scss_1.default.footer__call },\r\n                react_1.default.createElement(\"span\", { className: footer_module_scss_1.default.footer__callDescr },\r\n                    react_1.default.createElement(Text_1.Text, { size: 16, mobileSize: 14, color: Text_1.Ecolor.white, weight: 400 }, \"\\u0422\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D\")),\r\n                react_1.default.createElement(\"a\", { href: \"tel:79885802740\", className: footer_module_scss_1.default.footer__callLink, \"aria-label\": \"\\u041C\\u043E\\u0439 \\u043D\\u043E\\u043C\\u0435\\u0440 +7 (988) 580-27-40\" },\r\n                    react_1.default.createElement(Text_1.Text, { size: 16, mobileSize: 14, color: Text_1.Ecolor.white, weight: 400 }, \"+7 (988) 580-27-40\"))),\r\n            react_1.default.createElement(\"ul\", { className: footer_module_scss_1.default.socialList },\r\n                react_1.default.createElement(\"li\", { className: footer_module_scss_1.default.socialList__item },\r\n                    react_1.default.createElement(\"a\", { href: \"https://vk.com/nikol_pinhasova\", className: footer_module_scss_1.default.socialList__link + \" \" + footer_module_scss_1.default.socialList__linkVk, \"aria-label\": \"\\u042F \\u0432 \\u0432\\u043A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u0435\" },\r\n                        react_1.default.createElement(\"svg\", { width: \"30\", height: \"30\", viewBox: \"0 0 30 30\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                            react_1.default.createElement(\"path\", { d: \"M15 0C6.71601 0 0 6.7157 0 15C0 23.2843 6.71601 30 15 30C23.284 30 30 23.2843 30 15C30 6.7157 23.284 0 15 0ZM22.6088 16.6223C23.3079 17.3052 24.0476 17.9478 24.6752 18.7013C24.9532 19.0346 25.2153 19.3792 25.4148 19.7669C25.6996 20.3196 25.4425 20.9257 24.9477 20.9586L21.8747 20.958C21.081 21.0236 20.4494 20.7035 19.9169 20.1609C19.4919 19.7285 19.0975 19.2666 18.6881 18.8194C18.5208 18.6359 18.3447 18.4631 18.1347 18.3272C17.7158 18.0546 17.3518 18.1381 17.1118 18.5758C16.8672 19.0211 16.8114 19.5146 16.788 20.0102C16.7546 20.7348 16.5361 20.9242 15.809 20.9583C14.2554 21.031 12.7814 20.7953 11.4114 20.0121C10.2028 19.3212 9.26731 18.3462 8.45217 17.2423C6.86486 15.0902 5.64921 12.7283 4.55693 10.2985C4.3111 9.7513 4.49095 9.45852 5.09463 9.44716C6.0976 9.42783 7.10056 9.43028 8.10353 9.44624C8.51171 9.45268 8.78179 9.68624 8.93862 10.0714C9.48061 11.4049 10.1451 12.6737 10.9777 13.8503C11.1996 14.1637 11.4261 14.4761 11.7486 14.6974C12.1047 14.9417 12.376 14.861 12.5438 14.4635C12.6513 14.2109 12.6976 13.9409 12.7209 13.6702C12.8007 12.743 12.8102 11.8162 12.6721 10.8927C12.5862 10.3148 12.2612 9.94158 11.6851 9.83233C11.3917 9.77678 11.4347 9.66813 11.5774 9.50056C11.8251 9.21084 12.0571 9.03161 12.5208 9.03161L15.9928 9.031C16.5401 9.13841 16.6628 9.38394 16.7371 9.93514L16.7402 13.7936C16.7337 14.0069 16.8473 14.6391 17.2303 14.7787C17.5372 14.88 17.7397 14.6339 17.9233 14.4396C18.7559 13.556 19.3492 12.5131 19.8804 11.4338C20.1149 10.9577 20.3171 10.4652 20.5136 9.97166C20.6596 9.60675 20.8868 9.42721 21.2986 9.43335L24.642 9.43734C24.7406 9.43734 24.8406 9.43826 24.9382 9.45514C25.5017 9.55151 25.6561 9.79396 25.4817 10.3436C25.2074 11.2073 24.6743 11.9266 24.1531 12.6479C23.5946 13.4201 22.9989 14.1652 22.4458 14.9408C21.9376 15.6497 21.9778 16.0066 22.6088 16.6223Z\", fill: \"#FFFFFF\" })))),\r\n                react_1.default.createElement(\"li\", { className: footer_module_scss_1.default.socialList__item },\r\n                    react_1.default.createElement(\"a\", { href: \"https://instagram.com/nikol_pinhasova?igshid=YmMyMTA2M2Y=\", className: footer_module_scss_1.default.socialList__link + \" \" + footer_module_scss_1.default.socialList__linkInsta, \"aria-label\": \"\\u042F \\u0432 \\u0418\\u043D\\u0441\\u0442\\u0430\\u0433\\u0440\\u0430\\u043C\\u043C\" },\r\n                        react_1.default.createElement(\"svg\", { width: \"30\", height: \"30\", viewBox: \"0 0 30 30\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                            react_1.default.createElement(\"path\", { d: \"M12.1289 15C12.1289 16.5857 13.4143 17.8711 15 17.8711C16.5857 17.8711 17.8711 16.5857 17.8711 15C17.8711 13.4143 16.5857 12.1289 15 12.1289C13.4143 12.1289 12.1289 13.4143 12.1289 15Z\", fill: \"#FFFFFF\" }),\r\n                            react_1.default.createElement(\"path\", { d: \"M8.28558 9.91991C8.4236 9.54591 8.64378 9.2074 8.92989 8.92953C9.20775 8.64343 9.54604 8.42325 9.92026 8.28523C10.2238 8.16736 10.6797 8.02705 11.5195 7.98883C12.4279 7.9474 12.7003 7.93848 15.0001 7.93848C17.3001 7.93848 17.5725 7.94717 18.4807 7.9886C19.3204 8.02705 19.7766 8.16736 20.0799 8.28523C20.4541 8.42325 20.7926 8.64343 21.0702 8.92953C21.3563 9.2074 21.5765 9.54568 21.7148 9.91991C21.8326 10.2234 21.9729 10.6796 22.0112 11.5193C22.0526 12.4275 22.0615 12.6999 22.0615 14.9999C22.0615 17.2997 22.0526 17.5721 22.0112 18.4805C21.9729 19.3203 21.8326 19.7762 21.7148 20.0797C21.5765 20.454 21.3566 20.7923 21.0705 21.0701C20.7926 21.3562 20.4543 21.5764 20.0801 21.7144C19.7766 21.8325 19.3204 21.9728 18.4807 22.011C17.5725 22.0525 17.3003 22.0612 15.0003 22.0612C12.7 22.0612 12.4277 22.0525 11.5197 22.011C10.6799 21.9728 10.2238 21.8325 9.92026 21.7144C9.16907 21.4247 8.57535 20.8309 8.28558 20.0797C8.16771 19.7762 8.0274 19.3203 7.98895 18.4805C7.94753 17.5721 7.93883 17.2997 7.93883 14.9999C7.93883 12.6999 7.94753 12.4275 7.98895 11.5193C8.02718 10.6796 8.16748 10.2234 8.28558 9.91991ZM15.0001 19.4226C17.4429 19.4226 19.4232 17.4426 19.4232 14.9997C19.4232 12.5569 17.4429 10.5768 15.0001 10.5768C12.5574 10.5768 10.5771 12.5569 10.5771 14.9997C10.5771 17.4426 12.5574 19.4226 15.0001 19.4226ZM10.4023 11.4356C10.9731 11.4356 11.4359 10.9728 11.4359 10.4019C11.4359 9.8311 10.9731 9.3683 10.4023 9.3683C9.83145 9.3683 9.36865 9.8311 9.36865 10.4019C9.36888 10.9728 9.83145 11.4356 10.4023 11.4356Z\", fill: \"#FFFFFF\" }),\r\n                            react_1.default.createElement(\"path\", { d: \"M15 0C23.283 0 30 6.717 30 15C30 23.283 23.283 30 15 30C6.717 30 0 23.283 0 15C0 6.717 6.717 0 15 0ZM6.43867 18.5511C6.48033 19.468 6.62613 20.094 6.83899 20.6419C7.28645 21.7989 8.20107 22.7135 9.35806 23.161C9.90578 23.3739 10.532 23.5194 11.4487 23.5613C12.3672 23.6032 12.6606 23.6133 14.9998 23.6133C17.3392 23.6133 17.6324 23.6032 18.5511 23.5613C19.4678 23.5194 20.094 23.3739 20.6417 23.161C21.2167 22.9447 21.7371 22.6057 22.1674 22.1674C22.6055 21.7374 22.9445 21.2167 23.1608 20.6419C23.3736 20.0942 23.5194 19.468 23.5611 18.5513C23.6034 17.6326 23.6133 17.3392 23.6133 15C23.6133 12.6608 23.6034 12.3674 23.5613 11.4489C23.5197 10.532 23.3741 9.90601 23.1612 9.35806C22.9449 8.78334 22.6057 8.26263 22.1674 7.83257C21.7374 7.39426 21.2167 7.05528 20.6419 6.83899C20.094 6.62613 19.468 6.48056 18.5511 6.43867C17.6326 6.39679 17.3392 6.38672 15 6.38672C12.6608 6.38672 12.3674 6.39679 11.4489 6.4389C10.532 6.48056 9.90601 6.62613 9.35806 6.83876C8.78334 7.05505 8.26263 7.39426 7.83234 7.83257C7.39426 8.26286 7.05505 8.78334 6.83899 9.35806C6.6259 9.90601 6.48033 10.532 6.43845 11.4489C6.39656 12.3674 6.38672 12.6608 6.38672 15C6.38672 17.3392 6.39656 17.6326 6.43867 18.5511Z\", fill: \"#FFFFFF\" }))))))));\r\n}\r\nexports.Footer = Footer;\r\n\n\n//# sourceURL=webpack:///./src/shared/Footer/Footer.tsx?");

/***/ }),

/***/ "./src/shared/Footer/footer.module.scss":
/*!**********************************************!*\
  !*** ./src/shared/Footer/footer.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"footer__container\": \"footer-module__footer__container--tkYsi\",\n\t\"footer__logo\": \"footer-module__footer__logo--2GBr8\",\n\t\"footer__call\": \"footer-module__footer__call--26HVP\",\n\t\"footer__callDescr\": \"footer-module__footer__callDescr--3HC78\",\n\t\"footer__callLink\": \"footer-module__footer__callLink--25yqI\",\n\t\"socialList\": \"footer-module__socialList--3CcXA\",\n\t\"socialList__item\": \"footer-module__socialList__item--2dCKE\",\n\t\"socialList__link\": \"footer-module__socialList__link--1UMoa\",\n\t\"socialList__linkVk\": \"footer-module__socialList__linkVk--1XoaR\",\n\t\"socialList__linkInsta\": \"footer-module__socialList__linkInsta--1r3bB\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Footer/footer.module.scss?");

/***/ }),

/***/ "./src/shared/Footer/index.ts":
/*!************************************!*\
  !*** ./src/shared/Footer/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Footer */ \"./src/shared/Footer/Footer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Footer/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar header_module_scss_1 = __importDefault(__webpack_require__(/*! ./header.module.scss */ \"./src/shared/Header/header.module.scss\"));\r\nvar main_global_scss_1 = __importDefault(__webpack_require__(/*! ../../main.global.scss */ \"./src/main.global.scss\"));\r\nvar components_1 = __webpack_require__(/*! ../../components */ \"./src/components/index.ts\");\r\nvar gsap_1 = __importDefault(__webpack_require__(/*! gsap */ \"gsap\"));\r\nvar ScrollToPlugin_1 = __importDefault(__webpack_require__(/*! gsap/ScrollToPlugin */ \"gsap/ScrollToPlugin\"));\r\nfunction Header(_a) {\r\n    var artRef1 = _a.artRef1, artRef2 = _a.artRef2, artRef3 = _a.artRef3, artRef4 = _a.artRef4, artRef5 = _a.artRef5, artRef6 = _a.artRef6, artRef7 = _a.artRef7, artRef8 = _a.artRef8, artRef9 = _a.artRef9, artRef10 = _a.artRef10, artRef11 = _a.artRef11;\r\n    gsap_1.default.registerPlugin(ScrollToPlugin_1.default);\r\n    var scrollTo = function (target) {\r\n        gsap_1.default.to(window, { duration: 1, scrollTo: target });\r\n    };\r\n    var _b = (0, react_1.useState)(false), isMenuOpen = _b[0], toggleMenu = _b[1];\r\n    var _c = (0, react_1.useState)(false), isSubPortMenuOpen = _c[0], toggleSubMenuPort = _c[1];\r\n    var _d = (0, react_1.useState)(false), isSubServMenuOpen = _d[0], toggleSubMenuServ = _d[1];\r\n    function toggleSubPortMenuMode() {\r\n        setTimeout(function () {\r\n            toggleSubMenuPort(!isSubPortMenuOpen);\r\n        }, 300);\r\n    }\r\n    var clickHandlerSubPort = function () {\r\n        toggleSubPortMenuMode();\r\n    };\r\n    function toggleSubServMenuMode() {\r\n        setTimeout(function () {\r\n            toggleSubMenuServ(!isSubServMenuOpen);\r\n        }, 300);\r\n    }\r\n    var clickHandlerSubServ = function () {\r\n        toggleSubServMenuMode();\r\n    };\r\n    function toggleMenuMode() {\r\n        toggleMenu(!isMenuOpen);\r\n    }\r\n    var clickHandler = function () {\r\n        toggleMenuMode();\r\n    };\r\n    return (react_1.default.createElement(\"header\", { className: header_module_scss_1.default.header },\r\n        react_1.default.createElement(\"span\", { className: main_global_scss_1.default.visuallyHidden },\r\n            react_1.default.createElement(components_1.Text, { As: \"h1\", size: 28, color: components_1.Ecolor.black, weight: 700 }, \"\\u0424\\u043E\\u0442\\u043E\\u0433\\u0440\\u0430\\u0444 \\u041D\\u0438\\u043A\\u043E\\u043B\\u044C \\u041F\\u0438\\u043D\\u0445\\u0430\\u0441\\u043E\\u0432\\u0430\")),\r\n        react_1.default.createElement(\"div\", { className: header_module_scss_1.default.header__container },\r\n            react_1.default.createElement(\"button\", { onClick: clickHandler, className: isMenuOpen ? header_module_scss_1.default.burger + \" \" + header_module_scss_1.default.burger__active : header_module_scss_1.default.burger },\r\n                react_1.default.createElement(\"span\", { className: header_module_scss_1.default.burger__line })),\r\n            react_1.default.createElement(\"a\", { href: \"index.html\", className: header_module_scss_1.default.logo, \"aria-label\": \"\\u043B\\u043E\\u0433\\u043E\\u0442\\u0438\\u043F\" },\r\n                react_1.default.createElement(components_1.Text, { As: \"h2\", size: 28, color: components_1.Ecolor.white, weight: 700 }, \"\\u041D\\u0438\\u043A\\u043E\\u043B\\u044C \\u041F\\u0438\\u043D\\u0445\\u0430\\u0441\\u043E\\u0432\\u0430 \\u043B\\u043E\\u0433\\u043E\\u0442\\u0438\\u043F\")),\r\n            react_1.default.createElement(\"nav\", { className: isMenuOpen ? header_module_scss_1.default.nav + \" \" + header_module_scss_1.default.nav__active : header_module_scss_1.default.nav },\r\n                react_1.default.createElement(\"ul\", { className: header_module_scss_1.default.nav__list },\r\n                    react_1.default.createElement(\"li\", { className: header_module_scss_1.default.nav__item },\r\n                        react_1.default.createElement(\"button\", { onClick: function () { return scrollTo(artRef1.current); }, className: header_module_scss_1.default.nav__link, \"aria-label\": \"\\u041E\\u0431\\u043E \\u043C\\u043D\\u0435\" },\r\n                            react_1.default.createElement(components_1.Text, { size: 24, color: components_1.Ecolor.white, weight: 600 }, \"\\u041E\\u0431\\u043E \\u043C\\u043D\\u0435\"))),\r\n                    react_1.default.createElement(\"li\", { className: header_module_scss_1.default.nav__item },\r\n                        react_1.default.createElement(\"button\", { onClick: function () { return scrollTo(artRef2.current); }, className: header_module_scss_1.default.nav__link, \"aria-label\": \"\\u041F\\u043E\\u0440\\u0442\\u0444\\u043E\\u043B\\u0438\\u043E\" },\r\n                            react_1.default.createElement(components_1.Text, { size: 24, color: components_1.Ecolor.white, weight: 600 }, \"\\u041F\\u043E\\u0440\\u0442\\u0444\\u043E\\u043B\\u0438\\u043E\")),\r\n                        react_1.default.createElement(\"span\", { onClick: clickHandlerSubPort, className: isSubPortMenuOpen ? header_module_scss_1.default.arrow + \" \" + header_module_scss_1.default.arrow__open : header_module_scss_1.default.arrow }),\r\n                        react_1.default.createElement(\"ul\", { className: isSubPortMenuOpen ? header_module_scss_1.default.subMenu__list + \" \" + header_module_scss_1.default.subMenu__open : header_module_scss_1.default.subMenu__list },\r\n                            react_1.default.createElement(\"li\", { className: header_module_scss_1.default.subMenu__item },\r\n                                react_1.default.createElement(\"button\", { onClick: function () { return scrollTo(artRef3.current); }, className: header_module_scss_1.default.subMenu__link, \"aria-label\": \"\\u0418\\u043D\\u0434\\u0438\\u0432\\u0438\\u0434\\u0443\\u0430\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0438\" },\r\n                                    react_1.default.createElement(components_1.Text, { size: 24, color: components_1.Ecolor.white, weight: 400 }, \"\\u0418\\u043D\\u0434\\u0438\\u0432\\u0438\\u0434\\u0443\\u0430\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0438\"))),\r\n                            react_1.default.createElement(\"li\", { className: header_module_scss_1.default.subMenu__item },\r\n                                react_1.default.createElement(\"button\", { onClick: function () { return scrollTo(artRef4.current); }, className: header_module_scss_1.default.subMenu__link, \"aria-label\": \"\\u0421\\u0435\\u043C\\u0435\\u0439\\u043D\\u044B\\u0435 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0438\" },\r\n                                    react_1.default.createElement(components_1.Text, { size: 24, color: components_1.Ecolor.white, weight: 400 }, \"\\u0421\\u0435\\u043C\\u0435\\u0439\\u043D\\u044B\\u0435 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0438\"))),\r\n                            react_1.default.createElement(\"li\", { className: header_module_scss_1.default.subMenu__item },\r\n                                react_1.default.createElement(\"button\", { onClick: function () { return scrollTo(artRef5.current); }, className: header_module_scss_1.default.subMenu__link, \"aria-label\": \"Lovestory\" },\r\n                                    react_1.default.createElement(components_1.Text, { size: 24, color: components_1.Ecolor.white, weight: 400 }, \"Lovestory\"))),\r\n                            react_1.default.createElement(\"li\", { className: header_module_scss_1.default.subMenu__item },\r\n                                react_1.default.createElement(\"button\", { onClick: function () { return scrollTo(artRef6.current); }, className: header_module_scss_1.default.subMenu__link, \"aria-label\": \"\\u0421\\u0432\\u0430\\u0434\\u0435\\u0431\\u043D\\u044B\\u0435 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0438\" },\r\n                                    react_1.default.createElement(components_1.Text, { size: 24, color: components_1.Ecolor.white, weight: 400 }, \"\\u0421\\u0432\\u0430\\u0434\\u0435\\u0431\\u043D\\u044B\\u0435 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0438\"))))),\r\n                    react_1.default.createElement(\"li\", { className: header_module_scss_1.default.nav__item },\r\n                        react_1.default.createElement(\"button\", { onClick: function () { return scrollTo(artRef7.current); }, className: header_module_scss_1.default.nav__link, \"aria-label\": \"\\u0423\\u0441\\u043B\\u0443\\u0433\\u0438\" },\r\n                            react_1.default.createElement(components_1.Text, { size: 24, color: components_1.Ecolor.white, weight: 600 }, \"\\u0423\\u0441\\u043B\\u0443\\u0433\\u0438\")),\r\n                        react_1.default.createElement(\"span\", { onClick: clickHandlerSubServ, className: isSubServMenuOpen ? header_module_scss_1.default.arrow + \" \" + header_module_scss_1.default.arrow__open : header_module_scss_1.default.arrow }),\r\n                        react_1.default.createElement(\"ul\", { className: isSubServMenuOpen ? header_module_scss_1.default.subMenu__list + \" \" + header_module_scss_1.default.subMenu__open : header_module_scss_1.default.subMenu__list },\r\n                            react_1.default.createElement(\"li\", { className: header_module_scss_1.default.subMenu__item },\r\n                                react_1.default.createElement(\"button\", { onClick: function () { return scrollTo(artRef8.current); }, className: header_module_scss_1.default.subMenu__link, \"aria-label\": \"\\u0418\\u043D\\u0434\\u0438\\u0432\\u0438\\u0434\\u0443\\u0430\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0438\" },\r\n                                    react_1.default.createElement(components_1.Text, { size: 24, color: components_1.Ecolor.white, weight: 400 }, \"\\u0418\\u043D\\u0434\\u0438\\u0432\\u0438\\u0434\\u0443\\u0430\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0438\"))),\r\n                            react_1.default.createElement(\"li\", { className: header_module_scss_1.default.subMenu__item },\r\n                                react_1.default.createElement(\"button\", { onClick: function () { return scrollTo(artRef9.current); }, className: header_module_scss_1.default.subMenu__link, \"aria-label\": \"\\u0421\\u0432\\u0430\\u0434\\u0435\\u0431\\u043D\\u044B\\u0435 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0438\" },\r\n                                    react_1.default.createElement(components_1.Text, { size: 24, color: components_1.Ecolor.white, weight: 400 }, \"\\u0421\\u0432\\u0430\\u0434\\u0435\\u0431\\u043D\\u044B\\u0435 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0438\"))),\r\n                            react_1.default.createElement(\"li\", { className: header_module_scss_1.default.subMenu__item },\r\n                                react_1.default.createElement(\"button\", { onClick: function () { return scrollTo(artRef10.current); }, className: header_module_scss_1.default.subMenu__link, \"aria-label\": \"\\u0414\\u043E\\u043F\\u043E\\u043B\\u043D\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u0430\\u044F \\u0438\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u044F\" },\r\n                                    react_1.default.createElement(components_1.Text, { size: 24, color: components_1.Ecolor.white, weight: 400 }, \"\\u0414\\u043E\\u043F\\u043E\\u043B\\u043D\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u0430\\u044F \\u0438\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u044F\"))))),\r\n                    react_1.default.createElement(\"li\", { className: header_module_scss_1.default.nav__item },\r\n                        react_1.default.createElement(\"button\", { onClick: function () { return scrollTo(artRef11.current); }, className: header_module_scss_1.default.nav__link, \"aria-label\": \"\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u044B\" },\r\n                            react_1.default.createElement(components_1.Text, { size: 24, color: components_1.Ecolor.white, weight: 600 }, \"\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u044B\"))))))));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/header.module.scss":
/*!**********************************************!*\
  !*** ./src/shared/Header/header.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header-module__header--1eO00\",\n\t\"header__container\": \"header-module__header__container--3yD4_\",\n\t\"header__list\": \"header-module__header__list--C4qyn\",\n\t\"nav\": \"header-module__nav--34U47\",\n\t\"nav__active\": \"header-module__nav__active--3FirV\",\n\t\"nav__list\": \"header-module__nav__list--3u2kN\",\n\t\"nav__item\": \"header-module__nav__item--VKFMT\",\n\t\"subMenu__list\": \"header-module__subMenu__list--25q8V\",\n\t\"arrow--open\": \"header-module__arrow--open--1l2WR\",\n\t\"nav__link\": \"header-module__nav__link--3BKeL\",\n\t\"burger\": \"header-module__burger--3MEPy\",\n\t\"burger__line\": \"header-module__burger__line--1DqSp\",\n\t\"burger__active\": \"header-module__burger__active--37SSb\",\n\t\"arrow\": \"header-module__arrow--2i7P5\",\n\t\"arrow__open\": \"header-module__arrow__open--1nTtI\",\n\t\"subMenu__item\": \"header-module__subMenu__item--3ZCqE\",\n\t\"subMenu__link\": \"header-module__subMenu__link--G1Stn\",\n\t\"subMenu__open\": \"header-module__subMenu__open--31sK-\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.module.scss?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Hr/Hr.tsx":
/*!******************************!*\
  !*** ./src/shared/Hr/Hr.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Hr = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar hr_module_scss_1 = __importDefault(__webpack_require__(/*! ./hr.module.scss */ \"./src/shared/Hr/hr.module.scss\"));\r\nfunction Hr() {\r\n    return (react_1.default.createElement(\"hr\", { className: hr_module_scss_1.default.hr }));\r\n}\r\nexports.Hr = Hr;\r\n\n\n//# sourceURL=webpack:///./src/shared/Hr/Hr.tsx?");

/***/ }),

/***/ "./src/shared/Hr/hr.module.scss":
/*!**************************************!*\
  !*** ./src/shared/Hr/hr.module.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"hr\": \"hr-module__hr--tYXtk\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Hr/hr.module.scss?");

/***/ }),

/***/ "./src/shared/Hr/index.ts":
/*!********************************!*\
  !*** ./src/shared/Hr/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Hr */ \"./src/shared/Hr/Hr.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Hr/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_module_scss_1 = __importDefault(__webpack_require__(/*! ./layout.module.scss */ \"./src/shared/Layout/layout.module.scss\"));\r\nvar components_1 = __webpack_require__(/*! ../../components */ \"./src/components/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar Hr_1 = __webpack_require__(/*! ../Hr */ \"./src/shared/Hr/index.ts\");\r\nvar About_1 = __webpack_require__(/*! ../About */ \"./src/shared/About/index.ts\");\r\nvar Portfolio_1 = __webpack_require__(/*! ../Portfolio */ \"./src/shared/Portfolio/index.ts\");\r\nvar Footer_1 = __webpack_require__(/*! ../Footer */ \"./src/shared/Footer/index.ts\");\r\nvar Services_1 = __webpack_require__(/*! ../Services */ \"./src/shared/Services/index.ts\");\r\nvar PulseButton_1 = __webpack_require__(/*! ../PulseButton */ \"./src/shared/PulseButton/index.ts\");\r\nfunction Layout() {\r\n    var ref1 = react_1.default.useRef(null);\r\n    var ref2 = react_1.default.useRef(null);\r\n    var ref3 = react_1.default.useRef(null);\r\n    var ref4 = react_1.default.useRef(null);\r\n    var ref5 = react_1.default.useRef(null);\r\n    var ref6 = react_1.default.useRef(null);\r\n    var ref7 = react_1.default.useRef(null);\r\n    var ref8 = react_1.default.useRef(null);\r\n    var ref9 = react_1.default.useRef(null);\r\n    var ref10 = react_1.default.useRef(null);\r\n    var ref11 = react_1.default.useRef(null);\r\n    if (!ref1)\r\n        return null;\r\n    if (!ref2)\r\n        return null;\r\n    if (!ref3)\r\n        return null;\r\n    if (!ref4)\r\n        return null;\r\n    if (!ref5)\r\n        return null;\r\n    if (!ref6)\r\n        return null;\r\n    if (!ref7)\r\n        return null;\r\n    if (!ref8)\r\n        return null;\r\n    if (!ref9)\r\n        return null;\r\n    if (!ref10)\r\n        return null;\r\n    if (!ref11)\r\n        return null;\r\n    return (react_1.default.createElement(\"div\", { className: layout_module_scss_1.default.layout },\r\n        react_1.default.createElement(components_1.Header, { artRef1: ref1, artRef2: ref2, artRef3: ref3, artRef4: ref4, artRef5: ref5, artRef6: ref6, artRef7: ref7, artRef8: ref8, artRef9: ref9, artRef10: ref10, artRef11: ref11 }),\r\n        react_1.default.createElement(Hr_1.Hr, null),\r\n        react_1.default.createElement(PulseButton_1.PulseButton, null),\r\n        react_1.default.createElement(\"main\", null,\r\n            react_1.default.createElement(About_1.About, { artRef1: ref1 }),\r\n            react_1.default.createElement(Portfolio_1.Portfolio, { artRef2: ref2, artRef3: ref3, artRef4: ref4, artRef5: ref5, artRef6: ref6 }),\r\n            react_1.default.createElement(react_router_dom_1.Outlet, null),\r\n            react_1.default.createElement(Services_1.Services, { artRef7: ref7, artRef8: ref8, artRef9: ref9, artRef10: ref10 })),\r\n        react_1.default.createElement(Footer_1.Footer, { artRef11: ref11 })));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.module.scss":
/*!**********************************************!*\
  !*** ./src/shared/Layout/layout.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout-module__layout--3hePS\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.module.scss?");

/***/ }),

/***/ "./src/shared/NotFound/NotFoundBlock/NotFoundBlock.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/NotFound/NotFoundBlock/NotFoundBlock.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NotFoundBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar notfoundblock_module_scss_1 = __importDefault(__webpack_require__(/*! ./notfoundblock.module.scss */ \"./src/shared/NotFound/NotFoundBlock/notfoundblock.module.scss\"));\r\nvar components_1 = __webpack_require__(/*! ../../../components */ \"./src/components/index.ts\");\r\nfunction NotFoundBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: notfoundblock_module_scss_1.default.wrapper },\r\n        react_1.default.createElement(\"div\", { className: notfoundblock_module_scss_1.default.wrapper__title },\r\n            react_1.default.createElement(components_1.Text, { As: \"h1\", size: 20, color: components_1.Ecolor.black, weight: 700 }, \"\\u041D\\u0438\\u0447\\u0435\\u0433\\u043E \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u043E\"),\r\n            react_1.default.createElement(components_1.Text, { size: 16, color: components_1.Ecolor.black, weight: 700 }, \"\\u041A \\u0441\\u043E\\u0436\\u0430\\u043B\\u0435\\u043D\\u0438\\u044E \\u0434\\u0430\\u043D\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043E\\u0442\\u0441\\u0443\\u0442\\u0441\\u0432\\u0443\\u0435\\u0442 \\u0432 \\u043D\\u0430\\u0448\\u0435\\u043C \\u0438\\u043D\\u0442\\u0435\\u0440\\u0435\\u0442 \\u043C\\u0430\\u0433\\u0430\\u0437\\u0438\\u043D\\u0435\"))));\r\n}\r\nexports.NotFoundBlock = NotFoundBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/NotFoundBlock/NotFoundBlock.tsx?");

/***/ }),

/***/ "./src/shared/NotFound/NotFoundBlock/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/NotFound/NotFoundBlock/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./NotFoundBlock */ \"./src/shared/NotFound/NotFoundBlock/NotFoundBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/NotFoundBlock/index.ts?");

/***/ }),

/***/ "./src/shared/NotFound/NotFoundBlock/notfoundblock.module.scss":
/*!*********************************************************************!*\
  !*** ./src/shared/NotFound/NotFoundBlock/notfoundblock.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"notfoundblock-module__wrapper--LkkuJ\",\n\t\"wrapper__title\": \"notfoundblock-module__wrapper__title--2-jYO\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/NotFoundBlock/notfoundblock.module.scss?");

/***/ }),

/***/ "./src/shared/Portfolio/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/Portfolio/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar card_module_scss_1 = __importDefault(__webpack_require__(/*! ./card.module.scss */ \"./src/shared/Portfolio/Card/card.module.scss\"));\r\nvar Modal_1 = __webpack_require__(/*! ./Modal */ \"./src/shared/Portfolio/Card/Modal/index.ts\");\r\nfunction Card(_a) {\r\n    var id = _a.id, mainImage = _a.mainImage, title = _a.title;\r\n    var _b = (0, react_1.useState)(false), modalActive = _b[0], setModalActive = _b[1];\r\n    return (react_1.default.createElement(\"li\", { className: card_module_scss_1.default.item },\r\n        react_1.default.createElement(\"article\", { className: card_module_scss_1.default.item__photo },\r\n            react_1.default.createElement(\"button\", { className: card_module_scss_1.default.item__btn, onClick: function () { return setModalActive(true); } }),\r\n            react_1.default.createElement(\"div\", { className: card_module_scss_1.default.item__image },\r\n                react_1.default.createElement(\"img\", { src: mainImage, alt: title }))),\r\n        react_1.default.createElement(Modal_1.Modal, { active: modalActive, setActive: setModalActive, modalImg: mainImage, modalTitle: title })));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/Portfolio/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/Portfolio/Card/Modal/Modal.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Portfolio/Card/Modal/Modal.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Modal = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar modal_module_scss_1 = __importDefault(__webpack_require__(/*! ./modal.module.scss */ \"./src/shared/Portfolio/Card/Modal/modal.module.scss\"));\r\nfunction Modal(_a) {\r\n    var active = _a.active, setActive = _a.setActive, modalImg = _a.modalImg, modalTitle = _a.modalTitle;\r\n    return (react_1.default.createElement(\"div\", { className: active ? modal_module_scss_1.default.modal + \" \" + modal_module_scss_1.default.active : modal_module_scss_1.default.modal, onClick: function () { return setActive(false); } },\r\n        react_1.default.createElement(\"div\", { className: active ? modal_module_scss_1.default.modal__content + \" \" + modal_module_scss_1.default.contentActive : modal_module_scss_1.default.modal__content, onClick: function (e) { return e.stopPropagation(); } },\r\n            react_1.default.createElement(\"img\", { src: modalImg, alt: modalTitle }))));\r\n}\r\nexports.Modal = Modal;\r\n\n\n//# sourceURL=webpack:///./src/shared/Portfolio/Card/Modal/Modal.tsx?");

/***/ }),

/***/ "./src/shared/Portfolio/Card/Modal/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/Portfolio/Card/Modal/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Modal */ \"./src/shared/Portfolio/Card/Modal/Modal.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Portfolio/Card/Modal/index.ts?");

/***/ }),

/***/ "./src/shared/Portfolio/Card/Modal/modal.module.scss":
/*!***********************************************************!*\
  !*** ./src/shared/Portfolio/Card/Modal/modal.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"modal-module__modal--2CujF\",\n\t\"modal__content\": \"modal-module__modal__content--1EDfe\",\n\t\"active\": \"modal-module__active--WsoWN\",\n\t\"contentActive\": \"modal-module__contentActive--3fczG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Portfolio/Card/Modal/modal.module.scss?");

/***/ }),

/***/ "./src/shared/Portfolio/Card/card.module.scss":
/*!****************************************************!*\
  !*** ./src/shared/Portfolio/Card/card.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"card-module__item--wwK8p\",\n\t\"item__photo\": \"card-module__item__photo--2KXgj\",\n\t\"item__btn\": \"card-module__item__btn--1liWS\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Portfolio/Card/card.module.scss?");

/***/ }),

/***/ "./src/shared/Portfolio/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/Portfolio/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/Portfolio/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Portfolio/Card/index.ts?");

/***/ }),

/***/ "./src/shared/Portfolio/Portfolio.tsx":
/*!********************************************!*\
  !*** ./src/shared/Portfolio/Portfolio.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Portfolio = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar portfolio_module_scss_1 = __importDefault(__webpack_require__(/*! ./portfolio.module.scss */ \"./src/shared/Portfolio/portfolio.module.scss\"));\r\nvar main_global_scss_1 = __importDefault(__webpack_require__(/*! ../../main.global.scss */ \"./src/main.global.scss\"));\r\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/Portfolio/Card/index.ts\");\r\nvar use_resize_1 = __webpack_require__(/*! ../../use-resize */ \"./src/use-resize.tsx\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar individualSlice_1 = __webpack_require__(/*! ../../redux/slices/individualSlice */ \"./src/redux/slices/individualSlice.tsx\");\r\nvar valuesSlice_1 = __webpack_require__(/*! ../../redux/slices/valuesSlice */ \"./src/redux/slices/valuesSlice.tsx\");\r\nvar familySlice_1 = __webpack_require__(/*! ../../redux/slices/familySlice */ \"./src/redux/slices/familySlice.tsx\");\r\nvar loveStorySlice_1 = __webpack_require__(/*! ../../redux/slices/loveStorySlice */ \"./src/redux/slices/loveStorySlice.tsx\");\r\nvar weddingSlice_1 = __webpack_require__(/*! ../../redux/slices/weddingSlice */ \"./src/redux/slices/weddingSlice.tsx\");\r\nvar Skeletons_1 = __webpack_require__(/*! ../Skeletons */ \"./src/shared/Skeletons/index.ts\");\r\nfunction Portfolio(_a) {\r\n    var artRef2 = _a.artRef2, artRef3 = _a.artRef3, artRef4 = _a.artRef4, artRef5 = _a.artRef5, artRef6 = _a.artRef6;\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var _b = (0, use_resize_1.useResize)(), width = _b.width, isScreenSm = _b.isScreenSm, isScreenMd = _b.isScreenMd, isScreenLg = _b.isScreenLg, isScreenXl = _b.isScreenXl;\r\n    var isQuantity = (0, react_redux_1.useSelector)(valuesSlice_1.selectValues).isQuantity;\r\n    var _c = (0, react_redux_1.useSelector)(individualSlice_1.selectIndividuals), individual = _c.individual, statusInd = _c.statusInd;\r\n    var _d = (0, react_redux_1.useSelector)(familySlice_1.selectFamilys), familys = _d.familys, statusFM = _d.statusFM;\r\n    var _e = (0, react_redux_1.useSelector)(loveStorySlice_1.selectLoveStorys), loveStorys = _e.loveStorys, statusLv = _e.statusLv;\r\n    var _f = (0, react_redux_1.useSelector)(weddingSlice_1.selectWeddings), weddings = _f.weddings, statusWd = _f.statusWd;\r\n    function FetchIndividual() {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                dispatch((0, individualSlice_1.fetchIndividuals)());\r\n                return [2 /*return*/];\r\n            });\r\n        });\r\n    }\r\n    function FetchFamily() {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                dispatch((0, familySlice_1.fetchFamilys)());\r\n                return [2 /*return*/];\r\n            });\r\n        });\r\n    }\r\n    function FetchLoveStory() {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                dispatch((0, loveStorySlice_1.fetchLoveStorys)());\r\n                return [2 /*return*/];\r\n            });\r\n        });\r\n    }\r\n    function FetchWedding() {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                dispatch((0, weddingSlice_1.fetchWeddings)());\r\n                return [2 /*return*/];\r\n            });\r\n        });\r\n    }\r\n    (0, react_1.useEffect)(function () {\r\n        if (isScreenXl) {\r\n            dispatch((0, valuesSlice_1.setFormValue)(12));\r\n        }\r\n        if (isScreenLg && !isScreenXl) {\r\n            dispatch((0, valuesSlice_1.setFormValue)(6));\r\n        }\r\n        if (isScreenMd && !isScreenLg) {\r\n            dispatch((0, valuesSlice_1.setFormValue)(4));\r\n        }\r\n        if (isScreenSm && !isScreenMd) {\r\n            dispatch((0, valuesSlice_1.setFormValue)(2));\r\n        }\r\n    }, [width]);\r\n    (0, react_1.useEffect)(function () {\r\n        FetchIndividual(),\r\n            FetchFamily(),\r\n            FetchLoveStory(),\r\n            FetchWedding();\r\n    }, [isQuantity]);\r\n    var _g = (0, react_1.useState)(isQuantity), visibleIndividual = _g[0], setVisibleIndividual = _g[1];\r\n    var _h = (0, react_1.useState)(isQuantity), visibleFamily = _h[0], setVisibleFamily = _h[1];\r\n    var _j = (0, react_1.useState)(isQuantity), visibleLoveStory = _j[0], setVisibleLoveStory = _j[1];\r\n    var _k = (0, react_1.useState)(isQuantity), visibleWedding = _k[0], setVisibleWedding = _k[1];\r\n    var showMoreIndividual = function () {\r\n        setVisibleIndividual(function (prevValue) { return prevValue + 2; });\r\n    };\r\n    var showMoreFamily = function () {\r\n        setVisibleFamily(function (prevValue) { return prevValue + 2; });\r\n    };\r\n    var showMoreLoveStory = function () {\r\n        setVisibleLoveStory(function (prevValue) { return prevValue + 2; });\r\n    };\r\n    var showMoreWedding = function () {\r\n        setVisibleWedding(function (prevValue) { return prevValue + 2; });\r\n    };\r\n    var renderIndividuals = function () {\r\n        return individual.slice(0, visibleIndividual).map(function (item, index) { return (react_1.default.createElement(Card_1.Card, { key: index, id: item.id, mainImage: item.mainImage, title: item.title })); });\r\n    };\r\n    var renderFamilys = function () {\r\n        return familys.slice(0, visibleFamily).map(function (item, index) { return (react_1.default.createElement(Card_1.Card, { key: index, id: item.id, mainImage: item.mainImage, title: item.title })); });\r\n    };\r\n    var renderLoveStorys = function () {\r\n        return loveStorys.slice(0, visibleLoveStory).map(function (item, index) { return (react_1.default.createElement(Card_1.Card, { key: index, id: item.id, mainImage: item.mainImage, title: item.title })); });\r\n    };\r\n    var renderWeddings = function () {\r\n        return weddings.slice(0, visibleWedding).map(function (item, index) { return (react_1.default.createElement(Card_1.Card, { key: index, id: item.id, mainImage: item.mainImage, title: item.title })); });\r\n    };\r\n    (0, react_1.useEffect)(function () {\r\n        setVisibleIndividual(isQuantity),\r\n            setVisibleFamily(isQuantity),\r\n            setVisibleLoveStory(isQuantity),\r\n            setVisibleWedding(isQuantity);\r\n    }, [isQuantity]);\r\n    var skeletons = __spreadArray([], new Array(1), true).map(function (_, index) { return react_1.default.createElement(Skeletons_1.Skeletons, { key: index }); });\r\n    return (react_1.default.createElement(\"section\", { ref: artRef2, className: portfolio_module_scss_1.default.portfolio },\r\n        react_1.default.createElement(\"div\", { className: main_global_scss_1.default.container },\r\n            react_1.default.createElement(\"div\", { className: portfolio_module_scss_1.default.portfolio__container },\r\n                react_1.default.createElement(\"div\", { className: main_global_scss_1.default.sectionTitle },\r\n                    react_1.default.createElement(Text_1.Text, { As: \"h2\", size: 28, mobileSize: 24, color: Text_1.Ecolor.white, weight: 700 }, \"\\u041F\\u043E\\u0440\\u0442\\u0444\\u043E\\u043B\\u0438\\u043E\")),\r\n                react_1.default.createElement(\"div\", { ref: artRef3, className: portfolio_module_scss_1.default.portfolio__title },\r\n                    react_1.default.createElement(Text_1.Text, { As: \"h3\", size: 24, mobileSize: 20, color: Text_1.Ecolor.white, weight: 600 }, \"\\u0418\\u043D\\u0434\\u0438\\u0432\\u0438\\u0434\\u0443\\u0430\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0438\")),\r\n                react_1.default.createElement(\"div\", { className: portfolio_module_scss_1.default.portfolio__wrapper },\r\n                    react_1.default.createElement(\"ul\", { className: portfolio_module_scss_1.default.portfolio__grid }, statusInd === individualSlice_1.Status.ERROR ? (react_1.default.createElement(\"div\", { className: portfolio_module_scss_1.default.error },\r\n                        react_1.default.createElement(\"div\", { className: portfolio_module_scss_1.default.cartTitleEmpty },\r\n                            react_1.default.createElement(Text_1.Text, { As: 'h2', size: 20, color: Text_1.Ecolor.black, weight: 700 }, \"\\u041F\\u0440\\u043E\\u0438\\u0437\\u043E\\u0448\\u043B\\u0430 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438\"),\r\n                            react_1.default.createElement(Text_1.Text, { As: 'p', size: 16, color: Text_1.Ecolor.grey9D, weight: 400 }, \"\\u041C\\u044B \\u0443\\u0436\\u0435 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0435\\u043C \\u043D\\u0430\\u0434 \\u0435\\u0435 \\u0443\\u0441\\u0442\\u0440\\u0430\\u043D\\u0435\\u043D\\u0438\\u0435\\u043C\"))))\r\n                        : (react_1.default.createElement(react_1.default.Fragment, null, //рендерим карточки\r\n                        statusInd === individualSlice_1.Status.LOADING ? skeletons : renderIndividuals()))),\r\n                    react_1.default.createElement(\"button\", { onClick: showMoreIndividual, className: visibleIndividual < individual.length ? portfolio_module_scss_1.default.portfolio__btn + \" \" + portfolio_module_scss_1.default.btn + \" \" + portfolio_module_scss_1.default.btn__stroke : portfolio_module_scss_1.default.disable },\r\n                        react_1.default.createElement(Text_1.Text, { size: 16, mobileSize: 12, color: Text_1.Ecolor.white, weight: 600 }, \"\\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C \\u0435\\u0449\\u0435\"))),\r\n                react_1.default.createElement(\"div\", { ref: artRef4, className: portfolio_module_scss_1.default.portfolio__title },\r\n                    react_1.default.createElement(Text_1.Text, { As: \"h3\", size: 24, mobileSize: 20, color: Text_1.Ecolor.white, weight: 600 }, \"\\u0421\\u0435\\u043C\\u0435\\u0439\\u043D\\u044B\\u0435 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0438\")),\r\n                react_1.default.createElement(\"div\", { className: portfolio_module_scss_1.default.portfolio__wrapper },\r\n                    react_1.default.createElement(\"ul\", { className: portfolio_module_scss_1.default.portfolio__grid }, statusFM === individualSlice_1.Status.ERROR ? (react_1.default.createElement(\"div\", { className: portfolio_module_scss_1.default.error },\r\n                        react_1.default.createElement(\"div\", { className: portfolio_module_scss_1.default.cartTitleEmpty },\r\n                            react_1.default.createElement(Text_1.Text, { As: 'h2', size: 20, color: Text_1.Ecolor.black, weight: 700 }, \"\\u041F\\u0440\\u043E\\u0438\\u0437\\u043E\\u0448\\u043B\\u0430 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438\"),\r\n                            react_1.default.createElement(Text_1.Text, { As: 'p', size: 16, color: Text_1.Ecolor.grey9D, weight: 400 }, \"\\u041C\\u044B \\u0443\\u0436\\u0435 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0435\\u043C \\u043D\\u0430\\u0434 \\u0435\\u0435 \\u0443\\u0441\\u0442\\u0440\\u0430\\u043D\\u0435\\u043D\\u0438\\u0435\\u043C\"))))\r\n                        : (react_1.default.createElement(react_1.default.Fragment, null, //рендерим карточки\r\n                        statusFM === individualSlice_1.Status.LOADING ? skeletons : renderFamilys()))),\r\n                    react_1.default.createElement(\"button\", { onClick: showMoreFamily, className: visibleFamily < familys.length ? portfolio_module_scss_1.default.portfolio__btn + \" \" + portfolio_module_scss_1.default.btn + \" \" + portfolio_module_scss_1.default.btn__stroke : portfolio_module_scss_1.default.disable },\r\n                        react_1.default.createElement(Text_1.Text, { size: 16, mobileSize: 12, color: Text_1.Ecolor.white, weight: 600 }, \"\\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C \\u0435\\u0449\\u0435\"))),\r\n                react_1.default.createElement(\"div\", { ref: artRef5, className: portfolio_module_scss_1.default.portfolio__title },\r\n                    react_1.default.createElement(Text_1.Text, { As: \"h3\", size: 24, mobileSize: 20, color: Text_1.Ecolor.white, weight: 600 }, \"Lovestory\")),\r\n                react_1.default.createElement(\"div\", { className: portfolio_module_scss_1.default.portfolio__wrapper },\r\n                    react_1.default.createElement(\"ul\", { className: portfolio_module_scss_1.default.portfolio__grid }, statusLv === individualSlice_1.Status.ERROR ? (react_1.default.createElement(\"div\", { className: portfolio_module_scss_1.default.error },\r\n                        react_1.default.createElement(\"div\", { className: portfolio_module_scss_1.default.cartTitleEmpty },\r\n                            react_1.default.createElement(Text_1.Text, { As: 'h2', size: 20, color: Text_1.Ecolor.black, weight: 700 }, \"\\u041F\\u0440\\u043E\\u0438\\u0437\\u043E\\u0448\\u043B\\u0430 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438\"),\r\n                            react_1.default.createElement(Text_1.Text, { As: 'p', size: 16, color: Text_1.Ecolor.grey9D, weight: 400 }, \"\\u041C\\u044B \\u0443\\u0436\\u0435 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0435\\u043C \\u043D\\u0430\\u0434 \\u0435\\u0435 \\u0443\\u0441\\u0442\\u0440\\u0430\\u043D\\u0435\\u043D\\u0438\\u0435\\u043C\"))))\r\n                        : (react_1.default.createElement(react_1.default.Fragment, null, //рендерим карточки\r\n                        statusLv === individualSlice_1.Status.LOADING ? skeletons : renderLoveStorys()))),\r\n                    react_1.default.createElement(\"button\", { onClick: showMoreLoveStory, className: visibleLoveStory < loveStorys.length ? portfolio_module_scss_1.default.portfolio__btn + \" \" + portfolio_module_scss_1.default.btn + \" \" + portfolio_module_scss_1.default.btn__stroke : portfolio_module_scss_1.default.disable },\r\n                        react_1.default.createElement(Text_1.Text, { size: 16, mobileSize: 12, color: Text_1.Ecolor.white, weight: 600 }, \"\\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C \\u0435\\u0449\\u0435\"))),\r\n                react_1.default.createElement(\"div\", { ref: artRef6, className: portfolio_module_scss_1.default.portfolio__title },\r\n                    react_1.default.createElement(Text_1.Text, { As: \"h3\", size: 24, mobileSize: 20, color: Text_1.Ecolor.white, weight: 600 }, \"\\u0421\\u0432\\u0430\\u0434\\u0435\\u0431\\u043D\\u044B\\u0435\")),\r\n                react_1.default.createElement(\"div\", { className: portfolio_module_scss_1.default.portfolio__wrapper },\r\n                    react_1.default.createElement(\"ul\", { className: portfolio_module_scss_1.default.portfolio__grid }, statusWd === individualSlice_1.Status.ERROR ? (react_1.default.createElement(\"div\", { className: portfolio_module_scss_1.default.error },\r\n                        react_1.default.createElement(\"div\", { className: portfolio_module_scss_1.default.cartTitleEmpty },\r\n                            react_1.default.createElement(Text_1.Text, { As: 'h2', size: 20, color: Text_1.Ecolor.black, weight: 700 }, \"\\u041F\\u0440\\u043E\\u0438\\u0437\\u043E\\u0448\\u043B\\u0430 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438\"),\r\n                            react_1.default.createElement(Text_1.Text, { As: 'p', size: 16, color: Text_1.Ecolor.grey9D, weight: 400 }, \"\\u041C\\u044B \\u0443\\u0436\\u0435 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0435\\u043C \\u043D\\u0430\\u0434 \\u0435\\u0435 \\u0443\\u0441\\u0442\\u0440\\u0430\\u043D\\u0435\\u043D\\u0438\\u0435\\u043C\"))))\r\n                        : (react_1.default.createElement(react_1.default.Fragment, null, //рендерим карточки\r\n                        statusWd === individualSlice_1.Status.LOADING ? skeletons : renderWeddings()))),\r\n                    react_1.default.createElement(\"button\", { onClick: showMoreWedding, className: visibleWedding < weddings.length ? portfolio_module_scss_1.default.portfolio__btn + \" \" + portfolio_module_scss_1.default.btn + \" \" + portfolio_module_scss_1.default.btn__stroke : portfolio_module_scss_1.default.disable },\r\n                        react_1.default.createElement(Text_1.Text, { size: 16, mobileSize: 12, color: Text_1.Ecolor.white, weight: 600 }, \"\\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C \\u0435\\u0449\\u0435\")))))));\r\n}\r\nexports.Portfolio = Portfolio;\r\n\n\n//# sourceURL=webpack:///./src/shared/Portfolio/Portfolio.tsx?");

/***/ }),

/***/ "./src/shared/Portfolio/index.ts":
/*!***************************************!*\
  !*** ./src/shared/Portfolio/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Portfolio */ \"./src/shared/Portfolio/Portfolio.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Portfolio/index.ts?");

/***/ }),

/***/ "./src/shared/Portfolio/portfolio.module.scss":
/*!****************************************************!*\
  !*** ./src/shared/Portfolio/portfolio.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"portfolio__container\": \"portfolio-module__portfolio__container--34nN-\",\n\t\"portfolio__item\": \"portfolio-module__portfolio__item--2vs9t\",\n\t\"photo\": \"portfolio-module__photo--3TMnG\",\n\t\"portfolio__individual-item\": \"portfolio-module__portfolio__individual-item--2Y-v_\",\n\t\"portfolio__family-item\": \"portfolio-module__portfolio__family-item--Q41d-\",\n\t\"portfolio__lovestory-item\": \"portfolio-module__portfolio__lovestory-item--1vd6r\",\n\t\"portfolio__wedding-item\": \"portfolio-module__portfolio__wedding-item--1elHz\",\n\t\"portfolio__title\": \"portfolio-module__portfolio__title--2PmkD\",\n\t\"portfolio__wrapper\": \"portfolio-module__portfolio__wrapper--24z4v\",\n\t\"portfolio__btn\": \"portfolio-module__portfolio__btn--beZMW\",\n\t\"portfolio__grid\": \"portfolio-module__portfolio__grid--211y_\",\n\t\"disable\": \"portfolio-module__disable--2PL5Y\",\n\t\"btn\": \"portfolio-module__btn--35ij0\",\n\t\"btn__stroke\": \"portfolio-module__btn__stroke--V2jgo\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Portfolio/portfolio.module.scss?");

/***/ }),

/***/ "./src/shared/PulseButton/PulseButton.tsx":
/*!************************************************!*\
  !*** ./src/shared/PulseButton/PulseButton.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PulseButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar pulsebutton_module_scss_1 = __importDefault(__webpack_require__(/*! ./pulsebutton.module.scss */ \"./src/shared/PulseButton/pulsebutton.module.scss\"));\r\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\r\nfunction PulseButton() {\r\n    return (react_1.default.createElement(\"div\", { className: pulsebutton_module_scss_1.default.pulseButton },\r\n        react_1.default.createElement(\"span\", { className: pulsebutton_module_scss_1.default.pulseButton__rings }),\r\n        react_1.default.createElement(\"span\", { className: pulsebutton_module_scss_1.default.pulseButton__rings }),\r\n        react_1.default.createElement(\"span\", { className: pulsebutton_module_scss_1.default.pulseButton__rings }),\r\n        react_1.default.createElement(\"span\", { className: pulsebutton_module_scss_1.default.pulseButton__text },\r\n            react_1.default.createElement(\"span\", null,\r\n                react_1.default.createElement(\"a\", { className: pulsebutton_module_scss_1.default.pulseButton__link, href: \"https://api.whatsapp.com/send?phone=79885802740\" },\r\n                    react_1.default.createElement(Text_1.Text, { size: 16, color: Text_1.Ecolor.white, weight: 600 }, \"\\u0417\\u0430\\u043F\\u0438\\u0441\\u0430\\u0442\\u044C\\u0441\\u044F \\u043D\\u0430 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0443\"))))));\r\n}\r\nexports.PulseButton = PulseButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/PulseButton/PulseButton.tsx?");

/***/ }),

/***/ "./src/shared/PulseButton/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/PulseButton/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PulseButton */ \"./src/shared/PulseButton/PulseButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/PulseButton/index.ts?");

/***/ }),

/***/ "./src/shared/PulseButton/pulsebutton.module.scss":
/*!********************************************************!*\
  !*** ./src/shared/PulseButton/pulsebutton.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"pulseButton\": \"pulsebutton-module__pulseButton--YwXxG\",\n\t\"pulseButton__text\": \"pulsebutton-module__pulseButton__text--4TPbu\",\n\t\"pulseButton__link\": \"pulsebutton-module__pulseButton__link--20mL_\",\n\t\"pulseButton__rings\": \"pulsebutton-module__pulseButton__rings--1DZCB\",\n\t\"pulse_1\": \"pulsebutton-module__pulse_1--2eoTT\",\n\t\"pulse_2\": \"pulsebutton-module__pulse_2--Mfz0q\",\n\t\"pulse_3\": \"pulsebutton-module__pulse_3--2TjjZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/PulseButton/pulsebutton.module.scss?");

/***/ }),

/***/ "./src/shared/Services/Services.tsx":
/*!******************************************!*\
  !*** ./src/shared/Services/Services.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Services = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar services_module_scss_1 = __importDefault(__webpack_require__(/*! ./services.module.scss */ \"./src/shared/Services/services.module.scss\"));\r\nfunction Services(_a) {\r\n    var artRef7 = _a.artRef7, artRef8 = _a.artRef8, artRef9 = _a.artRef9, artRef10 = _a.artRef10;\r\n    return (react_1.default.createElement(\"section\", { ref: artRef7, className: services_module_scss_1.default.services },\r\n        react_1.default.createElement(\"div\", { className: services_module_scss_1.default.services__container },\r\n            react_1.default.createElement(\"h2\", { className: services_module_scss_1.default.sectionTitle }, \"\\u0423\\u0441\\u043B\\u0443\\u0433\\u0438\"),\r\n            react_1.default.createElement(\"h3\", { ref: artRef8, className: services_module_scss_1.default.servicesIndividual }, \"\\u0418\\u043D\\u0434\\u0438\\u0432\\u0438\\u0434\\u0443\\u0430\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0441\\u044A\\u0435\\u043C\\u043A\\u0438\"),\r\n            react_1.default.createElement(\"div\", { className: services_module_scss_1.default.services__wrapper },\r\n                react_1.default.createElement(\"article\", { className: services_module_scss_1.default.services__card },\r\n                    react_1.default.createElement(\"h4\", { className: services_module_scss_1.default.services__subTitle }, \"\\u041A\\u043E\\u043C\\u0444\\u043E\\u0440\\u0442\"),\r\n                    react_1.default.createElement(\"ul\", { className: services_module_scss_1.default.services__list },\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"))),\r\n                react_1.default.createElement(\"article\", { className: services_module_scss_1.default.services__card },\r\n                    react_1.default.createElement(\"h4\", { className: services_module_scss_1.default.services__subTitle }, \"\\u041C\\u0430\\u043A\\u0441\\u0438\"),\r\n                    react_1.default.createElement(\"ul\", { className: services_module_scss_1.default.services__list },\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\")))),\r\n            react_1.default.createElement(\"h3\", { ref: artRef9, className: services_module_scss_1.default.servicesWedding }, \"\\u0421\\u0432\\u0430\\u0434\\u0435\\u0431\\u043D\\u044B\\u0435\"),\r\n            react_1.default.createElement(\"div\", { className: services_module_scss_1.default.services__wrapper },\r\n                react_1.default.createElement(\"article\", { className: services_module_scss_1.default.services__card },\r\n                    react_1.default.createElement(\"h4\", { className: services_module_scss_1.default.services__subTitle }, \"\\u041C\\u0438\\u043D\\u0438\"),\r\n                    react_1.default.createElement(\"ul\", { className: services_module_scss_1.default.services__list },\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"))),\r\n                react_1.default.createElement(\"article\", { className: services_module_scss_1.default.services__card },\r\n                    react_1.default.createElement(\"h4\", { className: services_module_scss_1.default.services__subTitle }, \"\\u041A\\u043E\\u043C\\u0444\\u043E\\u0440\\u0442\"),\r\n                    react_1.default.createElement(\"ul\", { className: services_module_scss_1.default.services__list },\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"))),\r\n                react_1.default.createElement(\"article\", { className: services_module_scss_1.default.services__card },\r\n                    react_1.default.createElement(\"h4\", { className: services_module_scss_1.default.services__subTitle }, \"\\u041C\\u0430\\u043A\\u0441\\u0438\"),\r\n                    react_1.default.createElement(\"ul\", { className: services_module_scss_1.default.services__list },\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                        react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\")))),\r\n            react_1.default.createElement(\"h3\", { ref: artRef10, className: services_module_scss_1.default.servicesDop }, \"\\u0414\\u043E\\u043F\\u043E\\u043B\\u043D\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u0430\\u044F \\u0438\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u044F\"),\r\n            react_1.default.createElement(\"ul\", { className: services_module_scss_1.default.services__list },\r\n                react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\"),\r\n                react_1.default.createElement(\"li\", { className: services_module_scss_1.default.services__lisItem }, \"Lorem ipsum dolor\")))));\r\n}\r\nexports.Services = Services;\r\n\n\n//# sourceURL=webpack:///./src/shared/Services/Services.tsx?");

/***/ }),

/***/ "./src/shared/Services/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Services/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Services */ \"./src/shared/Services/Services.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Services/index.ts?");

/***/ }),

/***/ "./src/shared/Services/services.module.scss":
/*!**************************************************!*\
  !*** ./src/shared/Services/services.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"services__container\": \"services-module__services__container--7wnLY\",\n\t\"services__title\": \"services-module__services__title--1j17S\",\n\t\"services__sub-title\": \"services-module__services__sub-title--20m1c\",\n\t\"services__card\": \"services-module__services__card--3CmCz\",\n\t\"services__list\": \"services-module__services__list--231KG\",\n\t\"services__list-item\": \"services-module__services__list-item--1qkoa\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Services/services.module.scss?");

/***/ }),

/***/ "./src/shared/Skeletons/Skeletons.tsx":
/*!********************************************!*\
  !*** ./src/shared/Skeletons/Skeletons.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Skeletons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar skeletons_module_scss_1 = __importDefault(__webpack_require__(/*! ./skeletons.module.scss */ \"./src/shared/Skeletons/skeletons.module.scss\"));\r\nvar react_content_loader_1 = __importDefault(__webpack_require__(/*! react-content-loader */ \"react-content-loader\"));\r\nfunction Skeletons() {\r\n    return (react_1.default.createElement(\"div\", { className: skeletons_module_scss_1.default.skeletons },\r\n        react_1.default.createElement(react_content_loader_1.default, { className: skeletons_module_scss_1.default.skeletons__mobile, speed: 2, width: 256, height: 300, viewBox: \"0 0 256 300\", backgroundColor: \"#f3f3f3\", foregroundColor: \"#ecebeb\" },\r\n            react_1.default.createElement(\"rect\", { x: \"16\", y: \"0\", rx: \"2\", ry: \"2\", width: \"236\", height: \"280\" }))));\r\n}\r\nexports.Skeletons = Skeletons;\r\n\n\n//# sourceURL=webpack:///./src/shared/Skeletons/Skeletons.tsx?");

/***/ }),

/***/ "./src/shared/Skeletons/index.ts":
/*!***************************************!*\
  !*** ./src/shared/Skeletons/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Skeletons */ \"./src/shared/Skeletons/Skeletons.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Skeletons/index.ts?");

/***/ }),

/***/ "./src/shared/Skeletons/skeletons.module.scss":
/*!****************************************************!*\
  !*** ./src/shared/Skeletons/skeletons.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"skeletons\": \"skeletons-module__skeletons--I1aI6\",\n\t\"skeletons__mobile\": \"skeletons-module__skeletons__mobile--121Mc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Skeletons/skeletons.module.scss?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.Ecolor = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_module_scss_1 = __importDefault(__webpack_require__(/*! ./text.module.scss */ \"./src/shared/Text/text.module.scss\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar Ecolor;\r\n(function (Ecolor) {\r\n    Ecolor[\"black\"] = \"black\";\r\n    Ecolor[\"white\"] = \"white\";\r\n    Ecolor[\"black2C\"] = \"black2C\";\r\n    Ecolor[\"grey9D\"] = \"grey9D\";\r\n    Ecolor[\"grey5C\"] = \"grey5C\";\r\n    Ecolor[\"orange\"] = \"orange\";\r\n    Ecolor[\"grey8D\"] = \"grey8D\";\r\n    Ecolor[\"greyCA\"] = \"greyCA\";\r\n})(Ecolor = exports.Ecolor || (exports.Ecolor = {}));\r\nfunction Text(props) {\r\n    var _a, _b, _c;\r\n    var _d = props.As, As = _d === void 0 ? 'span' : _d, _e = props.color, color = _e === void 0 ? Ecolor.black : _e, _f = props.weight, weight = _f === void 0 ? '400' : _f, children = props.children, size = props.size, mobileSize = props.mobileSize, dekstopSize = props.dekstopSize, tabletSize = props.tabletSize;\r\n    var classes = (0, classnames_1.default)(text_module_scss_1.default[\"s\".concat(size)], text_module_scss_1.default[\"w\".concat(weight)], text_module_scss_1.default[color], (_a = {}, _a[text_module_scss_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_module_scss_1.default[\"t\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_module_scss_1.default[\"d\".concat(dekstopSize)]] = dekstopSize, _c));\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.module.scss":
/*!******************************************!*\
  !*** ./src/shared/Text/text.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s32\": \"text-module__s32--2qgsU\",\n\t\"s28\": \"text-module__s28--3ufyU\",\n\t\"s24\": \"text-module__s24--6swLg\",\n\t\"s20\": \"text-module__s20--2w4ZZ\",\n\t\"s16\": \"text-module__s16--3iT8Y\",\n\t\"s14\": \"text-module__s14--fC11q\",\n\t\"s12\": \"text-module__s12--25EqP\",\n\t\"s10\": \"text-module__s10--3QgsB\",\n\t\"w700\": \"text-module__w700--3Vmg6\",\n\t\"w600\": \"text-module__w600--2Er8N\",\n\t\"w500\": \"text-module__w500--iRQqJ\",\n\t\"w400\": \"text-module__w400--hJLss\",\n\t\"white\": \"text-module__white--1uVp-\",\n\t\"m28\": \"text-module__m28--3l_SK\",\n\t\"m24\": \"text-module__m24--1ok-n\",\n\t\"m20\": \"text-module__m20--O50Dz\",\n\t\"m16\": \"text-module__m16--1fcs7\",\n\t\"m14\": \"text-module__m14--3EwPb\",\n\t\"m12\": \"text-module__m12--ZPha-\",\n\t\"m10\": \"text-module__m10--1P5E3\",\n\t\"t28\": \"text-module__t28--1nNgM\",\n\t\"t24\": \"text-module__t24--r1wX8\",\n\t\"t20\": \"text-module__t20--cZSIl\",\n\t\"t16\": \"text-module__t16--1vZi8\",\n\t\"t14\": \"text-module__t14--3cnUy\",\n\t\"t12\": \"text-module__t12--3Hpl0\",\n\t\"t10\": \"text-module__t10--1XDip\",\n\t\"d28\": \"text-module__d28--2ePcn\",\n\t\"d20\": \"text-module__d20--2Zpy3\",\n\t\"d16\": \"text-module__d16--205Zv\",\n\t\"d14\": \"text-module__d14--3k94I\",\n\t\"d12\": \"text-module__d12--1Z2i0\",\n\t\"d10\": \"text-module__d10--3moCu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.module.scss?");

/***/ }),

/***/ "./src/use-resize.tsx":
/*!****************************!*\
  !*** ./src/use-resize.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useResize = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar const_breakpoints_1 = __webpack_require__(/*! ./utils/js/const-breakpoints */ \"./src/utils/js/const-breakpoints.ts\");\r\nvar useResize = function () {\r\n    var _a = (0, react_1.useState)(0), width = _a[0], setWidth = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        var handleResize = function (event) {\r\n            setWidth(event.target.innerWidth);\r\n        };\r\n        window.addEventListener('resize', handleResize);\r\n        return function () {\r\n            window.removeEventListener('resize', handleResize);\r\n        };\r\n    }, []);\r\n    return {\r\n        width: width,\r\n        isScreenSm: width >= const_breakpoints_1.SCREEN_SM,\r\n        isScreenMd: width >= const_breakpoints_1.SCREEN_MD,\r\n        isScreenLg: width >= const_breakpoints_1.SCREEN_LG,\r\n        isScreenXl: width >= const_breakpoints_1.SCREEN_XL,\r\n        isScreenXxl: width >= const_breakpoints_1.SCREEN_XXL,\r\n    };\r\n};\r\nexports.useResize = useResize;\r\n\n\n//# sourceURL=webpack:///./src/use-resize.tsx?");

/***/ }),

/***/ "./src/utils/js/const-breakpoints.ts":
/*!*******************************************!*\
  !*** ./src/utils/js/const-breakpoints.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SCREEN_XXL = exports.SCREEN_XL = exports.SCREEN_LG = exports.SCREEN_MD = exports.SCREEN_SM = void 0;\r\nexports.SCREEN_SM = 320;\r\nexports.SCREEN_MD = 576;\r\nexports.SCREEN_LG = 769;\r\nexports.SCREEN_XL = 1025;\r\nexports.SCREEN_XXL = 1400;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/const-breakpoints.ts?");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");\n\n//# sourceURL=webpack:///external_%22@reduxjs/toolkit%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gsap\");\n\n//# sourceURL=webpack:///external_%22gsap%22?");

/***/ }),

/***/ "gsap/ScrollToPlugin":
/*!**************************************!*\
  !*** external "gsap/ScrollToPlugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gsap/ScrollToPlugin\");\n\n//# sourceURL=webpack:///external_%22gsap/ScrollToPlugin%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-content-loader":
/*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-content-loader\");\n\n//# sourceURL=webpack:///external_%22react-content-loader%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/server%22?");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist\");\n\n//# sourceURL=webpack:///external_%22redux-persist%22?");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/integration/react\");\n\n//# sourceURL=webpack:///external_%22redux-persist/integration/react%22?");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/lib/storage\");\n\n//# sourceURL=webpack:///external_%22redux-persist/lib/storage%22?");

/***/ })

/******/ });