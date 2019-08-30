import React, { Component } from "react";
import Demo from "../../components/comment/demo";
import "../../components/comment/demo/style";
import Item from "antd/lib/list/Item";

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          author: "张三",
          avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          creationDate: "2019-08-28",
          commentId: "100",
          content: "6666",
          like: 10,
          dislike: 3,
          children: [
            {
              author: "张三",
              avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
              creationDate: "2019-08-28",
              commentId: "110",
              content: "6534543",
              like: 10,
              dislike: 3,
            },
            {
              author: "张三",
              avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
              creationDate: "2019-08-28",
              commentId: "111",
              content: "653454",
              like: 10,
              dislike: 3,
            },
            {
              author: "张三",
              avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
              creationDate: "2019-08-28",
              commentId: "112",
              content: "6534",
              like: 10,
              dislike: 3,
            },
            {
              author: "张三",
              avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
              creationDate: "2019-08-28",
              commentId: "113",
              content: "65345",
              like: 10,
              dislike: 3,
            },
          ]
        },
        {
          author: "张三",
          avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          creationDate: "2019-08-28",
          commentId: "200",
          content: "6666",
          like: 10,
          dislike: 3,
          children: [
          ]
        },
      ]
    }
  }
  componentDidMount() {

  }
  replySubmit = (commentId, value, time) => {
    let data = this.state.data;
    let num = (Math.random() * 10000).toFixed(0);
    if (commentId === '') {
      data.push(
        {
          author: "张三",
          avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          creationDate: time,
          commentId: num,
          content: value,
          like: 0,
          dislike: 0,
          children: []
        }
      )
    } else {
      data.map(item => {
        if (item.commentId == commentId) {
          item.children.push(
            {
              author: "张三",
              avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
              creationDate: time,
              commentId: num,
              content: value,
              like: 0,
              dislike: 0,
            }
          )
        }
      })
    }
    this.setState({ data });
  }
  voteClick = (value, commentId) => {
    let data = this.state.data;
    data.map(item => {
      if (item.commentId == commentId) {
        if (value === true) {
          item.like += 1;
        } else {
          item.dislike += 1;
        }
      } else {
        item.children.map(val => {
          if (val.commentId == commentId) {
            if (value === true) {
              val.like += 1;
            } else {
              val.dislike += 1;
            }
          }
        })
      }
    })
    this.setState({ data });
  }
  render() {
    return (
      <div>
        <Demo
          maxLength={2000}//输入框输入最多字数
          isVote={true}//是否显示点赞
          data={this.state.data}//渲染数据
          replySubmit={this.replySubmit}//点击回复的回调函数
          voteClick={this.voteClick}//点赞的回调函数
        />
      </div>
    );
  }
}

export default DemoPage;
