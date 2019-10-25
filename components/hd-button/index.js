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
        <Button
          className="hd-button"
          type="primary"
          style={{
            ...this.props.style,
            width: this.props.width,
            height: this.props.height,
          }}
          {...this.props}
        >{this.props.title}</Button>
      </ConfigProvider>
    )
  }
}

export default HdButton;
