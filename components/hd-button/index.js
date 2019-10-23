import {
  Button,
  ConfigProvider,
} from 'antd';
import React from 'react';

class HdButton extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.onChange && this.props.title !== nextProps.title) {
      this.props.onChange();
    }
  }

  render() {
    return (
      <ConfigProvider autoInsertSpaceInButton={false}>
        <Button className="hd-button" type="primary" {...this.props}>{this.props.title}</Button>
      </ConfigProvider>
    )
  }
}

export default HdButton;
