(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/_app.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./css/clear.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./css/clear.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "html, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n    margin:0;\n    padding:0;\n    border:0;\n    outline: none;\n    font-size:100%;\n    vertical-align:baseline;\n    background:transparent;\n}\n\nbody {\n    line-height:1;\n}\n\narticle,aside,details,figcaption,figure,\nfooter,header,hgroup,menu,nav,section { \n    display:block;\n}\n\nnav ul,ul,ol {\n    list-style:none;\n}\n\nblockquote, q {\n    quotes:none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content:'';\n    content:none;\n}\n\na {\n    margin:0;\n    padding:0;\n    font-size:100%;\n\toutline: none;\n    vertical-align:baseline;\n    background:transparent;\n}\n\nins {\n    background-color:#ff9;\n    color:#000;\n    text-decoration:none;\n}\n\nmark {\n    background-color:#ff9;\n    color:#000; \n    font-style:italic;\n    font-weight:bold;\n}\n\ndel {\n    text-decoration: line-through;\n}\n\nabbr[title], dfn[title] {\n    border-bottom:1px dotted;\n    cursor:help;\n}\n\ntable {\n    border-collapse:collapse;\n    border-spacing:0;\n}\n\nhr {\n    display:block;\n    height:1px;\n    border:0;   \n    border-top:1px solid #cccccc;\n    margin:1em 0;\n    padding:0;\n}\n\ninput, select {\n    vertical-align:middle;\n}\n\ninput:focus, textarea:focus\n{\n    outline: none;\n}", "",{"version":3,"sources":["clear.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;IAWI,QAAQ;IACR,SAAS;IACT,QAAQ;IACR,aAAa;IACb,cAAc;IACd,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,cAAc;CACjB,aAAa;IACV,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;IACrB,UAAU;IACV,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,QAAQ;IACR,4BAA4B;IAC5B,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,aAAa;AACjB","file":"clear.css","sourcesContent":["html, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n    margin:0;\n    padding:0;\n    border:0;\n    outline: none;\n    font-size:100%;\n    vertical-align:baseline;\n    background:transparent;\n}\n\nbody {\n    line-height:1;\n}\n\narticle,aside,details,figcaption,figure,\nfooter,header,hgroup,menu,nav,section { \n    display:block;\n}\n\nnav ul,ul,ol {\n    list-style:none;\n}\n\nblockquote, q {\n    quotes:none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content:'';\n    content:none;\n}\n\na {\n    margin:0;\n    padding:0;\n    font-size:100%;\n\toutline: none;\n    vertical-align:baseline;\n    background:transparent;\n}\n\nins {\n    background-color:#ff9;\n    color:#000;\n    text-decoration:none;\n}\n\nmark {\n    background-color:#ff9;\n    color:#000; \n    font-style:italic;\n    font-weight:bold;\n}\n\ndel {\n    text-decoration: line-through;\n}\n\nabbr[title], dfn[title] {\n    border-bottom:1px dotted;\n    cursor:help;\n}\n\ntable {\n    border-collapse:collapse;\n    border-spacing:0;\n}\n\nhr {\n    display:block;\n    height:1px;\n    border:0;   \n    border-top:1px solid #cccccc;\n    margin:1em 0;\n    padding:0;\n}\n\ninput, select {\n    vertical-align:middle;\n}\n\ninput:focus, textarea:focus\n{\n    outline: none;\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./css/common.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./css/common.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".block {\n    display: block;\n}\n\n.hidden {\n    display: none;\n}\n\n.clear {\n    clear: both;\n}\n\n.left {\n    float: left;\n}\n\n.right {\n    float: right;\n}\n\n.center-relative {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.relative {\n    position: relative;\n}\n\n.m-p-left-5 {\n    margin-left: 5%;\n}\n\n.m-left-35 {\n    margin-left: 35px;\n}\n\n.m-right-35 {\n    margin-right: 35px;\n}\n\n.m-bottom-0 {\n    margin-bottom: 0 !important;\n}\n\n.m-bottom-10 {\n    margin-bottom: 10px !important;\n}\n\n.m-bottom-20 {\n    margin-bottom: 20px !important;\n}\n\n.m-bottom-25 {\n    margin-bottom: 25px !important;\n}\n\n.m-bottom-30 {\n    margin-bottom: 30px !important;\n}\n\n.m-bottom-50 {\n    margin-bottom: 50px !important;\n}\n\n.m-bottom-60 {\n    margin-bottom: 60px !important;\n}\n\n.m-bottom-100 {\n    margin-bottom: 100px !important;\n}\n\n.m-bottom-150 {\n    margin-bottom: 150px !important;\n}\n\n.m-bottom-200 {\n    margin-bottom: 200px !important;\n}\n\n.m-right-0 {\n    margin-right: 0 !important;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    padding: 20px 0;\n    color: #d4af37;\n}\n\nh1 {\n    font-size: 38px;\n    line-height: 38px;    \n}\n\nh2 {\n    font-size: 34px;    \n    line-height: 34px;    \n}\n\nh3 {\n    font-size: 32px;  \n    line-height: 32px;    \n}\n\nh4 {\n    font-size: 30px;    \n}\n\nh5 {\n    font-size: 28px;   \n}\n\nh6 {\n    font-size: 26px;    \n}\n\nem {\n    font-style: italic;\n}\n\nol {\n    list-style-type: decimal;\n}\n\npre {\n    word-wrap: break-word;\n    white-space: pre-wrap;\n}\n\ntable, \nth, \ntd {\n    border:1px solid black;\n    padding: 10px;\n    vertical-align: middle;\n}\n\nsup {\n    vertical-align: super;\n    font-size: smaller;\n}\n\nsub {\n    vertical-align: sub;\n    font-size: smaller;\n}\n\n.single-content ol {\n    display: block;\n    list-style-type: decimal;\n    margin: 0 0 14px 17px;\n}\n\n.single-content ul {\n    display: block;\n    list-style-type: disc;\n    margin: 0 0 14px 17px;\n}\n\n.row:after {\n    content: \"\";\n    display: block;\n    clear: both;\n}\n\n.one-half { \n    margin-right: 10%;\n    float: left;\n    position: relative;\n}\n\n.one-half {\n    width: 45%;\n}\n\n.width-40 {\n    width: 40%;    \n    margin-right: 5%;\n}\n\n.width-55 {\n    width: 55%;\n    margin-right: 5%;\n}\n\n.last {\n    margin-right: 0 !important;\n    clear: right;\n}\n\n.logo:hover {\n    stroke: black;\n}", "",{"version":3,"sources":["common.css"],"names":[],"mappings":"AAAA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;;;;;;IAMI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;;;IAGI,sBAAsB;IACtB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB","file":"common.css","sourcesContent":[".block {\n    display: block;\n}\n\n.hidden {\n    display: none;\n}\n\n.clear {\n    clear: both;\n}\n\n.left {\n    float: left;\n}\n\n.right {\n    float: right;\n}\n\n.center-relative {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.relative {\n    position: relative;\n}\n\n.m-p-left-5 {\n    margin-left: 5%;\n}\n\n.m-left-35 {\n    margin-left: 35px;\n}\n\n.m-right-35 {\n    margin-right: 35px;\n}\n\n.m-bottom-0 {\n    margin-bottom: 0 !important;\n}\n\n.m-bottom-10 {\n    margin-bottom: 10px !important;\n}\n\n.m-bottom-20 {\n    margin-bottom: 20px !important;\n}\n\n.m-bottom-25 {\n    margin-bottom: 25px !important;\n}\n\n.m-bottom-30 {\n    margin-bottom: 30px !important;\n}\n\n.m-bottom-50 {\n    margin-bottom: 50px !important;\n}\n\n.m-bottom-60 {\n    margin-bottom: 60px !important;\n}\n\n.m-bottom-100 {\n    margin-bottom: 100px !important;\n}\n\n.m-bottom-150 {\n    margin-bottom: 150px !important;\n}\n\n.m-bottom-200 {\n    margin-bottom: 200px !important;\n}\n\n.m-right-0 {\n    margin-right: 0 !important;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    padding: 20px 0;\n    color: #d4af37;\n}\n\nh1 {\n    font-size: 38px;\n    line-height: 38px;    \n}\n\nh2 {\n    font-size: 34px;    \n    line-height: 34px;    \n}\n\nh3 {\n    font-size: 32px;  \n    line-height: 32px;    \n}\n\nh4 {\n    font-size: 30px;    \n}\n\nh5 {\n    font-size: 28px;   \n}\n\nh6 {\n    font-size: 26px;    \n}\n\nem {\n    font-style: italic;\n}\n\nol {\n    list-style-type: decimal;\n}\n\npre {\n    word-wrap: break-word;\n    white-space: pre-wrap;\n}\n\ntable, \nth, \ntd {\n    border:1px solid black;\n    padding: 10px;\n    vertical-align: middle;\n}\n\nsup {\n    vertical-align: super;\n    font-size: smaller;\n}\n\nsub {\n    vertical-align: sub;\n    font-size: smaller;\n}\n\n.single-content ol {\n    display: block;\n    list-style-type: decimal;\n    margin: 0 0 14px 17px;\n}\n\n.single-content ul {\n    display: block;\n    list-style-type: disc;\n    margin: 0 0 14px 17px;\n}\n\n.row:after {\n    content: \"\";\n    display: block;\n    clear: both;\n}\n\n.one-half { \n    margin-right: 10%;\n    float: left;\n    position: relative;\n}\n\n.one-half {\n    width: 45%;\n}\n\n.width-40 {\n    width: 40%;    \n    margin-right: 5%;\n}\n\n.width-55 {\n    width: 55%;\n    margin-right: 5%;\n}\n\n.last {\n    margin-right: 0 !important;\n    clear: right;\n}\n\n.logo:hover {\n    stroke: black;\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./css/normalize.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./css/normalize.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,yCAAiC;UAAjC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","file":"normalize.css","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./css/owl.theme.default.min.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./css/owl.theme.default.min.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/**\n * Owl Carousel v2.2.1\n * Copyright 2013-2017 David Deutsch\n * Licensed under  ()\n */\n.owl-theme .owl-dots,.owl-theme .owl-nav{text-align:center;-webkit-tap-highlight-color:transparent}.owl-theme .owl-nav{margin-top:10px}.owl-theme .owl-nav [class*=owl-]{color:#FFF;font-size:14px;margin:5px;padding:4px 7px;background:#D6D6D6;display:inline-block;cursor:pointer;border-radius:3px}.owl-theme .owl-nav [class*=owl-]:hover{background:#869791;color:#FFF;text-decoration:none}.owl-theme .owl-nav .disabled{opacity:.5;cursor:default}.owl-theme .owl-nav.disabled+.owl-dots{margin-top:10px}.owl-theme .owl-dots .owl-dot{display:inline-block;zoom:1}.owl-theme .owl-dots .owl-dot span{width:10px;height:10px;margin:5px 7px;background:#D6D6D6;display:block;-webkit-backface-visibility:visible;transition:opacity .2s ease;border-radius:30px}.owl-theme .owl-dots .owl-dot.active span,.owl-theme .owl-dots .owl-dot:hover span{background:#869791}", "",{"version":3,"sources":["owl.theme.default.min.css"],"names":[],"mappings":"AAAA;;;;EAIE;AACF,yCAAyC,iBAAiB,CAAC,uCAAuC,CAAC,oBAAoB,eAAe,CAAC,kCAAkC,UAAU,CAAC,cAAc,CAAC,UAAU,CAAC,eAAe,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,cAAc,CAAC,iBAAiB,CAAC,wCAAwC,kBAAkB,CAAC,UAAU,CAAC,oBAAoB,CAAC,8BAA8B,UAAU,CAAC,cAAc,CAAC,uCAAuC,eAAe,CAAC,8BAA8B,oBAAoB,CAAC,MAAM,CAAC,mCAAmC,UAAU,CAAC,WAAW,CAAC,cAAc,CAAC,kBAAkB,CAAC,aAAa,CAAC,mCAAmC,CAAC,2BAA2B,CAAC,kBAAkB,CAAC,mFAAmF,kBAAkB","file":"owl.theme.default.min.css","sourcesContent":["/**\n * Owl Carousel v2.2.1\n * Copyright 2013-2017 David Deutsch\n * Licensed under  ()\n */\n.owl-theme .owl-dots,.owl-theme .owl-nav{text-align:center;-webkit-tap-highlight-color:transparent}.owl-theme .owl-nav{margin-top:10px}.owl-theme .owl-nav [class*=owl-]{color:#FFF;font-size:14px;margin:5px;padding:4px 7px;background:#D6D6D6;display:inline-block;cursor:pointer;border-radius:3px}.owl-theme .owl-nav [class*=owl-]:hover{background:#869791;color:#FFF;text-decoration:none}.owl-theme .owl-nav .disabled{opacity:.5;cursor:default}.owl-theme .owl-nav.disabled+.owl-dots{margin-top:10px}.owl-theme .owl-dots .owl-dot{display:inline-block;zoom:1}.owl-theme .owl-dots .owl-dot span{width:10px;height:10px;margin:5px 7px;background:#D6D6D6;display:block;-webkit-backface-visibility:visible;transition:opacity .2s ease;border-radius:30px}.owl-theme .owl-dots .owl-dot.active span,.owl-theme .owl-dots .owl-dot:hover span{background:#869791}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./css/prettyPhoto.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./css/prettyPhoto.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ../public/images/prettyPhoto/default/sprite_next.png */ "./public/images/prettyPhoto/default/sprite_next.png");
var ___CSS_LOADER_URL_PURE_IMPORT_1___ = __webpack_require__(/*! ../public/images/prettyPhoto/default/sprite_prev.png */ "./public/images/prettyPhoto/default/sprite_prev.png");
var ___CSS_LOADER_URL_PURE_IMPORT_2___ = __webpack_require__(/*! ../public/images/prettyPhoto/default/sprite.png */ "./public/images/prettyPhoto/default/sprite.png");
var ___CSS_LOADER_URL_PURE_IMPORT_3___ = __webpack_require__(/*! ../public/images/prettyPhoto/default/default_thumb.png */ "./public/images/prettyPhoto/default/default_thumb.png");
var ___CSS_LOADER_URL_PURE_IMPORT_4___ = __webpack_require__(/*! ../public/images/prettyPhoto/default/loader.gif */ "./public/images/prettyPhoto/default/loader.gif");
var ___CSS_LOADER_URL_PURE_IMPORT_5___ = __webpack_require__(/*! ../public/images/prettyPhoto/light_rounded/sprite.png */ "./public/images/prettyPhoto/light_rounded/sprite.png");
var ___CSS_LOADER_URL_PURE_IMPORT_6___ = __webpack_require__(/*! ../public/images/prettyPhoto/light_rounded/btnNext.png */ "./public/images/prettyPhoto/light_rounded/btnNext.png");
var ___CSS_LOADER_URL_PURE_IMPORT_7___ = __webpack_require__(/*! ../public/images/prettyPhoto/light_rounded/btnPrevious.png */ "./public/images/prettyPhoto/light_rounded/btnPrevious.png");
var ___CSS_LOADER_URL_PURE_IMPORT_8___ = __webpack_require__(/*! ../public/images/prettyPhoto/light_rounded/loader.gif */ "./public/images/prettyPhoto/light_rounded/loader.gif");
var ___CSS_LOADER_URL_PURE_IMPORT_9___ = __webpack_require__(/*! ../public/images/prettyPhoto/dark_rounded/sprite.png */ "./public/images/prettyPhoto/dark_rounded/sprite.png");
var ___CSS_LOADER_URL_PURE_IMPORT_10___ = __webpack_require__(/*! ../public/images/prettyPhoto/dark_rounded/contentPattern.png */ "./public/images/prettyPhoto/dark_rounded/contentPattern.png");
var ___CSS_LOADER_URL_PURE_IMPORT_11___ = __webpack_require__(/*! ../public/images/prettyPhoto/dark_rounded/btnNext.png */ "./public/images/prettyPhoto/dark_rounded/btnNext.png");
var ___CSS_LOADER_URL_PURE_IMPORT_12___ = __webpack_require__(/*! ../public/images/prettyPhoto/dark_rounded/btnPrevious.png */ "./public/images/prettyPhoto/dark_rounded/btnPrevious.png");
var ___CSS_LOADER_URL_PURE_IMPORT_13___ = __webpack_require__(/*! ../public/images/prettyPhoto/dark_rounded/loader.gif */ "./public/images/prettyPhoto/dark_rounded/loader.gif");
var ___CSS_LOADER_URL_PURE_IMPORT_14___ = __webpack_require__(/*! ../public/images/prettyPhoto/dark_square/loader.gif */ "./public/images/prettyPhoto/dark_square/loader.gif");
var ___CSS_LOADER_URL_PURE_IMPORT_15___ = __webpack_require__(/*! ../public/images/prettyPhoto/dark_square/sprite.png */ "./public/images/prettyPhoto/dark_square/sprite.png");
var ___CSS_LOADER_URL_PURE_IMPORT_16___ = __webpack_require__(/*! ../public/images/prettyPhoto/dark_square/btnNext.png */ "./public/images/prettyPhoto/dark_square/btnNext.png");
var ___CSS_LOADER_URL_PURE_IMPORT_17___ = __webpack_require__(/*! ../public/images/prettyPhoto/dark_square/btnPrevious.png */ "./public/images/prettyPhoto/dark_square/btnPrevious.png");
var ___CSS_LOADER_URL_PURE_IMPORT_18___ = __webpack_require__(/*! ../public/images/prettyPhoto/light_square/sprite.png */ "./public/images/prettyPhoto/light_square/sprite.png");
var ___CSS_LOADER_URL_PURE_IMPORT_19___ = __webpack_require__(/*! ../public/images/prettyPhoto/light_square/btnNext.png */ "./public/images/prettyPhoto/light_square/btnNext.png");
var ___CSS_LOADER_URL_PURE_IMPORT_20___ = __webpack_require__(/*! ../public/images/prettyPhoto/light_square/btnPrevious.png */ "./public/images/prettyPhoto/light_square/btnPrevious.png");
var ___CSS_LOADER_URL_PURE_IMPORT_21___ = __webpack_require__(/*! ../public/images/prettyPhoto/facebook/sprite.png */ "./public/images/prettyPhoto/facebook/sprite.png");
var ___CSS_LOADER_URL_PURE_IMPORT_22___ = __webpack_require__(/*! ../public/images/prettyPhoto/facebook/contentPatternTop.png */ "./public/images/prettyPhoto/facebook/contentPatternTop.png");
var ___CSS_LOADER_URL_PURE_IMPORT_23___ = __webpack_require__(/*! ../public/images/prettyPhoto/facebook/contentPatternLeft.png */ "./public/images/prettyPhoto/facebook/contentPatternLeft.png");
var ___CSS_LOADER_URL_PURE_IMPORT_24___ = __webpack_require__(/*! ../public/images/prettyPhoto/facebook/contentPatternRight.png */ "./public/images/prettyPhoto/facebook/contentPatternRight.png");
var ___CSS_LOADER_URL_PURE_IMPORT_25___ = __webpack_require__(/*! ../public/images/prettyPhoto/facebook/loader.gif */ "./public/images/prettyPhoto/facebook/loader.gif");
var ___CSS_LOADER_URL_PURE_IMPORT_26___ = __webpack_require__(/*! ../public/images/prettyPhoto/facebook/btnNext.png */ "./public/images/prettyPhoto/facebook/btnNext.png");
var ___CSS_LOADER_URL_PURE_IMPORT_27___ = __webpack_require__(/*! ../public/images/prettyPhoto/facebook/btnPrevious.png */ "./public/images/prettyPhoto/facebook/btnPrevious.png");
var ___CSS_LOADER_URL_PURE_IMPORT_28___ = __webpack_require__(/*! ../public/images/prettyPhoto/facebook/contentPatternBottom.png */ "./public/images/prettyPhoto/facebook/contentPatternBottom.png");
var ___CSS_LOADER_URL_PURE_IMPORT_29___ = __webpack_require__(/*! ../public/images/prettyPhoto/facebook/default_thumbnail.gif */ "./public/images/prettyPhoto/facebook/default_thumbnail.gif");
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
var ___CSS_LOADER_URL_IMPORT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_1___);
var ___CSS_LOADER_URL_IMPORT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_2___);
var ___CSS_LOADER_URL_IMPORT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_3___);
var ___CSS_LOADER_URL_IMPORT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_4___);
var ___CSS_LOADER_URL_IMPORT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_5___);
var ___CSS_LOADER_URL_IMPORT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_6___);
var ___CSS_LOADER_URL_IMPORT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_7___);
var ___CSS_LOADER_URL_IMPORT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_8___);
var ___CSS_LOADER_URL_IMPORT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_9___);
var ___CSS_LOADER_URL_IMPORT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_10___);
var ___CSS_LOADER_URL_IMPORT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_11___);
var ___CSS_LOADER_URL_IMPORT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_12___);
var ___CSS_LOADER_URL_IMPORT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_13___);
var ___CSS_LOADER_URL_IMPORT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_14___);
var ___CSS_LOADER_URL_IMPORT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_15___);
var ___CSS_LOADER_URL_IMPORT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_16___);
var ___CSS_LOADER_URL_IMPORT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_17___);
var ___CSS_LOADER_URL_IMPORT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_18___);
var ___CSS_LOADER_URL_IMPORT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_19___);
var ___CSS_LOADER_URL_IMPORT_20___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_20___);
var ___CSS_LOADER_URL_IMPORT_21___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_21___);
var ___CSS_LOADER_URL_IMPORT_22___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_22___);
var ___CSS_LOADER_URL_IMPORT_23___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_23___);
var ___CSS_LOADER_URL_IMPORT_24___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_24___);
var ___CSS_LOADER_URL_IMPORT_25___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_25___);
var ___CSS_LOADER_URL_IMPORT_26___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_26___);
var ___CSS_LOADER_URL_IMPORT_27___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_27___);
var ___CSS_LOADER_URL_IMPORT_28___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_28___);
var ___CSS_LOADER_URL_IMPORT_29___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_29___);
// Module
exports.push([module.i, "/* ------------------------------------------------------------------------\n        This you can edit.\n------------------------------------------------------------------------- */\n\n/* ----------------------------------\n        Default Theme\n----------------------------------- */\n\ndiv.pp_default .pp_top,\ndiv.pp_default .pp_top .pp_middle,\ndiv.pp_default .pp_top .pp_left,\ndiv.pp_default .pp_top .pp_right,\ndiv.pp_default .pp_bottom,\ndiv.pp_default .pp_bottom .pp_left,\ndiv.pp_default .pp_bottom .pp_middle,\ndiv.pp_default .pp_bottom .pp_right { height: 13px; }\n\ndiv.pp_default .pp_content .ppt { color: #f8f8f8; }\ndiv.pp_default .pp_content_container .pp_left { padding-left: 13px; }\ndiv.pp_default .pp_content_container .pp_right { padding-right: 13px; }\n/*div.pp_default .pp_content { background-color: #fff; }*/\ndiv.pp_default .pp_next:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_0___ + ") center right  no-repeat; cursor: pointer; } /* Next button */\ndiv.pp_default .pp_previous:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_1___ + ") center left no-repeat; cursor: pointer; } /* Previous button */\ndiv.pp_default .pp_expand { background: url(" + ___CSS_LOADER_URL_IMPORT_2___ + ") 0 -29px no-repeat; cursor: pointer; width: 28px; height: 28px; display: none !important; } /* Expand button */\ndiv.pp_default .pp_expand:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_2___ + ") 0 -56px no-repeat; cursor: pointer; } /* Expand button hover */\ndiv.pp_default .pp_contract { background: url(" + ___CSS_LOADER_URL_IMPORT_2___ + ") 0 -84px no-repeat; cursor: pointer; width: 28px; height: 28px; } /* Contract button */\ndiv.pp_default .pp_contract:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_2___ + ") 0 -113px no-repeat; cursor: pointer; } /* Contract button hover */\ndiv.pp_default .pp_close { width: 30px; height: 30px; cursor: pointer; } /* Close button */\ndiv.pp_default #pp_full_res .pp_inline { color: #000; background-color: white; padding: 30px; } \n.pp_inline img {max-width: 100%; max-height: 100%; width: auto; height: auto;}\ndiv.pp_default .pp_gallery ul li a { background: url(" + ___CSS_LOADER_URL_IMPORT_3___ + ") center center #f8f8f8; border:1px solid #aaa; }\ndiv.pp_default .pp_gallery ul li a:hover,\ndiv.pp_default .pp_gallery ul li.selected a { border-color: #fff; }\ndiv.pp_default .pp_social { margin-top: 7px;}\n\ndiv.pp_default .pp_gallery a.pp_arrow_previous,\ndiv.pp_default .pp_gallery a.pp_arrow_next { position: static; left: auto; }\ndiv.pp_default .pp_nav .pp_play,\ndiv.pp_default .pp_nav .pp_pause { background: url(" + ___CSS_LOADER_URL_IMPORT_2___ + ") -51px 1px no-repeat; height:30px; width:30px; }\ndiv.pp_default .pp_nav .pp_pause { background-position: -51px -29px; }\ndiv.pp_default .pp_details { position: relative; }\ndiv.pp_default a.pp_arrow_previous,\ndiv.pp_default a.pp_arrow_next { height: 26px;  margin: -4px 0 0 0; width: 20px; }\ndiv.pp_default a.pp_arrow_next { left: 52px;} /* The next arrow in the bottom nav */\ndiv.pp_default .pp_content_container .pp_details { margin-top: 5px; }\ndiv.pp_default .pp_nav { clear: none; height: 30px; width: 110px; position: relative; }\ndiv.pp_default .pp_nav .currentTextHolder{ font-family: Georgia; font-style: italic; color:#999; font-size: 11px; left: 75px; line-height: 25px; margin: 0; padding: 0 0 0 10px; position: absolute; top: 2px; }\n\ndiv.pp_default .pp_close:hover, div.pp_default .pp_nav .pp_play:hover, div.pp_default .pp_nav .pp_pause:hover, div.pp_default .pp_arrow_next:hover, div.pp_default .pp_arrow_previous:hover { opacity:0.7; }\n\ndiv.pp_default .pp_description{ font-size: 11px; font-weight: bold; line-height: 14px; margin: 5px 50px 5px 0; }\n\n\ndiv.pp_default .pp_loaderIcon { background: url(" + ___CSS_LOADER_URL_IMPORT_4___ + ") center center no-repeat; background-color: white;} /* Loader icon */\n\n\n/* ----------------------------------\n        Light Rounded Theme\n----------------------------------- */\n\n\ndiv.light_rounded .pp_top .pp_left { background: url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") -88px -53px no-repeat; } /* Top left corner */\ndiv.light_rounded .pp_top .pp_middle { background: #fff; } /* Top pattern/color */\ndiv.light_rounded .pp_top .pp_right { background: url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") -110px -53px no-repeat; } /* Top right corner */\n\ndiv.light_rounded .pp_content .ppt { color: #000; }\ndiv.light_rounded .pp_content_container .pp_left,\ndiv.light_rounded .pp_content_container .pp_right { background: #fff; }\ndiv.light_rounded .pp_content { background-color: #fff; } /* Content background */\ndiv.light_rounded .pp_next:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_6___ + ") center right  no-repeat; cursor: pointer; } /* Next button */\ndiv.light_rounded .pp_previous:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_7___ + ") center left no-repeat; cursor: pointer; } /* Previous button */\ndiv.light_rounded .pp_expand { background: url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") -31px -26px no-repeat; cursor: pointer; } /* Expand button */\ndiv.light_rounded .pp_expand:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") -31px -47px no-repeat; cursor: pointer; } /* Expand button hover */\ndiv.light_rounded .pp_contract { background: url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") 0 -26px no-repeat; cursor: pointer; } /* Contract button */\ndiv.light_rounded .pp_contract:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") 0 -47px no-repeat; cursor: pointer; } /* Contract button hover */\ndiv.light_rounded .pp_close { width: 75px; height: 22px; background: url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") -1px -1px no-repeat; cursor: pointer; } /* Close button */\ndiv.light_rounded .pp_details { position: relative; }\ndiv.light_rounded .pp_description { margin-right: 85px; }\ndiv.light_rounded #pp_full_res .pp_inline { color: #000; } \ndiv.light_rounded .pp_gallery a.pp_arrow_previous,\ndiv.light_rounded .pp_gallery a.pp_arrow_next { margin-top: 12px !important; }\ndiv.light_rounded .pp_nav .pp_play { background: url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") -1px -100px no-repeat; height: 15px; width: 14px; }\ndiv.light_rounded .pp_nav .pp_pause { background: url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") -24px -100px no-repeat; height: 15px; width: 14px; }\n\ndiv.light_rounded .pp_arrow_previous { background: url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") 0 -71px no-repeat; } /* The previous arrow in the bottom nav */\ndiv.light_rounded .pp_arrow_previous.disabled { background-position: 0 -87px; cursor: default; }\ndiv.light_rounded .pp_arrow_next { background: url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") -22px -71px no-repeat; } /* The next arrow in the bottom nav */\ndiv.light_rounded .pp_arrow_next.disabled { background-position: -22px -87px; cursor: default; }\n\ndiv.light_rounded .pp_bottom .pp_left { background: url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") -88px -80px no-repeat; } /* Bottom left corner */\ndiv.light_rounded .pp_bottom .pp_middle { background: #fff; } /* Bottom pattern/color */\ndiv.light_rounded .pp_bottom .pp_right { background: url(" + ___CSS_LOADER_URL_IMPORT_5___ + ") -110px -80px no-repeat; } /* Bottom right corner */\n\ndiv.light_rounded .pp_loaderIcon { background: url(" + ___CSS_LOADER_URL_IMPORT_8___ + ") center center no-repeat; } /* Loader icon */\n\n/* ----------------------------------\n        Dark Rounded Theme\n----------------------------------- */\n\ndiv.dark_rounded .pp_top .pp_left { background: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") -88px -53px no-repeat; } /* Top left corner */\ndiv.dark_rounded .pp_top .pp_middle { background: url(" + ___CSS_LOADER_URL_IMPORT_10___ + ") top left repeat; } /* Top pattern/color */\ndiv.dark_rounded .pp_top .pp_right { background: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") -110px -53px no-repeat; } /* Top right corner */\n\ndiv.dark_rounded .pp_content_container .pp_left { background: url(" + ___CSS_LOADER_URL_IMPORT_10___ + ") top left repeat-y; } /* Left Content background */\ndiv.dark_rounded .pp_content_container .pp_right { background: url(" + ___CSS_LOADER_URL_IMPORT_10___ + ") top right repeat-y; } /* Right Content background */\ndiv.dark_rounded .pp_content { background: url(" + ___CSS_LOADER_URL_IMPORT_10___ + ") top left repeat; } /* Content background */\ndiv.dark_rounded .pp_next:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_11___ + ") center right  no-repeat; cursor: pointer; } /* Next button */\ndiv.dark_rounded .pp_previous:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_12___ + ") center left no-repeat; cursor: pointer; } /* Previous button */\ndiv.dark_rounded .pp_expand { background: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") -31px -26px no-repeat; cursor: pointer; } /* Expand button */\ndiv.dark_rounded .pp_expand:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") -31px -47px no-repeat; cursor: pointer; } /* Expand button hover */\ndiv.dark_rounded .pp_contract { background: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") 0 -26px no-repeat; cursor: pointer; } /* Contract button */\ndiv.dark_rounded .pp_contract:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") 0 -47px no-repeat; cursor: pointer; } /* Contract button hover */\ndiv.dark_rounded .pp_close { width: 75px; height: 22px; background: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") -1px -1px no-repeat; cursor: pointer; } /* Close button */\ndiv.dark_rounded .pp_details { position: relative; }\ndiv.dark_rounded .pp_description { margin-right: 85px; }\ndiv.dark_rounded .currentTextHolder { color: #c4c4c4; }\ndiv.dark_rounded .pp_description { color: #fff; }\ndiv.dark_rounded #pp_full_res .pp_inline { color: #fff; }\ndiv.dark_rounded .pp_gallery a.pp_arrow_previous,\ndiv.dark_rounded .pp_gallery a.pp_arrow_next { margin-top: 12px !important; }\ndiv.dark_rounded .pp_nav .pp_play { background: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") -1px -100px no-repeat; height: 15px; width: 14px; }\ndiv.dark_rounded .pp_nav .pp_pause { background: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") -24px -100px no-repeat; height: 15px; width: 14px; }\n\ndiv.dark_rounded .pp_arrow_previous { background: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") 0 -71px no-repeat; } /* The previous arrow in the bottom nav */\ndiv.dark_rounded .pp_arrow_previous.disabled { background-position: 0 -87px; cursor: default; }\ndiv.dark_rounded .pp_arrow_next { background: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") -22px -71px no-repeat; } /* The next arrow in the bottom nav */\ndiv.dark_rounded .pp_arrow_next.disabled { background-position: -22px -87px; cursor: default; }\n\ndiv.dark_rounded .pp_bottom .pp_left { background: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") -88px -80px no-repeat; } /* Bottom left corner */\ndiv.dark_rounded .pp_bottom .pp_middle { background: url(" + ___CSS_LOADER_URL_IMPORT_10___ + ") top left repeat; } /* Bottom pattern/color */\ndiv.dark_rounded .pp_bottom .pp_right { background: url(" + ___CSS_LOADER_URL_IMPORT_9___ + ") -110px -80px no-repeat; } /* Bottom right corner */\n\ndiv.dark_rounded .pp_loaderIcon { background: url(" + ___CSS_LOADER_URL_IMPORT_13___ + ") center center no-repeat; } /* Loader icon */\n\n\n/* ----------------------------------\n        Dark Square Theme\n----------------------------------- */\n\ndiv.dark_square .pp_left ,\ndiv.dark_square .pp_middle,\ndiv.dark_square .pp_right,\ndiv.dark_square .pp_content { background: #000; }\n\ndiv.dark_square .currentTextHolder { color: #c4c4c4; }\ndiv.dark_square .pp_description { color: #fff; }\ndiv.dark_square .pp_loaderIcon { background: url(" + ___CSS_LOADER_URL_IMPORT_14___ + ") center center no-repeat; } /* Loader icon */\n\ndiv.dark_square .pp_expand { background: url(" + ___CSS_LOADER_URL_IMPORT_15___ + ") -31px -26px no-repeat; cursor: pointer; } /* Expand button */\ndiv.dark_square .pp_expand:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_15___ + ") -31px -47px no-repeat; cursor: pointer; } /* Expand button hover */\ndiv.dark_square .pp_contract { background: url(" + ___CSS_LOADER_URL_IMPORT_15___ + ") 0 -26px no-repeat; cursor: pointer; } /* Contract button */\ndiv.dark_square .pp_contract:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_15___ + ") 0 -47px no-repeat; cursor: pointer; } /* Contract button hover */\ndiv.dark_square .pp_close { width: 75px; height: 22px; background: url(" + ___CSS_LOADER_URL_IMPORT_15___ + ") -1px -1px no-repeat; cursor: pointer; } /* Close button */\ndiv.dark_square .pp_details { position: relative; }\ndiv.dark_square .pp_description { margin: 0 85px 0 0; }\ndiv.dark_square #pp_full_res .pp_inline { color: #fff; }\ndiv.dark_square .pp_gallery a.pp_arrow_previous,\ndiv.dark_square .pp_gallery a.pp_arrow_next { margin-top: 12px !important; }\ndiv.dark_square .pp_nav { clear: none; }\ndiv.dark_square .pp_nav .pp_play { background: url(" + ___CSS_LOADER_URL_IMPORT_15___ + ") -1px -100px no-repeat; height: 15px; width: 14px; }\ndiv.dark_square .pp_nav .pp_pause { background: url(" + ___CSS_LOADER_URL_IMPORT_15___ + ") -24px -100px no-repeat; height: 15px; width: 14px; }\n\ndiv.dark_square .pp_arrow_previous { background: url(" + ___CSS_LOADER_URL_IMPORT_15___ + ") 0 -71px no-repeat; } /* The previous arrow in the bottom nav */\ndiv.dark_square .pp_arrow_previous.disabled { background-position: 0 -87px; cursor: default; }\ndiv.dark_square .pp_arrow_next { background: url(" + ___CSS_LOADER_URL_IMPORT_15___ + ") -22px -71px no-repeat; } /* The next arrow in the bottom nav */\ndiv.dark_square .pp_arrow_next.disabled { background-position: -22px -87px; cursor: default; }\n\ndiv.dark_square .pp_next:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_16___ + ") center right  no-repeat; cursor: pointer; } /* Next button */\ndiv.dark_square .pp_previous:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_17___ + ") center left no-repeat; cursor: pointer; } /* Previous button */\n\n\n/* ----------------------------------\n        Light Square Theme\n----------------------------------- */\n\ndiv.light_square .pp_left ,\ndiv.light_square .pp_middle,\ndiv.light_square .pp_right,\ndiv.light_square .pp_content { background: #fff; }\n\ndiv.light_square .pp_content .ppt { color: #000; }\ndiv.light_square .pp_expand { background: url(" + ___CSS_LOADER_URL_IMPORT_18___ + ") -31px -26px no-repeat; cursor: pointer; } /* Expand button */\ndiv.light_square .pp_expand:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_18___ + ") -31px -47px no-repeat; cursor: pointer; } /* Expand button hover */\ndiv.light_square .pp_contract { background: url(" + ___CSS_LOADER_URL_IMPORT_18___ + ") 0 -26px no-repeat; cursor: pointer; } /* Contract button */\ndiv.light_square .pp_contract:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_18___ + ") 0 -47px no-repeat; cursor: pointer; } /* Contract button hover */\ndiv.light_square .pp_close { width: 75px; height: 22px; background: url(" + ___CSS_LOADER_URL_IMPORT_18___ + ") -1px -1px no-repeat; cursor: pointer; } /* Close button */\ndiv.light_square .pp_details { position: relative; }\ndiv.light_square .pp_description { margin-right: 85px; }\ndiv.light_square #pp_full_res .pp_inline { color: #000; }\ndiv.light_square .pp_gallery a.pp_arrow_previous,\ndiv.light_square .pp_gallery a.pp_arrow_next { margin-top: 12px !important; }\ndiv.light_square .pp_nav .pp_play { background: url(" + ___CSS_LOADER_URL_IMPORT_18___ + ") -1px -100px no-repeat; height: 15px; width: 14px; }\ndiv.light_square .pp_nav .pp_pause { background: url(" + ___CSS_LOADER_URL_IMPORT_18___ + ") -24px -100px no-repeat; height: 15px; width: 14px; }\n\ndiv.light_square .pp_arrow_previous { background: url(" + ___CSS_LOADER_URL_IMPORT_18___ + ") 0 -71px no-repeat; } /* The previous arrow in the bottom nav */\ndiv.light_square .pp_arrow_previous.disabled { background-position: 0 -87px; cursor: default; }\ndiv.light_square .pp_arrow_next { background: url(" + ___CSS_LOADER_URL_IMPORT_18___ + ") -22px -71px no-repeat; } /* The next arrow in the bottom nav */\ndiv.light_square .pp_arrow_next.disabled { background-position: -22px -87px; cursor: default; }\n\ndiv.light_square .pp_next:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_19___ + ") center right  no-repeat; cursor: pointer; } /* Next button */\ndiv.light_square .pp_previous:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_20___ + ") center left no-repeat; cursor: pointer; } /* Previous button */\n\ndiv.light_square .pp_loaderIcon { background: url(" + ___CSS_LOADER_URL_IMPORT_8___ + ") center center no-repeat; } /* Loader icon */\n\n\n/* ----------------------------------\n        Facebook style Theme\n----------------------------------- */\n\ndiv.facebook .pp_top .pp_left { background: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") -88px -53px no-repeat; } /* Top left corner */\ndiv.facebook .pp_top .pp_middle { background: url(" + ___CSS_LOADER_URL_IMPORT_22___ + ") top left repeat-x; } /* Top pattern/color */\ndiv.facebook .pp_top .pp_right { background: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") -110px -53px no-repeat; } /* Top right corner */\n\ndiv.facebook .pp_content .ppt { color: #000; }\ndiv.facebook .pp_content_container .pp_left { background: url(" + ___CSS_LOADER_URL_IMPORT_23___ + ") top left repeat-y; } /* Content background */\ndiv.facebook .pp_content_container .pp_right { background: url(" + ___CSS_LOADER_URL_IMPORT_24___ + ") top right repeat-y; } /* Content background */\ndiv.facebook .pp_content { background: #fff; } /* Content background */\ndiv.facebook .pp_expand { background: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") -31px -26px no-repeat; cursor: pointer; } /* Expand button */\ndiv.facebook .pp_expand:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") -31px -47px no-repeat; cursor: pointer; } /* Expand button hover */\ndiv.facebook .pp_contract { background: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") 0 -26px no-repeat; cursor: pointer; } /* Contract button */\ndiv.facebook .pp_contract:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") 0 -47px no-repeat; cursor: pointer; } /* Contract button hover */\ndiv.facebook .pp_close { width: 22px; height: 22px; background: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") -1px -1px no-repeat; cursor: pointer; } /* Close button */\ndiv.facebook .pp_details { position: relative; }\ndiv.facebook .pp_description { margin: 0 37px 0 0; }\ndiv.facebook #pp_full_res .pp_inline { color: #000; } \ndiv.facebook .pp_loaderIcon { background: url(" + ___CSS_LOADER_URL_IMPORT_25___ + ") center center no-repeat; } /* Loader icon */\n\ndiv.facebook .pp_arrow_previous { background: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") 0 -71px no-repeat; height: 22px; margin-top: 0; width: 22px; } /* The previous arrow in the bottom nav */\ndiv.facebook .pp_arrow_previous.disabled { background-position: 0 -96px; cursor: default; }\ndiv.facebook .pp_arrow_next { background: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") -32px -71px no-repeat; height: 22px; margin-top: 0; width: 22px; } /* The next arrow in the bottom nav */\ndiv.facebook .pp_arrow_next.disabled { background-position: -32px -96px; cursor: default; }\ndiv.facebook .pp_nav { margin-top: 0; }\ndiv.facebook .pp_nav p { font-size: 15px; padding: 0 3px 0 4px; }\ndiv.facebook .pp_nav .pp_play { background: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") -1px -123px no-repeat; height: 22px; width: 22px; }\ndiv.facebook .pp_nav .pp_pause { background: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") -32px -123px no-repeat; height: 22px; width: 22px; }\n\ndiv.facebook .pp_next:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_26___ + ") center right no-repeat; cursor: pointer; } /* Next button */\ndiv.facebook .pp_previous:hover { background: url(" + ___CSS_LOADER_URL_IMPORT_27___ + ") center left no-repeat; cursor: pointer; } /* Previous button */\n\ndiv.facebook .pp_bottom .pp_left { background: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") -88px -80px no-repeat; } /* Bottom left corner */\ndiv.facebook .pp_bottom .pp_middle { background: url(" + ___CSS_LOADER_URL_IMPORT_28___ + ") top left repeat-x; } /* Bottom pattern/color */\ndiv.facebook .pp_bottom .pp_right { background: url(" + ___CSS_LOADER_URL_IMPORT_21___ + ") -110px -80px no-repeat; } /* Bottom right corner */\n\n\n/* ------------------------------------------------------------------------\n        DO NOT CHANGE\n------------------------------------------------------------------------- */\n\ndiv.pp_pic_holder a:focus { outline:none; }\n\ndiv.pp_overlay {\n    background: #000;\n    display: none;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 9999;\n}\n\ndiv.pp_pic_holder {\n    display: none;\n    position: absolute;\n    width: 100px;\n    z-index: 10000;\n}\n\n\n.pp_top {\n    height: 20px;\n    position: relative;\n}\n* html .pp_top { padding: 0 20px; }\n\n.pp_top .pp_left {\n    height: 20px;\n    left: 0;\n    position: absolute;\n    width: 20px;\n}\n.pp_top .pp_middle {\n    height: 20px;\n    left: 20px;\n    position: absolute;\n    right: 20px;\n}\n* html .pp_top .pp_middle {\n    left: 0;\n    position: static;\n}\n\n.pp_top .pp_right {\n    height: 20px;\n    left: auto;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 20px;\n}\n\n.pp_content { height: 40px; min-width: 40px; }\n* html .pp_content { width: 40px; }\n\n.pp_fade { display: none; }\n\n.pp_content_container {\n    position: relative;\n    text-align: left;\n    width: 100%;\n}\n\n.pp_content_container .pp_left { padding-left: 20px; }\n.pp_content_container .pp_right { padding-right: 20px; }\n\n.pp_content_container .pp_details {\n    float: left;\n    margin: 10px 0 2px 0;\n}\n.pp_description {\n    display: none;\n    margin: 0;\n}\n\n.pp_social { float: left; margin: 0; }\n.pp_social .facebook { float: left; margin-left: 5px; width: 55px; overflow: hidden; }\n.pp_social .twitter { float: left; }\n\n.pp_nav {\n    clear: right;\n    float: left;\n    margin: 3px 10px 0 0;\n}\n\n.pp_nav p {\n    float: left;\n    margin: 2px 4px;\n    white-space: nowrap;\n}\n\n.pp_nav .pp_play,\n.pp_nav .pp_pause {\n    float: left;\n    margin-right: 4px;\n    text-indent: -10000px;\n}\n\na.pp_arrow_previous,\na.pp_arrow_next {\n    display: block;\n    float: left;\n    height: 15px;\n    margin-top: 3px;\n    overflow: hidden;\n    width: 14px;\n}\n\n.pp_hoverContainer {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 2000;\n}\n\n.pp_gallery {\n    display: none;\n    left: 50%;\n    margin-top: -50px;\n    position: absolute;\n    z-index: 10000;\n}\n\n.pp_gallery div {\n    float: left;\n    overflow: hidden;\n    position: relative;\n}\n\n.pp_gallery ul {\n    float: left;\n    height: 35px;\n    margin: 0 0 0 5px;\n    padding: 0;\n    position: relative;\n    white-space: nowrap;\n}\n\n.pp_gallery ul a {\n    border: 1px #000 solid;\n    border: 1px rgba(0,0,0,0.5) solid;\n    display: block;\n    float: left;\n    height: 33px;\n    overflow: hidden;\n}\n\n.pp_gallery ul a:hover,\n.pp_gallery li.selected a { border-color: #fff; }\n\n.pp_gallery ul a img { border: 0; }\n\n.pp_gallery li {\n    display: block;\n    float: left;\n    margin: 0 5px 0 0;\n    padding: 0;\n}\n\n.pp_gallery li.default a {\n    background: url(" + ___CSS_LOADER_URL_IMPORT_29___ + ") 0 0 no-repeat;\n    display: block;\n    height: 33px;\n    width: 50px;\n}\n\n.pp_gallery li.default a img { display: none; }\n\n.pp_gallery .pp_arrow_previous,\n.pp_gallery .pp_arrow_next {\n    margin-top: 7px !important;\n}\n\na.pp_next {\n    background: url(" + ___CSS_LOADER_URL_IMPORT_6___ + ") 10000px 10000px no-repeat;\n    display: block;\n    float: right;\n    height: 100%;\n    text-indent: -10000px;\n    width: 49%;\n}\n\na.pp_previous {\n    background: url(" + ___CSS_LOADER_URL_IMPORT_6___ + ") 10000px 10000px no-repeat;\n    display: block;\n    float: left;\n    height: 100%;\n    text-indent: -10000px;\n    width: 49%;\n}\n\na.pp_expand,\na.pp_contract {\n    cursor: pointer;\n    display: none;\n    height: 20px;\t\n    position: absolute;\n    right: 30px;\n    text-indent: -10000px;\n    top: 10px;\n    width: 20px;\n    z-index: 20000;\n}\n\na.pp_close {\n    position: absolute; right: 0; top: 0; \n    display: block;\n    line-height:22px;\n}\n\n.pp_bottom {\n    height: 20px;\n    position: relative;\n}\n* html .pp_bottom { padding: 0 20px; }\n\n.pp_bottom .pp_left {\n    height: 20px;\n    left: 0;\n    position: absolute;\n    width: 20px;\n}\n.pp_bottom .pp_middle {\n    height: 20px;\n    left: 20px;\n    position: absolute;\n    right: 20px;\n}\n* html .pp_bottom .pp_middle {\n    left: 0;\n    position: static;\n}\n\n.pp_bottom .pp_right {\n    height: 20px;\n    left: auto;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 20px;\n}\n\n.pp_loaderIcon {\n    display: block;\n    height: 24px;\n    left: 50%;\n    margin: -12px 0 0 -12px;\n    position: absolute;\n    top: 50%;\n    width: 24px;\n}\n\n#pp_full_res {\n    line-height: 1 !important;\n}\n\n#pp_full_res .pp_inline {\n    text-align: left;\n}\n\n#pp_full_res .pp_inline p { margin: 0 0 15px 0; }\n\ndiv.ppt {\n    color: #fff;\n    display: none !important;\n    font-size: 17px;\n    margin: 0 0 5px 15px;\n    z-index: 9999;\n}\n\n@media screen and (max-width: 400px) {\t\n    #pp_full_res iframe {width: 100%; height: 100%;}\n    .pp_pic_holder.pp_default { width: 100%!important; left: 0!important; overflow: hidden; }\n    div.pp_default .pp_content_container .pp_left { padding-left: 0!important; }\n    div.pp_default .pp_content_container .pp_right { padding-right: 0!important; }\n    .pp_content { width: 100%!important;}\n    .pp_fade { width: 100%!important; height: 100%!important; }\n    a.pp_expand, a.pp_contract, .pp_hoverContainer, .pp_gallery, .pp_top, .pp_bottom { display: none!important; }\n    #pp_full_res img { width: 100%!important; height: auto!important; max-height: none;}\n    .pp_details { width: 94%!important; padding-left: 3%; padding-right: 4%; padding-top: 10px; padding-bottom: 10px; margin-top: -2px!important; }\n    a.pp_close { right: 10px!important; top: 10px!important; }\n}", "",{"version":3,"sources":["prettyPhoto.css"],"names":[],"mappings":"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","file":"prettyPhoto.css","sourcesContent":["/* ------------------------------------------------------------------------\n        This you can edit.\n------------------------------------------------------------------------- */\n\n/* ----------------------------------\n        Default Theme\n----------------------------------- */\n\ndiv.pp_default .pp_top,\ndiv.pp_default .pp_top .pp_middle,\ndiv.pp_default .pp_top .pp_left,\ndiv.pp_default .pp_top .pp_right,\ndiv.pp_default .pp_bottom,\ndiv.pp_default .pp_bottom .pp_left,\ndiv.pp_default .pp_bottom .pp_middle,\ndiv.pp_default .pp_bottom .pp_right { height: 13px; }\n\ndiv.pp_default .pp_content .ppt { color: #f8f8f8; }\ndiv.pp_default .pp_content_container .pp_left { padding-left: 13px; }\ndiv.pp_default .pp_content_container .pp_right { padding-right: 13px; }\n/*div.pp_default .pp_content { background-color: #fff; }*/\ndiv.pp_default .pp_next:hover { background: url(../public/images/prettyPhoto/default/sprite_next.png) center right  no-repeat; cursor: pointer; } /* Next button */\ndiv.pp_default .pp_previous:hover { background: url(../public/images/prettyPhoto/default/sprite_prev.png) center left no-repeat; cursor: pointer; } /* Previous button */\ndiv.pp_default .pp_expand { background: url(../public/images/prettyPhoto/default/sprite.png) 0 -29px no-repeat; cursor: pointer; width: 28px; height: 28px; display: none !important; } /* Expand button */\ndiv.pp_default .pp_expand:hover { background: url(../public/images/prettyPhoto/default/sprite.png) 0 -56px no-repeat; cursor: pointer; } /* Expand button hover */\ndiv.pp_default .pp_contract { background: url(../public/images/prettyPhoto/default/sprite.png) 0 -84px no-repeat; cursor: pointer; width: 28px; height: 28px; } /* Contract button */\ndiv.pp_default .pp_contract:hover { background: url(../public/images/prettyPhoto/default/sprite.png) 0 -113px no-repeat; cursor: pointer; } /* Contract button hover */\ndiv.pp_default .pp_close { width: 30px; height: 30px; cursor: pointer; } /* Close button */\ndiv.pp_default #pp_full_res .pp_inline { color: #000; background-color: white; padding: 30px; } \n.pp_inline img {max-width: 100%; max-height: 100%; width: auto; height: auto;}\ndiv.pp_default .pp_gallery ul li a { background: url(../public/images/prettyPhoto/default/default_thumb.png) center center #f8f8f8; border:1px solid #aaa; }\ndiv.pp_default .pp_gallery ul li a:hover,\ndiv.pp_default .pp_gallery ul li.selected a { border-color: #fff; }\ndiv.pp_default .pp_social { margin-top: 7px;}\n\ndiv.pp_default .pp_gallery a.pp_arrow_previous,\ndiv.pp_default .pp_gallery a.pp_arrow_next { position: static; left: auto; }\ndiv.pp_default .pp_nav .pp_play,\ndiv.pp_default .pp_nav .pp_pause { background: url(../public/images/prettyPhoto/default/sprite.png) -51px 1px no-repeat; height:30px; width:30px; }\ndiv.pp_default .pp_nav .pp_pause { background-position: -51px -29px; }\ndiv.pp_default .pp_details { position: relative; }\ndiv.pp_default a.pp_arrow_previous,\ndiv.pp_default a.pp_arrow_next { height: 26px;  margin: -4px 0 0 0; width: 20px; }\ndiv.pp_default a.pp_arrow_next { left: 52px;} /* The next arrow in the bottom nav */\ndiv.pp_default .pp_content_container .pp_details { margin-top: 5px; }\ndiv.pp_default .pp_nav { clear: none; height: 30px; width: 110px; position: relative; }\ndiv.pp_default .pp_nav .currentTextHolder{ font-family: Georgia; font-style: italic; color:#999; font-size: 11px; left: 75px; line-height: 25px; margin: 0; padding: 0 0 0 10px; position: absolute; top: 2px; }\n\ndiv.pp_default .pp_close:hover, div.pp_default .pp_nav .pp_play:hover, div.pp_default .pp_nav .pp_pause:hover, div.pp_default .pp_arrow_next:hover, div.pp_default .pp_arrow_previous:hover { opacity:0.7; }\n\ndiv.pp_default .pp_description{ font-size: 11px; font-weight: bold; line-height: 14px; margin: 5px 50px 5px 0; }\n\n\ndiv.pp_default .pp_loaderIcon { background: url(../public/images/prettyPhoto/default/loader.gif) center center no-repeat; background-color: white;} /* Loader icon */\n\n\n/* ----------------------------------\n        Light Rounded Theme\n----------------------------------- */\n\n\ndiv.light_rounded .pp_top .pp_left { background: url(../public/images/prettyPhoto/light_rounded/sprite.png) -88px -53px no-repeat; } /* Top left corner */\ndiv.light_rounded .pp_top .pp_middle { background: #fff; } /* Top pattern/color */\ndiv.light_rounded .pp_top .pp_right { background: url(../public/images/prettyPhoto/light_rounded/sprite.png) -110px -53px no-repeat; } /* Top right corner */\n\ndiv.light_rounded .pp_content .ppt { color: #000; }\ndiv.light_rounded .pp_content_container .pp_left,\ndiv.light_rounded .pp_content_container .pp_right { background: #fff; }\ndiv.light_rounded .pp_content { background-color: #fff; } /* Content background */\ndiv.light_rounded .pp_next:hover { background: url(../public/images/prettyPhoto/light_rounded/btnNext.png) center right  no-repeat; cursor: pointer; } /* Next button */\ndiv.light_rounded .pp_previous:hover { background: url(../public/images/prettyPhoto/light_rounded/btnPrevious.png) center left no-repeat; cursor: pointer; } /* Previous button */\ndiv.light_rounded .pp_expand { background: url(../public/images/prettyPhoto/light_rounded/sprite.png) -31px -26px no-repeat; cursor: pointer; } /* Expand button */\ndiv.light_rounded .pp_expand:hover { background: url(../public/images/prettyPhoto/light_rounded/sprite.png) -31px -47px no-repeat; cursor: pointer; } /* Expand button hover */\ndiv.light_rounded .pp_contract { background: url(../public/images/prettyPhoto/light_rounded/sprite.png) 0 -26px no-repeat; cursor: pointer; } /* Contract button */\ndiv.light_rounded .pp_contract:hover { background: url(../public/images/prettyPhoto/light_rounded/sprite.png) 0 -47px no-repeat; cursor: pointer; } /* Contract button hover */\ndiv.light_rounded .pp_close { width: 75px; height: 22px; background: url(../public/images/prettyPhoto/light_rounded/sprite.png) -1px -1px no-repeat; cursor: pointer; } /* Close button */\ndiv.light_rounded .pp_details { position: relative; }\ndiv.light_rounded .pp_description { margin-right: 85px; }\ndiv.light_rounded #pp_full_res .pp_inline { color: #000; } \ndiv.light_rounded .pp_gallery a.pp_arrow_previous,\ndiv.light_rounded .pp_gallery a.pp_arrow_next { margin-top: 12px !important; }\ndiv.light_rounded .pp_nav .pp_play { background: url(../public/images/prettyPhoto/light_rounded/sprite.png) -1px -100px no-repeat; height: 15px; width: 14px; }\ndiv.light_rounded .pp_nav .pp_pause { background: url(../public/images/prettyPhoto/light_rounded/sprite.png) -24px -100px no-repeat; height: 15px; width: 14px; }\n\ndiv.light_rounded .pp_arrow_previous { background: url(../public/images/prettyPhoto/light_rounded/sprite.png) 0 -71px no-repeat; } /* The previous arrow in the bottom nav */\ndiv.light_rounded .pp_arrow_previous.disabled { background-position: 0 -87px; cursor: default; }\ndiv.light_rounded .pp_arrow_next { background: url(../public/images/prettyPhoto/light_rounded/sprite.png) -22px -71px no-repeat; } /* The next arrow in the bottom nav */\ndiv.light_rounded .pp_arrow_next.disabled { background-position: -22px -87px; cursor: default; }\n\ndiv.light_rounded .pp_bottom .pp_left { background: url(../public/images/prettyPhoto/light_rounded/sprite.png) -88px -80px no-repeat; } /* Bottom left corner */\ndiv.light_rounded .pp_bottom .pp_middle { background: #fff; } /* Bottom pattern/color */\ndiv.light_rounded .pp_bottom .pp_right { background: url(../public/images/prettyPhoto/light_rounded/sprite.png) -110px -80px no-repeat; } /* Bottom right corner */\n\ndiv.light_rounded .pp_loaderIcon { background: url(../public/images/prettyPhoto/light_rounded/loader.gif) center center no-repeat; } /* Loader icon */\n\n/* ----------------------------------\n        Dark Rounded Theme\n----------------------------------- */\n\ndiv.dark_rounded .pp_top .pp_left { background: url(../public/images/prettyPhoto/dark_rounded/sprite.png) -88px -53px no-repeat; } /* Top left corner */\ndiv.dark_rounded .pp_top .pp_middle { background: url(../public/images/prettyPhoto/dark_rounded/contentPattern.png) top left repeat; } /* Top pattern/color */\ndiv.dark_rounded .pp_top .pp_right { background: url(../public/images/prettyPhoto/dark_rounded/sprite.png) -110px -53px no-repeat; } /* Top right corner */\n\ndiv.dark_rounded .pp_content_container .pp_left { background: url(../public/images/prettyPhoto/dark_rounded/contentPattern.png) top left repeat-y; } /* Left Content background */\ndiv.dark_rounded .pp_content_container .pp_right { background: url(../public/images/prettyPhoto/dark_rounded/contentPattern.png) top right repeat-y; } /* Right Content background */\ndiv.dark_rounded .pp_content { background: url(../public/images/prettyPhoto/dark_rounded/contentPattern.png) top left repeat; } /* Content background */\ndiv.dark_rounded .pp_next:hover { background: url(../public/images/prettyPhoto/dark_rounded/btnNext.png) center right  no-repeat; cursor: pointer; } /* Next button */\ndiv.dark_rounded .pp_previous:hover { background: url(../public/images/prettyPhoto/dark_rounded/btnPrevious.png) center left no-repeat; cursor: pointer; } /* Previous button */\ndiv.dark_rounded .pp_expand { background: url(../public/images/prettyPhoto/dark_rounded/sprite.png) -31px -26px no-repeat; cursor: pointer; } /* Expand button */\ndiv.dark_rounded .pp_expand:hover { background: url(../public/images/prettyPhoto/dark_rounded/sprite.png) -31px -47px no-repeat; cursor: pointer; } /* Expand button hover */\ndiv.dark_rounded .pp_contract { background: url(../public/images/prettyPhoto/dark_rounded/sprite.png) 0 -26px no-repeat; cursor: pointer; } /* Contract button */\ndiv.dark_rounded .pp_contract:hover { background: url(../public/images/prettyPhoto/dark_rounded/sprite.png) 0 -47px no-repeat; cursor: pointer; } /* Contract button hover */\ndiv.dark_rounded .pp_close { width: 75px; height: 22px; background: url(../public/images/prettyPhoto/dark_rounded/sprite.png) -1px -1px no-repeat; cursor: pointer; } /* Close button */\ndiv.dark_rounded .pp_details { position: relative; }\ndiv.dark_rounded .pp_description { margin-right: 85px; }\ndiv.dark_rounded .currentTextHolder { color: #c4c4c4; }\ndiv.dark_rounded .pp_description { color: #fff; }\ndiv.dark_rounded #pp_full_res .pp_inline { color: #fff; }\ndiv.dark_rounded .pp_gallery a.pp_arrow_previous,\ndiv.dark_rounded .pp_gallery a.pp_arrow_next { margin-top: 12px !important; }\ndiv.dark_rounded .pp_nav .pp_play { background: url(../public/images/prettyPhoto/dark_rounded/sprite.png) -1px -100px no-repeat; height: 15px; width: 14px; }\ndiv.dark_rounded .pp_nav .pp_pause { background: url(../public/images/prettyPhoto/dark_rounded/sprite.png) -24px -100px no-repeat; height: 15px; width: 14px; }\n\ndiv.dark_rounded .pp_arrow_previous { background: url(../public/images/prettyPhoto/dark_rounded/sprite.png) 0 -71px no-repeat; } /* The previous arrow in the bottom nav */\ndiv.dark_rounded .pp_arrow_previous.disabled { background-position: 0 -87px; cursor: default; }\ndiv.dark_rounded .pp_arrow_next { background: url(../public/images/prettyPhoto/dark_rounded/sprite.png) -22px -71px no-repeat; } /* The next arrow in the bottom nav */\ndiv.dark_rounded .pp_arrow_next.disabled { background-position: -22px -87px; cursor: default; }\n\ndiv.dark_rounded .pp_bottom .pp_left { background: url(../public/images/prettyPhoto/dark_rounded/sprite.png) -88px -80px no-repeat; } /* Bottom left corner */\ndiv.dark_rounded .pp_bottom .pp_middle { background: url(../public/images/prettyPhoto/dark_rounded/contentPattern.png) top left repeat; } /* Bottom pattern/color */\ndiv.dark_rounded .pp_bottom .pp_right { background: url(../public/images/prettyPhoto/dark_rounded/sprite.png) -110px -80px no-repeat; } /* Bottom right corner */\n\ndiv.dark_rounded .pp_loaderIcon { background: url(../public/images/prettyPhoto/dark_rounded/loader.gif) center center no-repeat; } /* Loader icon */\n\n\n/* ----------------------------------\n        Dark Square Theme\n----------------------------------- */\n\ndiv.dark_square .pp_left ,\ndiv.dark_square .pp_middle,\ndiv.dark_square .pp_right,\ndiv.dark_square .pp_content { background: #000; }\n\ndiv.dark_square .currentTextHolder { color: #c4c4c4; }\ndiv.dark_square .pp_description { color: #fff; }\ndiv.dark_square .pp_loaderIcon { background: url(../public/images/prettyPhoto/dark_square/loader.gif) center center no-repeat; } /* Loader icon */\n\ndiv.dark_square .pp_expand { background: url(../public/images/prettyPhoto/dark_square/sprite.png) -31px -26px no-repeat; cursor: pointer; } /* Expand button */\ndiv.dark_square .pp_expand:hover { background: url(../public/images/prettyPhoto/dark_square/sprite.png) -31px -47px no-repeat; cursor: pointer; } /* Expand button hover */\ndiv.dark_square .pp_contract { background: url(../public/images/prettyPhoto/dark_square/sprite.png) 0 -26px no-repeat; cursor: pointer; } /* Contract button */\ndiv.dark_square .pp_contract:hover { background: url(../public/images/prettyPhoto/dark_square/sprite.png) 0 -47px no-repeat; cursor: pointer; } /* Contract button hover */\ndiv.dark_square .pp_close { width: 75px; height: 22px; background: url(../public/images/prettyPhoto/dark_square/sprite.png) -1px -1px no-repeat; cursor: pointer; } /* Close button */\ndiv.dark_square .pp_details { position: relative; }\ndiv.dark_square .pp_description { margin: 0 85px 0 0; }\ndiv.dark_square #pp_full_res .pp_inline { color: #fff; }\ndiv.dark_square .pp_gallery a.pp_arrow_previous,\ndiv.dark_square .pp_gallery a.pp_arrow_next { margin-top: 12px !important; }\ndiv.dark_square .pp_nav { clear: none; }\ndiv.dark_square .pp_nav .pp_play { background: url(../public/images/prettyPhoto/dark_square/sprite.png) -1px -100px no-repeat; height: 15px; width: 14px; }\ndiv.dark_square .pp_nav .pp_pause { background: url(../public/images/prettyPhoto/dark_square/sprite.png) -24px -100px no-repeat; height: 15px; width: 14px; }\n\ndiv.dark_square .pp_arrow_previous { background: url(../public/images/prettyPhoto/dark_square/sprite.png) 0 -71px no-repeat; } /* The previous arrow in the bottom nav */\ndiv.dark_square .pp_arrow_previous.disabled { background-position: 0 -87px; cursor: default; }\ndiv.dark_square .pp_arrow_next { background: url(../public/images/prettyPhoto/dark_square/sprite.png) -22px -71px no-repeat; } /* The next arrow in the bottom nav */\ndiv.dark_square .pp_arrow_next.disabled { background-position: -22px -87px; cursor: default; }\n\ndiv.dark_square .pp_next:hover { background: url(../public/images/prettyPhoto/dark_square/btnNext.png) center right  no-repeat; cursor: pointer; } /* Next button */\ndiv.dark_square .pp_previous:hover { background: url(../public/images/prettyPhoto/dark_square/btnPrevious.png) center left no-repeat; cursor: pointer; } /* Previous button */\n\n\n/* ----------------------------------\n        Light Square Theme\n----------------------------------- */\n\ndiv.light_square .pp_left ,\ndiv.light_square .pp_middle,\ndiv.light_square .pp_right,\ndiv.light_square .pp_content { background: #fff; }\n\ndiv.light_square .pp_content .ppt { color: #000; }\ndiv.light_square .pp_expand { background: url(../public/images/prettyPhoto/light_square/sprite.png) -31px -26px no-repeat; cursor: pointer; } /* Expand button */\ndiv.light_square .pp_expand:hover { background: url(../public/images/prettyPhoto/light_square/sprite.png) -31px -47px no-repeat; cursor: pointer; } /* Expand button hover */\ndiv.light_square .pp_contract { background: url(../public/images/prettyPhoto/light_square/sprite.png) 0 -26px no-repeat; cursor: pointer; } /* Contract button */\ndiv.light_square .pp_contract:hover { background: url(../public/images/prettyPhoto/light_square/sprite.png) 0 -47px no-repeat; cursor: pointer; } /* Contract button hover */\ndiv.light_square .pp_close { width: 75px; height: 22px; background: url(../public/images/prettyPhoto/light_square/sprite.png) -1px -1px no-repeat; cursor: pointer; } /* Close button */\ndiv.light_square .pp_details { position: relative; }\ndiv.light_square .pp_description { margin-right: 85px; }\ndiv.light_square #pp_full_res .pp_inline { color: #000; }\ndiv.light_square .pp_gallery a.pp_arrow_previous,\ndiv.light_square .pp_gallery a.pp_arrow_next { margin-top: 12px !important; }\ndiv.light_square .pp_nav .pp_play { background: url(../public/images/prettyPhoto/light_square/sprite.png) -1px -100px no-repeat; height: 15px; width: 14px; }\ndiv.light_square .pp_nav .pp_pause { background: url(../public/images/prettyPhoto/light_square/sprite.png) -24px -100px no-repeat; height: 15px; width: 14px; }\n\ndiv.light_square .pp_arrow_previous { background: url(../public/images/prettyPhoto/light_square/sprite.png) 0 -71px no-repeat; } /* The previous arrow in the bottom nav */\ndiv.light_square .pp_arrow_previous.disabled { background-position: 0 -87px; cursor: default; }\ndiv.light_square .pp_arrow_next { background: url(../public/images/prettyPhoto/light_square/sprite.png) -22px -71px no-repeat; } /* The next arrow in the bottom nav */\ndiv.light_square .pp_arrow_next.disabled { background-position: -22px -87px; cursor: default; }\n\ndiv.light_square .pp_next:hover { background: url(../public/images/prettyPhoto/light_square/btnNext.png) center right  no-repeat; cursor: pointer; } /* Next button */\ndiv.light_square .pp_previous:hover { background: url(../public/images/prettyPhoto/light_square/btnPrevious.png) center left no-repeat; cursor: pointer; } /* Previous button */\n\ndiv.light_square .pp_loaderIcon { background: url(../public/images/prettyPhoto/light_rounded/loader.gif) center center no-repeat; } /* Loader icon */\n\n\n/* ----------------------------------\n        Facebook style Theme\n----------------------------------- */\n\ndiv.facebook .pp_top .pp_left { background: url(../public/images/prettyPhoto/facebook/sprite.png) -88px -53px no-repeat; } /* Top left corner */\ndiv.facebook .pp_top .pp_middle { background: url(../public/images/prettyPhoto/facebook/contentPatternTop.png) top left repeat-x; } /* Top pattern/color */\ndiv.facebook .pp_top .pp_right { background: url(../public/images/prettyPhoto/facebook/sprite.png) -110px -53px no-repeat; } /* Top right corner */\n\ndiv.facebook .pp_content .ppt { color: #000; }\ndiv.facebook .pp_content_container .pp_left { background: url(../public/images/prettyPhoto/facebook/contentPatternLeft.png) top left repeat-y; } /* Content background */\ndiv.facebook .pp_content_container .pp_right { background: url(../public/images/prettyPhoto/facebook/contentPatternRight.png) top right repeat-y; } /* Content background */\ndiv.facebook .pp_content { background: #fff; } /* Content background */\ndiv.facebook .pp_expand { background: url(../public/images/prettyPhoto/facebook/sprite.png) -31px -26px no-repeat; cursor: pointer; } /* Expand button */\ndiv.facebook .pp_expand:hover { background: url(../public/images/prettyPhoto/facebook/sprite.png) -31px -47px no-repeat; cursor: pointer; } /* Expand button hover */\ndiv.facebook .pp_contract { background: url(../public/images/prettyPhoto/facebook/sprite.png) 0 -26px no-repeat; cursor: pointer; } /* Contract button */\ndiv.facebook .pp_contract:hover { background: url(../public/images/prettyPhoto/facebook/sprite.png) 0 -47px no-repeat; cursor: pointer; } /* Contract button hover */\ndiv.facebook .pp_close { width: 22px; height: 22px; background: url(../public/images/prettyPhoto/facebook/sprite.png) -1px -1px no-repeat; cursor: pointer; } /* Close button */\ndiv.facebook .pp_details { position: relative; }\ndiv.facebook .pp_description { margin: 0 37px 0 0; }\ndiv.facebook #pp_full_res .pp_inline { color: #000; } \ndiv.facebook .pp_loaderIcon { background: url(../public/images/prettyPhoto/facebook/loader.gif) center center no-repeat; } /* Loader icon */\n\ndiv.facebook .pp_arrow_previous { background: url(../public/images/prettyPhoto/facebook/sprite.png) 0 -71px no-repeat; height: 22px; margin-top: 0; width: 22px; } /* The previous arrow in the bottom nav */\ndiv.facebook .pp_arrow_previous.disabled { background-position: 0 -96px; cursor: default; }\ndiv.facebook .pp_arrow_next { background: url(../public/images/prettyPhoto/facebook/sprite.png) -32px -71px no-repeat; height: 22px; margin-top: 0; width: 22px; } /* The next arrow in the bottom nav */\ndiv.facebook .pp_arrow_next.disabled { background-position: -32px -96px; cursor: default; }\ndiv.facebook .pp_nav { margin-top: 0; }\ndiv.facebook .pp_nav p { font-size: 15px; padding: 0 3px 0 4px; }\ndiv.facebook .pp_nav .pp_play { background: url(../public/images/prettyPhoto/facebook/sprite.png) -1px -123px no-repeat; height: 22px; width: 22px; }\ndiv.facebook .pp_nav .pp_pause { background: url(../public/images/prettyPhoto/facebook/sprite.png) -32px -123px no-repeat; height: 22px; width: 22px; }\n\ndiv.facebook .pp_next:hover { background: url(../public/images/prettyPhoto/facebook/btnNext.png) center right no-repeat; cursor: pointer; } /* Next button */\ndiv.facebook .pp_previous:hover { background: url(../public/images/prettyPhoto/facebook/btnPrevious.png) center left no-repeat; cursor: pointer; } /* Previous button */\n\ndiv.facebook .pp_bottom .pp_left { background: url(../public/images/prettyPhoto/facebook/sprite.png) -88px -80px no-repeat; } /* Bottom left corner */\ndiv.facebook .pp_bottom .pp_middle { background: url(../public/images/prettyPhoto/facebook/contentPatternBottom.png) top left repeat-x; } /* Bottom pattern/color */\ndiv.facebook .pp_bottom .pp_right { background: url(../public/images/prettyPhoto/facebook/sprite.png) -110px -80px no-repeat; } /* Bottom right corner */\n\n\n/* ------------------------------------------------------------------------\n        DO NOT CHANGE\n------------------------------------------------------------------------- */\n\ndiv.pp_pic_holder a:focus { outline:none; }\n\ndiv.pp_overlay {\n    background: #000;\n    display: none;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 9999;\n}\n\ndiv.pp_pic_holder {\n    display: none;\n    position: absolute;\n    width: 100px;\n    z-index: 10000;\n}\n\n\n.pp_top {\n    height: 20px;\n    position: relative;\n}\n* html .pp_top { padding: 0 20px; }\n\n.pp_top .pp_left {\n    height: 20px;\n    left: 0;\n    position: absolute;\n    width: 20px;\n}\n.pp_top .pp_middle {\n    height: 20px;\n    left: 20px;\n    position: absolute;\n    right: 20px;\n}\n* html .pp_top .pp_middle {\n    left: 0;\n    position: static;\n}\n\n.pp_top .pp_right {\n    height: 20px;\n    left: auto;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 20px;\n}\n\n.pp_content { height: 40px; min-width: 40px; }\n* html .pp_content { width: 40px; }\n\n.pp_fade { display: none; }\n\n.pp_content_container {\n    position: relative;\n    text-align: left;\n    width: 100%;\n}\n\n.pp_content_container .pp_left { padding-left: 20px; }\n.pp_content_container .pp_right { padding-right: 20px; }\n\n.pp_content_container .pp_details {\n    float: left;\n    margin: 10px 0 2px 0;\n}\n.pp_description {\n    display: none;\n    margin: 0;\n}\n\n.pp_social { float: left; margin: 0; }\n.pp_social .facebook { float: left; margin-left: 5px; width: 55px; overflow: hidden; }\n.pp_social .twitter { float: left; }\n\n.pp_nav {\n    clear: right;\n    float: left;\n    margin: 3px 10px 0 0;\n}\n\n.pp_nav p {\n    float: left;\n    margin: 2px 4px;\n    white-space: nowrap;\n}\n\n.pp_nav .pp_play,\n.pp_nav .pp_pause {\n    float: left;\n    margin-right: 4px;\n    text-indent: -10000px;\n}\n\na.pp_arrow_previous,\na.pp_arrow_next {\n    display: block;\n    float: left;\n    height: 15px;\n    margin-top: 3px;\n    overflow: hidden;\n    width: 14px;\n}\n\n.pp_hoverContainer {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 2000;\n}\n\n.pp_gallery {\n    display: none;\n    left: 50%;\n    margin-top: -50px;\n    position: absolute;\n    z-index: 10000;\n}\n\n.pp_gallery div {\n    float: left;\n    overflow: hidden;\n    position: relative;\n}\n\n.pp_gallery ul {\n    float: left;\n    height: 35px;\n    margin: 0 0 0 5px;\n    padding: 0;\n    position: relative;\n    white-space: nowrap;\n}\n\n.pp_gallery ul a {\n    border: 1px #000 solid;\n    border: 1px rgba(0,0,0,0.5) solid;\n    display: block;\n    float: left;\n    height: 33px;\n    overflow: hidden;\n}\n\n.pp_gallery ul a:hover,\n.pp_gallery li.selected a { border-color: #fff; }\n\n.pp_gallery ul a img { border: 0; }\n\n.pp_gallery li {\n    display: block;\n    float: left;\n    margin: 0 5px 0 0;\n    padding: 0;\n}\n\n.pp_gallery li.default a {\n    background: url(../public/images/prettyPhoto/facebook/default_thumbnail.gif) 0 0 no-repeat;\n    display: block;\n    height: 33px;\n    width: 50px;\n}\n\n.pp_gallery li.default a img { display: none; }\n\n.pp_gallery .pp_arrow_previous,\n.pp_gallery .pp_arrow_next {\n    margin-top: 7px !important;\n}\n\na.pp_next {\n    background: url(../public/images/prettyPhoto/light_rounded/btnNext.png) 10000px 10000px no-repeat;\n    display: block;\n    float: right;\n    height: 100%;\n    text-indent: -10000px;\n    width: 49%;\n}\n\na.pp_previous {\n    background: url(../public/images/prettyPhoto/light_rounded/btnNext.png) 10000px 10000px no-repeat;\n    display: block;\n    float: left;\n    height: 100%;\n    text-indent: -10000px;\n    width: 49%;\n}\n\na.pp_expand,\na.pp_contract {\n    cursor: pointer;\n    display: none;\n    height: 20px;\t\n    position: absolute;\n    right: 30px;\n    text-indent: -10000px;\n    top: 10px;\n    width: 20px;\n    z-index: 20000;\n}\n\na.pp_close {\n    position: absolute; right: 0; top: 0; \n    display: block;\n    line-height:22px;\n}\n\n.pp_bottom {\n    height: 20px;\n    position: relative;\n}\n* html .pp_bottom { padding: 0 20px; }\n\n.pp_bottom .pp_left {\n    height: 20px;\n    left: 0;\n    position: absolute;\n    width: 20px;\n}\n.pp_bottom .pp_middle {\n    height: 20px;\n    left: 20px;\n    position: absolute;\n    right: 20px;\n}\n* html .pp_bottom .pp_middle {\n    left: 0;\n    position: static;\n}\n\n.pp_bottom .pp_right {\n    height: 20px;\n    left: auto;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 20px;\n}\n\n.pp_loaderIcon {\n    display: block;\n    height: 24px;\n    left: 50%;\n    margin: -12px 0 0 -12px;\n    position: absolute;\n    top: 50%;\n    width: 24px;\n}\n\n#pp_full_res {\n    line-height: 1 !important;\n}\n\n#pp_full_res .pp_inline {\n    text-align: left;\n}\n\n#pp_full_res .pp_inline p { margin: 0 0 15px 0; }\n\ndiv.ppt {\n    color: #fff;\n    display: none !important;\n    font-size: 17px;\n    margin: 0 0 5px 15px;\n    z-index: 9999;\n}\n\n@media screen and (max-width: 400px) {\t\n    #pp_full_res iframe {width: 100%; height: 100%;}\n    .pp_pic_holder.pp_default { width: 100%!important; left: 0!important; overflow: hidden; }\n    div.pp_default .pp_content_container .pp_left { padding-left: 0!important; }\n    div.pp_default .pp_content_container .pp_right { padding-right: 0!important; }\n    .pp_content { width: 100%!important;}\n    .pp_fade { width: 100%!important; height: 100%!important; }\n    a.pp_expand, a.pp_contract, .pp_hoverContainer, .pp_gallery, .pp_top, .pp_bottom { display: none!important; }\n    #pp_full_res img { width: 100%!important; height: auto!important; max-height: none;}\n    .pp_details { width: 94%!important; padding-left: 3%; padding-right: 4%; padding-top: 10px; padding-bottom: 10px; margin-top: -2px!important; }\n    a.pp_close { right: 10px!important; top: 10px!important; }\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./css/sm-clean.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./css/sm-clean.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".sm-clean {\n    background: #eeeeee;\n    border-radius: 5px;\n}\n.sm-clean a, .sm-clean a:hover, .sm-clean a:focus, .sm-clean a:active {\n    padding: 13px 20px;\n    /* make room for the toggle button (sub indicator) */\n    padding-right: 58px;\n    font-size: 18px;\n    font-weight: normal;\n    line-height: 24px;\n    text-decoration: none;\n}\n.sm-clean a.disabled {\n    color: #bbbbbb;\n}\n.sm-clean a span.sub-arrow {\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    left: auto;\n    right: -45px;\n    width: 34px;\n    height: 34px;\n    overflow: hidden;\n    font: bold 16px/34px monospace !important;\n    text-align: center;\n    text-shadow: none;\n    border-radius: 5px;\n}\n.sm-clean a.highlighted span.sub-arrow:before {\n    display: block;\n    content: '-';\n}\n.sm-clean > li:first-child > a, .sm-clean > li:first-child > :not(ul) a {\n    border-radius: 5px 5px 0 0;\n}\n.sm-clean > li:last-child > a, .sm-clean > li:last-child > *:not(ul) a, .sm-clean > li:last-child > ul,\n.sm-clean > li:last-child > ul > li:last-child > a, .sm-clean > li:last-child > ul > li:last-child > *:not(ul) a, .sm-clean > li:last-child > ul > li:last-child > ul,\n.sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > a, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > *:not(ul) a, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul,\n.sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > a, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > *:not(ul) a, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul,\n.sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > a, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > *:not(ul) a, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul {\n    border-radius: 0 0 5px 5px;\n}\n.sm-clean > li:last-child > a.highlighted, .sm-clean > li:last-child > *:not(ul) a.highlighted,\n.sm-clean > li:last-child > ul > li:last-child > a.highlighted, .sm-clean > li:last-child > ul > li:last-child > *:not(ul) a.highlighted,\n.sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > a.highlighted, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > *:not(ul) a.highlighted,\n.sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > a.highlighted, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > *:not(ul) a.highlighted,\n.sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > a.highlighted, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > *:not(ul) a.highlighted {\n    border-radius: 0;\n}\n.sm-clean > li:first-child {\n    border-top: 0;\n}\n.sm-clean ul {\n    padding-left: 35px;\n}\n.sm-clean ul a, .sm-clean ul a:hover, .sm-clean ul a:focus, .sm-clean ul a:active {\n    font-size: 16px;\n}\n.sm-clean ul ul ul a,\n.sm-clean ul ul ul a:hover,\n.sm-clean ul ul ul a:focus,\n.sm-clean ul ul ul a:active {\n    border-left: 24px solid transparent;\n}\n.sm-clean ul ul ul ul a,\n.sm-clean ul ul ul ul a:hover,\n.sm-clean ul ul ul ul a:focus,\n.sm-clean ul ul ul ul a:active {\n    border-left: 32px solid transparent;\n}\n.sm-clean ul ul ul ul ul a,\n.sm-clean ul ul ul ul ul a:hover,\n.sm-clean ul ul ul ul ul a:focus,\n.sm-clean ul ul ul ul ul a:active {\n    border-left: 40px solid transparent;\n}\n\n.main-menu ul \n{\n    width: 12em; /* fixed width only please - you can use the \"subMenusMinWidth\"/\"subMenusMaxWidth\" script options to override this if you like */\n}\n\n.sm-clean a, .sm-clean a:hover, .sm-clean a:focus, .sm-clean a:active\n{\n    padding-right: 0;\n    padding-left: 0;\n}\n\na.has-submenu\n{\n    display: inline-block;\n}", "",{"version":3,"sources":["sm-clean.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IAKnB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,oDAAoD;IACpD,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,qBAAqB;AACzB;AACA;IACI,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,iBAAiB;IACjB,UAAU;IACV,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,yCAAyC;IACzC,kBAAkB;IAClB,iBAAiB;IAKjB,kBAAkB;AACtB;AACA;IACI,cAAc;IACd,YAAY;AAChB;AACA;IAKI,0BAA0B;AAC9B;AACA;;;;;IASI,0BAA0B;AAC9B;AACA;;;;;IASI,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;;;;IAII,mCAAmC;AACvC;AACA;;;;IAII,mCAAmC;AACvC;AACA;;;;IAII,mCAAmC;AACvC;;AAEA;;IAEI,WAAW,EAAE,gIAAgI;AACjJ;;AAEA;;IAEI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;;IAEI,qBAAqB;AACzB","file":"sm-clean.css","sourcesContent":[".sm-clean {\n    background: #eeeeee;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    -ms-border-radius: 5px;\n    -o-border-radius: 5px;\n    border-radius: 5px;\n}\n.sm-clean a, .sm-clean a:hover, .sm-clean a:focus, .sm-clean a:active {\n    padding: 13px 20px;\n    /* make room for the toggle button (sub indicator) */\n    padding-right: 58px;\n    font-size: 18px;\n    font-weight: normal;\n    line-height: 24px;\n    text-decoration: none;\n}\n.sm-clean a.disabled {\n    color: #bbbbbb;\n}\n.sm-clean a span.sub-arrow {\n    position: absolute;\n    top: 50%;\n    margin-top: -17px;\n    left: auto;\n    right: -45px;\n    width: 34px;\n    height: 34px;\n    overflow: hidden;\n    font: bold 16px/34px monospace !important;\n    text-align: center;\n    text-shadow: none;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    -ms-border-radius: 5px;\n    -o-border-radius: 5px;\n    border-radius: 5px;\n}\n.sm-clean a.highlighted span.sub-arrow:before {\n    display: block;\n    content: '-';\n}\n.sm-clean > li:first-child > a, .sm-clean > li:first-child > :not(ul) a {\n    -webkit-border-radius: 5px 5px 0 0;\n    -moz-border-radius: 5px 5px 0 0;\n    -ms-border-radius: 5px 5px 0 0;\n    -o-border-radius: 5px 5px 0 0;\n    border-radius: 5px 5px 0 0;\n}\n.sm-clean > li:last-child > a, .sm-clean > li:last-child > *:not(ul) a, .sm-clean > li:last-child > ul,\n.sm-clean > li:last-child > ul > li:last-child > a, .sm-clean > li:last-child > ul > li:last-child > *:not(ul) a, .sm-clean > li:last-child > ul > li:last-child > ul,\n.sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > a, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > *:not(ul) a, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul,\n.sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > a, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > *:not(ul) a, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul,\n.sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > a, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > *:not(ul) a, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul {\n    -webkit-border-radius: 0 0 5px 5px;\n    -moz-border-radius: 0 0 5px 5px;\n    -ms-border-radius: 0 0 5px 5px;\n    -o-border-radius: 0 0 5px 5px;\n    border-radius: 0 0 5px 5px;\n}\n.sm-clean > li:last-child > a.highlighted, .sm-clean > li:last-child > *:not(ul) a.highlighted,\n.sm-clean > li:last-child > ul > li:last-child > a.highlighted, .sm-clean > li:last-child > ul > li:last-child > *:not(ul) a.highlighted,\n.sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > a.highlighted, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > *:not(ul) a.highlighted,\n.sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > a.highlighted, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > *:not(ul) a.highlighted,\n.sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > a.highlighted, .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > ul > li:last-child > *:not(ul) a.highlighted {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    -ms-border-radius: 0;\n    -o-border-radius: 0;\n    border-radius: 0;\n}\n.sm-clean > li:first-child {\n    border-top: 0;\n}\n.sm-clean ul {\n    padding-left: 35px;\n}\n.sm-clean ul a, .sm-clean ul a:hover, .sm-clean ul a:focus, .sm-clean ul a:active {\n    font-size: 16px;\n}\n.sm-clean ul ul ul a,\n.sm-clean ul ul ul a:hover,\n.sm-clean ul ul ul a:focus,\n.sm-clean ul ul ul a:active {\n    border-left: 24px solid transparent;\n}\n.sm-clean ul ul ul ul a,\n.sm-clean ul ul ul ul a:hover,\n.sm-clean ul ul ul ul a:focus,\n.sm-clean ul ul ul ul a:active {\n    border-left: 32px solid transparent;\n}\n.sm-clean ul ul ul ul ul a,\n.sm-clean ul ul ul ul ul a:hover,\n.sm-clean ul ul ul ul ul a:focus,\n.sm-clean ul ul ul ul ul a:active {\n    border-left: 40px solid transparent;\n}\n\n.main-menu ul \n{\n    width: 12em; /* fixed width only please - you can use the \"subMenusMinWidth\"/\"subMenusMaxWidth\" script options to override this if you like */\n}\n\n.sm-clean a, .sm-clean a:hover, .sm-clean a:focus, .sm-clean a:active\n{\n    padding-right: 0;\n    padding-left: 0;\n}\n\na.has-submenu\n{\n    display: inline-block;\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./style.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./style.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./css/normalize.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./css/normalize.css");
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./css/clear.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./css/clear.css");
var ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./css/sm-clean.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./css/sm-clean.css");
var ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./css/owl.theme.default.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./css/owl.theme.default.min.css");
var ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(/*! -!./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./css/prettyPhoto.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./css/prettyPhoto.css");
var ___CSS_LOADER_AT_RULE_IMPORT_5___ = __webpack_require__(/*! -!./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./css/common.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./css/common.css");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ./public/images/close-left-arrow.png */ "./public/images/close-left-arrow.png");
var ___CSS_LOADER_URL_PURE_IMPORT_1___ = __webpack_require__(/*! ./public/images/nav_left.png */ "./public/images/nav_left.png");
var ___CSS_LOADER_URL_PURE_IMPORT_2___ = __webpack_require__(/*! ./public/images/nav_right.png */ "./public/images/nav_right.png");
var ___CSS_LOADER_URL_PURE_IMPORT_3___ = __webpack_require__(/*! ./public/images/close.png */ "./public/images/close.png");
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_5___);
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
var ___CSS_LOADER_URL_IMPORT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_1___);
var ___CSS_LOADER_URL_IMPORT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_2___);
var ___CSS_LOADER_URL_IMPORT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_3___);
// Module
exports.push([module.i, "/*------------------------------------------------------------------\n\n[Table of contents]\n1. 3rd Part CSS Libraries\n2. Global CSS\n3. Left Part Content (Sidebar) CSS\n    3.1. Menu CSS\n4. Right Part Content CSS\n5. Home Section CSS\n6. Service Section CSS\n7. Portfolio Section CSS\n    7.1 Pretty Photo CSS\n    7.2 Single Portfolio CSS\n    7.3 Image Slider CSS\n8. Resume Section CSS\n9. Skills Section CSS\n10. Contact Section CSS\n11. Responsive CSS\n\n-------------------------------------------------------------------*/\n\n\n/* ===================================\n    1. 3rd Part CSS Libraries\n====================================== */\n/* @import url(\"css/owl.carousel.min.css\"); */\n\n\n/* ===================================\n    2. Global CSS\n====================================== */\n\n*,\n::after,\n::before {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    font-size: 15px;\n    line-height: 30px;\n    font-weight: 400;\n    color: #9B8347;\n    background-color: #fff;\n    overflow-x: hidden;\n}\n\nbody a {\n    text-decoration: none;\n    color: #000000;\n    transition: color .3s linear;\n}\n\nbody a:hover {\n    color: #acacac;\n}\n\nbody img {\n    max-width: 100%;\n    max-height: 100%;\n    width: auto;\n    height: auto;\n    display: block;\n}\n\n.doc-loader {\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    z-index: 99999;\n    background-color: #0e1111;\n}\n\n.doc-loader img {\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\np {\n    margin-bottom: 30px;\n}\n\n.content-1300 {\n    max-width: 1300px;\n}\n\n.section-info {\n    font-size: 22px;\n    line-height: 35px;\n}\n\na.button {\n    display: inline-block;\n    color: #9B8347;\n    border: 2px solid #d4af37;\n    text-align: center;\n    padding: 12px 38px;\n    cursor: pointer;\n    vertical-align: middle;\n    text-decoration: none;\n    border-radius: 50px;\n    transition: all .2s linear;\n}\n\na.button:active {\n    position: relative;\n    top: 1px;\n}\n\na.button:hover {\n    color: white;\n    background-color: #d4af37;\n}\n\n\n/* ===================================\n    3. Left Part Content (Sidebar) CSS\n====================================== */\n\n.content-left {\n    position: fixed;\n    width: 380px;\n    background-color: #0e1111;\n    height: 100vh;\n    z-index: 1;\n}\n\n.content-left::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    background-color: #554247;\n}\n\n.content-left::-webkit-scrollbar {\n    width: 7px;\n    background-color: #554247;\n}\n\n.content-left::-webkit-scrollbar-thumb {\n    background-color: #d4af37;\n}\n\n.content-left-wrapper {\n    padding-left: 75px;\n    position: relative;\n}\n\n.toggle-holder {\n    position: fixed;\n    top: 30px;\n    left: 30px;\n    z-index: 3;\n}\n\n#toggle {\n    height: 23px;\n    width: 30px;\n    position: relative;\n}\n\n#toggle:hover {\n    cursor: pointer;\n}\n\n#toggle:before,\n#toggle:after {\n    content: '';\n    height: 3px;\n    width: 30px;\n    position: absolute;\n    transform-origin: 50% 50%;\n    transition: all 0.25s;\n    top: 8px;\n    background-color: #fff;\n}\n\n#toggle:before {\n    transform: translate3d(0, -8px, 0px);\n    width: 21px;\n    margin-left: 0;\n}\n\n#toggle:hover:before {\n    margin-left: 9px;\n\n}\n\n#toggle.on:before {\n    transform: rotate3d(0, 0, 1, 45deg) translate3d(0, 0, 0);\n    background-color: #fff;\n    margin-left: 0;\n    width: 26px;\n}\n\n#toggle.on:after {\n    transform: rotate3d(0, 0, 1, -45deg);\n    background-color: #fff;\n    width: 26px;\n}\n\n#toggle:after {\n    transform: translate3d(0, 8px, 0);\n}\n\n#toggle .menu-line {\n    width: 13px;\n    height: 3px;\n    position: absolute;\n    transition: all 0.25s;\n    margin-left: 0;\n    top: 8px;\n    background-color: #fff;\n}\n\n#toggle:hover .menu-line {\n    margin-left: 17px;\n}\n\n#toggle.on .menu-line {\n    opacity: 0;\n}\n\n.top-pagination {\n    position: relative;\n    z-index: 2;\n    padding-top: 150px;\n}\n\n.top-pagination > div {\n    display: inline-block;\n    font-weight: 700;\n    vertical-align: top;\n}\n\n.current-num {\n    width: 25px;\n    position: relative;\n    height: 30px;\n    color: #d4af37;\n}\n\n.current-num span {\n    position: absolute;\n    left: 0;\n}\n\n.total-pages-num {\n    color: #fff;\n}\n\n.pagination-div {\n    position: relative;\n    width: 100px;\n    height: 30px;\n    margin-right: 8px;\n}\n\n.pagination-div:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    height: 3px;\n    width: 100%;\n    background-color: #fff;\n    top: 12px;\n}\n\n.my-info-wrapper {\n    padding-top: 110px;\n}\n\n.my-info {\n    margin-bottom: 30px;\n}\n\n.my-info > p {\n    margin-bottom: 0;\n}\n\n.my-info-title {\n    font-size: 12px;\n    line-height: 100%;\n    color: #d4af37;\n    letter-spacing: 5px;\n}\n\n.my-info-content {\n    color: #9B8347;\n}\n\nimg.my-info-signature {\n    width: 215px;\n    padding-top: 35px;\n    padding-bottom: 30px;\n}\n\n.big-num {\n    position: fixed;\n    width: 380px;\n    left: 0;\n    bottom: 30px;\n    padding-left: 75px;\n    z-index: 1;\n}\n\n.current-big-num {\n    font-size: 160px;\n    -webkit-text-stroke: 3px #d4af37;\n    color: transparent;\n    font-weight: 800;\n    line-height: 100%;\n    letter-spacing: -4px;\n    position: relative;\n    margin-top: 20px;\n    z-index: 2;\n}\n\n.icon-scroll,\n.icon-scroll:before {\n    position: absolute;\n    right: -18px;\n}\n\n.icon-scroll {\n    width: 38px;\n    height: 60px;\n    margin-left: -20px;\n    bottom: 25px;\n    margin-top: -35px;\n    box-shadow: inset 0 0 0 3px #d4af37;\n    border-radius: 25px;\n    transition: right .5s;\n}\n\n.icon-scroll:before {\n    content: '';\n    width: 8px;\n    height: 8px;\n    background: #d4af37;\n    margin-left: -4px;\n    top: 8px;\n    border-radius: 4px;\n    -webkit-animation-duration: 1.5s;\n    animation-duration: 1.5s;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-name: scroll;\n    animation-name: scroll;\n    left: 50%;\n}\n\n.icon-scroll:after {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    background-color: #0e1111;\n    width: 58px;\n    height: 80px;\n    border-radius: 25px;\n    transform: translate(-10px, -10px);\n    transition: all .3s;\n}\n\n@-webkit-keyframes scroll {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n        transform: translateY(35px);\n    }\n}\n\n@keyframes scroll {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n        transform: translateY(35px);\n    }\n}\n\n.open .icon-scroll {\n    right: 30px;\n    z-index: 1;\n}\n\n.open .icon-scroll:after {\n    background-color: transparent;\n}\n\n\n/* ===================================\n    3.1. Menu CSS\n====================================== */\n\n.menu-wrapper {\n    padding-top: 150px;\n}\n\n.menu-holder {\n    padding: 120px 50px 0 75px;\n    background-color: #9B8347;\n    width: 380px;\n    height: 100%;\n    min-height: 100vh;\n    top: 0;\n    left: 0;\n    position: absolute;\n    transform: translateX(-380px);\n    transition: transform .3s linear;\n    z-index: 1;\n}\n\n.open .menu-holder {\n    transform: translateX(0);\n}\n\n.main-menu.sm-clean {\n    background-color: transparent;\n    display: inline-block;\n}\n\n.sm-clean a {\n    position: relative;\n}\n\n.sm-clean a,\n.sm-clean a:hover,\n.sm-clean a:focus,\n.sm-clean a:active {\n    color: #ffffff;\n    padding: 5px 0;\n    font-size: 28px;\n    line-height: 50px;\n    font-weight: 700;\n}\n\n.sm-clean a:after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 16px;\n    background-color: #d4af37;\n    transition: width .3s;\n    position: absolute;\n    left: -5%;\n    bottom: 7px;\n    z-index: -1;\n}\n\n.main-menu.sm-clean .sub-menu li a:after {\n    height: 3px;\n    bottom: 20px;\n}\n\n.sm-clean a.current:after,\n.sm-clean a:hover:after,\n.sm-clean a:active:after,\n.sm-clean a.highlighted:after,\n.sm-clean ul a:hover:after,\n.sm-clean ul a:active:after,\n.sm-clean ul a.highlighted:after,\n.sm-clean li.current > a:after {\n    width: 110%;\n}\n\n.sm-clean a span.sub-arrow {\n    color: #d4af37;\n}\n\n.main-menu.sm-clean .sub-menu li a {\n    color: #848484;\n    text-transform: uppercase;\n    font-size: 14px;\n}\n\n\n/* ===================================\n    4. Right Part Content CSS\n====================================== */\n\n.content-right {\n    margin-left: 380px;\n    width: calc(100% - 380px);\n}\n\n.content-right-wrapper > div:last-of-type {\n    padding-bottom: 150px;\n}\n\n.section {\n    background-color: #0e1111;\n    position: relative;\n    padding-top: 150px;\n}\n\n.section-wrapper {\n    background-color: #0e1111;\n    padding-left: 5%;\n    padding-right: 5%;\n}\n\n.full-width-section.section {\n    padding: 0;\n}\n\n.full-width-section .section-wrapper {\n    padding: 0 0 0 5%;\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    display: -webkit-flex;\n    align-items: center;\n    background-color: #fff;\n}\n\nh2.section-title {\n    font-size: 30px;\n    line-height: 100%;\n    margin-bottom: 30px;\n    padding-top: 0;\n}\n\n\n/* ===================================\n    5. Home Section CSS\n====================================== */\n\n.home-left-part {\n    flex: 0 0 370px;\n    margin-right: 5%;\n}\n\n.site-des {\n    font-size: 28px;\n    color: #492d31;\n}\n\nh1.entry-title {\n    font-size: 54px;\n    line-height: 68px;\n    font-weight: 800;\n    color: #0e1111;\n}\n\n.site-info {\n    margin-top: 25px;\n}\n\n.social-links {\n    margin-top: 10vh;\n    margin-bottom: -5px;\n}\n\n.social-links a {\n    font-size: 12px;\n    color: #0e1111;\n    letter-spacing: 5px;\n    margin-right: 30px;\n}\n\n.social-links a:last-of-type {\n    margin-right: 0;\n}\n\n\n/* ===================================\n    6. Service Section CSS\n====================================== */\n\n#service {\n  height: 100vh;\n}\n\n.services-wrapper {\n    display: flex;\n    display: -webkit-flex;\n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;\n}\n\n.service-holder {\n    padding: 36px;\n    width: 47%;\n    margin-right: 6%;\n    margin-bottom: 6%;\n}\n\n.service-holder img {\n    width: 80px;\n    margin-bottom: 30px;\n}\n\n.service-title {\n    font-size: 28px;\n    line-height: 42px;\n    color: #d4af37;\n    font-weight: 700;\n}\n\n.button-group-wrapper {\n    margin-top: 50px;\n}\n\n.button-group-wrapper > a {\n    margin-right: 1vw;\n}\n\n.button-group-wrapper > a:last-of-type {\n    margin-right: 0;\n}\n\n\n\n/* ===================================\n    7. Portfolio Section CSS\n====================================== */\n\n.category-filter {\n    position: absolute;\n    right: 0;\n    top: -20px;\n    z-index: 1;\n    width: 25px;\n    height: 15px;\n    cursor: pointer;\n    transition: all .5s ease;\n}\n\n.category-filter.hide {\n    opacity: 0;\n    transform: translateY(70px);\n}\n\n.category-filter-list > div {\n    margin-bottom: 5px;\n}\n\n.category-filter-list > div:last-of-type {\n    margin-bottom: 0;\n}\n\n.category-filter-icon {\n    width: 20px;\n    height: 3px;\n    background-color: #d4af37;\n    float: right;\n    transition: width .3s ease;\n}\n\n.category-filter:hover .category-filter-icon,\n.category-filter.filter-open .category-filter-icon {\n    width: 24px;\n}\n\n.category-filter-icon:after {\n    content: \"\";\n    display: block;\n    width: 10px;\n    height: 3px;\n    background-color: #d4af37;\n    transform: translate(-5px,8px);\n    transition: transform .3s ease;\n}\n\n.category-filter:hover .category-filter-icon:after,\n.category-filter.filter-open .category-filter-icon:after {\n    transform: translate(4px,8px);\n}\n\n.category-filter-icon:before {\n    content: \"\";\n    display: block;\n    width: 10px;\n    height: 3px;\n    background-color: #d4af37;\n    transform: translate(10px,11px);\n    transition: transform .3s ease;\n}\n\n.category-filter:hover .category-filter-icon:before,\n.category-filter.filter-open .category-filter-icon:before {\n    transform: translate(14px,11px);\n}\n\n.category-filter-list {\n    background-color: #0e1111;\n    padding: 24px 20px;\n    width: 110px;\n    display: none;\n    position: absolute;\n    right: 0;\n    top: 15px;\n    font-size: 13px;\n    line-height: 22px;\n    color: #9B8347;\n    z-index: 1;\n    cursor: pointer;\n    transition: opacity .5s, transform .5s;\n}\n\n.category-filter-list.hide {\n    transform: translateY(70px);\n    opacity: 0;\n}\n\n.category-filter-list .button.is-checked {\n    color: #d4af37;\n}\n\n.isotope.no-transition,\n.isotope.no-transition .isotope-item,\n.isotope .isotope-item.no-transition {\n    transition-duration: 0s;\n}\n\n.grid {\n    width: calc(100% + 60px);\n    margin-left: -30px;\n    position: relative;\n    display: block;\n    overflow: hidden;\n}\n\n.grid-item {\n    float: left;\n    font-size: 0;\n    line-height: 0;\n    box-sizing:border-box;\n    -moz-box-sizing:border-box;\n    -webkit-box-sizing:border-box;\n    overflow: hidden;\n    border: 30px solid transparent;\n    width: 50%;\n    transition: opacity .3s;\n}\n\n.grid-item img {\n    display: block;\n    width: 100%;\n    height: auto;\n    max-height: none;\n    max-width: none;\n}\n\n.grid-sizer,\n.grid-item {\n    width: calc(100% / 3);\n}\n\n.grid-item.p-one {\n    width: 100%;\n}\n\n.grid-item.p-one-third {\n    width: calc(100% / 3);\n}\n\n.grid-item.p-two-third {\n    width: calc(200% / 3);\n}\n\n.portfolio-text-holder {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    font-size: 20px;\n    background-color: #d4af37;\n    padding: 20px;\n    transform: translateX(-100%);\n    transition: transform .3s ease;\n}\n\n.grid-item a.item-link:hover .portfolio-text-holder,\n.grid-item.portfolio-content-loading a.item-link .portfolio-text-holder {\n    transform: translateX(0);\n}\n\n#portfolio-grid.portfoio-items-mask .grid-item {\n    opacity: 0.2;\n}\n\n.grid-item.portfolio-content-loading {\n    opacity: 1 !important;\n}\n\n.portfolio-text-wrapper {\n    position: absolute;\n    left: 30px;\n    bottom: 0;\n}\n\n.portfolio-text {\n    font-size: 28px;\n    line-height: 100%;\n    font-weight: 700;\n    color: #9B8347;\n    margin-bottom: 0;\n    padding-bottom: 5px;\n}\n\n.portfolio-cat {\n    font-size: 15px;\n    color: #9B8347;\n    line-height: 100%;\n}\n\n.portfolio-cat:before {\n    content: \"\";\n    display: inline-block;\n    width: 25px;\n    height: 1px;\n    background-color: #9B8347;\n    vertical-align: 4px;\n    margin-right: 5px;\n}\n\n.portfolio-load-content-holder {\n    opacity: 0;\n    transform: translateY(70px);\n    transition: all .5s ease;\n}\n\n.portfolio-load-content-holder.show {\n    transform: translateY(0);\n    opacity: 1;\n}\n\n.portfolio-load-content-holder.show.viceversa {\n    opacity: 0;\n    transform: translateY(70px);\n}\n\n.portfolio-content-wrapper {\n    display: none;\n}\n\n.portfolio-content-wrapper.show {\n    display: block;\n}\n\n.close-icon {\n    background-image: url(" + ___CSS_LOADER_URL_IMPORT_0___ + ");\n    background-repeat: no-repeat;\n    width: 70px;\n    height: 70px;\n    display: inline-block;\n    background-color: rgb(243, 123, 131);\n    border-radius: 5px;\n    margin-bottom: 20px;\n    background-size: 70px;\n    transition: all 0.3s ease;\n    cursor: pointer;\n}\n\n.close-icon:hover {\n    background-position: -5px 0;\n}\n\n#portfolio-grid {\n    transition: all .5s ease;\n    opacity: 1;\n    transform: translateY(0px);\n}\n\n#portfolio-grid.hide {\n    opacity: 0;\n    transform: translateY(70px);\n}\n\n.grid-item a.item-link.portfolio-content-loading:after,\n.ajax-portfolio.portfolio-content-loading .portfolio-text-holder {\n    opacity: 1;\n}\n\n\n/* ===================================\n    7.1 Pretty Photo CSS\n====================================== */\n\ndiv.pp_default .pp_loaderIcon {\n    display: none !important;\n}\n\ndiv.pp_default a.pp_arrow_previous {\n    background-image: url(" + ___CSS_LOADER_URL_IMPORT_1___ + ");\n    background-size: 20px 20px;\n    width: 20px;\n    height: 20px;\n    margin-top: 5px;\n    font-size: 0;\n    line-height: 0;\n    text-indent: -99999999px;\n    transition: transform .3s ease;\n}\n\ndiv.pp_default a.pp_arrow_next {\n    background-image: url(" + ___CSS_LOADER_URL_IMPORT_2___ + ");\n    background-size: 20px 20px;\n    width: 20px;\n    height: 20px;\n    margin-top: 5px;\n    margin-left: 10px;\n    font-size: 0;\n    line-height: 0;\n    text-indent: -99999999px;\n    transition: transform .3s ease;\n}\n\ndiv.pp_default a.pp_arrow_previous:hover {\n    transform: translateX(-5px);\n}\n\ndiv.pp_default a.pp_arrow_next:hover {\n    transform: translateX(5px);\n}\n\ndiv.pp_default .pp_close {\n    background-image: url(" + ___CSS_LOADER_URL_IMPORT_3___ + ");\n    background-size: 30px 30px;\n    margin-top: 5px;\n    text-indent: -99999999px;\n    font-size: 0;\n    line-height: 0;\n}\n\ndiv.pp_default .pp_next:hover {\n    background: url(" + ___CSS_LOADER_URL_IMPORT_2___ + ");\n    cursor: pointer;\n    background-repeat: no-repeat;\n    background-position: 95% 50%;\n    background-size: 20px;\n}\n\ndiv.pp_default .pp_previous:hover {\n    background: url(" + ___CSS_LOADER_URL_IMPORT_1___ + ");\n    cursor: pointer;\n    background-repeat: no-repeat;\n    background-position: 5% 50%;\n    background-size: 20px;\n}\n\ndiv.pp_default .pp_nav .currentTextHolder {\n    padding: 0 0 0 20px;\n    color: #fff;\n}\n\ndiv.pp_default .pp_content_container .pp_details {\n    margin-top: 30px !important;\n    z-index: 3;\n}\n\ndiv.pp_default .pp_description {\n    font-size: 15px;\n    line-height: 30px;\n    position: absolute;\n    top: -30px;\n    margin: 0;\n    color: #fff;\n    font-weight: 400;\n}\n\n\n/* ===================================\n    7.2 Single Portfolio CSS\n====================================== */\n\n.single-portfolio .section {\n    min-height: 100vh;\n}\n\n.portfolio-content {\n    padding-bottom: 1px;\n}\n\n\n/* ===================================\n    7.3 Image Slider CSS\n====================================== */\n\n.owl-stage {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.owl-carousel .owl-item {\n    width: 100%;\n}\n\n.owl-theme .owl-nav.disabled + .owl-dots {\n    margin-top: 20px;\n    line-height: 0;\n}\n\n.owl-theme .owl-dots .owl-dot span {\n    margin: 0;\n    background-color: #9B8347;\n    transition: all .3s ease;\n    width: 18px;\n    height: 18px;\n    border-radius: 90%;\n}\n\n.owl-theme .owl-dots .owl-dot {\n    border-radius: 90%;\n    transition: all .3s ease;\n    margin: 4px;\n}\n\n.owl-theme .owl-dots .owl-dot:hover span {\n    background-color: #9B8347;\n}\n\n.owl-theme .owl-dots .owl-dot.active span {\n    background-color: #d4af37;\n}\n\n\n/* ===================================\n    8. Resume Section CSS\n====================================== */\n\nul.timeline-holder {\n    margin: 0;\n    padding: 0 0 0 55px;\n}\n\nli.timeline-event {\n    margin: 0 0 42px 60px;\n    position: relative;\n    padding-top: 5px;\n    list-style: none;\n    transition: .3s;\n}\n\nli.timeline-event:hover {\n    color: #9B8347;\n}\n\nli.timeline-event:before {\n    content: \"\";\n    width: 3px;\n    height: calc(100% - 20px);\n    position: absolute;\n    background-color: #d4af37;\n    left: -30px;\n    top: 51px;\n}\n\nli.timeline-event:last-child:before {\n    display: none;\n}\n\nli.timeline-event:last-child {\n    margin-bottom: 0;\n}\n\nli.timeline-event span.timeline-circle:after {\n    content: \"\";\n    position: absolute;\n    width: 19px;\n    height: 19px;\n    left: -8px;\n    top: 11px;\n    border-radius: 90%;\n    background-color: #d4af37;\n    opacity: 0;\n    transition: opacity .3s;\n}\n\nli.timeline-event:hover span.timeline-circle:after {\n    opacity: 1;\n}\n\nspan.timeline-circle {\n    position: absolute;\n    top: 0;\n    left: -30px;\n}\n\nspan.timeline-circle:before {\n    content: \"\";\n    display: block;\n    width: 35px;\n    height: 35px;\n    border-radius: 90%;\n    border: 3px solid #d4af37;\n    position: absolute;\n    left: -16px;\n    top: 3px;\n    z-index: 1;\n    transition: .3s;\n}\n\n.timeline-event-date {\n    position: absolute;\n    left: -115px;\n    top: 2px;\n    transition: .3s;\n    color: #d4af37;\n    font-weight: 700;\n}\n\nli.timeline-event:hover .timeline-event-date {\n    transform: translateX(-10px);\n}\n\n.timeline-event-content {\n    line-height: 160%;\n    text-align: left;\n    margin-left: 50px;\n}\n\nimg.my-signature {\n    padding-top: 30px;\n    width: 215px;\n}\n\n\n/* ===================================\n    9. Skills Section CSS\n====================================== */\n\n.skill-circle-holder > div:last-of-type {\n    margin-right: 0;\n}\n\n.skill-circle {\n    display: inline-block;\n    margin-right: 6%;\n    width: 20%;\n    max-width: 254px;\n}\n\n.skill-circle-wrapper canvas {\n    width: 100% !important;\n    height: auto !important;\n    display: block;\n}\n\nspan.skill-circle-num {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 45px;\n    font-weight: 700;\n    color: #d4af37;\n    letter-spacing: -1px;\n}\n\np.skill-circle-text {\n    font-size: 22px;\n    color: #d4af37;\n    text-align: center;\n    padding-top: 20px;\n    letter-spacing: -1px;\n    margin-bottom: 0;\n}\n\n.skills-holder {\n    position: relative;\n}\n\n.skills-holder > div:last-of-type {\n    margin-bottom: 0;\n}\n\n.skill-holder {\n    margin-bottom: 20px;\n    position: relative;\n}\n\n.skill-holder:after {\n    clear: both;\n    display: block;\n    content: \"\";\n}\n\n.skill-percent {\n    font-size: 45px;\n    line-height: 100%;\n    font-weight: 700;\n    width: 100px;\n    float: right;\n    color: #554247;\n    letter-spacing: -1px;\n}\n\n.skill {\n    width: 100%;\n    height: 12px;\n    background-color: #554247;\n    margin-bottom: 15px;\n}\n\n.skill-text {\n    float: left;\n    width: calc(100% - 145px);\n    margin-top: 25px;\n}\n\n.skill-fill {\n    width: 10%;\n    height: 22px;\n    background-color: #d4af37;\n    transform: translateY(-5px);\n    transition: width .7s;\n}\n\n.skill-text span {\n    font-size: 22px;\n    line-height: 35px;\n}\n\n\n/* ===================================\n    10. Contact Section CSS\n====================================== */\n\n#contact {\n  height: 100vh;\n}\n\n#contact-email-link,\n#project-link {\n    color: #9B8347;\n}\n\n#project-link {\n    font-weight: bold;\n}\n\n#contact-email-link:hover,\n#project-link:hover {\n    color: #d4af37;\n}\n\n.social-logo {\n  color: #9B8347;\n}\n\na svg #linkedin, a svg #twitter {\n    fill: #9B8347;\n    transition: .3s;\n    transition-timing-function: ease-in-out;\n    -webkit-transition: .3s;\n    -webkit-transition-timing-function: ease-in-out;\n}\n\na svg #linkedin:hover, a svg #twitter:hover {\n  fill: #d4af37;\n}\n\nsvg #twitter {\n  position: relative;\n  top: 4px;\n}\n\n.contact-form {\n    padding: 65px;\n    background-color: #171C1C;\n}\n\n.contact-form p {\n    margin-bottom: 15px;\n}\n\n.contact-form input:-webkit-autofill,\n.contact-form input:-webkit-autofill:hover,\n.contact-form input:-webkit-autofill:focus,\n.contact-form input:-webkit-autofill:active  {\n    box-shadow: #171C1C;\n    -webkit-box-shadow: 0 0 0 30px #171C1C inset !important;\n    -webkit-text-fill-color: #fff !important;\n}\n\n.contact-form input[type=text],\n.contact-form input[type=email],\n.contact-form textarea {\n    border: 0;\n    border-bottom: 2px solid #fff;\n    padding-top: 13px;\n    padding-bottom: 13px;\n    margin: 10px 0;\n    /* height: 28px; */\n    font-size: 14px;\n    font-family: 'Poppins', sans-serif;\n    width: 100%;\n    line-height: 25px;\n    background-color: transparent;\n    color: #fff;\n}\n\n.contact-form input[name=\"your-name\"] {\n    margin-top: 0;\n    padding-top: 0;\n}\n\n.contact-form textarea {\n    height: 150px;\n}\n\np.contact-submit-holder {\n    margin-bottom: 0 !important;\n}\n\n.contact-form input[type=submit] {\n    display: inline-block;\n    border: 2px solid;\n    text-align: center;\n    padding: 20px 0px;\n    font-size: 14px;\n    cursor: pointer;\n    vertical-align: middle;\n    text-decoration: none;\n    background-color: transparent;\n    color: #fff;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700;\n    width: 100%;\n    letter-spacing: 8px;\n    transition: opacity .3s ease;\n    cursor: pointer;\n}\n\n.contact-form input[type=submit]:hover {\n    opacity: 0.8;\n}\n\n.contact-form input[type=text]::-webkit-input-placeholder,\n.contact-form input[type=email]::-webkit-input-placeholder,\n.contact-form textarea::-webkit-input-placeholder {\n    font-family: 'Poppins', sans-serif;\n    color: #fff;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n    opacity: 1;\n}\n\n.contact-form input[type=text]:-ms-input-placeholder,\n.contact-form input[type=email]:-ms-input-placeholder,\n.contact-form textarea:-ms-input-placeholder {\n    font-family: 'Poppins', sans-serif;\n    color: #fff;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n    opacity: 1;\n}\n\n.contact-form input[type=text]::-webkit-input-placeholder, .contact-form input[type=email]::-webkit-input-placeholder, .contact-form textarea::-webkit-input-placeholder {\n    font-family: 'Poppins', sans-serif;\n    color: #fff;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n    opacity: 1;\n}\n\n.contact-form input[type=text]::-moz-placeholder, .contact-form input[type=email]::-moz-placeholder, .contact-form textarea::-moz-placeholder {\n    font-family: 'Poppins', sans-serif;\n    color: #fff;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n    opacity: 1;\n}\n\n.contact-form input[type=text]:-ms-input-placeholder, .contact-form input[type=email]:-ms-input-placeholder, .contact-form textarea:-ms-input-placeholder {\n    font-family: 'Poppins', sans-serif;\n    color: #fff;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n    opacity: 1;\n}\n\n.contact-form input[type=text]::-ms-input-placeholder, .contact-form input[type=email]::-ms-input-placeholder, .contact-form textarea::-ms-input-placeholder {\n    font-family: 'Poppins', sans-serif;\n    color: #fff;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n    opacity: 1;\n}\n\n.contact-form input[type=text]::placeholder,\n.contact-form input[type=email]::placeholder,\n.contact-form textarea::placeholder {\n    font-family: 'Poppins', sans-serif;\n    color: #fff;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n    opacity: 1;\n}\n\n\n/* ===================================\n    11. Responsive CSS\n====================================== */\n\n@media screen and (max-width: 1599px) {\n\n    .content-left {\n        width: 320px;\n    }\n\n    .content-left-wrapper {\n        padding-left: 55px;\n    }\n\n    .content-right {\n        margin-left: 320px;\n        width: calc(100% - 320px);\n    }\n\n    .menu-holder {\n        width: 320px;\n        transform: translateX(-320px);\n        padding-left: 55px;\n    }\n\n    .big-num {\n        width: 320px;\n    }\n\n    .current-big-num {\n        font-size: 130px;\n    }\n\n    .icon-scroll {\n        bottom: 17px;\n    }\n\n    .section {\n        padding-top: 75px;\n    }\n\n    .content-right-wrapper > div:last-of-type {\n        padding-bottom: 75px;\n    }\n\n    .top-pagination,\n    .menu-wrapper {\n        padding-top: 110px;\n    }\n\n\n    .grid {\n        width: calc(100% + 4vw);\n        margin-left: -2vw;\n    }\n\n    .grid-item {\n        border-width: 1vw;\n    }\n\n    .category-filter {\n        right: -1vw;\n    }\n\n}\n\n@media screen and (min-width: 1360px) and (max-width: 1550px) {\n\n    .button-group-wrapper > .button {\n        display: table;\n        margin-left: 0;\n        margin-bottom: 20px;\n    }\n\n    .button-group-wrapper > a:last-of-type {\n        margin-bottom: 0;\n    }\n\n}\n\n@media screen and (max-width: 1440px) {\n\n    .portfolio-text {\n        font-size: 20px;\n    }\n\n    span.skill-circle-num,\n    .skill-percent {\n        font-size: 35px;\n    }\n\n    .skill-percent {\n        margin-top: 11px;\n    }\n\n}\n\n@media screen and (max-width: 1360px) {\n\n\n    .portfolio-content .one-half {\n        margin-bottom: 30px;\n    }\n\n    .content-left {\n        width: 90px;\n    }\n\n    .content-left-wrapper {\n        padding-left: 34px;\n    }\n\n    .content-right {\n        margin-left: 90px;\n        width: calc(100% - 90px);\n    }\n\n    .content-1300 {\n        margin: 0 auto;\n    }\n\n    .top-pagination,\n    .my-info-wrapper,\n    .big-num {\n        display: none;\n    }\n\n    .menu-wrapper {\n        padding-top: 0;\n    }\n\n    .service-holder {\n        margin-right: 2vw;\n        margin-bottom: 2vw;\n    }\n\n    h2.section-title {\n        padding-bottom: 0;\n    }\n\n    .skill-holder {\n        margin-bottom: 0;\n    }\n\n    .skills-holder.sec-skills-holder {\n        margin-top: -60px;\n    }\n\n}\n\n\n@media screen and (max-width: 1300px) {\n\n .one-half {\n        width: 100%;\n        margin-bottom: 60px;\n        margin-right: 0;\n    }\n\n    .one-half.last {\n        margin-bottom: 0;\n    }\n\n    .one-half > p:last-of-type {\n        margin-bottom: 0;\n    }\n\n    .service-holder img {\n        margin-bottom: 0;\n    }\n\n}\n\n\n@media screen and (max-width: 1020px) {\n\n    .content-left {\n        height: 55px;\n        width: 100%;\n        z-index: 2;\n    }\n\n    .toggle-holder {\n        top: 15px;\n        left: 15px;\n    }\n\n    .top-pagination {\n        display: inline-block;\n        padding-top: 10px;\n        padding-right: 20px;\n        float: right;\n    }\n\n    .content-right {\n        margin-left: 0;\n        width: 100%;\n    }\n\n    .service-title {\n        font-size: 25px;\n    }\n\n    .grid {\n        width: calc(100% + 30px);\n        margin-left: -15px;\n    }\n\n    .category-filter {\n        right: 0;\n    }\n\n    .grid-sizer,\n    .grid-item {\n        width: 50% !important;\n        border-width: 15px;\n    }\n\n    .close-icon {\n        width: 60px;\n        height: 60px;\n        background-size: 60px;\n    }\n\n    .skill-circle-holder {\n        text-align: center;\n    }\n\n    .skill-circle-holder > div:nth-of-type(2n) {\n        margin-right: 0 !important;\n    }\n\n    .skill-circle {\n        width: auto;\n        width: 44%;\n        margin-bottom: 40px !important;\n        margin-right: 10% !important;\n    }\n\n    .skill-circle-holder > div:nth-last-of-type(-n+2) {\n        margin-bottom: 0 !important;\n    }\n\n    li.timeline-event {\n        margin-bottom: 30px;\n    }\n\n}\n\n@media screen and (max-height: 880px) {\n\n    .big-num {\n        display: none;\n    }\n\n}\n\n@media screen and (max-width: 767px) {\n\n    .full-width-section .section-wrapper {\n        height: auto;\n        padding: 75px 5%;\n    }\n\n    .content-right-wrapper > div:first-of-type .section-wrapper {\n        padding-top: 125px;\n    }\n\n    .single-portfolio .content-right-wrapper > div:first-of-type .section-wrapper {\n        padding-top: 55px;\n    }\n\n    .home-left-part {\n        flex: 0 0 100%;\n        margin: 0;\n    }\n\n    .home-right-part {\n        display: none;\n    }\n\n    h1.entry-title {\n        font-size: 50px;\n        line-height: 100%;\n    }\n\n    .site-des {\n        font-size: 20px;\n    }\n\n    .service-holder {\n        margin-bottom: 30px !important;\n        width: 100%;\n        margin-right: 0;\n    }\n\n    .services-wrapper > div:last-of-type {\n        margin-bottom: 0 !important;\n    }\n\n    #portfolio-wrapper {\n        margin-top: 30px;\n    }\n\n    .category-filter-list {\n        top: 0;\n    }\n\n    .grid {\n        width: 100%;\n        margin: 0;\n    }\n\n    .category-filter {\n        top: -30px;\n    }\n\n    .grid-sizer,\n    .grid-item {\n        width: 100% !important;\n    }\n\n    .grid-item {\n        border: 0;\n        margin-bottom: 30px;\n    }\n\n    #portfolio-grid > div:last-of-type {\n        margin-bottom: 0;\n    }\n\n    .timeline-event-content {\n        margin-left: 10px;\n    }\n\n    li.timeline-event {\n        margin-left: 30px;\n    }\n\n    ul.timeline-holder {\n        padding-left: 70px;\n    }\n\n    .timeline-event-date {\n        left: -100px;\n    }\n\n    .skill-holder {\n        margin-bottom: 35px;\n    }\n\n    .skills-holder.sec-skills-holder {\n        margin-top: -25px;\n    }\n\n    .skill-circle-holder {\n        display: block !important;\n    }\n\n    .skill-text {\n        width: 100%;\n    }\n\n    .skill-percent {\n        position: absolute;\n        top: -30px;\n    }\n\n    .skill {\n        margin-bottom: 5px;\n    }\n\n    .contact-form {\n        padding: 7%;\n    }\n\n    .contact-form input[type=submit] {\n        font-size: 13px;\n        padding: 15px;\n    }\n\n}\n\n@media screen and (max-width: 650px) {\n\n    .menu-holder {\n        width: 100%;\n        transform: translateX(-100%);\n        padding-top: 70px;\n        padding-left: 20px;\n        overflow: auto;\n    }\n\n    .button-group-wrapper > a:last-of-type {\n        margin-bottom: 0;\n    }\n\n    .skill-circle-holder > div:nth-of-type(n) {\n        display: table !important;\n        width: 100%;\n        margin-left: auto !important;\n        margin-right: auto !important;\n    }\n\n    .skill-circle-holder > div:nth-last-of-type(2) {\n        margin-bottom: 40px !important;\n    }\n\n    .skill-circle-wrapper canvas {\n        max-width: none;\n        max-height: none;\n    }\n\n}\n\n@media screen and (max-width: 480px) {\n\n    .button-group-wrapper > .button {\n        display: table;\n        margin-left: 0;\n        margin-bottom: 20px;\n    }\n\n}\n", "",{"version":3,"sources":["style.css"],"names":[],"mappings":"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","file":"style.css","sourcesContent":["/*------------------------------------------------------------------\n\n[Table of contents]\n1. 3rd Part CSS Libraries\n2. Global CSS\n3. Left Part Content (Sidebar) CSS\n    3.1. Menu CSS\n4. Right Part Content CSS\n5. Home Section CSS\n6. Service Section CSS\n7. Portfolio Section CSS\n    7.1 Pretty Photo CSS\n    7.2 Single Portfolio CSS\n    7.3 Image Slider CSS\n8. Resume Section CSS\n9. Skills Section CSS\n10. Contact Section CSS\n11. Responsive CSS\n\n-------------------------------------------------------------------*/\n\n\n/* ===================================\n    1. 3rd Part CSS Libraries\n====================================== */\n\n@import url(\"css/normalize.css\");\n@import url(\"css/clear.css\");\n@import url(\"css/sm-clean.css\");\n/* @import url(\"css/owl.carousel.min.css\"); */\n@import url(\"css/owl.theme.default.min.css\");\n@import url(\"css/prettyPhoto.css\");\n@import url(\"css/common.css\");\n\n\n/* ===================================\n    2. Global CSS\n====================================== */\n\n*,\n::after,\n::before {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    font-size: 15px;\n    line-height: 30px;\n    font-weight: 400;\n    color: #9B8347;\n    background-color: #fff;\n    overflow-x: hidden;\n}\n\nbody a {\n    text-decoration: none;\n    color: #000000;\n    transition: color .3s linear;\n}\n\nbody a:hover {\n    color: #acacac;\n}\n\nbody img {\n    max-width: 100%;\n    max-height: 100%;\n    width: auto;\n    height: auto;\n    display: block;\n}\n\n.doc-loader {\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    z-index: 99999;\n    background-color: #0e1111;\n}\n\n.doc-loader img {\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\np {\n    margin-bottom: 30px;\n}\n\n.content-1300 {\n    max-width: 1300px;\n}\n\n.section-info {\n    font-size: 22px;\n    line-height: 35px;\n}\n\na.button {\n    display: inline-block;\n    color: #9B8347;\n    border: 2px solid #d4af37;\n    text-align: center;\n    padding: 12px 38px;\n    cursor: pointer;\n    vertical-align: middle;\n    text-decoration: none;\n    border-radius: 50px;\n    transition: all .2s linear;\n}\n\na.button:active {\n    position: relative;\n    top: 1px;\n}\n\na.button:hover {\n    color: white;\n    background-color: #d4af37;\n}\n\n\n/* ===================================\n    3. Left Part Content (Sidebar) CSS\n====================================== */\n\n.content-left {\n    position: fixed;\n    width: 380px;\n    background-color: #0e1111;\n    height: 100vh;\n    z-index: 1;\n}\n\n.content-left::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    background-color: #554247;\n}\n\n.content-left::-webkit-scrollbar {\n    width: 7px;\n    background-color: #554247;\n}\n\n.content-left::-webkit-scrollbar-thumb {\n    background-color: #d4af37;\n}\n\n.content-left-wrapper {\n    padding-left: 75px;\n    position: relative;\n}\n\n.toggle-holder {\n    position: fixed;\n    top: 30px;\n    left: 30px;\n    z-index: 3;\n}\n\n#toggle {\n    height: 23px;\n    width: 30px;\n    position: relative;\n}\n\n#toggle:hover {\n    cursor: pointer;\n}\n\n#toggle:before,\n#toggle:after {\n    content: '';\n    height: 3px;\n    width: 30px;\n    position: absolute;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transition: -webkit-transform 0.25s;\n    -webkit-transition: all 0.25s;\n    transition: all 0.25s;\n    top: 8px;\n    background-color: #fff;\n}\n\n#toggle:before {\n    -webkit-transform: translate3d(0, -8px, 0);\n    transform: translate3d(0, -8px, 0px);\n    width: 21px;\n    margin-left: 0;\n}\n\n#toggle:hover:before {\n    margin-left: 9px;\n\n}\n\n#toggle.on:before {\n    -webkit-transform: rotate3d(0, 0, 1, 45deg) translate3d(0, 0, 0);\n    transform: rotate3d(0, 0, 1, 45deg) translate3d(0, 0, 0);\n    background-color: #fff;\n    margin-left: 0;\n    width: 26px;\n}\n\n#toggle.on:after {\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    background-color: #fff;\n    width: 26px;\n}\n\n#toggle:after {\n    -webkit-transform: translate3d(0, 8px, 0);\n    transform: translate3d(0, 8px, 0);\n}\n\n#toggle .menu-line {\n    width: 13px;\n    height: 3px;\n    position: absolute;\n    -webkit-transition: all 0.25s;\n    transition: all 0.25s;\n    margin-left: 0;\n    top: 8px;\n    background-color: #fff;\n}\n\n#toggle:hover .menu-line {\n    margin-left: 17px;\n}\n\n#toggle.on .menu-line {\n    opacity: 0;\n}\n\n.top-pagination {\n    position: relative;\n    z-index: 2;\n    padding-top: 150px;\n}\n\n.top-pagination > div {\n    display: inline-block;\n    font-weight: 700;\n    vertical-align: top;\n}\n\n.current-num {\n    width: 25px;\n    position: relative;\n    height: 30px;\n    color: #d4af37;\n}\n\n.current-num span {\n    position: absolute;\n    left: 0;\n}\n\n.total-pages-num {\n    color: #fff;\n}\n\n.pagination-div {\n    position: relative;\n    width: 100px;\n    height: 30px;\n    margin-right: 8px;\n}\n\n.pagination-div:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    height: 3px;\n    width: 100%;\n    background-color: #fff;\n    top: 12px;\n}\n\n.my-info-wrapper {\n    padding-top: 110px;\n}\n\n.my-info {\n    margin-bottom: 30px;\n}\n\n.my-info > p {\n    margin-bottom: 0;\n}\n\n.my-info-title {\n    font-size: 12px;\n    line-height: 100%;\n    color: #d4af37;\n    letter-spacing: 5px;\n}\n\n.my-info-content {\n    color: #9B8347;\n}\n\nimg.my-info-signature {\n    width: 215px;\n    padding-top: 35px;\n    padding-bottom: 30px;\n}\n\n.big-num {\n    position: fixed;\n    width: 380px;\n    left: 0;\n    bottom: 30px;\n    padding-left: 75px;\n    z-index: 1;\n}\n\n.current-big-num {\n    font-size: 160px;\n    -webkit-text-stroke: 3px #d4af37;\n    color: transparent;\n    font-weight: 800;\n    line-height: 100%;\n    letter-spacing: -4px;\n    position: relative;\n    margin-top: 20px;\n    z-index: 2;\n}\n\n.icon-scroll,\n.icon-scroll:before {\n    position: absolute;\n    right: -18px;\n}\n\n.icon-scroll {\n    width: 38px;\n    height: 60px;\n    margin-left: -20px;\n    bottom: 25px;\n    margin-top: -35px;\n    box-shadow: inset 0 0 0 3px #d4af37;\n    border-radius: 25px;\n    transition: right .5s;\n}\n\n.icon-scroll:before {\n    content: '';\n    width: 8px;\n    height: 8px;\n    background: #d4af37;\n    margin-left: -4px;\n    top: 8px;\n    border-radius: 4px;\n    -webkit-animation-duration: 1.5s;\n    animation-duration: 1.5s;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-name: scroll;\n    animation-name: scroll;\n    left: 50%;\n}\n\n.icon-scroll:after {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    background-color: #0e1111;\n    width: 58px;\n    height: 80px;\n    border-radius: 25px;\n    transform: translate(-10px, -10px);\n    transition: all .3s;\n}\n\n@-webkit-keyframes scroll {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n        -webkit-transform: translateY(35px);\n        transform: translateY(35px);\n    }\n}\n\n@keyframes scroll {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n        -webkit-transform: translateY(35px);\n        transform: translateY(35px);\n    }\n}\n\n.open .icon-scroll {\n    right: 30px;\n    z-index: 1;\n}\n\n.open .icon-scroll:after {\n    background-color: transparent;\n}\n\n\n/* ===================================\n    3.1. Menu CSS\n====================================== */\n\n.menu-wrapper {\n    padding-top: 150px;\n}\n\n.menu-holder {\n    padding: 120px 50px 0 75px;\n    background-color: #9B8347;\n    width: 380px;\n    height: 100%;\n    min-height: 100vh;\n    top: 0;\n    left: 0;\n    position: absolute;\n    transform: translateX(-380px);\n    transition: transform .3s linear;\n    z-index: 1;\n}\n\n.open .menu-holder {\n    transform: translateX(0);\n}\n\n.main-menu.sm-clean {\n    background-color: transparent;\n    display: inline-block;\n}\n\n.sm-clean a {\n    position: relative;\n}\n\n.sm-clean a,\n.sm-clean a:hover,\n.sm-clean a:focus,\n.sm-clean a:active {\n    color: #ffffff;\n    padding: 5px 0;\n    font-size: 28px;\n    line-height: 50px;\n    font-weight: 700;\n}\n\n.sm-clean a:after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 16px;\n    background-color: #d4af37;\n    transition: width .3s;\n    position: absolute;\n    left: -5%;\n    bottom: 7px;\n    z-index: -1;\n}\n\n.main-menu.sm-clean .sub-menu li a:after {\n    height: 3px;\n    bottom: 20px;\n}\n\n.sm-clean a.current:after,\n.sm-clean a:hover:after,\n.sm-clean a:active:after,\n.sm-clean a.highlighted:after,\n.sm-clean ul a:hover:after,\n.sm-clean ul a:active:after,\n.sm-clean ul a.highlighted:after,\n.sm-clean li.current > a:after {\n    width: 110%;\n}\n\n.sm-clean a span.sub-arrow {\n    color: #d4af37;\n}\n\n.main-menu.sm-clean .sub-menu li a {\n    color: #848484;\n    text-transform: uppercase;\n    font-size: 14px;\n}\n\n\n/* ===================================\n    4. Right Part Content CSS\n====================================== */\n\n.content-right {\n    margin-left: 380px;\n    width: calc(100% - 380px);\n}\n\n.content-right-wrapper > div:last-of-type {\n    padding-bottom: 150px;\n}\n\n.section {\n    background-color: #0e1111;\n    position: relative;\n    padding-top: 150px;\n}\n\n.section-wrapper {\n    background-color: #0e1111;\n    padding-left: 5%;\n    padding-right: 5%;\n}\n\n.full-width-section.section {\n    padding: 0;\n}\n\n.full-width-section .section-wrapper {\n    padding: 0 0 0 5%;\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    display: -webkit-flex;\n    align-items: center;\n    background-color: #fff;\n}\n\nh2.section-title {\n    font-size: 30px;\n    line-height: 100%;\n    margin-bottom: 30px;\n    padding-top: 0;\n}\n\n\n/* ===================================\n    5. Home Section CSS\n====================================== */\n\n.home-left-part {\n    flex: 0 0 370px;\n    margin-right: 5%;\n}\n\n.site-des {\n    font-size: 28px;\n    color: #492d31;\n}\n\nh1.entry-title {\n    font-size: 54px;\n    line-height: 68px;\n    font-weight: 800;\n    color: #0e1111;\n}\n\n.site-info {\n    margin-top: 25px;\n}\n\n.social-links {\n    margin-top: 10vh;\n    margin-bottom: -5px;\n}\n\n.social-links a {\n    font-size: 12px;\n    color: #0e1111;\n    letter-spacing: 5px;\n    margin-right: 30px;\n}\n\n.social-links a:last-of-type {\n    margin-right: 0;\n}\n\n\n/* ===================================\n    6. Service Section CSS\n====================================== */\n\n#service {\n  height: 100vh;\n}\n\n.services-wrapper {\n    display: flex;\n    display: -webkit-flex;\n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;\n}\n\n.service-holder {\n    padding: 36px;\n    width: 47%;\n    margin-right: 6%;\n    margin-bottom: 6%;\n}\n\n.service-holder img {\n    width: 80px;\n    margin-bottom: 30px;\n}\n\n.service-title {\n    font-size: 28px;\n    line-height: 42px;\n    color: #d4af37;\n    font-weight: 700;\n}\n\n.button-group-wrapper {\n    margin-top: 50px;\n}\n\n.button-group-wrapper > a {\n    margin-right: 1vw;\n}\n\n.button-group-wrapper > a:last-of-type {\n    margin-right: 0;\n}\n\n\n\n/* ===================================\n    7. Portfolio Section CSS\n====================================== */\n\n.category-filter {\n    position: absolute;\n    right: 0;\n    top: -20px;\n    z-index: 1;\n    width: 25px;\n    height: 15px;\n    cursor: pointer;\n    transition: all .5s ease;\n}\n\n.category-filter.hide {\n    opacity: 0;\n    transform: translateY(70px);\n}\n\n.category-filter-list > div {\n    margin-bottom: 5px;\n}\n\n.category-filter-list > div:last-of-type {\n    margin-bottom: 0;\n}\n\n.category-filter-icon {\n    width: 20px;\n    height: 3px;\n    background-color: #d4af37;\n    float: right;\n    transition: width .3s ease;\n}\n\n.category-filter:hover .category-filter-icon,\n.category-filter.filter-open .category-filter-icon {\n    width: 24px;\n}\n\n.category-filter-icon:after {\n    content: \"\";\n    display: block;\n    width: 10px;\n    height: 3px;\n    background-color: #d4af37;\n    transform: translate(-5px,8px);\n    transition: transform .3s ease;\n}\n\n.category-filter:hover .category-filter-icon:after,\n.category-filter.filter-open .category-filter-icon:after {\n    transform: translate(4px,8px);\n}\n\n.category-filter-icon:before {\n    content: \"\";\n    display: block;\n    width: 10px;\n    height: 3px;\n    background-color: #d4af37;\n    transform: translate(10px,11px);\n    transition: transform .3s ease;\n}\n\n.category-filter:hover .category-filter-icon:before,\n.category-filter.filter-open .category-filter-icon:before {\n    transform: translate(14px,11px);\n}\n\n.category-filter-list {\n    background-color: #0e1111;\n    padding: 24px 20px;\n    width: 110px;\n    display: none;\n    position: absolute;\n    right: 0;\n    top: 15px;\n    font-size: 13px;\n    line-height: 22px;\n    color: #9B8347;\n    z-index: 1;\n    cursor: pointer;\n    transition: opacity .5s, transform .5s;\n}\n\n.category-filter-list.hide {\n    transform: translateY(70px);\n    opacity: 0;\n}\n\n.category-filter-list .button.is-checked {\n    color: #d4af37;\n}\n\n.isotope.no-transition,\n.isotope.no-transition .isotope-item,\n.isotope .isotope-item.no-transition {\n    -webkit-transition-duration: 0s;\n    -moz-transition-duration: 0s;\n    -ms-transition-duration: 0s;\n    -o-transition-duration: 0s;\n    transition-duration: 0s;\n}\n\n.grid {\n    width: calc(100% + 60px);\n    margin-left: -30px;\n    position: relative;\n    display: block;\n    overflow: hidden;\n}\n\n.grid-item {\n    float: left;\n    font-size: 0;\n    line-height: 0;\n    box-sizing:border-box;\n    -moz-box-sizing:border-box;\n    -webkit-box-sizing:border-box;\n    overflow: hidden;\n    border: 30px solid transparent;\n    width: 50%;\n    transition: opacity .3s;\n}\n\n.grid-item img {\n    display: block;\n    width: 100%;\n    height: auto;\n    max-height: none;\n    max-width: none;\n}\n\n.grid-sizer,\n.grid-item {\n    width: calc(100% / 3);\n}\n\n.grid-item.p-one {\n    width: 100%;\n}\n\n.grid-item.p-one-third {\n    width: calc(100% / 3);\n}\n\n.grid-item.p-two-third {\n    width: calc(200% / 3);\n}\n\n.portfolio-text-holder {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    font-size: 20px;\n    background-color: #d4af37;\n    padding: 20px;\n    transform: translateX(-100%);\n    transition: transform .3s ease;\n}\n\n.grid-item a.item-link:hover .portfolio-text-holder,\n.grid-item.portfolio-content-loading a.item-link .portfolio-text-holder {\n    transform: translateX(0);\n}\n\n#portfolio-grid.portfoio-items-mask .grid-item {\n    opacity: 0.2;\n}\n\n.grid-item.portfolio-content-loading {\n    opacity: 1 !important;\n}\n\n.portfolio-text-wrapper {\n    position: absolute;\n    left: 30px;\n    bottom: 0;\n}\n\n.portfolio-text {\n    font-size: 28px;\n    line-height: 100%;\n    font-weight: 700;\n    color: #9B8347;\n    margin-bottom: 0;\n    padding-bottom: 5px;\n}\n\n.portfolio-cat {\n    font-size: 15px;\n    color: #9B8347;\n    line-height: 100%;\n}\n\n.portfolio-cat:before {\n    content: \"\";\n    display: inline-block;\n    width: 25px;\n    height: 1px;\n    background-color: #9B8347;\n    vertical-align: 4px;\n    margin-right: 5px;\n}\n\n.portfolio-load-content-holder {\n    opacity: 0;\n    transform: translateY(70px);\n    transition: all .5s ease;\n}\n\n.portfolio-load-content-holder.show {\n    transform: translateY(0);\n    opacity: 1;\n}\n\n.portfolio-load-content-holder.show.viceversa {\n    opacity: 0;\n    transform: translateY(70px);\n}\n\n.portfolio-content-wrapper {\n    display: none;\n}\n\n.portfolio-content-wrapper.show {\n    display: block;\n}\n\n.close-icon {\n    background-image: url(public/images/close-left-arrow.png);\n    background-repeat: no-repeat;\n    width: 70px;\n    height: 70px;\n    display: inline-block;\n    background-color: rgb(243, 123, 131);\n    border-radius: 5px;\n    margin-bottom: 20px;\n    background-size: 70px;\n    transition: all 0.3s ease;\n    cursor: pointer;\n}\n\n.close-icon:hover {\n    background-position: -5px 0;\n}\n\n#portfolio-grid {\n    transition: all .5s ease;\n    opacity: 1;\n    transform: translateY(0px);\n}\n\n#portfolio-grid.hide {\n    opacity: 0;\n    transform: translateY(70px);\n}\n\n.grid-item a.item-link.portfolio-content-loading:after,\n.ajax-portfolio.portfolio-content-loading .portfolio-text-holder {\n    opacity: 1;\n}\n\n\n/* ===================================\n    7.1 Pretty Photo CSS\n====================================== */\n\ndiv.pp_default .pp_loaderIcon {\n    display: none !important;\n}\n\ndiv.pp_default a.pp_arrow_previous {\n    background-image: url(public/images/nav_left.png);\n    background-size: 20px 20px;\n    width: 20px;\n    height: 20px;\n    margin-top: 5px;\n    font-size: 0;\n    line-height: 0;\n    text-indent: -99999999px;\n    transition: transform .3s ease;\n}\n\ndiv.pp_default a.pp_arrow_next {\n    background-image: url(public/images/nav_right.png);\n    background-size: 20px 20px;\n    width: 20px;\n    height: 20px;\n    margin-top: 5px;\n    margin-left: 10px;\n    font-size: 0;\n    line-height: 0;\n    text-indent: -99999999px;\n    transition: transform .3s ease;\n}\n\ndiv.pp_default a.pp_arrow_previous:hover {\n    transform: translateX(-5px);\n}\n\ndiv.pp_default a.pp_arrow_next:hover {\n    transform: translateX(5px);\n}\n\ndiv.pp_default .pp_close {\n    background-image: url(public/images/close.png);\n    background-size: 30px 30px;\n    margin-top: 5px;\n    text-indent: -99999999px;\n    font-size: 0;\n    line-height: 0;\n}\n\ndiv.pp_default .pp_next:hover {\n    background: url(public/images/nav_right.png);\n    cursor: pointer;\n    background-repeat: no-repeat;\n    background-position: 95% 50%;\n    background-size: 20px;\n}\n\ndiv.pp_default .pp_previous:hover {\n    background: url(public/images/nav_left.png);\n    cursor: pointer;\n    background-repeat: no-repeat;\n    background-position: 5% 50%;\n    background-size: 20px;\n}\n\ndiv.pp_default .pp_nav .currentTextHolder {\n    padding: 0 0 0 20px;\n    color: #fff;\n}\n\ndiv.pp_default .pp_content_container .pp_details {\n    margin-top: 30px !important;\n    z-index: 3;\n}\n\ndiv.pp_default .pp_description {\n    font-size: 15px;\n    line-height: 30px;\n    position: absolute;\n    top: -30px;\n    margin: 0;\n    color: #fff;\n    font-weight: 400;\n}\n\n\n/* ===================================\n    7.2 Single Portfolio CSS\n====================================== */\n\n.single-portfolio .section {\n    min-height: 100vh;\n}\n\n.portfolio-content {\n    padding-bottom: 1px;\n}\n\n\n/* ===================================\n    7.3 Image Slider CSS\n====================================== */\n\n.owl-stage {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.owl-carousel .owl-item {\n    width: 100%;\n}\n\n.owl-theme .owl-nav.disabled + .owl-dots {\n    margin-top: 20px;\n    line-height: 0;\n}\n\n.owl-theme .owl-dots .owl-dot span {\n    margin: 0;\n    background-color: #9B8347;\n    transition: all .3s ease;\n    width: 18px;\n    height: 18px;\n    border-radius: 90%;\n}\n\n.owl-theme .owl-dots .owl-dot {\n    border-radius: 90%;\n    transition: all .3s ease;\n    margin: 4px;\n}\n\n.owl-theme .owl-dots .owl-dot:hover span {\n    background-color: #9B8347;\n}\n\n.owl-theme .owl-dots .owl-dot.active span {\n    background-color: #d4af37;\n}\n\n\n/* ===================================\n    8. Resume Section CSS\n====================================== */\n\nul.timeline-holder {\n    margin: 0;\n    padding: 0 0 0 55px;\n}\n\nli.timeline-event {\n    margin: 0 0 42px 60px;\n    position: relative;\n    padding-top: 5px;\n    list-style: none;\n    transition: .3s;\n}\n\nli.timeline-event:hover {\n    color: #9B8347;\n}\n\nli.timeline-event:before {\n    content: \"\";\n    width: 3px;\n    height: calc(100% - 20px);\n    position: absolute;\n    background-color: #d4af37;\n    left: -30px;\n    top: 51px;\n}\n\nli.timeline-event:last-child:before {\n    display: none;\n}\n\nli.timeline-event:last-child {\n    margin-bottom: 0;\n}\n\nli.timeline-event span.timeline-circle:after {\n    content: \"\";\n    position: absolute;\n    width: 19px;\n    height: 19px;\n    left: -8px;\n    top: 11px;\n    border-radius: 90%;\n    background-color: #d4af37;\n    opacity: 0;\n    transition: opacity .3s;\n}\n\nli.timeline-event:hover span.timeline-circle:after {\n    opacity: 1;\n}\n\nspan.timeline-circle {\n    position: absolute;\n    top: 0;\n    left: -30px;\n}\n\nspan.timeline-circle:before {\n    content: \"\";\n    display: block;\n    width: 35px;\n    height: 35px;\n    border-radius: 90%;\n    border: 3px solid #d4af37;\n    position: absolute;\n    left: -16px;\n    top: 3px;\n    z-index: 1;\n    transition: .3s;\n}\n\n.timeline-event-date {\n    position: absolute;\n    left: -115px;\n    top: 2px;\n    transition: .3s;\n    color: #d4af37;\n    font-weight: 700;\n}\n\nli.timeline-event:hover .timeline-event-date {\n    transform: translateX(-10px);\n}\n\n.timeline-event-content {\n    line-height: 160%;\n    text-align: left;\n    margin-left: 50px;\n}\n\nimg.my-signature {\n    padding-top: 30px;\n    width: 215px;\n}\n\n\n/* ===================================\n    9. Skills Section CSS\n====================================== */\n\n.skill-circle-holder > div:last-of-type {\n    margin-right: 0;\n}\n\n.skill-circle {\n    display: inline-block;\n    margin-right: 6%;\n    width: 20%;\n    max-width: 254px;\n}\n\n.skill-circle-wrapper canvas {\n    width: 100% !important;\n    height: auto !important;\n    display: block;\n}\n\nspan.skill-circle-num {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 45px;\n    font-weight: 700;\n    color: #d4af37;\n    letter-spacing: -1px;\n}\n\np.skill-circle-text {\n    font-size: 22px;\n    color: #d4af37;\n    text-align: center;\n    padding-top: 20px;\n    letter-spacing: -1px;\n    margin-bottom: 0;\n}\n\n.skills-holder {\n    position: relative;\n}\n\n.skills-holder > div:last-of-type {\n    margin-bottom: 0;\n}\n\n.skill-holder {\n    margin-bottom: 20px;\n    position: relative;\n}\n\n.skill-holder:after {\n    clear: both;\n    display: block;\n    content: \"\";\n}\n\n.skill-percent {\n    font-size: 45px;\n    line-height: 100%;\n    font-weight: 700;\n    width: 100px;\n    float: right;\n    color: #554247;\n    letter-spacing: -1px;\n}\n\n.skill {\n    width: 100%;\n    height: 12px;\n    background-color: #554247;\n    margin-bottom: 15px;\n}\n\n.skill-text {\n    float: left;\n    width: calc(100% - 145px);\n    margin-top: 25px;\n}\n\n.skill-fill {\n    width: 10%;\n    height: 22px;\n    background-color: #d4af37;\n    transform: translateY(-5px);\n    transition: width .7s;\n}\n\n.skill-text span {\n    font-size: 22px;\n    line-height: 35px;\n}\n\n\n/* ===================================\n    10. Contact Section CSS\n====================================== */\n\n#contact {\n  height: 100vh;\n}\n\n#contact-email-link,\n#project-link {\n    color: #9B8347;\n}\n\n#project-link {\n    font-weight: bold;\n}\n\n#contact-email-link:hover,\n#project-link:hover {\n    color: #d4af37;\n}\n\n.social-logo {\n  color: #9B8347;\n}\n\na svg #linkedin, a svg #twitter {\n    fill: #9B8347;\n    transition: .3s;\n    transition-timing-function: ease-in-out;\n    -webkit-transition: .3s;\n    -webkit-transition-timing-function: ease-in-out;\n}\n\na svg #linkedin:hover, a svg #twitter:hover {\n  fill: #d4af37;\n}\n\nsvg #twitter {\n  position: relative;\n  top: 4px;\n}\n\n.contact-form {\n    padding: 65px;\n    background-color: #171C1C;\n}\n\n.contact-form p {\n    margin-bottom: 15px;\n}\n\n.contact-form input:-webkit-autofill,\n.contact-form input:-webkit-autofill:hover,\n.contact-form input:-webkit-autofill:focus,\n.contact-form input:-webkit-autofill:active  {\n    box-shadow: #171C1C;\n    -webkit-box-shadow: 0 0 0 30px #171C1C inset !important;\n    -webkit-text-fill-color: #fff !important;\n}\n\n.contact-form input[type=text],\n.contact-form input[type=email],\n.contact-form textarea {\n    border: 0;\n    border-bottom: 2px solid #fff;\n    padding-top: 13px;\n    padding-bottom: 13px;\n    margin: 10px 0;\n    /* height: 28px; */\n    font-size: 14px;\n    font-family: 'Poppins', sans-serif;\n    width: 100%;\n    line-height: 25px;\n    background-color: transparent;\n    color: #fff;\n}\n\n.contact-form input[name=\"your-name\"] {\n    margin-top: 0;\n    padding-top: 0;\n}\n\n.contact-form textarea {\n    height: 150px;\n}\n\np.contact-submit-holder {\n    margin-bottom: 0 !important;\n}\n\n.contact-form input[type=submit] {\n    display: inline-block;\n    border: 2px solid;\n    text-align: center;\n    padding: 20px 0px;\n    font-size: 14px;\n    cursor: pointer;\n    vertical-align: middle;\n    text-decoration: none;\n    background-color: transparent;\n    color: #fff;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700;\n    width: 100%;\n    letter-spacing: 8px;\n    transition: opacity .3s ease;\n    cursor: pointer;\n}\n\n.contact-form input[type=submit]:hover {\n    opacity: 0.8;\n}\n\n.contact-form input[type=text]::-webkit-input-placeholder,\n.contact-form input[type=email]::-webkit-input-placeholder,\n.contact-form textarea::-webkit-input-placeholder {\n    font-family: 'Poppins', sans-serif;\n    color: #fff;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n    opacity: 1;\n}\n\n.contact-form input[type=text]:-ms-input-placeholder,\n.contact-form input[type=email]:-ms-input-placeholder,\n.contact-form textarea:-ms-input-placeholder {\n    font-family: 'Poppins', sans-serif;\n    color: #fff;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n    opacity: 1;\n}\n\n.contact-form input[type=text]::placeholder,\n.contact-form input[type=email]::placeholder,\n.contact-form textarea::placeholder {\n    font-family: 'Poppins', sans-serif;\n    color: #fff;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n    opacity: 1;\n}\n\n\n/* ===================================\n    11. Responsive CSS\n====================================== */\n\n@media screen and (max-width: 1599px) {\n\n    .content-left {\n        width: 320px;\n    }\n\n    .content-left-wrapper {\n        padding-left: 55px;\n    }\n\n    .content-right {\n        margin-left: 320px;\n        width: calc(100% - 320px);\n    }\n\n    .menu-holder {\n        width: 320px;\n        transform: translateX(-320px);\n        padding-left: 55px;\n    }\n\n    .big-num {\n        width: 320px;\n    }\n\n    .current-big-num {\n        font-size: 130px;\n    }\n\n    .icon-scroll {\n        bottom: 17px;\n    }\n\n    .section {\n        padding-top: 75px;\n    }\n\n    .content-right-wrapper > div:last-of-type {\n        padding-bottom: 75px;\n    }\n\n    .top-pagination,\n    .menu-wrapper {\n        padding-top: 110px;\n    }\n\n\n    .grid {\n        width: calc(100% + 4vw);\n        margin-left: -2vw;\n    }\n\n    .grid-item {\n        border-width: 1vw;\n    }\n\n    .category-filter {\n        right: -1vw;\n    }\n\n}\n\n@media screen and (min-width: 1360px) and (max-width: 1550px) {\n\n    .button-group-wrapper > .button {\n        display: table;\n        margin-left: 0;\n        margin-bottom: 20px;\n    }\n\n    .button-group-wrapper > a:last-of-type {\n        margin-bottom: 0;\n    }\n\n}\n\n@media screen and (max-width: 1440px) {\n\n    .portfolio-text {\n        font-size: 20px;\n    }\n\n    span.skill-circle-num,\n    .skill-percent {\n        font-size: 35px;\n    }\n\n    .skill-percent {\n        margin-top: 11px;\n    }\n\n}\n\n@media screen and (max-width: 1360px) {\n\n\n    .portfolio-content .one-half {\n        margin-bottom: 30px;\n    }\n\n    .content-left {\n        width: 90px;\n    }\n\n    .content-left-wrapper {\n        padding-left: 34px;\n    }\n\n    .content-right {\n        margin-left: 90px;\n        width: calc(100% - 90px);\n    }\n\n    .content-1300 {\n        margin: 0 auto;\n    }\n\n    .top-pagination,\n    .my-info-wrapper,\n    .big-num {\n        display: none;\n    }\n\n    .menu-wrapper {\n        padding-top: 0;\n    }\n\n    .service-holder {\n        margin-right: 2vw;\n        margin-bottom: 2vw;\n    }\n\n    h2.section-title {\n        padding-bottom: 0;\n    }\n\n    .skill-holder {\n        margin-bottom: 0;\n    }\n\n    .skills-holder.sec-skills-holder {\n        margin-top: -60px;\n    }\n\n}\n\n\n@media screen and (max-width: 1300px) {\n\n .one-half {\n        width: 100%;\n        margin-bottom: 60px;\n        margin-right: 0;\n    }\n\n    .one-half.last {\n        margin-bottom: 0;\n    }\n\n    .one-half > p:last-of-type {\n        margin-bottom: 0;\n    }\n\n    .service-holder img {\n        margin-bottom: 0;\n    }\n\n}\n\n\n@media screen and (max-width: 1020px) {\n\n    .content-left {\n        height: 55px;\n        width: 100%;\n        z-index: 2;\n    }\n\n    .toggle-holder {\n        top: 15px;\n        left: 15px;\n    }\n\n    .top-pagination {\n        display: inline-block;\n        padding-top: 10px;\n        padding-right: 20px;\n        float: right;\n    }\n\n    .content-right {\n        margin-left: 0;\n        width: 100%;\n    }\n\n    .service-title {\n        font-size: 25px;\n    }\n\n    .grid {\n        width: calc(100% + 30px);\n        margin-left: -15px;\n    }\n\n    .category-filter {\n        right: 0;\n    }\n\n    .grid-sizer,\n    .grid-item {\n        width: 50% !important;\n        border-width: 15px;\n    }\n\n    .close-icon {\n        width: 60px;\n        height: 60px;\n        background-size: 60px;\n    }\n\n    .skill-circle-holder {\n        text-align: center;\n    }\n\n    .skill-circle-holder > div:nth-of-type(2n) {\n        margin-right: 0 !important;\n    }\n\n    .skill-circle {\n        width: auto;\n        width: 44%;\n        margin-bottom: 40px !important;\n        margin-right: 10% !important;\n    }\n\n    .skill-circle-holder > div:nth-last-of-type(-n+2) {\n        margin-bottom: 0 !important;\n    }\n\n    li.timeline-event {\n        margin-bottom: 30px;\n    }\n\n}\n\n@media screen and (max-height: 880px) {\n\n    .big-num {\n        display: none;\n    }\n\n}\n\n@media screen and (max-width: 767px) {\n\n    .full-width-section .section-wrapper {\n        height: auto;\n        padding: 75px 5%;\n    }\n\n    .content-right-wrapper > div:first-of-type .section-wrapper {\n        padding-top: 125px;\n    }\n\n    .single-portfolio .content-right-wrapper > div:first-of-type .section-wrapper {\n        padding-top: 55px;\n    }\n\n    .home-left-part {\n        flex: 0 0 100%;\n        margin: 0;\n    }\n\n    .home-right-part {\n        display: none;\n    }\n\n    h1.entry-title {\n        font-size: 50px;\n        line-height: 100%;\n    }\n\n    .site-des {\n        font-size: 20px;\n    }\n\n    .service-holder {\n        margin-bottom: 30px !important;\n        width: 100%;\n        margin-right: 0;\n    }\n\n    .services-wrapper > div:last-of-type {\n        margin-bottom: 0 !important;\n    }\n\n    #portfolio-wrapper {\n        margin-top: 30px;\n    }\n\n    .category-filter-list {\n        top: 0;\n    }\n\n    .grid {\n        width: 100%;\n        margin: 0;\n    }\n\n    .category-filter {\n        top: -30px;\n    }\n\n    .grid-sizer,\n    .grid-item {\n        width: 100% !important;\n    }\n\n    .grid-item {\n        border: 0;\n        margin-bottom: 30px;\n    }\n\n    #portfolio-grid > div:last-of-type {\n        margin-bottom: 0;\n    }\n\n    .timeline-event-content {\n        margin-left: 10px;\n    }\n\n    li.timeline-event {\n        margin-left: 30px;\n    }\n\n    ul.timeline-holder {\n        padding-left: 70px;\n    }\n\n    .timeline-event-date {\n        left: -100px;\n    }\n\n    .skill-holder {\n        margin-bottom: 35px;\n    }\n\n    .skills-holder.sec-skills-holder {\n        margin-top: -25px;\n    }\n\n    .skill-circle-holder {\n        display: block !important;\n    }\n\n    .skill-text {\n        width: 100%;\n    }\n\n    .skill-percent {\n        position: absolute;\n        top: -30px;\n    }\n\n    .skill {\n        margin-bottom: 5px;\n    }\n\n    .contact-form {\n        padding: 7%;\n    }\n\n    .contact-form input[type=submit] {\n        font-size: 13px;\n        padding: 15px;\n    }\n\n}\n\n@media screen and (max-width: 650px) {\n\n    .menu-holder {\n        width: 100%;\n        transform: translateX(-100%);\n        padding-top: 70px;\n        padding-left: 20px;\n        overflow: auto;\n    }\n\n    .button-group-wrapper > a:last-of-type {\n        margin-bottom: 0;\n    }\n\n    .skill-circle-holder > div:nth-of-type(n) {\n        display: table !important;\n        width: 100%;\n        margin-left: auto !important;\n        margin-right: auto !important;\n    }\n\n    .skill-circle-holder > div:nth-last-of-type(2) {\n        margin-bottom: 40px !important;\n    }\n\n    .skill-circle-wrapper canvas {\n        max-width: none;\n        max-height: none;\n    }\n\n}\n\n@media screen and (max-width: 480px) {\n\n    .button-group-wrapper > .button {\n        display: table;\n        margin-left: 0;\n        margin-bottom: 20px;\n    }\n\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = urlPropertyFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/apple/Documents/hobby_projects/urbanogardun-website-src/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // This default export is required in a new `pages/_app.js` file.

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
}

/***/ }),

/***/ "./public/images/close-left-arrow.png":
/*!********************************************!*\
  !*** ./public/images/close-left-arrow.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/close-left-arrow.834a54d88faef9a44bd253abe6c1297a.png";

/***/ }),

