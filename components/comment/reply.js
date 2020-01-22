import React, { Component } from "react";
import moment from 'moment';
import { Avatar, Form, Button, Input, Comment } from 'antd';
const { TextArea } = Input;

const Editor = ({ onCancel, onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item style={{ textAlign: 'right' }}>
            <Button onClick={onCancel} style={{ marginRight: 10 }}>
                取消
            </Button>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                评论
            </Button>
        </Form.Item>
    </div>
);

class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            submitting: false,
        }
    }

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }
        let value = this.state.value;
        let time = moment().format('YYYY-MM-DD HH:mm:ss');
        if (this.props.commentid) {
            let commentid = this.props.commentid;
            this.props.replySubmit(commentid, value, time);
        } else {
            let commentid = "";
            this.props.replySubmit(commentid, value, time);
        }
        this.setState({ value: '' });
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    onCancel = () => {
        if (this.props.isMain === true) {
            this.setState({ value: '' });
        } else {
            this.props.onCancel();
        }
    };

    render() {
        const { submitting, value } = this.state;
        const { loginInfo } = this.props;
        return (
            <Comment
                avatar={
                    <Avatar
                        src={loginInfo.loginAvatar}
                        alt={loginInfo.loginName}
                    />
                }
                content={
                    <Editor
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        submitting={submitting}
                        onCancel={this.onCancel}
                        value={value}
                    />
                }
            />
        );
    }
}

export default Reply;