"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styleContext = require("../context/style-context");

var _Panel$propTypes, _Panel$defaultProps;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var cmpClsName = "panel";
var defaultH = "auto";
var flexMapping = {
  left: "flex-start",
  middle: "center",
  right: "flex-end"
};

var sizeValidationFn = function sizeValidationFn(props, propName, componentName) {
  var val = props[propName];

  if (val === defaultH) {
    return;
  }

  var reg = /[0-9]+%?/g;

  if (!reg.test(val)) {
    return new Error("\u4F20\u7ED9\u7EC4\u4EF6" + componentName + "\u7684\u5C5E\u6027" + propName + "\u7684\u503C\u4E0D\u5408\u6CD5\uFF0C\u6821\u9A8C\u5931\u8D25");
  }
};

var hexValidationFn = function hexValidationFn(props, propName, componentName) {
  var val = props[propName];

  if (val === "not specified") {
    return;
  }

  var reg = /^#[0-9a-fA-F]{6}$/g;

  if (!reg.test(val)) {
    return new Error("\u4F20\u7ED9\u7EC4\u4EF6" + componentName + "\u7684\u5C5E\u6027" + propName + "\u7684\u503C\u4E0D\u5408\u6CD5\uFF0C\u6821\u9A8C\u5931\u8D25");
  }
};

var Panel = function (_Component) {
  (0, _inheritsLoose2.default)(Panel, _Component);

  function Panel(props) {
    return _Component.call(this, props) || this;
  }

  var _proto = Panel.prototype;

  _proto.setClassName = function setClassName() {
    var className = this.props.className;
    var cls = (0, _classnames.default)(_styleContext.style.prefixCls + "-" + cmpClsName, className);
    return cls;
  };

  _proto.getSize = function getSize() {
    var _ref;

    return _ref = {
      width: this.unitConvertor(this.props.width),
      height: this.unitConvertor(this.props.height)
    }, _ref["title-height"] = this.unitConvertor(this.props["title-height"]), _ref["corner-radius"] = this.unitConvertor(this.props["corner-radius"]), _ref["title-fontsize"] = this.unitConvertor(this.props["title-fontsize"]), _ref;
  };

  _proto.unitConvertor = function unitConvertor(val) {
    if (String(val).includes("%")) {
      return val;
    } else {
      return val + "px";
    }
  };

  _proto.computeStyle = function computeStyle() {
    var wrapperStyle = {},
        titleStyle = {},
        contentStyle = {};
    var sizeRst = this.getSize();
    var width = sizeRst.width,
        height = sizeRst.height;
    var titleHeight = sizeRst["title-height"];
    var titleCornerRadius = sizeRst["corner-radius"];
    var titleFont = sizeRst["title-fontsize"];
    wrapperStyle = _objectSpread(_objectSpread({}, wrapperStyle), {}, {
      width: width,
      height: height,
      borderRadius: titleCornerRadius + " " + titleCornerRadius + " 0 0"
    });
    titleStyle = _objectSpread(_objectSpread({}, titleStyle), {}, {
      height: titleHeight
    });
    var titleBackground = this.props["title-background"];
    var titleColor = this.props["title-color"];
    titleStyle = _objectSpread(_objectSpread({}, titleStyle), {}, {
      color: titleColor,
      background: titleBackground,
      borderRadius: titleCornerRadius + " " + titleCornerRadius + " 0 0",
      fontSize: titleFont,
      justifyContent: flexMapping[this.props["text-align"]]
    });
    var background = this.props["background"];
    var color = this.props["color"];
    var contentHeight = "calc(" + height + " - " + titleHeight + ")";
    contentStyle = _objectSpread(_objectSpread({}, contentStyle), {}, {
      background: background,
      color: color,
      height: contentHeight
    });
    return {
      wrapperStyle: wrapperStyle,
      titleStyle: titleStyle,
      contentStyle: contentStyle
    };
  };

  _proto.render = function render() {
    var cls = this.setClassName();

    var _this$computeStyle = this.computeStyle(),
        wrapperStyle = _this$computeStyle.wrapperStyle,
        titleStyle = _this$computeStyle.titleStyle,
        contentStyle = _this$computeStyle.contentStyle;

    return _react.default.createElement("div", (0, _extends2.default)({
      className: cls,
      style: wrapperStyle
    }, this.props), _react.default.createElement("div", {
      className: cls + "-title",
      style: titleStyle
    }, this.props.title), _react.default.createElement("div", {
      className: cls + "-content",
      style: contentStyle
    }, this.props.children));
  };

  return Panel;
}(_react.Component);

exports.default = Panel;
Panel.propTypes = (_Panel$propTypes = {
  width: sizeValidationFn,
  height: sizeValidationFn
}, _Panel$propTypes["corner-radius"] = _propTypes.default.string, _Panel$propTypes.title = _propTypes.default.string, _Panel$propTypes["title-height"] = sizeValidationFn, _Panel$propTypes["title-background"] = hexValidationFn, _Panel$propTypes["title-color"] = hexValidationFn, _Panel$propTypes["text-align"] = _propTypes.default.oneOf(["left", "middle", "right"]), _Panel$propTypes["title-fontsize"] = _propTypes.default.string, _Panel$propTypes.background = hexValidationFn, _Panel$propTypes.color = hexValidationFn, _Panel$propTypes);
Panel.defaultProps = (_Panel$defaultProps = {
  width: "400",
  height: "auto"
}, _Panel$defaultProps["corner-radius"] = "5", _Panel$defaultProps.title = "", _Panel$defaultProps["title-height"] = "30", _Panel$defaultProps["title-background"] = "#1890FF", _Panel$defaultProps["title-color"] = "#ffffff", _Panel$defaultProps["title-fontsize"] = "16", _Panel$defaultProps["text-align"] = "left", _Panel$defaultProps.background = "not specified", _Panel$defaultProps.color = "#000000", _Panel$defaultProps);
//# sourceMappingURL=index.js.map