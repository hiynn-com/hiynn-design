import "antd/lib/comment/style";
import _Comment from "antd/lib/comment";
import _extends from "@babel/runtime/helpers/esm/extends";
import "antd/lib/tooltip/style";
import _Tooltip from "antd/lib/tooltip";
import "antd/lib/icon/style";
import _Icon from "antd/lib/icon";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";
import moment from 'moment';
import Reply from "./reply";

var Comments = function (_Component) {
  _inheritsLoose(Comments, _Component);

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
    var actions = [React.createElement("span", {
      key: "comment-basic-like"
    }, React.createElement(_Tooltip, {
      title: "Like"
    }, React.createElement(_Icon, {
      type: "like",
      theme: action === 'like' ? 'filled' : 'outlined',
      onClick: this.like
    })), React.createElement("span", {
      style: {
        paddingLeft: 8,
        cursor: 'auto'
      }
    }, likes)), React.createElement("span", {
      key: " key=\"comment-basic-dislike\""
    }, React.createElement(_Tooltip, {
      title: "Dislike"
    }, React.createElement(_Icon, {
      type: "dislike",
      theme: action === 'dislike' ? 'filled' : 'outlined',
      onClick: this.dislike
    })), React.createElement("span", {
      style: {
        paddingLeft: 8,
        cursor: 'auto'
      }
    }, dislikes))];

    if (isMain === false) {
      actions.push(React.createElement("span", {
        onClick: this.replyClick,
        key: "comment-basic-reply-to"
      }, "\u56DE\u590D"));
    }

    return React.createElement("div", null, React.createElement(_Comment, _extends({
      actions: actions
    }, singleComment), replyShow ? React.createElement(Reply, {
      loginInfo: this.props.loginInfo,
      commentid: singleComment.commentid,
      replySubmit: this.props.replySubmit,
      onCancel: this.onCancel
    }) : '', this.props.children));
  };

  return Comments;
}(Component);

export default Comments;
//# sourceMappingURL=comment.js.map