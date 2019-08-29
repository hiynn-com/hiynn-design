import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { style } from "../context/style-context";

// 组件容器的类名，前面需加上前缀‘hd’
const cmpClsName = 'codezone';

// 宽高的props输入验证函数
const sizeValidationFn = (props, propName, componentName) => {
  const val = props[propName];
  const reg = /[0-9]+%?/g;
  if (!reg.test(val)) {
    return new Error(`传给组件${componentName}的属性${propName}的值不合法，校验失败`);
  }
}

export default class CodeZone extends Component {

  // 类型检查
  static propTypes = {
    width: sizeValidationFn,
    height: sizeValidationFn,
  };

  // 默认props
  static defaultProps = {
    width: '100%',                          // 宽度
    height: '150',                          // 高度
  };

  constructor(props) {
    super(props);
    this.state = {
      lineNums: ''
    }
  }

  /**
   *  文本框输入处理函数
   *  此文本框用于显示代码，及行数。不允许自动换行，根据换行符 \n 的个数来判断行数
   */
  onTextChange = (e) => {
    const event = e || window.event;
    const val = event.target.value;
    // 若文本框内容为空，不显示行数
    if (val.length === 0) {
      this.showLineNum(0);
    } else {
      // 否则，默认行数为1，然后开始计算换行符个数
      const reg = /\n/g;
      let lines = 1;
      while (reg.exec(val)) {
        lines = lines + 1;
      }
      this.showLineNum(lines);
    }
    // this.props.changeArea(val);
  };

  /**
   * 更改代码行数显示列的内容，根据传来的行数，生成如1，2，4，5...此类的数列字符串，通过setState设置
   * @param {*} num 
   */
  showLineNum(num) {
    let numStr = '';
    for (var i = 1; i <= num; i++) {
      numStr = numStr + i + '\n';
    }
    this.setState({
      ...this.state,
      lineNums: numStr
    });
  }

  /**
   *  文本区域滚动条滚动的处理函数
   *  此函数获取p元素，将文本域元素的scrollTop值赋给p元素，达到同步滚动的效果
   */
  onScroll = (e) => {
    const event = e || window.event;
    const txtDom = event.target;
    const scrollVal = txtDom.scrollTop;
    const pDOM = txtDom.previousSibling;
    pDOM.scrollTop = scrollVal;
  };

  /**
   * 获取类名
   */
  setClassName() {
    const { className } = this.props;
    let cls = classNames(`${style.prefixCls}-${cmpClsName}`, className);
    return cls;
  }

  /**
   * 获取宽高的对象
   */
  getSize() {
    return {
      width: this.unitConvertor(this.props.width),
      height: this.unitConvertor(this.props.height),
    }
  }

  /**
   * 输入数字，则后面添加单位px，输入百分比则原样输出
   * @param {*} val 
   */
  unitConvertor(val) {
    if (String(val).includes('%')) {
      return val;
    } else {
      return val + 'px';
    }
  }

  render() {
    const size = this.getSize();
    const cls = this.setClassName();

    return (
      <div className={cls} style={size}>
        <p className={`${cls}-p`}>
          {this.state.lineNums}
        </p>

        <textarea className={`${cls}-textarea`}
          onChange={this.onTextChange}
          onScroll={this.onScroll}>
        </textarea>
      </div>
    )
  }
}