/***/ "./public/images/close.png":
/*!*********************************!*\
  !*** ./public/images/close.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/close.367eb7830a48a4f4b3d52769d03196f8.png";

/***/ }),

/***/ "./public/images/nav_left.png":
/*!************************************!*\
  !*** ./public/images/nav_left.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nav_left.6b8821ade6433e87478ed01435c109f7.png";

/***/ }),

/***/ "./public/images/nav_right.png":
/*!*************************************!*\
  !*** ./public/images/nav_right.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nav_right.50404b8ef2e842b84d6520a632ba869e.png";

/***/ }),

/***/ "./public/images/prettyPhoto/dark_rounded/btnNext.png":
/*!************************************************************!*\
  !*** ./public/images/prettyPhoto/dark_rounded/btnNext.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/btnNext.11f54babc106218f3f87f45fe5cc8804.png";

/***/ }),

/***/ "./public/images/prettyPhoto/dark_rounded/btnPrevious.png":
/*!****************************************************************!*\
  !*** ./public/images/prettyPhoto/dark_rounded/btnPrevious.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/btnPrevious.11bf1d3d3a9bcf4ad24ce770367634a9.png";

/***/ }),

/***/ "./public/images/prettyPhoto/dark_rounded/contentPattern.png":
/*!*******************************************************************!*\
  !*** ./public/images/prettyPhoto/dark_rounded/contentPattern.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/contentPattern.1309f7a6f24dac466e3cb221b38c1e43.png";

/***/ }),

