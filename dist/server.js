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
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _middleware = __webpack_require__(/*! ./src/middleware */ \"./src/middleware/index.js\");\n\nvar _middleware2 = _interopRequireDefault(_middleware);\n\nvar _v = __webpack_require__(/*! ./src/v1 */ \"./src/v1/index.js\");\n\nvar _v2 = _interopRequireDefault(_v);\n\nvar _config = __webpack_require__(/*! ./config/config.json */ \"./config/config.json\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar env = \"development\" || false;\nvar conf = _config2.default[env];\n\nvar app = (0, _express2.default)();\nvar db = {}; // TODO\n\napp.get('/', function (req, res) {\n  res.send({ message: 'hello world' });\n});\n\n// internal middleware\napp.use((0, _middleware2.default)({ config: conf, db: db }));\n\napp.use('/api/v1', (0, _v2.default)({ config: conf, db: db }));\n\nvar PORT = conf.port || 3389;\n\napp.listen(PORT);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/*! exports provided: development, test, production, default */
/***/ (function(module) {

eval("module.exports = {\"development\":{\"username\":\"root\",\"password\":null,\"database\":\"sample_development\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"},\"test\":{\"username\":\"root\",\"password\":null,\"database\":\"sample_test\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"},\"production\":{\"username\":\"root\",\"password\":null,\"database\":\"sample_production\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"}};\n\n//# sourceURL=webpack:///./config/config.json?");

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar models = {}; // ref: https://github.com/sequelize/sequelize/issues/4974#issuecomment-271359179\n\n\nfunction getModels(config) {\n  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n  if (Object.keys(models).length && !force) {\n    return models;\n  }\n\n  var sequelize = new _sequelize2.default(config.database, config.username, config.password, config);\n\n  var modules = [__webpack_require__(/*! ./user.js */ \"./models/user.js\"), __webpack_require__(/*! ./video.js */ \"./models/video.js\"), __webpack_require__(/*! ./users_videos.js */ \"./models/users_videos.js\")];\n\n  // Initialize models\n  modules.forEach(function (module) {\n    var model = module(sequelize, _sequelize2.default, config);\n    models[model.name] = model;\n  });\n\n  // Apply associations\n  Object.keys(models).forEach(function (key) {\n    if ('associate' in models[key]) {\n      models[key].associate(models);\n    }\n  });\n\n  models.sequelize = sequelize;\n  models.Sequelize = _sequelize2.default;\n\n  return models;\n}\n\nmodule.exports = {\n  getModels: getModels\n};\n\n//# sourceURL=webpack:///./models/index.js?");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (sequelize, DataTypes) {\n  var user = sequelize.define('user', {\n    name: DataTypes.STRING,\n    child_birthday: DataTypes.STRING,\n    session_code: { type: DataTypes.STRING, unique: true }\n  }, {\n    underscored: true\n  });\n  user.associate = function (models) {\n    // associations can be defined here\n    models.user.belongsToMany(user, { as: 'favorites', through: 'users_videos', foreignKey: 'user_id' });\n  };\n  return user;\n};\n\n//# sourceURL=webpack:///./models/user.js?");

/***/ }),

/***/ "./models/users_videos.js":
/*!********************************!*\
  !*** ./models/users_videos.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (sequelize, DataTypes) {\n  var users_videos = sequelize.define('users_videos', {\n    video_id: DataTypes.INTEGER,\n    user_id: DataTypes.INTEGER\n  }, {\n    underscored: true\n  });\n  users_videos.associate = function (models) {\n    // associations can be defined here\n  };\n  return users_videos;\n};\n\n//# sourceURL=webpack:///./models/users_videos.js?");

/***/ }),

