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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithHoles; });\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _defineProperty; });\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArrayLimit; });\nfunction _iterableToArrayLimit(arr, i) {\n  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) {\n    return;\n  }\n\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableRest; });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectSpread2; });\n/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    });\n    keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/objectSpread2.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _slicedToArray; });\n/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\");\n\n\n\nfunction _slicedToArray(arr, i) {\n  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/slicedToArray.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_components_Server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Server */ \"./src/components/Server.js\");\n/* harmony import */ var _src_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/routes */ \"./src/routes.js\");\nvar _jsxFileName = \"/Users/amyvarga/web/reaction/server/index.js\";\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, \"../build\")));\napp.get('/*', (req, res) => {\n  const currentRoute = _src_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"].find(route => Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"matchPath\"])(req.url, route)) || {};\n  let promise;\n\n  if (currentRoute.loadData) {\n    promise = currentRoute.loadData();\n  } else {\n    promise = Promise.resolve(null);\n  }\n\n  promise.then(data => {\n    const reactDom = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n      context: data,\n      location: req.url,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24\n      },\n      __self: undefined\n    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_components_Server__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25\n      },\n      __self: undefined\n    })));\n    const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"./build/index.html\");\n    fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, indexData) => {\n      if (err) {\n        console.error('Something went wrong:', err);\n        return res.status(500).send('Oops, better luck next time!');\n      }\n\n      return res.send(indexData.replace('<div id=\"root\"></div>', `<div id=\"root\">${reactDom}</div>`).replace('</body>', `<script>window.__ROUTE_DATA__ = ${data}</script></body>`));\n    });\n  });\n});\napp.listen(PORT, () => {\n  console.log(`😎 Server is listening on port ${PORT}`);\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/api/fetchArticle.js":
/*!*********************************!*\
  !*** ./src/api/fetchArticle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resourceType => {\n  return fetch(`http://blog.calloftheforest.com//wp-json/wp/v2/posts/1063`).then(res => res.json()).then(data => data);\n});\n\n//# sourceURL=webpack:///./src/api/fetchArticle.js?");

/***/ }),

/***/ "./src/components/Article.js":
/*!***********************************!*\
  !*** ./src/components/Article.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_fetchArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/fetchArticle */ \"./src/api/fetchArticle.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ \"html-react-parser\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/amyvarga/web/reaction/src/components/Article.js\";\n\n\n\n\nclass Article extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    if (props.staticContext && props.staticContext.content.rendered) {\n      this.state = {\n        article: props.staticContext.content.rendered\n      };\n    } else {\n      this.state = {\n        article: []\n      };\n    }\n  }\n\n  componentDidMount() {\n    setTimeout(() => {\n      if (window.__ROUTE_DATA__) {\n        this.setState({\n          article: window.__ROUTE_DATA__\n        });\n        delete window.__ROUTE_DATA__;\n      } else {\n        Object(_api_fetchArticle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(data => {\n          const article = data.content.rendered;\n          this.setState({\n            article\n          });\n        });\n      }\n    }, 0);\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37\n      },\n      __self: this\n    }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(`${this.state.article}`));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\n//# sourceURL=webpack:///./src/components/Article.js?");

/***/ }),

