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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _features_useReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/useReducer */ \"./features/useReducer.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _FeedCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeedCard */ \"./components/FeedCard.js\");\n/* harmony import */ var _SearchCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchCard */ \"./components/SearchCard.js\");\n/* harmony import */ var _hooks_useFetchImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useFetchImages */ \"./hooks/useFetchImages.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/dist/index.mjs\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ \"./node_modules/react-loading-skeleton/dist/skeleton.css\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PostCard = ()=>{\n    var _query_data, _query_data1;\n    _s();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.userInfo);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    console.log(router);\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_features_useReducer__WEBPACK_IMPORTED_MODULE_3__.userReducer, _features_useReducer__WEBPACK_IMPORTED_MODULE_3__.initialState);\n    const [searchItem, setsearchItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    console.log(state.searchImage, \"postcard\");\n    console.log(searchItem, \"ser\");\n    let query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        searchItem\n    ]);\n    query = (0,_hooks_useFetchImages__WEBPACK_IMPORTED_MODULE_7__.UseFetchImages)(searchItem);\n    console.log(query === null || query === void 0 ? void 0 : (_query_data = query.data) === null || _query_data === void 0 ? void 0 : _query_data.hits);\n    const wrapper = (param)=>{\n        let { children  } = param;\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"rounded-circle h-25\",\n            style: {\n                border: \"1px solid #ccc\",\n                display: \"block\",\n                lineHeight: 2,\n                padding: \"1rem\",\n                marginBottom: \"0.5rem\",\n                width: 100\n            },\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\PostCard.js\",\n            lineNumber: 49,\n            columnNumber: 1\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                setSearch: setsearchItem\n            }, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\PostCard.js\",\n                lineNumber: 65,\n                columnNumber: 8\n            }, undefined),\n            (query === null || query === void 0 ? void 0 : query.isLoading) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        height: 30\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\PostCard.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        height: 100\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\PostCard.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true) : query === null || query === void 0 ? void 0 : (_query_data1 = query.data) === null || _query_data1 === void 0 ? void 0 : _query_data1.hits.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FeedCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    ...image\n                }, image.id, false, {\n                    fileName: \"C:\\\\workspace\\\\insta-assignment\\\\components\\\\PostCard.js\",\n                    lineNumber: 71,\n                    columnNumber: 7\n                }, undefined))\n        ]\n    }, void 0, true);\n};\n_s(PostCard, \"j5MpnP5S1SG/fT/jFmCk+vxeU2U=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwRDtBQUVoQjtBQUV5QjtBQU8zQjtBQUVOO0FBRUk7QUFDbUI7QUFDWDtBQUVHO0FBTWpELE1BQU1ZLFdBQVcsSUFBTTtRQW9CVkMsYUF3QlRBOztJQXRDSixNQUFNQyxPQUFLVix3REFBV0EsQ0FBQ1csQ0FBQUEsUUFBT0EsTUFBTUMsUUFBUTtJQUM1QyxNQUFNQyxTQUFPVixzREFBU0E7SUFDdEJXLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLENBQUNGLE9BQU1LLFNBQVMsR0FBQ2pCLGlEQUFVQSxDQUFDRyw2REFBV0EsRUFBQ0QsOERBQVlBO0lBQzFELE1BQU0sQ0FBQ2dCLFlBQVlDLGNBQWMsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQzdDZ0IsUUFBUUMsR0FBRyxDQUFDSixNQUFNUSxXQUFXLEVBQUU7SUFDL0JMLFFBQVFDLEdBQUcsQ0FBQ0UsWUFBVztJQUN2QixJQUFJUjtJQUNKWixnREFBU0EsQ0FBQyxJQUFNLENBRWhCLEdBQUc7UUFBQ29CO0tBQVc7SUFFZlIsUUFBTUgscUVBQWNBLENBQUNXO0lBRXJCSCxRQUFRQyxHQUFHLENBQUVOLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsY0FBQUEsTUFBT1csSUFBSSxjQUFYWCx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYVksSUFBRjtJQUV4QixNQUFNQyxVQUFRLFNBQWM7WUFBYixFQUFDQyxTQUFRLEVBQUM7c0JBQ3pCLDhEQUFDQztZQUFJQyxXQUFVO1lBQXNCQyxPQUFPO2dCQUM1QkMsUUFBUTtnQkFDUkMsU0FBUztnQkFDVEMsWUFBWTtnQkFDWkMsU0FBUztnQkFDVEMsY0FBYztnQkFDZEMsT0FBTztZQUNYO3NCQUNUVDs7Ozs7O0lBRUg7SUFHRSxxQkFDRTs7MEJBRUcsOERBQUNsQixtREFBVUE7Z0JBQUM0QixXQUFXZjs7Ozs7O1lBQ3RCVCxDQUFBQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU95QixTQUFTLGtCQUFFOztrQ0FDbEIsOERBQUMzQiw4REFBUUE7d0JBQUU0QixRQUFROzs7Ozs7a0NBQ25CLDhEQUFDNUIsOERBQVFBO3dCQUFFNEIsUUFBUTs7Ozs7OzsrQkFFdkIxQixrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGVBQUFBLE1BQU9XLElBQUksY0FBWFgsMEJBQUFBLEtBQUFBLElBQUFBLGFBQWFZLEtBQUtlLEdBQUcsQ0FBQ0MsQ0FBQUEsc0JBQ3BCLDhEQUFDakMsaURBQVFBO29CQUFnQixHQUFHaUMsS0FBSzttQkFBbEJBLE1BQU1DLEVBQUU7Ozs7OEJBQ3ZCOzs7QUFNTjtHQXBETTlCOztRQU1LUixvREFBV0E7UUFDVEcsa0RBQVNBOzs7S0FQaEJLO0FBc0ROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdENhcmQuanM/YTE4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLHt1c2VFZmZlY3QsdXNlU3RhdGUsIHVzZVJlZHVjZXJ9ZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgaW5pdGlhbFN0YXRlLCB1c2VyUmVkdWNlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3VzZVJlZHVjZXInO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBGZWVkQ2FyZCBmcm9tICcuL0ZlZWRDYXJkJztcclxuXHJcbmltcG9ydCBTZWFyY2hDYXJkIGZyb20gJy4vU2VhcmNoQ2FyZCc7XHJcbmltcG9ydCB7IFVzZUZldGNoSW1hZ2VzIH0gZnJvbSAnLi4vaG9va3MvdXNlRmV0Y2hJbWFnZXMnO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XHJcblxyXG5pbXBvcnQgJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24vZGlzdC9za2VsZXRvbi5jc3MnXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoKSA9PiB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgdXNlcj11c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUudXNlckluZm8pXHJcbmNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKVxyXG5jb25zb2xlLmxvZyhyb3V0ZXIpXHJcbmNvbnN0IFtzdGF0ZSxkaXNwYXRjaF09dXNlUmVkdWNlcih1c2VyUmVkdWNlcixpbml0aWFsU3RhdGUpXHJcbmNvbnN0IFtzZWFyY2hJdGVtLCBzZXRzZWFyY2hJdGVtXSA9IHVzZVN0YXRlKFwiXCIpXHJcbmNvbnNvbGUubG9nKHN0YXRlLnNlYXJjaEltYWdlICxcInBvc3RjYXJkXCIpXHJcbmNvbnNvbGUubG9nKHNlYXJjaEl0ZW0sXCJzZXJcIilcclxubGV0IHF1ZXJ5XHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgXHJcbn0sIFtzZWFyY2hJdGVtXSlcclxuXHJcbnF1ZXJ5PVVzZUZldGNoSW1hZ2VzKHNlYXJjaEl0ZW0pXHJcblxyXG5jb25zb2xlLmxvZyggcXVlcnk/LmRhdGE/LmhpdHMpXHJcblxyXG5jb25zdCB3cmFwcGVyPSh7Y2hpbGRyZW59KT0+e1xyXG48ZGl2IGNsYXNzTmFtZT0ncm91bmRlZC1jaXJjbGUgaC0yNScgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAyLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMC41cmVtJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgIH19PlxyXG4gIHtjaGlsZHJlbn1cclxuPC9kaXY+XHJcbn1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICBcclxuICAgICAgIDxTZWFyY2hDYXJkIHNldFNlYXJjaD17c2V0c2VhcmNoSXRlbX0vPlxyXG4gICAgICAge3F1ZXJ5Py5pc0xvYWRpbmc/IDw+IFxyXG4gICAgICAgIDxTa2VsZXRvbiAgaGVpZ2h0PXszMH0gLz5cclxuICAgICAgICA8U2tlbGV0b24gIGhlaWdodD17MTAwfS8+XHJcbiAgICAgICA8Lz46XHJcbiAgICBxdWVyeT8uZGF0YT8uaGl0cy5tYXAoaW1hZ2U9PihcclxuICAgICAgPEZlZWRDYXJkIGtleT17aW1hZ2UuaWR9ey4uLmltYWdlfSAvPlxyXG4gICAgKSl9XHJcbiAgICAgIFxyXG5cclxuICAgIFxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVkdWNlciIsInVzZVNlbGVjdG9yIiwiaW5pdGlhbFN0YXRlIiwidXNlclJlZHVjZXIiLCJ1c2VSb3V0ZXIiLCJGZWVkQ2FyZCIsIlNlYXJjaENhcmQiLCJVc2VGZXRjaEltYWdlcyIsIlNrZWxldG9uIiwiUG9zdENhcmQiLCJxdWVyeSIsInVzZXIiLCJzdGF0ZSIsInVzZXJJbmZvIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwic2VhcmNoSXRlbSIsInNldHNlYXJjaEl0ZW0iLCJzZWFyY2hJbWFnZSIsImRhdGEiLCJoaXRzIiwid3JhcHBlciIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXIiLCJkaXNwbGF5IiwibGluZUhlaWdodCIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsInNldFNlYXJjaCIsImlzTG9hZGluZyIsImhlaWdodCIsIm1hcCIsImltYWdlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostCard.js\n"));

/***/ })

});