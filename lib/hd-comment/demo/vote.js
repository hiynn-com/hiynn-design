"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var Vote =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(Vote, _Component);

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
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
      className: "time-style",
      style: {
        paddingRight: 5
      }
    }, _react["default"].createElement(_icon["default"], {
      type: "like",
      theme: action === 'liked' ? 'filled' : 'outlined',
      onClick: this.like
    }), _react["default"].createElement("span", {
      style: {
        paddingLeft: 5,
        cursor: 'auto'
      }
    }, like)), _react["default"].createElement("span", {
      className: "time-style",
      style: {
        paddingRight: 5
      }
    }, _react["default"].createElement(_icon["default"], {
      type: "dislike",
      theme: action === 'disliked' ? 'filled' : 'outlined',
      onClick: this.dislike
    }), _react["default"].createElement("span", {
      style: {
        paddingLeft: 5,
        cursor: 'auto'
      }
    }, dislike)));
  };

  return Vote;
}(_react.Component);

var _default = Vote;
exports["default"] = _default;
//# sourceMappingURL=vote.js.map