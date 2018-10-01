(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['/js/chunks/test-component'],
  {
    /***/ './app/components/test/assets/TestComponent.js':
      /*!*****************************************************!*\
  !*** ./app/components/test/assets/TestComponent.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = void 0;

        var _styledComponents = _interopRequireDefault(
          __webpack_require__(
            /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js',
          ),
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var TestComponent = _styledComponents.default.div(['color:green;']);

        var _default = TestComponent;
        exports.default = _default;

        /***/
      },

    /***/ './app/components/test/index.jsx':
      /*!***************************************!*\
  !*** ./app/components/test/index.jsx ***!
  \***************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = void 0;

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js'),
        );

        var _elements = __webpack_require__(
          /*! @elements */ './app/elements/index.js',
        );

        var _TestComponent = _interopRequireDefault(
          __webpack_require__(
            /*! ./assets/TestComponent */ './app/components/test/assets/TestComponent.js',
          ),
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /**
         * components/test : Test component
         * @returns {HTMLElement} returns test component's node
         **/
        var Test = function Test() {
          return _react.default.createElement(
            _TestComponent.default,
            null,
            'Test Component',
            _react.default.createElement(_elements.Test, null),
          );
        };

        Test.defaultProps = {};
        Test.propTypes = {};
        var _default = Test;
        exports.default = _default;

        /***/
      },

    /***/ './app/elements/index.js':
      /*!*******************************!*\
  !*** ./app/elements/index.js ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        Object.defineProperty(exports, 'Test', {
          enumerable: true,
          get: function get() {
            return _index.default;
          },
        });

        var _index = _interopRequireDefault(
          __webpack_require__(
            /*! @elements/test/index */ './app/elements/test/index.jsx',
          ),
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /***/
      },

    /***/ './app/elements/test/assets/TestElement.js':
      /*!*************************************************!*\
  !*** ./app/elements/test/assets/TestElement.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = void 0;

        var _styledComponents = _interopRequireDefault(
          __webpack_require__(
            /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js',
          ),
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var TestElement = _styledComponents.default.div(['color:blue;']);

        var _default = TestElement;
        exports.default = _default;

        /***/
      },

    /***/ './app/elements/test/index.jsx':
      /*!*************************************!*\
  !*** ./app/elements/test/index.jsx ***!
  \*************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = void 0;

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js'),
        );

        var _TestElement = _interopRequireDefault(
          __webpack_require__(
            /*! ./assets/TestElement */ './app/elements/test/assets/TestElement.js',
          ),
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /**
         * elements/test : Test elements
         * @returns {HTMLElement} returns test element's node
         **/
        var Test = function Test() {
          return _react.default.createElement(
            _TestElement.default,
            null,
            'Test Element',
          );
        };

        Test.defaultProps = {};
        Test.propTypes = {};
        var _default = Test;
        exports.default = _default;

        /***/
      },
  },
]);
//# sourceMappingURL=test-component.js.map
