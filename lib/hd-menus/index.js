"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _reactRouterDom = require("react-router-dom");

var HdMenus =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(HdMenus, _Component);

  function HdMenus(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderMenus", function (menus) {
      var _menus = menus.map(function (menu) {
        return menu.show && typeof menu.children !== "undefined" && typeof menu.children !== null && menu.children.length > 0 ? _react["default"].createElement(_antd.Menu.SubMenu, {
          key: menu.id,
          title: _react["default"].createElement("div", null, menu.icon ? _react["default"].createElement(_antd.Icon, {
            type: menu.icon
          }) : null, _react["default"].createElement("span", null, menu.title))
        }, menu.children.map(function (children) {
          return children.show ? _react["default"].createElement(_antd.Menu.Item, {
            key: children.id
          }, _react["default"].createElement(_reactRouterDom.NavLink, {
            to: children.url
          }, children.title)) : null;
        })) : menu.show && _react["default"].createElement(_antd.Menu.Item, {
          key: menu.id
        }, _react["default"].createElement(_reactRouterDom.NavLink, {
          to: menu.url
        }, menu.icon ? _react["default"].createElement(_antd.Icon, {
          type: menu.icon
        }) : null, _react["default"].createElement("span", null, menu.title)));
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
    var menus = this.props.menus;
    var _menus = null;

    if (menus && menus.length > 0) {
      _menus = this.renderMenus(menus);
    }

    return _react["default"].createElement(_antd.Menu, {
      onClick: this.handleClick,
      style: {
        width: 256
      },
      defaultSelectedKeys: ["1"],
      defaultOpenKeys: ["sub1"],
      mode: "inline"
    }, _menus);
  };

  return HdMenus;
}(_react.Component);

var _default = HdMenus;
exports["default"] = _default;
//# sourceMappingURL=index.js.map