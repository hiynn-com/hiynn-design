import React, { Component } from "react";
import { List, Divider } from 'antd';
import CommentL from './comment';
import Reply from "./reply";

class Demo extends Component {
    state = {
        data: [],
        value: '',
        replyAllShow: false,
    };

    componentDidMount() {
        this.setState({
            data: this.props.data
        })
    }

    UNSAFE_componentWillReceiveProps(nextprops) {
        if (this.props != nextprops) {
            this.setState({
                data: nextprops.data
            })
        }
    }

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }
        this.setState({ value: '' });
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };
    isShowAllReply = () => {
        this.setState((preState) => {
            return {
                replyAllShow: !preState.replyAllShow
            }
        })
    }
    render() {
        const { data, replyAllShow } = this.state
        const pStyle = {
            color:'blue',
            cursor: 'pointer',
        }
        const CommentList = ({ comments }) => {
            return <List
                dataSource={comments}
                itemLayout="horizontal"
                renderItem={
                    props => {
                        return props.childlist && props.childlist.length > 0 ? <CommentL voteClick={this.props.voteClick} singleComment={props} isMain={false} loginInfo={this.props.loginInfo} replySubmit={this.props.replySubmit}>
                            {
                                replyAllShow
                                    ?
                                    <List
                                        dataSource={props.childlist}
                                        itemLayout="horizontal"
                                        renderItem={item => <CommentL voteClick={this.props.voteClick} singleComment={item} />}
                                    />
                                    :
                                    <List
                                        dataSource={props.childlist.slice(0, 3)}
                                        itemLayout="horizontal"
                                        renderItem={item => <CommentL voteClick={this.props.voteClick} singleComment={item} />}
                                    />
                            }
                            {
                                props.childlist.length > 3 ? (replyAllShow ?
                                    <p onClick={this.isShowAllReply} style={pStyle}>收起</p>
                                    :
                                    <p onClick={this.isShowAllReply} style={pStyle}>展示全部{props.childlist.length}条评论 >></p>)
                                    : ''
                            }
                        </CommentL>
                            :
                            <CommentL singleComment={props} voteClick={this.props.voteClick} isMain={false} loginInfo={this.props.loginInfo} replySubmit={this.props.replySubmit} />
                    }
                }
            />
        };

        return (
            <div>
                <Reply loginInfo={this.props.loginInfo} isMain={true} replySubmit={this.props.replySubmit} />
                <Divider />
                {data.length > 0 && <CommentList comments={data} />}
            </div>
        );
    }
}

export default Demo;