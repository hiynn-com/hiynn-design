import React, { Component } from "react";
import Demo from "../../components/hd-article/demo";
import "../../components/hd-article/demo/style";

class DemoPage extends Component {
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
        content: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容试内容测试内容测试内容'
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
      <div>
        <Demo
          data={data}
          voteStatus={voteStatus}
          giveLike={this.giveLike}
        />
      </div>
    );
  }
}

export default DemoPage;
