import React, { Component } from "react";
import Comment from "../../../components/comment/demo";
import "../../../components/comment/demo/style";

import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import commentMd from "./md/comment.md";
import exampleMd from "./md/example.md";
import apiMd from "./md/api.md";

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {
        loginId: 100,
        loginName: "李四",
        loginAvatar: "http://img3.duitang.com/uploads/item/201504/12/20150412H5653_LWfVe.jpeg",
      },
      data: [
        {
          author: "张三",
          avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          datetime: "2019-08-28",
          content: <p>Hello World!</p>,
          commentid: "101",
          likes: 10,
          dislikes: 3,
          islike: null,
          childlist: [
            {
              author: "张三",
              avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
              datetime: "2019-08-28",
              commentid: "110",
              content: <p>我是二级评论！</p>,
              likes: 10,
              dislikes: 3,
              islike: null,
            }
          ]
        },
        {
          author: "张三",
          avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          datetime: "2019-08-28",
          content: <p>海云前端出品</p>,
          commentid: "102",
          likes: 10,
          dislikes: 3,
          islike: null,
          childlist: []
        }
      ]
    };
  }
  replySubmit = (commentid, value, time) => {
    let data = this.state.data;
    let num = (Math.random() * 10000).toFixed(0);
    const { loginInfo } = this.state;
    if (commentid === "") {
      data.push({
        author: loginInfo.loginName,
        avatar: loginInfo.loginAvatar,
        datetime: time,
        content: value,
        commentid: num,
        likes: 0,
        dislikes: 0,
        islike: null,
        childlist: []
      });
    } else {
      data.map(item => {
        if (item.commentid == commentid) {
          item.childlist.push({
            author: loginInfo.loginName,
            avatar: loginInfo.loginAvatar,
            datetime: time,
            commentid: num,
            content: value,
            likes: 0,
            dislikes: 0,
            islike: null,
          });
        }
      });
    }
    this.setState({ data });
  };
  voteClick = (likes, dislikes, commentid, action) => {
    let data = this.state.data;
    data.map(item => {
      if (item.commentid == commentid) {
        item.likes = likes;
        item.islike = action;
        item.dislikes = dislikes;
      } else {
        item.childlist.map(val => {
          if (val.commentid == commentid) {
            val.likes = likes;
            val.islike = action;
            val.dislikes = dislikes;
          }
        });
      }
    });
    this.setState({ data });
  };
  render() {
    const { loginInfo } = this.state;
    return (
      <PreviewLayout>
        <MdPreviewer md={commentMd}></MdPreviewer>
        <CodePreviewer code={exampleMd} showCode={true}>
          <Comment
            data={this.state.data} //渲染数据
            replySubmit={this.replySubmit} //点击回复的回调函数
            voteClick={this.voteClick} //点赞的回调函数
            loginInfo={loginInfo}//当前登录人信息
          />
        </CodePreviewer>
        <MdPreviewer md={apiMd}></MdPreviewer>
      </PreviewLayout>
    );
  }
}

export default DemoPage;
