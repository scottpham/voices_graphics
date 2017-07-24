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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Chart = {\n  create: function create(opts) {\n    var instance = Object.create(this);\n    // loop over options passed in and attach them to instances \n    Object.keys(opts).forEach(function (key) {\n      // instance property equals value of the option\n      instance[key] = opts[key];\n    });\n\n    return instance;\n  },\n  parameters: function parameters() {},\n\n  message: \"What it is\",\n  draw: function draw() {\n    this.parameters();\n    console.log(this.message);\n  }\n};\n\nexports.Chart = Chart;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NoYXJ0LmpzPzJkMzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBDaGFydCA9IHtcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUob3B0cykge1xuICAgIHZhciBpbnN0YW5jZSA9IE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgLy8gbG9vcCBvdmVyIG9wdGlvbnMgcGFzc2VkIGluIGFuZCBhdHRhY2ggdGhlbSB0byBpbnN0YW5jZXMgXG4gICAgT2JqZWN0LmtleXMob3B0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvLyBpbnN0YW5jZSBwcm9wZXJ0eSBlcXVhbHMgdmFsdWUgb2YgdGhlIG9wdGlvblxuICAgICAgaW5zdGFuY2Vba2V5XSA9IG9wdHNba2V5XTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfSxcbiAgcGFyYW1ldGVyczogZnVuY3Rpb24gcGFyYW1ldGVycygpIHt9LFxuXG4gIG1lc3NhZ2U6IFwiV2hhdCBpdCBpc1wiLFxuICBkcmF3OiBmdW5jdGlvbiBkcmF3KCkge1xuICAgIHRoaXMucGFyYW1ldGVycygpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZSk7XG4gIH1cbn07XG5cbmV4cG9ydHMuQ2hhcnQgPSBDaGFydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9zY3JpcHRzL2NoYXJ0LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _chart = __webpack_require__(0);\n\nconsole.log(_chart.Chart);\n\nvar app = {\n  init: function init() {\n    var myChart = _chart.Chart.create({ message: \"I created you\" });\n    myChart.draw();\n  }\n};\n\napp.init();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL21haW4uanM/Y2EwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9jaGFydCA9IHJlcXVpcmUoXCIuL2NoYXJ0LmpzXCIpO1xuXG5jb25zb2xlLmxvZyhfY2hhcnQuQ2hhcnQpO1xuXG52YXIgYXBwID0ge1xuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBteUNoYXJ0ID0gX2NoYXJ0LkNoYXJ0LmNyZWF0ZSh7IG1lc3NhZ2U6IFwiSSBjcmVhdGVkIHlvdVwiIH0pO1xuICAgIG15Q2hhcnQuZHJhdygpO1xuICB9XG59O1xuXG5hcHAuaW5pdCgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3NjcmlwdHMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);