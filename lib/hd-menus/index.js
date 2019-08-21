"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

require("antd/es/menu/style/css");

var _menu = _interopRequireDefault(require("antd/es/menu"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var HdMenus =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(HdMenus, _Component);

  function HdMenus(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderMenus", function (menus) {
      var _menus = menus.map(function (menu) {
        return menu.show && typeof menu.children !== "undefined" && typeof menu.children !== null && menu.children.length > 0 ? _react["default"].createElement(_menu["default"].SubMenu, {
          key: menu.id,
          title: _react["default"].createElement("div", null, menu.icon ? _react["default"].createElement(_icon["default"], {
            type: menu.icon
          }) : _react["default"].createElement(_icon["default"], {
            type: "exclamation-circle"
          }), _react["default"].createElement("span", null, menu.title))
        }, menu.children.map(function (children) {
          return children.show ? _react["default"].createElement(_menu["default"].Item, {
            key: children.id
          }, _react["default"].createElement(_reactRouterDom.NavLink, {
            to: children.url
          }, children.title)) : null;
        })) : menu.show && _react["default"].createElement(_menu["default"].Item, {
          key: menu.id
        }, _react["default"].createElement(_reactRouterDom.NavLink, {
          to: menu.url
        }, menu.icon ? _react["default"].createElement(_icon["default"], {
          type: menu.icon
        }) : _react["default"].createElement(_icon["default"], {
          type: "exclamation-circle"
        }), _react["default"].createElement("span", null, menu.title)));
      });

      return _menus;
    });
    _this.state = {
      menus: []
    };
    return _this;
  }

  var _proto = HdMenus.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        theme = _this$props.theme,
        menus = _this$props.menus,
        width = _this$props.width,
        collapsed = _this$props.collapsed;
    console.log("collapsed=", collapsed);
    var _menus = null;

    if (menus && menus.length > 0) {
      _menus = this.renderMenus(menus);
    }

    return _react["default"].createElement(_menu["default"], {
      mode: "inline",
      onClick: this.handleClick,
      theme: theme,
      defaultSelectedKeys: ["1"],
      defaultOpenKeys: ["sub1"],
      className: "hd-sider-menu-container"
    }, _menus);
  };

  return HdMenus;
}(_react.Component);

var _default = HdMenus;
exports["default"] = _default;
//# sourceMappingURL=index.js.map