## API
## popUpFormConfig
|参数|说明|类型|默认值|版本|
|:--|:--|:--|:--|:--|
|wrappedComponentRef |ref引用| `ref引用` |-|-|
|visible |对话框是否可见| `Boolean` |false|-|
|record |代入修改数据| `Object` |null|-|
|isEdit |是否修改| `默认为false` |false|-|
|title |模态框标题| `string` |string|-|
|destroyOnClose |关闭时销毁 Modal 里的子元素	| `boolean` |false|-|
|width |模态框宽度| `string|number` |520|-|
|okText |确认按钮文字| `string` |确定|-|
|cancelText |取消按钮文字| `string` |取消	|-|
|onCancel |关闭模态框时间| `function` |function|-|
|onCreate |提交时间，创建表单| `function` |function|-|
|formConfig |form自定义表单| `对象` |[]|-|


## formConfig配置，form自定义表单

|参数|说明|类型|默认值|版本|
|:--|:--|:--|:--|:--|
|label |文本| `string` ||-|
|type |输入框的类型| `input|select|checkbox|radio|datePicker|rangePickerTime|textarea|timePicker|inputNumber|upload|||` |string|-|
|key |key| `string` |string|-|
|initialValue |默认值| `string` |string|-|
|placeholder |placeholder提示| `string` |string|-|
|format |展示的时间格式	| `string` |HH:mm:ss|-|
|children |单选框，多选框，下拉框的子元素| `配置如父级` |[]|-|
|layout|设置