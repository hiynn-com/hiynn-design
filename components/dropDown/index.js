import React, { Component } from "react";
import { Form, Input, Button, Checkbox, message, Select, DatePicker } from "antd";

const { Option } = Select;

class HdDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capitals: [] // 省份
      // city: [], // 市
      // areaList: [] // 区
    };
  }

  componentDidMount() {
    this.handleAddressData();
    console.log("传过来的值", this.props.data);
    this.setState({
      capitals: this.props.data
    });
  }
  handleAddressData = () => {
    const da = this.props.data;
    if (da && da.length > 0) {
      this.setState(
        {
          capitals: da
        },
        () => {
          console.log("da", da);
        }
      );
    }
  };
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  getCity = value => {
    this.setState(
      {
        city: "",
        areaList: ""
      },
      () => {
        const { capitals } = this.state;
        let da = [];
        capitals.map(item => {
          if (item.name === value) {
            da = item.cityList;
          }
        });
        this.setState(
          {
            city: da
          },
          () => {
            console.log("*******************", this.state.city[0]);
            this.setState({
              areaList: this.state.city[0] ? this.state.city[0].areaList : ""
            });
          }
        );
      }
    );
  };
  getSreaList = value => {
    this.setState(
      {
        areaList: ""
      },
      () => {
        const { city } = this.state;
        let ci = [];
        city.map(item => {
          if (item.name === value) {
            ci = item.areaList;
          }
        });
        this.setState({
          areaList: ci
        });
      }
    );
  };
  getData = value => {
    console.log(`selected ${value}`);
  };

  render() {
    return (
      <div className={"dropdown"} style={{ padding: "20px" }}>
        <Select
          showSearch
          style={{ width: 128, marginRight: "5px" }}
          placeholder="请选择"
          optionFilterProp="children"
          // defaultValue={this.state.capitals[0] ? this.state.capitals[0].name : ""}
          onChange={this.getCity}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {this.state.capitals.map((item, index) => {
            return (
              <Option key={index} value={item.name}>
                {item.name}
              </Option>
            );
          })}
        </Select>
        {typeof this.state.city !== "undefined" && this.state.city != [] ? (
          <Select
            showSearch
            style={{ width: 128, marginRight: "5px" }}
            placeholder="市"
            optionFilterProp="children"
            onChange={this.getSreaList}
            defaultValue={this.state.city[0] ? this.state.city[0].name : ""}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {this.state.city.map((item, index) => {
              return (
                <Option key={index} value={item.name}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
        ) : (
          ""
        )}
        {this.state.areaList && this.state.areaList != [] ? (
          <Select
            showSearch
            style={{ width: 128 }}
            placeholder="区"
            optionFilterProp="children"
            defaultValue={this.state.areaList[0] ? this.state.areaList[0] : ""}
            onChange={this.getData}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {this.state.areaList.map((item, index) => {
              return (
                <Option key={index} value={item}>
                  {item}
                </Option>
              );
            })}
          </Select>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default HdDropDown;