/***/ "./public/images/prettyPhoto/dark_rounded/loader.gif":
/*!***********************************************************!*\
  !*** ./public/images/prettyPhoto/dark_rounded/loader.gif ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/loader.b768fa9fab4cb61fb6ab48e652d3ca5b.gif";

/***/ }),

/***/ "./public/images/prettyPhoto/dark_rounded/sprite.png":
/*!***********************************************************!*\
  !*** ./public/images/prettyPhoto/dark_rounded/sprite.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sprite.3a5af6510533f631b64a4883f992b4aa.png";

/***/ }),

/***/ "./public/images/prettyPhoto/dark_square/btnNext.png":
/*!***********************************************************!*\
  !*** ./public/images/prettyPhoto/dark_square/btnNext.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/btnNext.11f54babc106218f3f87f45fe5cc8804.png";

/***/ }),

/***/ "./public/images/prettyPhoto/dark_square/btnPrevious.png":
/*!***************************************************************!*\
  !*** ./public/images/prettyPhoto/dark_square/btnPrevious.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/btnPrevious.11bf1d3d3a9bcf4ad24ce770367634a9.png";

/***/ }),

/***/ "./public/images/prettyPhoto/dark_square/loader.gif":
/*!**********************************************************!*\
  !*** ./public/images/prettyPhoto/dark_square/loader.gif ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/loader.b768fa9fab4cb61fb6ab48e652d3ca5b.gif";

/***/ }),

