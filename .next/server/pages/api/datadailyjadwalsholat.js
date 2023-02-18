"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/datadailyjadwalsholat";
exports.ids = ["pages/api/datadailyjadwalsholat"];
exports.modules = {

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n    config: {\n        host: process.env.MYSQL_HOST,\n        database: process.env.MYSQL_DATABASE,\n        user: process.env.MYSQL_USERNAME,\n        password: process.env.MYSQL_PASSWORD,\n        port: parseInt(process.env.MYSQL_PORT)\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9DO0FBRTdCLE1BQU1DLEtBQUtELHVEQUFLQSxDQUFDO0lBQ3BCRSxRQUFRO1FBQ0pDLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtRQUM1QkMsVUFBVUgsUUFBUUMsR0FBRyxDQUFDRyxjQUFjO1FBQ3BDQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLGNBQWM7UUFDaENDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sY0FBYztRQUNwQ0MsTUFBTUMsU0FBU1YsUUFBUUMsR0FBRyxDQUFDVSxVQUFVO0lBQ3pDO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2luZm9ybWFzaW1hc2ppZC8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tIFwic2VydmVybGVzcy1teXNxbFwiXHJcblxyXG5leHBvcnQgY29uc3QgZGIgPSBteXNxbCh7XHJcbiAgICBjb25maWc6IHtcclxuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5NWVNRTF9IT1NULFxyXG4gICAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5NWVNRTF9EQVRBQkFTRSxcclxuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5NWVNRTF9VU0VSTkFNRSxcclxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTVlTUUxfUEFTU1dPUkQsXHJcbiAgICAgICAgcG9ydDogcGFyc2VJbnQocHJvY2Vzcy5lbnYuTVlTUUxfUE9SVClcclxuICAgIH0sXHJcbn0pIl0sIm5hbWVzIjpbIm15c3FsIiwiZGIiLCJjb25maWciLCJob3N0IiwicHJvY2VzcyIsImVudiIsIk1ZU1FMX0hPU1QiLCJkYXRhYmFzZSIsIk1ZU1FMX0RBVEFCQVNFIiwidXNlciIsIk1ZU1FMX1VTRVJOQU1FIiwicGFzc3dvcmQiLCJNWVNRTF9QQVNTV09SRCIsInBvcnQiLCJwYXJzZUludCIsIk1ZU1FMX1BPUlQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/datadailyjadwalsholat.js":
/*!********************************************!*\
  !*** ./pages/api/datadailyjadwalsholat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\nconst handler = async (_, res)=>{\n    try {\n        const today = new Date().toJSON().slice(0, 10);\n        const results = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.query(`SELECT * FROM jadwalsholat WHERE tanggal = '${today}'`);\n        await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.end;\n        return res.json(results);\n    } catch (e) {\n        res.status(500).json({\n            message: e.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGF0YWRhaWx5amFkd2Fsc2hvbGF0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBRWxDLE1BQU1DLFVBQVUsT0FBT0MsR0FBR0MsTUFBUTtJQUM5QixJQUFJO1FBQ0EsTUFBTUMsUUFBUSxJQUFJQyxPQUFPQyxNQUFNLEdBQUdDLEtBQUssQ0FBQyxHQUFHO1FBQzNDLE1BQU1DLFVBQVUsTUFBTVIsNkNBQVEsQ0FDMUIsQ0FBQyw0Q0FBNEMsRUFBRUksTUFBTSxDQUFDLENBQUM7UUFFM0QsTUFBTUosMkNBQU07UUFFWixPQUFPRyxJQUFJUSxJQUFJLENBQUNIO0lBQ3BCLEVBQUUsT0FBT0ksR0FBRztRQUNSVCxJQUFJVSxNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDO1lBQUVHLFNBQVNGLEVBQUVFLE9BQU87UUFBQztJQUM5QztBQUNKO0FBRUEsaUVBQWViLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmZvcm1hc2ltYXNqaWQvLi9wYWdlcy9hcGkvZGF0YWRhaWx5amFkd2Fsc2hvbGF0LmpzPzYwZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKF8sIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9KU09OKCkuc2xpY2UoMCwgMTApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBkYi5xdWVyeShcclxuICAgICAgICAgICAgYFNFTEVDVCAqIEZST00gamFkd2Fsc2hvbGF0IFdIRVJFIHRhbmdnYWwgPSAnJHt0b2RheX0nYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYXdhaXQgZGIuZW5kO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24ocmVzdWx0cylcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGUubWVzc2FnZSB9KTtcclxuICAgIH1cclxufVxyXG4gICAgO1xyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJkYiIsImhhbmRsZXIiLCJfIiwicmVzIiwidG9kYXkiLCJEYXRlIiwidG9KU09OIiwic2xpY2UiLCJyZXN1bHRzIiwicXVlcnkiLCJlbmQiLCJqc29uIiwiZSIsInN0YXR1cyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/datadailyjadwalsholat.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/datadailyjadwalsholat.js"));
module.exports = __webpack_exports__;

})();