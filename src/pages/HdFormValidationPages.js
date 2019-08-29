import React, { Component } from "react";
import HdFormValidation from "../../components/hd-formValidation";
import { Input, message } from "antd";

class HdFormValidationPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: "username",
          label: "用户名",
          type: "text",
          labelCol: 3,
          wrapperCol: 10,
          reg: /^[a-zA-Z0-9 ]{0,10}$/,
          placeholder: "请输入用户名",
          required: true,
          message: "输入的格式只能为字母和数字,且长度0-10之间"
        },
        {
          key: "password",
          label: "测试2",
          type: "password",
          labelCol: 3,
          wrapperCol: 10,
          reg: /^[a-zA-Z0-9 ]{0,10}$/,
          placeholder: "请输入密码",
          required: true,
          validator: false
        }
      ]
    };
  }

  onChange = data => {
    console.log(data);
  };
  ok = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <HdFormValidation Hdchange={this.onChange} HdData={this.state.data} HdOk={this.ok}></HdFormValidation>
      </div>
    );
  }
}

export default HdFormValidationPages;