/***/ "./src/components/CreateReaction.js":
/*!******************************************!*\
  !*** ./src/components/CreateReaction.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _state_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/types */ \"./src/state/types.js\");\n/* harmony import */ var _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useAppContext */ \"./src/components/hooks/useAppContext.js\");\n/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/actions */ \"./src/state/actions.js\");\nvar _jsxFileName = \"/Users/amyvarga/web/reaction/src/components/CreateReaction.js\";\n\n\n\n\n\nfunction CreateReaction({\n  messageId\n}) {\n  const _useAppContext = Object(_hooks_useAppContext__WEBPACK_IMPORTED_MODULE_2__[\"useAppContext\"])(),\n        publish = _useAppContext.pubsub.publish,\n        username = _useAppContext.state.username;\n\n  const publishReaction = ({\n    type,\n    emoji\n  }) => () => {\n    publish(Object(_state_actions__WEBPACK_IMPORTED_MODULE_3__[\"createReaction\"])({\n      type,\n      emoji,\n      username,\n      messageId\n    }));\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"CreateReaction\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12\n    },\n    __self: this\n  }, _state_types__WEBPACK_IMPORTED_MODULE_1__[\"REACTION_OBJECTS\"].map(REACTION_OBJECT => {\n    const type = REACTION_OBJECT.type,\n          emoji = REACTION_OBJECT.emoji;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      key: type,\n      onClick: publishReaction({\n        type,\n        emoji\n      }),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17\n      },\n      __self: this\n    }, emoji);\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateReaction);\n\n//# sourceURL=webpack:///./src/components/CreateReaction.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _state_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/reducer */ \"./src/state/reducer.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./src/context.js\");\n/* harmony import */ var _PublishMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PublishMessage */ \"./src/components/PublishMessage.js\");\n/* harmony import */ var _Username_SetUserName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Username/SetUserName */ \"./src/components/Username/SetUserName.js\");\n/* harmony import */ var _MessageBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MessageBoard */ \"./src/components/MessageBoard.js\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pubsub */ \"./src/pubsub.js\");\n\nvar _jsxFileName = \"/Users/amyvarga/web/reaction/src/components/Home.js\";\n\n\n\n\n\n\n\nconst pubsub = new _pubsub__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n\nfunction Home() {\n  const _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(_state_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _state_reducer__WEBPACK_IMPORTED_MODULE_2__[\"initialState\"]),\n        _useReducer2 = Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useReducer, 2),\n        state = _useReducer2[0],\n        dispatch = _useReducer2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    pubsub.addListener({\n      message: messageObject => {\n        const channel = messageObject.channel,\n              message = messageObject.message;\n        dispatch(message);\n      }\n    });\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n    value: {\n      state,\n      dispatch,\n      pubsub\n    },\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h2\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25\n    },\n    __self: this\n  }, \"Reaction\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"hr\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Username_SetUserName__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"hr\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PublishMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"hr\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MessageBoard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31\n    },\n    __self: this\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/components/Home.js?");

/***/ }),

/***/ "./src/components/MessageBoard.js":
/*!****************************************!*\
  !*** ./src/components/MessageBoard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useAppContext */ \"./src/components/hooks/useAppContext.js\");\n/* harmony import */ var _CreateReaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateReaction */ \"./src/components/CreateReaction.js\");\n/* harmony import */ var _MessageReactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MessageReactions */ \"./src/components/MessageReactions.js\");\nvar _jsxFileName = \"/Users/amyvarga/web/reaction/src/components/MessageBoard.js\";\n\n\n\n\n\nfunction MessageBoard() {\n  const _useAppContext = Object(_hooks_useAppContext__WEBPACK_IMPORTED_MODULE_1__[\"useAppContext\"])(),\n        _useAppContext$state = _useAppContext.state,\n        messages = _useAppContext$state.messages,\n        reactionsMap = _useAppContext$state.reactionsMap;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9\n    },\n    __self: this\n  }, messages.map(message => {\n    const id = message.id,\n          text = message.text,\n          timestamp = message.timestamp,\n          username = message.username;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14\n      },\n      __self: this\n    }, new Date(timestamp).toLocaleString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15\n      },\n      __self: this\n    }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16\n      },\n      __self: this\n    }, \"~ \", username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateReaction__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      messageId: id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17\n      },\n      __self: this\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageReactions__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      messageReactions: reactionsMap[id],\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18\n      },\n      __self: this\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19\n      },\n      __self: this\n    }));\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBoard);\n\n//# sourceURL=webpack:///./src/components/MessageBoard.js?");

/***/ }),

/***/ "./src/components/MessageReactions.js":
/*!********************************************!*\
  !*** ./src/components/MessageReactions.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/amyvarga/web/reaction/src/components/MessageReactions.js\";\n\n\nfunction MessageReactions({\n  messageReactions\n}) {\n  if (!messageReactions) return null;\n  return messageReactions.map((reaction, index) => {\n    const id = reaction.id,\n          emoji = reaction.emoji,\n          username = reaction.username;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      key: id,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: this\n    }, username, \":\"), emoji, index !== messageReactions.length - 1 ? ', ' : null);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageReactions);\n\n//# sourceURL=webpack:///./src/components/MessageReactions.js?");

/***/ }),

