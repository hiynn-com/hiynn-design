## API

#### CheckboxBar

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| - | - | - | - | - |
| options | 指定可选项（更新时不会触发 onChange 回调） | string[] | [] | ---- |
| url | api（更新时会触发 onChange 回调） | string | - | ---- |
| onChange | 变化时回调函数 | Function(checkedItems: \[{ name: 'label', value: any }]) | - | ---- |
