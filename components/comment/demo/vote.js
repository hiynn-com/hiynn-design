import React, { Component } from "react";
import { Icon } from 'antd';


class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action: 'liked',
        };
    }

    like = () => {
        this.props.voteClick(true, this.props.commentId);
        this.setState({
            action: 'liked'
        });
    };

    dislike = () => {
        this.props.voteClick(false, this.props.commentId);
        this.setState({
            action: 'disliked'
        });
    };

    render() {
        const { action } = this.state;
        const { like, dislike } = this.props;
        return (
            <>
                <span className='time-style' style={{ paddingRight: 5 }}>
                    <Icon
                        type="like"
                        theme={action === 'liked' ? 'filled' : 'outlined'}
                        onClick={this.like}
                    />
                    <span style={{ paddingLeft: 5, cursor: 'auto' }}>{like}</span>
                </span>
                <span className='time-style' style={{ paddingRight: 5 }}>
                    <Icon
                        type="dislike"
                        theme={action === 'disliked' ? 'filled' : 'outlined'}
                        onClick={this.dislike}
                    />
                    <span style={{ paddingLeft: 5, cursor: 'auto' }}>{dislike}</span>
                </span>
            </>
        );
    }
}

export default Vote;