/***/ "./src/components/PublishMessage.js":
/*!******************************************!*\
  !*** ./src/components/PublishMessage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useAppContext */ \"./src/components/hooks/useAppContext.js\");\n/* harmony import */ var _hooks_useValidateControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useValidateControl */ \"./src/components/hooks/useValidateControl.js\");\n/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/actions */ \"./src/state/actions.js\");\nvar _jsxFileName = \"/Users/amyvarga/web/reaction/src/components/PublishMessage.js\";\n\n\n\n\n\nfunction PublishMessage() {\n  const _useAppContext = Object(_hooks_useAppContext__WEBPACK_IMPORTED_MODULE_1__[\"useAppContext\"])(),\n        publish = _useAppContext.pubsub.publish,\n        dispatch = _useAppContext.dispatch,\n        _useAppContext$state = _useAppContext.state,\n        username = _useAppContext$state.username,\n        formMessage = _useAppContext$state.formControls.formMessage;\n\n  const message = formMessage.message,\n        character = formMessage.character;\n  const formId = 'formMessage';\n\n  const _useValidateControl = Object(_hooks_useValidateControl__WEBPACK_IMPORTED_MODULE_2__[\"useValidateControl\"])(),\n        validateControl = _useValidateControl.validateControl;\n\n  const successCallback = (text, username) => {\n    publish(Object(_state_actions__WEBPACK_IMPORTED_MODULE_3__[\"newMessage\"])(text, username));\n  };\n\n  const handleOnChange = ({\n    target\n  }) => {\n    const id = target.id,\n          value = target.value;\n    dispatch(Object(_state_actions__WEBPACK_IMPORTED_MODULE_3__[\"setFormControlValue\"])({\n      formId,\n      controlId: id,\n      value: value\n    }));\n    validateControl(id, value, formId);\n  };\n\n  const handleKeyPress = event => {\n    if (event.key === 'Enter') {\n      handleSubmit(event);\n    }\n  };\n\n  const handleSubmit = evemt => {\n    evemt.preventDefault();\n    const formControls = ['message', 'character'];\n    const isFormValid = formControls.reduce((result, control) => {\n      const _formMessage$control = formMessage[control],\n            isValid = _formMessage$control.isValid,\n            currentValue = _formMessage$control.currentValue;\n      validateControl(control, currentValue, formId);\n      return !result || !isValid ? false : true;\n    }, true);\n    if (isFormValid) successCallback(message.currentValue, username);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57\n    },\n    __self: this\n  }, \"Got something to say?\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"field\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60\n    },\n    __self: this\n  }, \"Message:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    \"data-testid\": \"message\",\n    onKeyPress: handleKeyPress,\n    value: message.currentValue,\n    onChange: handleOnChange,\n    id: \"message\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"alert-danger\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62\n    },\n    __self: this\n  }, message.error)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"field\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65\n    },\n    __self: this\n  }, \"Character:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    \"data-testid\": \"character\",\n    onKeyPress: handleKeyPress,\n    onChange: handleOnChange,\n    value: character.currentValue,\n    id: \"character\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"alert-danger\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67\n    },\n    __self: this\n  }, character.error)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleSubmit,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69\n    },\n    __self: this\n  }, \"Publish it!\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PublishMessage);\n\n//# sourceURL=webpack:///./src/components/PublishMessage.js?");

/***/ }),

/***/ "./src/components/Server.js":
/*!**********************************!*\
  !*** ./src/components/Server.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Article */ \"./src/components/Article.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ \"./src/components/Home.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\nvar _jsxFileName = \"/Users/amyvarga/web/reaction/src/components/Server.js\";\n\n\n\n\n\n\nfunction App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: this\n  }, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/article\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17\n    },\n    __self: this\n  }, \"Article\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19\n    },\n    __self: this\n  }, _routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(route => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], Object.assign({\n    key: route.path\n  }, route, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21\n    },\n    __self: this\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/components/Server.js?");

