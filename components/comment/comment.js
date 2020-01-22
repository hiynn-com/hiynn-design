import { Comment, Icon, Tooltip, Avatar } from 'antd';
import React, { Component } from "react";
import moment from 'moment';
import Reply from "./reply";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
      action: null,
      replyShow: false,
      commentid: '',
      singleComment: {}
    }
  }

  componentDidMount() {
    this.setState({
      singleComment: this.props.singleComment,
      likes: this.props.singleComment.likes,
      dislikes: this.props.singleComment.dislikes,
      commentid: this.props.singleComment.commentid,
      action: this.props.singleComment.islike,
    })
  }

  UNSAFE_componentWillReceiveProps(nextprops) {
    if (this.props != nextprops) {
      this.setState({
        singleComment: nextprops.singleComment,
        likes: this.props.singleComment.likes,
        dislikes: this.props.singleComment.dislikes,
        commentid: this.props.singleComment.commentid,
        action: this.props.singleComment.islike,
      })
    }
  }

  like = () => {
    let action = this.state.action;
    let likes = this.state.likes;
    let dislikes = this.state.dislikes;
    if (action == null) {
      likes += 1;
    } else if (action == 'dislike') {
      likes += 1;
      dislikes -= 1;
    }
    action = 'like';
    this.props.voteClick(likes, dislikes, this.state.commentid, action);
  };

  dislike = () => {
    let action = this.state.action;
    let likes = this.state.likes;
    let dislikes = this.state.dislikes;
    if (action == null) {
      dislikes += 1;
    } else if (action == 'like') {
      dislikes += 1;
      likes -= 1;
    }
    action = 'dislike';
    this.props.voteClick(likes, dislikes, this.state.commentid, action);
  };

  replyClick = () => {
    this.setState({ replyShow: true });
  }

  onCancel = () => {
    this.setState((preState) => {
      return {
        replyShow: !preState.replyShow
      }
    })
  }

  render() {
    const { replyShow, likes, dislikes, action, singleComment } = this.state;
    const { isMain } = this.props;
    let actions = [
      <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'like' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
      <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'dislike' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>
    ];
    if (isMain === false) {
      actions.push(<span onClick={this.replyClick} key="comment-basic-reply-to">回复</span>);
    }
    return (
      <div>
        <Comment actions={actions} {...singleComment} >
          {
            replyShow
              ?
              <Reply
                loginInfo={this.props.loginInfo}
                commentid={singleComment.commentid}
                replySubmit={this.props.replySubmit}
                onCancel={this.onCancel} />
              : ''
          }
          {this.props.children}
        </Comment>

      </div>
    );
  }
}
export default Comments;