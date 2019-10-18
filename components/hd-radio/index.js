import {Radio} from 'antd';
import React from 'react';

const returnName = 'title';

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
          buttonStyle,
        }}
        onChange={ev => onChange && onChange({
          name: returnName,
          value: ev.target.value,
        })}
      >
        {options.map(item => {
          const {
            checked,
            value,
            name,
          } = item;
          return <Radio.Button
            key={value}
            {...{
              checked,
              value,
            }}
          >{name}</Radio.Button>
        })}
      </Radio.Group>
    )
  }
}

export default HdRadio;
