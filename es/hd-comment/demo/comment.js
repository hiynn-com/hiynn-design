import "antd/es/button/style/css";
import _Button from "antd/es/button";
import "antd/es/avatar/style/css";
import _Avatar from "antd/es/avatar";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";
import Vote from './vote';
import moment from 'moment';

var Comment =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Comment, _Component);

  function Comment(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.replyComment = function (commentId, e) {
      var time = moment().format('YYYY-MM-DD HH:mm:ss');
      var value = e.target.previousSibling.previousSibling.firstElementChild.value;

      _this.props.replySubmit(commentId, value, time);
    };

    _this.showCommentTag = function (e) {
      e.currentTarget.nextSibling.style.display = 'block';
    };

    _this.closeComment = function (e) {
      e.target.previousSibling.firstElementChild.value = '';

      _this.setState({
        info: "\u8FD8\u53EF\u4EE5\u8F93\u5165" + _this.props.maxLength + "\u4E2A\u5B57\uFF01"
      });

      e.target.parentNode.style.display = 'none';
    };

    _this.showCommentAll = function () {
      _this.setState({
        showCommentAll: true
      });
    };

    _this.mergeComment = function () {
      _this.setState({
        showCommentAll: false
      });
    };

    _this.voteClick = function (val, commentId) {
      _this.props.voteClick(val, commentId);
    };

    _this.state = {
      maxLength: 0,
      isVote: true,
      info: '',
      showCommentAll: false,
      data: [{
        author: "张三",
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        creationDate: "2019-08-28",
        commentId: "111",
        content: "66666666666666666667",
        like: 10,
        dislike: 3,
        children: [{
          author: "张三",
          avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          creationDate: "2019-08-28",
          commentId: "222",
          content: "65345436534765537564475788758",
          like: 10,
          dislike: 3
        }]
      }, {
        author: "张三",
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        creationDate: "2019-08-28",
        commentId: "111",
        content: "66666666666666666667",
        like: 10,
        dislike: 3,
        children: [{
          author: "张三",
          avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          creationDate: "2019-08-28",
          commentId: "222",
          content: "65345436534765537564475788758",
          like: 10,
          dislike: 3
        }]
      }]
    };
    return _this;
  }

  var _proto = Comment.prototype;

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
        showCommentAll = _this$state.showCommentAll,
        data = _this$state.data,
        maxLength = _this$state.maxLength,
        isVote = _this$state.isVote;
    return React.createElement("div", {
      className: "comment-box",
      key: data.commentId
    }, React.createElement("div", {
      className: "comment-avatar"
    }, React.createElement(_Avatar, {
      src: data.avatar,
      alt: data.author
    })), React.createElement("div", {
      style: {
        width: '100%'
      }
    }, React.createElement("div", null, React.createElement("span", {
      className: "author-style"
    }, data.author ? data.author : '匿名'), React.createElement("span", {
      className: "time-style"
    }, data.creationDate)), React.createElement("p", {
      className: "content-style"
    }, data.content), React.createElement("div", {
      style: {
        width: '100%'
      }
    }, isVote ? React.createElement(Vote, {
      voteClick: this.voteClick,
      commentId: data.commentId,
      like: data.like,
      dislike: data.dislike
    }) : '', React.createElement("span", {
      onClick: this.showCommentTag.bind(this),
      className: "click-style"
    }, "\u56DE\u590D"), React.createElement("div", {
      className: "answer-second"
    }, React.createElement("div", null, React.createElement("textarea", {
      maxLength: maxLength,
      onChange: this.changeWords.bind(this)
    }), React.createElement("input", {
      disabled: true,
      value: this.state.info
    })), React.createElement(_Button, {
      onClick: this.closeComment.bind(this)
    }, "\u53D6\u6D88"), React.createElement(_Button, {
      type: "primary",
      onClick: this.replyComment.bind(this, data.commentId)
    }, "\u56DE\u590D"))), React.createElement("div", {
      className: "comment-reply"
    }, data.children ? showCommentAll == false ? data.children.slice(0, 3).map(function (item, index) {
      return React.createElement("div", {
        key: index
      }, React.createElement("div", {
        className: "comment-avatar"
      }, React.createElement(_Avatar, {
        src: item.avatar,
        alt: item.author
      })), React.createElement("div", null, React.createElement("div", null, React.createElement("span", {
        className: "author-style"
      }, item.author ? item.author : '匿名'), React.createElement("span", {
        className: "time-style"
      }, item.creationDate)), React.createElement("p", {
        className: "content-style"
      }, item.content), isVote ? React.createElement(Vote, {
        voteClick: _this2.voteClick,
        commentId: item.commentId,
        like: item.like,
        dislike: item.dislike
      }) : ''));
    }) : data.children.map(function (item, index) {
      return React.createElement("div", {
        key: index
      }, React.createElement("div", {
        className: "comment-avatar"
      }, React.createElement(_Avatar, {
        src: item.avatar,
        alt: item.author
      })), React.createElement("div", null, React.createElement("div", null, React.createElement("span", {
        className: "author-style"
      }, item.author ? item.author : '匿名'), React.createElement("span", {
        className: "time-style"
      }, item.creationDate)), React.createElement("p", {
        className: "content-style"
      }, item.content), isVote ? React.createElement(Vote, {
        voteClick: _this2.voteClick,
        commentId: item.commentId,
        like: item.like,
        dislike: item.dislike
      }) : ''));
    }) : null, data.children ? data.children.length > 3 ? showCommentAll == false ? React.createElement("p", {
      className: "click-style",
      onClick: this.showCommentAll
    }, "\u67E5\u770B\u5168\u90E8", data.children.length, "\u6761\u56DE\u590D >") : React.createElement("p", {
      className: "click-style",
      onClick: this.mergeComment
    }, "\u6536\u8D77") : '' : '')));
  };

  return Comment;
}(Component);

export default Comment;
//# sourceMappingURL=comment.js.map