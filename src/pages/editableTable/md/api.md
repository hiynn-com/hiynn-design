

## API

|参数|说明|类型|默认值|版本|
|:--|:--|:--|:--|:--|
|columns|表格的列定义| `array` | `[]` |-|
|dataSource|表格的数据源| `array` | `null` |-|
|onSave|表格中数据新增、删除、修改时调用的函数，用于将表格数据传出| `(array) => void` | `undefined` |-|
|enableAdd|是否渲染默认的新增按钮| `boolean` | `true` |-|

## columns

|参数|说明|类型|默认值|版本|
|:--|:--|:--|:--|:--|
|title|标题栏名称| `string` | 用户需定义 |-|
|dataIndex|数据项对应的属性名| `string` | 用户需定义 |-|
|editable|该数据项单元格是否可编辑| `boolean` | `false`，用户需定义 |-|
|其他|其他项可参考antd的Table组件columns设定| - | - |-|

## 注意

表格在渲染时，需要数据项具备key属性；删除操作时，也需要每条数据具备唯一的key属性值。若数据源数据没有key属性，组件会自动添加。若数据源数据本身就具有key属性值，可能在新增表格数据项时生成后端无法识别的key值。