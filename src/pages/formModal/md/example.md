const popUpFormConfig = {
  layout: "horizontal", //horizontal,vertical,inline
  formLayout: {
    labelCol: { xs: { span: 24 }, sm: { span: 5 } },
    wrapperCol: { xs: { span: 22 }, sm: { span: 18 } }
  },
  forms: [
    {
      key: "input",
      label: "输入框",
      type: "input",
      disabled: true,
      rules: [{ required: true,message:"请输入输入框", max:50,whitespace:true, }]
    },
    {
      key: "inputNumber",
      label: "输入框数字",
      type: "inputNumber",
      width: 300,
      rules: [{ required: true,message:"请输入输入框数字", max:50,whitespace:true, }]
    },
    {
      key: "select",
      label: "下拉框",
      type: "select",
      children: [{ label: "物理机", value: "1" }, { label: "虚拟机", value: "2" }]
    },
    {
      key: "datePicker",
      label: "时间选择",
      type: "datePicker",
      format: "YYYY-MM-DD HH:mm:ss"
    },
    {
      key: "rangePickerTime",
      label: "时间选择2",
      type: "rangePickerTime",
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: ["开始时间", "结束时间"]
    },
    {
      key: "upload",
      label: "上传文件",
      type: "upload",
      tips:"支持多文件上传，支持Excel、jpg、png等格式的文件",
      uploadProps:{
        name: "file",
        multiple: true,
        action: `http://192.168.8.58:8086/dataManagerSystem/file`,
        onChange(info) {
          const status = info.file.status;
          if (status === "done") {
            message.success(`${info.file.name} 上传成功！`);
          } else if (status === "error") {
            message.error(`${info.file.name} 上传失败！`);
          }
        }
      }
    },
    {
      key: "checkbox",
      label: "多选框",
      type: "checkbox",
      initialValue: "Apple1",
      children: [{ label: "Apple", value: "Apple1" }, { label: "Pear", value: "Pear1" }, { label: "Orange", value: "Orange1" }]
    },
    {
      label: "单项选择",
      type: "radio",
      key: "radio",
      initialValue: "Apple2",
      children: [{ label: "Apple", value: "Apple2" }, { label: "Pear", value: "Pear2" }, { label: "Orange", value: "Orange2" }]
    },
    {
      key: "textarea",
      label: "",
      type: "textarea",
      rows: 3,
      layout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 5
          }
        }
      }
    }
  ]
};
// 表单提交
handleCreate = () => {
  const form = this.formRef.props.form;
  form.validateFields((err, values) => {
    console.log(values);
    if (err) {
      return;
    }
  });
};
<FormModal
  wrappedComponentRef={form => (this.formRef = form)}
  visible={this.state.visible}
  onCancel={this.handleCancel}
  onCreate={this.handleCreate}
  record={this.state.record}
  formConfig={popUpFormConfig}
  isEdit={this.state.isEdit}
  title={this.state.title}
  destroyOnClose="true"
  width="600px"
  okText="提交"
  cancelText="取消"
/>
