"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/avatar/style/css");

var _avatar = _interopRequireDefault(require("antd/es/avatar"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _vote = _interopRequireDefault(require("./vote"));

var _moment = _interopRequireDefault(require("moment"));

var Comment =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(Comment, _Component);

  function Comment(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.replyComment = function (commentId, e) {
      var time = (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss');
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
    return _react["default"].createElement("div", {
      className: "comment-box",
      key: data.commentId
    }, _react["default"].createElement("div", {
      className: "comment-avatar"
    }, _react["default"].createElement(_avatar["default"], {
      src: data.avatar,
      alt: data.author
    })), _react["default"].createElement("div", {
      style: {
        width: '100%'
      }
    }, _react["default"].createElement("div", null, _react["default"].createElement("span", {
      className: "author-style"
    }, data.author ? data.author : '匿名'), _react["default"].createElement("span", {
      className: "time-style"
    }, data.creationDate)), _react["default"].createElement("p", {
      className: "content-style"
    }, data.content), _react["default"].createElement("div", {
      style: {
        width: '100%'
      }
    }, isVote ? _react["default"].createElement(_vote["default"], {
      voteClick: this.voteClick,
      commentId: data.commentId,
      like: data.like,
      dislike: data.dislike
    }) : '', _react["default"].createElement("span", {
      onClick: this.showCommentTag.bind(this),
      className: "click-style"
    }, "\u56DE\u590D"), _react["default"].createElement("div", {
      className: "answer-second"
    }, _react["default"].createElement("div", null, _react["default"].createElement("textarea", {
      maxLength: maxLength,
      onChange: this.changeWords.bind(this)
    }), _react["default"].createElement("input", {
      disabled: true,
      value: this.state.info
    })), _react["default"].createElement(_button["default"], {
      onClick: this.closeComment.bind(this)
    }, "\u53D6\u6D88"), _react["default"].createElement(_button["default"], {
      type: "primary",
      onClick: this.replyComment.bind(this, data.commentId)
    }, "\u56DE\u590D"))), _react["default"].createElement("div", {
      className: "comment-reply"
    }, data.children ? showCommentAll == false ? data.children.slice(0, 3).map(function (item, index) {
      return _react["default"].createElement("div", {
        key: index
      }, _react["default"].createElement("div", {
        className: "comment-avatar"
      }, _react["default"].createElement(_avatar["default"], {
        src: item.avatar,
        alt: item.author
      })), _react["default"].createElement("div", null, _react["default"].createElement("div", null, _react["default"].createElement("span", {
        className: "author-style"
      }, item.author ? item.author : '匿名'), _react["default"].createElement("span", {
        className: "time-style"
      }, item.creationDate)), _react["default"].createElement("p", {
        className: "content-style"
      }, item.content), isVote ? _react["default"].createElement(_vote["default"], {
        voteClick: _this2.voteClick,
        commentId: item.commentId,
        like: item.like,
        dislike: item.dislike
      }) : ''));
    }) : data.children.map(function (item, index) {
      return _react["default"].createElement("div", {
        key: index
      }, _react["default"].createElement("div", {
        className: "comment-avatar"
      }, _react["default"].createElement(_avatar["default"], {
        src: item.avatar,
        alt: item.author
      })), _react["default"].createElement("div", null, _react["default"].createElement("div", null, _react["default"].createElement("span", {
        className: "author-style"
      }, item.author ? item.author : '匿名'), _react["default"].createElement("span", {
        className: "time-style"
      }, item.creationDate)), _react["default"].createElement("p", {
        className: "content-style"
      }, item.content), isVote ? _react["default"].createElement(_vote["default"], {
        voteClick: _this2.voteClick,
        commentId: item.commentId,
        like: item.like,
        dislike: item.dislike
      }) : ''));
    }) : null, data.children ? data.children.length > 3 ? showCommentAll == false ? _react["default"].createElement("p", {
      className: "click-style",
      onClick: this.showCommentAll
    }, "\u67E5\u770B\u5168\u90E8", data.children.length, "\u6761\u56DE\u590D >") : _react["default"].createElement("p", {
      className: "click-style",
      onClick: this.mergeComment
    }, "\u6536\u8D77") : '' : '')));
  };

  return Comment;
}(_react.Component);

var _default = Comment;
exports["default"] = _default;
//# sourceMappingURL=comment.js.map