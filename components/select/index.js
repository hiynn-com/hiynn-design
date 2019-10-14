import { Select } from "antd";
import React, { Component } from "react";

const { Option } = Select;

class HdSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let { size, loading, onChange, style, mode, defaultValue, placeholder, label, data } = this.props;
    return (
      <div className={"select"}>
        {label ? <span className={"select-label"}>{label} :</span> : ""}

        <Select placeholder={placeholder} defaultValue={defaultValue} mode={mode} size={size} loading={loading} onChange={onChange} style={style}>
          {data
            ? data.map((item, index) => {
                return (
                  <Option key={index} value={item.value}>
                    {item.name}
                  </Option>
                );
              })
            : ""}
        </Select>
      </div>
    );
  }
}

export default HdSelect;
