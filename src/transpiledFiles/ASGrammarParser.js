"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _antlr = _interopRequireDefault(require("antlr4"));
var _ASGrammarListener = _interopRequireDefault(require("./ASGrammarListener.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // Generated from ASGrammar.g4 by ANTLR 4.13.0
// jshint ignore: start
var serializedATN = [4, 1, 101, 575, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 1, 0, 5, 0, 112, 8, 0, 10, 0, 12, 0, 115, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 3, 2, 124, 8, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 137, 8, 4, 1, 5, 1, 5, 3, 5, 141, 8, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 163, 8, 10, 1, 10, 3, 10, 166, 8, 10, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 3, 12, 173, 8, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 182, 8, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 190, 8, 13, 1, 13, 3, 13, 193, 8, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 3, 16, 212, 8, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 3, 18, 223, 8, 18, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 1, 21, 1, 22, 1, 22, 5, 22, 236, 8, 22, 10, 22, 12, 22, 239, 9, 22, 1, 22, 3, 22, 242, 8, 22, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25, 3, 25, 255, 8, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 26, 1, 26, 1, 26, 1, 27, 4, 27, 265, 8, 27, 11, 27, 12, 27, 266, 1, 28, 1, 28, 3, 28, 271, 8, 28, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 3, 29, 294, 8, 29, 1, 30, 1, 30, 3, 30, 298, 8, 30, 1, 30, 1, 30, 1, 31, 1, 31, 1, 31, 1, 31, 3, 31, 306, 8, 31, 1, 31, 1, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32, 3, 32, 315, 8, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 33, 1, 33, 1, 34, 1, 34, 1, 34, 3, 34, 326, 8, 34, 1, 34, 1, 34, 1, 35, 1, 35, 1, 35, 5, 35, 333, 8, 35, 10, 35, 12, 35, 336, 9, 35, 1, 36, 1, 36, 1, 36, 1, 36, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 3, 37, 351, 8, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 3, 37, 358, 8, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 3, 37, 375, 8, 37, 1, 37, 1, 37, 3, 37, 379, 8, 37, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 3, 40, 401, 8, 40, 3, 40, 403, 8, 40, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 3, 41, 410, 8, 41, 1, 41, 1, 41, 3, 41, 414, 8, 41, 1, 41, 3, 41, 417, 8, 41, 1, 41, 1, 41, 1, 41, 1, 42, 1, 42, 1, 42, 1, 42, 5, 42, 426, 8, 42, 10, 42, 12, 42, 429, 9, 42, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 5, 43, 437, 8, 43, 10, 43, 12, 43, 440, 9, 43, 1, 43, 3, 43, 443, 8, 43, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 3, 44, 462, 8, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 3, 44, 479, 8, 44, 1, 45, 1, 45, 1, 45, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 3, 46, 492, 8, 46, 1, 46, 3, 46, 495, 8, 46, 1, 46, 1, 46, 1, 46, 3, 46, 500, 8, 46, 1, 47, 5, 47, 503, 8, 47, 10, 47, 12, 47, 506, 9, 47, 1, 47, 3, 47, 509, 8, 47, 1, 47, 1, 47, 3, 47, 513, 8, 47, 1, 47, 1, 47, 3, 47, 517, 8, 47, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 3, 48, 529, 8, 48, 1, 49, 1, 49, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 3, 50, 538, 8, 50, 4, 50, 540, 8, 50, 11, 50, 12, 50, 541, 1, 50, 1, 50, 1, 51, 1, 51, 3, 51, 548, 8, 51, 1, 51, 1, 51, 1, 52, 1, 52, 1, 52, 1, 52, 3, 52, 556, 8, 52, 1, 53, 1, 53, 1, 53, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 3, 54, 571, 8, 54, 3, 54, 573, 8, 54, 1, 54, 0, 0, 55, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 0, 3, 1, 0, 31, 32, 3, 0, 7, 7, 69, 69, 101, 101, 6, 0, 2, 2, 7, 7, 17, 17, 68, 69, 98, 98, 100, 101, 637, 0, 113, 1, 0, 0, 0, 2, 118, 1, 0, 0, 0, 4, 121, 1, 0, 0, 0, 6, 127, 1, 0, 0, 0, 8, 132, 1, 0, 0, 0, 10, 138, 1, 0, 0, 0, 12, 142, 1, 0, 0, 0, 14, 146, 1, 0, 0, 0, 16, 148, 1, 0, 0, 0, 18, 152, 1, 0, 0, 0, 20, 154, 1, 0, 0, 0, 22, 167, 1, 0, 0, 0, 24, 172, 1, 0, 0, 0, 26, 174, 1, 0, 0, 0, 28, 198, 1, 0, 0, 0, 30, 205, 1, 0, 0, 0, 32, 208, 1, 0, 0, 0, 34, 213, 1, 0, 0, 0, 36, 222, 1, 0, 0, 0, 38, 224, 1, 0, 0, 0, 40, 226, 1, 0, 0, 0, 42, 229, 1, 0, 0, 0, 44, 233, 1, 0, 0, 0, 46, 246, 1, 0, 0, 0, 48, 249, 1, 0, 0, 0, 50, 252, 1, 0, 0, 0, 52, 260, 1, 0, 0, 0, 54, 264, 1, 0, 0, 0, 56, 268, 1, 0, 0, 0, 58, 293, 1, 0, 0, 0, 60, 295, 1, 0, 0, 0, 62, 301, 1, 0, 0, 0, 64, 311, 1, 0, 0, 0, 66, 320, 1, 0, 0, 0, 68, 322, 1, 0, 0, 0, 70, 329, 1, 0, 0, 0, 72, 337, 1, 0, 0, 0, 74, 378, 1, 0, 0, 0, 76, 380, 1, 0, 0, 0, 78, 385, 1, 0, 0, 0, 80, 402, 1, 0, 0, 0, 82, 404, 1, 0, 0, 0, 84, 421, 1, 0, 0, 0, 86, 442, 1, 0, 0, 0, 88, 478, 1, 0, 0, 0, 90, 480, 1, 0, 0, 0, 92, 483, 1, 0, 0, 0, 94, 504, 1, 0, 0, 0, 96, 528, 1, 0, 0, 0, 98, 530, 1, 0, 0, 0, 100, 532, 1, 0, 0, 0, 102, 545, 1, 0, 0, 0, 104, 555, 1, 0, 0, 0, 106, 557, 1, 0, 0, 0, 108, 560, 1, 0, 0, 0, 110, 112, 3, 58, 29, 0, 111, 110, 1, 0, 0, 0, 112, 115, 1, 0, 0, 0, 113, 111, 1, 0, 0, 0, 113, 114, 1, 0, 0, 0, 114, 116, 1, 0, 0, 0, 115, 113, 1, 0, 0, 0, 116, 117, 5, 0, 0, 1, 117, 1, 1, 0, 0, 0, 118, 119, 5, 1, 0, 0, 119, 120, 3, 86, 43, 0, 120, 3, 1, 0, 0, 0, 121, 123, 5, 2, 0, 0, 122, 124, 5, 3, 0, 0, 123, 122, 1, 0, 0, 0, 123, 124, 1, 0, 0, 0, 124, 125, 1, 0, 0, 0, 125, 126, 3, 86, 43, 0, 126, 5, 1, 0, 0, 0, 127, 128, 5, 4, 0, 0, 128, 129, 3, 84, 42, 0, 129, 130, 5, 5, 0, 0, 130, 131, 3, 86, 43, 0, 131, 7, 1, 0, 0, 0, 132, 133, 5, 6, 0, 0, 133, 136, 3, 86, 43, 0, 134, 135, 5, 7, 0, 0, 135, 137, 3, 86, 43, 0, 136, 134, 1, 0, 0, 0, 136, 137, 1, 0, 0, 0, 137, 9, 1, 0, 0, 0, 138, 140, 5, 8, 0, 0, 139, 141, 3, 86, 43, 0, 140, 139, 1, 0, 0, 0, 140, 141, 1, 0, 0, 0, 141, 11, 1, 0, 0, 0, 142, 143, 5, 9, 0, 0, 143, 144, 5, 10, 0, 0, 144, 145, 3, 86, 43, 0, 145, 13, 1, 0, 0, 0, 146, 147, 5, 11, 0, 0, 147, 15, 1, 0, 0, 0, 148, 149, 5, 9, 0, 0, 149, 150, 5, 12, 0, 0, 150, 151, 3, 86, 43, 0, 151, 17, 1, 0, 0, 0, 152, 153, 5, 13, 0, 0, 153, 19, 1, 0, 0, 0, 154, 162, 5, 14, 0, 0, 155, 163, 3, 86, 43, 0, 156, 157, 5, 15, 0, 0, 157, 158, 5, 16, 0, 0, 158, 159, 5, 17, 0, 0, 159, 160, 3, 86, 43, 0, 160, 161, 5, 18, 0, 0, 161, 163, 1, 0, 0, 0, 162, 155, 1, 0, 0, 0, 162, 156, 1, 0, 0, 0, 163, 165, 1, 0, 0, 0, 164, 166, 3, 22, 11, 0, 165, 164, 1, 0, 0, 0, 165, 166, 1, 0, 0, 0, 166, 21, 1, 0, 0, 0, 167, 168, 5, 19, 0, 0, 168, 169, 3, 102, 51, 0, 169, 23, 1, 0, 0, 0, 170, 173, 3, 26, 13, 0, 171, 173, 3, 28, 14, 0, 172, 170, 1, 0, 0, 0, 172, 171, 1, 0, 0, 0, 173, 25, 1, 0, 0, 0, 174, 192, 5, 20, 0, 0, 175, 176, 5, 21, 0, 0, 176, 181, 3, 86, 43, 0, 177, 178, 5, 22, 0, 0, 178, 182, 3, 72, 36, 0, 179, 180, 5, 23, 0, 0, 180, 182, 3, 94, 47, 0, 181, 177, 1, 0, 0, 0, 181, 179, 1, 0, 0, 0, 182, 193, 1, 0, 0, 0, 183, 184, 5, 24, 0, 0, 184, 193, 3, 86, 43, 0, 185, 186, 5, 22, 0, 0, 186, 189, 3, 72, 36, 0, 187, 188, 5, 25, 0, 0, 188, 190, 3, 86, 43, 0, 189, 187, 1, 0, 0, 0, 189, 190, 1, 0, 0, 0, 190, 193, 1, 0, 0, 0, 191, 193, 3, 86, 43, 0, 192, 175, 1, 0, 0, 0, 192, 183, 1, 0, 0, 0, 192, 185, 1, 0, 0, 0, 192, 191, 1, 0, 0, 0, 193, 194, 1, 0, 0, 0, 194, 195, 3, 54, 27, 0, 195, 196, 5, 26, 0, 0, 196, 197, 5, 20, 0, 0, 197, 27, 1, 0, 0, 0, 198, 199, 5, 27, 0, 0, 199, 200, 3, 86, 43, 0, 200, 201, 5, 28, 0, 0, 201, 202, 3, 54, 27, 0, 202, 203, 5, 26, 0, 0, 203, 204, 5, 27, 0, 0, 204, 29, 1, 0, 0, 0, 205, 206, 5, 29, 0, 0, 206, 207, 5, 20, 0, 0, 207, 31, 1, 0, 0, 0, 208, 211, 5, 30, 0, 0, 209, 212, 3, 34, 17, 0, 210, 212, 3, 40, 20, 0, 211, 209, 1, 0, 0, 0, 211, 210, 1, 0, 0, 0, 212, 33, 1, 0, 0, 0, 213, 214, 3, 38, 19, 0, 214, 215, 5, 98, 0, 0, 215, 216, 3, 36, 18, 0, 216, 35, 1, 0, 0, 0, 217, 223, 3, 52, 26, 0, 218, 219, 3, 54, 27, 0, 219, 220, 5, 26, 0, 0, 220, 221, 5, 30, 0, 0, 221, 223, 1, 0, 0, 0, 222, 217, 1, 0, 0, 0, 222, 218, 1, 0, 0, 0, 223, 37, 1, 0, 0, 0, 224, 225, 7, 0, 0, 0, 225, 39, 1, 0, 0, 0, 226, 227, 3, 84, 42, 0, 227, 228, 3, 36, 18, 0, 228, 41, 1, 0, 0, 0, 229, 230, 5, 33, 0, 0, 230, 231, 5, 31, 0, 0, 231, 232, 5, 98, 0, 0, 232, 43, 1, 0, 0, 0, 233, 237, 3, 50, 25, 0, 234, 236, 3, 46, 23, 0, 235, 234, 1, 0, 0, 0, 236, 239, 1, 0, 0, 0, 237, 235, 1, 0, 0, 0, 237, 238, 1, 0, 0, 0, 238, 241, 1, 0, 0, 0, 239, 237, 1, 0, 0, 0, 240, 242, 3, 48, 24, 0, 241, 240, 1, 0, 0, 0, 241, 242, 1, 0, 0, 0, 242, 243, 1, 0, 0, 0, 243, 244, 5, 26, 0, 0, 244, 245, 5, 34, 0, 0, 245, 45, 1, 0, 0, 0, 246, 247, 5, 35, 0, 0, 247, 248, 3, 50, 25, 0, 248, 47, 1, 0, 0, 0, 249, 250, 5, 35, 0, 0, 250, 251, 3, 54, 27, 0, 251, 49, 1, 0, 0, 0, 252, 254, 5, 34, 0, 0, 253, 255, 3, 74, 37, 0, 254, 253, 1, 0, 0, 0, 254, 255, 1, 0, 0, 0, 255, 256, 1, 0, 0, 0, 256, 257, 3, 86, 43, 0, 257, 258, 5, 28, 0, 0, 258, 259, 3, 54, 27, 0, 259, 51, 1, 0, 0, 0, 260, 261, 5, 5, 0, 0, 261, 262, 3, 58, 29, 0, 262, 53, 1, 0, 0, 0, 263, 265, 3, 58, 29, 0, 264, 263, 1, 0, 0, 0, 265, 266, 1, 0, 0, 0, 266, 264, 1, 0, 0, 0, 266, 267, 1, 0, 0, 0, 267, 55, 1, 0, 0, 0, 268, 270, 5, 36, 0, 0, 269, 271, 3, 86, 43, 0, 270, 269, 1, 0, 0, 0, 270, 271, 1, 0, 0, 0, 271, 57, 1, 0, 0, 0, 272, 294, 3, 24, 12, 0, 273, 294, 3, 6, 3, 0, 274, 294, 3, 8, 4, 0, 275, 294, 3, 82, 41, 0, 276, 294, 3, 16, 8, 0, 277, 294, 3, 62, 31, 0, 278, 294, 3, 30, 15, 0, 279, 294, 3, 56, 28, 0, 280, 294, 3, 64, 32, 0, 281, 294, 3, 108, 54, 0, 282, 294, 3, 92, 46, 0, 283, 294, 3, 20, 10, 0, 284, 294, 3, 68, 34, 0, 285, 294, 3, 76, 38, 0, 286, 294, 3, 44, 22, 0, 287, 294, 3, 2, 1, 0, 288, 294, 3, 10, 5, 0, 289, 294, 3, 12, 6, 0, 290, 294, 3, 14, 7, 0, 291, 294, 3, 32, 16, 0, 292, 294, 5, 13, 0, 0, 293, 272, 1, 0, 0, 0, 293, 273, 1, 0, 0, 0, 293, 274, 1, 0, 0, 0, 293, 275, 1, 0, 0, 0, 293, 276, 1, 0, 0, 0, 293, 277, 1, 0, 0, 0, 293, 278, 1, 0, 0, 0, 293, 279, 1, 0, 0, 0, 293, 280, 1, 0, 0, 0, 293, 281, 1, 0, 0, 0, 293, 282, 1, 0, 0, 0, 293, 283, 1, 0, 0, 0, 293, 284, 1, 0, 0, 0, 293, 285, 1, 0, 0, 0, 293, 286, 1, 0, 0, 0, 293, 287, 1, 0, 0, 0, 293, 288, 1, 0, 0, 0, 293, 289, 1, 0, 0, 0, 293, 290, 1, 0, 0, 0, 293, 291, 1, 0, 0, 0, 293, 292, 1, 0, 0, 0, 294, 59, 1, 0, 0, 0, 295, 297, 5, 15, 0, 0, 296, 298, 3, 70, 35, 0, 297, 296, 1, 0, 0, 0, 297, 298, 1, 0, 0, 0, 298, 299, 1, 0, 0, 0, 299, 300, 5, 18, 0, 0, 300, 61, 1, 0, 0, 0, 301, 302, 5, 37, 0, 0, 302, 305, 5, 38, 0, 0, 303, 306, 3, 60, 30, 0, 304, 306, 5, 101, 0, 0, 305, 303, 1, 0, 0, 0, 305, 304, 1, 0, 0, 0, 305, 306, 1, 0, 0, 0, 306, 307, 1, 0, 0, 0, 307, 308, 3, 54, 27, 0, 308, 309, 5, 26, 0, 0, 309, 310, 5, 38, 0, 0, 310, 63, 1, 0, 0, 0, 311, 312, 5, 37, 0, 0, 312, 314, 5, 101, 0, 0, 313, 315, 3, 60, 30, 0, 314, 313, 1, 0, 0, 0, 314, 315, 1, 0, 0, 0, 315, 316, 1, 0, 0, 0, 316, 317, 3, 66, 33, 0, 317, 318, 5, 26, 0, 0, 318, 319, 5, 101, 0, 0, 319, 65, 1, 0, 0, 0, 320, 321, 3, 54, 27, 0, 321, 67, 1, 0, 0, 0, 322, 323, 5, 101, 0, 0, 323, 325, 5, 15, 0, 0, 324, 326, 3, 70, 35, 0, 325, 324, 1, 0, 0, 0, 325, 326, 1, 0, 0, 0, 326, 327, 1, 0, 0, 0, 327, 328, 5, 18, 0, 0, 328, 69, 1, 0, 0, 0, 329, 334, 3, 86, 43, 0, 330, 331, 5, 39, 0, 0, 331, 333, 3, 86, 43, 0, 332, 330, 1, 0, 0, 0, 333, 336, 1, 0, 0, 0, 334, 332, 1, 0, 0, 0, 334, 335, 1, 0, 0, 0, 335, 71, 1, 0, 0, 0, 336, 334, 1, 0, 0, 0, 337, 338, 3, 86, 43, 0, 338, 339, 5, 5, 0, 0, 339, 340, 3, 86, 43, 0, 340, 73, 1, 0, 0, 0, 341, 379, 5, 40, 0, 0, 342, 379, 5, 41, 0, 0, 343, 379, 5, 42, 0, 0, 344, 379, 5, 43, 0, 0, 345, 379, 5, 44, 0, 0, 346, 379, 5, 45, 0, 0, 347, 351, 5, 46, 0, 0, 348, 349, 5, 47, 0, 0, 349, 351, 5, 48, 0, 0, 350, 347, 1, 0, 0, 0, 350, 348, 1, 0, 0, 0, 351, 379, 1, 0, 0, 0, 352, 358, 5, 49, 0, 0, 353, 354, 5, 47, 0, 0, 354, 355, 5, 50, 0, 0, 355, 358, 5, 5, 0, 0, 356, 358, 5, 47, 0, 0, 357, 352, 1, 0, 0, 0, 357, 353, 1, 0, 0, 0, 357, 356, 1, 0, 0, 0, 358, 379, 1, 0, 0, 0, 359, 379, 5, 51, 0, 0, 360, 379, 5, 52, 0, 0, 361, 379, 5, 53, 0, 0, 362, 379, 5, 54, 0, 0, 363, 379, 5, 55, 0, 0, 364, 379, 5, 56, 0, 0, 365, 379, 5, 57, 0, 0, 366, 379, 5, 48, 0, 0, 367, 379, 5, 58, 0, 0, 368, 374, 5, 59, 0, 0, 369, 370, 5, 15, 0, 0, 370, 371, 5, 60, 0, 0, 371, 372, 3, 86, 43, 0, 372, 373, 5, 18, 0, 0, 373, 375, 1, 0, 0, 0, 374, 369, 1, 0, 0, 0, 374, 375, 1, 0, 0, 0, 375, 379, 1, 0, 0, 0, 376, 379, 5, 3, 0, 0, 377, 379, 5, 23, 0, 0, 378, 341, 1, 0, 0, 0, 378, 342, 1, 0, 0, 0, 378, 343, 1, 0, 0, 0, 378, 344, 1, 0, 0, 0, 378, 345, 1, 0, 0, 0, 378, 346, 1, 0, 0, 0, 378, 350, 1, 0, 0, 0, 378, 357, 1, 0, 0, 0, 378, 359, 1, 0, 0, 0, 378, 360, 1, 0, 0, 0, 378, 361, 1, 0, 0, 0, 378, 362, 1, 0, 0, 0, 378, 363, 1, 0, 0, 0, 378, 364, 1, 0, 0, 0, 378, 365, 1, 0, 0, 0, 378, 366, 1, 0, 0, 0, 378, 367, 1, 0, 0, 0, 378, 368, 1, 0, 0, 0, 378, 376, 1, 0, 0, 0, 378, 377, 1, 0, 0, 0, 379, 75, 1, 0, 0, 0, 380, 381, 5, 61, 0, 0, 381, 382, 3, 84, 42, 0, 382, 383, 5, 5, 0, 0, 383, 384, 3, 86, 43, 0, 384, 77, 1, 0, 0, 0, 385, 386, 5, 62, 0, 0, 386, 387, 5, 101, 0, 0, 387, 388, 5, 63, 0, 0, 388, 389, 3, 104, 52, 0, 389, 79, 1, 0, 0, 0, 390, 391, 5, 62, 0, 0, 391, 392, 5, 64, 0, 0, 392, 403, 5, 101, 0, 0, 393, 400, 5, 37, 0, 0, 394, 401, 5, 38, 0, 0, 395, 396, 5, 9, 0, 0, 396, 397, 5, 10, 0, 0, 397, 401, 3, 94, 47, 0, 398, 401, 5, 65, 0, 0, 399, 401, 5, 66, 0, 0, 400, 394, 1, 0, 0, 0, 400, 395, 1, 0, 0, 0, 400, 398, 1, 0, 0, 0, 400, 399, 1, 0, 0, 0, 401, 403, 1, 0, 0, 0, 402, 390, 1, 0, 0, 0, 402, 393, 1, 0, 0, 0, 403, 81, 1, 0, 0, 0, 404, 405, 5, 67, 0, 0, 405, 416, 3, 54, 27, 0, 406, 407, 5, 37, 0, 0, 407, 409, 5, 6, 0, 0, 408, 410, 5, 101, 0, 0, 409, 408, 1, 0, 0, 0, 409, 410, 1, 0, 0, 0, 410, 413, 1, 0, 0, 0, 411, 412, 5, 7, 0, 0, 412, 414, 5, 101, 0, 0, 413, 411, 1, 0, 0, 0, 413, 414, 1, 0, 0, 0, 414, 415, 1, 0, 0, 0, 415, 417, 3, 54, 27, 0, 416, 406, 1, 0, 0, 0, 416, 417, 1, 0, 0, 0, 417, 418, 1, 0, 0, 0, 418, 419, 5, 26, 0, 0, 419, 420, 5, 67, 0, 0, 420, 83, 1, 0, 0, 0, 421, 427, 3, 88, 44, 0, 422, 423, 3, 74, 37, 0, 423, 424, 3, 88, 44, 0, 424, 426, 1, 0, 0, 0, 425, 422, 1, 0, 0, 0, 426, 429, 1, 0, 0, 0, 427, 425, 1, 0, 0, 0, 427, 428, 1, 0, 0, 0, 428, 85, 1, 0, 0, 0, 429, 427, 1, 0, 0, 0, 430, 431, 5, 15, 0, 0, 431, 432, 3, 86, 43, 0, 432, 438, 5, 18, 0, 0, 433, 434, 3, 74, 37, 0, 434, 435, 3, 86, 43, 0, 435, 437, 1, 0, 0, 0, 436, 433, 1, 0, 0, 0, 437, 440, 1, 0, 0, 0, 438, 436, 1, 0, 0, 0, 438, 439, 1, 0, 0, 0, 439, 443, 1, 0, 0, 0, 440, 438, 1, 0, 0, 0, 441, 443, 3, 84, 42, 0, 442, 430, 1, 0, 0, 0, 442, 441, 1, 0, 0, 0, 443, 87, 1, 0, 0, 0, 444, 479, 3, 106, 53, 0, 445, 479, 3, 4, 2, 0, 446, 479, 3, 108, 54, 0, 447, 479, 5, 68, 0, 0, 448, 479, 5, 36, 0, 0, 449, 479, 3, 42, 21, 0, 450, 479, 3, 68, 34, 0, 451, 452, 5, 69, 0, 0, 452, 453, 5, 70, 0, 0, 453, 454, 5, 3, 0, 0, 454, 455, 5, 15, 0, 0, 455, 456, 5, 71, 0, 0, 456, 457, 5, 72, 0, 0, 457, 461, 3, 86, 43, 0, 458, 459, 5, 73, 0, 0, 459, 460, 5, 74, 0, 0, 460, 462, 3, 86, 43, 0, 461, 458, 1, 0, 0, 0, 461, 462, 1, 0, 0, 0, 462, 463, 1, 0, 0, 0, 463, 464, 5, 18, 0, 0, 464, 479, 1, 0, 0, 0, 465, 466, 5, 69, 0, 0, 466, 467, 3, 86, 43, 0, 467, 468, 5, 75, 0, 0, 468, 469, 3, 86, 43, 0, 469, 479, 1, 0, 0, 0, 470, 479, 3, 92, 46, 0, 471, 479, 5, 99, 0, 0, 472, 479, 5, 100, 0, 0, 473, 479, 5, 98, 0, 0, 474, 479, 5, 97, 0, 0, 475, 479, 3, 94, 47, 0, 476, 479, 3, 100, 50, 0, 477, 479, 3, 102, 51, 0, 478, 444, 1, 0, 0, 0, 478, 445, 1, 0, 0, 0, 478, 446, 1, 0, 0, 0, 478, 447, 1, 0, 0, 0, 478, 448, 1, 0, 0, 0, 478, 449, 1, 0, 0, 0, 478, 450, 1, 0, 0, 0, 478, 451, 1, 0, 0, 0, 478, 465, 1, 0, 0, 0, 478, 470, 1, 0, 0, 0, 478, 471, 1, 0, 0, 0, 478, 472, 1, 0, 0, 0, 478, 473, 1, 0, 0, 0, 478, 474, 1, 0, 0, 0, 478, 475, 1, 0, 0, 0, 478, 476, 1, 0, 0, 0, 478, 477, 1, 0, 0, 0, 479, 89, 1, 0, 0, 0, 480, 481, 5, 21, 0, 0, 481, 482, 5, 76, 0, 0, 482, 91, 1, 0, 0, 0, 483, 484, 5, 77, 0, 0, 484, 485, 5, 78, 0, 0, 485, 494, 3, 94, 47, 0, 486, 487, 5, 79, 0, 0, 487, 492, 5, 80, 0, 0, 488, 489, 5, 81, 0, 0, 489, 490, 5, 26, 0, 0, 490, 492, 5, 3, 0, 0, 491, 486, 1, 0, 0, 0, 491, 488, 1, 0, 0, 0, 492, 493, 1, 0, 0, 0, 493, 495, 3, 94, 47, 0, 494, 491, 1, 0, 0, 0, 494, 495, 1, 0, 0, 0, 495, 499, 1, 0, 0, 0, 496, 497, 3, 90, 45, 0, 497, 498, 3, 100, 50, 0, 498, 500, 1, 0, 0, 0, 499, 496, 1, 0, 0, 0, 499, 500, 1, 0, 0, 0, 500, 93, 1, 0, 0, 0, 501, 503, 3, 96, 48, 0, 502, 501, 1, 0, 0, 0, 503, 506, 1, 0, 0, 0, 504, 502, 1, 0, 0, 0, 504, 505, 1, 0, 0, 0, 505, 508, 1, 0, 0, 0, 506, 504, 1, 0, 0, 0, 507, 509, 5, 101, 0, 0, 508, 507, 1, 0, 0, 0, 508, 509, 1, 0, 0, 0, 509, 510, 1, 0, 0, 0, 510, 512, 3, 98, 49, 0, 511, 513, 5, 101, 0, 0, 512, 511, 1, 0, 0, 0, 512, 513, 1, 0, 0, 0, 513, 516, 1, 0, 0, 0, 514, 515, 5, 82, 0, 0, 515, 517, 7, 1, 0, 0, 516, 514, 1, 0, 0, 0, 516, 517, 1, 0, 0, 0, 517, 95, 1, 0, 0, 0, 518, 529, 5, 83, 0, 0, 519, 529, 5, 80, 0, 0, 520, 529, 5, 84, 0, 0, 521, 529, 5, 85, 0, 0, 522, 529, 5, 86, 0, 0, 523, 529, 5, 87, 0, 0, 524, 525, 5, 26, 0, 0, 525, 529, 5, 3, 0, 0, 526, 529, 5, 88, 0, 0, 527, 529, 5, 89, 0, 0, 528, 518, 1, 0, 0, 0, 528, 519, 1, 0, 0, 0, 528, 520, 1, 0, 0, 0, 528, 521, 1, 0, 0, 0, 528, 522, 1, 0, 0, 0, 528, 523, 1, 0, 0, 0, 528, 524, 1, 0, 0, 0, 528, 526, 1, 0, 0, 0, 528, 527, 1, 0, 0, 0, 529, 97, 1, 0, 0, 0, 530, 531, 7, 2, 0, 0, 531, 99, 1, 0, 0, 0, 532, 539, 5, 90, 0, 0, 533, 534, 3, 94, 47, 0, 534, 535, 5, 63, 0, 0, 535, 537, 3, 86, 43, 0, 536, 538, 5, 39, 0, 0, 537, 536, 1, 0, 0, 0, 537, 538, 1, 0, 0, 0, 538, 540, 1, 0, 0, 0, 539, 533, 1, 0, 0, 0, 540, 541, 1, 0, 0, 0, 541, 539, 1, 0, 0, 0, 541, 542, 1, 0, 0, 0, 542, 543, 1, 0, 0, 0, 543, 544, 5, 91, 0, 0, 544, 101, 1, 0, 0, 0, 545, 547, 5, 90, 0, 0, 546, 548, 3, 70, 35, 0, 547, 546, 1, 0, 0, 0, 547, 548, 1, 0, 0, 0, 548, 549, 1, 0, 0, 0, 549, 550, 5, 91, 0, 0, 550, 103, 1, 0, 0, 0, 551, 556, 5, 100, 0, 0, 552, 556, 5, 97, 0, 0, 553, 556, 5, 98, 0, 0, 554, 556, 3, 106, 53, 0, 555, 551, 1, 0, 0, 0, 555, 552, 1, 0, 0, 0, 555, 553, 1, 0, 0, 0, 555, 554, 1, 0, 0, 0, 556, 105, 1, 0, 0, 0, 557, 558, 5, 92, 0, 0, 558, 559, 5, 68, 0, 0, 559, 107, 1, 0, 0, 0, 560, 561, 5, 71, 0, 0, 561, 562, 5, 72, 0, 0, 562, 572, 3, 86, 43, 0, 563, 564, 5, 93, 0, 0, 564, 565, 5, 90, 0, 0, 565, 566, 5, 98, 0, 0, 566, 570, 5, 91, 0, 0, 567, 568, 5, 73, 0, 0, 568, 569, 5, 86, 0, 0, 569, 571, 5, 98, 0, 0, 570, 567, 1, 0, 0, 0, 570, 571, 1, 0, 0, 0, 571, 573, 1, 0, 0, 0, 572, 563, 1, 0, 0, 0, 572, 573, 1, 0, 0, 0, 573, 109, 1, 0, 0, 0, 51, 113, 123, 136, 140, 162, 165, 172, 181, 189, 192, 211, 222, 237, 241, 254, 266, 270, 293, 297, 305, 314, 325, 334, 350, 357, 374, 378, 400, 402, 409, 413, 416, 427, 438, 442, 461, 478, 491, 494, 499, 504, 508, 512, 516, 528, 537, 541, 547, 555, 570, 572];
var atn = new _antlr["default"].atn.ATNDeserializer().deserialize(serializedATN);
var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new _antlr["default"].dfa.DFA(ds, index);
});
var sharedContextCache = new _antlr["default"].atn.PredictionContextCache();
var ASGrammarParser = /*#__PURE__*/function (_antlr4$Parser) {
  _inherits(ASGrammarParser, _antlr4$Parser);
  var _super = _createSuper(ASGrammarParser);
  function ASGrammarParser(input) {
    var _this;
    _classCallCheck(this, ASGrammarParser);
    _this = _super.call(this, input);
    _this._interp = new _antlr["default"].atn.ParserATNSimulator(_assertThisInitialized(_this), atn, decisionsToDFA, sharedContextCache);
    _this.ruleNames = ASGrammarParser.ruleNames;
    _this.literalNames = ASGrammarParser.literalNames;
    _this.symbolicNames = ASGrammarParser.symbolicNames;
    return _this;
  }
  _createClass(ASGrammarParser, [{
    key: "program",
    value: function program() {
      var localctx = new ProgramContext(this, this._ctx, this.state);
      this.enterRule(localctx, 0, ASGrammarParser.RULE_program);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~0x1f) === 0 && (1 << _la & 1745906514) !== 0 || (_la - 34 & ~0x1f) === 0 && (1 << _la - 34 & 134217741) !== 0 || (_la - 67 & ~0x1f) === 0 && (1 << _la - 67 & 1041) !== 0 || _la === 101) {
          this.state = 110;
          this.statement();
          this.state = 115;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 116;
        this.match(ASGrammarParser.EOF);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "delay",
    value: function delay() {
      var localctx = new DelayContext(this, this._ctx, this.state);
      this.enterRule(localctx, 2, ASGrammarParser.RULE_delay);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.match(ASGrammarParser.T__0);
        this.state = 119;
        this.expression();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "count",
    value: function count() {
      var localctx = new CountContext(this, this._ctx, this.state);
      this.enterRule(localctx, 4, ASGrammarParser.RULE_count);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.match(ASGrammarParser.T__1);
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 3) {
          this.state = 122;
          this.match(ASGrammarParser.T__2);
        }
        this.state = 125;
        this.expression();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "copy",
    value: function copy() {
      var localctx = new CopyContext(this, this._ctx, this.state);
      this.enterRule(localctx, 6, ASGrammarParser.RULE_copy);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(ASGrammarParser.T__3);
        this.state = 128;
        this.operation();
        this.state = 129;
        this.match(ASGrammarParser.T__4);
        this.state = 130;
        this.expression();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "error",
    value: function error() {
      var localctx = new ErrorContext(this, this._ctx, this.state);
      this.enterRule(localctx, 8, ASGrammarParser.RULE_error);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(ASGrammarParser.T__5);
        this.state = 133;
        this.expression();
        this.state = 136;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 7) {
          this.state = 134;
          this.match(ASGrammarParser.T__6);
          this.state = 135;
          this.expression();
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "click",
    value: function click() {
      var localctx = new ClickContext(this, this._ctx, this.state);
      this.enterRule(localctx, 10, ASGrammarParser.RULE_click);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.match(ASGrammarParser.T__7);
        this.state = 140;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 3, this._ctx);
        if (la_ === 1) {
          this.state = 139;
          this.expression();
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "openLocation",
    value: function openLocation() {
      var localctx = new OpenLocationContext(this, this._ctx, this.state);
      this.enterRule(localctx, 12, ASGrammarParser.RULE_openLocation);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(ASGrammarParser.T__8);
        this.state = 143;
        this.match(ASGrammarParser.T__9);
        this.state = 144;
        this.expression();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "activate",
    value: function activate() {
      var localctx = new ActivateContext(this, this._ctx, this.state);
      this.enterRule(localctx, 14, ASGrammarParser.RULE_activate);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.match(ASGrammarParser.T__10);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "openFile",
    value: function openFile() {
      var localctx = new OpenFileContext(this, this._ctx, this.state);
      this.enterRule(localctx, 16, ASGrammarParser.RULE_openFile);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.match(ASGrammarParser.T__8);
        this.state = 149;
        this.match(ASGrammarParser.T__11);
        this.state = 150;
        this.expression();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "save",
    value: function save() {
      var localctx = new SaveContext(this, this._ctx, this.state);
      this.enterRule(localctx, 18, ASGrammarParser.RULE_save);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.match(ASGrammarParser.T__12);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "keystroke",
    value: function keystroke() {
      var localctx = new KeystrokeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 20, ASGrammarParser.RULE_keystroke);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(ASGrammarParser.T__13);
        this.state = 162;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);
        switch (la_) {
          case 1:
            this.state = 155;
            this.expression();
            break;
          case 2:
            this.state = 156;
            this.match(ASGrammarParser.T__14);
            this.state = 157;
            this.match(ASGrammarParser.T__15);
            this.state = 158;
            this.match(ASGrammarParser.T__16);
            this.state = 159;
            this.expression();
            this.state = 160;
            this.match(ASGrammarParser.T__17);
            break;
        }
        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 19) {
          this.state = 164;
          this.using();
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "using",
    value: function using() {
      var localctx = new UsingContext(this, this._ctx, this.state);
      this.enterRule(localctx, 22, ASGrammarParser.RULE_using);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.match(ASGrammarParser.T__18);
        this.state = 168;
        this.list();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "loopStatement",
    value: function loopStatement() {
      var localctx = new LoopStatementContext(this, this._ctx, this.state);
      this.enterRule(localctx, 24, ASGrammarParser.RULE_loopStatement);
      try {
        this.state = 172;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 20:
            this.enterOuterAlt(localctx, 1);
            this.state = 170;
            this.repeatLoop();
            break;
          case 27:
            this.enterOuterAlt(localctx, 2);
            this.state = 171;
            this.whileLoop();
            break;
          default:
            throw new _antlr["default"].error.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "repeatLoop",
    value: function repeatLoop() {
      var localctx = new RepeatLoopContext(this, this._ctx, this.state);
      this.enterRule(localctx, 26, ASGrammarParser.RULE_repeatLoop);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.match(ASGrammarParser.T__19);
        this.state = 192;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 21:
            this.state = 175;
            this.match(ASGrammarParser.T__20);
            this.state = 176;
            this.expression();
            this.state = 181;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case 22:
                this.state = 177;
                this.match(ASGrammarParser.T__21);
                this.state = 178;
                this.range();
                break;
              case 23:
                this.state = 179;
                this.match(ASGrammarParser.T__22);
                this.state = 180;
                this.variable();
                break;
              default:
                throw new _antlr["default"].error.NoViableAltException(this);
            }
            break;
          case 24:
            this.state = 183;
            this.match(ASGrammarParser.T__23);
            this.state = 184;
            this.expression();
            break;
          case 22:
            this.state = 185;
            this.match(ASGrammarParser.T__21);
            this.state = 186;
            this.range();
            this.state = 189;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 25) {
              this.state = 187;
              this.match(ASGrammarParser.T__24);
              this.state = 188;
              this.expression();
            }
            break;
          case 2:
          case 7:
          case 15:
          case 17:
          case 26:
          case 33:
          case 36:
          case 68:
          case 69:
          case 71:
          case 77:
          case 80:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 92:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
            this.state = 191;
            this.expression();
            break;
          default:
            throw new _antlr["default"].error.NoViableAltException(this);
        }
        this.state = 194;
        this.statementList();
        this.state = 195;
        this.match(ASGrammarParser.T__25);
        this.state = 196;
        this.match(ASGrammarParser.T__19);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "whileLoop",
    value: function whileLoop() {
      var localctx = new WhileLoopContext(this, this._ctx, this.state);
      this.enterRule(localctx, 28, ASGrammarParser.RULE_whileLoop);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.match(ASGrammarParser.T__26);
        this.state = 199;
        this.expression();
        this.state = 200;
        this.match(ASGrammarParser.T__27);
        this.state = 201;
        this.statementList();
        this.state = 202;
        this.match(ASGrammarParser.T__25);
        this.state = 203;
        this.match(ASGrammarParser.T__26);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "exit",
    value: function exit() {
      var localctx = new ExitContext(this, this._ctx, this.state);
      this.enterRule(localctx, 30, ASGrammarParser.RULE_exit);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.match(ASGrammarParser.T__28);
        this.state = 206;
        this.match(ASGrammarParser.T__19);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "tell",
    value: function tell() {
      var localctx = new TellContext(this, this._ctx, this.state);
      this.enterRule(localctx, 32, ASGrammarParser.RULE_tell);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.match(ASGrammarParser.T__29);
        this.state = 211;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 31:
          case 32:
            this.state = 209;
            this.tellApp();
            break;
          case 2:
          case 7:
          case 17:
          case 26:
          case 33:
          case 36:
          case 68:
          case 69:
          case 71:
          case 77:
          case 80:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 92:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
            this.state = 210;
            this.tellId();
            break;
          default:
            throw new _antlr["default"].error.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "tellApp",
    value: function tellApp() {
      var localctx = new TellAppContext(this, this._ctx, this.state);
      this.enterRule(localctx, 34, ASGrammarParser.RULE_tellApp);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.appType();
        this.state = 214;
        this.match(ASGrammarParser.STRING);
        this.state = 215;
        this.tellArg();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "tellArg",
    value: function tellArg() {
      var localctx = new TellArgContext(this, this._ctx, this.state);
      this.enterRule(localctx, 36, ASGrammarParser.RULE_tellArg);
      try {
        this.state = 222;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 5:
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            this.toStatement();
            break;
          case 1:
          case 4:
          case 6:
          case 8:
          case 9:
          case 11:
          case 13:
          case 14:
          case 20:
          case 27:
          case 29:
          case 30:
          case 34:
          case 36:
          case 37:
          case 61:
          case 67:
          case 71:
          case 77:
          case 101:
            this.enterOuterAlt(localctx, 2);
            this.state = 218;
            this.statementList();
            this.state = 219;
            this.match(ASGrammarParser.T__25);
            this.state = 220;
            this.match(ASGrammarParser.T__29);
            break;
          default:
            throw new _antlr["default"].error.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "appType",
    value: function appType() {
      var localctx = new AppTypeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 38, ASGrammarParser.RULE_appType);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        _la = this._input.LA(1);
        if (!(_la === 31 || _la === 32)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "tellId",
    value: function tellId() {
      var localctx = new TellIdContext(this, this._ctx, this.state);
      this.enterRule(localctx, 40, ASGrammarParser.RULE_tellId);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 226;
        this.operation();
        this.state = 227;
        this.tellArg();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "exists",
    value: function exists() {
      var localctx = new ExistsContext(this, this._ctx, this.state);
      this.enterRule(localctx, 42, ASGrammarParser.RULE_exists);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(ASGrammarParser.T__32);
        this.state = 230;
        this.match(ASGrammarParser.T__30);
        this.state = 231;
        this.match(ASGrammarParser.STRING);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "ifBlock",
    value: function ifBlock() {
      var localctx = new IfBlockContext(this, this._ctx, this.state);
      this.enterRule(localctx, 44, ASGrammarParser.RULE_ifBlock);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.ifStatement();
        this.state = 237;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
        while (_alt != 2 && _alt != _antlr["default"].atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            this.state = 234;
            this.elseIf();
          }
          this.state = 239;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
        }
        this.state = 241;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 35) {
          this.state = 240;
          this.elseStatement();
        }
        this.state = 243;
        this.match(ASGrammarParser.T__25);
        this.state = 244;
        this.match(ASGrammarParser.T__33);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "elseIf",
    value: function elseIf() {
      var localctx = new ElseIfContext(this, this._ctx, this.state);
      this.enterRule(localctx, 46, ASGrammarParser.RULE_elseIf);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.match(ASGrammarParser.T__34);
        this.state = 247;
        this.ifStatement();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "elseStatement",
    value: function elseStatement() {
      var localctx = new ElseStatementContext(this, this._ctx, this.state);
      this.enterRule(localctx, 48, ASGrammarParser.RULE_elseStatement);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.match(ASGrammarParser.T__34);
        this.state = 250;
        this.statementList();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "ifStatement",
    value: function ifStatement() {
      var localctx = new IfStatementContext(this, this._ctx, this.state);
      this.enterRule(localctx, 50, ASGrammarParser.RULE_ifStatement);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        this.match(ASGrammarParser.T__33);
        this.state = 254;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 3 || _la === 23 || (_la - 40 & ~0x1f) === 0 && (1 << _la - 40 & 1047551) !== 0) {
          this.state = 253;
          this.operator();
        }
        this.state = 256;
        this.expression();
        this.state = 257;
        this.match(ASGrammarParser.T__27);
        this.state = 258;
        this.statementList();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "toStatement",
    value: function toStatement() {
      var localctx = new ToStatementContext(this, this._ctx, this.state);
      this.enterRule(localctx, 52, ASGrammarParser.RULE_toStatement);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        this.match(ASGrammarParser.T__4);
        this.state = 261;
        this.statement();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "statementList",
    value: function statementList() {
      var localctx = new StatementListContext(this, this._ctx, this.state);
      this.enterRule(localctx, 54, ASGrammarParser.RULE_statementList);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this._errHandler.sync(this);
        var _alt = 1;
        do {
          switch (_alt) {
            case 1:
              this.state = 263;
              this.statement();
              break;
            default:
              throw new _antlr["default"].error.NoViableAltException(this);
          }
          this.state = 266;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
        } while (_alt != 2 && _alt != _antlr["default"].atn.ATN.INVALID_ALT_NUMBER);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "returnStatement",
    value: function returnStatement() {
      var localctx = new ReturnStatementContext(this, this._ctx, this.state);
      this.enterRule(localctx, 56, ASGrammarParser.RULE_returnStatement);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this.match(ASGrammarParser.T__35);
        this.state = 270;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 16, this._ctx);
        if (la_ === 1) {
          this.state = 269;
          this.expression();
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "statement",
    value: function statement() {
      var localctx = new StatementContext(this, this._ctx, this.state);
      this.enterRule(localctx, 58, ASGrammarParser.RULE_statement);
      try {
        this.state = 293;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 17, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 272;
            this.loopStatement();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 273;
            this.copy();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 274;
            this.error();
            break;
          case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 275;
            this.errorHandler();
            break;
          case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 276;
            this.openFile();
            break;
          case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 277;
            this.onRun();
            break;
          case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 278;
            this.exit();
            break;
          case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 279;
            this.returnStatement();
            break;
          case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 280;
            this.functionDeclaration();
            break;
          case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 281;
            this.displayDialog();
            break;
          case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 282;
            this.makeNew();
            break;
          case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 283;
            this.keystroke();
            break;
          case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 284;
            this.functionCall();
            break;
          case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 285;
            this.set();
            break;
          case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 286;
            this.ifBlock();
            break;
          case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 287;
            this.delay();
            break;
          case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 288;
            this.click();
            break;
          case 18:
            this.enterOuterAlt(localctx, 18);
            this.state = 289;
            this.openLocation();
            break;
          case 19:
            this.enterOuterAlt(localctx, 19);
            this.state = 290;
            this.activate();
            break;
          case 20:
            this.enterOuterAlt(localctx, 20);
            this.state = 291;
            this.tell();
            break;
          case 21:
            this.enterOuterAlt(localctx, 21);
            this.state = 292;
            this.match(ASGrammarParser.T__12);
            break;
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "parameterList",
    value: function parameterList() {
      var localctx = new ParameterListContext(this, this._ctx, this.state);
      this.enterRule(localctx, 60, ASGrammarParser.RULE_parameterList);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this.match(ASGrammarParser.T__14);
        this.state = 297;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~0x1f) === 0 && (1 << _la & 67272836) !== 0 || _la === 33 || _la === 36 || (_la - 68 & ~0x1f) === 0 && (1 << _la - 68 & 3783234059) !== 0 || _la === 100 || _la === 101) {
          this.state = 296;
          this.arguments();
        }
        this.state = 299;
        this.match(ASGrammarParser.T__17);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "onRun",
    value: function onRun() {
      var localctx = new OnRunContext(this, this._ctx, this.state);
      this.enterRule(localctx, 62, ASGrammarParser.RULE_onRun);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(ASGrammarParser.T__36);
        this.state = 302;
        this.match(ASGrammarParser.T__37);
        this.state = 305;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 19, this._ctx);
        if (la_ === 1) {
          this.state = 303;
          this.parameterList();
        } else if (la_ === 2) {
          this.state = 304;
          this.match(ASGrammarParser.IDENTIFIER);
        }
        this.state = 307;
        this.statementList();
        this.state = 308;
        this.match(ASGrammarParser.T__25);
        this.state = 309;
        this.match(ASGrammarParser.T__37);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "functionDeclaration",
    value: function functionDeclaration() {
      var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
      this.enterRule(localctx, 64, ASGrammarParser.RULE_functionDeclaration);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        this.match(ASGrammarParser.T__36);
        this.state = 312;
        this.match(ASGrammarParser.IDENTIFIER);
        this.state = 314;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 15) {
          this.state = 313;
          this.parameterList();
        }
        this.state = 316;
        this.functionBody();
        this.state = 317;
        this.match(ASGrammarParser.T__25);
        this.state = 318;
        this.match(ASGrammarParser.IDENTIFIER);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "functionBody",
    value: function functionBody() {
      var localctx = new FunctionBodyContext(this, this._ctx, this.state);
      this.enterRule(localctx, 66, ASGrammarParser.RULE_functionBody);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        this.statementList();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "functionCall",
    value: function functionCall() {
      var localctx = new FunctionCallContext(this, this._ctx, this.state);
      this.enterRule(localctx, 68, ASGrammarParser.RULE_functionCall);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 322;
        this.match(ASGrammarParser.IDENTIFIER);
        this.state = 323;
        this.match(ASGrammarParser.T__14);
        this.state = 325;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~0x1f) === 0 && (1 << _la & 67272836) !== 0 || _la === 33 || _la === 36 || (_la - 68 & ~0x1f) === 0 && (1 << _la - 68 & 3783234059) !== 0 || _la === 100 || _la === 101) {
          this.state = 324;
          this.arguments();
        }
        this.state = 327;
        this.match(ASGrammarParser.T__17);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "arguments",
    value: function _arguments() {
      var localctx = new ArgumentsContext(this, this._ctx, this.state);
      this.enterRule(localctx, 70, ASGrammarParser.RULE_arguments);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 329;
        this.expression();
        this.state = 334;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 39) {
          this.state = 330;
          this.match(ASGrammarParser.T__38);
          this.state = 331;
          this.expression();
          this.state = 336;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "range",
    value: function range() {
      var localctx = new RangeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 72, ASGrammarParser.RULE_range);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 337;
        this.expression();
        this.state = 338;
        this.match(ASGrammarParser.T__4);
        this.state = 339;
        this.expression();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "operator",
    value: function operator() {
      var localctx = new OperatorContext(this, this._ctx, this.state);
      this.enterRule(localctx, 74, ASGrammarParser.RULE_operator);
      try {
        this.state = 378;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 26, this._ctx);
        switch (la_) {
          case 1:
            localctx = new AddContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 341;
            this.match(ASGrammarParser.T__39);
            break;
          case 2:
            localctx = new SubtractContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 342;
            this.match(ASGrammarParser.T__40);
            break;
          case 3:
            localctx = new MultiplyContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 343;
            this.match(ASGrammarParser.T__41);
            break;
          case 4:
            localctx = new DivideContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 344;
            this.match(ASGrammarParser.T__42);
            break;
          case 5:
            localctx = new ModuloContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 345;
            this.match(ASGrammarParser.T__43);
            break;
          case 6:
            localctx = new ExponentContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 346;
            this.match(ASGrammarParser.T__44);
            break;
          case 7:
            localctx = new UnequalContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 350;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case 46:
                this.state = 347;
                this.match(ASGrammarParser.T__45);
                break;
              case 47:
                this.state = 348;
                this.match(ASGrammarParser.T__46);
                this.state = 349;
                this.match(ASGrammarParser.T__47);
                break;
              default:
                throw new _antlr["default"].error.NoViableAltException(this);
            }
            break;
          case 8:
            localctx = new EqualsContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 357;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 24, this._ctx);
            switch (la_) {
              case 1:
                this.state = 352;
                this.match(ASGrammarParser.T__48);
                break;
              case 2:
                this.state = 353;
                this.match(ASGrammarParser.T__46);
                this.state = 354;
                this.match(ASGrammarParser.T__49);
                this.state = 355;
                this.match(ASGrammarParser.T__4);
                break;
              case 3:
                this.state = 356;
                this.match(ASGrammarParser.T__46);
                break;
            }
            break;
          case 9:
            localctx = new GreaterThanContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 359;
            this.match(ASGrammarParser.T__50);
            break;
          case 10:
            localctx = new LessThanContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 360;
            this.match(ASGrammarParser.T__51);
            break;
          case 11:
            localctx = new GreaterThanEqualContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 361;
            this.match(ASGrammarParser.T__52);
            break;
          case 12:
            localctx = new LessThanEqualContext(this, localctx);
            this.enterOuterAlt(localctx, 12);
            this.state = 362;
            this.match(ASGrammarParser.T__53);
            break;
          case 13:
            localctx = new ConcatContext(this, localctx);
            this.enterOuterAlt(localctx, 13);
            this.state = 363;
            this.match(ASGrammarParser.T__54);
            break;
          case 14:
            localctx = new AndContext(this, localctx);
            this.enterOuterAlt(localctx, 14);
            this.state = 364;
            this.match(ASGrammarParser.T__55);
            break;
          case 15:
            localctx = new OrContext(this, localctx);
            this.enterOuterAlt(localctx, 15);
            this.state = 365;
            this.match(ASGrammarParser.T__56);
            break;
          case 16:
            localctx = new NotContext(this, localctx);
            this.enterOuterAlt(localctx, 16);
            this.state = 366;
            this.match(ASGrammarParser.T__47);
            break;
          case 17:
            localctx = new ContainsContext(this, localctx);
            this.enterOuterAlt(localctx, 17);
            this.state = 367;
            this.match(ASGrammarParser.T__57);
            break;
          case 18:
            localctx = new WhoseContext(this, localctx);
            this.enterOuterAlt(localctx, 18);
            this.state = 368;
            this.match(ASGrammarParser.T__58);
            this.state = 374;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 25, this._ctx);
            if (la_ === 1) {
              this.state = 369;
              this.match(ASGrammarParser.T__14);
              this.state = 370;
              this.match(ASGrammarParser.T__59);
              this.state = 371;
              this.expression();
              this.state = 372;
              this.match(ASGrammarParser.T__17);
            }
            break;
          case 19:
            localctx = new OfContext(this, localctx);
            this.enterOuterAlt(localctx, 19);
            this.state = 376;
            this.match(ASGrammarParser.T__2);
            break;
          case 20:
            localctx = new InContext(this, localctx);
            this.enterOuterAlt(localctx, 20);
            this.state = 377;
            this.match(ASGrammarParser.T__22);
            break;
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "set",
    value: function set() {
      var localctx = new SetContext(this, this._ctx, this.state);
      this.enterRule(localctx, 76, ASGrammarParser.RULE_set);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 380;
        this.match(ASGrammarParser.T__60);
        this.state = 381;
        this.operation();
        this.state = 382;
        this.match(ASGrammarParser.T__4);
        this.state = 383;
        this.expression();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "setProperty",
    value: function setProperty() {
      var localctx = new SetPropertyContext(this, this._ctx, this.state);
      this.enterRule(localctx, 78, ASGrammarParser.RULE_setProperty);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 385;
        this.match(ASGrammarParser.T__61);
        this.state = 386;
        this.match(ASGrammarParser.IDENTIFIER);
        this.state = 387;
        this.match(ASGrammarParser.T__62);
        this.state = 388;
        this.basicData();
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "listener",
    value: function listener() {
      var localctx = new ListenerContext(this, this._ctx, this.state);
      this.enterRule(localctx, 80, ASGrammarParser.RULE_listener);
      try {
        this.state = 402;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 62:
            this.enterOuterAlt(localctx, 1);
            this.state = 390;
            this.match(ASGrammarParser.T__61);
            this.state = 391;
            this.match(ASGrammarParser.T__63);
            this.state = 392;
            this.match(ASGrammarParser.IDENTIFIER);
            break;
          case 37:
            this.enterOuterAlt(localctx, 2);
            this.state = 393;
            this.match(ASGrammarParser.T__36);
            this.state = 400;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case 38:
                this.state = 394;
                this.match(ASGrammarParser.T__37);
                break;
              case 9:
                this.state = 395;
                this.match(ASGrammarParser.T__8);
                this.state = 396;
                this.match(ASGrammarParser.T__9);
                this.state = 397;
                this.variable();
                break;
              case 65:
                this.state = 398;
                this.match(ASGrammarParser.T__64);
                break;
              case 66:
                this.state = 399;
                this.match(ASGrammarParser.T__65);
                break;
              default:
                throw new _antlr["default"].error.NoViableAltException(this);
            }
            break;
          default:
            throw new _antlr["default"].error.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "errorHandler",
    value: function errorHandler() {
      var localctx = new ErrorHandlerContext(this, this._ctx, this.state);
      this.enterRule(localctx, 82, ASGrammarParser.RULE_errorHandler);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 404;
        this.match(ASGrammarParser.T__66);
        this.state = 405;
        this.statementList();
        this.state = 416;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 37) {
          this.state = 406;
          this.match(ASGrammarParser.T__36);
          this.state = 407;
          this.match(ASGrammarParser.T__5);
          this.state = 409;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 29, this._ctx);
          if (la_ === 1) {
            this.state = 408;
            this.match(ASGrammarParser.IDENTIFIER);
          }
          this.state = 413;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === 7) {
            this.state = 411;
            this.match(ASGrammarParser.T__6);
            this.state = 412;
            this.match(ASGrammarParser.IDENTIFIER);
          }
          this.state = 415;
          this.statementList();
        }
        this.state = 418;
        this.match(ASGrammarParser.T__25);
        this.state = 419;
        this.match(ASGrammarParser.T__66);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "operation",
    value: function operation() {
      var localctx = new OperationContext(this, this._ctx, this.state);
      this.enterRule(localctx, 84, ASGrammarParser.RULE_operation);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 421;
        this.value();
        this.state = 427;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
        while (_alt != 2 && _alt != _antlr["default"].atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            this.state = 422;
            this.operator();
            this.state = 423;
            this.value();
          }
          this.state = 429;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "expression",
    value: function expression() {
      var localctx = new ExpressionContext(this, this._ctx, this.state);
      this.enterRule(localctx, 86, ASGrammarParser.RULE_expression);
      try {
        this.state = 442;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 15:
            this.enterOuterAlt(localctx, 1);
            this.state = 430;
            this.match(ASGrammarParser.T__14);
            this.state = 431;
            this.expression();
            this.state = 432;
            this.match(ASGrammarParser.T__17);
            this.state = 438;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
            while (_alt != 2 && _alt != _antlr["default"].atn.ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                this.state = 433;
                this.operator();
                this.state = 434;
                this.expression();
              }
              this.state = 440;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
            }
            break;
          case 2:
          case 7:
          case 17:
          case 26:
          case 33:
          case 36:
          case 68:
          case 69:
          case 71:
          case 77:
          case 80:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 92:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
            this.enterOuterAlt(localctx, 2);
            this.state = 441;
            this.operation();
            break;
          default:
            throw new _antlr["default"].error.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "value",
    value: function value() {
      var localctx = new ValueContext(this, this._ctx, this.state);
      this.enterRule(localctx, 88, ASGrammarParser.RULE_value);
      var _la = 0;
      try {
        this.state = 478;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 36, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 444;
            this.missingValue();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 445;
            this.count();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 446;
            this.displayDialog();
            break;
          case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 447;
            this.match(ASGrammarParser.T__67);
            break;
          case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 448;
            this.match(ASGrammarParser.T__35);
            break;
          case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 449;
            this.exists();
            break;
          case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 450;
            this.functionCall();
            break;
          case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 451;
            this.match(ASGrammarParser.T__68);
            this.state = 452;
            this.match(ASGrammarParser.T__69);
            this.state = 453;
            this.match(ASGrammarParser.T__2);
            this.state = 454;
            this.match(ASGrammarParser.T__14);
            this.state = 455;
            this.match(ASGrammarParser.T__70);
            this.state = 456;
            this.match(ASGrammarParser.T__71);
            this.state = 457;
            this.expression();
            this.state = 461;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 73) {
              this.state = 458;
              this.match(ASGrammarParser.T__72);
              this.state = 459;
              this.match(ASGrammarParser.T__73);
              this.state = 460;
              this.expression();
            }
            this.state = 463;
            this.match(ASGrammarParser.T__17);
            break;
          case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 465;
            this.match(ASGrammarParser.T__68);
            this.state = 466;
            this.expression();
            this.state = 467;
            this.match(ASGrammarParser.T__74);
            this.state = 468;
            this.expression();
            break;
          case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 470;
            this.makeNew();
            break;
          case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 471;
            this.match(ASGrammarParser.FLOAT);
            break;
          case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 472;
            this.match(ASGrammarParser.INTEGER);
            break;
          case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 473;
            this.match(ASGrammarParser.STRING);
            break;
          case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 474;
            this.match(ASGrammarParser.BOOLEAN);
            break;
          case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 475;
            this.variable();
            break;
          case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 476;
            this.record();
            break;
          case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 477;
            this.list();
            break;
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "withProperties",
    value: function withProperties() {
      var localctx = new WithPropertiesContext(this, this._ctx, this.state);
      this.enterRule(localctx, 90, ASGrammarParser.RULE_withProperties);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 480;
        this.match(ASGrammarParser.T__20);
        this.state = 481;
        this.match(ASGrammarParser.T__75);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "makeNew",
    value: function makeNew() {
      var localctx = new MakeNewContext(this, this._ctx, this.state);
      this.enterRule(localctx, 92, ASGrammarParser.RULE_makeNew);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 483;
        this.match(ASGrammarParser.T__76);
        this.state = 484;
        this.match(ASGrammarParser.T__77);
        this.state = 485;
        this.variable();
        this.state = 494;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 79 || _la === 81) {
          this.state = 491;
          this._errHandler.sync(this);
          switch (this._input.LA(1)) {
            case 79:
              this.state = 486;
              this.match(ASGrammarParser.T__78);
              this.state = 487;
              this.match(ASGrammarParser.T__79);
              break;
            case 81:
              this.state = 488;
              this.match(ASGrammarParser.T__80);
              this.state = 489;
              this.match(ASGrammarParser.T__25);
              this.state = 490;
              this.match(ASGrammarParser.T__2);
              break;
            default:
              throw new _antlr["default"].error.NoViableAltException(this);
          }
          this.state = 493;
          this.variable();
        }
        this.state = 499;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 21) {
          this.state = 496;
          this.withProperties();
          this.state = 497;
          this.record();
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "variable",
    value: function variable() {
      var localctx = new VariableContext(this, this._ctx, this.state);
      this.enterRule(localctx, 94, ASGrammarParser.RULE_variable);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 504;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 26 || (_la - 80 & ~0x1f) === 0 && (1 << _la - 80 & 1017) !== 0) {
          this.state = 501;
          this.modifier();
          this.state = 506;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 508;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 41, this._ctx);
        if (la_ === 1) {
          this.state = 507;
          this.match(ASGrammarParser.IDENTIFIER);
        }
        this.state = 510;
        this.property();
        this.state = 512;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 42, this._ctx);
        if (la_ === 1) {
          this.state = 511;
          this.match(ASGrammarParser.IDENTIFIER);
        }
        this.state = 516;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 82) {
          this.state = 514;
          this.match(ASGrammarParser.T__81);
          this.state = 515;
          _la = this._input.LA(1);
          if (!(_la === 7 || _la === 69 || _la === 101)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "modifier",
    value: function modifier() {
      var localctx = new ModifierContext(this, this._ctx, this.state);
      this.enterRule(localctx, 96, ASGrammarParser.RULE_modifier);
      try {
        this.state = 528;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 83:
            this.enterOuterAlt(localctx, 1);
            this.state = 518;
            this.match(ASGrammarParser.T__82);
            break;
          case 80:
            this.enterOuterAlt(localctx, 2);
            this.state = 519;
            this.match(ASGrammarParser.T__79);
            break;
          case 84:
            this.enterOuterAlt(localctx, 3);
            this.state = 520;
            this.match(ASGrammarParser.T__83);
            break;
          case 85:
            this.enterOuterAlt(localctx, 4);
            this.state = 521;
            this.match(ASGrammarParser.T__84);
            break;
          case 86:
            this.enterOuterAlt(localctx, 5);
            this.state = 522;
            this.match(ASGrammarParser.T__85);
            break;
          case 87:
            this.enterOuterAlt(localctx, 6);
            this.state = 523;
            this.match(ASGrammarParser.T__86);
            break;
          case 26:
            this.enterOuterAlt(localctx, 7);
            this.state = 524;
            this.match(ASGrammarParser.T__25);
            this.state = 525;
            this.match(ASGrammarParser.T__2);
            break;
          case 88:
            this.enterOuterAlt(localctx, 8);
            this.state = 526;
            this.match(ASGrammarParser.T__87);
            break;
          case 89:
            this.enterOuterAlt(localctx, 9);
            this.state = 527;
            this.match(ASGrammarParser.T__88);
            break;
          default:
            throw new _antlr["default"].error.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "property",
    value: function property() {
      var localctx = new PropertyContext(this, this._ctx, this.state);
      this.enterRule(localctx, 98, ASGrammarParser.RULE_property);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 530;
        _la = this._input.LA(1);
        if (!((_la & ~0x1f) === 0 && (1 << _la & 131204) !== 0 || (_la - 68 & ~0x1f) === 0 && (1 << _la - 68 & 1073741827) !== 0 || _la === 100 || _la === 101)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "record",
    value: function record() {
      var localctx = new RecordContext(this, this._ctx, this.state);
      this.enterRule(localctx, 100, ASGrammarParser.RULE_record);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 532;
        this.match(ASGrammarParser.T__89);
        this.state = 539;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          this.state = 533;
          this.variable();
          this.state = 534;
          this.match(ASGrammarParser.T__62);
          this.state = 535;
          this.expression();
          this.state = 537;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === 39) {
            this.state = 536;
            this.match(ASGrammarParser.T__38);
          }
          this.state = 541;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while ((_la & ~0x1f) === 0 && (1 << _la & 67240068) !== 0 || (_la - 68 & ~0x1f) === 0 && (1 << _la - 68 & 1077907459) !== 0 || _la === 100 || _la === 101);
        this.state = 543;
        this.match(ASGrammarParser.T__90);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "list",
    value: function list() {
      var localctx = new ListContext(this, this._ctx, this.state);
      this.enterRule(localctx, 102, ASGrammarParser.RULE_list);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 545;
        this.match(ASGrammarParser.T__89);
        this.state = 547;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~0x1f) === 0 && (1 << _la & 67272836) !== 0 || _la === 33 || _la === 36 || (_la - 68 & ~0x1f) === 0 && (1 << _la - 68 & 3783234059) !== 0 || _la === 100 || _la === 101) {
          this.state = 546;
          this.arguments();
        }
        this.state = 549;
        this.match(ASGrammarParser.T__90);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "basicData",
    value: function basicData() {
      var localctx = new BasicDataContext(this, this._ctx, this.state);
      this.enterRule(localctx, 104, ASGrammarParser.RULE_basicData);
      try {
        this.state = 555;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 100:
            this.enterOuterAlt(localctx, 1);
            this.state = 551;
            this.match(ASGrammarParser.INTEGER);
            break;
          case 97:
            this.enterOuterAlt(localctx, 2);
            this.state = 552;
            this.match(ASGrammarParser.BOOLEAN);
            break;
          case 98:
            this.enterOuterAlt(localctx, 3);
            this.state = 553;
            this.match(ASGrammarParser.STRING);
            break;
          case 92:
            this.enterOuterAlt(localctx, 4);
            this.state = 554;
            this.missingValue();
            break;
          default:
            throw new _antlr["default"].error.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "missingValue",
    value: function missingValue() {
      var localctx = new MissingValueContext(this, this._ctx, this.state);
      this.enterRule(localctx, 106, ASGrammarParser.RULE_missingValue);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 557;
        this.match(ASGrammarParser.T__91);
        this.state = 558;
        this.match(ASGrammarParser.T__67);
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }, {
    key: "displayDialog",
    value: function displayDialog() {
      var localctx = new DisplayDialogContext(this, this._ctx, this.state);
      this.enterRule(localctx, 108, ASGrammarParser.RULE_displayDialog);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 560;
        this.match(ASGrammarParser.T__70);
        this.state = 561;
        this.match(ASGrammarParser.T__71);
        this.state = 562;
        this.expression();
        this.state = 572;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 50, this._ctx);
        if (la_ === 1) {
          this.state = 563;
          this.match(ASGrammarParser.T__92);
          this.state = 564;
          this.match(ASGrammarParser.T__89);
          this.state = 565;
          this.match(ASGrammarParser.STRING);
          this.state = 566;
          this.match(ASGrammarParser.T__90);
          this.state = 570;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 49, this._ctx);
          if (la_ === 1) {
            this.state = 567;
            this.match(ASGrammarParser.T__72);
            this.state = 568;
            this.match(ASGrammarParser.T__85);
            this.state = 569;
            this.match(ASGrammarParser.STRING);
          }
        }
      } catch (re) {
        if (re instanceof _antlr["default"].error.RecognitionException) {
          localctx.exception = re;
          this._errHandler.reportError(this, re);
          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  }]);
  return ASGrammarParser;
}(_antlr["default"].Parser);
exports["default"] = ASGrammarParser;
_defineProperty(ASGrammarParser, "grammarFileName", "ASGrammar.g4");
_defineProperty(ASGrammarParser, "literalNames", [null, "'delay'", "'count'", "'of'", "'copy'", "'to'", "'error'", "'number'", "'click'", "'open'", "'location'", "'activate'", "'file'", "'save'", "'keystroke'", "'('", "'character'", "'id'", "')'", "'using'", "'repeat'", "'with'", "'from'", "'in'", "'until'", "'by'", "'end'", "'while'", "'then'", "'exit'", "'tell'", "'process'", "'application'", "'exists'", "'if'", "'else'", "'return'", "'on'", "'run'", "','", "'+'", "'-'", "'*'", "'/'", "'mod'", "'^'", "'!='", "'is'", "'not'", "'='", "'equal'", "'>'", "'<'", "'>='", "'<='", "'&'", "'and'", "'or'", "'contains'", "'whose'", "'where'", "'set'", "'property'", "':'", "'listener'", "'idle'", "'quit'", "'try'", "'value'", "'text'", "'returned'", "'display'", "'dialog'", "'default'", "'answer'", "'thru'", "'properties'", "'make'", "'new'", "'after'", "'last'", "'at'", "'as'", "'get'", "'menu'", "'bar'", "'button'", "'item'", "'the'", "'body'", "'{'", "'}'", "'missing'", "'buttons'"]);
_defineProperty(ASGrammarParser, "symbolicNames", [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "WHITESPACE", "SingleLineComment", "MultiLineComment", "BOOLEAN", "STRING", "FLOAT", "INTEGER", "IDENTIFIER"]);
_defineProperty(ASGrammarParser, "ruleNames", ["program", "delay", "count", "copy", "error", "click", "openLocation", "activate", "openFile", "save", "keystroke", "using", "loopStatement", "repeatLoop", "whileLoop", "exit", "tell", "tellApp", "tellArg", "appType", "tellId", "exists", "ifBlock", "elseIf", "elseStatement", "ifStatement", "toStatement", "statementList", "returnStatement", "statement", "parameterList", "onRun", "functionDeclaration", "functionBody", "functionCall", "arguments", "range", "operator", "set", "setProperty", "listener", "errorHandler", "operation", "expression", "value", "withProperties", "makeNew", "variable", "modifier", "property", "record", "list", "basicData", "missingValue", "displayDialog"]);
ASGrammarParser.EOF = _antlr["default"].Token.EOF;
ASGrammarParser.T__0 = 1;
ASGrammarParser.T__1 = 2;
ASGrammarParser.T__2 = 3;
ASGrammarParser.T__3 = 4;
ASGrammarParser.T__4 = 5;
ASGrammarParser.T__5 = 6;
ASGrammarParser.T__6 = 7;
ASGrammarParser.T__7 = 8;
ASGrammarParser.T__8 = 9;
ASGrammarParser.T__9 = 10;
ASGrammarParser.T__10 = 11;
ASGrammarParser.T__11 = 12;
ASGrammarParser.T__12 = 13;
ASGrammarParser.T__13 = 14;
ASGrammarParser.T__14 = 15;
ASGrammarParser.T__15 = 16;
ASGrammarParser.T__16 = 17;
ASGrammarParser.T__17 = 18;
ASGrammarParser.T__18 = 19;
ASGrammarParser.T__19 = 20;
ASGrammarParser.T__20 = 21;
ASGrammarParser.T__21 = 22;
ASGrammarParser.T__22 = 23;
ASGrammarParser.T__23 = 24;
ASGrammarParser.T__24 = 25;
ASGrammarParser.T__25 = 26;
ASGrammarParser.T__26 = 27;
ASGrammarParser.T__27 = 28;
ASGrammarParser.T__28 = 29;
ASGrammarParser.T__29 = 30;
ASGrammarParser.T__30 = 31;
ASGrammarParser.T__31 = 32;
ASGrammarParser.T__32 = 33;
ASGrammarParser.T__33 = 34;
ASGrammarParser.T__34 = 35;
ASGrammarParser.T__35 = 36;
ASGrammarParser.T__36 = 37;
ASGrammarParser.T__37 = 38;
ASGrammarParser.T__38 = 39;
ASGrammarParser.T__39 = 40;
ASGrammarParser.T__40 = 41;
ASGrammarParser.T__41 = 42;
ASGrammarParser.T__42 = 43;
ASGrammarParser.T__43 = 44;
ASGrammarParser.T__44 = 45;
ASGrammarParser.T__45 = 46;
ASGrammarParser.T__46 = 47;
ASGrammarParser.T__47 = 48;
ASGrammarParser.T__48 = 49;
ASGrammarParser.T__49 = 50;
ASGrammarParser.T__50 = 51;
ASGrammarParser.T__51 = 52;
ASGrammarParser.T__52 = 53;
ASGrammarParser.T__53 = 54;
ASGrammarParser.T__54 = 55;
ASGrammarParser.T__55 = 56;
ASGrammarParser.T__56 = 57;
ASGrammarParser.T__57 = 58;
ASGrammarParser.T__58 = 59;
ASGrammarParser.T__59 = 60;
ASGrammarParser.T__60 = 61;
ASGrammarParser.T__61 = 62;
ASGrammarParser.T__62 = 63;
ASGrammarParser.T__63 = 64;
ASGrammarParser.T__64 = 65;
ASGrammarParser.T__65 = 66;
ASGrammarParser.T__66 = 67;
ASGrammarParser.T__67 = 68;
ASGrammarParser.T__68 = 69;
ASGrammarParser.T__69 = 70;
ASGrammarParser.T__70 = 71;
ASGrammarParser.T__71 = 72;
ASGrammarParser.T__72 = 73;
ASGrammarParser.T__73 = 74;
ASGrammarParser.T__74 = 75;
ASGrammarParser.T__75 = 76;
ASGrammarParser.T__76 = 77;
ASGrammarParser.T__77 = 78;
ASGrammarParser.T__78 = 79;
ASGrammarParser.T__79 = 80;
ASGrammarParser.T__80 = 81;
ASGrammarParser.T__81 = 82;
ASGrammarParser.T__82 = 83;
ASGrammarParser.T__83 = 84;
ASGrammarParser.T__84 = 85;
ASGrammarParser.T__85 = 86;
ASGrammarParser.T__86 = 87;
ASGrammarParser.T__87 = 88;
ASGrammarParser.T__88 = 89;
ASGrammarParser.T__89 = 90;
ASGrammarParser.T__90 = 91;
ASGrammarParser.T__91 = 92;
ASGrammarParser.T__92 = 93;
ASGrammarParser.WHITESPACE = 94;
ASGrammarParser.SingleLineComment = 95;
ASGrammarParser.MultiLineComment = 96;
ASGrammarParser.BOOLEAN = 97;
ASGrammarParser.STRING = 98;
ASGrammarParser.FLOAT = 99;
ASGrammarParser.INTEGER = 100;
ASGrammarParser.IDENTIFIER = 101;
ASGrammarParser.RULE_program = 0;
ASGrammarParser.RULE_delay = 1;
ASGrammarParser.RULE_count = 2;
ASGrammarParser.RULE_copy = 3;
ASGrammarParser.RULE_error = 4;
ASGrammarParser.RULE_click = 5;
ASGrammarParser.RULE_openLocation = 6;
ASGrammarParser.RULE_activate = 7;
ASGrammarParser.RULE_openFile = 8;
ASGrammarParser.RULE_save = 9;
ASGrammarParser.RULE_keystroke = 10;
ASGrammarParser.RULE_using = 11;
ASGrammarParser.RULE_loopStatement = 12;
ASGrammarParser.RULE_repeatLoop = 13;
ASGrammarParser.RULE_whileLoop = 14;
ASGrammarParser.RULE_exit = 15;
ASGrammarParser.RULE_tell = 16;
ASGrammarParser.RULE_tellApp = 17;
ASGrammarParser.RULE_tellArg = 18;
ASGrammarParser.RULE_appType = 19;
ASGrammarParser.RULE_tellId = 20;
ASGrammarParser.RULE_exists = 21;
ASGrammarParser.RULE_ifBlock = 22;
ASGrammarParser.RULE_elseIf = 23;
ASGrammarParser.RULE_elseStatement = 24;
ASGrammarParser.RULE_ifStatement = 25;
ASGrammarParser.RULE_toStatement = 26;
ASGrammarParser.RULE_statementList = 27;
ASGrammarParser.RULE_returnStatement = 28;
ASGrammarParser.RULE_statement = 29;
ASGrammarParser.RULE_parameterList = 30;
ASGrammarParser.RULE_onRun = 31;
ASGrammarParser.RULE_functionDeclaration = 32;
ASGrammarParser.RULE_functionBody = 33;
ASGrammarParser.RULE_functionCall = 34;
ASGrammarParser.RULE_arguments = 35;
ASGrammarParser.RULE_range = 36;
ASGrammarParser.RULE_operator = 37;
ASGrammarParser.RULE_set = 38;
ASGrammarParser.RULE_setProperty = 39;
ASGrammarParser.RULE_listener = 40;
ASGrammarParser.RULE_errorHandler = 41;
ASGrammarParser.RULE_operation = 42;
ASGrammarParser.RULE_expression = 43;
ASGrammarParser.RULE_value = 44;
ASGrammarParser.RULE_withProperties = 45;
ASGrammarParser.RULE_makeNew = 46;
ASGrammarParser.RULE_variable = 47;
ASGrammarParser.RULE_modifier = 48;
ASGrammarParser.RULE_property = 49;
ASGrammarParser.RULE_record = 50;
ASGrammarParser.RULE_list = 51;
ASGrammarParser.RULE_basicData = 52;
ASGrammarParser.RULE_missingValue = 53;
ASGrammarParser.RULE_displayDialog = 54;
var ProgramContext = /*#__PURE__*/function (_antlr4$ParserRuleCon) {
  _inherits(ProgramContext, _antlr4$ParserRuleCon);
  var _super2 = _createSuper(ProgramContext);
  function ProgramContext(parser, parent, invokingState) {
    var _this2;
    _classCallCheck(this, ProgramContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this2 = _super2.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this2), "statement", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(StatementContext);
      } else {
        return this.getTypedRuleContext(StatementContext, i);
      }
    });
    _this2.parser = parser;
    _this2.ruleIndex = ASGrammarParser.RULE_program;
    return _this2;
  }
  _createClass(ProgramContext, [{
    key: "EOF",
    value: function EOF() {
      return this.getToken(ASGrammarParser.EOF, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterProgram(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitProgram(this);
      }
    }
  }]);
  return ProgramContext;
}(_antlr["default"].ParserRuleContext);
var DelayContext = /*#__PURE__*/function (_antlr4$ParserRuleCon2) {
  _inherits(DelayContext, _antlr4$ParserRuleCon2);
  var _super3 = _createSuper(DelayContext);
  function DelayContext(parser, parent, invokingState) {
    var _this3;
    _classCallCheck(this, DelayContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this3 = _super3.call(this, parent, invokingState);
    _this3.parser = parser;
    _this3.ruleIndex = ASGrammarParser.RULE_delay;
    return _this3;
  }
  _createClass(DelayContext, [{
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterDelay(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitDelay(this);
      }
    }
  }]);
  return DelayContext;
}(_antlr["default"].ParserRuleContext);
var CountContext = /*#__PURE__*/function (_antlr4$ParserRuleCon3) {
  _inherits(CountContext, _antlr4$ParserRuleCon3);
  var _super4 = _createSuper(CountContext);
  function CountContext(parser, parent, invokingState) {
    var _this4;
    _classCallCheck(this, CountContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this4 = _super4.call(this, parent, invokingState);
    _this4.parser = parser;
    _this4.ruleIndex = ASGrammarParser.RULE_count;
    return _this4;
  }
  _createClass(CountContext, [{
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterCount(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitCount(this);
      }
    }
  }]);
  return CountContext;
}(_antlr["default"].ParserRuleContext);
var CopyContext = /*#__PURE__*/function (_antlr4$ParserRuleCon4) {
  _inherits(CopyContext, _antlr4$ParserRuleCon4);
  var _super5 = _createSuper(CopyContext);
  function CopyContext(parser, parent, invokingState) {
    var _this5;
    _classCallCheck(this, CopyContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this5 = _super5.call(this, parent, invokingState);
    _this5.parser = parser;
    _this5.ruleIndex = ASGrammarParser.RULE_copy;
    return _this5;
  }
  _createClass(CopyContext, [{
    key: "operation",
    value: function operation() {
      return this.getTypedRuleContext(OperationContext, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterCopy(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitCopy(this);
      }
    }
  }]);
  return CopyContext;
}(_antlr["default"].ParserRuleContext);
var ErrorContext = /*#__PURE__*/function (_antlr4$ParserRuleCon5) {
  _inherits(ErrorContext, _antlr4$ParserRuleCon5);
  var _super6 = _createSuper(ErrorContext);
  function ErrorContext(parser, parent, invokingState) {
    var _this6;
    _classCallCheck(this, ErrorContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this6 = _super6.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this6), "expression", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
      } else {
        return this.getTypedRuleContext(ExpressionContext, i);
      }
    });
    _this6.parser = parser;
    _this6.ruleIndex = ASGrammarParser.RULE_error;
    return _this6;
  }
  _createClass(ErrorContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterError(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitError(this);
      }
    }
  }]);
  return ErrorContext;
}(_antlr["default"].ParserRuleContext);
var ClickContext = /*#__PURE__*/function (_antlr4$ParserRuleCon6) {
  _inherits(ClickContext, _antlr4$ParserRuleCon6);
  var _super7 = _createSuper(ClickContext);
  function ClickContext(parser, parent, invokingState) {
    var _this7;
    _classCallCheck(this, ClickContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this7 = _super7.call(this, parent, invokingState);
    _this7.parser = parser;
    _this7.ruleIndex = ASGrammarParser.RULE_click;
    return _this7;
  }
  _createClass(ClickContext, [{
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterClick(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitClick(this);
      }
    }
  }]);
  return ClickContext;
}(_antlr["default"].ParserRuleContext);
var OpenLocationContext = /*#__PURE__*/function (_antlr4$ParserRuleCon7) {
  _inherits(OpenLocationContext, _antlr4$ParserRuleCon7);
  var _super8 = _createSuper(OpenLocationContext);
  function OpenLocationContext(parser, parent, invokingState) {
    var _this8;
    _classCallCheck(this, OpenLocationContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this8 = _super8.call(this, parent, invokingState);
    _this8.parser = parser;
    _this8.ruleIndex = ASGrammarParser.RULE_openLocation;
    return _this8;
  }
  _createClass(OpenLocationContext, [{
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterOpenLocation(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitOpenLocation(this);
      }
    }
  }]);
  return OpenLocationContext;
}(_antlr["default"].ParserRuleContext);
var ActivateContext = /*#__PURE__*/function (_antlr4$ParserRuleCon8) {
  _inherits(ActivateContext, _antlr4$ParserRuleCon8);
  var _super9 = _createSuper(ActivateContext);
  function ActivateContext(parser, parent, invokingState) {
    var _this9;
    _classCallCheck(this, ActivateContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this9 = _super9.call(this, parent, invokingState);
    _this9.parser = parser;
    _this9.ruleIndex = ASGrammarParser.RULE_activate;
    return _this9;
  }
  _createClass(ActivateContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterActivate(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitActivate(this);
      }
    }
  }]);
  return ActivateContext;
}(_antlr["default"].ParserRuleContext);
var OpenFileContext = /*#__PURE__*/function (_antlr4$ParserRuleCon9) {
  _inherits(OpenFileContext, _antlr4$ParserRuleCon9);
  var _super10 = _createSuper(OpenFileContext);
  function OpenFileContext(parser, parent, invokingState) {
    var _this10;
    _classCallCheck(this, OpenFileContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this10 = _super10.call(this, parent, invokingState);
    _this10.parser = parser;
    _this10.ruleIndex = ASGrammarParser.RULE_openFile;
    return _this10;
  }
  _createClass(OpenFileContext, [{
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterOpenFile(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitOpenFile(this);
      }
    }
  }]);
  return OpenFileContext;
}(_antlr["default"].ParserRuleContext);
var SaveContext = /*#__PURE__*/function (_antlr4$ParserRuleCon10) {
  _inherits(SaveContext, _antlr4$ParserRuleCon10);
  var _super11 = _createSuper(SaveContext);
  function SaveContext(parser, parent, invokingState) {
    var _this11;
    _classCallCheck(this, SaveContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this11 = _super11.call(this, parent, invokingState);
    _this11.parser = parser;
    _this11.ruleIndex = ASGrammarParser.RULE_save;
    return _this11;
  }
  _createClass(SaveContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterSave(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitSave(this);
      }
    }
  }]);
  return SaveContext;
}(_antlr["default"].ParserRuleContext);
var KeystrokeContext = /*#__PURE__*/function (_antlr4$ParserRuleCon11) {
  _inherits(KeystrokeContext, _antlr4$ParserRuleCon11);
  var _super12 = _createSuper(KeystrokeContext);
  function KeystrokeContext(parser, parent, invokingState) {
    var _this12;
    _classCallCheck(this, KeystrokeContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this12 = _super12.call(this, parent, invokingState);
    _this12.parser = parser;
    _this12.ruleIndex = ASGrammarParser.RULE_keystroke;
    return _this12;
  }
  _createClass(KeystrokeContext, [{
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "using",
    value: function using() {
      return this.getTypedRuleContext(UsingContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterKeystroke(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitKeystroke(this);
      }
    }
  }]);
  return KeystrokeContext;
}(_antlr["default"].ParserRuleContext);
var UsingContext = /*#__PURE__*/function (_antlr4$ParserRuleCon12) {
  _inherits(UsingContext, _antlr4$ParserRuleCon12);
  var _super13 = _createSuper(UsingContext);
  function UsingContext(parser, parent, invokingState) {
    var _this13;
    _classCallCheck(this, UsingContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this13 = _super13.call(this, parent, invokingState);
    _this13.parser = parser;
    _this13.ruleIndex = ASGrammarParser.RULE_using;
    return _this13;
  }
  _createClass(UsingContext, [{
    key: "list",
    value: function list() {
      return this.getTypedRuleContext(ListContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterUsing(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitUsing(this);
      }
    }
  }]);
  return UsingContext;
}(_antlr["default"].ParserRuleContext);
var LoopStatementContext = /*#__PURE__*/function (_antlr4$ParserRuleCon13) {
  _inherits(LoopStatementContext, _antlr4$ParserRuleCon13);
  var _super14 = _createSuper(LoopStatementContext);
  function LoopStatementContext(parser, parent, invokingState) {
    var _this14;
    _classCallCheck(this, LoopStatementContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this14 = _super14.call(this, parent, invokingState);
    _this14.parser = parser;
    _this14.ruleIndex = ASGrammarParser.RULE_loopStatement;
    return _this14;
  }
  _createClass(LoopStatementContext, [{
    key: "repeatLoop",
    value: function repeatLoop() {
      return this.getTypedRuleContext(RepeatLoopContext, 0);
    }
  }, {
    key: "whileLoop",
    value: function whileLoop() {
      return this.getTypedRuleContext(WhileLoopContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterLoopStatement(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitLoopStatement(this);
      }
    }
  }]);
  return LoopStatementContext;
}(_antlr["default"].ParserRuleContext);
var RepeatLoopContext = /*#__PURE__*/function (_antlr4$ParserRuleCon14) {
  _inherits(RepeatLoopContext, _antlr4$ParserRuleCon14);
  var _super15 = _createSuper(RepeatLoopContext);
  function RepeatLoopContext(parser, parent, invokingState) {
    var _this15;
    _classCallCheck(this, RepeatLoopContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this15 = _super15.call(this, parent, invokingState);
    _this15.parser = parser;
    _this15.ruleIndex = ASGrammarParser.RULE_repeatLoop;
    return _this15;
  }
  _createClass(RepeatLoopContext, [{
    key: "statementList",
    value: function statementList() {
      return this.getTypedRuleContext(StatementListContext, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "range",
    value: function range() {
      return this.getTypedRuleContext(RangeContext, 0);
    }
  }, {
    key: "variable",
    value: function variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterRepeatLoop(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitRepeatLoop(this);
      }
    }
  }]);
  return RepeatLoopContext;
}(_antlr["default"].ParserRuleContext);
var WhileLoopContext = /*#__PURE__*/function (_antlr4$ParserRuleCon15) {
  _inherits(WhileLoopContext, _antlr4$ParserRuleCon15);
  var _super16 = _createSuper(WhileLoopContext);
  function WhileLoopContext(parser, parent, invokingState) {
    var _this16;
    _classCallCheck(this, WhileLoopContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this16 = _super16.call(this, parent, invokingState);
    _this16.parser = parser;
    _this16.ruleIndex = ASGrammarParser.RULE_whileLoop;
    return _this16;
  }
  _createClass(WhileLoopContext, [{
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "statementList",
    value: function statementList() {
      return this.getTypedRuleContext(StatementListContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterWhileLoop(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitWhileLoop(this);
      }
    }
  }]);
  return WhileLoopContext;
}(_antlr["default"].ParserRuleContext);
var ExitContext = /*#__PURE__*/function (_antlr4$ParserRuleCon16) {
  _inherits(ExitContext, _antlr4$ParserRuleCon16);
  var _super17 = _createSuper(ExitContext);
  function ExitContext(parser, parent, invokingState) {
    var _this17;
    _classCallCheck(this, ExitContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this17 = _super17.call(this, parent, invokingState);
    _this17.parser = parser;
    _this17.ruleIndex = ASGrammarParser.RULE_exit;
    return _this17;
  }
  _createClass(ExitContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterExit(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitExit(this);
      }
    }
  }]);
  return ExitContext;
}(_antlr["default"].ParserRuleContext);
var TellContext = /*#__PURE__*/function (_antlr4$ParserRuleCon17) {
  _inherits(TellContext, _antlr4$ParserRuleCon17);
  var _super18 = _createSuper(TellContext);
  function TellContext(parser, parent, invokingState) {
    var _this18;
    _classCallCheck(this, TellContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this18 = _super18.call(this, parent, invokingState);
    _this18.parser = parser;
    _this18.ruleIndex = ASGrammarParser.RULE_tell;
    return _this18;
  }
  _createClass(TellContext, [{
    key: "tellApp",
    value: function tellApp() {
      return this.getTypedRuleContext(TellAppContext, 0);
    }
  }, {
    key: "tellId",
    value: function tellId() {
      return this.getTypedRuleContext(TellIdContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterTell(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitTell(this);
      }
    }
  }]);
  return TellContext;
}(_antlr["default"].ParserRuleContext);
var TellAppContext = /*#__PURE__*/function (_antlr4$ParserRuleCon18) {
  _inherits(TellAppContext, _antlr4$ParserRuleCon18);
  var _super19 = _createSuper(TellAppContext);
  function TellAppContext(parser, parent, invokingState) {
    var _this19;
    _classCallCheck(this, TellAppContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this19 = _super19.call(this, parent, invokingState);
    _this19.parser = parser;
    _this19.ruleIndex = ASGrammarParser.RULE_tellApp;
    return _this19;
  }
  _createClass(TellAppContext, [{
    key: "appType",
    value: function appType() {
      return this.getTypedRuleContext(AppTypeContext, 0);
    }
  }, {
    key: "STRING",
    value: function STRING() {
      return this.getToken(ASGrammarParser.STRING, 0);
    }
  }, {
    key: "tellArg",
    value: function tellArg() {
      return this.getTypedRuleContext(TellArgContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterTellApp(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitTellApp(this);
      }
    }
  }]);
  return TellAppContext;
}(_antlr["default"].ParserRuleContext);
var TellArgContext = /*#__PURE__*/function (_antlr4$ParserRuleCon19) {
  _inherits(TellArgContext, _antlr4$ParserRuleCon19);
  var _super20 = _createSuper(TellArgContext);
  function TellArgContext(parser, parent, invokingState) {
    var _this20;
    _classCallCheck(this, TellArgContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this20 = _super20.call(this, parent, invokingState);
    _this20.parser = parser;
    _this20.ruleIndex = ASGrammarParser.RULE_tellArg;
    return _this20;
  }
  _createClass(TellArgContext, [{
    key: "toStatement",
    value: function toStatement() {
      return this.getTypedRuleContext(ToStatementContext, 0);
    }
  }, {
    key: "statementList",
    value: function statementList() {
      return this.getTypedRuleContext(StatementListContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterTellArg(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitTellArg(this);
      }
    }
  }]);
  return TellArgContext;
}(_antlr["default"].ParserRuleContext);
var AppTypeContext = /*#__PURE__*/function (_antlr4$ParserRuleCon20) {
  _inherits(AppTypeContext, _antlr4$ParserRuleCon20);
  var _super21 = _createSuper(AppTypeContext);
  function AppTypeContext(parser, parent, invokingState) {
    var _this21;
    _classCallCheck(this, AppTypeContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this21 = _super21.call(this, parent, invokingState);
    _this21.parser = parser;
    _this21.ruleIndex = ASGrammarParser.RULE_appType;
    return _this21;
  }
  _createClass(AppTypeContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterAppType(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitAppType(this);
      }
    }
  }]);
  return AppTypeContext;
}(_antlr["default"].ParserRuleContext);
var TellIdContext = /*#__PURE__*/function (_antlr4$ParserRuleCon21) {
  _inherits(TellIdContext, _antlr4$ParserRuleCon21);
  var _super22 = _createSuper(TellIdContext);
  function TellIdContext(parser, parent, invokingState) {
    var _this22;
    _classCallCheck(this, TellIdContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this22 = _super22.call(this, parent, invokingState);
    _this22.parser = parser;
    _this22.ruleIndex = ASGrammarParser.RULE_tellId;
    return _this22;
  }
  _createClass(TellIdContext, [{
    key: "operation",
    value: function operation() {
      return this.getTypedRuleContext(OperationContext, 0);
    }
  }, {
    key: "tellArg",
    value: function tellArg() {
      return this.getTypedRuleContext(TellArgContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterTellId(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitTellId(this);
      }
    }
  }]);
  return TellIdContext;
}(_antlr["default"].ParserRuleContext);
var ExistsContext = /*#__PURE__*/function (_antlr4$ParserRuleCon22) {
  _inherits(ExistsContext, _antlr4$ParserRuleCon22);
  var _super23 = _createSuper(ExistsContext);
  function ExistsContext(parser, parent, invokingState) {
    var _this23;
    _classCallCheck(this, ExistsContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this23 = _super23.call(this, parent, invokingState);
    _this23.parser = parser;
    _this23.ruleIndex = ASGrammarParser.RULE_exists;
    return _this23;
  }
  _createClass(ExistsContext, [{
    key: "STRING",
    value: function STRING() {
      return this.getToken(ASGrammarParser.STRING, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterExists(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitExists(this);
      }
    }
  }]);
  return ExistsContext;
}(_antlr["default"].ParserRuleContext);
var IfBlockContext = /*#__PURE__*/function (_antlr4$ParserRuleCon23) {
  _inherits(IfBlockContext, _antlr4$ParserRuleCon23);
  var _super24 = _createSuper(IfBlockContext);
  function IfBlockContext(parser, parent, invokingState) {
    var _this24;
    _classCallCheck(this, IfBlockContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this24 = _super24.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this24), "elseIf", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(ElseIfContext);
      } else {
        return this.getTypedRuleContext(ElseIfContext, i);
      }
    });
    _this24.parser = parser;
    _this24.ruleIndex = ASGrammarParser.RULE_ifBlock;
    return _this24;
  }
  _createClass(IfBlockContext, [{
    key: "ifStatement",
    value: function ifStatement() {
      return this.getTypedRuleContext(IfStatementContext, 0);
    }
  }, {
    key: "elseStatement",
    value: function elseStatement() {
      return this.getTypedRuleContext(ElseStatementContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterIfBlock(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitIfBlock(this);
      }
    }
  }]);
  return IfBlockContext;
}(_antlr["default"].ParserRuleContext);
var ElseIfContext = /*#__PURE__*/function (_antlr4$ParserRuleCon24) {
  _inherits(ElseIfContext, _antlr4$ParserRuleCon24);
  var _super25 = _createSuper(ElseIfContext);
  function ElseIfContext(parser, parent, invokingState) {
    var _this25;
    _classCallCheck(this, ElseIfContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this25 = _super25.call(this, parent, invokingState);
    _this25.parser = parser;
    _this25.ruleIndex = ASGrammarParser.RULE_elseIf;
    return _this25;
  }
  _createClass(ElseIfContext, [{
    key: "ifStatement",
    value: function ifStatement() {
      return this.getTypedRuleContext(IfStatementContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterElseIf(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitElseIf(this);
      }
    }
  }]);
  return ElseIfContext;
}(_antlr["default"].ParserRuleContext);
var ElseStatementContext = /*#__PURE__*/function (_antlr4$ParserRuleCon25) {
  _inherits(ElseStatementContext, _antlr4$ParserRuleCon25);
  var _super26 = _createSuper(ElseStatementContext);
  function ElseStatementContext(parser, parent, invokingState) {
    var _this26;
    _classCallCheck(this, ElseStatementContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this26 = _super26.call(this, parent, invokingState);
    _this26.parser = parser;
    _this26.ruleIndex = ASGrammarParser.RULE_elseStatement;
    return _this26;
  }
  _createClass(ElseStatementContext, [{
    key: "statementList",
    value: function statementList() {
      return this.getTypedRuleContext(StatementListContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterElseStatement(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitElseStatement(this);
      }
    }
  }]);
  return ElseStatementContext;
}(_antlr["default"].ParserRuleContext);
var IfStatementContext = /*#__PURE__*/function (_antlr4$ParserRuleCon26) {
  _inherits(IfStatementContext, _antlr4$ParserRuleCon26);
  var _super27 = _createSuper(IfStatementContext);
  function IfStatementContext(parser, parent, invokingState) {
    var _this27;
    _classCallCheck(this, IfStatementContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this27 = _super27.call(this, parent, invokingState);
    _this27.parser = parser;
    _this27.ruleIndex = ASGrammarParser.RULE_ifStatement;
    return _this27;
  }
  _createClass(IfStatementContext, [{
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "statementList",
    value: function statementList() {
      return this.getTypedRuleContext(StatementListContext, 0);
    }
  }, {
    key: "operator",
    value: function operator() {
      return this.getTypedRuleContext(OperatorContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterIfStatement(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitIfStatement(this);
      }
    }
  }]);
  return IfStatementContext;
}(_antlr["default"].ParserRuleContext);
var ToStatementContext = /*#__PURE__*/function (_antlr4$ParserRuleCon27) {
  _inherits(ToStatementContext, _antlr4$ParserRuleCon27);
  var _super28 = _createSuper(ToStatementContext);
  function ToStatementContext(parser, parent, invokingState) {
    var _this28;
    _classCallCheck(this, ToStatementContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this28 = _super28.call(this, parent, invokingState);
    _this28.parser = parser;
    _this28.ruleIndex = ASGrammarParser.RULE_toStatement;
    return _this28;
  }
  _createClass(ToStatementContext, [{
    key: "statement",
    value: function statement() {
      return this.getTypedRuleContext(StatementContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterToStatement(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitToStatement(this);
      }
    }
  }]);
  return ToStatementContext;
}(_antlr["default"].ParserRuleContext);
var StatementListContext = /*#__PURE__*/function (_antlr4$ParserRuleCon28) {
  _inherits(StatementListContext, _antlr4$ParserRuleCon28);
  var _super29 = _createSuper(StatementListContext);
  function StatementListContext(parser, parent, invokingState) {
    var _this29;
    _classCallCheck(this, StatementListContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this29 = _super29.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this29), "statement", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(StatementContext);
      } else {
        return this.getTypedRuleContext(StatementContext, i);
      }
    });
    _this29.parser = parser;
    _this29.ruleIndex = ASGrammarParser.RULE_statementList;
    return _this29;
  }
  _createClass(StatementListContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterStatementList(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitStatementList(this);
      }
    }
  }]);
  return StatementListContext;
}(_antlr["default"].ParserRuleContext);
var ReturnStatementContext = /*#__PURE__*/function (_antlr4$ParserRuleCon29) {
  _inherits(ReturnStatementContext, _antlr4$ParserRuleCon29);
  var _super30 = _createSuper(ReturnStatementContext);
  function ReturnStatementContext(parser, parent, invokingState) {
    var _this30;
    _classCallCheck(this, ReturnStatementContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this30 = _super30.call(this, parent, invokingState);
    _this30.parser = parser;
    _this30.ruleIndex = ASGrammarParser.RULE_returnStatement;
    return _this30;
  }
  _createClass(ReturnStatementContext, [{
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterReturnStatement(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitReturnStatement(this);
      }
    }
  }]);
  return ReturnStatementContext;
}(_antlr["default"].ParserRuleContext);
var StatementContext = /*#__PURE__*/function (_antlr4$ParserRuleCon30) {
  _inherits(StatementContext, _antlr4$ParserRuleCon30);
  var _super31 = _createSuper(StatementContext);
  function StatementContext(parser, parent, invokingState) {
    var _this31;
    _classCallCheck(this, StatementContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this31 = _super31.call(this, parent, invokingState);
    _this31.parser = parser;
    _this31.ruleIndex = ASGrammarParser.RULE_statement;
    return _this31;
  }
  _createClass(StatementContext, [{
    key: "loopStatement",
    value: function loopStatement() {
      return this.getTypedRuleContext(LoopStatementContext, 0);
    }
  }, {
    key: "copy",
    value: function copy() {
      return this.getTypedRuleContext(CopyContext, 0);
    }
  }, {
    key: "error",
    value: function error() {
      return this.getTypedRuleContext(ErrorContext, 0);
    }
  }, {
    key: "errorHandler",
    value: function errorHandler() {
      return this.getTypedRuleContext(ErrorHandlerContext, 0);
    }
  }, {
    key: "openFile",
    value: function openFile() {
      return this.getTypedRuleContext(OpenFileContext, 0);
    }
  }, {
    key: "onRun",
    value: function onRun() {
      return this.getTypedRuleContext(OnRunContext, 0);
    }
  }, {
    key: "exit",
    value: function exit() {
      return this.getTypedRuleContext(ExitContext, 0);
    }
  }, {
    key: "returnStatement",
    value: function returnStatement() {
      return this.getTypedRuleContext(ReturnStatementContext, 0);
    }
  }, {
    key: "functionDeclaration",
    value: function functionDeclaration() {
      return this.getTypedRuleContext(FunctionDeclarationContext, 0);
    }
  }, {
    key: "displayDialog",
    value: function displayDialog() {
      return this.getTypedRuleContext(DisplayDialogContext, 0);
    }
  }, {
    key: "makeNew",
    value: function makeNew() {
      return this.getTypedRuleContext(MakeNewContext, 0);
    }
  }, {
    key: "keystroke",
    value: function keystroke() {
      return this.getTypedRuleContext(KeystrokeContext, 0);
    }
  }, {
    key: "functionCall",
    value: function functionCall() {
      return this.getTypedRuleContext(FunctionCallContext, 0);
    }
  }, {
    key: "set",
    value: function set() {
      return this.getTypedRuleContext(SetContext, 0);
    }
  }, {
    key: "ifBlock",
    value: function ifBlock() {
      return this.getTypedRuleContext(IfBlockContext, 0);
    }
  }, {
    key: "delay",
    value: function delay() {
      return this.getTypedRuleContext(DelayContext, 0);
    }
  }, {
    key: "click",
    value: function click() {
      return this.getTypedRuleContext(ClickContext, 0);
    }
  }, {
    key: "openLocation",
    value: function openLocation() {
      return this.getTypedRuleContext(OpenLocationContext, 0);
    }
  }, {
    key: "activate",
    value: function activate() {
      return this.getTypedRuleContext(ActivateContext, 0);
    }
  }, {
    key: "tell",
    value: function tell() {
      return this.getTypedRuleContext(TellContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterStatement(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitStatement(this);
      }
    }
  }]);
  return StatementContext;
}(_antlr["default"].ParserRuleContext);
var ParameterListContext = /*#__PURE__*/function (_antlr4$ParserRuleCon31) {
  _inherits(ParameterListContext, _antlr4$ParserRuleCon31);
  var _super32 = _createSuper(ParameterListContext);
  function ParameterListContext(parser, parent, invokingState) {
    var _this32;
    _classCallCheck(this, ParameterListContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this32 = _super32.call(this, parent, invokingState);
    _this32.parser = parser;
    _this32.ruleIndex = ASGrammarParser.RULE_parameterList;
    return _this32;
  }
  _createClass(ParameterListContext, [{
    key: "arguments",
    value: function _arguments() {
      return this.getTypedRuleContext(ArgumentsContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterParameterList(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitParameterList(this);
      }
    }
  }]);
  return ParameterListContext;
}(_antlr["default"].ParserRuleContext);
var OnRunContext = /*#__PURE__*/function (_antlr4$ParserRuleCon32) {
  _inherits(OnRunContext, _antlr4$ParserRuleCon32);
  var _super33 = _createSuper(OnRunContext);
  function OnRunContext(parser, parent, invokingState) {
    var _this33;
    _classCallCheck(this, OnRunContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this33 = _super33.call(this, parent, invokingState);
    _this33.parser = parser;
    _this33.ruleIndex = ASGrammarParser.RULE_onRun;
    return _this33;
  }
  _createClass(OnRunContext, [{
    key: "statementList",
    value: function statementList() {
      return this.getTypedRuleContext(StatementListContext, 0);
    }
  }, {
    key: "parameterList",
    value: function parameterList() {
      return this.getTypedRuleContext(ParameterListContext, 0);
    }
  }, {
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(ASGrammarParser.IDENTIFIER, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterOnRun(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitOnRun(this);
      }
    }
  }]);
  return OnRunContext;
}(_antlr["default"].ParserRuleContext);
var FunctionDeclarationContext = /*#__PURE__*/function (_antlr4$ParserRuleCon33) {
  _inherits(FunctionDeclarationContext, _antlr4$ParserRuleCon33);
  var _super34 = _createSuper(FunctionDeclarationContext);
  function FunctionDeclarationContext(parser, parent, invokingState) {
    var _this34;
    _classCallCheck(this, FunctionDeclarationContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this34 = _super34.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this34), "IDENTIFIER", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(ASGrammarParser.IDENTIFIER);
      } else {
        return this.getToken(ASGrammarParser.IDENTIFIER, i);
      }
    });
    _this34.parser = parser;
    _this34.ruleIndex = ASGrammarParser.RULE_functionDeclaration;
    return _this34;
  }
  _createClass(FunctionDeclarationContext, [{
    key: "functionBody",
    value: function functionBody() {
      return this.getTypedRuleContext(FunctionBodyContext, 0);
    }
  }, {
    key: "parameterList",
    value: function parameterList() {
      return this.getTypedRuleContext(ParameterListContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterFunctionDeclaration(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitFunctionDeclaration(this);
      }
    }
  }]);
  return FunctionDeclarationContext;
}(_antlr["default"].ParserRuleContext);
var FunctionBodyContext = /*#__PURE__*/function (_antlr4$ParserRuleCon34) {
  _inherits(FunctionBodyContext, _antlr4$ParserRuleCon34);
  var _super35 = _createSuper(FunctionBodyContext);
  function FunctionBodyContext(parser, parent, invokingState) {
    var _this35;
    _classCallCheck(this, FunctionBodyContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this35 = _super35.call(this, parent, invokingState);
    _this35.parser = parser;
    _this35.ruleIndex = ASGrammarParser.RULE_functionBody;
    return _this35;
  }
  _createClass(FunctionBodyContext, [{
    key: "statementList",
    value: function statementList() {
      return this.getTypedRuleContext(StatementListContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterFunctionBody(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitFunctionBody(this);
      }
    }
  }]);
  return FunctionBodyContext;
}(_antlr["default"].ParserRuleContext);
var FunctionCallContext = /*#__PURE__*/function (_antlr4$ParserRuleCon35) {
  _inherits(FunctionCallContext, _antlr4$ParserRuleCon35);
  var _super36 = _createSuper(FunctionCallContext);
  function FunctionCallContext(parser, parent, invokingState) {
    var _this36;
    _classCallCheck(this, FunctionCallContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this36 = _super36.call(this, parent, invokingState);
    _this36.parser = parser;
    _this36.ruleIndex = ASGrammarParser.RULE_functionCall;
    return _this36;
  }
  _createClass(FunctionCallContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(ASGrammarParser.IDENTIFIER, 0);
    }
  }, {
    key: "arguments",
    value: function _arguments() {
      return this.getTypedRuleContext(ArgumentsContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterFunctionCall(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitFunctionCall(this);
      }
    }
  }]);
  return FunctionCallContext;
}(_antlr["default"].ParserRuleContext);
var ArgumentsContext = /*#__PURE__*/function (_antlr4$ParserRuleCon36) {
  _inherits(ArgumentsContext, _antlr4$ParserRuleCon36);
  var _super37 = _createSuper(ArgumentsContext);
  function ArgumentsContext(parser, parent, invokingState) {
    var _this37;
    _classCallCheck(this, ArgumentsContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this37 = _super37.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this37), "expression", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
      } else {
        return this.getTypedRuleContext(ExpressionContext, i);
      }
    });
    _this37.parser = parser;
    _this37.ruleIndex = ASGrammarParser.RULE_arguments;
    return _this37;
  }
  _createClass(ArgumentsContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterArguments(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitArguments(this);
      }
    }
  }]);
  return ArgumentsContext;
}(_antlr["default"].ParserRuleContext);
var RangeContext = /*#__PURE__*/function (_antlr4$ParserRuleCon37) {
  _inherits(RangeContext, _antlr4$ParserRuleCon37);
  var _super38 = _createSuper(RangeContext);
  function RangeContext(parser, parent, invokingState) {
    var _this38;
    _classCallCheck(this, RangeContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this38 = _super38.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this38), "expression", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
      } else {
        return this.getTypedRuleContext(ExpressionContext, i);
      }
    });
    _this38.parser = parser;
    _this38.ruleIndex = ASGrammarParser.RULE_range;
    return _this38;
  }
  _createClass(RangeContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterRange(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitRange(this);
      }
    }
  }]);
  return RangeContext;
}(_antlr["default"].ParserRuleContext);
var OperatorContext = /*#__PURE__*/function (_antlr4$ParserRuleCon38) {
  _inherits(OperatorContext, _antlr4$ParserRuleCon38);
  var _super39 = _createSuper(OperatorContext);
  function OperatorContext(parser, parent, invokingState) {
    var _this39;
    _classCallCheck(this, OperatorContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this39 = _super39.call(this, parent, invokingState);
    _this39.parser = parser;
    _this39.ruleIndex = ASGrammarParser.RULE_operator;
    return _this39;
  }
  _createClass(OperatorContext, [{
    key: "copyFrom",
    value: function copyFrom(ctx) {
      _get(_getPrototypeOf(OperatorContext.prototype), "copyFrom", this).call(this, ctx);
    }
  }]);
  return OperatorContext;
}(_antlr["default"].ParserRuleContext);
var AddContext = /*#__PURE__*/function (_OperatorContext) {
  _inherits(AddContext, _OperatorContext);
  var _super40 = _createSuper(AddContext);
  function AddContext(parser, ctx) {
    var _thisSuper, _this40;
    _classCallCheck(this, AddContext);
    _this40 = _super40.call(this, parser);
    _get((_thisSuper = _assertThisInitialized(_this40), _getPrototypeOf(AddContext.prototype)), "copyFrom", _thisSuper).call(_thisSuper, ctx);
    return _this40;
  }
  _createClass(AddContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterAdd(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitAdd(this);
      }
    }
  }]);
  return AddContext;
}(OperatorContext);
ASGrammarParser.AddContext = AddContext;
var GreaterThanEqualContext = /*#__PURE__*/function (_OperatorContext2) {
  _inherits(GreaterThanEqualContext, _OperatorContext2);
  var _super41 = _createSuper(GreaterThanEqualContext);
  function GreaterThanEqualContext(parser, ctx) {
    var _thisSuper2, _this41;
    _classCallCheck(this, GreaterThanEqualContext);
    _this41 = _super41.call(this, parser);
    _get((_thisSuper2 = _assertThisInitialized(_this41), _getPrototypeOf(GreaterThanEqualContext.prototype)), "copyFrom", _thisSuper2).call(_thisSuper2, ctx);
    return _this41;
  }
  _createClass(GreaterThanEqualContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterGreaterThanEqual(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitGreaterThanEqual(this);
      }
    }
  }]);
  return GreaterThanEqualContext;
}(OperatorContext);
ASGrammarParser.GreaterThanEqualContext = GreaterThanEqualContext;
var LessThanEqualContext = /*#__PURE__*/function (_OperatorContext3) {
  _inherits(LessThanEqualContext, _OperatorContext3);
  var _super42 = _createSuper(LessThanEqualContext);
  function LessThanEqualContext(parser, ctx) {
    var _thisSuper3, _this42;
    _classCallCheck(this, LessThanEqualContext);
    _this42 = _super42.call(this, parser);
    _get((_thisSuper3 = _assertThisInitialized(_this42), _getPrototypeOf(LessThanEqualContext.prototype)), "copyFrom", _thisSuper3).call(_thisSuper3, ctx);
    return _this42;
  }
  _createClass(LessThanEqualContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterLessThanEqual(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitLessThanEqual(this);
      }
    }
  }]);
  return LessThanEqualContext;
}(OperatorContext);
ASGrammarParser.LessThanEqualContext = LessThanEqualContext;
var OrContext = /*#__PURE__*/function (_OperatorContext4) {
  _inherits(OrContext, _OperatorContext4);
  var _super43 = _createSuper(OrContext);
  function OrContext(parser, ctx) {
    var _thisSuper4, _this43;
    _classCallCheck(this, OrContext);
    _this43 = _super43.call(this, parser);
    _get((_thisSuper4 = _assertThisInitialized(_this43), _getPrototypeOf(OrContext.prototype)), "copyFrom", _thisSuper4).call(_thisSuper4, ctx);
    return _this43;
  }
  _createClass(OrContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterOr(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitOr(this);
      }
    }
  }]);
  return OrContext;
}(OperatorContext);
ASGrammarParser.OrContext = OrContext;
var InContext = /*#__PURE__*/function (_OperatorContext5) {
  _inherits(InContext, _OperatorContext5);
  var _super44 = _createSuper(InContext);
  function InContext(parser, ctx) {
    var _thisSuper5, _this44;
    _classCallCheck(this, InContext);
    _this44 = _super44.call(this, parser);
    _get((_thisSuper5 = _assertThisInitialized(_this44), _getPrototypeOf(InContext.prototype)), "copyFrom", _thisSuper5).call(_thisSuper5, ctx);
    return _this44;
  }
  _createClass(InContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterIn(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitIn(this);
      }
    }
  }]);
  return InContext;
}(OperatorContext);
ASGrammarParser.InContext = InContext;
var SubtractContext = /*#__PURE__*/function (_OperatorContext6) {
  _inherits(SubtractContext, _OperatorContext6);
  var _super45 = _createSuper(SubtractContext);
  function SubtractContext(parser, ctx) {
    var _thisSuper6, _this45;
    _classCallCheck(this, SubtractContext);
    _this45 = _super45.call(this, parser);
    _get((_thisSuper6 = _assertThisInitialized(_this45), _getPrototypeOf(SubtractContext.prototype)), "copyFrom", _thisSuper6).call(_thisSuper6, ctx);
    return _this45;
  }
  _createClass(SubtractContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterSubtract(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitSubtract(this);
      }
    }
  }]);
  return SubtractContext;
}(OperatorContext);
ASGrammarParser.SubtractContext = SubtractContext;
var UnequalContext = /*#__PURE__*/function (_OperatorContext7) {
  _inherits(UnequalContext, _OperatorContext7);
  var _super46 = _createSuper(UnequalContext);
  function UnequalContext(parser, ctx) {
    var _thisSuper7, _this46;
    _classCallCheck(this, UnequalContext);
    _this46 = _super46.call(this, parser);
    _get((_thisSuper7 = _assertThisInitialized(_this46), _getPrototypeOf(UnequalContext.prototype)), "copyFrom", _thisSuper7).call(_thisSuper7, ctx);
    return _this46;
  }
  _createClass(UnequalContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterUnequal(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitUnequal(this);
      }
    }
  }]);
  return UnequalContext;
}(OperatorContext);
ASGrammarParser.UnequalContext = UnequalContext;
var ConcatContext = /*#__PURE__*/function (_OperatorContext8) {
  _inherits(ConcatContext, _OperatorContext8);
  var _super47 = _createSuper(ConcatContext);
  function ConcatContext(parser, ctx) {
    var _thisSuper8, _this47;
    _classCallCheck(this, ConcatContext);
    _this47 = _super47.call(this, parser);
    _get((_thisSuper8 = _assertThisInitialized(_this47), _getPrototypeOf(ConcatContext.prototype)), "copyFrom", _thisSuper8).call(_thisSuper8, ctx);
    return _this47;
  }
  _createClass(ConcatContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterConcat(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitConcat(this);
      }
    }
  }]);
  return ConcatContext;
}(OperatorContext);
ASGrammarParser.ConcatContext = ConcatContext;
var WhoseContext = /*#__PURE__*/function (_OperatorContext9) {
  _inherits(WhoseContext, _OperatorContext9);
  var _super48 = _createSuper(WhoseContext);
  function WhoseContext(parser, ctx) {
    var _thisSuper9, _this48;
    _classCallCheck(this, WhoseContext);
    _this48 = _super48.call(this, parser);
    _get((_thisSuper9 = _assertThisInitialized(_this48), _getPrototypeOf(WhoseContext.prototype)), "copyFrom", _thisSuper9).call(_thisSuper9, ctx);
    return _this48;
  }
  _createClass(WhoseContext, [{
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterWhose(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitWhose(this);
      }
    }
  }]);
  return WhoseContext;
}(OperatorContext);
ASGrammarParser.WhoseContext = WhoseContext;
var NotContext = /*#__PURE__*/function (_OperatorContext10) {
  _inherits(NotContext, _OperatorContext10);
  var _super49 = _createSuper(NotContext);
  function NotContext(parser, ctx) {
    var _thisSuper10, _this49;
    _classCallCheck(this, NotContext);
    _this49 = _super49.call(this, parser);
    _get((_thisSuper10 = _assertThisInitialized(_this49), _getPrototypeOf(NotContext.prototype)), "copyFrom", _thisSuper10).call(_thisSuper10, ctx);
    return _this49;
  }
  _createClass(NotContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterNot(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitNot(this);
      }
    }
  }]);
  return NotContext;
}(OperatorContext);
ASGrammarParser.NotContext = NotContext;
var ContainsContext = /*#__PURE__*/function (_OperatorContext11) {
  _inherits(ContainsContext, _OperatorContext11);
  var _super50 = _createSuper(ContainsContext);
  function ContainsContext(parser, ctx) {
    var _thisSuper11, _this50;
    _classCallCheck(this, ContainsContext);
    _this50 = _super50.call(this, parser);
    _get((_thisSuper11 = _assertThisInitialized(_this50), _getPrototypeOf(ContainsContext.prototype)), "copyFrom", _thisSuper11).call(_thisSuper11, ctx);
    return _this50;
  }
  _createClass(ContainsContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterContains(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitContains(this);
      }
    }
  }]);
  return ContainsContext;
}(OperatorContext);
ASGrammarParser.ContainsContext = ContainsContext;
var AndContext = /*#__PURE__*/function (_OperatorContext12) {
  _inherits(AndContext, _OperatorContext12);
  var _super51 = _createSuper(AndContext);
  function AndContext(parser, ctx) {
    var _thisSuper12, _this51;
    _classCallCheck(this, AndContext);
    _this51 = _super51.call(this, parser);
    _get((_thisSuper12 = _assertThisInitialized(_this51), _getPrototypeOf(AndContext.prototype)), "copyFrom", _thisSuper12).call(_thisSuper12, ctx);
    return _this51;
  }
  _createClass(AndContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterAnd(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitAnd(this);
      }
    }
  }]);
  return AndContext;
}(OperatorContext);
ASGrammarParser.AndContext = AndContext;
var EqualsContext = /*#__PURE__*/function (_OperatorContext13) {
  _inherits(EqualsContext, _OperatorContext13);
  var _super52 = _createSuper(EqualsContext);
  function EqualsContext(parser, ctx) {
    var _thisSuper13, _this52;
    _classCallCheck(this, EqualsContext);
    _this52 = _super52.call(this, parser);
    _get((_thisSuper13 = _assertThisInitialized(_this52), _getPrototypeOf(EqualsContext.prototype)), "copyFrom", _thisSuper13).call(_thisSuper13, ctx);
    return _this52;
  }
  _createClass(EqualsContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterEquals(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitEquals(this);
      }
    }
  }]);
  return EqualsContext;
}(OperatorContext);
ASGrammarParser.EqualsContext = EqualsContext;
var LessThanContext = /*#__PURE__*/function (_OperatorContext14) {
  _inherits(LessThanContext, _OperatorContext14);
  var _super53 = _createSuper(LessThanContext);
  function LessThanContext(parser, ctx) {
    var _thisSuper14, _this53;
    _classCallCheck(this, LessThanContext);
    _this53 = _super53.call(this, parser);
    _get((_thisSuper14 = _assertThisInitialized(_this53), _getPrototypeOf(LessThanContext.prototype)), "copyFrom", _thisSuper14).call(_thisSuper14, ctx);
    return _this53;
  }
  _createClass(LessThanContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterLessThan(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitLessThan(this);
      }
    }
  }]);
  return LessThanContext;
}(OperatorContext);
ASGrammarParser.LessThanContext = LessThanContext;
var OfContext = /*#__PURE__*/function (_OperatorContext15) {
  _inherits(OfContext, _OperatorContext15);
  var _super54 = _createSuper(OfContext);
  function OfContext(parser, ctx) {
    var _thisSuper15, _this54;
    _classCallCheck(this, OfContext);
    _this54 = _super54.call(this, parser);
    _get((_thisSuper15 = _assertThisInitialized(_this54), _getPrototypeOf(OfContext.prototype)), "copyFrom", _thisSuper15).call(_thisSuper15, ctx);
    return _this54;
  }
  _createClass(OfContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterOf(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitOf(this);
      }
    }
  }]);
  return OfContext;
}(OperatorContext);
ASGrammarParser.OfContext = OfContext;
var DivideContext = /*#__PURE__*/function (_OperatorContext16) {
  _inherits(DivideContext, _OperatorContext16);
  var _super55 = _createSuper(DivideContext);
  function DivideContext(parser, ctx) {
    var _thisSuper16, _this55;
    _classCallCheck(this, DivideContext);
    _this55 = _super55.call(this, parser);
    _get((_thisSuper16 = _assertThisInitialized(_this55), _getPrototypeOf(DivideContext.prototype)), "copyFrom", _thisSuper16).call(_thisSuper16, ctx);
    return _this55;
  }
  _createClass(DivideContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterDivide(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitDivide(this);
      }
    }
  }]);
  return DivideContext;
}(OperatorContext);
ASGrammarParser.DivideContext = DivideContext;
var MultiplyContext = /*#__PURE__*/function (_OperatorContext17) {
  _inherits(MultiplyContext, _OperatorContext17);
  var _super56 = _createSuper(MultiplyContext);
  function MultiplyContext(parser, ctx) {
    var _thisSuper17, _this56;
    _classCallCheck(this, MultiplyContext);
    _this56 = _super56.call(this, parser);
    _get((_thisSuper17 = _assertThisInitialized(_this56), _getPrototypeOf(MultiplyContext.prototype)), "copyFrom", _thisSuper17).call(_thisSuper17, ctx);
    return _this56;
  }
  _createClass(MultiplyContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterMultiply(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitMultiply(this);
      }
    }
  }]);
  return MultiplyContext;
}(OperatorContext);
ASGrammarParser.MultiplyContext = MultiplyContext;
var ModuloContext = /*#__PURE__*/function (_OperatorContext18) {
  _inherits(ModuloContext, _OperatorContext18);
  var _super57 = _createSuper(ModuloContext);
  function ModuloContext(parser, ctx) {
    var _thisSuper18, _this57;
    _classCallCheck(this, ModuloContext);
    _this57 = _super57.call(this, parser);
    _get((_thisSuper18 = _assertThisInitialized(_this57), _getPrototypeOf(ModuloContext.prototype)), "copyFrom", _thisSuper18).call(_thisSuper18, ctx);
    return _this57;
  }
  _createClass(ModuloContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterModulo(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitModulo(this);
      }
    }
  }]);
  return ModuloContext;
}(OperatorContext);
ASGrammarParser.ModuloContext = ModuloContext;
var ExponentContext = /*#__PURE__*/function (_OperatorContext19) {
  _inherits(ExponentContext, _OperatorContext19);
  var _super58 = _createSuper(ExponentContext);
  function ExponentContext(parser, ctx) {
    var _thisSuper19, _this58;
    _classCallCheck(this, ExponentContext);
    _this58 = _super58.call(this, parser);
    _get((_thisSuper19 = _assertThisInitialized(_this58), _getPrototypeOf(ExponentContext.prototype)), "copyFrom", _thisSuper19).call(_thisSuper19, ctx);
    return _this58;
  }
  _createClass(ExponentContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterExponent(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitExponent(this);
      }
    }
  }]);
  return ExponentContext;
}(OperatorContext);
ASGrammarParser.ExponentContext = ExponentContext;
var GreaterThanContext = /*#__PURE__*/function (_OperatorContext20) {
  _inherits(GreaterThanContext, _OperatorContext20);
  var _super59 = _createSuper(GreaterThanContext);
  function GreaterThanContext(parser, ctx) {
    var _thisSuper20, _this59;
    _classCallCheck(this, GreaterThanContext);
    _this59 = _super59.call(this, parser);
    _get((_thisSuper20 = _assertThisInitialized(_this59), _getPrototypeOf(GreaterThanContext.prototype)), "copyFrom", _thisSuper20).call(_thisSuper20, ctx);
    return _this59;
  }
  _createClass(GreaterThanContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterGreaterThan(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitGreaterThan(this);
      }
    }
  }]);
  return GreaterThanContext;
}(OperatorContext);
ASGrammarParser.GreaterThanContext = GreaterThanContext;
var SetContext = /*#__PURE__*/function (_antlr4$ParserRuleCon39) {
  _inherits(SetContext, _antlr4$ParserRuleCon39);
  var _super60 = _createSuper(SetContext);
  function SetContext(parser, parent, invokingState) {
    var _this60;
    _classCallCheck(this, SetContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this60 = _super60.call(this, parent, invokingState);
    _this60.parser = parser;
    _this60.ruleIndex = ASGrammarParser.RULE_set;
    return _this60;
  }
  _createClass(SetContext, [{
    key: "operation",
    value: function operation() {
      return this.getTypedRuleContext(OperationContext, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterSet(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitSet(this);
      }
    }
  }]);
  return SetContext;
}(_antlr["default"].ParserRuleContext);
var SetPropertyContext = /*#__PURE__*/function (_antlr4$ParserRuleCon40) {
  _inherits(SetPropertyContext, _antlr4$ParserRuleCon40);
  var _super61 = _createSuper(SetPropertyContext);
  function SetPropertyContext(parser, parent, invokingState) {
    var _this61;
    _classCallCheck(this, SetPropertyContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this61 = _super61.call(this, parent, invokingState);
    _this61.parser = parser;
    _this61.ruleIndex = ASGrammarParser.RULE_setProperty;
    return _this61;
  }
  _createClass(SetPropertyContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(ASGrammarParser.IDENTIFIER, 0);
    }
  }, {
    key: "basicData",
    value: function basicData() {
      return this.getTypedRuleContext(BasicDataContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterSetProperty(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitSetProperty(this);
      }
    }
  }]);
  return SetPropertyContext;
}(_antlr["default"].ParserRuleContext);
var ListenerContext = /*#__PURE__*/function (_antlr4$ParserRuleCon41) {
  _inherits(ListenerContext, _antlr4$ParserRuleCon41);
  var _super62 = _createSuper(ListenerContext);
  function ListenerContext(parser, parent, invokingState) {
    var _this62;
    _classCallCheck(this, ListenerContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this62 = _super62.call(this, parent, invokingState);
    _this62.parser = parser;
    _this62.ruleIndex = ASGrammarParser.RULE_listener;
    return _this62;
  }
  _createClass(ListenerContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(ASGrammarParser.IDENTIFIER, 0);
    }
  }, {
    key: "variable",
    value: function variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterListener(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitListener(this);
      }
    }
  }]);
  return ListenerContext;
}(_antlr["default"].ParserRuleContext);
var ErrorHandlerContext = /*#__PURE__*/function (_antlr4$ParserRuleCon42) {
  _inherits(ErrorHandlerContext, _antlr4$ParserRuleCon42);
  var _super63 = _createSuper(ErrorHandlerContext);
  function ErrorHandlerContext(parser, parent, invokingState) {
    var _this63;
    _classCallCheck(this, ErrorHandlerContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this63 = _super63.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this63), "statementList", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(StatementListContext);
      } else {
        return this.getTypedRuleContext(StatementListContext, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this63), "IDENTIFIER", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(ASGrammarParser.IDENTIFIER);
      } else {
        return this.getToken(ASGrammarParser.IDENTIFIER, i);
      }
    });
    _this63.parser = parser;
    _this63.ruleIndex = ASGrammarParser.RULE_errorHandler;
    return _this63;
  }
  _createClass(ErrorHandlerContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterErrorHandler(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitErrorHandler(this);
      }
    }
  }]);
  return ErrorHandlerContext;
}(_antlr["default"].ParserRuleContext);
var OperationContext = /*#__PURE__*/function (_antlr4$ParserRuleCon43) {
  _inherits(OperationContext, _antlr4$ParserRuleCon43);
  var _super64 = _createSuper(OperationContext);
  function OperationContext(parser, parent, invokingState) {
    var _this64;
    _classCallCheck(this, OperationContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this64 = _super64.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this64), "value", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(ValueContext);
      } else {
        return this.getTypedRuleContext(ValueContext, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this64), "operator", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(OperatorContext);
      } else {
        return this.getTypedRuleContext(OperatorContext, i);
      }
    });
    _this64.parser = parser;
    _this64.ruleIndex = ASGrammarParser.RULE_operation;
    return _this64;
  }
  _createClass(OperationContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterOperation(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitOperation(this);
      }
    }
  }]);
  return OperationContext;
}(_antlr["default"].ParserRuleContext);
var ExpressionContext = /*#__PURE__*/function (_antlr4$ParserRuleCon44) {
  _inherits(ExpressionContext, _antlr4$ParserRuleCon44);
  var _super65 = _createSuper(ExpressionContext);
  function ExpressionContext(parser, parent, invokingState) {
    var _this65;
    _classCallCheck(this, ExpressionContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this65 = _super65.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this65), "expression", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
      } else {
        return this.getTypedRuleContext(ExpressionContext, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this65), "operator", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(OperatorContext);
      } else {
        return this.getTypedRuleContext(OperatorContext, i);
      }
    });
    _this65.parser = parser;
    _this65.ruleIndex = ASGrammarParser.RULE_expression;
    return _this65;
  }
  _createClass(ExpressionContext, [{
    key: "operation",
    value: function operation() {
      return this.getTypedRuleContext(OperationContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterExpression(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitExpression(this);
      }
    }
  }]);
  return ExpressionContext;
}(_antlr["default"].ParserRuleContext);
var ValueContext = /*#__PURE__*/function (_antlr4$ParserRuleCon45) {
  _inherits(ValueContext, _antlr4$ParserRuleCon45);
  var _super66 = _createSuper(ValueContext);
  function ValueContext(parser, parent, invokingState) {
    var _this66;
    _classCallCheck(this, ValueContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this66 = _super66.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this66), "expression", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
      } else {
        return this.getTypedRuleContext(ExpressionContext, i);
      }
    });
    _this66.parser = parser;
    _this66.ruleIndex = ASGrammarParser.RULE_value;
    return _this66;
  }
  _createClass(ValueContext, [{
    key: "missingValue",
    value: function missingValue() {
      return this.getTypedRuleContext(MissingValueContext, 0);
    }
  }, {
    key: "count",
    value: function count() {
      return this.getTypedRuleContext(CountContext, 0);
    }
  }, {
    key: "displayDialog",
    value: function displayDialog() {
      return this.getTypedRuleContext(DisplayDialogContext, 0);
    }
  }, {
    key: "exists",
    value: function exists() {
      return this.getTypedRuleContext(ExistsContext, 0);
    }
  }, {
    key: "functionCall",
    value: function functionCall() {
      return this.getTypedRuleContext(FunctionCallContext, 0);
    }
  }, {
    key: "makeNew",
    value: function makeNew() {
      return this.getTypedRuleContext(MakeNewContext, 0);
    }
  }, {
    key: "FLOAT",
    value: function FLOAT() {
      return this.getToken(ASGrammarParser.FLOAT, 0);
    }
  }, {
    key: "INTEGER",
    value: function INTEGER() {
      return this.getToken(ASGrammarParser.INTEGER, 0);
    }
  }, {
    key: "STRING",
    value: function STRING() {
      return this.getToken(ASGrammarParser.STRING, 0);
    }
  }, {
    key: "BOOLEAN",
    value: function BOOLEAN() {
      return this.getToken(ASGrammarParser.BOOLEAN, 0);
    }
  }, {
    key: "variable",
    value: function variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
  }, {
    key: "record",
    value: function record() {
      return this.getTypedRuleContext(RecordContext, 0);
    }
  }, {
    key: "list",
    value: function list() {
      return this.getTypedRuleContext(ListContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterValue(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitValue(this);
      }
    }
  }]);
  return ValueContext;
}(_antlr["default"].ParserRuleContext);
var WithPropertiesContext = /*#__PURE__*/function (_antlr4$ParserRuleCon46) {
  _inherits(WithPropertiesContext, _antlr4$ParserRuleCon46);
  var _super67 = _createSuper(WithPropertiesContext);
  function WithPropertiesContext(parser, parent, invokingState) {
    var _this67;
    _classCallCheck(this, WithPropertiesContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this67 = _super67.call(this, parent, invokingState);
    _this67.parser = parser;
    _this67.ruleIndex = ASGrammarParser.RULE_withProperties;
    return _this67;
  }
  _createClass(WithPropertiesContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterWithProperties(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitWithProperties(this);
      }
    }
  }]);
  return WithPropertiesContext;
}(_antlr["default"].ParserRuleContext);
var MakeNewContext = /*#__PURE__*/function (_antlr4$ParserRuleCon47) {
  _inherits(MakeNewContext, _antlr4$ParserRuleCon47);
  var _super68 = _createSuper(MakeNewContext);
  function MakeNewContext(parser, parent, invokingState) {
    var _this68;
    _classCallCheck(this, MakeNewContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this68 = _super68.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this68), "variable", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(VariableContext);
      } else {
        return this.getTypedRuleContext(VariableContext, i);
      }
    });
    _this68.parser = parser;
    _this68.ruleIndex = ASGrammarParser.RULE_makeNew;
    return _this68;
  }
  _createClass(MakeNewContext, [{
    key: "withProperties",
    value: function withProperties() {
      return this.getTypedRuleContext(WithPropertiesContext, 0);
    }
  }, {
    key: "record",
    value: function record() {
      return this.getTypedRuleContext(RecordContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterMakeNew(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitMakeNew(this);
      }
    }
  }]);
  return MakeNewContext;
}(_antlr["default"].ParserRuleContext);
var VariableContext = /*#__PURE__*/function (_antlr4$ParserRuleCon48) {
  _inherits(VariableContext, _antlr4$ParserRuleCon48);
  var _super69 = _createSuper(VariableContext);
  function VariableContext(parser, parent, invokingState) {
    var _this69;
    _classCallCheck(this, VariableContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this69 = _super69.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this69), "modifier", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(ModifierContext);
      } else {
        return this.getTypedRuleContext(ModifierContext, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this69), "IDENTIFIER", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(ASGrammarParser.IDENTIFIER);
      } else {
        return this.getToken(ASGrammarParser.IDENTIFIER, i);
      }
    });
    _this69.parser = parser;
    _this69.ruleIndex = ASGrammarParser.RULE_variable;
    return _this69;
  }
  _createClass(VariableContext, [{
    key: "property",
    value: function property() {
      return this.getTypedRuleContext(PropertyContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterVariable(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitVariable(this);
      }
    }
  }]);
  return VariableContext;
}(_antlr["default"].ParserRuleContext);
var ModifierContext = /*#__PURE__*/function (_antlr4$ParserRuleCon49) {
  _inherits(ModifierContext, _antlr4$ParserRuleCon49);
  var _super70 = _createSuper(ModifierContext);
  function ModifierContext(parser, parent, invokingState) {
    var _this70;
    _classCallCheck(this, ModifierContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this70 = _super70.call(this, parent, invokingState);
    _this70.parser = parser;
    _this70.ruleIndex = ASGrammarParser.RULE_modifier;
    return _this70;
  }
  _createClass(ModifierContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterModifier(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitModifier(this);
      }
    }
  }]);
  return ModifierContext;
}(_antlr["default"].ParserRuleContext);
var PropertyContext = /*#__PURE__*/function (_antlr4$ParserRuleCon50) {
  _inherits(PropertyContext, _antlr4$ParserRuleCon50);
  var _super71 = _createSuper(PropertyContext);
  function PropertyContext(parser, parent, invokingState) {
    var _this71;
    _classCallCheck(this, PropertyContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this71 = _super71.call(this, parent, invokingState);
    _this71.parser = parser;
    _this71.ruleIndex = ASGrammarParser.RULE_property;
    return _this71;
  }
  _createClass(PropertyContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(ASGrammarParser.IDENTIFIER, 0);
    }
  }, {
    key: "INTEGER",
    value: function INTEGER() {
      return this.getToken(ASGrammarParser.INTEGER, 0);
    }
  }, {
    key: "STRING",
    value: function STRING() {
      return this.getToken(ASGrammarParser.STRING, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterProperty(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitProperty(this);
      }
    }
  }]);
  return PropertyContext;
}(_antlr["default"].ParserRuleContext);
var RecordContext = /*#__PURE__*/function (_antlr4$ParserRuleCon51) {
  _inherits(RecordContext, _antlr4$ParserRuleCon51);
  var _super72 = _createSuper(RecordContext);
  function RecordContext(parser, parent, invokingState) {
    var _this72;
    _classCallCheck(this, RecordContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this72 = _super72.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this72), "variable", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(VariableContext);
      } else {
        return this.getTypedRuleContext(VariableContext, i);
      }
    });
    _defineProperty(_assertThisInitialized(_this72), "expression", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
      } else {
        return this.getTypedRuleContext(ExpressionContext, i);
      }
    });
    _this72.parser = parser;
    _this72.ruleIndex = ASGrammarParser.RULE_record;
    return _this72;
  }
  _createClass(RecordContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterRecord(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitRecord(this);
      }
    }
  }]);
  return RecordContext;
}(_antlr["default"].ParserRuleContext);
var ListContext = /*#__PURE__*/function (_antlr4$ParserRuleCon52) {
  _inherits(ListContext, _antlr4$ParserRuleCon52);
  var _super73 = _createSuper(ListContext);
  function ListContext(parser, parent, invokingState) {
    var _this73;
    _classCallCheck(this, ListContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this73 = _super73.call(this, parent, invokingState);
    _this73.parser = parser;
    _this73.ruleIndex = ASGrammarParser.RULE_list;
    return _this73;
  }
  _createClass(ListContext, [{
    key: "arguments",
    value: function _arguments() {
      return this.getTypedRuleContext(ArgumentsContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterList(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitList(this);
      }
    }
  }]);
  return ListContext;
}(_antlr["default"].ParserRuleContext);
var BasicDataContext = /*#__PURE__*/function (_antlr4$ParserRuleCon53) {
  _inherits(BasicDataContext, _antlr4$ParserRuleCon53);
  var _super74 = _createSuper(BasicDataContext);
  function BasicDataContext(parser, parent, invokingState) {
    var _this74;
    _classCallCheck(this, BasicDataContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this74 = _super74.call(this, parent, invokingState);
    _this74.parser = parser;
    _this74.ruleIndex = ASGrammarParser.RULE_basicData;
    return _this74;
  }
  _createClass(BasicDataContext, [{
    key: "INTEGER",
    value: function INTEGER() {
      return this.getToken(ASGrammarParser.INTEGER, 0);
    }
  }, {
    key: "BOOLEAN",
    value: function BOOLEAN() {
      return this.getToken(ASGrammarParser.BOOLEAN, 0);
    }
  }, {
    key: "STRING",
    value: function STRING() {
      return this.getToken(ASGrammarParser.STRING, 0);
    }
  }, {
    key: "missingValue",
    value: function missingValue() {
      return this.getTypedRuleContext(MissingValueContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterBasicData(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitBasicData(this);
      }
    }
  }]);
  return BasicDataContext;
}(_antlr["default"].ParserRuleContext);
var MissingValueContext = /*#__PURE__*/function (_antlr4$ParserRuleCon54) {
  _inherits(MissingValueContext, _antlr4$ParserRuleCon54);
  var _super75 = _createSuper(MissingValueContext);
  function MissingValueContext(parser, parent, invokingState) {
    var _this75;
    _classCallCheck(this, MissingValueContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this75 = _super75.call(this, parent, invokingState);
    _this75.parser = parser;
    _this75.ruleIndex = ASGrammarParser.RULE_missingValue;
    return _this75;
  }
  _createClass(MissingValueContext, [{
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterMissingValue(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitMissingValue(this);
      }
    }
  }]);
  return MissingValueContext;
}(_antlr["default"].ParserRuleContext);
var DisplayDialogContext = /*#__PURE__*/function (_antlr4$ParserRuleCon55) {
  _inherits(DisplayDialogContext, _antlr4$ParserRuleCon55);
  var _super76 = _createSuper(DisplayDialogContext);
  function DisplayDialogContext(parser, parent, invokingState) {
    var _this76;
    _classCallCheck(this, DisplayDialogContext);
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    _this76 = _super76.call(this, parent, invokingState);
    _defineProperty(_assertThisInitialized(_this76), "STRING", function (i) {
      if (i === undefined) {
        i = null;
      }
      if (i === null) {
        return this.getTokens(ASGrammarParser.STRING);
      } else {
        return this.getToken(ASGrammarParser.STRING, i);
      }
    });
    _this76.parser = parser;
    _this76.ruleIndex = ASGrammarParser.RULE_displayDialog;
    return _this76;
  }
  _createClass(DisplayDialogContext, [{
    key: "expression",
    value: function expression() {
      return this.getTypedRuleContext(ExpressionContext, 0);
    }
  }, {
    key: "enterRule",
    value: function enterRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.enterDisplayDialog(this);
      }
    }
  }, {
    key: "exitRule",
    value: function exitRule(listener) {
      if (listener instanceof _ASGrammarListener["default"]) {
        listener.exitDisplayDialog(this);
      }
    }
  }]);
  return DisplayDialogContext;
}(_antlr["default"].ParserRuleContext);
ASGrammarParser.ProgramContext = ProgramContext;
ASGrammarParser.DelayContext = DelayContext;
ASGrammarParser.CountContext = CountContext;
ASGrammarParser.CopyContext = CopyContext;
ASGrammarParser.ErrorContext = ErrorContext;
ASGrammarParser.ClickContext = ClickContext;
ASGrammarParser.OpenLocationContext = OpenLocationContext;
ASGrammarParser.ActivateContext = ActivateContext;
ASGrammarParser.OpenFileContext = OpenFileContext;
ASGrammarParser.SaveContext = SaveContext;
ASGrammarParser.KeystrokeContext = KeystrokeContext;
ASGrammarParser.UsingContext = UsingContext;
ASGrammarParser.LoopStatementContext = LoopStatementContext;
ASGrammarParser.RepeatLoopContext = RepeatLoopContext;
ASGrammarParser.WhileLoopContext = WhileLoopContext;
ASGrammarParser.ExitContext = ExitContext;
ASGrammarParser.TellContext = TellContext;
ASGrammarParser.TellAppContext = TellAppContext;
ASGrammarParser.TellArgContext = TellArgContext;
ASGrammarParser.AppTypeContext = AppTypeContext;
ASGrammarParser.TellIdContext = TellIdContext;
ASGrammarParser.ExistsContext = ExistsContext;
ASGrammarParser.IfBlockContext = IfBlockContext;
ASGrammarParser.ElseIfContext = ElseIfContext;
ASGrammarParser.ElseStatementContext = ElseStatementContext;
ASGrammarParser.IfStatementContext = IfStatementContext;
ASGrammarParser.ToStatementContext = ToStatementContext;
ASGrammarParser.StatementListContext = StatementListContext;
ASGrammarParser.ReturnStatementContext = ReturnStatementContext;
ASGrammarParser.StatementContext = StatementContext;
ASGrammarParser.ParameterListContext = ParameterListContext;
ASGrammarParser.OnRunContext = OnRunContext;
ASGrammarParser.FunctionDeclarationContext = FunctionDeclarationContext;
ASGrammarParser.FunctionBodyContext = FunctionBodyContext;
ASGrammarParser.FunctionCallContext = FunctionCallContext;
ASGrammarParser.ArgumentsContext = ArgumentsContext;
ASGrammarParser.RangeContext = RangeContext;
ASGrammarParser.OperatorContext = OperatorContext;
ASGrammarParser.SetContext = SetContext;
ASGrammarParser.SetPropertyContext = SetPropertyContext;
ASGrammarParser.ListenerContext = ListenerContext;
ASGrammarParser.ErrorHandlerContext = ErrorHandlerContext;
ASGrammarParser.OperationContext = OperationContext;
ASGrammarParser.ExpressionContext = ExpressionContext;
ASGrammarParser.ValueContext = ValueContext;
ASGrammarParser.WithPropertiesContext = WithPropertiesContext;
ASGrammarParser.MakeNewContext = MakeNewContext;
ASGrammarParser.VariableContext = VariableContext;
ASGrammarParser.ModifierContext = ModifierContext;
ASGrammarParser.PropertyContext = PropertyContext;
ASGrammarParser.RecordContext = RecordContext;
ASGrammarParser.ListContext = ListContext;
ASGrammarParser.BasicDataContext = BasicDataContext;
ASGrammarParser.MissingValueContext = MissingValueContext;
ASGrammarParser.DisplayDialogContext = DisplayDialogContext;