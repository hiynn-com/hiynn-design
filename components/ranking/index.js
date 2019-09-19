import React, { Component } from "react";
import { Form, Input, Button, Checkbox, message, Select } from "antd";
import axios from "axios";

class HdRanking extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { data, style, showTop, corner } = this.props;
    return (
      <div className="ranking" style={style}>
        {data
          ? data.map((item, index) => {
              return (
                <div key={index}>
                  <span style={showTop ? { width: "35%" } : { width: "50%" }} ref="rankingname" className="ranking-name">
                    {item.name} :{" "}
                  </span>
                  <span className="ranking-value">{item.value}</span>
                  {showTop ? <span className={`ranking-top ranking-top${index}`}>Top{index + 1}</span> : ""}
                </div>
              );
            })
          : ""}
        {/* 四个角样式 */}
        {corner ? <span className={"corner-top-left"}></span> : ""}
        {corner ? <span className={"corner-top-right"}></span> : ""}
        {corner ? <span className={"corner-bottom-left"}></span> : ""}
        {corner ? <span className={"corner-bottom-right"}></span> : ""}
      </div>
    );
  }
}

export default HdRanking;
