import React, { Component } from "react";
import { Layout, Menu, Icon, Avatar, Dropdown, Spin, Form, Input, Button, Checkbox, message } from "antd";
import { fromJs, Map, Set } from "immutable";
import PropTypes from "prop-types";
import cls from "classnames";
import HdMenus from "../hd-menus";
import { StyleContext } from "../context/style-context";
const { Header, Content, Sider } = Layout;

class HdFormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          {this.props.HdData.map((item, index) => {
            //  return
            console.log(item, index);
            return (
              <Form.Item key={index} label={item.label} labelCol={{ span: item.labelCol }} wrapperCol={{ span: item.wrapperCol }}>
                {getFieldDecorator(`${item.key}`, {
                  rules: [
                    { required: item.required, message: `请输入${item.label}` },
                    { pattern: item.reg, message: item.message }
                    // {
                    //   validator: (rule, value, callback, source, options) => {
                    //     let patten = new RegExp(item.reg);
                    //     if (!patten.test(value)) {
                    //       let key = item.key;
                    //       console.log(key);
                    //       // message.warning("输入有误");
                    //       this.props.form.setFieldsValue({
                    //         [key]: value.substring(0, value.length - 1)
                    //       });
                    //       return callback("输入有误");
                    //     } else {
                    //       // return callback("输入有误!!!");
                    //     }
                    //   }
                    // }
                  ]
                })(<Input type={`${item.type}`} prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder={item.placeholder} />)}
              </Form.Item>
            );
          })}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form>
      </div>
    );
  }
}

HdFormValidation = Form.create({
  name: "normal_login",
  onValuesChange(props, changedValues, allValues) {
    // console.log(allValues);
    props.Hdchange(allValues);
  }
})(HdFormValidation);

export default HdFormValidation;
