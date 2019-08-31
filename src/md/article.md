---
## 如何使用

```jsx
import React, { Component } from "react";
const {HdArticle} from "hiynn-design";

class HdArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteStatus: false,
      data: {
        title: '海云标准化平台',
        blockName: '标准化',
        ownerName: 'cxd',
        viewCount: 100,
        replyCount: 30,
        voteCount: 50,
        creationDate: '2019-01-01',
        content: '测试内容测试内容测试内容'
      }
    };
  }
  giveLike = (vote) => {
    let data = this.state.data;
    if (vote === true) {
      data.voteCount += 1;
    } else {
      data.voteCount -= 1;
    }
    this.setState({ data, voteStatus: vote });
  }
  render() {
    const { data, voteStatus } = this.state;
    return (
          <HdArticle
            data={data}
            voteStatus={voteStatus}
            giveLike={this.giveLike}
          />
    );
  }
}

export default HdArticle;

```
## Api

| 参数       || 说明      | 类型 | 默认值 | 版本 |
| ---------|---- | ------- | ------- | ------- | ------- |
| data    || 需要传入的JSON数据 | object  | object     | v0.24       |
|         |title| 文章标题 | string    | ✔       | v0.24        |
|         |blockName| 板块名称 | string    | ✔       | v0.24        |
|         |ownerName| 作者名字 | string    | ✔       | v0.24        |
|         |viewCount| 浏览量 | ✔       | ✔       | v0.24        |
|         |replyCount| 回复量 | ✔       | ✔       | v0.24        |
|         |voteCount| 点赞数 | ✔       | ✔       | v0.24        |
|         |creationDate| 文章创建时间 | string    | ✔       | v0.24        |
|         |content| 文章内容 | html     | ✔       | v0.24        |
| voteStatus || 文章当前的点赞状态      | ✔       | ✔       | v0.24        |
| giveLike      || 点赞后的回调函数      | ✔       | ✔       | v0.24        |