/***/ }),

/***/ "./src/components/Username/SetUserName.js":
/*!************************************************!*\
  !*** ./src/components/Username/SetUserName.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useAppContext */ \"./src/components/hooks/useAppContext.js\");\n/* harmony import */ var _hooks_useValidateControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useValidateControl */ \"./src/components/hooks/useValidateControl.js\");\n/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/actions */ \"./src/state/actions.js\");\nvar _jsxFileName = \"/Users/amyvarga/web/reaction/src/components/Username/SetUserName.js\";\n\n\n\n\n\nfunction SetUserName() {\n  const _useAppContext = Object(_hooks_useAppContext__WEBPACK_IMPORTED_MODULE_1__[\"useAppContext\"])(),\n        dispatch = _useAppContext.dispatch,\n        _useAppContext$state$ = _useAppContext.state.formControls.formUsername.username,\n        error = _useAppContext$state$.error,\n        currentValue = _useAppContext$state$.currentValue;\n\n  const formId = 'formUsername';\n\n  const _useValidateControl = Object(_hooks_useValidateControl__WEBPACK_IMPORTED_MODULE_2__[\"useValidateControl\"])(),\n        validateControl = _useValidateControl.validateControl;\n\n  const successCallback = value => {\n    dispatch(Object(_state_actions__WEBPACK_IMPORTED_MODULE_3__[\"setUsername\"])(value));\n  };\n\n  const handleOnChange = ({\n    target\n  }) => {\n    let id = target.id,\n        value = target.value;\n    value = value.trim();\n    dispatch(Object(_state_actions__WEBPACK_IMPORTED_MODULE_3__[\"setFormControlValue\"])({\n      formId,\n      controlId: id,\n      value: value\n    }));\n    validateControl(id, value, formId);\n    successCallback(value === \"\" ? 'anonymous' : value);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38\n    },\n    __self: this\n  }, \"Create username?\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"field\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"username\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40\n    },\n    __self: this\n  }, \"User:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    \"data-testid\": \"username\",\n    id: \"username\",\n    value: currentValue,\n    onChange: handleOnChange,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"data-testid\": \"error\",\n    className: \"alert-danger\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42\n    },\n    __self: this\n  }, error)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SetUserName);\n\n//# sourceURL=webpack:///./src/components/Username/SetUserName.js?");

/***/ }),

/***/ "./src/components/hooks/useAppContext.js":
/*!***********************************************!*\
  !*** ./src/components/hooks/useAppContext.js ***!
  \***********************************************/
/*! exports provided: useAppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAppContext\", function() { return useAppContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context */ \"./src/context.js\");\n\n\nconst useAppContext = () => {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n};\n\n//# sourceURL=webpack:///./src/components/hooks/useAppContext.js?");

/***/ }),

/***/ "./src/components/hooks/useValidateControl.js":
/*!****************************************************!*\
  !*** ./src/components/hooks/useValidateControl.js ***!
  \****************************************************/
/*! exports provided: useValidateControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useValidateControl\", function() { return useValidateControl; });\n/* harmony import */ var _validationSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validationSchema */ \"./src/components/validationSchema.js\");\n/* harmony import */ var _useValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useValidator */ \"./src/components/hooks/useValidator.js\");\n\n\nconst useValidateControl = () => {\n  const _useValidator = Object(_useValidator__WEBPACK_IMPORTED_MODULE_1__[\"useValidator\"])(),\n        validate = _useValidator.validate;\n\n  const validateControl = (id, value, formId) => {\n    const fieldSchema = _validationSchema__WEBPACK_IMPORTED_MODULE_0__[\"VALIDATION_SCHEMA\"].find(element => element[id]);\n    const rules = Object.keys(fieldSchema[id]);\n\n    for (let rule of rules) {\n      const isValid = validate({\n        formId,\n        controlId: id,\n        value: value,\n        rule: rule\n      });\n      if (isValid === false) return;\n    }\n  };\n\n  return {\n    validateControl\n  };\n};\n\n//# sourceURL=webpack:///./src/components/hooks/useValidateControl.js?");

