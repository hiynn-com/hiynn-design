import "antd/lib/comment/style";
import _Comment from "antd/lib/comment";
import "antd/lib/avatar/style";
import _Avatar from "antd/lib/avatar";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import "antd/lib/button/style";
import _Button from "antd/lib/button";
import "antd/lib/form/style";
import _Form from "antd/lib/form";
import "antd/lib/input/style";
import _Input from "antd/lib/input";
import React, { Component } from "react";
import moment from 'moment';
var TextArea = _Input.TextArea;

var Editor = function Editor(_ref) {
  var onCancel = _ref.onCancel,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      submitting = _ref.submitting,
      value = _ref.value;
  return React.createElement("div", null, React.createElement(_Form.Item, null, React.createElement(TextArea, {
    rows: 4,
    onChange: onChange,
    value: value
  })), React.createElement(_Form.Item, {
    style: {
      textAlign: 'right'
    }
  }, React.createElement(_Button, {
    onClick: onCancel,
    style: {
      marginRight: 10
    }
  }, "\u53D6\u6D88"), React.createElement(_Button, {
    htmlType: "submit",
    loading: submitting,
    onClick: onSubmit,
    type: "primary"
  }, "\u8BC4\u8BBA")));
};

var Reply = function (_Component) {
  _inheritsLoose(Reply, _Component);

  function Reply(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleSubmit = function () {
      if (!_this.state.value) {
        return;
      }

      var value = _this.state.value;
      var time = moment().format('YYYY-MM-DD HH:mm:ss');

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
    return React.createElement(_Comment, {
      avatar: React.createElement(_Avatar, {
        src: loginInfo.loginAvatar,
        alt: loginInfo.loginName
      }),
      content: React.createElement(Editor, {
        onChange: this.handleChange,
        onSubmit: this.handleSubmit,
        submitting: submitting,
        onCancel: this.onCancel,
        value: value
      })
    });
  };

  return Reply;
}(Component);

export default Reply;
//# sourceMappingURL=reply.js.map