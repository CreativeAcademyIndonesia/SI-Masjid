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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
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

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    // Cek apakah request merupakan POST request\n    if (req.method === \"POST\") {\n        // Ambil data username dan password dari request body\n        const { username , password  } = req.body;\n        // Lakukan query untuk mencari admin dengan username dan password yang sesuai\n        const result = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.query(`SELECT * FROM admin WHERE username = ? AND password = ?`, [\n            username,\n            password\n        ]);\n        // Cek apakah ada admin yang ditemukan\n        if (result.length > 0) {\n            // Jika ada, set status code ke 200 (OK) dan kirimkan data admin ke client\n            res.status(200).json(result[0]);\n        } else {\n            // Jika tidak ada, set status code ke 401 (Unauthorized) dan kirimkan pesan error ke client\n            res.status(401).json({\n                message: \"Invalid username or password\"\n            });\n        }\n    } else {\n        // Jika request bukan POST request, set status code ke 405 (Method Not Allowed) dan kirimkan header yang sesuai\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFFbEMsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUMvQiw0Q0FBNEM7SUFDNUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDdkIscURBQXFEO1FBQ3JELE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxTQUFRLEVBQUUsR0FBR0osSUFBSUssSUFBSTtRQUV2Qyw2RUFBNkU7UUFDN0UsTUFBTUMsU0FBUyxNQUFNUCw2Q0FBUSxDQUN6QixDQUFDLHVEQUF1RCxDQUFDLEVBQ3pEO1lBQUNJO1lBQVVDO1NBQVM7UUFHeEIsc0NBQXNDO1FBQ3RDLElBQUlFLE9BQU9FLE1BQU0sR0FBRyxHQUFHO1lBQ25CLDBFQUEwRTtZQUMxRVAsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0osTUFBTSxDQUFDLEVBQUU7UUFDbEMsT0FBTztZQUNILDJGQUEyRjtZQUMzRkwsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUErQjtRQUNuRSxDQUFDO0lBQ0wsT0FBTztRQUNILCtHQUErRztRQUMvR1YsSUFBSVcsU0FBUyxDQUFDLFNBQVM7WUFBQztTQUFPO1FBQy9CWCxJQUFJUSxNQUFNLENBQUMsS0FBS0ksR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFYixJQUFJRSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQzFELENBQUM7QUFDTCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5mb3JtYXNpbWFzamlkLy4vcGFnZXMvYXBpL2xvZ2luLmpzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIC8vIENlayBhcGFrYWggcmVxdWVzdCBtZXJ1cGFrYW4gUE9TVCByZXF1ZXN0XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgLy8gQW1iaWwgZGF0YSB1c2VybmFtZSBkYW4gcGFzc3dvcmQgZGFyaSByZXF1ZXN0IGJvZHlcclxuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICAgIC8vIExha3VrYW4gcXVlcnkgdW50dWsgbWVuY2FyaSBhZG1pbiBkZW5nYW4gdXNlcm5hbWUgZGFuIHBhc3N3b3JkIHlhbmcgc2VzdWFpXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIucXVlcnkoXHJcbiAgICAgICAgICAgIGBTRUxFQ1QgKiBGUk9NIGFkbWluIFdIRVJFIHVzZXJuYW1lID0gPyBBTkQgcGFzc3dvcmQgPSA/YCxcclxuICAgICAgICAgICAgW3VzZXJuYW1lLCBwYXNzd29yZF1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBDZWsgYXBha2FoIGFkYSBhZG1pbiB5YW5nIGRpdGVtdWthblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBKaWthIGFkYSwgc2V0IHN0YXR1cyBjb2RlIGtlIDIwMCAoT0spIGRhbiBraXJpbWthbiBkYXRhIGFkbWluIGtlIGNsaWVudFxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEppa2EgdGlkYWsgYWRhLCBzZXQgc3RhdHVzIGNvZGUga2UgNDAxIChVbmF1dGhvcml6ZWQpIGRhbiBraXJpbWthbiBwZXNhbiBlcnJvciBrZSBjbGllbnRcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBKaWthIHJlcXVlc3QgYnVrYW4gUE9TVCByZXF1ZXN0LCBzZXQgc3RhdHVzIGNvZGUga2UgNDA1IChNZXRob2QgTm90IEFsbG93ZWQpIGRhbiBraXJpbWthbiBoZWFkZXIgeWFuZyBzZXN1YWlcclxuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xyXG4gICAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiZGIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYm9keSIsInJlc3VsdCIsInF1ZXJ5IiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();