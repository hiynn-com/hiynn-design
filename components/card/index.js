import React, { Component } from "react";
import PropTypes from "prop-types";

class HdCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      dataArray: []
    };
  }

  componentWillMount() {
    const { value, precision, data } = this.props;
    this.setState({
      value: this.setPrecision(value, precision)
    });
    //遍历data数组并给每一项添加key值
    if (data.length) {
      let tempArr = [...data];
      tempArr.map((item, index) => (item.key = index));
      this.setState({
        dataArray: tempArr
      });
    }
  }

  //指定数值设置精度
  toFixed = (num, s) => {
    var times = Math.pow(10, s);
    var des = num * times + 0.5;
    des = parseInt(des, 10) / times;
    return des + "";
  };

  setPrecision = (num, s) => {
    if (/^[0-9]*$/.test(num)) {
      //参数为整数
      let str = "";
      if (s > 0) {
        for (let i = 0; i < s; i++) {
          str += "0";
        }
        num = num.toString() + "." + str;
      }
    } else if (/^(-?\d+)(\.\d+)?$/.test(num)) {
      //参数为浮点数
      let len = num.toString().split(".")[1].length;
      let str = "";
      if (len < s) {
        //原数字小数位小于指定小数
        for (let i = 0; i < s - len; i++) {
          str += "0";
        }
        num = num.toString() + str;
      } else if (len > s) {
        //原数字小数位大于指定小数
        num = this.toFixed(num, s);
      }
    }
    return num;
  };
  render() {
    const { title, type, description, className, style } = this.props;
    const { value, dataArray } = this.state;
    return (
      <div className={"hd-card-wrap" + " " + type + " " + className} style={style}>
        {!!title ? <div className="hd-card-title">{title}</div> : ""}
        <div className="hd-card-value">{value}</div>
        <div className="hd-card-desc">{description}</div>
        <div className="hd-card-content">
          {dataArray.map(item => {
            return (
              <div className="hd-card-content-cell" key={item.key}>
                <span>{item.label}</span>
                <span>{item.content}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
HdCard.defaultProps = {
  data: [],
  title: "",
  value: 0,
  type: "inline",
  precision: 0,
  description: "",
  className: ""
};
HdCard.propTypes = {
  data: PropTypes.array,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  precision: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(["block", "inline"])
};

export default HdCard;
