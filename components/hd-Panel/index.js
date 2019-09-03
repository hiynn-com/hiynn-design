import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { style } from "../context/style-context";

// 组件容器的类名，前面需加上前缀‘hd’
const cmpClsName = "panel";

// 默认的高度样式
const defaultH = "auto";

// 标题栏字体对齐方式的映射
const flexMapping = {
  left: "flex-start",
  middle: "center",
  right: "flex-end"
};

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

// 十六进制数输入的验证函数
const hexValidationFn = (props, propName, componentName) => {
  const val = props[propName];
  if (val === "not specified") {
    return;
  }
  const reg = /^#[0-9a-fA-F]{6}$/g;
  if (!reg.test(val)) {
    return new Error(`传给组件${componentName}的属性${propName}的值不合法，校验失败`);
  }
};

export default class Panel extends Component {
  // 类型检查
  static propTypes = {
    width: sizeValidationFn, // panel宽度
    height: sizeValidationFn, // panel高度
    ["corner-radius"]: PropTypes.string, // 标题栏圆角
    title: PropTypes.string, // 标题栏内容
    ["title-height"]: sizeValidationFn, // 标题栏高度
    ["title-background"]: hexValidationFn, // 标题栏背景色
    ["title-color"]: hexValidationFn, // 标题栏字体颜色
    ["text-align"]: PropTypes.oneOf(["left", "middle", "right"]), // 标题栏标题位置
    ["title-fontsize"]: PropTypes.string, // 标题栏字体大小
    background: hexValidationFn, // 内容区背景色
    color: hexValidationFn // 内容区字体颜色
  };

  // 默认props
  static defaultProps = {
    width: "400", // 宽度
    height: "auto", // 高度
    ["corner-radius"]: "5", // 标题栏圆角
    title: "", // 标题栏内容
    ["title-height"]: "30", // 标题栏高度
    ["title-background"]: "#1890FF", // 标题栏背景色
    ["title-color"]: "#ffffff", // 标题栏字体颜色
    ["title-fontsize"]: "16", // 标题栏字体大小
    ["text-align"]: "left", // 标题栏字体对齐方式
    background: "not specified", // 内容区背景色
    color: "#000000" // 内容区字体颜色
  };

  constructor(props) {
    super(props);
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
   * 获取宽高、大小等的尺寸对象
   */
  getSize() {
    return {
      width: this.unitConvertor(this.props.width),
      height: this.unitConvertor(this.props.height),
      ["title-height"]: this.unitConvertor(this.props["title-height"]),
      ["corner-radius"]: this.unitConvertor(this.props["corner-radius"]),
      ["title-fontsize"]: this.unitConvertor(this.props["title-fontsize"])
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

  computeStyle() {
    let wrapperStyle = {},
      titleStyle = {},
      contentStyle = {};

    // 设置宽高样式
    const sizeRst = this.getSize();
    const { width, height } = sizeRst;
    const titleHeight = sizeRst["title-height"];
    const titleCornerRadius = sizeRst["corner-radius"];
    const titleFont = sizeRst["title-fontsize"];
    // 容器宽高
    wrapperStyle = {
      ...wrapperStyle,
      width,
      height,
      borderRadius: `${titleCornerRadius} ${titleCornerRadius} 0 0`
    };
    // 标题栏宽高
    titleStyle = {
      ...titleStyle,
      height: titleHeight
    };

    // 设置其他标题栏样式
    const titleBackground = this.props["title-background"];
    const titleColor = this.props["title-color"];
    titleStyle = {
      ...titleStyle,
      color: titleColor,
      background: titleBackground,
      borderRadius: `${titleCornerRadius} ${titleCornerRadius} 0 0`,
      fontSize: titleFont,
      justifyContent: flexMapping[this.props["text-align"]]
    };

    // 设置内容区其他样式
    const background = this.props["background"];
    const color = this.props["color"];
    const contentHeight = `calc(${height} - ${titleHeight})`;
    contentStyle = {
      ...contentStyle,
      background,
      color,
      height: contentHeight
    };

    return {
      wrapperStyle,
      titleStyle,
      contentStyle
    };
  }

  render() {
    const cls = this.setClassName();
    const { wrapperStyle, titleStyle, contentStyle } = this.computeStyle();

    return (
      <div className={cls} style={wrapperStyle} {...this.props}>
        <div className={`${cls}-title`} style={titleStyle}>
          {this.props.title}
        </div>
        <div className={`${cls}-content`} style={contentStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