/***/ "./models/video.js":
/*!*************************!*\
  !*** ./models/video.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (sequelize, DataTypes) {\n  var video = sequelize.define('video', {\n    title: DataTypes.STRING,\n    tvid: DataTypes.STRING\n  }, {\n    underscored: true\n  });\n  video.associate = function (models) {\n    // associations can be defined here\n    models.video.belongsToMany(video, { as: 'users', through: 'users_videos', foreignKey: 'video_id' });\n  };\n  return video;\n};\n\n//# sourceURL=webpack:///./models/video.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _users = __webpack_require__(/*! ./users */ \"./src/v1/users/index.js\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nvar _videos = __webpack_require__(/*! ./videos */ \"./src/v1/videos/index.js\");\n\nvar _videos2 = _interopRequireDefault(_videos);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n\tvar config = _ref.config,\n\t    db = _ref.db;\n\n\tvar api = (0, _express.Router)();\n\n\tapi.use('/users', (0, _users2.default)({ config: config, db: db }));\n\n\t// mount the videos resource\n\tapi.use('/videos', (0, _videos2.default)({ config: config, db: db }));\n\n\t// perhaps expose some API metadata at the root\n\tapi.get('/', function (req, res) {\n\t\tres.json({ test: 'aaa' });\n\t});\n\n\treturn api;\n};\n\n//# sourceURL=webpack:///./src/v1/index.js?");

/***/ }),

/***/ "./src/v1/users/index.js":
/*!*******************************!*\
  !*** ./src/v1/users/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _models = __webpack_require__(/*! ../../../models */ \"./models/index.js\");\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nexports.default = function (_ref) {\n  var config = _ref.config,\n      db = _ref.db;\n\n  var api = (0, _express.Router)();\n\n  api.get('/', function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n      var users;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              users = (0, _models.getModels)(config).user.findAll({});\n\n              res.json(users);\n\n            case 2:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n\n  api.get('/:userId', function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n      var userId, u;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              userId = req.params.userId;\n              _context2.next = 3;\n              return (0, _models.getModels)(config).user.find({ where: { id: userId } });\n\n            case 3:\n              u = _context2.sent;\n\n              res.json(u);\n\n            case 5:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined);\n    }));\n\n    return function (_x3, _x4) {\n      return _ref3.apply(this, arguments);\n    };\n  }());\n\n  api.post('/', function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n      var newUser;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return (0, _models.getModels)(config).user.findOrCreate({ where: { name: 'Hanako', child_birthday: '20171202', session_code: '002ePUOe2mwesH0e4LOe2yYTOe2ePUOx' } });\n\n            case 2:\n              newUser = _context3.sent;\n\n              res.json(newUser);\n\n            case 4:\n            case 'end':\n              return _context3.stop();\n          }\n        }\n      }, _callee3, undefined);\n    }));\n\n    return function (_x5, _x6) {\n      return _ref4.apply(this, arguments);\n    };\n  }());\n\n  api.get('/destroy/:user_id', function () {\n    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n      var userId, userDestroyCount, favDestroyCount, message;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              userId = req.params.user_id;\n\n              // TODO: These executions should be in one transaction.\n\n              _context4.next = 3;\n              return (0, _models.getModels)(config).user.destroy({ where: { id: userId } });\n\n            case 3:\n              userDestroyCount = _context4.sent;\n              _context4.next = 6;\n              return (0, _models.getModels)(config).users_videos.destroy({ where: { user_id: userId } });\n\n            case 6:\n              favDestroyCount = _context4.sent;\n              message = userDestroyCount > 0 ? 'successfully deleted' : 'failed to delete the user';\n\n              res.json({ message: message });\n\n            case 9:\n            case 'end':\n              return _context4.stop();\n          }\n        }\n      }, _callee4, undefined);\n    }));\n\n    return function (_x7, _x8) {\n      return _ref5.apply(this, arguments);\n    };\n  }());\n\n  api.get('/:userId/favorites', function () {\n    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n      var userId, fav, videos;\n      return regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              userId = req.params.userId;\n              _context5.next = 3;\n              return (0, _models.getModels)(config).users_videos.findAll({ where: { user_id: userId } });\n\n            case 3:\n              fav = _context5.sent;\n              _context5.next = 6;\n              return (0, _models.getModels)(config).video.findAll({ where: _defineProperty({}, _sequelize2.default.Op.or, [{ id: fav.map(function (f) {\n                    return f.video_id;\n                  }) }]) });\n\n            case 6:\n              videos = _context5.sent;\n\n              res.json(videos);\n\n            case 8:\n            case 'end':\n              return _context5.stop();\n          }\n        }\n      }, _callee5, undefined);\n    }));\n\n    return function (_x9, _x10) {\n      return _ref6.apply(this, arguments);\n    };\n  }());\n\n  api.post('/:userId/favorites/:videoId', function () {\n    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {\n      var userId, videoId, fav;\n      return regeneratorRuntime.wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              userId = req.params.userId;\n              videoId = req.params.videoId;\n              _context6.next = 4;\n              return (0, _models.getModels)(config).users_videos.findOrCreate({ where: { user_id: userId, video_id: videoId } });\n\n            case 4:\n              fav = _context6.sent;\n\n              res.json(fav);\n\n            case 6:\n            case 'end':\n              return _context6.stop();\n          }\n        }\n      }, _callee6, undefined);\n    }));\n\n    return function (_x11, _x12) {\n      return _ref7.apply(this, arguments);\n    };\n  }());\n\n  api.post('/:userId/favorites/:videoId/delete', function () {\n    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {\n      var userId, videoId, favDestroyCount, message;\n      return regeneratorRuntime.wrap(function _callee7$(_context7) {\n        while (1) {\n          switch (_context7.prev = _context7.next) {\n            case 0:\n              userId = req.params.userId;\n              videoId = req.params.videoId;\n              _context7.next = 4;\n              return (0, _models.getModels)(config).users_videos.destroy({ where: { user_id: userId, video_id: videoId } });\n\n            case 4:\n              favDestroyCount = _context7.sent;\n              message = favDestroyCount > 0 ? 'successfully remove favorite' : 'failed to remove favorite';\n\n              res.json({ message: message });\n\n            case 7:\n            case 'end':\n              return _context7.stop();\n          }\n        }\n      }, _callee7, undefined);\n    }));\n\n    return function (_x13, _x14) {\n      return _ref8.apply(this, arguments);\n    };\n  }());\n\n  return api;\n};\n\n//# sourceURL=webpack:///./src/v1/users/index.js?");

