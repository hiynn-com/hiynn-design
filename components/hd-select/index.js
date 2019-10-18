import { Select } from "antd";
import React, { Component } from "react";

const { Option } = Select;

class HdSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentWillMount() {
    console.log(this.props.url);
    if (this.props.url) {
      axios
        .get(this.props.url)
        .then(response => {
          this.setState(
            {
              data: response.data.data
            },
            () => {
              console.log(this.state.data);
            }
          );
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    let { size, loading, onChange, style, mode, defaultValue, placeholder, label, data, url } = this.props;
    return (
      <div className={"select"}>
        {label ? <span className={"select-label"}>{label} :</span> : ""}

        {url ? (
          <Select placeholder={placeholder} defaultValue={defaultValue} mode={mode} size={size} loading={loading} onChange={onChange} style={style}>
            {this.state.data
              ? this.state.data.map((item, index) => {
                  return (
                    <Option key={index} value={item.value}>
                      {item.name}
                    </Option>
                  );
                })
              : ""}
          </Select>
        ) : (
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
        )}
      </div>
    );
  }
}

export default HdSelect;
