/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Ubuntu', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',\\n    Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\\n    'Segoe UI Symbol';\\n}\\n\\nhtml,\\nbody {\\n  width: 100%;\\n  height: 100%;\\n  overflow-x: hidden;\\n}\\n\\n.wrapper {\\n  background-color: rgb(155, 202, 100);\\n  width: 100vw;\\n  height: 64px;\\n  display: grid;\\n  justify-content: end;\\n  grid-template-columns: repeat(auto-fit, minmax(0, auto));\\n}\\n\\n.dropDownButton {\\n  height: 64px;\\n  width: 128px;\\n  background-color: rgb(129, 170, 82);\\n  border: none;\\n  font-size: 24px;\\n  letter-spacing: 2px;\\n}\\n\\n.dropDownButton:hover {\\n  background-color: rgb(115, 153, 72);\\n}\\n\\n.animated {\\n  opacity: 0;\\n  visibility: hidden;\\n}\\n\\n.dropDownButton:hover + .animated {\\n  animation: dropdown 0.2s ease-in forwards;\\n}\\n\\n.dropDownMenu {\\n  display: grid;\\n  letter-spacing: 1px;\\n  list-style: none;\\n  background-color: rgb(157, 206, 101);\\n  position: absolute;\\n  width: 128px;\\n}\\n\\n.dropDownMenu > a > li {\\n  padding: 8px;\\n}\\n\\n.dropDownMenu > a > li:hover {\\n  background-color: rgb(115, 153, 72);\\n}\\n\\na {\\n  text-decoration: none;\\n  color: black;\\n}\\n\\n@keyframes dropdown {\\n  0% {\\n    transform: translateY(-50%) scale(1, 0);\\n  }\\n  100% {\\n    transform: translateY(0) scale(1, 1);\\n    opacity: 1;\\n    visibility: visible;\\n  }\\n}\\n\\n.moreTab {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(126px, auto));\\n  width: 100vw;\\n  height: 64px;\\n  align-items: center;\\n  justify-items: center;\\n}\\n\\n.moreTab > a > li {\\n  list-style: none;\\n}\\n\\n.moreTab > a {\\n  border-right: 2px solid rgb(174, 228, 112);\\n  height: 100%;\\n  width: 100%;\\n  display: grid;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.moreTab > a:hover {\\n  background-color: rgb(129, 170, 82);\\n}\\n\\n.moreTab > div,\\n.moreTab > div > .dropDownButton,\\n.moreTab > div > .dropDownButton + .dropDownMenu {\\n  width: calc(100% - 1px);\\n}\\n\\n.carousel {\\n  height: calc(100% - 128px);\\n  background-color: rgb(212, 201, 101);\\n  display: grid;\\n  justify-content: center;\\n  align-items: center;\\n  align-content: center;\\n}\\n\\n.imageDisplay {\\n  width: 800px;\\n  height: 450px;\\n  background-color: gray;\\n  overflow: hidden;\\n  display: flex;\\n  position: relative;\\n}\\n\\n.imageDisplay > div:first-child {\\n  display: flex;\\n  position: absolute;\\n  transition: cubic-bezier(0.5, 0, 0, 1) 1s;\\n}\\n\\n.slideContainer {\\n  z-index: 999;\\n  display: flex;\\n  position: initial;\\n  height: 450px;\\n  width: 800px;\\n}\\n\\n.left,\\n.right {\\n  width: 50%;\\n  height: 100%;\\n}\\n\\n.slidePosition {\\n  background-color: black;\\n  width: 800px;\\n  height: 24px;\\n  display: grid;\\n  justify-content: center;\\n  align-items: center;\\n  grid-template-columns: repeat(auto-fit, minmax(16px, auto));\\n  gap: 8px;\\n}\\n\\n.slidePosition > button {\\n  height: 16px;\\n  width: 16px;\\n  border: none;\\n  border-radius: 8px;\\n}\\n\\n.selected {\\n  background-color: #9db9ff;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://linting/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://linting/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://linting/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://linting/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://linting/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://linting/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://linting/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://linting/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://linting/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://linting/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/carousel.change-slides.js":
/*!******************************************!*\
  !*** ./src/js/carousel.change-slides.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable comma-dangle */\nfunction carousel() {\n  const imageArray = [\n    'https://images.alphacoders.com/943/thumb-1920-943148.jpg',\n    'https://i.pinimg.com/originals/86/ff/b8/86ffb87572d657f335cd7cd828c70de3.jpg',\n    'https://wallpaper.dog/large/20459082.jpg',\n    'https://images2.alphacoders.com/109/1098024.png',\n  ];\n\n  const imageContainer = document.querySelector('.imageDisplay');\n\n  const startingPosition = 800;\n\n  function createImage(url) {\n    const img = document.createElement('img');\n    img.setAttribute('style', 'width: 800px; height: 450px;');\n    img.src = url;\n    return img;\n  }\n\n  function displayImages(array) {\n    const imageElements = array;\n    const div = document.createElement('div');\n    imageElements.forEach((element) => {\n      div.appendChild(element);\n    });\n    div.setAttribute('style', `right:-${startingPosition}px `);\n    const firstChild = imageContainer.firstElementChild;\n    if (firstChild && !firstChild.classList.contains('slideContainer')) {\n      imageContainer.firstElementChild.remove();\n    }\n    imageContainer.prepend(div);\n  }\n\n  const arrayOfImageElements = imageArray.map(\n    (item) =>\n      // eslint-disable-next-line implicit-arrow-linebreak\n      createImage(item)\n    // eslint-disable-next-line function-paren-newline\n  );\n\n  let position = 0;\n\n  function getElements(previous, current, next, array) {\n    const previousIndex = previous;\n    const currentIndex = current;\n    const nextIndex = next;\n    const arrayOfIndex = [previousIndex, currentIndex, nextIndex];\n    const arrayOfElements = array;\n    const newArray = arrayOfIndex.map((item) => {\n      let value = item;\n      if (value < 0) {\n        value = arrayOfElements.length + value;\n      }\n      if (value > arrayOfElements.length - 1) {\n        position = -1;\n        value = 0;\n      }\n      if (-position >= arrayOfElements.length - 1) {\n        position = 1;\n        value = 0;\n      }\n      return value;\n    });\n\n    return [\n      arrayOfElements[newArray[0]],\n      arrayOfElements[newArray[1]],\n      arrayOfElements[newArray[2]],\n    ];\n  }\n\n  function displayThreeImages(arrayOfImageElement) {\n    const imageElements = arrayOfImageElement;\n    const displayArray = getElements(\n      position - 1,\n      position,\n      position + 1,\n      imageElements\n    );\n    displayImages(displayArray);\n  }\n\n  displayThreeImages(arrayOfImageElements);\n\n  const slidePosition = document.querySelector('.slidePosition');\n\n  imageArray.forEach((item, pos) => {\n    const button = document.createElement('button');\n    button.classList.add(pos);\n    if (pos === position) {\n      button.classList.add('selected');\n    }\n    slidePosition.appendChild(button);\n  });\n\n  const posButtons = document.querySelectorAll('.slidePosition > button');\n\n  let clicked = false;\n\n  const leftButton = document.querySelector('.left');\n  const rightButton = document.querySelector('.right');\n\n  rightButton.onclick = () => {\n    if (clicked) return;\n    const currentSelected = document.querySelector('.selected').classList[0];\n    let nextSelected = Number(currentSelected) + 1;\n    if (nextSelected >= imageArray.length) {\n      nextSelected = 0;\n    }\n    posButtons.forEach((element) => {\n      const button = element;\n      button.classList.remove('selected');\n      if (button.classList.contains(nextSelected)) {\n        button.classList.toggle('selected');\n      }\n    });\n    clicked = true;\n    const images = imageContainer.firstElementChild;\n    images.style.right = 0;\n    setTimeout(() => {\n      position += 1;\n      displayThreeImages(arrayOfImageElements);\n      clicked = false;\n    }, 1000);\n  };\n\n  leftButton.onclick = () => {\n    if (clicked) return;\n    const currentSelected = document.querySelector('.selected').classList[0];\n    let nextSelected = Number(currentSelected) - 1;\n    if (nextSelected < 0) {\n      nextSelected = imageArray.length - 2 - nextSelected;\n    }\n    posButtons.forEach((element) => {\n      const button = element;\n      button.classList.remove('selected');\n      if (button.classList.contains(nextSelected)) {\n        button.classList.toggle('selected');\n      }\n    });\n    clicked = true;\n    const images = imageContainer.firstElementChild;\n    images.style.right = `-${1600}px`;\n    setTimeout(() => {\n      position -= 1;\n      displayThreeImages(arrayOfImageElements);\n      clicked = false;\n    }, 1000);\n  };\n\n  slidePosition.onclick = (event) => {\n    if (clicked) return;\n    const button = event.target.closest('button');\n    if (!button || button === null) return;\n    clicked = true;\n    const selectedPosition = Number(button.classList[0]);\n    displayImages(arrayOfImageElements);\n    // eslint-disable-next-line operator-linebreak\n    let currentPosition =\n      800 - arrayOfImageElements.length * 800 + 800 * position;\n    if (currentPosition === -arrayOfImageElements.length * 800) {\n      currentPosition = 0;\n    }\n    // eslint-disable-next-line operator-linebreak\n    const newPosition =\n      800 - arrayOfImageElements.length * 800 + 800 * selectedPosition;\n    position = selectedPosition;\n    posButtons.forEach((element) => {\n      element.classList.remove('selected');\n      if (element.classList.contains(position)) {\n        element.classList.toggle('selected');\n      }\n    });\n    const div = imageContainer.firstElementChild;\n    div.style.right = `${currentPosition}px`;\n    setTimeout(() => {\n      div.style.right = `${newPosition}px`;\n    });\n    setTimeout(() => {\n      displayThreeImages(arrayOfImageElements);\n      clicked = false;\n    }, 1000);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n\n//# sourceURL=webpack://linting/./src/js/carousel.change-slides.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _carousel_change_slides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.change-slides */ \"./src/js/carousel.change-slides.js\");\n/* harmony import */ var _navigation_drop_down_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.drop-down-menu */ \"./src/js/navigation.drop-down-menu.js\");\n/* harmony import */ var _navigation_more_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.more-tab */ \"./src/js/navigation.more-tab.js\");\n/* eslint-disable comma-dangle */\n\n\n\n\n\n(0,_navigation_drop_down_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n(0,_navigation_more_tab__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n(0,_carousel_change_slides__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://linting/./src/js/index.js?");

/***/ }),

/***/ "./src/js/navigation.drop-down-menu.js":
/*!*********************************************!*\
  !*** ./src/js/navigation.drop-down-menu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction dropDownMenu() {\n  const buttons = document.querySelectorAll('.dropDownButton');\n\n  buttons.forEach((element) => {\n    const button = element;\n    button.onmouseover = () => {\n      let onAnimated = false;\n      const animated = button.nextElementSibling;\n      animated.onanimationend = () => {\n        animated.classList.toggle('animated');\n      };\n      button.onmouseleave = () => {\n        onAnimated = false;\n        setTimeout(() => {\n          if (!animated.classList.contains('animated') && !onAnimated) {\n            animated.classList.toggle('animated');\n          }\n        }, '200');\n      };\n      animated.onmouseover = () => {\n        onAnimated = true;\n        animated.onmouseleave = () => {\n          animated.classList.toggle('animated');\n        };\n      };\n    };\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropDownMenu);\n\n\n//# sourceURL=webpack://linting/./src/js/navigation.drop-down-menu.js?");

/***/ }),

