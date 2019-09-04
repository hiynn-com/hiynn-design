## API
## popUpFormConfig配置
|参数|说明|类型|默认值|版本|
|:--|:--|:--|:--|:--|
|wrappedComponentRef |ref引用| `ref引用` |wrappedComponentRef={form => (this.formRef = form)}|0.0.1|
|visible |对话框是否可见| `Boolean` |false|0.0.1|
|record |代入修改数据| `Object` |null|0.0.1|
|isEdit |是否修改| `默认为false` |false|0.0.1|
|title |模态框标题| `string` |string|0.0.1|
|destroyOnClose |关闭时销毁 Modal 里的子元素	| `boolean` |false|0.0.1|
|width |模态框宽度| `string|number` |520|0.0.1|
|okText |确认按钮文字| `string` |确定|0.0.1|
|cancelText |取消按钮文字| `string` |取消	|0.0.1|
|onCancel |关闭模态框时间| `function` |function|0.0.1|
|onCreate |提交时间，创建表单| `function` |function|0.0.1|
|formConfig |form自定义表单| `对象` |参考如下formConfig配置|0.0.1|

## formConfig配置
|参数|说明|类型|默认值|版本|
|:--|:--|:--|:--|:--|
|layout |文表单布局|`horizontal|vertical|inline`|horizontal|0.0.1|
|formLayout |设置表单布局|object|参考antd|0.0.1|
|forms|forms自定义表单|array|参考如下表格|0.0.1|
## formConfig配置-forms自定义表单

|参数|说明|类型|默认值|版本|
|:--|:--|:--|:--|:--|
|label |文本| `string` |-|0.0.1|
|type |输入框的类型| `input|select|checkbox|radio|datePicker|rangePickerTime|  textarea|timePicker|inputNumber|upload|`|string|0.0.1|
|key |key| `string` |string|0.0.1|
|initialValue |默认值| `string` |string|0.0.1|
|width|可选择配置表单宽度|`string|number`|-|0.0.1|
|uploadProps|类型为upload配置文件上传对象|object|参考antd|0.0.1|
|tips|类型为upload配置文字说明|string|-|0.0.1|
|rules|校验|object|参考antd|0.0.1|
|disabled|是否可编辑| `Boolean` |false|0.0.1|
|placeholder |placeholder提示| `string` |string|0.0.1|
|format |展示的时间格式	| `string` |HH:mm:ss|0.0.1|
|children |单选框，多选框，下拉框的子元素| `配置如父级` |[]|0.0.1|
|layout|设置某个表单布局|object|参考antd|0.0.1|