## API

#### 按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| - | - | - | - | - |
| title | 按钮文字 | string | - | ---- |
| disabled | 按钮失效状态 | boolean | false | ---- |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - | ---- |
| htmlType | 设置 button 原生的 type 值，可选值请参考 HTML 标准 | string | button | ---- |
| icon | 设置按钮的图标类型 | string | - | ---- |
| loading | 设置按钮载入状态 | boolean \| { delay: number } | false | ---- |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - | ---- |
| type | 设置按钮类型，可选值为 primary dashed danger link 或者不设 | string | - | ---- |
| onClick | 点击按钮时的回调 | (event) => void | - | ---- |
