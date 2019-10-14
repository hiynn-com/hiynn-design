## Api :

### HdAdmin

| 参数     | 说明           | 类型                      | 默认值       | 版本 |
| -------- | -------------- | ------------------------- | ------------ | ---- |
| title    | 标题           | string                    | 'horizontal' | -    |
| subTitle | 副标题         | string                    | -            | -    |
| side     | 左侧树菜单容器 | <></> 内容自定义          | -            | -    |
| modal    | modal框配置    | Object,详细参数请看 modal | -            | -    |

### modal

| 参数         | 说明                | 类型         | 默认值 | 版本 |
| ------------ | ------------------- | ------------ | ------ | ---- |
| visible      | 控制modal是否显示   | Boolean      | -      | -    |
| title        | modal 的 标题       | string       | -      | -    |
| handleOk     | 确认触发的方法      | function(){} | -      | -    |
| handleCancel | 取消触发的方法      | function(){} | -      | -    |
| content      | modal的内容，自定义 | <></>        | -      | -    |



