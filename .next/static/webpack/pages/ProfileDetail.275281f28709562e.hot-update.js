"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ProfileDetail",{

/***/ "./hooks/useUserDetail.js":
/*!********************************!*\
  !*** ./hooks/useUserDetail.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/axios */ \"./api/axios.js\");\n/* harmony import */ var _features_useReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/useReducer */ \"./features/useReducer.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst LOGIN_URL = \"users\";\nconst UseUserDetail = (id)=>{\n    _s();\n    // console.log(\"user\",id);\n    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([\n        \"userDetail\"\n    ], async ()=>{\n        if (id && typeof id !== \"object\") {\n            const res = await _api_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"users/\".concat(id));\n            return await res.data;\n        }\n    });\n};\n_s(UseUserDetail, \"4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n_c = UseUserDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UseUserDetail);\nvar _c;\n$RefreshReg$(_c, \"UseUserDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VVc2VyRGV0YWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQWdEO0FBQ1Y7QUFDTjtBQUNrQztBQUNsRSxNQUFNTyxZQUFVO0FBQ2hCLE1BQU1DLGdCQUFnQixDQUFDQyxLQUFPOztJQUN4QiwwQkFBMEI7SUFHN0IsT0FBUU4scURBQVFBLENBQUM7UUFBQztLQUFhLEVBQUMsVUFBUztRQUN4QyxJQUFHTSxNQUFNLE9BQU9BLE9BQU8sVUFBVTtZQUMvQixNQUFNQyxNQUFJLE1BQU1OLHNEQUFTLENBQUMsU0FBWSxPQUFISztZQUNuQyxPQUFPLE1BQU1DLElBQUlFLElBQUk7UUFDdkIsQ0FBQztJQUNEO0FBRUo7R0FYTUo7O1FBSUtMLGlEQUFRQTs7O0tBSmJLO0FBYU4sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVXNlckRldGFpbC5qcz81M2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmLHVzZVJlZHVjZXIsdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi9hcGkvYXhpb3MnXHJcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSwgdXNlclJlZHVjZXIgfSBmcm9tIFwiLi4vZmVhdHVyZXMvdXNlUmVkdWNlclwiXHJcbmNvbnN0IExPR0lOX1VSTD1cInVzZXJzXCJcclxuY29uc3QgVXNlVXNlckRldGFpbCA9IChpZCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInVzZXJcIixpZCk7XHJcblxyXG4gICAgICBcclxuICAgcmV0dXJuICB1c2VRdWVyeShbXCJ1c2VyRGV0YWlsXCJdLGFzeW5jKCk9PntcclxuICAgIGlmKGlkICYmIHR5cGVvZiBpZCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgY29uc3QgcmVzPWF3YWl0IGF4aW9zLmdldChgdXNlcnMvJHtpZH1gKVxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVzLmRhdGFcclxuICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VVc2VyRGV0YWlsIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsInVzZVF1ZXJ5IiwiYXhpb3MiLCJpbml0aWFsU3RhdGUiLCJ1c2VyUmVkdWNlciIsIkxPR0lOX1VSTCIsIlVzZVVzZXJEZXRhaWwiLCJpZCIsInJlcyIsImdldCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useUserDetail.js\n"));

/***/ })

});