(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['/js/chunks/home'],
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

    /***/ './app/containers/home/assets/HomeContainer.js':
      /*!*****************************************************!*\
  !*** ./app/containers/home/assets/HomeContainer.js ***!
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

        var HomeContainer = _styledComponents.default.div(['color:red;']);

        var _default = HomeContainer;
        exports.default = _default;

        /***/
      },

    /***/ './app/containers/home/index.jsx':
      /*!***************************************!*\
  !*** ./app/containers/home/index.jsx ***!
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

        var actions = _interopRequireWildcard(
          __webpack_require__(
            /*! @containers/home/action */ './app/containers/home/action.js',
          ),
        );

        var _hoc = __webpack_require__(/*! @hoc */ './app/hoc/index.js');

        var _index = _interopRequireDefault(
          __webpack_require__(
            /*! @components/test/index */ './app/components/test/index.jsx',
          ),
        );

        var _HomeContainer = _interopRequireDefault(
          __webpack_require__(
            /*! ./assets/HomeContainer */ './app/containers/home/assets/HomeContainer.js',
          ),
        );

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc =
                    Object.defineProperty && Object.getOwnPropertyDescriptor
                      ? Object.getOwnPropertyDescriptor(obj, key)
                      : {};
                  if (desc.get || desc.set) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
            }
            newObj.default = obj;
            return newObj;
          }
        }

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _typeof(obj) {
          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === 'object' || typeof call === 'function')
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }
          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function',
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        /**
         * containers/home : Home container
         * @param {Object} props the properties of the container
         * @param {Object} props.home the redux state of the container
         * @param {Object} props.home.test the test property of the container
         **/
        var Home =
          /*#__PURE__*/
          (function(_React$Component) {
            _inherits(Home, _React$Component);

            function Home() {
              _classCallCheck(this, Home);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(Home).apply(this, arguments),
              );
            }

            _createClass(Home, [
              {
                key: 'render',
                value: function render() {
                  var test = this.props.home.test;
                  return _react.default.createElement(
                    _HomeContainer.default,
                    null,
                    'Home Page',
                    _react.default.createElement(_index.default, null),
                  );
                },
              },
            ]);

            return Home;
          })(_react.default.Component);

        var _default = (0, _hoc.reduxConnect)(Home, actions);

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
//# sourceMappingURL=home.js.map
