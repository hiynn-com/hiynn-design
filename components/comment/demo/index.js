import React, { Component } from "react";
import moment from 'moment';
import { Divider, Button } from 'antd';
import Comment from './comment';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxLength: 0,
      isVote: true,
      info: '',
      data: [
        {
          author: "张三",
          avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          creationDate: "2019-08-28",
          commentId: "111",
          content: "66666666666666666667",
          like: 10,
          dislike: 3,
          children: [
            {
              author: "张三",
              avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
              creationDate: "2019-08-28",
              commentId: "222",
              content: "65345436534765537564475788758",
              like: 10,
              dislike: 3,
            }
          ]
        },
        {
          author: "张三",
          avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          creationDate: "2019-08-28",
          commentId: "111",
          content: "66666666666666666667",
          like: 10,
          dislike: 3,
          children: [
            {
              author: "张三",
              avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
              creationDate: "2019-08-28",
              commentId: "222",
              content: "65345436534765537564475788758",
              like: 10,
              dislike: 3,
            }
          ]
        },
      ]
    };
  }

  componentDidMount() {
    this.setState({
      maxLength: this.props.maxLength,
      isVote: this.props.isVote,
      data: this.props.data
    })
  }

  UNSAFE_componentWillReceiveProps(nextprops) {
    if (this.props != nextprops) {
      this.setState({
        maxLength: nextprops.maxLength,
        isVote: nextprops.isVote,
        data: nextprops.data
      })
    }
  }

  replyComment = (e) => {
    let commentId = '';
    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    let value = e.target.previousSibling.previousSibling.firstElementChild.value;
    this.props.replySubmit(commentId, value, time);
  }


  resetComment = (e) => {
    e.target.previousSibling.firstElementChild.value = '';
    this.setState({
      info: `还可以输入${this.props.maxLength}个字！`
    })
  }


  changeWords(e) {
    let maxLength = this.state.maxLength;
    let val = e.target.value;
    let length = val.length;
    if (length > maxLength) {
      e.target.nextSibling.value = `不能输入超过${maxLength}个字!`;
      e.target.value = val.slice(0, maxLength);
    } else {
      e.target.nextSibling.value = `还可以输入${maxLength - length}个字！`;
    }
  }

  render() {
    const { data, maxLength, isVote } = this.state;
    return (
      <div>
        <div className='answer-first'>
          <div>
            <textarea maxLength={maxLength} onChange={this.changeWords.bind(this)}></textarea>
            <input disabled value={this.state.info} />
          </div>
          <Button onClick={this.resetComment.bind(this)}>重置</Button>
          <Button type='primary' onClick={this.replyComment.bind(this)}>回复</Button>
        </div>
        <Divider style={{ height: 2 }} />
        {
          data.map((val, index) =>
            <Comment
              key={index}
              data={val}
              maxLength={maxLength}
              isVote={isVote}
              replySubmit={this.props.replySubmit}
              voteClick={this.props.voteClick}
            />)
        }
      </div>
    );
  }
}

export default Demo;