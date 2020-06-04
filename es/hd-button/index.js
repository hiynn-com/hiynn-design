import "antd/lib/config-provider/style";
import _ConfigProvider from "antd/lib/config-provider";
import "antd/lib/button/style";
import _Button from "antd/lib/button";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';

var HdButton = function (_React$Component) {
  _inheritsLoose(HdButton, _React$Component);

  function HdButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HdButton.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.onChange && this.props.title !== nextProps.title) {
      this.props.onChange();
    }
  };

  _proto.render = function render() {
    return React.createElement(_ConfigProvider, {
      autoInsertSpaceInButton: false
    }, React.createElement(_Button, _extends({
      className: "hd-button",
      type: "primary",
      style: _objectSpread(_objectSpread({}, this.props.style), {}, {
        width: this.props.width,
        height: this.props.height
      })
    }, this.props), this.props.title));
  };

  return HdButton;
}(React.Component);

export default HdButton;
//# sourceMappingURL=index.js.map