webpackHotUpdate_N_E("pages/skills",{

/***/ "./pages/skills.tsx":
/*!**************************!*\
  !*** ./pages/skills.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/martinpelcat/Documents/GitHub/next-portfolio/pages/skills.tsx\",\n    _this = undefined;\n\n\nvar Layout = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Layout */ \"./components/Layout.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/Layout */ \"./components/Layout.tsx\")];\n    },\n    modules: [\"../components/Layout\"]\n  }\n});\n_c2 = Layout;\n\nvar Skills = function Skills() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Layout, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"max-w-2xl mx-auto grid grid-cols-3 gap-3\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SkillItem, {\n        image: \"/graphql.png\",\n        text: \"Text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = Skills;\n\nvar SkillItem = function SkillItem(_ref) {\n  var image = _ref.image,\n      text = _ref.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"/assets\".concat(image),\n      alt: \"\",\n      className: \"w-full aspect-w-16 apsect-h-9\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_c4 = SkillItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Layout$dynamic\");\n$RefreshReg$(_c2, \"Layout\");\n$RefreshReg$(_c3, \"Skills\");\n$RefreshReg$(_c4, \"SkillItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2tpbGxzLnRzeD9mMTIzIl0sIm5hbWVzIjpbIkxheW91dCIsImR5bmFtaWMiLCJTa2lsbHMiLCJTa2lsbEl0ZW0iLCJpbWFnZSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sb0lBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLHFEQUFkO0FBQUE7QUFBQSxjQUFjLHNCQUFkO0FBQUE7QUFBQSxFQUF0QjtNQUFNRCxNOztBQUVOLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsc0JBQ0UscUVBQUMsTUFBRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLDBDQUFmO0FBQUEsNkJBQ0UscUVBQUMsU0FBRDtBQUFXLGFBQUssRUFBQyxjQUFqQjtBQUFnQyxZQUFJLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQVJEOztNQUFNQSxNOztBQWNOLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTRCO0FBQUEsTUFBekJDLEtBQXlCLFFBQXpCQSxLQUF5QjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFDNUMsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLFNBQUcsbUJBQVlELEtBQVosQ0FBUjtBQUE2QixTQUFHLEVBQUMsRUFBakM7QUFBb0MsZUFBUyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsZ0JBQU1DO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FQRDs7TUFBTUYsUztBQVNTRCxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NraWxscy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IExheW91dCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIikpO1xuXG5jb25zdCBTa2lsbHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsIG14LWF1dG8gZ3JpZCBncmlkLWNvbHMtMyBnYXAtM1wiPlxuICAgICAgICA8U2tpbGxJdGVtIGltYWdlPVwiL2dyYXBocWwucG5nXCIgdGV4dD1cIlRleHRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG59XG5jb25zdCBTa2lsbEl0ZW0gPSAoeyBpbWFnZSwgdGV4dCB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW1nIHNyYz17YC9hc3NldHMke2ltYWdlfWB9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInctZnVsbCBhc3BlY3Qtdy0xNiBhcHNlY3QtaC05XCIgLz5cbiAgICAgIDxkaXY+e3RleHR9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/skills.tsx\n");

/***/ })

})