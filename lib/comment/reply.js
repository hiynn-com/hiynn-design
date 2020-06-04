"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("antd/lib/comment/style");

var _comment = _interopRequireDefault(require("antd/lib/comment"));

require("antd/lib/avatar/style");

var _avatar = _interopRequireDefault(require("antd/lib/avatar"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var TextArea = _input.default.TextArea;

var Editor = function Editor(_ref) {
  var onCancel = _ref.onCancel,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      submitting = _ref.submitting,
      value = _ref.value;
  return _react.default.createElement("div", null, _react.default.createElement(_form.default.Item, null, _react.default.createElement(TextArea, {
    rows: 4,
    onChange: onChange,
    value: value
  })), _react.default.createElement(_form.default.Item, {
    style: {
      textAlign: 'right'
    }
  }, _react.default.createElement(_button.default, {
    onClick: onCancel,
    style: {
      marginRight: 10
    }
  }, "\u53D6\u6D88"), _react.default.createElement(_button.default, {
    htmlType: "submit",
    loading: submitting,
    onClick: onSubmit,
    type: "primary"
  }, "\u8BC4\u8BBA")));
};

var Reply = function (_Component) {
  (0, _inheritsLoose2.default)(Reply, _Component);

  function Reply(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleSubmit = function () {
      if (!_this.state.value) {
        return;
      }

      var value = _this.state.value;
      var time = (0, _moment.default)().format('YYYY-MM-DD HH:mm:ss');

      if (_this.props.commentid) {
        var commentid = _this.props.commentid;

        _this.props.replySubmit(commentid, value, time);
      } else {
        var _commentid = "";

        _this.props.replySubmit(_commentid, value, time);
      }

      _this.setState({
        value: ''
      });
    };

    _this.handleChange = function (e) {
      _this.setState({
        value: e.target.value
      });
    };

    _this.onCancel = function () {
      if (_this.props.isMain === true) {
        _this.setState({
          value: ''
        });
      } else {
        _this.props.onCancel();
      }
    };

    _this.state = {
      value: '',
      submitting: false
    };
    return _this;
  }

  var _proto = Reply.prototype;

  _proto.render = function render() {
    var _this$state = this.state,
        submitting = _this$state.submitting,
        value = _this$state.value;
    var loginInfo = this.props.loginInfo;
    return _react.default.createElement(_comment.default, {
      avatar: _react.default.createElement(_avatar.default, {
        src: loginInfo.loginAvatar,
        alt: loginInfo.loginName
      }),
      content: _react.default.createElement(Editor, {
        onChange: this.handleChange,
        onSubmit: this.handleSubmit,
        submitting: submitting,
        onCancel: this.onCancel,
        value: value
      })
    });
  };

  return Reply;
}(_react.Component);

var _default = Reply;
exports.default = _default;
//# sourceMappingURL=reply.js.map