/***/ }),

/***/ "./src/v1/videos/index.js":
/*!********************************!*\
  !*** ./src/v1/videos/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _models = __webpack_require__(/*! ../../../models */ \"./models/index.js\");\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nexports.default = function (_ref) {\n  var config = _ref.config,\n      db = _ref.db;\n\n  var api = (0, _express.Router)();\n\n  api.get('/', function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n      var videos;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0, _models.getModels)(config).video.findAll({});\n\n            case 2:\n              videos = _context.sent;\n\n              res.json({ videos: videos });\n              res.json({\n                // videos: [\n                //   {\n                //     id: 'tencent_videos',\n                //     name: '腾讯视频',\n                //     open: false,\n                //     videos: [\n                //       { id: 'l0025mppim4', title: 'Chinese TED' },\n                //       { id: 'h0026v0vvl6', title: 'Chinese idle' },\n                //     ],\n                //   },\n                //   {\n                //     id: 'youku',\n                //     name: '优酷',\n                //     open: false,\n                //     videos: [\n                //       { id: 'l0025mppim4', title: 'Chinese TED' },\n                //       { id: 'h0026v0vvl6', title: 'Chinese idle' },\n                //     ],\n                //   },\n                // ]\n              });\n\n            case 5:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n\n  api.post('/', function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n      var newVideo;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return (0, _models.getModels)(config).video.create({ title: 'Chinese idle', tvid: 'h0026v0vvl6' });\n\n            case 2:\n              newVideo = _context2.sent;\n\n              res.json(newVideo);\n\n            case 4:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined);\n    }));\n\n    return function (_x3, _x4) {\n      return _ref3.apply(this, arguments);\n    };\n  }());\n\n  return api;\n};\n\n//# sourceURL=webpack:///./src/v1/videos/index.js?");

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

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });