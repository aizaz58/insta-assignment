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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n/* harmony import */ var _hooks_useUserDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useUserDetail */ \"./hooks/useUserDetail.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProfileDetail = ()=>{\n    var _user_data, _user_data1, _user_data2, _user_data3, _user_data4;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const query = router.query;\n    console.log(\"query:\", router.query);\n    const userId = Number(query.userId);\n    console.log(userId);\n    const user = (0,_hooks_useUserDetail__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(userId);\n    if (user.isSuccess) {\n        console.log(user.data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                    children: [\n                        (user === null || user === void 0 ? void 0 : user.isLoading) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"loading...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                            lineNumber: 26,\n                            columnNumber: 20\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: user === null || user === void 0 ? void 0 : (_user_data = user.data) === null || _user_data === void 0 ? void 0 : _user_data.image,\n                            width: 40,\n                            height: 40,\n                            alt: \"profile\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                            lineNumber: 27,\n                            columnNumber: 1\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardBody, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardTitle, {\n                                    tag: \"h6\",\n                                    className: \"text-center\",\n                                    children: [\n                                        user === null || user === void 0 ? void 0 : (_user_data1 = user.data) === null || _user_data1 === void 0 ? void 0 : _user_data1.firstName,\n                                        \" \",\n                                        user === null || user === void 0 ? void 0 : (_user_data2 = user.data) === null || _user_data2 === void 0 ? void 0 : _user_data2.maidenName,\n                                        \" \",\n                                        user === null || user === void 0 ? void 0 : (_user_data3 = user.data) === null || _user_data3 === void 0 ? void 0 : _user_data3.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 1\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.ListGroup, {\n                                    horizontal: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.ListGroupItem, {\n                                            children: \"BirthDay\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 3\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.ListGroupItem, {\n                                            children: user.data.birthDate && (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.format)(new Date(user === null || user === void 0 ? void 0 : (_user_data4 = user.data) === null || _user_data4 === void 0 ? void 0 : _user_data4.birthDate), \"dd MMMM yyyy\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 3\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 1\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                            lineNumber: 29,\n                            columnNumber: 3\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                    lineNumber: 25,\n                    columnNumber: 1\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n            lineNumber: 23,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\workspace\\\\insta-assignment\\\\pages\\\\ProfileDetail.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfileDetail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProfileDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileDetail);\nvar _c;\n$RefreshReg$(_c, \"ProfileDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qcm9maWxlRGV0YWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBaUM7QUFDSDtBQUNTO0FBQ2Q7QUFDZ0I7QUFDdUQ7QUFDOUM7QUFFbEQsTUFBTWEsZ0JBQWdCLElBQU07UUFrQmhCQyxZQUlYQSxhQUE2QkEsYUFBOEJBLGFBU2pCQTs7SUE5QnpDLE1BQU1DLFNBQVNiLHNEQUFTQTtJQUN4QixNQUFNYyxRQUFNRCxPQUFPQyxLQUFLO0lBQ3pCQyxRQUFRQyxHQUFHLENBQUMsVUFBU0gsT0FBT0MsS0FBSztJQUVoQyxNQUFNRyxTQUFPQyxPQUFPSixNQUFNRyxNQUFNO0lBQ2hDRixRQUFRQyxHQUFHLENBQUNDO0lBQ1osTUFBTUwsT0FBS0YsZ0VBQWFBLENBQUNPO0lBQ3pCLElBQUdMLEtBQUtPLFNBQVMsRUFBQztRQUVoQkosUUFBUUMsR0FBRyxDQUFDSixLQUFLUSxJQUFJO0lBQ3ZCLENBQUM7SUFDRCxxQkFDRSw4REFBQ0M7a0JBQ0QsNEVBQUNkLGlEQUFTQTtzQkFDUiw0RUFBQ0QsMkNBQUdBOzBCQUNWLDRFQUFDSCw0Q0FBSUE7O3dCQUNGUyxDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1VLFNBQVMsa0JBQUMsOERBQUNDO3NDQUFFOzs7OztzREFDdEIsOERBQUN4QixtREFBS0E7NEJBQUN5QixLQUFLWixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGFBQUFBLEtBQU1RLElBQUksY0FBVlIsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVlhLEtBQUY7NEJBQVNDLE9BQU87NEJBQUlDLFFBQVE7NEJBQUlDLEtBQUk7Ozs7O3FDQUFZO3NDQUVwRSw4REFBQ3hCLGdEQUFRQTs7OENBQ1gsOERBQUNDLGlEQUFTQTtvQ0FBQ3dCLEtBQUk7b0NBQUtDLFdBQVU7O3dDQUM3QmxCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsY0FBQUEsS0FBTVEsSUFBSSxjQUFWUix5QkFBQUEsS0FBQUEsSUFBQUEsWUFBWW1CLFNBQUY7d0NBQWM7d0NBQUtuQixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGNBQUFBLEtBQU1RLElBQUksY0FBVlIseUJBQUFBLEtBQUFBLElBQUFBLFlBQVlvQixVQUFGO3dDQUFlO3dDQUFLcEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxjQUFBQSxLQUFNUSxJQUFJLGNBQVZSLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFZcUIsUUFBRjs7Ozs7Ozs4Q0FFdEUsOERBQUN6QixpREFBU0E7b0NBQUMwQixVQUFVOztzREFDbkIsOERBQUN6QixxREFBYUE7c0RBQUM7Ozs7OztzREFHZiw4REFBQ0EscURBQWFBO3NEQUdWRyxLQUFLUSxJQUFJLENBQUNlLFNBQVMsSUFBRXJDLGdEQUFNQSxDQUFDLElBQUlzQyxLQUFLeEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxjQUFBQSxLQUFNUSxJQUFJLGNBQVZSLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFZdUIsU0FBRixHQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbEU7R0ExQ014Qjs7UUFDV1gsa0RBQVNBOzs7S0FEcEJXO0FBNENOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1Byb2ZpbGVEZXRhaWwuanM/Y2VlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IENhcmQsIENhcmRCb2R5LCBDYXJkVGl0bGUsIENvbCwgQ29udGFpbmVyLCBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0gfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5pbXBvcnQgVXNlVXNlckRldGFpbCBmcm9tICcuLi9ob29rcy91c2VVc2VyRGV0YWlsJ1xyXG5cclxuY29uc3QgUHJvZmlsZURldGFpbCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHF1ZXJ5PXJvdXRlci5xdWVyeVxyXG4gY29uc29sZS5sb2coXCJxdWVyeTpcIixyb3V0ZXIucXVlcnkpXHJcblxyXG4gIGNvbnN0IHVzZXJJZD1OdW1iZXIocXVlcnkudXNlcklkKVxyXG4gIGNvbnNvbGUubG9nKHVzZXJJZClcclxuICBjb25zdCB1c2VyPVVzZVVzZXJEZXRhaWwodXNlcklkKVxyXG4gIGlmKHVzZXIuaXNTdWNjZXNzKXtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2codXNlci5kYXRhKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxDb2w+XHJcbjxDYXJkPlxyXG4gIHt1c2VyPy5pc0xvYWRpbmc/PHA+bG9hZGluZy4uLjwvcD46XHJcbjxJbWFnZSBzcmM9e3VzZXI/LmRhdGE/LmltYWdlfSB3aWR0aD17NDB9IGhlaWdodD17NDB9IGFsdD1cInByb2ZpbGVcIiAvPlxyXG4gIH1cclxuICA8Q2FyZEJvZHk+XHJcbjxDYXJkVGl0bGUgdGFnPVwiaDZcIiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxue3VzZXI/LmRhdGE/LmZpcnN0TmFtZSB9e1wiIFwifXt1c2VyPy5kYXRhPy5tYWlkZW5OYW1lIH17XCIgXCJ9e3VzZXI/LmRhdGE/Lmxhc3ROYW1lIH1cclxuPC9DYXJkVGl0bGU+XHJcbjxMaXN0R3JvdXAgaG9yaXpvbnRhbD5cclxuICA8TGlzdEdyb3VwSXRlbT5cclxuQmlydGhEYXlcclxuICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgPExpc3RHcm91cEl0ZW0+XHJcblxyXG5cclxuICAgIHsgdXNlci5kYXRhLmJpcnRoRGF0ZSYmZm9ybWF0KG5ldyBEYXRlKHVzZXI/LmRhdGE/LmJpcnRoRGF0ZSksJ2RkIE1NTU0geXl5eScsKX1cclxuXHJcbiAgPC9MaXN0R3JvdXBJdGVtPlxyXG48L0xpc3RHcm91cD5cclxuICA8L0NhcmRCb2R5PlxyXG48L0NhcmQ+XHJcblxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRGV0YWlsIl0sIm5hbWVzIjpbImZvcm1hdCIsIkltYWdlIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTZWxlY3RvciIsIkNhcmQiLCJDYXJkQm9keSIsIkNhcmRUaXRsZSIsIkNvbCIsIkNvbnRhaW5lciIsIkxpc3RHcm91cCIsIkxpc3RHcm91cEl0ZW0iLCJVc2VVc2VyRGV0YWlsIiwiUHJvZmlsZURldGFpbCIsInVzZXIiLCJyb3V0ZXIiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySWQiLCJOdW1iZXIiLCJpc1N1Y2Nlc3MiLCJkYXRhIiwiZGl2IiwiaXNMb2FkaW5nIiwicCIsInNyYyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ0YWciLCJjbGFzc05hbWUiLCJmaXJzdE5hbWUiLCJtYWlkZW5OYW1lIiwibGFzdE5hbWUiLCJob3Jpem9udGFsIiwiYmlydGhEYXRlIiwiRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ProfileDetail.js\n"));

/***/ })

});