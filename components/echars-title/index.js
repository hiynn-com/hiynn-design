import React, { Component } from "react";
import "./style";

class EcharsTitle extends Component {
  render() {
    const props = this.props;
    return (
      <div className="chartTitle_wrap">
        <div className="chartTitle">
          <div className="title" style={props.titleStyle}>{props.titleContent}</div>
        </div>
      </div>
    )
  }
}
export default EcharsTitle;