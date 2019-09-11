

## API

|参数|说明|类型|默认值|版本|
|:--|:--|:--|:--|:--|
|width|容器宽度| `string. 数字型字符串，或者百分数` | `400` |-|
|height|容器高度| `string. 数字型字符串，或者百分数` | `200` |-|
|direction|分隔容器的方向| `Enum {'row', 'column'}` | `row` |-|
|slot|DivideBox内子元素必须包含的属性，拥有slot属性的元素将被放入DivideBox的分隔区域内| `Enum {'left', 'right', 'top', 'bottom'}` | 当`direction`为`row`时，`slot`的值只能填`left`和`right`；当`direction`为`column`时，`slot`的值只能填`top`和`bottom`，并且两个子元素slot必须同时具备。|-|
