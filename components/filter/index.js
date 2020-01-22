import React, { Component } from "react";
import { message, Icon, Button } from "antd";
import PropTypes from "prop-types";

export default class HdFilter extends Component {
  /**
   * filterShow:筛选面板收起或者展开标识
   * dictData:筛选项数据
   * filterData:选中的条件
   */
  state = {
    filterShow: true,
    filterData: [],
    dictData: []
  };
  /**
   * 参数验证
   */
  static propTypes = {
    filterData: PropTypes.array.isRequired,
    getFilterOptions: PropTypes.func.isRequired
  };
  /**
   * 拿到用户传参初始化筛选项dictData
   */
  componentWillMount() {
    let { filterData } = this.props;
    filterData.map(item => item.children.map(items => (items.checked = false)));
    this.setState({
      dictData: filterData,
      filterData: []
    });
  }
  /*筛选条件展开收起*/
  tabShow = () => {
    const { filterShow } = this.state;
    this.setState({
      filterShow: !filterShow
    });
  };
  /**
   * 筛选条件选择
   * itemData:选中的条件对象
   * index:选中条件对象的所属索引值
   * flag:是否已选择
   */
  changeOption = (itemData, index, flag) => {
    if (!flag) {
      const { dictData, filterData } = this.state;
      let filterLists = [...filterData];
      filterLists.push(itemData);
      dictData[index].children.map(item => (item.id == itemData.id ? (item.checked = true) : item));
      this.setState(
        {
          dictData,
          filterData: [...filterLists]
        },
        () => {
          this.props.getFilterOptions(this.state.filterData);
        }
      );
    } else {
      message.warning("已选择!", 1);
    }
  };
  /*删除筛选条件*/
  deleteOption = itemData => {
    const { dictData, filterData } = this.state;
    filterData.splice(filterData.indexOf(itemData), 1);
    dictData.map(items => items.children.map(item => (itemData.id == item.id ? (item.checked = false) : item)));
    this.setState(
      {
        filterData,
        dictData
      },
      () => {
        this.props.getFilterOptions(this.state.filterData);
      }
    );
  };
  render() {
    const { filterShow, filterData = [], dictData } = this.state;
    return (
      <div className="hd-filter-box">
        <ul className={`hd-filter-options ${filterShow ? "hd-filter-tab-down" : "hd-filter-tab-up"}`}>
          <li className="hd-filter-option">
            <span className="hd-filter-option-name">筛选：</span>
            <ul className="hd-filter-option-lists">
              {filterData.map(item => (
                <li key={`${item.categoryId}${item.id}`} className="hd-filter-options-tag">
                  {item.name}
                  <Icon type="close" style={{ paddingLeft: 5, fontSize: 12 }} onClick={() => this.deleteOption(item)} />
                </li>
              ))}
            </ul>
          </li>
          {dictData.map((items, index) => (
            <li key={items.id} className="hd-filter-option">
              <span className="hd-filter-option-name">{items.value}：</span>
              <ul className="hd-filter-option-lists">
                {items.children.map(item => (
                  <li key={item.id} className={`hd-filter-options-list${item.checked ? " hd-filter-option-selected" : ""}`} onClick={() => this.changeOption(item, index, item.checked)}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <Button type="primary" block onClick={this.tabShow}>
          {filterShow ? "收起" : "展开"}
          <Icon type="caret-up" rotate={`${filterShow ? 0 : 180}`} />
        </Button>
      </div>
    );
  }
}
