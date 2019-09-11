import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { style } from "../context/style-context";

// 组件容器的类名，前面需加上前缀‘hd’
const cmpClsName = "divideBox";

// 默认的高度height值
const defaultH = "auto";

// 分隔容器移动分隔栏时，容器可达到的最小的尺寸
const minSize = 30;

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

// 竖向和横向分隔容器的时候，所需要设置的样式
const styles = {
  column: {
    container: {
      flexDirection: 'column',
    },
    child1: {

    },
    child2: {

    },
    slider: {
      width: '100%',
      height: '5px',
      top: 'calc(50% - 2.5px)',
      left: '0',
      cursor: 'n-resize',
    }
  },
  row: {
    container: {
      flexDirection: 'row',
    },
    child1: {

    },
    child2: {

    },
    slider: {
      height: '100%',
      width: '5px',
      left: 'calc(50% - 2.5px)',
      top: '0',
      cursor: 'w-resize',
    }
  }
}

export default class DivideBox extends Component {

  // 类型检查
  static propTypes = {
    direction: PropTypes.oneOf(["row", "column"]),
    width: sizeValidationFn,
    height: sizeValidationFn
  };

  // 默认props
  static defaultProps = {
    direction: "row",   // 分隔容器的方向，默认水平方向
    width: "400",      // 宽度
    height: "200"      // 高度
  };

  constructor(props) {
    super(props);
  }

  /**
   * 通过props传递的内容，在react组件对象上保存extraAttr，然后将此对象的内容设置到dom对象的属性中
   * @param {*} props
   */
  setAttributes(props) {
    let containerStyle, sliderStyle;

    let w = this.unitConvertor(props["width"]);
    let h = this.unitConvertor(props["height"]);
    let direction = props['direction'];

    containerStyle = {
      ...containerStyle,
      width: w,
      height: h,
    }

    switch (direction) {
      case 'row': {
        containerStyle = { ...containerStyle, ...styles.row.container };
        sliderStyle = { ...sliderStyle, ...styles.row.slider };
        break;
      }
      case 'column': {
        containerStyle = { ...containerStyle, ...styles.column.container };
        sliderStyle = { ...sliderStyle, ...styles.column.slider };
        break;
      }
    }

    return { containerStyle, sliderStyle };
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

  setClassName() {
    const { className } = this.props;
    let cls = classNames(`${style.prefixCls}-${cmpClsName}`, className);
    return cls;
  }

  onSliderMouseDown = (e) => {
    this.wrapper.addEventListener('mousemove', this.onSliderMouseMove);
  }

  onSliderMouseUp = (e) => {
    this.wrapper.removeEventListener('mousemove', this.onSliderMouseMove);
  }

  onSliderMouseMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let offsetX, offsetY;
    let node = this.wrapper;
    const { top, left } = node.getBoundingClientRect();
    offsetX = e.clientX - left;
    offsetY = e.clientY - top;

    this.resizeChilds(offsetX, offsetY);
  }

  /**
   * 根据鼠标位置，计算子容器的尺寸和分界线的位置
   * @param {*} mouseX 鼠标所在位置相对容器的x值
   * @param {*} mouseY 鼠标所在位置相对容器的y值
   */
  resizeChilds(mouseX, mouseY) {
    const { direction } = this.props;
    const { child1, child2, slider, wrapper } = this;
    const width = wrapper.offsetWidth;
    const height = wrapper.offsetHeight;
    const wMax = width - minSize;
    const hMax = height - minSize;
    const sliderW = parseInt(styles.row.slider.width);
    const sliderH = parseInt(styles.column.slider.height);
    switch (direction) {
      case 'row': {
        if (mouseX <= minSize) {
          child1.style.width = `${minSize}px`;
          child2.style.width = `${width - minSize}px`;
          slider.style.left = `${minSize - sliderW / 2}px`;
        } else if (mouseX > minSize && mouseX < wMax) {
          child1.style.width = `${mouseX}px`;
          child2.style.width = `${width - mouseX}px`;
          slider.style.left = `${mouseX - sliderW / 2}px`;
        } else if (mouseX >= wMax) {
          child1.style.width = `${wMax}px`;
          child2.style.width = `${minSize}px`;
          slider.style.left = `${wMax - sliderW / 2}px`;
        }
        break;
      }
      case 'column': {
        if (mouseY <= minSize) {
          child1.style.height = `${minSize}px`;
          child2.style.height = `${height - minSize}px`;
          slider.style.top = `${minSize - sliderH / 2}px`;
        } else if (mouseY > minSize && mouseY < hMax) {
          child1.style.height = `${mouseY}px`;
          child2.style.height = `${height - mouseY}px`;
          slider.style.top = `${mouseY - sliderH / 2}px`;
        } else if (mouseY >= hMax) {
          child1.style.height = `${hMax}px`;
          child2.style.height = `${minSize}px`;
          slider.style.top = `${hMax - sliderH / 2}px`;
        }
        break;
      }
    }
  }

  /**
   * 从children中获取两个子区域的子元素
   * @param {*} elements 容器组件的children
   */
  getChildElements(elements) {
    const { direction } = this.props;
    let children1 = null,
      children2 = null;
    switch (direction) {
      case 'row': {
        children1 = this.findAttrElement(elements, 'slot', 'left');
        children2 = this.findAttrElement(elements, 'slot', 'right');

        if (!children1 || !children2) {
          throw new Error('分隔容器组件需要两个包含slot属性的子元素，水平分隔时，属性值分别为left和right；竖直分隔时，属性值分别为top和bottom');
        }
        break;
      }
      case 'column': {
        children1 = this.findAttrElement(elements, 'slot', 'top');
        children2 = this.findAttrElement(elements, 'slot', 'bottom');

        if (!children1 || !children2) {
          throw new Error('分隔容器组件需要两个包含slot属性的子元素，水平分隔时，属性值分别为left和right；竖直分隔时，属性值分别为top和bottom');
        }
        break;
      }
    }
    return { children1, children2 };
  }

  /**
   * 从元素数组中，找到包含有相应属性，且属性值为val的元素
   * @param {*} array 数组元素
   * @param {*} attr 属性
   * @param {*} val 属性值
   */
  findAttrElement(array, attr, val) {
    if (!array) {
      return undefined;
    }

    return array.find(item => {
      return item.props.hasOwnProperty(attr) && (item.props[attr] === val);
    });
  }

  render() {
    const { containerStyle, sliderStyle } = this.setAttributes(this.props);
    const cls = this.setClassName();

    const { children } = this.props;
    const { children1, children2 } = this.getChildElements(children);

    return (
      <div className={cls} style={containerStyle} ref={wrapper => this.wrapper = wrapper}>
        <div className={`${cls}-child1`} ref={child1 => this.child1 = child1}>{children1}</div>
        <div className={`${cls}-child2`} ref={child2 => this.child2 = child2}>{children2}</div>
        <span className={`${cls}-slider`}
          ref={sp => this.slider = sp}
          style={sliderStyle}
          onMouseDown={this.onSliderMouseDown}
          onMouseUp={this.onSliderMouseUp}></span>
      </div>
    );
  }
}