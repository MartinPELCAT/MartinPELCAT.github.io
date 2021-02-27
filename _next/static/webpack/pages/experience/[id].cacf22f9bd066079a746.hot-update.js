webpackHotUpdate_N_E("pages/experience/[id]",{

/***/ "./components/Header/HeaderLogged.tsx":
/*!********************************************!*\
  !*** ./components/Header/HeaderLogged.tsx ***!
  \********************************************/
/*! exports provided: HeaderLogged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderLogged\", function() { return HeaderLogged; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\n/* harmony import */ var _contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/HeaderContext */ \"./contexts/HeaderContext.tsx\");\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/UserContext */ \"./contexts/UserContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _icons_ChevronDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/ChevronDown */ \"./components/icons/ChevronDown.tsx\");\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/LanguageContext */ \"./contexts/LanguageContext.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/martinpelcat/Documents/GitHub/next-portfolio/components/Header/HeaderLogged.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar HeaderLogged = function HeaderLogged() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_5__[\"UserContext\"]),\n      firstName = _useContext.firstName,\n      lastName = _useContext.lastName;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_4__[\"HeaderContext\"]),\n      isOpen = _useContext2.isOpen,\n      setIsOpen = _useContext2.setIsOpen;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  Object(react_use__WEBPACK_IMPORTED_MODULE_3__[\"useClickAway\"])(ref, function () {\n    setIsOpen(false);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex cursor-pointer\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        href: \"/profile\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex rounded-full hover:bg-white hover:bg-opacity-10 py-1 pl-2 pr-4 space-x-1\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"w-10 h-10 rounded-full bg-white bg-opacity-40 overflow-hidden\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: \"/icons/icon-512x512.png\",\n                alt: \"Github profile\",\n                height: 40,\n                width: 40\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 27,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"my-auto\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  children: firstName\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 36,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  className: \"hidden 2xl:block\",\n                  children: lastName\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 37,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      ref: ref,\n      className: \"relative\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        name: \"DropDown menu\",\n        onClick: function onClick() {\n          return setIsOpen(function (open) {\n            return !open;\n          });\n        },\n        className: \"h-10 w-10 rounded-full bg-white bg-opacity-20 flex justify-center items-center focus:outline-none focus:ring-1 focus:ring-white\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"sr-only\",\n          children: \"Menu D\\xE9pliant\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_ChevronDown__WEBPACK_IMPORTED_MODULE_7__[\"ChevronDown\"], {\n          height: 19,\n          width: 19\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropDownMenu, {\n        show: isOpen\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(HeaderLogged, \"G+d/KCh64QhzrGmzLrClaKDgx6g=\", false, function () {\n  return [react_use__WEBPACK_IMPORTED_MODULE_3__[\"useClickAway\"]];\n});\n\n_c = HeaderLogged;\n\nvar DropDownMenu = function DropDownMenu(_ref) {\n  _s2();\n\n  var show = _ref.show;\n\n  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_8__[\"LanguageContext\"]),\n      setLocale = _useContext3.setLocale;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([!show && \"hidden\"], \"absolute top-14 right-0 bg-white border border-gray-300 w-60 rounded-lg p-2\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropDownItem, {\n      link: \"/admin\",\n      label: \"Administration\",\n      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropDownItem, {\n      label: \"Param\\xE8tres\",\n      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropDownItem, {\n      label: \"Language\",\n      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false),\n      onClick: function onClick() {\n        return setLocale(function (prev) {\n          return prev === \"fr\" ? \"en\" : \"fr\";\n        });\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropDownItem, {\n      label: \"Deconnexion\",\n      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(DropDownMenu, \"4EbVwiwnWImDkQ+13MtaVsuaXZ4=\");\n\n_c2 = DropDownMenu;\n\nvar DropDownItem = function DropDownItem(_ref2) {\n  _s3();\n\n  var label = _ref2.label,\n      icon = _ref2.icon,\n      _onClick = _ref2.onClick,\n      link = _ref2.link;\n\n  var _useContext4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_4__[\"HeaderContext\"]),\n      setIsOpen = _useContext4.setIsOpen;\n\n  var DefaultItem = function DefaultItem() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      role: \"button\",\n      className: \"py-1 align-middle px-2 flex space-x-2 hover:bg-light-gray rounded\",\n      onClick: function onClick(event) {\n        _onClick && _onClick(event);\n        setIsOpen(false);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mr-1\",\n        children: icon\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex-1\",\n        children: label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var LinkItem = function LinkItem() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      href: link,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DefaultItem, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 5\n    }, _this);\n  };\n\n  return link ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LinkItem, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 114,\n    columnNumber: 17\n  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DefaultItem, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 114,\n    columnNumber: 32\n  }, _this);\n};\n\n_s3(DropDownItem, \"6Dmh3/LKChmnB2l9w2HpMrLEexk=\");\n\n_c3 = DropDownItem;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"HeaderLogged\");\n$RefreshReg$(_c2, \"DropDownMenu\");\n$RefreshReg$(_c3, \"DropDownItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTG9nZ2VkLnRzeD8xNjAxIl0sIm5hbWVzIjpbIkhlYWRlckxvZ2dlZCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiSGVhZGVyQ29udGV4dCIsImlzT3BlbiIsInNldElzT3BlbiIsInJlZiIsInVzZVJlZiIsInVzZUNsaWNrQXdheSIsIm9wZW4iLCJEcm9wRG93bk1lbnUiLCJzaG93IiwiTGFuZ3VhZ2VDb250ZXh0Iiwic2V0TG9jYWxlIiwiY2xzeCIsInByZXYiLCJEcm9wRG93bkl0ZW0iLCJsYWJlbCIsImljb24iLCJvbkNsaWNrIiwibGluayIsIkRlZmF1bHRJdGVtIiwiZXZlbnQiLCJMaW5rSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLG9CQUNBQyx3REFBVSxDQUFDQyxpRUFBRCxDQURWO0FBQUEsTUFDeEJDLFNBRHdCLGVBQ3hCQSxTQUR3QjtBQUFBLE1BQ2JDLFFBRGEsZUFDYkEsUUFEYTs7QUFBQSxxQkFFRkgsd0RBQVUsQ0FBQ0kscUVBQUQsQ0FGUjtBQUFBLE1BRXhCQyxNQUZ3QixnQkFFeEJBLE1BRndCO0FBQUEsTUFFaEJDLFNBRmdCLGdCQUVoQkEsU0FGZ0I7O0FBSWhDLE1BQU1DLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBRUFDLGdFQUFZLENBQUNGLEdBQUQsRUFBTSxZQUFNO0FBQ3RCRCxhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0QsR0FGVyxDQUFaO0FBSUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBLDZCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFB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RyxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSCxnQkFBa0IscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTdCO0FBQ0QsQ0F6QkQ7O0lBQU1KLFk7O01BQUFBLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJMb2dnZWQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuaW1wb3J0IHsgSGVhZGVyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9IZWFkZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQ2hldnJvbkRvd24gfSBmcm9tIFwiLi4vaWNvbnMvQ2hldnJvbkRvd25cIjtcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IEhlYWRlckxvZ2dlZCA9ICgpID0+IHtcbiAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3QgeyBpc09wZW4sIHNldElzT3BlbiB9ID0gdXNlQ29udGV4dChIZWFkZXJDb250ZXh0KTtcblxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlQ2xpY2tBd2F5KHJlZiwgKCkgPT4ge1xuICAgIHNldElzT3BlbihmYWxzZSk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCByb3VuZGVkLWZ1bGwgaG92ZXI6Ymctd2hpdGUgaG92ZXI6Ymctb3BhY2l0eS0xMCBweS0xIHBsLTIgcHItNCBzcGFjZS14LTFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLXdoaXRlIGJnLW9wYWNpdHktNDAgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ljb25zL2ljb24tNTEyeDUxMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiR2l0aHViIHByb2ZpbGVcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MH1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntmaXJzdE5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIDJ4bDpibG9ja1wiPntsYXN0TmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBuYW1lPVwiRHJvcERvd24gbWVudVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKChvcGVuKSA9PiAhb3Blbil9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBiZy1vcGFjaXR5LTIwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy13aGl0ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TWVudSBEw6lwbGlhbnQ8L3NwYW4+XG4gICAgICAgICAgPENoZXZyb25Eb3duIGhlaWdodD17MTl9IHdpZHRoPXsxOX0gLz5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPERyb3BEb3duTWVudSBzaG93PXtpc09wZW59IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbnR5cGUgRHJvcGRvd25NZW51UHJvcHMgPSB7IHNob3c6IGJvb2xlYW4gfTtcblxuY29uc3QgRHJvcERvd25NZW51ID0gKHsgc2hvdyB9OiBEcm9wZG93bk1lbnVQcm9wcykgPT4ge1xuICBjb25zdCB7IHNldExvY2FsZSB9ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgWyFzaG93ICYmIFwiaGlkZGVuXCJdLFxuICAgICAgICBcImFic29sdXRlIHRvcC0xNCByaWdodC0wIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdy02MCByb3VuZGVkLWxnIHAtMlwiXG4gICAgICApfVxuICAgID5cbiAgICAgIDxEcm9wRG93bkl0ZW0gbGluaz1cIi9hZG1pblwiIGxhYmVsPVwiQWRtaW5pc3RyYXRpb25cIiBpY29uPXs8PjwvPn0gLz5cbiAgICAgIDxEcm9wRG93bkl0ZW0gbGFiZWw9XCJQYXJhbcOodHJlc1wiIGljb249ezw+PC8+fSAvPlxuICAgICAgPERyb3BEb3duSXRlbVxuICAgICAgICBsYWJlbD1cIkxhbmd1YWdlXCJcbiAgICAgICAgaWNvbj17PD48Lz59XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsZSgocHJldikgPT4gKHByZXYgPT09IFwiZnJcIiA/IFwiZW5cIiA6IFwiZnJcIikpfVxuICAgICAgLz5cbiAgICAgIDxEcm9wRG93bkl0ZW0gbGFiZWw9XCJEZWNvbm5leGlvblwiIGljb249ezw+PC8+fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxudHlwZSBEcm9wRG93bkl0ZW1Qcm9wcyA9IHtcbiAgaWNvbjogUmVhY3ROb2RlO1xuICBsYWJlbDogc3RyaW5nO1xuICBsaW5rPzogc3RyaW5nO1xuICBvbkNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn07XG5cbmNvbnN0IERyb3BEb3duSXRlbSA9ICh7IGxhYmVsLCBpY29uLCBvbkNsaWNrLCBsaW5rIH06IERyb3BEb3duSXRlbVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2V0SXNPcGVuIH0gPSB1c2VDb250ZXh0KEhlYWRlckNvbnRleHQpO1xuICBjb25zdCBEZWZhdWx0SXRlbSA9ICgpID0+IChcbiAgICA8ZGl2XG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT1cInB5LTEgYWxpZ24tbWlkZGxlIHB4LTIgZmxleCBzcGFjZS14LTIgaG92ZXI6YmctbGlnaHQtZ3JheSByb3VuZGVkXCJcbiAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICBvbkNsaWNrICYmIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTFcIj57aWNvbn08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+e2xhYmVsfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGNvbnN0IExpbmtJdGVtID0gKCkgPT4gKFxuICAgIDxMaW5rIGhyZWY9e2xpbmshfT5cbiAgICAgIDxhPlxuICAgICAgICA8RGVmYXVsdEl0ZW0gLz5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG5cbiAgcmV0dXJuIGxpbmsgPyA8TGlua0l0ZW0gLz4gOiA8RGVmYXVsdEl0ZW0gLz47XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/HeaderLogged.tsx\n");

/***/ })

})