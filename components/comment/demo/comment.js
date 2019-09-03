import React, { Component } from "react";
import Vote from './vote';
import moment from 'moment';
import { Avatar, Button } from 'antd';


class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxLength: 0,
            isVote: true,
            info: '',
            showCommentAll: false,
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
            data: this.props.data,
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

    replyComment = (commentId, e) => {
        let time = moment().format('YYYY-MM-DD HH:mm:ss');
        let value = e.target.previousSibling.previousSibling.firstElementChild.value;
        this.props.replySubmit(commentId, value, time);
    }

    //显示回复框
    showCommentTag = (e) => {
        e.currentTarget.nextSibling.style.display = 'block';
    }

    //取消回复
    closeComment = (e) => {
        e.target.previousSibling.firstElementChild.value = '';
        this.setState({
            info: `还可以输入${this.props.maxLength}个字！`
        })
        e.target.parentNode.style.display = 'none';
    }

    //展开评论
    showCommentAll = () => {
        this.setState({
            showCommentAll: true
        })
    }
    mergeComment = () => {
        this.setState({
            showCommentAll: false
        })
    }

    voteClick = (val, commentId) => {
        this.props.voteClick(val, commentId);
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
        const { showCommentAll, data, maxLength, isVote } = this.state;
        return (
            <div className='comment-box' key={data.commentId}>
                <div className='comment-avatar'>
                    <Avatar src={data.avatar} alt={data.author} />
                </div>
                <div style={{ width: '100%' }}>
                    <div>
                        <span className='author-style'>{data.author ? data.author : '匿名'}</span>
                        <span className='time-style'>{data.creationDate}</span>
                    </div>
                    <p className='content-style'>{data.content}</p>

                    <div style={{ width: '100%' }}>
                        {isVote ? <Vote voteClick={this.voteClick} commentId={data.commentId} like={data.like} dislike={data.dislike} /> : ''}
                        <span onClick={this.showCommentTag.bind(this)} className='click-style'>回复</span>
                        <div className='answer-second' >
                            <div>
                                <textarea maxLength={maxLength} onChange={this.changeWords.bind(this)}></textarea>
                                <input disabled value={this.state.info} />
                            </div>
                            <Button onClick={this.closeComment.bind(this)}>取消</Button>
                            <Button type="primary" onClick={this.replyComment.bind(this, data.commentId)}>回复</Button>
                        </div>
                    </div>

                    <div className='comment-reply'>
                        {
                            data.children ?
                                (showCommentAll == false ?
                                    data.children.slice(0, 3).map((item, index) =>
                                        <div key={index}>
                                            <div className='comment-avatar'>
                                                <Avatar src={item.avatar} alt={item.author} />
                                            </div>
                                            <div>
                                                <div>
                                                    <span className='author-style'>{item.author ? item.author : '匿名'}</span>
                                                    <span className='time-style'>{item.creationDate}</span>
                                                </div>
                                                <p className='content-style'>{item.content}</p>
                                                {isVote ? <Vote voteClick={this.voteClick} commentId={item.commentId} like={item.like} dislike={item.dislike} /> : ''}
                                            </div>
                                        </div>
                                    )
                                    :
                                    data.children.map((item, index) =>
                                        <div key={index}>
                                            <div className='comment-avatar'>
                                                <Avatar src={item.avatar} alt={item.author} />
                                            </div>
                                            <div>
                                                <div>
                                                    <span className='author-style'>{item.author ? item.author : '匿名'}</span>
                                                    <span className='time-style'>{item.creationDate}</span>
                                                </div>
                                                <p className='content-style'>{item.content}</p>
                                                {isVote ? <Vote voteClick={this.voteClick} commentId={item.commentId} like={item.like} dislike={item.dislike} /> : ''}
                                            </div>
                                        </div>
                                    )
                                )
                                :
                                null
                        }
                        {data.children ? (data.children.length > 3
                            ?
                            (
                                showCommentAll == false ? <p className='click-style' onClick={this.showCommentAll}>查看全部{data.children.length}条回复 ></p>
                                    :
                                    <p className='click-style' onClick={this.mergeComment}>收起</p>
                            )
                            :
                            ''
                        ) : ''
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;