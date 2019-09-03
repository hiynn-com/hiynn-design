import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style';

var HdCard =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(HdCard, _Component);

  function HdCard(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.toFixed = function (num, s) {
      var times = Math.pow(10, s);
      var des = num * times + 0.5;
      des = parseInt(des, 10) / times;
      return des + '';
    };

    _this.setPrecision = function (num, s) {
      if (/^[0-9]*$/.test(num)) {
        //参数为整数
        var str = '';

        if (s > 0) {
          for (var i = 0; i < s; i++) {
            str += '0';
          }

          num = num.toString() + '.' + str;
        }
      } else if (/^(-?\d+)(\.\d+)?$/.test(num)) {
        //参数为浮点数
        var len = num.toString().split(".")[1].length;
        var _str = '';

        if (len < s) {
          //原数字小数位小于指定小数
          for (var _i = 0; _i < s - len; _i++) {
            _str += '0';
          }

          num = num.toString() + _str;
        } else if (len > s) {
          //原数字小数位大于指定小数
          num = _this.toFixed(num, s);
        }
      }

      return num;
    };

    _this.state = {
      value: 0,
      dataArray: []
    };
    return _this;
  }

  var _proto = HdCard.prototype;

  _proto.componentWillMount = function componentWillMount() {
    var _this$props = this.props,
        value = _this$props.value,
        precision = _this$props.precision,
        data = _this$props.data;
    this.setState({
      value: this.setPrecision(value, precision)
    }); //遍历data数组并给每一项添加key值

    if (data.length) {
      var tempArr = [].concat(data);
      tempArr.map(function (item, index) {
        return item.key = index;
      });
      this.setState({
        dataArray: tempArr
      });
    }
  } //指定数值设置精度
  ;

  _proto.render = function render() {
    var _this$props2 = this.props,
        title = _this$props2.title,
        type = _this$props2.type,
        description = _this$props2.description,
        className = _this$props2.className,
        style = _this$props2.style;
    var _this$state = this.state,
        value = _this$state.value,
        dataArray = _this$state.dataArray;
    return React.createElement("div", {
      className: 'hd-card-wrap' + ' ' + type + ' ' + className,
      style: style
    }, !!title ? React.createElement("div", {
      className: "hd-card-title"
    }, title) : '', React.createElement("div", {
      className: "hd-card-value"
    }, value), React.createElement("div", {
      className: "hd-card-desc"
    }, description), React.createElement("div", {
      className: "hd-card-content"
    }, dataArray.map(function (item) {
      return React.createElement("div", {
        className: "hd-card-content-cell",
        key: item.key
      }, React.createElement("span", null, item.label), React.createElement("span", null, item.content));
    })));
  };

  return HdCard;
}(Component);

HdCard.defaultProps = {
  data: [],
  title: '',
  value: 0,
  type: 'inline',
  precision: 0,
  description: '',
  className: ''
};
HdCard.propTypes = {
  data: PropTypes.array,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  precision: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(['block', 'inline'])
};
export default HdCard;
//# sourceMappingURL=index.js.map