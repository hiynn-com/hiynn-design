## API
## SearchForm
|参数|说明|类型|默认值|版本|
|:--|:--|:--|:--|:--|
|searchFormOption |定义对象| `对象` |-|-|
|wrappedComponentRef |ref引用| `ref引用` |-|-|
|handleChange|操作事件| btns的handleClick事件，` |-|-|
|layout |表单布局	| `horizontal|vertical|inline` |horizontal


## searchFormOption配置

|参数|说明|类型|默认值|版本|
|:--|:--|:--|:--|:--|
|forms |各种类型输入框| `数组` |[]|-|
|btns |按钮| `数组` |[]|-|

## searchFormOption配置forms

|参数|说明|类型|默认值|版本|
|:--|:--|:--|:--|:--|
|label |文本| `string` ||-|
|type |输入框的类型| `input|select|checkbox|radio|datePicker|rangePickerTime|||` |string|-|
|key |key| `string` |string|-|
|width |宽度| `number` |number	|-|
|showSearch |使单选模式可搜索| `boolean` |false|-|
|initialValue |默认值| `string` |string|-|
|format |展示的时间格式	| `string` |HH:mm:ss|-|
|children |单选框，多选框，下拉框的子元素| `配置如父级` |[]|-|

## searchFormOption配置btns

|参数|说明|类型|默认值|版本|
|:--|:--|:--|:--|:--|
|label |文本| `string` ||-|
|type |ant按钮| `primary|dashed等` |string|-|
|key |key| `string` |string|-|
|icon |配置按钮的小图标| `string` |string|-|
|handleClick |操作事件| `数组` |function(value, event)|-|
|disabled |是否禁用状态，默认为 false| `Boolean` |false|-|
|className|配置按钮的样式|string|-|
