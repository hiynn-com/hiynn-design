import "antd/es/icon/style/css";
import _Icon from "antd/es/icon";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";

var Vote =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Vote, _Component);

  function Vote(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.like = function () {
      _this.props.voteClick(true, _this.props.commentId);

      _this.setState({
        action: 'liked'
      });
    };

    _this.dislike = function () {
      _this.props.voteClick(false, _this.props.commentId);

      _this.setState({
        action: 'disliked'
      });
    };

    _this.state = {
      action: 'liked'
    };
    return _this;
  }

  var _proto = Vote.prototype;

  _proto.render = function render() {
    var action = this.state.action;
    var _this$props = this.props,
        like = _this$props.like,
        dislike = _this$props.dislike;
    return React.createElement(React.Fragment, null, React.createElement("span", {
      className: "time-style",
      style: {
        paddingRight: 5
      }
    }, React.createElement(_Icon, {
      type: "like",
      theme: action === 'liked' ? 'filled' : 'outlined',
      onClick: this.like
    }), React.createElement("span", {
      style: {
        paddingLeft: 5,
        cursor: 'auto'
      }
    }, like)), React.createElement("span", {
      className: "time-style",
      style: {
        paddingRight: 5
      }
    }, React.createElement(_Icon, {
      type: "dislike",
      theme: action === 'disliked' ? 'filled' : 'outlined',
      onClick: this.dislike
    }), React.createElement("span", {
      style: {
        paddingLeft: 5,
        cursor: 'auto'
      }
    }, dislike)));
  };

  return Vote;
}(Component);

export default Vote;
//# sourceMappingURL=vote.js.map