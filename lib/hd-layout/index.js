"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _immutable = require("immutable");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styleContext = require("../context/style-context");

var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Sider = _antd.Layout.Sider;

var HdLayout =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(HdLayout, _Component);

  function HdLayout(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderRightMenu", function () {
      return _react["default"].createElement(_antd.Menu, null, _react["default"].createElement(_antd.Menu.Item, {
        key: "password"
      }, _react["default"].createElement(_antd.Icon, {
        type: "setting"
      }), _react["default"].createElement("span", null, "\u4FEE\u6539\u5BC6\u7801")), _react["default"].createElement(_antd.Menu.Item, {
        key: "signout"
      }, _react["default"].createElement(_antd.Icon, {
        type: "logout"
      }), _react["default"].createElement("span", null, "\u9000\u51FA\u767B\u5F55")));
    });
    _this.state = {};
    return _this;
  }

  var _proto = HdLayout.prototype;

  _proto.render = function render() {
    var styleX = this.context;
    console.log("styleX.prefixCls", styleX);
    var _this$props = this.props,
        prefixCls = _this$props.prefixCls,
        className = _this$props.className,
        style = _this$props.style;
    var _this$props2 = this.props,
        children = _this$props2.children,
        initData = _this$props2.initData,
        menus = _this$props2.menus,
        atr = (0, _objectWithoutPropertiesLoose2["default"])(_this$props2, ["children", "initData", "menus"]);
    var btnClass = (0, _classnames["default"])(prefixCls, className, {
      "btn-pressed": this.state.isPressed,
      "btn-over": !this.state.isPressed && this.state.isHovered
    });
    return _react["default"].createElement(_antd.Layout, {
      className: "hd-layout-container"
    }, _react["default"].createElement(Sider, {
      theme: "light",
      trigger: null,
      collapsible: true,
      width: 218,
      breakpoint: "lg",
      className: "layout-sider"
    }, _react["default"].createElement("div", {
      className: "logo"
    }, initData.logos, _react["default"].createElement("span", null, initData.title)), menus), _react["default"].createElement(_antd.Layout, null, _react["default"].createElement(Header, {
      className: "layout-header"
    }, _react["default"].createElement("div", null, _react["default"].createElement(_antd.Icon, {
      className: "trigger"
    }), _react["default"].createElement("span", null, initData.subTitle)), _react["default"].createElement("div", null, _react["default"].createElement(_antd.Dropdown, {
      overlay: this.renderRightMenu,
      placement: "bottomRight"
    }, _react["default"].createElement("div", null, _react["default"].createElement(_antd.Avatar, {
      size: "default",
      icon: "user"
    }), _react["default"].createElement("span", null, "\u7528\u6237"))))), _react["default"].createElement(Content, null)));
  };

  return HdLayout;
}(_react.Component);

HdLayout.contextType = _styleContext.StyleContext;
var _default = HdLayout;
exports["default"] = _default;
//# sourceMappingURL=index.js.map