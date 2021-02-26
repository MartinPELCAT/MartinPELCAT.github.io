webpackHotUpdate_N_E(3,{

/***/ "./components/Header/HeaderLogged.tsx":
/*!********************************************!*\
  !*** ./components/Header/HeaderLogged.tsx ***!
  \********************************************/
/*! exports provided: HeaderLogged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderLogged\", function() { return HeaderLogged; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\n/* harmony import */ var _contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/HeaderContext */ \"./contexts/HeaderContext.tsx\");\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/UserContext */ \"./contexts/UserContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _icons_ChevronDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/ChevronDown */ \"./components/icons/ChevronDown.tsx\");\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/LanguageContext */ \"./contexts/LanguageContext.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/martinpelcat/Documents/GitHub/next-portfolio/components/Header/HeaderLogged.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar HeaderLogged = function HeaderLogged() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_5__[\"UserContext\"]),\n      firstName = _useContext.firstName,\n      lastName = _useContext.lastName;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_4__[\"HeaderContext\"]),\n      isOpen = _useContext2.isOpen,\n      setIsOpen = _useContext2.setIsOpen;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  Object(react_use__WEBPACK_IMPORTED_MODULE_3__[\"useClickAway\"])(ref, function () {\n    setIsOpen(false);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex cursor-pointer\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        href: \"/profile\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex rounded-full hover:bg-white hover:bg-opacity-10 py-1 pl-2 pr-4 space-x-3\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"w-10 rounded-full bg-white bg-opacity-40 overflow-hidden\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: \"/icons/icon-512x512.png\",\n                alt: \"Github profile\",\n                height: 40,\n                width: 40\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 27,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"my-auto\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"break-words\",\n                children: [firstName, \" \", lastName]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      ref: ref,\n      className: \"relative\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        name: \"DropDown menu\",\n        onClick: function onClick() {\n          return setIsOpen(function (open) {\n            return !open;\n          });\n        },\n        className: \"h-10 w-10 rounded-full bg-white bg-opacity-20 flex justify-center items-center focus:outline-none focus:ring-1 focus:ring-white\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"sr-only\",\n          children: \"Menu D\\xE9pliant\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_ChevronDown__WEBPACK_IMPORTED_MODULE_7__[\"ChevronDown\"], {\n          height: 19,\n          width: 19\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropDownMenu, {\n        show: isOpen\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(HeaderLogged, \"G+d/KCh64QhzrGmzLrClaKDgx6g=\", false, function () {\n  return [react_use__WEBPACK_IMPORTED_MODULE_3__[\"useClickAway\"]];\n});\n\n_c = HeaderLogged;\n\nvar DropDownMenu = function DropDownMenu(_ref) {\n  _s2();\n\n  var show = _ref.show;\n\n  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_8__[\"LanguageContext\"]),\n      setLocale = _useContext3.setLocale;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([!show && \"hidden\"], \"absolute top-14 right-0 bg-white border border-gray-300 w-60 rounded-lg p-2\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropDownItem, {\n      link: \"/admin\",\n      label: \"Administration\",\n      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropDownItem, {\n      label: \"Param\\xE8tres\",\n      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropDownItem, {\n      label: \"Language\",\n      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false),\n      onClick: function onClick() {\n        return setLocale(function (prev) {\n          return prev === \"fr\" ? \"en\" : \"fr\";\n        });\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropDownItem, {\n      label: \"Deconnexion\",\n      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(DropDownMenu, \"4EbVwiwnWImDkQ+13MtaVsuaXZ4=\");\n\n_c2 = DropDownMenu;\n\nvar DropDownItem = function DropDownItem(_ref2) {\n  _s3();\n\n  var label = _ref2.label,\n      icon = _ref2.icon,\n      _onClick = _ref2.onClick,\n      link = _ref2.link;\n\n  var _useContext4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_4__[\"HeaderContext\"]),\n      setIsOpen = _useContext4.setIsOpen;\n\n  var DefaultItem = function DefaultItem() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      role: \"button\",\n      className: \"py-1 align-middle px-2 flex space-x-2 hover:bg-light-gray rounded\",\n      onClick: function onClick(event) {\n        _onClick && _onClick(event);\n        setIsOpen(false);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mr-1\",\n        children: icon\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex-1\",\n        children: label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var LinkItem = function LinkItem() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      href: link,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DefaultItem, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 5\n    }, _this);\n  };\n\n  return link ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LinkItem, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 113,\n    columnNumber: 17\n  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DefaultItem, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 113,\n    columnNumber: 32\n  }, _this);\n};\n\n_s3(DropDownItem, \"6Dmh3/LKChmnB2l9w2HpMrLEexk=\");\n\n_c3 = DropDownItem;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"HeaderLogged\");\n$RefreshReg$(_c2, \"DropDownMenu\");\n$RefreshReg$(_c3, \"DropDownItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTG9nZ2VkLnRzeD8xNjAxIl0sIm5hbWVzIjpbIkhlYWRlckxvZ2dlZCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiSGVhZGVyQ29udGV4dCIsImlzT3BlbiIsInNldElzT3BlbiIsInJlZiIsInVzZVJlZiIsInVzZUNsaWNrQXdheSIsIm9wZW4iLCJEcm9wRG93bk1lbnUiLCJzaG93IiwiTGFuZ3VhZ2VDb250ZXh0Iiwic2V0TG9jYWxlIiwiY2xzeCIsInByZXYiLCJEcm9wRG93bkl0ZW0iLCJsYWJlbCIsImljb24iLCJvbkNsaWNrIiwibGluayIsIkRlZmF1bHRJdGVtIiwiZXZlbnQiLCJMaW5rSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLG9CQUNBQyx3REFBVSxDQUFDQyxpRUFBRCxDQURWO0FBQUEsTUFDeEJDLFNBRHdCLGVBQ3hCQSxTQUR3QjtBQUFBLE1BQ2JDLFFBRGEsZUFDYkEsUUFEYTs7QUFBQSxxQkFFRkgsd0RBQVUsQ0FBQ0kscUVBQUQsQ0FGUjtBQUFBLE1BRXhCQyxNQUZ3QixnQkFFeEJBLE1BRndCO0FBQUEsTUFFaEJDLFNBRmdCLGdCQUVoQkEsU0FGZ0I7O0FBSWhDLE1BQU1DLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBRUFDLGdFQUFZLENBQUNGLEdBQUQsRUFBTSxZQUFNO0FBQ3RCRCxhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0QsR0FGVyxDQUFaO0FBSUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBLDZCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFB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QUE3QjtBQUNELENBekJEOztJQUFNSixZOztNQUFBQSxZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTG9nZ2VkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNsaWNrQXdheSB9IGZyb20gXCJyZWFjdC11c2VcIjtcbmltcG9ydCB7IEhlYWRlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvSGVhZGVyQ29udGV4dFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvVXNlckNvbnRleHRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IENoZXZyb25Eb3duIH0gZnJvbSBcIi4uL2ljb25zL0NoZXZyb25Eb3duXCI7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvTGFuZ3VhZ2VDb250ZXh0XCI7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJMb2dnZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHsgaXNPcGVuLCBzZXRJc09wZW4gfSA9IHVzZUNvbnRleHQoSGVhZGVyQ29udGV4dCk7XG5cbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUNsaWNrQXdheShyZWYsICgpID0+IHtcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcm91bmRlZC1mdWxsIGhvdmVyOmJnLXdoaXRlIGhvdmVyOmJnLW9wYWNpdHktMTAgcHktMSBwbC0yIHByLTQgc3BhY2UteC0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCByb3VuZGVkLWZ1bGwgYmctd2hpdGUgYmctb3BhY2l0eS00MCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaWNvbnMvaWNvbi01MTJ4NTEyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJHaXRodWIgcHJvZmlsZVwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmVhay13b3Jkc1wiPlxuICAgICAgICAgICAgICAgICAge2ZpcnN0TmFtZX0ge2xhc3ROYW1lfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG5hbWU9XCJEcm9wRG93biBtZW51XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oKG9wZW4pID0+ICFvcGVuKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsIGJnLXdoaXRlIGJnLW9wYWNpdHktMjAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXdoaXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5NZW51IETDqXBsaWFudDwvc3Bhbj5cbiAgICAgICAgICA8Q2hldnJvbkRvd24gaGVpZ2h0PXsxOX0gd2lkdGg9ezE5fSAvPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8RHJvcERvd25NZW51IHNob3c9e2lzT3Blbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxudHlwZSBEcm9wZG93bk1lbnVQcm9wcyA9IHsgc2hvdzogYm9vbGVhbiB9O1xuXG5jb25zdCBEcm9wRG93bk1lbnUgPSAoeyBzaG93IH06IERyb3Bkb3duTWVudVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2V0TG9jYWxlIH0gPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICBbIXNob3cgJiYgXCJoaWRkZW5cIl0sXG4gICAgICAgIFwiYWJzb2x1dGUgdG9wLTE0IHJpZ2h0LTAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB3LTYwIHJvdW5kZWQtbGcgcC0yXCJcbiAgICAgICl9XG4gICAgPlxuICAgICAgPERyb3BEb3duSXRlbSBsaW5rPVwiL2FkbWluXCIgbGFiZWw9XCJBZG1pbmlzdHJhdGlvblwiIGljb249ezw+PC8+fSAvPlxuICAgICAgPERyb3BEb3duSXRlbSBsYWJlbD1cIlBhcmFtw6h0cmVzXCIgaWNvbj17PD48Lz59IC8+XG4gICAgICA8RHJvcERvd25JdGVtXG4gICAgICAgIGxhYmVsPVwiTGFuZ3VhZ2VcIlxuICAgICAgICBpY29uPXs8PjwvPn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TG9jYWxlKChwcmV2KSA9PiAocHJldiA9PT0gXCJmclwiID8gXCJlblwiIDogXCJmclwiKSl9XG4gICAgICAvPlxuICAgICAgPERyb3BEb3duSXRlbSBsYWJlbD1cIkRlY29ubmV4aW9uXCIgaWNvbj17PD48Lz59IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIERyb3BEb3duSXRlbVByb3BzID0ge1xuICBpY29uOiBSZWFjdE5vZGU7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGxpbms/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkO1xufTtcblxuY29uc3QgRHJvcERvd25JdGVtID0gKHsgbGFiZWwsIGljb24sIG9uQ2xpY2ssIGxpbmsgfTogRHJvcERvd25JdGVtUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzZXRJc09wZW4gfSA9IHVzZUNvbnRleHQoSGVhZGVyQ29udGV4dCk7XG4gIGNvbnN0IERlZmF1bHRJdGVtID0gKCkgPT4gKFxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPVwicHktMSBhbGlnbi1taWRkbGUgcHgtMiBmbGV4IHNwYWNlLXgtMiBob3ZlcjpiZy1saWdodC1ncmF5IHJvdW5kZWRcIlxuICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgIG9uQ2xpY2sgJiYgb25DbGljayhldmVudCk7XG4gICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMVwiPntpY29ufTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj57bGFiZWx9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgY29uc3QgTGlua0l0ZW0gPSAoKSA9PiAoXG4gICAgPExpbmsgaHJlZj17bGluayF9PlxuICAgICAgPGE+XG4gICAgICAgIDxEZWZhdWx0SXRlbSAvPlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKTtcblxuICByZXR1cm4gbGluayA/IDxMaW5rSXRlbSAvPiA6IDxEZWZhdWx0SXRlbSAvPjtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/HeaderLogged.tsx\n");

/***/ })

})