/***/ "./public/images/prettyPhoto/dark_square/sprite.png":
/*!**********************************************************!*\
  !*** ./public/images/prettyPhoto/dark_square/sprite.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sprite.4dd9d22b2cdbe21cdc8308b4d4c7165b.png";

/***/ }),

/***/ "./public/images/prettyPhoto/default/default_thumb.png":
/*!*************************************************************!*\
  !*** ./public/images/prettyPhoto/default/default_thumb.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/default_thumb.195c8106124ea24c2b5fa86134afd937.png";

/***/ }),

/***/ "./public/images/prettyPhoto/default/loader.gif":
/*!******************************************************!*\
  !*** ./public/images/prettyPhoto/default/loader.gif ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/loader.dda5343c1a64e4e78dc8bdce58b83666.gif";

/***/ }),

/***/ "./public/images/prettyPhoto/default/sprite.png":
/*!******************************************************!*\
  !*** ./public/images/prettyPhoto/default/sprite.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sprite.2544efbd4358184cf86bb4d6461ddc35.png";

/***/ }),

/***/ "./public/images/prettyPhoto/default/sprite_next.png":
/*!***********************************************************!*\
  !*** ./public/images/prettyPhoto/default/sprite_next.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sprite_next.3eaef6fe88002053ec2c4133af4d00bc.png";

/***/ }),

