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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _middleware = __webpack_require__(/*! ./src/middleware */ \"./src/middleware/index.js\");\n\nvar _middleware2 = _interopRequireDefault(_middleware);\n\nvar _v = __webpack_require__(/*! ./src/v1 */ \"./src/v1/index.js\");\n\nvar _v2 = _interopRequireDefault(_v);\n\nvar _config = __webpack_require__(/*! ./config/config.json */ \"./config/config.json\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar db = {}; // TODO\n\napp.get('/', function (req, res) {\n  res.send({ message: 'hello world' });\n});\n\n// internal middleware\napp.use((0, _middleware2.default)({ config: _config2.default, db: db }));\n\napp.use('/api/v1', (0, _v2.default)({ config: _config2.default, db: db }));\n\napp.listen(3389);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module) {

eval("module.exports = {};\n\n//# sourceURL=webpack:///./config/config.json?");

/***/ }),

/***/ "./src/middleware/index.js":
/*!*********************************!*\
  !*** ./src/middleware/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nexports.default = function (_ref) {\n\tvar config = _ref.config,\n\t    db = _ref.db;\n\n\tvar routes = (0, _express.Router)();\n\n\t// add middleware here\n\n\treturn routes;\n};\n\n//# sourceURL=webpack:///./src/middleware/index.js?");

/***/ }),

/***/ "./src/v1/index.js":
/*!*************************!*\
  !*** ./src/v1/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _videos = __webpack_require__(/*! ./videos */ \"./src/v1/videos/index.js\");\n\nvar _videos2 = _interopRequireDefault(_videos);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n\tvar config = _ref.config,\n\t    db = _ref.db;\n\n\tvar api = (0, _express.Router)();\n\n\t// mount the videos resource\n\tapi.use('/videos', (0, _videos2.default)({ config: config, db: db }));\n\n\t// perhaps expose some API metadata at the root\n\tapi.get('/', function (req, res) {\n\t\tres.json({ test: 'aaa' });\n\t});\n\n\treturn api;\n};\n\n//# sourceURL=webpack:///./src/v1/index.js?");

/***/ }),

/***/ "./src/v1/videos/index.js":
/*!********************************!*\
  !*** ./src/v1/videos/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nexports.default = function (_ref) {\n  var config = _ref.config,\n      db = _ref.db;\n\n  var api = (0, _express.Router)();\n\n  api.get('/', function (req, res) {\n    res.json({\n      videos: [{\n        id: 'tencent_videos',\n        name: '腾讯视频',\n        open: false,\n        videos: [{ id: 'l0025mppim4', title: 'Chinese TED' }, { id: 'h0026v0vvl6', title: 'Chinese idle' }]\n      }, {\n        id: 'youku',\n        name: '优酷',\n        open: false,\n        videos: [{ id: 'l0025mppim4', title: 'Chinese TED' }, { id: 'h0026v0vvl6', title: 'Chinese idle' }]\n      }]\n    });\n  });\n\n  return api;\n};\n\n//# sourceURL=webpack:///./src/v1/videos/index.js?");

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi babel-regenerator-runtime ./app.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-regenerator-runtime */\"babel-regenerator-runtime\");\nmodule.exports = __webpack_require__(/*! ./app.js */\"./app.js\");\n\n\n//# sourceURL=webpack:///multi_babel-regenerator-runtime_./app.js?");

/***/ }),

/***/ "babel-regenerator-runtime":
/*!********************************************!*\
  !*** external "babel-regenerator-runtime" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-regenerator-runtime\");\n\n//# sourceURL=webpack:///external_%22babel-regenerator-runtime%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ })

/******/ });