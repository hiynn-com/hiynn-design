## Api :

### HdRanking

| 参数        | 说明                                       | 类型     | 默认值  | 版本 |
| ----------- | ------------------------------------------ | -------- | ------- | ---- |
| size        | 大小，提供 large default 和 small 三种大小 | string   | default | -    |
| animated    | 是否使用动画切换                           | boolean  | true    | -    |
| forceRender | 被隐藏时是否渲染 DOM 结构                  | Boolean  | false   | -    |
| onTabClick  | tab 被点击的回调                           | Function | -       | -    |
| onNextClick | next 按钮被点击的回调                      | Function | -       | -    |
| onChange    | 切换面板的回调                             | Function | -       | -    |
| onPrevClick | prev 按钮被点击的回调                      | Function | -       | -    |

### data

| 参数   | 说明        | 类型                            | 默认值 | 版本 |
| ------ | ----------- | ------------------------------- | ------ | ---- |
| name   | Tab的name值 | String                          | -      | -    |
| render | 渲染函数    | function:返回需要渲染的html片段 | -      | -    |