/***/ "./public/images/prettyPhoto/default/sprite_prev.png":
/*!***********************************************************!*\
  !*** ./public/images/prettyPhoto/default/sprite_prev.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sprite_prev.7df3e37348b276914eca6ea306322d3e.png";

/***/ }),

/***/ "./public/images/prettyPhoto/facebook/btnNext.png":
/*!********************************************************!*\
  !*** ./public/images/prettyPhoto/facebook/btnNext.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/btnNext.7c53170fdb8c55193cdd0316a6671e3f.png";

/***/ }),

/***/ "./public/images/prettyPhoto/facebook/btnPrevious.png":
/*!************************************************************!*\
  !*** ./public/images/prettyPhoto/facebook/btnPrevious.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/btnPrevious.280224414ea9ce74e99a9b714cecddeb.png";

/***/ }),

/***/ "./public/images/prettyPhoto/facebook/contentPatternBottom.png":
/*!*********************************************************************!*\
  !*** ./public/images/prettyPhoto/facebook/contentPatternBottom.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/contentPatternBottom.514422314be85d7895faf60f974bae94.png";

/***/ }),

/***/ "./public/images/prettyPhoto/facebook/contentPatternLeft.png":
/*!*******************************************************************!*\
  !*** ./public/images/prettyPhoto/facebook/contentPatternLeft.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/contentPatternLeft.b456b9dd2fb7045f644c05cf452555c7.png";

/***/ }),

