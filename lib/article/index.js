"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("antd/lib/divider/style");

var _divider = _interopRequireDefault(require("antd/lib/divider"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactIf = require("react-if");

var Article = function (_Component) {
  (0, _inheritsLoose2.default)(Article, _Component);

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
    return _react.default.createElement("div", {
      className: "article-container"
    }, _react.default.createElement("h1", null, data.title ? data.title : ""), _react.default.createElement("div", {
      className: "subheader"
    }, _react.default.createElement(_reactIf.When, {
      condition: data.blockName
    }, _react.default.createElement("span", null, "\u677F\u5757: ", data.blockName)), _react.default.createElement(_reactIf.When, {
      condition: data.ownerName
    }, _react.default.createElement("span", null, "\u4F5C\u8005: ", data.ownerName)), _react.default.createElement(_reactIf.When, {
      condition: data.viewCount
    }, _react.default.createElement("span", null, _react.default.createElement(_icon.default, {
      type: "eye"
    }), _react.default.createElement("span", null, data.viewCount))), _react.default.createElement(_reactIf.When, {
      condition: data.replyCount
    }, _react.default.createElement("span", null, _react.default.createElement(_icon.default, {
      type: "message"
    }), _react.default.createElement("span", null, data.replyCount))), _react.default.createElement(_reactIf.When, {
      condition: data.voteCount
    }, _react.default.createElement("span", null, _react.default.createElement(_icon.default, {
      type: "like"
    }), _react.default.createElement("span", null, data.voteCount))), _react.default.createElement(_reactIf.When, {
      condition: data.creationDate
    }, _react.default.createElement("span", null, "\u53D1\u8868\u4E8E: ", data.creationDate))), _react.default.createElement("div", {
      className: "content",
      dangerouslySetInnerHTML: {
        __html: data.content
      }
    }), _react.default.createElement(_divider.default, null), _react.default.createElement("div", {
      className: "ent-good"
    }, _react.default.createElement("div", null, _react.default.createElement("div", {
      onClick: this.entGoog.bind(this)
    }, _react.default.createElement(_icon.default, {
      type: "like",
      theme: voteStatus ? "filled" : "outlined"
    }), _react.default.createElement("p", null, voteStatus ? "已点赞" : "点赞")), _react.default.createElement("p", null, data.voteCount, "\u4EBA\u5DF2\u8D5E"))));
  };

  return Article;
}(_react.Component);

var _default = Article;
exports.default = _default;
//# sourceMappingURL=index.js.map