/***/ "./src/js/navigation.more-tab.js":
/*!***************************************!*\
  !*** ./src/js/navigation.more-tab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeLink(text = 'ERROR', appendTo = '') {\n  const a = document.createElement('a');\n  const li = document.createElement('li');\n  li.textContent = text;\n  a.appendChild(li);\n  a.setAttribute('href', '#');\n  appendTo.insertBefore(a, appendTo.firstElementChild);\n}\n\nfunction displayItems(toDisplay, tabElement, tabDropDown) {\n  const links = toDisplay;\n  const moreTabElement = tabElement;\n  const moreTabDropDown = tabDropDown;\n  const numberOfChildren = Math.floor(window.innerWidth / 128);\n  if (window.innerWidth > (numberOfChildren + 1) * 128) return;\n  const moveChildren = links.length - (numberOfChildren - 2);\n  while (moreTabElement.childElementCount > 1) {\n    moreTabElement.firstChild.remove();\n  }\n  while (moreTabDropDown.childElementCount > 1) {\n    moreTabDropDown.firstChild.remove();\n  }\n  links.forEach((value, index) => {\n    if (index >= moveChildren) {\n      makeLink(value, moreTabElement);\n    }\n    if (index < moveChildren) {\n      makeLink(value, moreTabDropDown);\n    }\n  });\n}\n\nfunction moreTab() {\n  const moreTabElement = document.querySelector('.moreTab');\n  const moreTabDropDown = document.querySelector(\n    // eslint-disable-next-line comma-dangle\n    '.moreTab > div > .dropDownMenu'\n  );\n\n  const links = [\n    'NEWS',\n    'VIDEOS',\n    'PHOTOS',\n    'CHAT',\n    'STATISTICS',\n    'SETTINGS',\n    'ABOUT',\n  ];\n\n  links.reverse().forEach((link) => {\n    makeLink(link, moreTabElement);\n  });\n\n  window.onload = () => {\n    displayItems(links, moreTabElement, moreTabDropDown);\n  };\n\n  window.onresize = () => {\n    displayItems(links, moreTabElement, moreTabDropDown);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moreTab);\n\n\n//# sourceURL=webpack://linting/./src/js/navigation.more-tab.js?");

/***/ })

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;