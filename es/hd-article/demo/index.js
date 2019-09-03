import "antd/es/divider/style/css";
import _Divider from "antd/es/divider";
import "antd/es/icon/style/css";
import _Icon from "antd/es/icon";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";

var Demo =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Demo, _Component);

  function Demo(props) {
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

  var _proto = Demo.prototype;

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
  } //点赞
  ;

  _proto.render = function render() {
    var data = this.props.data;
    var voteStatus = this.state.voteStatus;
    return React.createElement("div", {
      className: "article-container"
    }, React.createElement("h1", null, data.title ? data.title : ''), React.createElement("div", {
      className: "subheader"
    }, data.blockName ? React.createElement("span", null, "\u677F\u5757: ", data.blockName) : '', data.ownerName ? React.createElement("span", null, "\u4F5C\u8005: ", data.ownerName) : '', data.viewCount ? React.createElement("span", null, React.createElement(_Icon, {
      type: "eye"
    }), React.createElement("span", null, data.viewCount)) : '', data.replyCount ? React.createElement("span", null, React.createElement(_Icon, {
      type: "message"
    }), React.createElement("span", null, data.replyCount)) : '', data.voteCount ? React.createElement("span", null, React.createElement(_Icon, {
      type: "like"
    }), React.createElement("span", null, data.voteCount)) : '', data.creationDate ? React.createElement("span", null, "\u53D1\u8868\u4E8E: ", data.creationDate) : ''), React.createElement("div", {
      className: "content",
      dangerouslySetInnerHTML: {
        __html: data.content
      }
    }), React.createElement(_Divider, {
      style: {
        height: '2px'
      }
    }), React.createElement("div", {
      className: "ent-good"
    }, React.createElement("div", null, React.createElement("div", {
      onClick: this.entGoog.bind(this)
    }, React.createElement(_Icon, {
      type: "like",
      theme: voteStatus ? 'filled' : 'outlined'
    }), React.createElement("p", null, voteStatus ? '已点赞' : '点赞')), React.createElement("p", null, data.voteCount, "\u4EBA\u5DF2\u8D5E"))));
  };

  return Demo;
}(Component);

export default Demo;
//# sourceMappingURL=index.js.map