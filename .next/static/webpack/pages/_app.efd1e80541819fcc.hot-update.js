"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/SideMenu.js":
/*!********************************!*\
  !*** ./components/SideMenu.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _features_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/reducers */ \"./features/reducers.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Login.module.css */ \"./styles/Login.module.css\");\n/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n/* harmony import */ var _assests_avatar_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assests/avatar.jpg */ \"./assests/avatar.jpg\");\n/* harmony import */ var _assests_test1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assests/test1.png */ \"./assests/test1.png\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _features_useReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../features/useReducer */ \"./features/useReducer.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst SideMenu = ()=>{\n    var _state_user;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_features_useReducer__WEBPACK_IMPORTED_MODULE_7__.userReducer, _features_useReducer__WEBPACK_IMPORTED_MODULE_7__.initialState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    const handleClick = ()=>{\n        router.push({\n            pathname: \"/ProfileDetail\",\n            query: {\n                userId: state.user.id\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Card, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.CardTitle, {\n                    tag: \"h5\",\n                    className: \"mx-auto  \".concat((_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().logo))\n                }, void 0, false, {\n                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                    lineNumber: 40,\n                    columnNumber: 3\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.ListGroup, {\n                    flush: true,\n                    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_11___default().listgroup),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.ListGroupItem, {\n                            action: true,\n                            tag: \"button\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_12__.AiOutlineHome, {}, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 6\n                                }, undefined),\n                                \" Home\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                            lineNumber: 45,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.ListGroupItem, {\n                            action: true,\n                            tag: \"button\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_12__.AiOutlineSearch, {}, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 2\n                                }, undefined),\n                                \" Search\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                            lineNumber: 51,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.ListGroupItem, {\n                            action: true,\n                            tag: \"button\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_12__.AiOutlineCompass, {}, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 5\n                                }, undefined),\n                                \"  Explore\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                            lineNumber: 57,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.ListGroupItem, {\n                            action: true,\n                            tag: \"button\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_13__.BiMessageRoundedMinus, {}, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 2\n                                }, undefined),\n                                \"   Messages\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                            lineNumber: 63,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.ListGroupItem, {\n                            action: true,\n                            tag: \"button\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_12__.AiOutlineHeart, {}, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 2\n                                }, undefined),\n                                \" Notifications\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                            lineNumber: 69,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.ListGroupItem, {\n                            action: true,\n                            tag: \"button\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_14__.FiPlusSquare, {}, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 4\n                                }, undefined),\n                                \" Create\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                            lineNumber: 75,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.ListGroupItem, {\n                            action: true,\n                            tag: \"button\",\n                            onClick: handleClick,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    src: (_state_user = state.user) === null || _state_user === void 0 ? void 0 : _state_user.image,\n                                    width: 30,\n                                    height: 30,\n                                    className: \"rounded-circle \",\n                                    alt: \"derf\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 4\n                                }, undefined),\n                                \"  Profile\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                            lineNumber: 82,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.ListGroupItem, {\n                            action: true,\n                            tag: \"button\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_12__.AiOutlineMenu, {}, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 3\n                                }, undefined),\n                                \" More\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                            lineNumber: 90,\n                            columnNumber: 5\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n                    lineNumber: 43,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\SideMenu.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(SideMenu, \"Oi6HCk5Zxk3b3+LfkwHZRsbN0Fc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = SideMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\nvar _c;\n$RefreshReg$(_c, \"SideMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVNZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBc0M7QUFDUTtBQUNKO0FBQ0k7QUFDQztBQUNrRztBQUN2RztBQUNGO0FBQ2tFO0FBQ3JEO0FBQ1Y7QUFDRDtBQUNYO0FBQ29DO0FBQ3ZDO0FBQ1k7QUFZeEMsTUFBTWlDLFdBQVcsSUFBTTtRQTJEUkM7O0lBMURiLE1BQU0sQ0FBQ0EsT0FBTUMsU0FBUyxHQUFDbEMsaURBQVVBLENBQUM2Qiw2REFBV0EsRUFBQ0QsOERBQVlBO0lBQzFELE1BQU1PLFNBQU9KLHNEQUFTQTtJQUN0QixNQUFNSyxjQUFZLElBQUk7UUFDeEJELE9BQU9FLElBQUksQ0FBQztZQUNWQyxVQUFTO1lBQ1RDLE9BQU07Z0JBQUNDLFFBQU9QLE1BQU1RLElBQUksQ0FBQ0MsRUFBRTtZQUFBO1FBQzdCO0lBQ0U7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ3BDLDZDQUFJQTs7OEJBQ1QsOERBQUNLLGtEQUFTQTtvQkFBRWdDLEtBQUk7b0JBQUtDLFdBQVcsWUFBd0IsT0FBWnhDLHVFQUFXOzs7Ozs7OEJBR3JELDhEQUFDUSxrREFBU0E7b0JBQUNrQyxLQUFLO29CQUFDRixXQUFXeEMsNEVBQWdCOztzQ0FFNUMsOERBQUNTLHNEQUFhQTs0QkFDWm1DLE1BQU07NEJBQ05MLEtBQUk7OzhDQUVMLDhEQUFDeEIsMERBQWFBOzs7OztnQ0FBRTs7Ozs7OztzQ0FFakIsOERBQUNOLHNEQUFhQTs0QkFDWm1DLE1BQU07NEJBQ05MLEtBQUk7OzhDQUVULDhEQUFDdkIsNERBQWVBOzs7OztnQ0FBRTs7Ozs7OztzQ0FFZiw4REFBQ1Asc0RBQWFBOzRCQUNabUMsTUFBTTs0QkFDTkwsS0FBSTs7OENBRU4sOERBQUNyQiw2REFBZ0JBOzs7OztnQ0FBRTs7Ozs7OztzQ0FFbkIsOERBQUNULHNEQUFhQTs0QkFDWm1DLE1BQU07NEJBQ05MLEtBQUk7OzhDQUVULDhEQUFDbkIsa0VBQXFCQTs7Ozs7Z0NBQUU7Ozs7Ozs7c0NBRXJCLDhEQUFDWCxzREFBYUE7NEJBQ1ptQyxNQUFNOzRCQUNOTCxLQUFJOzs4Q0FFVCw4REFBQ3RCLDJEQUFjQTs7Ozs7Z0NBQUU7Ozs7Ozs7c0NBRWQsOERBQUNSLHNEQUFhQTs0QkFDWm1DLE1BQU07NEJBQ05MLEtBQUk7OzhDQUVQLDhEQUFDbEIseURBQVlBOzs7OztnQ0FBRTs7Ozs7OztzQ0FHZCw4REFBQ1osc0RBQWFBOzRCQUNabUMsTUFBTTs0QkFDTkwsS0FBSTs0QkFBU00sU0FBU2I7OzhDQUd6Qiw4REFBQ1QsbURBQUtBO29DQUFDdUIsS0FBS2pCLENBQUFBLGNBQUFBLE1BQU1RLElBQUksY0FBVlIseUJBQUFBLEtBQUFBLElBQUFBLFlBQVlrQixLQUFLO29DQUFFQyxPQUFPO29DQUFJQyxRQUFRO29DQUFJVCxXQUFVO29DQUFrQlUsS0FBSTs7Ozs7O2dDQUFROzs7Ozs7O3NDQUc3Riw4REFBQ3pDLHNEQUFhQTs0QkFDWm1DLE1BQU07NEJBQ05MLEtBQUk7OzhDQUVSLDhEQUFDcEIsMERBQWFBOzs7OztnQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEI7R0F6RU1TOztRQUVTRCxrREFBU0E7OztLQUZsQkM7QUEyRU4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlTWVudS5qcz9hZjkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAse3VzZVJlZHVjZXJ9ZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9yZWR1Y2VycydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvTG9naW4ubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Mb2dpbi5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgQ29sLENhcmQsIENvbnRhaW5lciwgUm93LCBDYXJkSGVhZGVyLCBDYXJkQm9keSwgQ2FyZFRpdGxlLCBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0sIENhcmRTdWJ0aXRsZSwgQnV0dG9uLCBDYXJkVGV4dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgYXZhdGFyIGZyb20gXCIuLi9hc3Nlc3RzL2F2YXRhci5qcGdcIlxyXG5pbXBvcnQgdGVzdDEgZnJvbSBcIi4uL2Fzc2VzdHMvdGVzdDEucG5nXCJcclxuaW1wb3J0IHtBaU91dGxpbmVIb21lLEFpT3V0bGluZVNlYXJjaCxBaU91dGxpbmVIZWFydCxBaU91dGxpbmVDb21wYXNzLEFpT3V0bGluZU1lbnV9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiXHJcbmltcG9ydCB7QmlNZXNzYWdlUm91bmRlZE1pbnVzLH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCJcclxuaW1wb3J0IHtGaVBsdXNTcXVhcmV9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiXHJcbmltcG9ydCB7QnNUaHJlZURvdHN9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgaW5pdGlhbFN0YXRlLCB1c2VyUmVkdWNlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3VzZVJlZHVjZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBTaWRlTWVudSA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsZGlzcGF0Y2hdPXVzZVJlZHVjZXIodXNlclJlZHVjZXIsaW5pdGlhbFN0YXRlKVxyXG4gIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKSAgICBcclxuICBjb25zdCBoYW5kbGVDbGljaz0oKT0+e1xyXG5yb3V0ZXIucHVzaCh7XHJcbiAgcGF0aG5hbWU6XCIvUHJvZmlsZURldGFpbFwiLFxyXG4gIHF1ZXJ5Ont1c2VySWQ6c3RhdGUudXNlci5pZH1cclxufSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDYXJkID5cclxuICA8Q2FyZFRpdGxlICB0YWc9XCJoNVwiIGNsYXNzTmFtZT17YG14LWF1dG8gICR7c3R5bGVzLmxvZ299YH0+PC9DYXJkVGl0bGU+XHJcblxyXG5cclxuICAgIDxMaXN0R3JvdXAgZmx1c2ggY2xhc3NOYW1lPXtzdHlsZXMubGlzdGdyb3VwfSA+XHJcbiAgIFxyXG4gICAgPExpc3RHcm91cEl0ZW0gXHJcbiAgICAgIGFjdGlvblxyXG4gICAgICB0YWc9XCJidXR0b25cIlxyXG4gICAgPlxyXG4gICAgIDxBaU91dGxpbmVIb21lLz4gSG9tZVxyXG4gICAgPC9MaXN0R3JvdXBJdGVtPlxyXG4gICAgPExpc3RHcm91cEl0ZW0gXHJcbiAgICAgIGFjdGlvblxyXG4gICAgICB0YWc9XCJidXR0b25cIlxyXG4gICAgPlxyXG4gPEFpT3V0bGluZVNlYXJjaC8+IFNlYXJjaFxyXG4gICAgPC9MaXN0R3JvdXBJdGVtPlxyXG4gICAgPExpc3RHcm91cEl0ZW0gXHJcbiAgICAgIGFjdGlvblxyXG4gICAgICB0YWc9XCJidXR0b25cIlxyXG4gICAgPlxyXG4gICAgPEFpT3V0bGluZUNvbXBhc3MvPiAgRXhwbG9yZVxyXG4gICAgPC9MaXN0R3JvdXBJdGVtPlxyXG4gICAgPExpc3RHcm91cEl0ZW0gXHJcbiAgICAgIGFjdGlvblxyXG4gICAgICB0YWc9XCJidXR0b25cIlxyXG4gICAgPlxyXG4gPEJpTWVzc2FnZVJvdW5kZWRNaW51cy8+ICAgTWVzc2FnZXNcclxuICAgIDwvTGlzdEdyb3VwSXRlbT5cclxuICAgIDxMaXN0R3JvdXBJdGVtIFxyXG4gICAgICBhY3Rpb25cclxuICAgICAgdGFnPVwiYnV0dG9uXCJcclxuICAgID5cclxuIDxBaU91dGxpbmVIZWFydC8+IE5vdGlmaWNhdGlvbnNcclxuICAgIDwvTGlzdEdyb3VwSXRlbT5cclxuICAgIDxMaXN0R3JvdXBJdGVtIFxyXG4gICAgICBhY3Rpb25cclxuICAgICAgdGFnPVwiYnV0dG9uXCJcclxuICAgID5cclxuICAgPEZpUGx1c1NxdWFyZS8+IENyZWF0ZVxyXG4gICAgPC9MaXN0R3JvdXBJdGVtPlxyXG4gIFxyXG4gICAgPExpc3RHcm91cEl0ZW0gXHJcbiAgICAgIGFjdGlvblxyXG4gICAgICB0YWc9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgID5cclxuICAgICAgXHJcbiAgIDxJbWFnZSBzcmM9e3N0YXRlLnVzZXI/LmltYWdlfSB3aWR0aD17MzB9IGhlaWdodD17MzB9IGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlIFwiIGFsdD1cImRlcmZcIi8+ICBQcm9maWxlXHJcbiAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICBcclxuICAgIDxMaXN0R3JvdXBJdGVtIFxyXG4gICAgICBhY3Rpb25cclxuICAgICAgdGFnPVwiYnV0dG9uXCJcclxuICAgID5cclxuICA8QWlPdXRsaW5lTWVudS8+IE1vcmVcclxuICAgIDwvTGlzdEdyb3VwSXRlbT5cclxuICAgIDwvTGlzdEdyb3VwPlxyXG4gIFxyXG48L0NhcmQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVNZW51Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsImdldFVzZXIiLCJ1c2VTZWxlY3RvciIsInN0eWxlIiwic3R5bGVzIiwiQ29sIiwiQ2FyZCIsIkNvbnRhaW5lciIsIlJvdyIsIkNhcmRIZWFkZXIiLCJDYXJkQm9keSIsIkNhcmRUaXRsZSIsIkxpc3RHcm91cCIsIkxpc3RHcm91cEl0ZW0iLCJDYXJkU3VidGl0bGUiLCJCdXR0b24iLCJDYXJkVGV4dCIsImF2YXRhciIsInRlc3QxIiwiQWlPdXRsaW5lSG9tZSIsIkFpT3V0bGluZVNlYXJjaCIsIkFpT3V0bGluZUhlYXJ0IiwiQWlPdXRsaW5lQ29tcGFzcyIsIkFpT3V0bGluZU1lbnUiLCJCaU1lc3NhZ2VSb3VuZGVkTWludXMiLCJGaVBsdXNTcXVhcmUiLCJCc1RocmVlRG90cyIsIkltYWdlIiwiaW5pdGlhbFN0YXRlIiwidXNlclJlZHVjZXIiLCJMaW5rIiwidXNlUm91dGVyIiwiU2lkZU1lbnUiLCJzdGF0ZSIsImRpc3BhdGNoIiwicm91dGVyIiwiaGFuZGxlQ2xpY2siLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInVzZXJJZCIsInVzZXIiLCJpZCIsInRhZyIsImNsYXNzTmFtZSIsImxvZ28iLCJmbHVzaCIsImxpc3Rncm91cCIsImFjdGlvbiIsIm9uQ2xpY2siLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SideMenu.js\n"));

/***/ })

});