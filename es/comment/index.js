import "antd/lib/divider/style";
import _Divider from "antd/lib/divider";
import "antd/lib/list/style";
import _List from "antd/lib/list";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";
import CommentL from './comment';
import Reply from "./reply";

var Demo = function (_Component) {
  _inheritsLoose(Demo, _Component);

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
      return React.createElement(_List, {
        dataSource: comments,
        itemLayout: "horizontal",
        renderItem: function renderItem(props) {
          return props.childlist && props.childlist.length > 0 ? React.createElement(CommentL, {
            voteClick: _this2.props.voteClick,
            singleComment: props,
            isMain: false,
            loginInfo: _this2.props.loginInfo,
            replySubmit: _this2.props.replySubmit
          }, replyAllShow ? React.createElement(_List, {
            dataSource: props.childlist,
            itemLayout: "horizontal",
            renderItem: function renderItem(item) {
              return React.createElement(CommentL, {
                voteClick: _this2.props.voteClick,
                singleComment: item
              });
            }
          }) : React.createElement(_List, {
            dataSource: props.childlist.slice(0, 3),
            itemLayout: "horizontal",
            renderItem: function renderItem(item) {
              return React.createElement(CommentL, {
                voteClick: _this2.props.voteClick,
                singleComment: item
              });
            }
          }), props.childlist.length > 3 ? replyAllShow ? React.createElement("p", {
            onClick: _this2.isShowAllReply,
            style: pStyle
          }, "\u6536\u8D77") : React.createElement("p", {
            onClick: _this2.isShowAllReply,
            style: pStyle
          }, "\u5C55\u793A\u5168\u90E8", props.childlist.length, "\u6761\u8BC4\u8BBA >>") : '') : React.createElement(CommentL, {
            singleComment: props,
            voteClick: _this2.props.voteClick,
            isMain: false,
            loginInfo: _this2.props.loginInfo,
            replySubmit: _this2.props.replySubmit
          });
        }
      });
    };

    return React.createElement("div", null, React.createElement(Reply, {
      loginInfo: this.props.loginInfo,
      isMain: true,
      replySubmit: this.props.replySubmit
    }), React.createElement(_Divider, null), data.length > 0 && React.createElement(CommentList, {
      comments: data
    }));
  };

  return Demo;
}(Component);

export default Demo;
//# sourceMappingURL=index.js.map