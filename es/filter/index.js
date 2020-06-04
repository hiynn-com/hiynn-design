import "antd/lib/button/style";
import _Button from "antd/lib/button";
import "antd/lib/icon/style";
import _Icon from "antd/lib/icon";
import "antd/lib/message/style";
import _message from "antd/lib/message";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";
import PropTypes from "prop-types";

var HdFilter = function (_Component) {
  _inheritsLoose(HdFilter, _Component);

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
        _message.warning("已选择!", 1);
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
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$state3 = this.state,
        filterShow = _this$state3.filterShow,
        _this$state3$filterDa = _this$state3.filterData,
        filterData = _this$state3$filterDa === void 0 ? [] : _this$state3$filterDa,
        dictData = _this$state3.dictData;
    return React.createElement("div", {
      className: "hd-filter-box"
    }, React.createElement("ul", {
      className: "hd-filter-options " + (filterShow ? "hd-filter-tab-down" : "hd-filter-tab-up")
    }, React.createElement("li", {
      className: "hd-filter-option"
    }, React.createElement("span", {
      className: "hd-filter-option-name"
    }, "\u7B5B\u9009\uFF1A"), React.createElement("ul", {
      className: "hd-filter-option-lists"
    }, filterData.map(function (item) {
      return React.createElement("li", {
        key: "" + item.categoryId + item.id,
        className: "hd-filter-options-tag"
      }, item.name, React.createElement(_Icon, {
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
      return React.createElement("li", {
        key: items.id,
        className: "hd-filter-option"
      }, React.createElement("span", {
        className: "hd-filter-option-name"
      }, items.value, "\uFF1A"), React.createElement("ul", {
        className: "hd-filter-option-lists"
      }, items.children.map(function (item) {
        return React.createElement("li", {
          key: item.id,
          className: "hd-filter-options-list" + (item.checked ? " hd-filter-option-selected" : ""),
          onClick: function onClick() {
            return _this2.changeOption(item, index, item.checked);
          }
        }, item.name);
      })));
    })), React.createElement(_Button, {
      type: "primary",
      block: true,
      onClick: this.tabShow
    }, filterShow ? "收起" : "展开", React.createElement(_Icon, {
      type: "caret-up",
      rotate: "" + (filterShow ? 0 : 180)
    })));
  };

  return HdFilter;
}(Component);

HdFilter.propTypes = {
  filterData: PropTypes.array.isRequired,
  getFilterOptions: PropTypes.func.isRequired
};
export { HdFilter as default };
//# sourceMappingURL=index.js.map