/***/ }),

/***/ "./src/components/hooks/useValidator.js":
/*!**********************************************!*\
  !*** ./src/components/hooks/useValidator.js ***!
  \**********************************************/
/*! exports provided: useValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useValidator\", function() { return useValidator; });\n/* harmony import */ var _validationSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validationSchema */ \"./src/components/validationSchema.js\");\n/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/actions */ \"./src/state/actions.js\");\n/* harmony import */ var _useAppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAppContext */ \"./src/components/hooks/useAppContext.js\");\n\n\n\n\nconst findError = (controlId, rule) => {\n  const schemaObject = _validationSchema__WEBPACK_IMPORTED_MODULE_0__[\"VALIDATION_SCHEMA\"].find(element => element[controlId]);\n  return schemaObject[controlId][rule];\n};\n\nconst useValidator = () => {\n  let error = '';\n  let isValid = null;\n\n  const _useAppContext = Object(_useAppContext__WEBPACK_IMPORTED_MODULE_2__[\"useAppContext\"])(),\n        dispatch = _useAppContext.dispatch;\n\n  const validate = ({\n    formId,\n    controlId,\n    value,\n    rule\n  }) => {\n    if (rule === 'required') {\n      if (value.length === 0) {\n        error = findError(controlId, rule);\n        isValid = false;\n      }\n\n      if (value.length > 0) {\n        error = '';\n        isValid = true;\n      }\n\n      dispatch(Object(_state_actions__WEBPACK_IMPORTED_MODULE_1__[\"setFormControlErrorMessage\"])({\n        fId: formId,\n        cId: controlId,\n        error,\n        isValid\n      }));\n      if (!isValid) return false;\n    }\n\n    if (rule === 'length') {\n      if (value.length <= 6) {\n        error = findError(controlId, rule);\n        isValid = false;\n      }\n\n      if (value.length > 6) {\n        error = '';\n        isValid = true;\n      }\n\n      dispatch(Object(_state_actions__WEBPACK_IMPORTED_MODULE_1__[\"setFormControlErrorMessage\"])({\n        fId: formId,\n        cId: controlId,\n        error,\n        isValid\n      }));\n      if (!isValid) return false;\n    }\n\n    return true;\n  };\n\n  return {\n    validate\n  };\n};\n\n//# sourceURL=webpack:///./src/components/hooks/useValidator.js?");

/***/ }),

/***/ "./src/components/validationSchema.js":
/*!********************************************!*\
  !*** ./src/components/validationSchema.js ***!
  \********************************************/
/*! exports provided: VALIDATION_SCHEMA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VALIDATION_SCHEMA\", function() { return VALIDATION_SCHEMA; });\nconst VALIDATION_SCHEMA = [{\n  message: {\n    required: 'Please add a message',\n    length: 'Your message must be great than 6 characters'\n  }\n}, {\n  character: {\n    required: \"Please add a character\"\n  }\n}, {\n  username: {\n    required: \"Please add a username\"\n  }\n}];\n\n//# sourceURL=webpack:///./src/components/validationSchema.js?");

/***/ }),

/***/ "./src/context.js":
/*!************************!*\
  !*** ./src/context.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])());\n\n//# sourceURL=webpack:///./src/context.js?");

/***/ }),

/***/ "./src/pubnub.config.json":
/*!********************************!*\
  !*** ./src/pubnub.config.json ***!
  \********************************/
