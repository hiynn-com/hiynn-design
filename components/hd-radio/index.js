import {Radio} from 'antd';
import React from 'react';

class HdRadio extends React.Component {
  render() {
    const {
      defaultValue,
      disabled,
      name,
      options,
      onChange,
      buttonStyle,
    } = this.props;

    return (
      <Radio.Group
        className="hd-radio-group"
        {...{
          defaultValue,
          disabled,
          name,
          onChange,
          buttonStyle,
        }}
      >
        {options.map(item => {
          const {
            checked,
            value,
            label,
          } = item;
          return <Radio.Button
            key={value}
            {...{
              checked,
              value,
            }}
          >{label}</Radio.Button>
        })}
      </Radio.Group>
    )
  }
}

export default HdRadio;
