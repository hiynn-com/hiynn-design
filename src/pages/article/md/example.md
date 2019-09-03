import React, { Component } from "react";
const { HdArticle } from "hiynn-design";
import 'hiynn-design/dist/hiynn-design.css';

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
