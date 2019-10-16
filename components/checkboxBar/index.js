import React from 'react';
import {Carousel} from 'antd';
import classNames from 'classnames';

const settings = {
  arrows: true,
  centerMode: false,
  className: 'slider variable-width',
  dots: false,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  variableWidth: true,
};

class HdCheckboxBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options || [],
    };
  }

  onChange = item => {
    item.checked = !item.checked;
    this.setState({
      options: [...this.state.options]
    }, () => {
      this.props.onChange(this.state.options.filter(item => item.checked));
    });
  };

  render() {
    return (
      <div className="hd-checkbox-bar">
        <Carousel {...settings}>
          {this.state.options.map(item => (
            <div key={item.value}>
              <div className={classNames('hd-checkbox', {
                'hd-checkbox-checked': item.checked,
              })} onClick={() => this.onChange(item)}>
                <i className="hd-checkbox-icon" style={{backgroundColor: item.icon || 'transparent'}}/>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default HdCheckboxBar;
