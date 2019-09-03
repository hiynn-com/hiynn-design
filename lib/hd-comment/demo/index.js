"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

require("antd/es/divider/style/css");

var _divider = _interopRequireDefault(require("antd/es/divider"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _comment = _interopRequireDefault(require("./comment"));

var Demo =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(Demo, _Component);

  function Demo(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.replyComment = function (e) {
      var commentId = '';
      var time = (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss');
      var value = e.target.previousSibling.previousSibling.firstElementChild.value;

      _this.props.replySubmit(commentId, value, time);
    };

    _this.resetComment = function (e) {
      e.target.previousSibling.firstElementChild.value = '';

      _this.setState({
        info: "\u8FD8\u53EF\u4EE5\u8F93\u5165" + _this.props.maxLength + "\u4E2A\u5B57\uFF01"
      });
    };

    _this.state = {
      maxLength: 0,
      isVote: true,
      info: '',
      data: []
    };
    return _this;
  }

  var _proto = Demo.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      maxLength: this.props.maxLength,
      isVote: this.props.isVote,
      data: this.props.data
    });
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextprops) {
    if (this.props != nextprops) {
      this.setState({
        maxLength: nextprops.maxLength,
        isVote: nextprops.isVote,
        data: nextprops.data
      });
    }
  };

  _proto.changeWords = function changeWords(e) {
    var maxLength = this.state.maxLength;
    var val = e.target.value;
    var length = val.length;

    if (length > maxLength) {
      e.target.nextSibling.value = "\u4E0D\u80FD\u8F93\u5165\u8D85\u8FC7" + maxLength + "\u4E2A\u5B57!";
      e.target.value = val.slice(0, maxLength);
    } else {
      e.target.nextSibling.value = "\u8FD8\u53EF\u4EE5\u8F93\u5165" + (maxLength - length) + "\u4E2A\u5B57\uFF01";
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$state = this.state,
        data = _this$state.data,
        maxLength = _this$state.maxLength,
        isVote = _this$state.isVote;
    return _react["default"].createElement("div", {
      style: {
        backgroundColor: "#fff"
      }
    }, _react["default"].createElement("div", {
      className: "answer-first"
    }, _react["default"].createElement("div", null, _react["default"].createElement("textarea", {
      maxLength: maxLength,
      onChange: this.changeWords.bind(this)
    }), _react["default"].createElement("input", {
      disabled: true,
      value: this.state.info
    })), _react["default"].createElement(_button["default"], {
      onClick: this.resetComment.bind(this)
    }, "\u91CD\u7F6E"), _react["default"].createElement(_button["default"], {
      type: "primary",
      onClick: this.replyComment.bind(this)
    }, "\u56DE\u590D")), _react["default"].createElement(_divider["default"], null), data.map(function (val, index) {
      return _react["default"].createElement(_comment["default"], {
        key: index,
        data: val,
        maxLength: maxLength,
        isVote: isVote,
        replySubmit: _this2.props.replySubmit,
        voteClick: _this2.props.voteClick
      });
    }));
  };

  return Demo;
}(_react.Component);

var _default = Demo;
exports["default"] = _default;
//# sourceMappingURL=index.js.map