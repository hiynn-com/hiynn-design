"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("antd/lib/comment/style");

var _comment = _interopRequireDefault(require("antd/lib/comment"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/lib/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reply = _interopRequireDefault(require("./reply"));

var Comments = function (_Component) {
  (0, _inheritsLoose2.default)(Comments, _Component);

  function Comments(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.like = function () {
      var action = _this.state.action;
      var likes = _this.state.likes;
      var dislikes = _this.state.dislikes;

      if (action == null) {
        likes += 1;
      } else if (action == 'dislike') {
        likes += 1;
        dislikes -= 1;
      }

      action = 'like';

      _this.props.voteClick(likes, dislikes, _this.state.commentid, action);
    };

    _this.dislike = function () {
      var action = _this.state.action;
      var likes = _this.state.likes;
      var dislikes = _this.state.dislikes;

      if (action == null) {
        dislikes += 1;
      } else if (action == 'like') {
        dislikes += 1;
        likes -= 1;
      }

      action = 'dislike';

      _this.props.voteClick(likes, dislikes, _this.state.commentid, action);
    };

    _this.replyClick = function () {
      _this.setState({
        replyShow: true
      });
    };

    _this.onCancel = function () {
      _this.setState(function (preState) {
        return {
          replyShow: !preState.replyShow
        };
      });
    };

    _this.state = {
      likes: 0,
      dislikes: 0,
      action: null,
      replyShow: false,
      commentid: '',
      singleComment: {}
    };
    return _this;
  }

  var _proto = Comments.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      singleComment: this.props.singleComment,
      likes: this.props.singleComment.likes,
      dislikes: this.props.singleComment.dislikes,
      commentid: this.props.singleComment.commentid,
      action: this.props.singleComment.islike
    });
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextprops) {
    if (this.props != nextprops) {
      this.setState({
        singleComment: nextprops.singleComment,
        likes: this.props.singleComment.likes,
        dislikes: this.props.singleComment.dislikes,
        commentid: this.props.singleComment.commentid,
        action: this.props.singleComment.islike
      });
    }
  };

  _proto.render = function render() {
    var _this$state = this.state,
        replyShow = _this$state.replyShow,
        likes = _this$state.likes,
        dislikes = _this$state.dislikes,
        action = _this$state.action,
        singleComment = _this$state.singleComment;
    var isMain = this.props.isMain;
    var actions = [_react.default.createElement("span", {
      key: "comment-basic-like"
    }, _react.default.createElement(_tooltip.default, {
      title: "Like"
    }, _react.default.createElement(_icon.default, {
      type: "like",
      theme: action === 'like' ? 'filled' : 'outlined',
      onClick: this.like
    })), _react.default.createElement("span", {
      style: {
        paddingLeft: 8,
        cursor: 'auto'
      }
    }, likes)), _react.default.createElement("span", {
      key: " key=\"comment-basic-dislike\""
    }, _react.default.createElement(_tooltip.default, {
      title: "Dislike"
    }, _react.default.createElement(_icon.default, {
      type: "dislike",
      theme: action === 'dislike' ? 'filled' : 'outlined',
      onClick: this.dislike
    })), _react.default.createElement("span", {
      style: {
        paddingLeft: 8,
        cursor: 'auto'
      }
    }, dislikes))];

    if (isMain === false) {
      actions.push(_react.default.createElement("span", {
        onClick: this.replyClick,
        key: "comment-basic-reply-to"
      }, "\u56DE\u590D"));
    }

    return _react.default.createElement("div", null, _react.default.createElement(_comment.default, (0, _extends2.default)({
      actions: actions
    }, singleComment), replyShow ? _react.default.createElement(_reply.default, {
      loginInfo: this.props.loginInfo,
      commentid: singleComment.commentid,
      replySubmit: this.props.replySubmit,
      onCancel: this.onCancel
    }) : '', this.props.children));
  };

  return Comments;
}(_react.Component);

var _default = Comments;
exports.default = _default;
//# sourceMappingURL=comment.js.map