"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

require("antd/es/dropdown/style/css");

var _dropdown = _interopRequireDefault(require("antd/es/dropdown"));

require("antd/es/avatar/style/css");

var _avatar = _interopRequireDefault(require("antd/es/avatar"));

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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderSider", function () {
      var _this$props = _this.props,
          sider = _this$props.sider,
          theme = _this$props.theme,
          logo = _this$props.logo,
          menus = _this$props.menus,
          title = _this$props.title;
      var titleCls = "title";

      if (sider) {
        titleCls = (0, _classnames["default"])(titleCls, {
          "hide-title": sider.get("collapsed")
        });
      }

      return sider ? _react["default"].createElement(Sider, {
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
      })) : null;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderSubtitle", function () {
      var _this$props2 = _this.props,
          sider = _this$props2.sider,
          logo = _this$props2.logo,
          title = _this$props2.title,
          subTitle = _this$props2.subTitle;
      var toggleCollapse = _this.props.toggleCollapse;

      if (sider) {
        var icon = typeof sider.get("collapsed") === "undefined" ? null : _react["default"].createElement(_icon["default"], {
          type: sider.get("collapsed") ? "menu-unfold" : "menu-fold",
          className: "collapse-icon",
          onClick: function onClick() {
            return toggleCollapse();
          }
        });
        return _react["default"].createElement(_react["default"].Fragment, null, icon, _react["default"].createElement("span", {
          className: "title"
        }, subTitle));
      } else {
        return _react["default"].createElement(_react["default"].Fragment, null, logo, _react["default"].createElement("span", {
          className: "title"
        }, title));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderUserDropdown", function () {
      var showUserDropdown = _this.props.showUserDropdown;
      return showUserDropdown ? _react["default"].createElement(_dropdown["default"], {
        overlay: _this.renderHeaderMenu,
        placement: "bottomRight"
      }, _react["default"].createElement("div", {
        className: "hd-layout-header-toolbar-content"
      }, _react["default"].createElement(_avatar["default"], {
        className: "user-avatar",
        icon: "user"
      }), _react["default"].createElement("span", {
        className: "user-name"
      }, "\u7528\u6237"))) : null;
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
    var _this$props3 = this.props,
        className = _this$props3.className,
        style = _this$props3.style;
    var _this$props4 = this.props,
        children = _this$props4.children,
        theme = _this$props4.theme,
        sider = _this$props4.sider,
        logo = _this$props4.logo,
        title = _this$props4.title,
        subTitle = _this$props4.subTitle,
        menus = _this$props4.menus,
        atr = (0, _objectWithoutPropertiesLoose2["default"])(_this$props4, ["children", "theme", "sider", "logo", "title", "subTitle", "menus"]);
    var prefixCls = "hd";
    var classnames = (0, _classnames["default"])(prefixCls, className, (_cls = {}, _cls[prefixCls + "-layout-container"] = true, _cls));
    return _react["default"].createElement(_layout["default"], {
      className: classnames
    }, this.renderSider(), _react["default"].createElement(_layout["default"], {
      className: "hd-layout-main"
    }, _react["default"].createElement(Header, {
      className: "hd-layout-main-header"
    }, _react["default"].createElement("div", {
      className: "hd-layout-main-header-content"
    }, _react["default"].createElement("div", {
      className: "hd-layout-main-header-left"
    }, _react["default"].createElement("div", {
      className: "hd-layout-main-header-subtitle"
    }, this.renderSubtitle())), _react["default"].createElement("div", {
      className: "hd-layout-main-header-right"
    }, _react["default"].createElement("div", null), _react["default"].createElement("div", {
      className: "hd-layout-header-toolbar"
    }, this.renderUserDropdown())))), _react["default"].createElement(Content, {
      className: "hd-layout-main-content"
    }, children)));
  };

  return HdLayout;
}(_react.Component);

HdLayout.contextType = _styleContext.StyleContext;
var _default = HdLayout;
exports["default"] = _default;
//# sourceMappingURL=index.js.map