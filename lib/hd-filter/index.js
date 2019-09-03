"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/message/style/css");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style");

var HdFilter =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(HdFilter, _Component);

  function HdFilter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      filterShow: true,
      filterData: [],
      dictData: []
      /**
       * 参数验证
       */

    };

    _this.tabShow = function () {
      var filterShow = _this.state.filterShow;

      _this.setState({
        filterShow: !filterShow
      });
    };

    _this.changeOption = function (itemData, index, flag) {
      if (!flag) {
        var _this$state = _this.state,
            dictData = _this$state.dictData,
            filterData = _this$state.filterData;
        var filterLists = [].concat(filterData);
        filterLists.push(itemData);
        dictData[index].children.map(function (item) {
          return item.id == itemData.id ? item.checked = true : item;
        });

        _this.setState({
          dictData: dictData,
          filterData: [].concat(filterLists)
        }, function () {
          _this.props.getFilterOptions(_this.state.filterData);
        });
      } else {
        _message2["default"].warning('已选择!', 1);
      }
    };

    _this.deleteOption = function (itemData) {
      var _this$state2 = _this.state,
          dictData = _this$state2.dictData,
          filterData = _this$state2.filterData;
      filterData.splice(filterData.indexOf(itemData), 1);
      dictData.map(function (items) {
        return items.children.map(function (item) {
          return itemData.id == item.id ? item.checked = false : item;
        });
      });

      _this.setState({
        filterData: filterData,
        dictData: dictData
      }, function () {
        _this.props.getFilterOptions(_this.state.filterData);
      });
    };

    return _this;
  }

  var _proto = HdFilter.prototype;

  _proto.componentWillMount = function componentWillMount() {
    var filterData = this.props.filterData;
    filterData.map(function (item) {
      return item.children.map(function (items) {
        return items.checked = false;
      });
    });
    this.setState({
      dictData: filterData,
      filterData: []
    });
  }
  /*筛选条件展开收起*/
  ;

  _proto.render = function render() {
    var _this2 = this;

    var _this$state3 = this.state,
        filterShow = _this$state3.filterShow,
        _this$state3$filterDa = _this$state3.filterData,
        filterData = _this$state3$filterDa === void 0 ? [] : _this$state3$filterDa,
        dictData = _this$state3.dictData;
    return _react["default"].createElement("div", {
      className: "hd-filter-box"
    }, _react["default"].createElement("ul", {
      className: "hd-filter-options " + (filterShow ? 'hd-filter-tab-down' : 'hd-filter-tab-up')
    }, _react["default"].createElement("li", {
      className: "hd-filter-option"
    }, _react["default"].createElement("span", {
      className: "hd-filter-option-name"
    }, "\u7B5B\u9009\uFF1A"), _react["default"].createElement("ul", {
      className: "hd-filter-option-lists"
    }, filterData.map(function (item) {
      return _react["default"].createElement("li", {
        key: "" + item.categoryId + item.id,
        className: "hd-filter-options-tag"
      }, item.name, _react["default"].createElement(_icon["default"], {
        type: "close",
        style: {
          paddingLeft: 5,
          fontSize: 12
        },
        onClick: function onClick() {
          return _this2.deleteOption(item);
        }
      }));
    }))), dictData.map(function (items, index) {
      return _react["default"].createElement("li", {
        key: items.id,
        className: "hd-filter-option"
      }, _react["default"].createElement("span", {
        className: "hd-filter-option-name"
      }, items.value, "\uFF1A"), _react["default"].createElement("ul", {
        className: "hd-filter-option-lists"
      }, items.children.map(function (item) {
        return _react["default"].createElement("li", {
          key: item.id,
          className: "hd-filter-options-list" + (item.checked ? ' hd-filter-option-selected' : ''),
          onClick: function onClick() {
            return _this2.changeOption(item, index, item.checked);
          }
        }, item.name);
      })));
    })), _react["default"].createElement(_button["default"], {
      type: "primary",
      block: true,
      onClick: this.tabShow
    }, filterShow ? '收起' : '展开', _react["default"].createElement(_icon["default"], {
      type: "caret-up",
      rotate: "" + (filterShow ? 0 : 180)
    })));
  };

  return HdFilter;
}(_react.Component);

exports["default"] = HdFilter;
HdFilter.propTypes = {
  filterData: _propTypes["default"].array.isRequired,
  getFilterOptions: _propTypes["default"].func.isRequired
  /**
   * 拿到用户传参初始化筛选项dictData
   */

};
//# sourceMappingURL=index.js.map