## API

#### Radio

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| - | - | - | - | - |
| checked | 指定当前是否选中 | boolean | false | ---- |
| value | 根据 value 进行比较，判断是否选中 | any | - | ---- |
| name | 文本 | string | - | ---- |

#### RadioGroup
##### 单选框组合，用于包裹一组 Radio。

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| - | - | - | - | - |
| defaultValue | 默认选中的值 | any | - | ---- |
| disabled | 禁选所有子单选器 | boolean | false | ---- |
| name | RadioGroup 下所有 input\[type="radio"] 的 name 属性 | string | - | ---- |
| options | 以配置形式设置子元素 | string[] \| Array<{ name: string value: string disabled?: boolean }> | - | ---- |
| onChange | 选项变化时的回调函数 | Function(checkedItem: { name: 'HdRadio', value: any }) | - | ---- |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | outline \| solid | outline | ---- |
