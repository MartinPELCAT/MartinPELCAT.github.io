webpackHotUpdate_N_E("pages/experience/[id]",{

/***/ "./pages/experience/[id].tsx":
/*!***********************************!*\
  !*** ./pages/experience/[id].tsx ***!
  \***********************************/
/*! exports provided: __N_SSG, slugifyExpUrl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slugifyExpUrl\", function() { return slugifyExpUrl; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_martinpelcat_Documents_GitHub_next_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Experiences_ExperienceItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Experiences/ExperienceItem */ \"./components/Experiences/ExperienceItem.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/martinpelcat/Documents/GitHub/next-portfolio/pages/experience/[id].tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_martinpelcat_Documents_GitHub_next_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar __N_SSG = true;\nvar slugifyExpUrl = function slugifyExpUrl(exp) {\n  return slugify__WEBPACK_IMPORTED_MODULE_3___default()(exp.label + \" \" + exp.company, {\n    lower: true\n  });\n};\n\nvar Experience = function Experience(props) {\n  var description = \"\".concat(props.description || props.label + props.company);\n  var BASE_URL = \"http://martinpelcat.github.io\";\n  var url = \"\".concat(BASE_URL, \"/\").concat(slugifyExpUrl(props));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [\"Portfolio | \", props.label]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: url\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:type\",\n        content: \"website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: props.label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:description\",\n        content: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        content: props.companyImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:card\",\n        content: \"summary_large_image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"twitter:domain\",\n        content: BASE_URL\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"twitter:url\",\n        content: url\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:title\",\n        content: props.label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:description\",\n        content: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:image\",\n        content: props.companyImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"md:w-1/2 mx-auto flex px-2 pt-4 pb-8\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex flex-col space-y-4 flex-1\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Experiences_ExperienceItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({}, props), {}, {\n            startDate: new Date(props.startDate),\n            endDate: new Date(props.endDate)\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Experience;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Experience);\n\nvar _c;\n\n$RefreshReg$(_c, \"Experience\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpZW5jZS8udHN4P2MwM2MiXSwibmFtZXMiOlsic2x1Z2lmeUV4cFVybCIsImV4cCIsInNsdWdpZnkiLCJsYWJlbCIsImNvbXBhbnkiLCJsb3dlciIsIkV4cGVyaWVuY2UiLCJwcm9wcyIsImRlc2NyaXB0aW9uIiwiQkFTRV9VUkwiLCJ1cmwiLCJjb21wYW55SW1hZ2UiLCJEYXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQ7QUFBQSxTQUMzQkMsOENBQU8sQ0FBQ0QsR0FBRyxDQUFDRSxLQUFKLEdBQVksR0FBWixHQUFrQkYsR0FBRyxDQUFDRyxPQUF2QixFQUFnQztBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUFoQyxDQURvQjtBQUFBLENBQXRCOztBQW9CUCxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQTJCO0FBQzVDLE1BQU1DLFdBQVcsYUFBTUQsS0FBSyxDQUFDQyxXQUFOLElBQXFCRCxLQUFLLENBQUNKLEtBQU4sR0FBY0ksS0FBSyxDQUFDSCxPQUEvQyxDQUFqQjtBQUNBLE1BQU1LLFFBQVEsR0FBRywrQkFBakI7QUFDQSxNQUFNQyxHQUFHLGFBQU1ELFFBQU4sY0FBa0JULGFBQWEsQ0FBQ08sS0FBRCxDQUEvQixDQUFUO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsbUNBQW9CQSxLQUFLLENBQUNKLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVLO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQU0sZ0JBQVEsRUFBQyxRQUFmO0FBQXdCLGVBQU8sRUFBRUU7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUU7QUFBTSxnQkFBUSxFQUFDLFNBQWY7QUFBeUIsZUFBTztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUVILEtBQUssQ0FBQ0o7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBTUU7QUFBTSxnQkFBUSxFQUFDLGdCQUFmO0FBQWdDLGVBQU8sRUFBRUs7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBT0U7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFFRCxLQUFLLENBQUNJO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVNFO0FBQU0sWUFBSSxFQUFDLGNBQVg7QUFBMEIsZUFBTztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsZUFVRTtBQUFNLGdCQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsZUFBTyxFQUFFRjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFXRTtBQUFNLGdCQUFRLEVBQUMsYUFBZjtBQUE2QixlQUFPLEVBQUVDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRixlQVlFO0FBQU0sWUFBSSxFQUFDLGVBQVg7QUFBMkIsZUFBTyxFQUFFSCxLQUFLLENBQUNKO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRixlQWFFO0FBQU0sWUFBSSxFQUFDLHFCQUFYO0FBQWlDLGVBQU8sRUFBRUs7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGLGVBY0U7QUFBTSxZQUFJLEVBQUMsZUFBWDtBQUEyQixlQUFPLEVBQUVELEtBQUssQ0FBQ0k7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBaUJFLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHNDQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLGdDQUFmO0FBQUEsaUNBQ0UscUVBQUMsOEVBQUQsa0NBQ01KLEtBRE47QUFFRSxxQkFBUyxFQUFFLElBQUlLLElBQUosQ0FBU0wsS0FBSyxDQUFDTSxTQUFmLENBRmI7QUFHRSxtQkFBTyxFQUFFLElBQUlELElBQUosQ0FBU0wsS0FBSyxDQUFDTyxPQUFmO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRjtBQUFBLGtCQURGO0FBK0JELENBcENEOztLQUFNUixVO0FBcUNTQSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2V4cGVyaWVuY2UvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgZXhwZXJpZW5jZXMsIEV4cGVyaWVuY2VUeXBlIH0gZnJvbSBcIi4uLy4uL2RhdGFzL2V4cGVyaWVuY2VzXCI7XG5pbXBvcnQgc2x1Z2lmeSBmcm9tIFwic2x1Z2lmeVwiO1xuaW1wb3J0IEV4cGVyaWVuY2VJdGVtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0V4cGVyaWVuY2VzL0V4cGVyaWVuY2VJdGVtXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5leHBvcnQgY29uc3Qgc2x1Z2lmeUV4cFVybCA9IChleHA6IEV4cGVyaWVuY2VUeXBlKSA9PlxuICBzbHVnaWZ5KGV4cC5sYWJlbCArIFwiIFwiICsgZXhwLmNvbXBhbnksIHsgbG93ZXI6IHRydWUgfSk7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBhdGhzID0gZXhwZXJpZW5jZXMubWFwKChleHApID0+ICh7XG4gICAgcGFyYW1zOiB7XG4gICAgICBpZDogc2x1Z2lmeUV4cFVybChleHApLFxuICAgIH0sXG4gIH0pKTtcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxFeHBlcmllbmNlVHlwZT4gPSBhc3luYyAoe1xuICBwYXJhbXMsXG59KSA9PiB7XG4gIGNvbnN0IGV4cCA9IGV4cGVyaWVuY2VzLmZpbmQoKGV4cCkgPT4gc2x1Z2lmeUV4cFVybChleHApID09PSBwYXJhbXMuaWQpO1xuXG4gIHJldHVybiB7IHByb3BzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4cCkpIH07XG59O1xuXG5jb25zdCBFeHBlcmllbmNlID0gKHByb3BzOiBFeHBlcmllbmNlVHlwZSkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGAke3Byb3BzLmRlc2NyaXB0aW9uIHx8IHByb3BzLmxhYmVsICsgcHJvcHMuY29tcGFueX1gO1xuICBjb25zdCBCQVNFX1VSTCA9IFwiaHR0cDovL21hcnRpbnBlbGNhdC5naXRodWIuaW9cIjtcbiAgY29uc3QgdXJsID0gYCR7QkFTRV9VUkx9LyR7c2x1Z2lmeUV4cFVybChwcm9wcyl9YDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvcnRmb2xpbyB8IHtwcm9wcy5sYWJlbH08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9e2B3ZWJzaXRlYH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3Byb3BzLmxhYmVsfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwcm9wcy5jb21wYW55SW1hZ2V9IC8+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9e2BzdW1tYXJ5X2xhcmdlX2ltYWdlYH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRvbWFpblwiIGNvbnRlbnQ9e0JBU0VfVVJMfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dXJsXCIgY29udGVudD17dXJsfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3Byb3BzLmxhYmVsfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLmNvbXBhbnlJbWFnZX0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgbXgtYXV0byBmbGV4IHB4LTIgcHQtNCBwYi04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNCBmbGV4LTFcIj5cbiAgICAgICAgICAgIDxFeHBlcmllbmNlSXRlbVxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgIHN0YXJ0RGF0ZT17bmV3IERhdGUocHJvcHMuc3RhcnREYXRlKX1cbiAgICAgICAgICAgICAgZW5kRGF0ZT17bmV3IERhdGUocHJvcHMuZW5kRGF0ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/experience/[id].tsx\n");

/***/ })

})