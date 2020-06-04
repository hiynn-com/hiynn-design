import "antd/lib/divider/style";
import _Divider from "antd/lib/divider";
import "antd/lib/icon/style";
import _Icon from "antd/lib/icon";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";
import { When } from "react-if";

var Article = function (_Component) {
  _inheritsLoose(Article, _Component);

  function Article(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.entGoog = function () {
      _this.setState(function (preState) {
        return {
          voteStatus: !preState.voteStatus
        };
      }, function () {
        _this.props.giveLike(_this.state.voteStatus);
      });
    };

    _this.state = {
      voteStatus: false,
      data: {
        title: null,
        blockName: null,
        ownerName: null,
        viewCount: null,
        replyCount: null,
        voteCount: null,
        creationDate: null,
        content: null
      }
    };
    return _this;
  }

  var _proto = Article.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      voteStatus: this.props.voteStatus,
      data: this.props.data
    });
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextprops) {
    if (this.props != nextprops) {
      this.setState({
        voteStatus: nextprops.voteStatus,
        data: nextprops.data
      });
    }
  };

  _proto.render = function render() {
    var data = this.props.data;
    var voteStatus = this.state.voteStatus;
    return React.createElement("div", {
      className: "article-container"
    }, React.createElement("h1", null, data.title ? data.title : ""), React.createElement("div", {
      className: "subheader"
    }, React.createElement(When, {
      condition: data.blockName
    }, React.createElement("span", null, "\u677F\u5757: ", data.blockName)), React.createElement(When, {
      condition: data.ownerName
    }, React.createElement("span", null, "\u4F5C\u8005: ", data.ownerName)), React.createElement(When, {
      condition: data.viewCount
    }, React.createElement("span", null, React.createElement(_Icon, {
      type: "eye"
    }), React.createElement("span", null, data.viewCount))), React.createElement(When, {
      condition: data.replyCount
    }, React.createElement("span", null, React.createElement(_Icon, {
      type: "message"
    }), React.createElement("span", null, data.replyCount))), React.createElement(When, {
      condition: data.voteCount
    }, React.createElement("span", null, React.createElement(_Icon, {
      type: "like"
    }), React.createElement("span", null, data.voteCount))), React.createElement(When, {
      condition: data.creationDate
    }, React.createElement("span", null, "\u53D1\u8868\u4E8E: ", data.creationDate))), React.createElement("div", {
      className: "content",
      dangerouslySetInnerHTML: {
        __html: data.content
      }
    }), React.createElement(_Divider, null), React.createElement("div", {
      className: "ent-good"
    }, React.createElement("div", null, React.createElement("div", {
      onClick: this.entGoog.bind(this)
    }, React.createElement(_Icon, {
      type: "like",
      theme: voteStatus ? "filled" : "outlined"
    }), React.createElement("p", null, voteStatus ? "已点赞" : "点赞")), React.createElement("p", null, data.voteCount, "\u4EBA\u5DF2\u8D5E"))));
  };

  return Article;
}(Component);

export default Article;
//# sourceMappingURL=index.js.map