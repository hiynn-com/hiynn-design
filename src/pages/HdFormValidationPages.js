import React, { Component } from "react";
import HdFormValidation from "../../components/hd-formValidation";
import { Input, message } from "antd";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import IndexMD from "./FormMD/Index.md";
import ApiMD from "./FormMD/Api.md";

class HdFormValidationPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: [
        {
          key: "username",
          label: "标题",
          type: "text",
          labelCol: 10,
          wrapperCol: 14,
          reg: /^[a-zA-Z0-9 ]{0,10}$/,
          placeholder: "请输入搜索的标题",
          required: true,
          message: "输入的格式不正确"
        }
      ],
      submitData: [
        {
          key: "username",
          label: "用户名",
          type: "text",
          labelCol: 5,
          wrapperCol: 15,
          reg: /^[a-zA-Z0-9 ]{0,10}$/,
          placeholder: "请输入用户名",
          required: true,
          message: "输入的格式只能为字母和数字,且长度0-10之间"
        },
        {
          key: "password",
          label: "密码",
          type: "password",
          labelCol: 5,
          wrapperCol: 15,
          reg: /^[a-zA-Z0-9 ]{0,10}$/,
          placeholder: "请输入密码",
          required: true,
          validator: false,
          message: "输入的格式只能为字母和数字,且长度0-10之间"
        },
        {
          key: "sel",
          label: "option",
          type: "select",
          labelCol: 5,
          wrapperCol: 15,
          placeholder: "请选择",
          required: true
        }
      ],
      btn: {
        text: "搜索",
        block: false,
        type: "primary",
        style: {
          marginTop: "5px"
        }
      },
      subbtn: {
        text: "提交",
        block: true,
        type: "primary",
        style: {
          width: "300px",
          marginLeft: "100px"
        }
      }
    };
  }

  onChange = data => {
    console.log("监听数据变化:", data);
  };
  submit = data => {
    console.log("点击按钮获取数据:", data);
  };

  render() {
    return (
      <div style={{ marginLeft: "40px" }}>
        <PreviewLayout>
          <MdPreviewer md={IndexMD}></MdPreviewer>
          <div className="content">
            <div style={{ width: "500px" }}>
              <HdFormValidation Hdbtn={this.state.subbtn} Hdchange={this.onChange} Hddata={this.state.submitData} Hdsubmit={this.submit}></HdFormValidation>
              {/* <HdFormValidation layout="inline" Hdbtn={this.state.btn} Hdchange={this.onChange} Hddata={this.state.searchData} Hdsubmit={this.submit}></HdFormValidation> */}
            </div>
          </div>
          <MdPreviewer md={ApiMD}></MdPreviewer>
        </PreviewLayout>
      </div>
    );
  }
}

export default HdFormValidationPages;
