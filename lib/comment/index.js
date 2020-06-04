"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("antd/lib/divider/style");

var _divider = _interopRequireDefault(require("antd/lib/divider"));

require("antd/lib/list/style");

var _list = _interopRequireDefault(require("antd/lib/list"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _comment = _interopRequireDefault(require("./comment"));

var _reply = _interopRequireDefault(require("./reply"));

var Demo = function (_Component) {
  (0, _inheritsLoose2.default)(Demo, _Component);

  function Demo() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      data: [],
      value: '',
      replyAllShow: false
    };

    _this.handleSubmit = function () {
      if (!_this.state.value) {
        return;
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

    _this.isShowAllReply = function () {
      _this.setState(function (preState) {
        return {
          replyAllShow: !preState.replyAllShow
        };
      });
    };

    return _this;
  }

  var _proto = Demo.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      data: this.props.data
    });
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextprops) {
    if (this.props != nextprops) {
      this.setState({
        data: nextprops.data
      });
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$state = this.state,
        data = _this$state.data,
        replyAllShow = _this$state.replyAllShow;
    var pStyle = {
      color: 'blue',
      cursor: 'pointer'
    };

    var CommentList = function CommentList(_ref) {
      var comments = _ref.comments;
      return _react.default.createElement(_list.default, {
        dataSource: comments,
        itemLayout: "horizontal",
        renderItem: function renderItem(props) {
          return props.childlist && props.childlist.length > 0 ? _react.default.createElement(_comment.default, {
            voteClick: _this2.props.voteClick,
            singleComment: props,
            isMain: false,
            loginInfo: _this2.props.loginInfo,
            replySubmit: _this2.props.replySubmit
          }, replyAllShow ? _react.default.createElement(_list.default, {
            dataSource: props.childlist,
            itemLayout: "horizontal",
            renderItem: function renderItem(item) {
              return _react.default.createElement(_comment.default, {
                voteClick: _this2.props.voteClick,
                singleComment: item
              });
            }
          }) : _react.default.createElement(_list.default, {
            dataSource: props.childlist.slice(0, 3),
            itemLayout: "horizontal",
            renderItem: function renderItem(item) {
              return _react.default.createElement(_comment.default, {
                voteClick: _this2.props.voteClick,
                singleComment: item
              });
            }
          }), props.childlist.length > 3 ? replyAllShow ? _react.default.createElement("p", {
            onClick: _this2.isShowAllReply,
            style: pStyle
          }, "\u6536\u8D77") : _react.default.createElement("p", {
            onClick: _this2.isShowAllReply,
            style: pStyle
          }, "\u5C55\u793A\u5168\u90E8", props.childlist.length, "\u6761\u8BC4\u8BBA >>") : '') : _react.default.createElement(_comment.default, {
            singleComment: props,
            voteClick: _this2.props.voteClick,
            isMain: false,
            loginInfo: _this2.props.loginInfo,
            replySubmit: _this2.props.replySubmit
          });
        }
      });
    };

    return _react.default.createElement("div", null, _react.default.createElement(_reply.default, {
      loginInfo: this.props.loginInfo,
      isMain: true,
      replySubmit: this.props.replySubmit
    }), _react.default.createElement(_divider.default, null), data.length > 0 && _react.default.createElement(CommentList, {
      comments: data
    }));
  };

  return Demo;
}(_react.Component);

var _default = Demo;
exports.default = _default;
//# sourceMappingURL=index.js.map