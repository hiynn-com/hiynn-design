# Api

### Comment

| 参数         | 说明      | 类型 | 默认值 | 版本 |
| :--------:  | :-------: | :-------: | :-------: | :-------: |
| data        | 需要传入的数据 | array  |    []    | v0.24  |
| replySubmit | 点击回复的回调函数,返回参数(评论ID,评论内容,评论时间)|function|(commentid, value, time) => {}| v0.24|
| voteClick   |  点赞的回调函数,返回参数(喜欢数,不喜欢数,评论ID,点赞状态)|function|(likes, dislikes, commentid, action) => {}| v0.24|
| loginInfo   |  当前评论人信息 |  Object  |  {}  |  v0.24  |

### Data参数

| 参数     | 说明     | 类型 | 默认值 | 版本 |
| :--------:  | :-------: | :-------: | :-------: | :-------: |
|actions   | 在评论内容下面呈现的操作项列表 | Array   | 点赞和回复操作项    | v0.24       |
|author     | 要显示为注释作者的元素 | string/ReactNode   | -       | v0.24       |
|avatar  | 要显示为评论头像的元素-通常是 antd Avatar 或者 src | string/ReactNode | -       | v0.24        |
|content  | 评论的主要内容 | string/ReactNode  | -       | v0.24        |
|datetime  | 展示时间描述 | string/ReactNode | -       | v0.24        |
|commentid  | 评论id | string   | -       | v0.24        |
|like   | 喜欢数 | number       | -            | v0.24       |
|dislike| 不喜欢数 | number    | -       | v0.24 |
|children     | 二级回复数组    | array     | null       | v0.24      |

### loginInfo参数

| 参数     | 说明     | 类型 | 默认值 | 版本 |
| :--------:  | :-------: | :-------: | :-------: | :-------: |
|loginName    | 当前评论人名称 | string/ReactNode   | -       | v0.24       |
|loginAvatar  | 要显示为评论头像的元素-通常是 antd Avatar 或者 src | string/ReactNode | -       | v0.24        |
|loginId  | 当前评论人id | string   | -       | v0.24        |




