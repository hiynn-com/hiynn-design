import React, { Component } from "react";
import { Form, Input, Button, Checkbox, message, Select } from "antd";
import { fromJs, Map, Set } from "immutable";
import PropTypes from "prop-types";

const { Option } = Select;

class HdFormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.Hdsubmit(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Hdbtn, Hdchange, Hddata, Hdsubmit, layout } = this.props;
    // 判断表单类型

    return (
      <div>
        <Form layout={layout} onSubmit={this.handleSubmit}>
          {Hddata.map((item, index) => {
            return (
              <Form.Item key={index} label={item.label} labelCol={{ span: item.labelCol }} wrapperCol={{ span: item.wrapperCol }}>
                {getFieldDecorator(`${item.key}`, {
                  rules: [
                    { required: item.required, message: `${item.placeholder}` },
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
                })(
                  item.type == "password" ? (
                    <Input.Password type={`${item.type}`} placeholder={item.placeholder} />
                  ) : item.type == "select" ? (
                    <Select placeholder="请选择">
                      <Option value="1">Option 1</Option>
                      <Option value="2">Option 2</Option>
                      <Option value="3">Option 3</Option>
                    </Select>
                  ) : (
                    <Input type={`${item.type}`} placeholder={item.placeholder} />
                  )
                )}
              </Form.Item>
            );
          })}
          {Hdbtn ? (
            <Button style={{ ...Hdbtn.style }} block={Hdbtn.block} type={Hdbtn.type} htmlType="submit">
              {Hdbtn.text}
            </Button>
          ) : (
            ""
          )}
        </Form>
      </div>
    );
  }
}

HdFormValidation = Form.create({
  name: "normal_login",
  onValuesChange(props, changedValues, allValues) {
    props.Hdchange(allValues);
  }
})(HdFormValidation);

export default HdFormValidation;
