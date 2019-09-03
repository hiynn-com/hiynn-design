import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";

var _HGroup$propTypes, _HGroup$propTypes2, _HGroup$defaultProps;

import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { style } from "../context/style-context"; // 组件容器的类名，前面需加上前缀‘hd’

var cmpClsName = "hgroup"; // 默认的高度height值

var defaultH = "auto"; // 宽高的props输入验证函数

var sizeValidationFn = function sizeValidationFn(props, propName, componentName) {
  var val = props[propName];

  if (val === defaultH) {
    return;
  }

  var reg = /[0-9]+%?/g;

  if (!reg.test(val)) {
    return new Error("\u4F20\u7ED9\u7EC4\u4EF6" + componentName + "\u7684\u5C5E\u6027" + propName + "\u7684\u503C\u4E0D\u5408\u6CD5\uFF0C\u6821\u9A8C\u5931\u8D25");
  }
}; // 设置的对齐方式与flex布局的映射


var flexMapping = {
  left: "flex-start",
  top: "flex-start",
  right: "flex-end",
  bottom: "flex-end",
  center: "center",
  justify: "space-around",
  between: "space-between"
};

var HGroup =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(HGroup, _Component);

  // 类型检查
  // 类型检查
  // 默认props
  function HGroup(props) {
    return _Component.call(this, props) || this;
  }
  /**
   * 组件挂载后，设置css变量，使得样式生效
   */


  var _proto = HGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setCssVar();
  }
  /**
   * 组件接收新的props后，更新组件，并重新设置css变量
   */
  ;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps() {
    var _this = this;

    this.setState({}, function () {
      _this.setCssVar();
    });
  }
  /**
   * 通过js设置css属性，使得css变量能够获取其中的值
   */
  ;

  _proto.setCssVar = function setCssVar() {
    var dom = this.instance;
    var attrObj = this.extraAttr;

    if (dom && attrObj) {
      for (var prop in attrObj) {
        dom.style.setProperty(prop, attrObj[prop]);
      }
    }
  }
  /**
   * 获取类名
   */
  ;

  _proto.setClassName = function setClassName() {
    var className = this.props.className;
    var cls = classNames(style.prefixCls + "-" + cmpClsName, className);
    return cls;
  }
  /**
   * 通过props传递的内容，在react组件对象上保存extraAttr，然后将此对象的内容设置到dom对象的属性中
   * @param {*} props
   */
  ;

  _proto.setAttributes = function setAttributes(props) {
    var _this$extraAttr;

    var vAlign = flexMapping[props["vertical-align"]];
    var hAlign = flexMapping[props["horizontal-align"]];
    var w = this.unitConvertor(props["width"]);
    var h = this.unitConvertor(props["height"]);
    this.extraAttr = (_this$extraAttr = {}, _this$extraAttr["--width"] = w, _this$extraAttr["--height"] = h, _this$extraAttr["--vertical-align"] = vAlign, _this$extraAttr["--horizontal-align"] = hAlign, _this$extraAttr);
  }
  /**
   * 输入数字，则后面添加单位px，输入百分比则原样输出
   * @param {*} val
   */
  ;

  _proto.unitConvertor = function unitConvertor(val) {
    if (String(val).includes("%")) {
      return val;
    } else {
      return val + "px";
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    this.setAttributes(this.props);
    var cls = this.setClassName();
    return React.createElement("div", _extends({
      className: cls,
      ref: function ref(e) {
        _this2.instance = e;
      }
    }, this.props), this.props.children);
  };

  return HGroup;
}(Component);

HGroup.propTypes = (_HGroup$propTypes = {}, _HGroup$propTypes["vertical-align"] = PropTypes.oneOf(["top", "center", "bottom"]), _HGroup$propTypes["horizontal-align"] = PropTypes.oneOf(["left", "center", "right", "justify", "between"]), _HGroup$propTypes.width = sizeValidationFn, _HGroup$propTypes.height = sizeValidationFn, _HGroup$propTypes);
HGroup.propTypes = (_HGroup$propTypes2 = {}, _HGroup$propTypes2["vertical-align"] = PropTypes.oneOf(["top", "center", "bottom"]), _HGroup$propTypes2["horizontal-align"] = PropTypes.oneOf(["left", "center", "right", "justify", "between"]), _HGroup$propTypes2.width = sizeValidationFn, _HGroup$propTypes2.height = sizeValidationFn, _HGroup$propTypes2);
HGroup.defaultProps = (_HGroup$defaultProps = {}, _HGroup$defaultProps["vertical-align"] = "center", _HGroup$defaultProps["horizontal-align"] = "justify", _HGroup$defaultProps.width = "100%", _HGroup$defaultProps.height = "auto", _HGroup$defaultProps);
export { HGroup as default };
//# sourceMappingURL=index.js.map