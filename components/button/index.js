import {
  Button,
  ConfigProvider,
} from 'antd';
import React from 'react';

class HdButton extends React.Component {
  render() {
    return (
      <ConfigProvider autoInsertSpaceInButton={false}>
        <Button className="hd-button" type="primary" {...this.props}>{this.props.children}</Button>
      </ConfigProvider>
    )
  }
}

export default HdButton;