/*! exports provided: publishKey, subscribeKey, secretKey, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"publishKey\\\":\\\"pub-c-b9b68118-4a14-47f3-ba08-4edd9860cd0f\\\",\\\"subscribeKey\\\":\\\"sub-c-32e6d8c4-21cd-11ea-8237-e6847142b66b\\\",\\\"secretKey\\\":\\\"sec-c-NGY1MTc2NDEtMTgwMC00ZmU2LWEzM2QtN2ZhNzVlNzRkNmNj\\\"}\");\n\n//# sourceURL=webpack:///./src/pubnub.config.json?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pubnub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubnub */ \"pubnub\");\n/* harmony import */ var pubnub__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubnub__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pubnub_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubnub.config.json */ \"./src/pubnub.config.json\");\nvar _pubnub_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pubnub.config.json */ \"./src/pubnub.config.json\", 1);\n\n\n\nfunction PubSub() {\n  const pubnub = new pubnub__WEBPACK_IMPORTED_MODULE_0___default.a(_pubnub_config_json__WEBPACK_IMPORTED_MODULE_1__);\n  const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';\n  pubnub.subscribe({\n    channels: [MESSAGE_CHANNEL]\n  });\n\n  this.addListener = listenerConfig => {\n    pubnub.addListener(listenerConfig);\n  };\n\n  this.publish = message => {\n    console.log('publish message', message);\n    pubnub.publish({\n      message,\n      channel: MESSAGE_CHANNEL\n    });\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PubSub);\n\n//# sourceURL=webpack:///./src/pubsub.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/components/Article */ \"./src/components/Article.js\");\n/* harmony import */ var _src_components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Home */ \"./src/components/Home.js\");\n/* harmony import */ var _api_fetchArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/fetchArticle */ \"./src/api/fetchArticle.js\");\n\n\n\nconst Routes = [{\n  path: \"/\",\n  component: _src_components_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  exact: true\n}, {\n  path: \"/article\",\n  component: _src_components_Article__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true,\n  loadData: () => Object(_api_fetchArticle__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routes);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/state/actions.js":
/*!******************************!*\
  !*** ./src/state/actions.js ***!
  \******************************/
/*! exports provided: newMessage, setUsername, setErrorMessages, createReaction, setFormControlValue, setFormControlErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newMessage\", function() { return newMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUsername\", function() { return setUsername; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setErrorMessages\", function() { return setErrorMessages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createReaction\", function() { return createReaction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFormControlValue\", function() { return setFormControlValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFormControlErrorMessage\", function() { return setFormControlErrorMessage; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/state/types.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst newMessage = (text, username) => ({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"NEW_MESSAGE\"],\n  item: {\n    id: uuid__WEBPACK_IMPORTED_MODULE_1___default()(),\n    text,\n    timestamp: Date.now(),\n    username\n  }\n});\nconst setUsername = username => ({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SET_USERNAME\"],\n  username\n});\nconst setErrorMessages = ({\n  errorId,\n  errorMessage\n}) => ({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SET_ERROR_MESSAGES\"],\n  item: {\n    errorId,\n    errorMessage\n  }\n});\nconst createReaction = ({\n  type,\n  emoji,\n  username,\n  messageId\n}) => ({\n  type,\n  item: {\n    id: uuid__WEBPACK_IMPORTED_MODULE_1___default()(),\n    timestamp: Date.now(),\n    emoji,\n    username,\n    messageId\n  }\n});\nconst setFormControlValue = ({\n  formId,\n  controlId,\n  value\n}) => ({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SET_FORM_CONTROL_VALUE\"],\n  item: {\n    formId: formId,\n    controlId: controlId,\n    value: value\n  }\n});\nconst setFormControlErrorMessage = ({\n  fId,\n  cId,\n  error,\n  isValid\n}) => ({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SET_FORM_CONTROL_ERROR_MESSAGE\"],\n  item: {\n    fId: fId,\n    cId: cId,\n    error: error,\n    isValid: isValid\n  }\n});\n\n//# sourceURL=webpack:///./src/state/actions.js?");

/***/ }),

