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

/***/ "./pages/ProfileDetail.js":
/*!********************************!*\
  !*** ./pages/ProfileDetail.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n/* harmony import */ var _hooks_useUserDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useUserDetail */ \"./hooks/useUserDetail.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProfileDetail = ()=>{\n    var _user_data;\n    _s();\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(\"query:\", query);\n    const userId = Object.values(query);\n    console.log(typeof userId[0]);\n    const user = (0,_hooks_useUserDetail__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(userId[0]);\n    if (user.isSuccess) {\n        console.log(user.data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: user === null || user === void 0 ? void 0 : (_user_data = user.data) === null || _user_data === void 0 ? void 0 : _user_data.image,\n                            width: 40,\n                            height: 40,\n                            alt: \"profile\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                            lineNumber: 24,\n                            columnNumber: 1\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardBody, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardTitle, {\n                                    tag: \"h6\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 1\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.ListGroup, {\n                                    horizontal: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.ListGroupItem, {}, void 0, false, {\n                                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 3\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.ListGroupItem, {}, void 0, false, {\n                                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 3\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 1\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                            lineNumber: 25,\n                            columnNumber: 3\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                    lineNumber: 23,\n                    columnNumber: 1\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfileDetail, \"VR2mp68S/cRvdqdH5htLccMcbak=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProfileDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileDetail);\nvar _c;\n$RefreshReg$(_c, \"ProfileDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qcm9maWxlRGV0YWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUE4QjtBQUNTO0FBQ2Q7QUFDZ0I7QUFDdUQ7QUFDOUM7QUFFbEQsTUFBTVksZ0JBQWdCLElBQU07UUFnQmhCQzs7SUFmVixNQUFNLEVBQUNDLE1BQUssRUFBQyxHQUFDYixzREFBU0E7SUFDeEJjLFFBQVFDLEdBQUcsQ0FBQyxVQUFTRjtJQUVwQixNQUFNRyxTQUFPQyxPQUFPQyxNQUFNLENBQUNMO0lBQzNCQyxRQUFRQyxHQUFHLENBQUMsT0FBT0MsTUFBTSxDQUFDLEVBQUU7SUFDNUIsTUFBTUosT0FBS0YsZ0VBQWFBLENBQUNNLE1BQU0sQ0FBQyxFQUFFO0lBQ2xDLElBQUdKLEtBQUtPLFNBQVMsRUFBQztRQUVoQkwsUUFBUUMsR0FBRyxDQUFDSCxLQUFLUSxJQUFJO0lBQ3ZCLENBQUM7SUFDRCxxQkFDRSw4REFBQ0M7a0JBQ0QsNEVBQUNkLGlEQUFTQTtzQkFDUiw0RUFBQ0QsMkNBQUdBOzBCQUNWLDRFQUFDSCw0Q0FBSUE7O3NDQUNMLDhEQUFDSixtREFBS0E7NEJBQUN1QixLQUFLVixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGFBQUFBLEtBQU1RLElBQUksY0FBVlIsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVlXLEtBQUY7NEJBQVNDLE9BQU87NEJBQUlDLFFBQVE7NEJBQUlDLEtBQUk7Ozs7OztzQ0FDeEQsOERBQUN0QixnREFBUUE7OzhDQUNYLDhEQUFDQyxpREFBU0E7b0NBQUNzQixLQUFJOzs7Ozs7OENBR2YsOERBQUNuQixpREFBU0E7b0NBQUNvQixVQUFVOztzREFDbkIsOERBQUNuQixxREFBYUE7Ozs7O3NEQUdkLDhEQUFDQSxxREFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV2hCO0dBcENNRTs7UUFDVVgsa0RBQVNBOzs7S0FEbkJXO0FBc0NOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1Byb2ZpbGVEZXRhaWwuanM/Y2VlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQ29sLCBDb250YWluZXIsIExpc3RHcm91cCwgTGlzdEdyb3VwSXRlbSB9IGZyb20gJ3JlYWN0c3RyYXAnXHJcbmltcG9ydCBVc2VVc2VyRGV0YWlsIGZyb20gJy4uL2hvb2tzL3VzZVVzZXJEZXRhaWwnXHJcblxyXG5jb25zdCBQcm9maWxlRGV0YWlsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtxdWVyeX09dXNlUm91dGVyKClcclxuIGNvbnNvbGUubG9nKFwicXVlcnk6XCIscXVlcnkpXHJcblxyXG4gIGNvbnN0IHVzZXJJZD1PYmplY3QudmFsdWVzKHF1ZXJ5KVxyXG4gIGNvbnNvbGUubG9nKHR5cGVvZih1c2VySWRbMF0pKVxyXG4gIGNvbnN0IHVzZXI9VXNlVXNlckRldGFpbCh1c2VySWRbMF0pXHJcbiAgaWYodXNlci5pc1N1Y2Nlc3Mpe1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyLmRhdGEpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPENvbD5cclxuPENhcmQ+XHJcbjxJbWFnZSBzcmM9e3VzZXI/LmRhdGE/LmltYWdlfSB3aWR0aD17NDB9IGhlaWdodD17NDB9IGFsdD1cInByb2ZpbGVcIiAvPlxyXG4gIDxDYXJkQm9keT5cclxuPENhcmRUaXRsZSB0YWc9XCJoNlwiPlxyXG57fVxyXG48L0NhcmRUaXRsZT5cclxuPExpc3RHcm91cCBob3Jpem9udGFsPlxyXG4gIDxMaXN0R3JvdXBJdGVtPlxyXG5cclxuICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgPExpc3RHcm91cEl0ZW0+XHJcblxyXG4gIDwvTGlzdEdyb3VwSXRlbT5cclxuPC9MaXN0R3JvdXA+XHJcbiAgPC9DYXJkQm9keT5cclxuPC9DYXJkPlxyXG5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZURldGFpbCJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU2VsZWN0b3IiLCJDYXJkIiwiQ2FyZEJvZHkiLCJDYXJkVGl0bGUiLCJDb2wiLCJDb250YWluZXIiLCJMaXN0R3JvdXAiLCJMaXN0R3JvdXBJdGVtIiwiVXNlVXNlckRldGFpbCIsIlByb2ZpbGVEZXRhaWwiLCJ1c2VyIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwidXNlcklkIiwiT2JqZWN0IiwidmFsdWVzIiwiaXNTdWNjZXNzIiwiZGF0YSIsImRpdiIsInNyYyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ0YWciLCJob3Jpem9udGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ProfileDetail.js\n"));

/***/ })

});