"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

require("antd/es/dropdown/style/css");

var _dropdown = _interopRequireDefault(require("antd/es/dropdown"));

require("antd/es/avatar/style/css");

var _avatar = _interopRequireDefault(require("antd/es/avatar"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

require("antd/es/menu/style/css");

var _menu = _interopRequireDefault(require("antd/es/menu"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/layout/style/css");

var _layout = _interopRequireDefault(require("antd/es/layout"));

var _react = _interopRequireWildcard(require("react"));

var _immutable = require("immutable");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _hdMenus = _interopRequireDefault(require("../hd-menus"));

var _styleContext = require("../context/style-context");

var Header = _layout["default"].Header,
    Content = _layout["default"].Content,
    Sider = _layout["default"].Sider;

var HdLayout =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(HdLayout, _Component);

  function HdLayout(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderHeaderMenu", function () {
      return _react["default"].createElement(_menu["default"], null, _react["default"].createElement(_menu["default"].Item, {
        key: "password",
        className: "hd-layout-header-dropdown-menu-item"
      }, _react["default"].createElement(_icon["default"], {
        type: "setting"
      }), _react["default"].createElement("span", null, "\u4FEE\u6539\u5BC6\u7801")), _react["default"].createElement(_menu["default"].Item, {
        key: "signout",
        className: "hd-layout-header-dropdown-menu-item"
      }, _react["default"].createElement(_icon["default"], {
        type: "logout"
      }), _react["default"].createElement("span", null, "\u9000\u51FA\u767B\u5F55")));
    });
    _this.state = {};
    return _this;
  }

  var _proto = HdLayout.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
  };

  _proto.render = function render() {
    var _cls;

    var styleContext = this.context;
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style;
    var _this$props2 = this.props,
        children = _this$props2.children,
        theme = _this$props2.theme,
        sider = _this$props2.sider,
        logo = _this$props2.logo,
        title = _this$props2.title,
        subTitle = _this$props2.subTitle,
        menus = _this$props2.menus,
        atr = (0, _objectWithoutPropertiesLoose2["default"])(_this$props2, ["children", "theme", "sider", "logo", "title", "subTitle", "menus"]);
    var toggleCollapse = this.props.toggleCollapse;
    var prefixCls = "hd";
    var classnames = (0, _classnames["default"])(prefixCls, className, (_cls = {}, _cls[prefixCls + "-layout-container"] = true, _cls));
    var titleCls = (0, _classnames["default"])("hd-layout-logo-title", {
      "hide-title": sider.get("collapsed")
    });
    return _react["default"].createElement(_layout["default"], {
      className: classnames
    }, _react["default"].createElement(Sider, {
      theme: theme,
      trigger: null,
      collapsible: true,
      width: sider.get("width"),
      collapsed: sider.get("collapsed"),
      breakpoint: sider.breakpoint,
      className: "hd-layout-sider"
    }, _react["default"].createElement("div", {
      className: "hd-layout-logo"
    }, logo, _react["default"].createElement("span", {
      className: titleCls
    }, title)), _react["default"].createElement(_hdMenus["default"], {
      theme: theme,
      menus: menus,
      width: sider.get("width"),
      collapsed: sider.get("collapsed")
    })), _react["default"].createElement(_layout["default"], {
      className: "hd-layout-main"
    }, _react["default"].createElement(Header, {
      className: "hd-layout-main-header"
    }, _react["default"].createElement("div", {
      className: "hd-layout-main-header-content"
    }, _react["default"].createElement("div", {
      className: "hd-layout-main-header-subtitle"
    }, typeof sider.get("collapsed") === "undefined" ? null : _react["default"].createElement(_icon["default"], {
      type: sider.get("collapsed") ? "menu-unfold" : "menu-fold",
      className: "collapse-icon",
      onClick: function onClick() {
        return toggleCollapse();
      }
    }), _react["default"].createElement("span", {
      className: "sub-title"
    }, subTitle)), _react["default"].createElement("div", {
      className: "hd-layout-header-toolbar"
    }, _react["default"].createElement(_dropdown["default"], {
      overlay: this.renderHeaderMenu,
      placement: "bottomRight"
    }, _react["default"].createElement("div", {
      className: "hd-layout-header-toolbar-content"
    }, _react["default"].createElement(_avatar["default"], {
      className: "user-avatar",
      icon: "user"
    }), _react["default"].createElement("span", {
      className: "user-name"
    }, "\u7528\u6237")))))), _react["default"].createElement(Content, {
      className: "hd-layout-main-content"
    }, children)));
  };

  return HdLayout;
}(_react.Component);

HdLayout.contextType = _styleContext.StyleContext;
var _default = HdLayout;
exports["default"] = _default;
//# sourceMappingURL=index.js.map