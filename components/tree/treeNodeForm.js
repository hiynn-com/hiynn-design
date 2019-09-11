import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Select } from 'antd'
const { Option } = Select

class DescribeNodeForm extends Component {
  getItemsValue = () => {
    let formData = null
    this.props.form.validateFields((error,values) => {
      if(error){
        return;
      }
      formData = values
      return values
    })
    return formData
  }
  render(){
    const { getFieldDecorator } =this.props.form
    const { editFlag, nodeObjOld } = this.props
    return(
      <Form>
        <Form.Item
          label="树节点名称:"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 15 }}
        >
          {getFieldDecorator('name', {
            rules: [
            { required: true, message: '请输入树节点名称' },
            ],
            initialValue: editFlag ? nodeObjOld.name:'',
          })(
              <Input />
          )}
        </Form.Item>
      </Form>
    )
  }
}
export default Form.create()(DescribeNodeForm)

