"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var defaultProps = {
  as: 'div',
  fluid: false
};

var Container = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      Component = _ref.as,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "fluid", "as", "className"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'container');
  return _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, fluid ? prefix + "-fluid" : prefix)
  }));
});

Container.displayName = 'Container';
Container.defaultProps = defaultProps;
var _default = Container;
exports.default = _default;
module.exports = exports["default"];