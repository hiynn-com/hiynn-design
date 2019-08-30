## Api :

### HdFormValidation

| 参数     | 说明                                         | 类型                                   | 默认值       | 版本 |
| -------- | -------------------------------------------- | -------------------------------------- | ------------ | ---- |
| layout   | 表单布局                                     | 'horizontal' ， 'vertical' ， 'inline' | 'horizontal' | -    |
| Hdchange | 监听表单数据的变化                           | function(value){ }                     | -            | -    |
| Hddata   | 用于生成表单的数据                           | Array [] ,详细 Api 请看下面 Hddata     | -            | -    |
| Hdbtn    | 提交按钮，是否显示提交按钮已经按钮样式自定义 | { }                                    | -            | -    |
| Hdsubmit | 表单提交触发的方法                           | function(value){ }                     | -            | -    |

### Hddata

| 参数        | 说明                              | 类型                      | 默认值 | 版本 |
| ----------- | --------------------------------- | ------------------------- | ------ | ---- |
| key         | 表单的属性 key                    | string                    | -      | -    |
| label       | 表单 label 名称                   | string                    | 空     | -    |
| type        | 表单的类型                        | "text，password， select" | text   | -    |
| labelCol    | label 占据的等份                  | number                    | -      | -    |
| wrapperCol  | 表单 占据的等份                   | number                    | -      | -    |
| reg         | 自定义正则验证                    | Reg                       | -      | -    |
| placeholder | 表单的 placeholder 属性           | string                    | -      | -    |
| required    | 是否必填                          | Boolean                   | false  | -    |
| message     | 配合 reg 使用，不匹配时的提示信息 | string                    | -      | -    |

### Hdbtn

| 参数  | 说明                                          | 类型    | 默认值 | 版本 |
| ----- | --------------------------------------------- | ------- | ------ | ---- |
| text  | 按钮文字内容                                  | string  | -      | -    |
| block | 块级按钮                                      | Boolean | false  | -    |
| type  | 按钮颜色 ,参考 Ant Design Button 按钮样式 Api | string  | text   | -    |
| style | 可自定义 css 样式                             | { }     | -      | -    |

## 任务列表

- [x] 基础用法
- [ ] 扩展更多属性

### 测试阶段 未完待续 ...