/***/ "./src/state/reducer.js":
/*!******************************!*\
  !*** ./src/state/reducer.js ***!
  \******************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony import */ var _Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/state/types.js\");\n\n\nconst initialState = {\n  messages: [],\n  username: 'anonymous',\n  reactionsMap: {},\n  formControls: {\n    formMessage: {\n      message: {\n        error: '',\n        currentValue: '',\n        isValid: null\n      },\n      character: {\n        error: '',\n        currentValue: '',\n        isValid: null\n      }\n    },\n    formUsername: {\n      username: {\n        error: '',\n        currentValue: '',\n        isValid: null\n      }\n    }\n  }\n};\nconst REACTION_TYPES = _types__WEBPACK_IMPORTED_MODULE_1__[\"REACTION_OBJECTS\"].map(reaction => reaction.type);\n\nconst reducer = (state, action) => {\n  if (REACTION_TYPES.includes(action.type)) {\n    let reactionsMap;\n    const messageId = action.item.messageId;\n    const messageReactions = state.reactionsMap[messageId];\n\n    if (messageReactions) {\n      reactionsMap = Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.reactionsMap, {\n        [messageId]: [...messageReactions, action.item]\n      });\n    } else {\n      reactionsMap = Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.reactionsMap, {\n        [messageId]: [action.item]\n      });\n    }\n\n    return Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n      reactionsMap\n    });\n  }\n\n  switch (action.type) {\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"NEW_MESSAGE\"]:\n      return Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        messages: [...state.messages, action.item]\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"SET_USERNAME\"]:\n      return Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        username: action.username\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"SET_FORM_CONTROL_VALUE\"]:\n      let _action$item = action.item,\n          formId = _action$item.formId,\n          controlId = _action$item.controlId,\n          value = _action$item.value;\n      return Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        formControls: Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.formControls, {\n          [formId]: Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.formControls[formId], {\n            [controlId]: Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.formControls[formId][controlId], {\n              currentValue: value\n            })\n          })\n        })\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"SET_FORM_CONTROL_ERROR_MESSAGE\"]:\n      let _action$item2 = action.item,\n          fId = _action$item2.fId,\n          cId = _action$item2.cId,\n          error = _action$item2.error,\n          isValid = _action$item2.isValid;\n      return Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n        formControls: Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.formControls, {\n          [fId]: Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.formControls[fId], {\n            [cId]: Object(_Users_amyvarga_web_reaction_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.formControls[fId][cId], {\n              error: error,\n              isValid: isValid\n            })\n          })\n        })\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./src/state/reducer.js?");

/***/ }),

/***/ "./src/state/types.js":
/*!****************************!*\
  !*** ./src/state/types.js ***!
  \****************************/
/*! exports provided: NEW_MESSAGE, SET_USERNAME, SET_ERROR_MESSAGES, SET_FORM_CONTROL_VALUE, SET_FORM_CONTROL_ERROR_MESSAGE, REACTION_OBJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEW_MESSAGE\", function() { return NEW_MESSAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_USERNAME\", function() { return SET_USERNAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_ERROR_MESSAGES\", function() { return SET_ERROR_MESSAGES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_FORM_CONTROL_VALUE\", function() { return SET_FORM_CONTROL_VALUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_FORM_CONTROL_ERROR_MESSAGE\", function() { return SET_FORM_CONTROL_ERROR_MESSAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REACTION_OBJECTS\", function() { return REACTION_OBJECTS; });\nconst NEW_MESSAGE = 'NEW_MESSAGE';\nconst SET_USERNAME = 'SET_USERNAME';\nconst SET_ERROR_MESSAGES = 'SET_ERROR_MESSAGES';\nconst SET_FORM_CONTROL_VALUE = 'SET_FORM_CONTROL_VALUE';\nconst SET_FORM_CONTROL_ERROR_MESSAGE = 'SET_FORM_CONTROL_ERROR_MESSAGE';\nconst REACTION_OBJECTS = [{\n  type: 'REACTION_LOVE',\n  emoji: '❤️'\n}, {\n  type: 'REACTION_LIKE',\n  emoji: '👍'\n}, {\n  type: 'REACTION_DISLIKE',\n  emoji: '👎'\n}, {\n  type: 'REACTION_LAUGH',\n  emoji: '😂'\n}];\n\n//# sourceURL=webpack:///./src/state/types.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-react-parser\");\n\n//# sourceURL=webpack:///external_%22html-react-parser%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pubnub":
/*!*************************!*\
  !*** external "pubnub" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pubnub\");\n\n//# sourceURL=webpack:///external_%22pubnub%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });