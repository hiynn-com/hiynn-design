## API

#### CheckboxBar

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| - | - | - | - | - |
| options | 指定可选项（更新时不会触发 onChange 回调） | string[] | [] | ---- |
| url | api（更新时会触发 onChange 回调） | string | - | ---- |
| style | 容器样式 | object | - | ---- |
| width | 容器宽度 | number \| string | - | ---- |
| height | 容器高度 | number \| string | - | ---- |
| onChange | 变化时回调函数 | Function(checkedItems: \[{ name: 'label', value: any }]) | - | ---- |