/***/ "./public/images/prettyPhoto/facebook/contentPatternRight.png":
/*!********************************************************************!*\
  !*** ./public/images/prettyPhoto/facebook/contentPatternRight.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/contentPatternRight.73e6f3e04d424f6c83dff3d6e4e9dee7.png";

/***/ }),

/***/ "./public/images/prettyPhoto/facebook/contentPatternTop.png":
/*!******************************************************************!*\
  !*** ./public/images/prettyPhoto/facebook/contentPatternTop.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/contentPatternTop.018fef9993dea2efdaea04cabd2542b9.png";

/***/ }),

/***/ "./public/images/prettyPhoto/facebook/default_thumbnail.gif":
/*!******************************************************************!*\
  !*** ./public/images/prettyPhoto/facebook/default_thumbnail.gif ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/default_thumbnail.bd82355c19029af11771fb2032fa9ea4.gif";

/***/ }),

/***/ "./public/images/prettyPhoto/facebook/loader.gif":
/*!*******************************************************!*\
  !*** ./public/images/prettyPhoto/facebook/loader.gif ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/loader.0d4bc74caa7cf4a8e7983f08b320384a.gif";

/***/ }),

/***/ "./public/images/prettyPhoto/facebook/sprite.png":
/*!*******************************************************!*\
  !*** ./public/images/prettyPhoto/facebook/sprite.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sprite.c471e58c25a22a2493a8eafe2820a52c.png";

/***/ }),

