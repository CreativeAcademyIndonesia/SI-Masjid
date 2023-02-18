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
exports.id = "pages/api/dataalmarhum";
exports.ids = ["pages/api/dataalmarhum"];
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

/***/ "(api)/./pages/api/dataalmarhum.js":
/*!***********************************!*\
  !*** ./pages/api/dataalmarhum.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\nconst handler = async (_, res)=>{\n    try {\n        const results = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.query(`SELECT * FROM dataalmarhum ORDER BY no ASC \r\n            `);\n        await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.end;\n        return res.json(results);\n    } catch (e) {\n        res.status(500).json({\n            message: e.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGF0YWFsbWFyaHVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBRWxDLE1BQU1DLFVBQVUsT0FBT0MsR0FBR0MsTUFBUTtJQUM5QixJQUFJO1FBR0EsTUFBTUMsVUFBVSxNQUFNSiw2Q0FBUSxDQUMxQixDQUFDO1FBR0wsTUFBTUE7UUFFTixpREFBV087SUFDZixFQUFFLE9BQU9DLEdBQUc7UUFDUkwsSUFBSU07WUFBbUJDLFNBQVNGLEVBQUVFLE9BQU87UUFBQztJQUM5QztBQUNKO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmZvcm1hc2ltYXNqaWQvLi9wYWdlcy9hcGkvZGF0YWFsbWFyaHVtLmpzPzhjYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKF8sIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBkYi5xdWVyeShcclxuICAgICAgICAgICAgYFNFTEVDVCAqIEZST00gZGF0YWFsbWFyaHVtIE9SREVSIEJZIG5vIEFTQyBcclxuICAgICAgICAgICAgYCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGF3YWl0IGRiLmVuZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHJlc3VsdHMpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbn1cclxuICAgIDtcclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiZGIiLCJoYW5kbGVyIiwiXyIsInJlcyIsInJlc3VsdHMiLCJxdWVyeSIsImVuZCIsImpzb24iLCJlIiwic3RhdHVzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/dataalmarhum.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/dataalmarhum.js"));
module.exports = __webpack_exports__;

})();