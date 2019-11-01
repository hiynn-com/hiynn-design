import {Radio} from 'antd';
import axios from 'axios';
import React from 'react';

const returnName = 'title';

class HdRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = (() => {
      const options = this.props.options || [];
      const value = (options.find(item => item.checked) || {}).value;
      return {options, value};
    })();
  }

  componentWillMount() {
    if (this.props.url) {
      this.fetchOptions(this.props.url);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.fetchOptions(nextProps.url);
    } else if (this.props.options !== nextProps.options) {
      const options = nextProps.options || [];
      const value = (options.find(item => item.checked) || {}).value;
      this.setState({options, value});
    }
  }

  fetchOptions = url => {
    axios.get(url).then(res => {
      if (res.data.code != 200) return;
      this.setState({
        options: res.data.data.options,
        value: (res.data.data.options.find(item => item.checked) || {}).value,
      }, () => {
        this.props.onChange && this.props.onChange({
          name: returnName,
          value: this.state.value,
        });
      });
    }).catch(err => {
      console.log(err);
    });
  };

  onChange = ev => {
    this.setState({
      value: ev.target.value,
    }, () => {
      this.props.onChange && this.props.onChange({
        name: returnName,
        value: this.state.value,
      });
    });
  };

  render() {
    const {
      onChange,
    } = this;

    const {
      disabled,
      name,
      buttonStyle,
    } = this.props;

    const {
      options,
      value,
    } = this.state;

    if (!options.length) return null;

    return (
      <Radio.Group
        className="hd-radio-group"
        style={{
          ...this.props.style,
          width: this.props.width,
          height: this.props.height,
        }}
        {...{
          onChange,
          disabled,
          name,
          buttonStyle,
          value,
        }}
      >
        {options.map(item => {
          const {
            value,
            name,
          } = item;
          return <Radio.Button
            key={value}
            {...{
              value,
            }}
          >{name}</Radio.Button>
        })}
      </Radio.Group>
    )
  }
}

export default HdRadio;
