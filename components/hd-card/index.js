import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './style'

class HdCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      nameSpanClass: '',
      valueSpanClass: '',
    };
  }

  static defaultProps = {
    data: [{
      key: 1,
      name: "统计",
      value: 12,
    }, {
      key: 2,
      name: "测试测试",
      value: <span>1222s</span>,
    }],
    title: '标题',
    size: 'default',
    wrapSpan: {
      nameSpan: 4,
      valueSpan: 4,
    },
    type: 'default'
  }

  componentDidMount() {
    this.setState({
      size: this.getWrapSize(this.props.size)
    })
    if (this.props.type == 'inline') {
      this.setState({
        nameSpanClass: '',
        valueSpanClass: '',
      })
    } else {
      this.setState({
        nameSpanClass: 'hd-col-' + this.props.wrapSpan.nameSpan,
        valueSpanClass: 'hd-col-' + this.props.wrapSpan.valueSpan,
      })
    }
  }
  getWrapSize = (value) => {
    let tempSize = '';
    switch (value) {
      case "large":
        tempSize = 'hd-card-lg'
        break;
      case "small":
        tempSize = 'hd-card-sm'
        break;
      default:
        tempSize = ''
    }
    return tempSize
  }
  render() {
    const { data, title, wrapSpan, type } = this.props
    const { size, nameSpanClass, valueSpanClass } = this.state
    return (
      <div className={'hd-card-wrap' + " " + size + ' ' + type}>
        {
          !!title ? <p className="hd-card-title">{title}</p> : ''
        }
        {
          data && data.map(item => {
            return (
              <div key={item.key} className="hd-card-cell">
                <div className={"hd-card-cell-title " + nameSpanClass}>{item.name}：</div>
                <div className={"hd-card-cell-value " + valueSpanClass}>{item.value}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default HdCard;