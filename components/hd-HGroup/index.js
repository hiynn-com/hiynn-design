import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { style } from "../context/style-context";

// 组件容器的类名，前面需加上前缀‘hd’
const cmpClsName = "hgroup";
// 默认的高度height值
const defaultH = "auto";
// 宽高的props输入验证函数
const sizeValidationFn = (props, propName, componentName) => {
  const val = props[propName];
  if (val === defaultH) {
    return;
  }
  const reg = /[0-9]+%?/g;
  if (!reg.test(val)) {
    return new Error(`传给组件${componentName}的属性${propName}的值不合法，校验失败`);
  }
};
// 设置的对齐方式与flex布局的映射
const flexMapping = {
  left: "flex-start",
  top: "flex-start",
  right: "flex-end",
  bottom: "flex-end",
  center: "center",
  justify: "space-around",
  between: "space-between"
};

export default class HGroup extends Component {
  // 类型检查
  static propTypes = {
    ["vertical-align"]: PropTypes.oneOf(["top", "center", "bottom"]),
    ["horizontal-align"]: PropTypes.oneOf(["left", "center", "right", "justify", "between"]),
    width: sizeValidationFn,
    height: sizeValidationFn
  };

  // 类型检查
  static propTypes = {
    ["vertical-align"]: PropTypes.oneOf(["top", "center", "bottom"]),
    ["horizontal-align"]: PropTypes.oneOf(["left", "center", "right", "justify", "between"]),
    width: sizeValidationFn,
    height: sizeValidationFn
  };

  // 默认props
  static defaultProps = {
    ["vertical-align"]: "center", // 垂直对齐
    ["horizontal-align"]: "justify", // 水平对齐
    width: "100%", // 宽度
    height: "auto" // 高度
  };

  constructor(props) {
    super(props);
  }

  /**
   * 组件挂载后，设置css变量，使得样式生效
   */
  componentDidMount() {
    this.setCssVar();
  }

  /**
   * 组件接收新的props后，更新组件，并重新设置css变量
   */
  UNSAFE_componentWillReceiveProps() {
    this.setState({}, () => {
      this.setCssVar();
    });
  }

  /**
   * 通过js设置css属性，使得css变量能够获取其中的值
   */
  setCssVar() {
    const dom = this.instance;
    const attrObj = this.extraAttr;
    if (dom && attrObj) {
      for (let prop in attrObj) {
        dom.style.setProperty(prop, attrObj[prop]);
      }
    }
  }

  /**
   * 获取类名
   */
  setClassName() {
    const { className } = this.props;
    let cls = classNames(`${style.prefixCls}-${cmpClsName}`, className);
    return cls;
  }

  /**
   * 通过props传递的内容，在react组件对象上保存extraAttr，然后将此对象的内容设置到dom对象的属性中
   * @param {*} props
   */
  setAttributes(props) {
    let vAlign = flexMapping[props["vertical-align"]];
    let hAlign = flexMapping[props["horizontal-align"]];
    let w = this.unitConvertor(props["width"]);
    let h = this.unitConvertor(props["height"]);

    this.extraAttr = {
      ["--width"]: w,
      ["--height"]: h,
      ["--vertical-align"]: vAlign,
      ["--horizontal-align"]: hAlign
    };
  }

  /**
   * 输入数字，则后面添加单位px，输入百分比则原样输出
   * @param {*} val
   */
  unitConvertor(val) {
    if (String(val).includes("%")) {
      return val;
    } else {
      return val + "px";
    }
  }

  render() {
    this.setAttributes(this.props);
    const cls = this.setClassName();
    return (
      <div
        className={cls}
        ref={e => {
          this.instance = e;
        }}
        {...this.props}
      >
        {this.props.children}
      </div>
    );
  }
}