/***/ "./public/images/prettyPhoto/light_rounded/btnNext.png":
/*!*************************************************************!*\
  !*** ./public/images/prettyPhoto/light_rounded/btnNext.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/btnNext.11f54babc106218f3f87f45fe5cc8804.png";

/***/ }),

/***/ "./public/images/prettyPhoto/light_rounded/btnPrevious.png":
/*!*****************************************************************!*\
  !*** ./public/images/prettyPhoto/light_rounded/btnPrevious.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/btnPrevious.11bf1d3d3a9bcf4ad24ce770367634a9.png";

/***/ }),

/***/ "./public/images/prettyPhoto/light_rounded/loader.gif":
/*!************************************************************!*\
  !*** ./public/images/prettyPhoto/light_rounded/loader.gif ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/loader.0d4bc74caa7cf4a8e7983f08b320384a.gif";

/***/ }),

/***/ "./public/images/prettyPhoto/light_rounded/sprite.png":
/*!************************************************************!*\
  !*** ./public/images/prettyPhoto/light_rounded/sprite.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sprite.a6501da5546355a4f58b71288ec6a65d.png";

/***/ }),

/***/ "./public/images/prettyPhoto/light_square/btnNext.png":
/*!************************************************************!*\
  !*** ./public/images/prettyPhoto/light_square/btnNext.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/btnNext.11f54babc106218f3f87f45fe5cc8804.png";

/***/ }),

/***/ "./public/images/prettyPhoto/light_square/btnPrevious.png":
/*!****************************************************************!*\
  !*** ./public/images/prettyPhoto/light_square/btnPrevious.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/btnPrevious.11bf1d3d3a9bcf4ad24ce770367634a9.png";

/***/ }),

/***/ "./public/images/prettyPhoto/light_square/sprite.png":
/*!***********************************************************!*\
  !*** ./public/images/prettyPhoto/light_square/sprite.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sprite.4dd9d22b2cdbe21cdc8308b4d4c7165b.png";

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./style.css",
      function () {
        var newContent = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./style.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! /Users/apple/Documents/hobby_projects/urbanogardun-website-src/node_modules/next/dist/client/router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map