"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Home",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _features_useReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/useReducer */ \"./features/useReducer.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _FeedCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeedCard */ \"./components/FeedCard.js\");\n/* harmony import */ var _SearchCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchCard */ \"./components/SearchCard.js\");\n/* harmony import */ var _hooks_useFetchImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useFetchImages */ \"./hooks/useFetchImages.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/dist/index.mjs\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ \"./node_modules/react-loading-skeleton/dist/skeleton.css\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PostCard = ()=>{\n    var _query_data, _query_data1;\n    _s();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.userInfo);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    console.log(router);\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_features_useReducer__WEBPACK_IMPORTED_MODULE_3__.userReducer, _features_useReducer__WEBPACK_IMPORTED_MODULE_3__.initialState);\n    const [searchItem, setsearchItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    console.log(state.searchImage, \"postcard\");\n    console.log(searchItem, \"ser\");\n    let query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        searchItem\n    ]);\n    query = (0,_hooks_useFetchImages__WEBPACK_IMPORTED_MODULE_7__.UseFetchImages)(searchItem);\n    console.log(query === null || query === void 0 ? void 0 : (_query_data = query.data) === null || _query_data === void 0 ? void 0 : _query_data.hits);\n    const wrapper = (param)=>{\n        let { children  } = param;\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"rounded-circle h-25\",\n            style: {\n                border: \"1px solid #ccc\",\n                display: \"block\",\n                lineHeight: 2,\n                padding: \"1rem\",\n                marginBottom: \"0.5rem\",\n                width: 100\n            },\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\PostCard.js\",\n            lineNumber: 49,\n            columnNumber: 1\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                setSearch: setsearchItem\n            }, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\PostCard.js\",\n                lineNumber: 65,\n                columnNumber: 8\n            }, undefined),\n            (query === null || query === void 0 ? void 0 : query.isLoading) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                height: 30,\n                                width: \"10%\",\n                                inline: true,\n                                borderRadius: 999\n                            }, void 0, false, {\n                                fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\PostCard.js\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                height: 30,\n                                width: \"75%\",\n                                inline: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\PostCard.js\",\n                                lineNumber: 69,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\PostCard.js\",\n                        lineNumber: 66,\n                        columnNumber: 30\n                    }, undefined)\n                ]\n            }, void 0, true) : query === null || query === void 0 ? void 0 : (_query_data1 = query.data) === null || _query_data1 === void 0 ? void 0 : _query_data1.hits.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FeedCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    ...image\n                }, image.id, false, {\n                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\PostCard.js\",\n                    lineNumber: 73,\n                    columnNumber: 7\n                }, undefined))\n        ]\n    }, void 0, true);\n};\n_s(PostCard, \"j5MpnP5S1SG/fT/jFmCk+vxeU2U=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwRDtBQUVoQjtBQUV5QjtBQU8zQjtBQUVOO0FBRUk7QUFDbUI7QUFDWDtBQUVHO0FBTWpELE1BQU1ZLFdBQVcsSUFBTTtRQW9CVkMsYUEwQlRBOztJQXhDSixNQUFNQyxPQUFLVix3REFBV0EsQ0FBQ1csQ0FBQUEsUUFBT0EsTUFBTUMsUUFBUTtJQUM1QyxNQUFNQyxTQUFPVixzREFBU0E7SUFDdEJXLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLENBQUNGLE9BQU1LLFNBQVMsR0FBQ2pCLGlEQUFVQSxDQUFDRyw2REFBV0EsRUFBQ0QsOERBQVlBO0lBQzFELE1BQU0sQ0FBQ2dCLFlBQVlDLGNBQWMsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQzdDZ0IsUUFBUUMsR0FBRyxDQUFDSixNQUFNUSxXQUFXLEVBQUU7SUFDL0JMLFFBQVFDLEdBQUcsQ0FBQ0UsWUFBVztJQUN2QixJQUFJUjtJQUNKWixnREFBU0EsQ0FBQyxJQUFNLENBRWhCLEdBQUc7UUFBQ29CO0tBQVc7SUFFZlIsUUFBTUgscUVBQWNBLENBQUNXO0lBRXJCSCxRQUFRQyxHQUFHLENBQUVOLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsY0FBQUEsTUFBT1csSUFBSSxjQUFYWCx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYVksSUFBRjtJQUV4QixNQUFNQyxVQUFRLFNBQWM7WUFBYixFQUFDQyxTQUFRLEVBQUM7c0JBQ3pCLDhEQUFDQztZQUFJQyxXQUFVO1lBQXNCQyxPQUFPO2dCQUM1QkMsUUFBUTtnQkFDUkMsU0FBUztnQkFDVEMsWUFBWTtnQkFDWkMsU0FBUztnQkFDVEMsY0FBYztnQkFDZEMsT0FBTztZQUNYO3NCQUNUVDs7Ozs7O0lBRUg7SUFHRSxxQkFDRTs7MEJBRUcsOERBQUNsQixtREFBVUE7Z0JBQUM0QixXQUFXZjs7Ozs7O1lBQ3RCVCxDQUFBQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU95QixTQUFTLGtCQUFFOztvQkFBRTtrQ0FBQyw4REFBQ1Y7d0JBQUlDLFdBQVU7OzBDQUVwQyw4REFBQ2xCLDhEQUFRQTtnQ0FBRTRCLFFBQVE7Z0NBQUlILE9BQU07Z0NBQU1JLFFBQVEsSUFBSTtnQ0FBRUMsY0FBYzs7Ozs7OzBDQUMvRCw4REFBQzlCLDhEQUFRQTtnQ0FBRTRCLFFBQVE7Z0NBQUlILE9BQU07Z0NBQU1JLFFBQVEsSUFBSTs7Ozs7Ozs7Ozs7OzsrQkFHbkQzQixrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGVBQUFBLE1BQU9XLElBQUksY0FBWFgsMEJBQUFBLEtBQUFBLElBQUFBLGFBQWFZLEtBQUtpQixHQUFHLENBQUNDLENBQUFBLHNCQUNwQiw4REFBQ25DLGlEQUFRQTtvQkFBZ0IsR0FBR21DLEtBQUs7bUJBQWxCQSxNQUFNQyxFQUFFOzs7OzhCQUN2Qjs7O0FBTU47R0F0RE1oQzs7UUFNS1Isb0RBQVdBO1FBQ1RHLGtEQUFTQTs7O0tBUGhCSztBQXdETiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzP2ExOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICx7dXNlRWZmZWN0LHVzZVN0YXRlLCB1c2VSZWR1Y2VyfWZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSwgdXNlclJlZHVjZXIgfSBmcm9tICcuLi9mZWF0dXJlcy91c2VSZWR1Y2VyJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgRmVlZENhcmQgZnJvbSAnLi9GZWVkQ2FyZCc7XHJcblxyXG5pbXBvcnQgU2VhcmNoQ2FyZCBmcm9tICcuL1NlYXJjaENhcmQnO1xyXG5pbXBvcnQgeyBVc2VGZXRjaEltYWdlcyB9IGZyb20gJy4uL2hvb2tzL3VzZUZldGNoSW1hZ2VzJztcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xyXG5cclxuaW1wb3J0ICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uL2Rpc3Qvc2tlbGV0b24uY3NzJ1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKCkgPT4ge1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHVzZXI9dXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnVzZXJJbmZvKVxyXG5jb25zdCByb3V0ZXI9dXNlUm91dGVyKClcclxuY29uc29sZS5sb2cocm91dGVyKVxyXG5jb25zdCBbc3RhdGUsZGlzcGF0Y2hdPXVzZVJlZHVjZXIodXNlclJlZHVjZXIsaW5pdGlhbFN0YXRlKVxyXG5jb25zdCBbc2VhcmNoSXRlbSwgc2V0c2VhcmNoSXRlbV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5jb25zb2xlLmxvZyhzdGF0ZS5zZWFyY2hJbWFnZSAsXCJwb3N0Y2FyZFwiKVxyXG5jb25zb2xlLmxvZyhzZWFyY2hJdGVtLFwic2VyXCIpXHJcbmxldCBxdWVyeVxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIFxyXG59LCBbc2VhcmNoSXRlbV0pXHJcblxyXG5xdWVyeT1Vc2VGZXRjaEltYWdlcyhzZWFyY2hJdGVtKVxyXG5cclxuY29uc29sZS5sb2coIHF1ZXJ5Py5kYXRhPy5oaXRzKVxyXG5cclxuY29uc3Qgd3JhcHBlcj0oe2NoaWxkcmVufSk9PntcclxuPGRpdiBjbGFzc05hbWU9J3JvdW5kZWQtY2lyY2xlIGgtMjUnIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzAuNXJlbScsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICB9fT5cclxuICB7Y2hpbGRyZW59XHJcbjwvZGl2PlxyXG59XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgXHJcbiAgICAgICA8U2VhcmNoQ2FyZCBzZXRTZWFyY2g9e3NldHNlYXJjaEl0ZW19Lz5cclxuICAgICAgIHtxdWVyeT8uaXNMb2FkaW5nPyA8PiA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuXHJcbiAgICAgICAgPFNrZWxldG9uICBoZWlnaHQ9ezMwfSB3aWR0aD1cIjEwJVwiIGlubGluZT17dHJ1ZX0gYm9yZGVyUmFkaXVzPXs5OTl9Lz5cclxuICAgICAgICA8U2tlbGV0b24gIGhlaWdodD17MzB9IHdpZHRoPVwiNzUlXCIgaW5saW5lPXt0cnVlfS8+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvPjpcclxuICAgIHF1ZXJ5Py5kYXRhPy5oaXRzLm1hcChpbWFnZT0+KFxyXG4gICAgICA8RmVlZENhcmQga2V5PXtpbWFnZS5pZH17Li4uaW1hZ2V9IC8+XHJcbiAgICApKX1cclxuICAgICAgXHJcblxyXG4gICAgXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWR1Y2VyIiwidXNlU2VsZWN0b3IiLCJpbml0aWFsU3RhdGUiLCJ1c2VyUmVkdWNlciIsInVzZVJvdXRlciIsIkZlZWRDYXJkIiwiU2VhcmNoQ2FyZCIsIlVzZUZldGNoSW1hZ2VzIiwiU2tlbGV0b24iLCJQb3N0Q2FyZCIsInF1ZXJ5IiwidXNlciIsInN0YXRlIiwidXNlckluZm8iLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJzZWFyY2hJdGVtIiwic2V0c2VhcmNoSXRlbSIsInNlYXJjaEltYWdlIiwiZGF0YSIsImhpdHMiLCJ3cmFwcGVyIiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlciIsImRpc3BsYXkiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwic2V0U2VhcmNoIiwiaXNMb2FkaW5nIiwiaGVpZ2h0IiwiaW5saW5lIiwiYm9yZGVyUmFkaXVzIiwibWFwIiwiaW1hZ2UiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostCard.js\n"));

/***/ })

});