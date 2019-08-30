import React, { Component } from "react";
import { Icon, Divider } from 'antd';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteStatus: false,
      data: {},
    };
  }

  componentDidMount() {
    this.setState({
      voteStatus: this.props.voteStatus,
      data: this.props.data,
    })
  }

  UNSAFE_componentWillReceiveProps(nextprops) {
    if (this.props != nextprops) {
      this.setState({
        voteStatus: nextprops.voteStatus,
        data: nextprops.data
      })
    }
  }

  //点赞
  entGoog = () => {
    this.setState(preState => {
      return {
        voteStatus: !preState.voteStatus
      }
    }, () => {
      this.props.giveLike(this.state.voteStatus);
    })
  }
  render() {
    const { data } = this.props;
    const { voteStatus } = this.state;
    return (
      <div className="article-container">
        <h1>{data.title ? data.title : ''}</h1>
        <div className='subheader'>
          {data.blockName ? <span>板块: {data.blockName}</span> : ''}
          {data.ownerName ? <span>作者: {data.ownerName}</span> : ''}
          {data.viewCount ? <span><Icon type="eye" /><span>{data.viewCount}</span></span> : ''}
          {data.replyCount ? <span><Icon type="message" /><span>{data.replyCount}</span></span> : ''}
          {data.voteCount ? <span><Icon type="like" /><span>{data.voteCount}</span></span> : ''}
          {data.creationDate ? <span>发表于: {data.creationDate}</span> : ''}
        </div>
        <div className='content' dangerouslySetInnerHTML={{ __html: data.content }} />
        <Divider style={{ height: '2px' }} />
        <div className='ent-good'>
          <div>
            <div onClick={this.entGoog.bind(this)}>
              <Icon type="like" theme={voteStatus ? 'filled' : 'outlined'} />
              <p>{voteStatus ? '已点赞' : '点赞'}</p>
            </div>
            <p>{data.voteCount}人已赞</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
