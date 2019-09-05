# Api

### Article

| 参数      | 说明     | 类型 | 默认值 | 版本 |
| :--------  | :------- | :-------: | :-------: | :-------: |
| data      | 需要传入的JSON数据 | object  | null     | v0.24  |
| voteStatus| 文章当前的点赞状态      | boolean     | false   | v0.24      |
| giveLike  | 点赞后的回调函数,返回值ture表示点赞，false表示取消点赞|function|(vote) => {}| v0.24|

### Data参数

| 参数      | 说明     | 类型   | 默认值      | 版本        |
| :--------  | :------- | :-------: | :-------: | :-------: |
|title      | 文章标题 | string | null       | v0.24       |
|blockName  | 板块名称 | string | null       | v0.24        |
|ownerName  | 作者名字 | string | null       | v0.24        |
|viewCount  | 浏览量 | number   | null       | v0.24        |
|replyCount  | 回复量 | number  | null       | v0.24        |
|voteCount   | 点赞数 | number   | null       | v0.24       |
|creationDate| 文章创建时间 | string    | null       | v0.24 |
|content     | 文章内容 | html     | null       | v0.24      |