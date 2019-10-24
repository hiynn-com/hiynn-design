import { Select } from "antd";
import React, { Component } from "react";
import axios from "axios";

const { Option } = Select;

class HdSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
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
              data: response.data.data.options
            },
            () => {
              // console.log(this.state.data);
            }
          );
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url) {
      axios
        .get(nextProps.url)
        .then(response => {
          this.setState(
            {
              data: response.data.data.options
            },
            () => {
              // console.log(this.state.data);
            }
          );
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      if (nextProps.data) {
        this.setState({
          data: nextProps.data
        });
      }
    }
  }

  onChange = value => {
    this.props.onChange({
      name: "value",
      value: value
    });
  };

  render() {
    let { size, loading, onChange, style, mode, defaultValue, placeholder, label, data, url, width } = this.props;
    return (
      <div className={"select"}>
        {label ? <span className={"select-label"}>{label} :</span> : ""}
        {
          <Select placeholder={placeholder} defaultValue={defaultValue} mode={mode} size={size} loading={loading} onChange={this.onChange} style={{ width: width, minWidth: 120 }}>
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
        }

        {/* {url ? (
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
        )} */}
      </div>
    );
  }
}

export default HdSelect;
