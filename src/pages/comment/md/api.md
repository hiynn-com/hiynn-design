# Api

### Comment

| 参数     | 说明     | 类型 | 默认值 | 版本 |
| :--------  | :------- | :-------: | :-------: | :-------: |
| data     | 需要传入的数据 | array  | null     | v0.24  |
| maxLength| 评论框能输入的最大字符长度  | number     | 2000   | v0.24     |
| isVote   |是否显示点赞 |boolean|true| v0.24|
| replySubmit | 点击回复的回调函数|function|(commentId, value, time) => {}| v0.24|
| voteClick  |  点赞的回调函数|function|(value, commentId) => {}| v0.24|

### Data参数

| 参数     | 说明     | 类型 | 默认值 | 版本 |
| :--------  | :------- | :-------: | :-------: | :-------: |
|author     | 评论人名称 | string   | null       | v0.24       |
|avatar  | 头像图片链接 | string | null       | v0.24        |
|creationDate  | 评论日期 | string | null       | v0.24        |
|commentId  | 评论id | string   | null       | v0.24        |
|content  | 评论内容 | string  | null       | v0.24        |
|like   | 点赞数 | number   | null       | v0.24       |
|dislike| 不喜欢数 | number    | null       | v0.24 |
|children     | 二级回复数组 | array     | null       | v0.24      |
