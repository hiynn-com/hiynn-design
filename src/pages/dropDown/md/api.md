## Api :

### HdDatePicker 

| 参数     | 说明                                                                                                                         | 类型                                       | 默认值       | 版本 |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------ | ---- |
| type     | 选择器的类型                                                                                                                 | String : "range","month","date"            | -            | -    |
| label    | label标题                                                                                                                    | String                                     | -            | -    |
| size     | 输入框大小，large 高度为 40px，small 为 24px，默认是 32px                                                                    | String                                     | -            | -    |
| format   | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 <a target="_blank" href="http://momentjs.cn/">moment.js</a> | string[]                                   | "YYYY-MM-DD" | -    |
| showTime | 增加时间选择功能                                                                                                             | Object                                     | -            | -    |
| onChange | 时间发生变化的回调                                                                                                           | function(date: moment, dateString: string) | false        | -    |
| onOk     | 点击确定按钮的回调                                                                                                           | function()                                 | -            | -    |






