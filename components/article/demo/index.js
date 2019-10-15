import React, { Component } from "react";
import { Icon, Divider } from 'antd';
import { When } from "react-if";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteStatus: false,
      data: {
        title: null,
        blockName: null,
        ownerName: null,
        viewCount: null,
        replyCount: null,
        voteCount: null,
        creationDate: null,
        content: null,
      },
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
          <When condition={data.blockName}><span>板块: {data.blockName}</span></When>
          <When condition={data.ownerName}><span>作者: {data.ownerName}</span></When>
          <When condition={data.viewCount}><span><Icon type="eye" /><span>{data.viewCount}</span></span></When>
          <When condition={data.replyCount}><span><Icon type="message" /><span>{data.replyCount}</span></span></When>
          <When condition={data.voteCount}><span><Icon type="like" /><span>{data.voteCount}</span></span></When>
          <When condition={data.creationDate}><span>发表于: {data.creationDate}</span></When>
        </div>
        <div className='content' dangerouslySetInnerHTML={{ __html: data.content }} />
        <Divider />
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
