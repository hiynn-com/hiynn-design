"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styleContext = require("../context/style-context");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// 组件容器的类名，前面需加上前缀‘hd’
var cmpClsName = "codearea"; // 宽高的props输入验证函数

var sizeValidationFn = function sizeValidationFn(props, propName, componentName) {
  var val = props[propName];
  var reg = /[0-9]+%?/g;

  if (!reg.test(val)) {
    return new Error("\u4F20\u7ED9\u7EC4\u4EF6" + componentName + "\u7684\u5C5E\u6027" + propName + "\u7684\u503C\u4E0D\u5408\u6CD5\uFF0C\u6821\u9A8C\u5931\u8D25");
  }
};

var CodeArea =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(CodeArea, _Component);

  // 类型检查
  // 默认props
  function CodeArea(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.onTextChange = function (e) {
      var event = e || window.event;
      var val = event.target.value; // 若文本框内容为空，不显示行数

      if (val.length === 0) {
        _this.showLineNum(0);
      } else {
        // 否则，默认行数为1，然后开始计算换行符个数
        var reg = /\n/g;
        var lines = 1;

        while (reg.exec(val)) {
          lines = lines + 1;
        }

        _this.showLineNum(lines);
      } // this.props.changeArea(val);

    };

    _this.onScroll = function (e) {
      var event = e || window.event;
      var txtDom = event.target;
      var scrollVal = txtDom.scrollTop;
      var pDOM = txtDom.previousSibling;
      pDOM.scrollTop = scrollVal;
    };

    _this.state = {
      lineNums: ""
    };
    return _this;
  }
  /**
   *  文本框输入处理函数
   *  此文本框用于显示代码，及行数。不允许自动换行，根据换行符 \n 的个数来判断行数
   */


  var _proto = CodeArea.prototype;

  /**
   * 更改代码行数显示列的内容，根据传来的行数，生成如1，2，4，5...此类的数列字符串，通过setState设置
   * @param {*} num
   */
  _proto.showLineNum = function showLineNum(num) {
    var numStr = "";

    for (var i = 1; i <= num; i++) {
      numStr = numStr + i + "\n";
    }

    this.setState(_objectSpread({}, this.state, {
      lineNums: numStr
    }));
  }
  /**
   *  文本区域滚动条滚动的处理函数
   *  此函数获取p元素，将文本域元素的scrollTop值赋给p元素，达到同步滚动的效果
   */
  ;

  /**
   * 获取类名
   */
  _proto.setClassName = function setClassName() {
    var className = this.props.className;
    var cls = (0, _classnames["default"])(_styleContext.style.prefixCls + "-" + cmpClsName, className);
    return cls;
  }
  /**
   * 获取宽高的对象
   */
  ;

  _proto.getSize = function getSize() {
    return {
      width: this.unitConvertor(this.props.width),
      height: this.unitConvertor(this.props.height)
    };
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
    var size = this.getSize();
    var cls = this.setClassName();
    return _react["default"].createElement("div", {
      className: cls,
      style: size
    }, _react["default"].createElement("p", {
      className: cls + "-p"
    }, this.state.lineNums), _react["default"].createElement("textarea", {
      className: cls + "-textarea",
      onChange: this.onTextChange,
      onScroll: this.onScroll
    }));
  };

  return CodeArea;
}(_react.Component);

exports["default"] = CodeArea;
CodeArea.propTypes = {
  width: sizeValidationFn,
  height: sizeValidationFn
};
CodeArea.defaultProps = {
  width: "100%",
  // 宽度
  height: "150" // 高度

};
//# sourceMappingURL=index.js.map