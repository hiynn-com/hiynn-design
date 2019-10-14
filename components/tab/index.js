import React, { Component } from "react";
import { Form, Input, Button, Checkbox, message, Select, Tabs } from "antd";
import { fromJs, Map, Set } from "immutable";
import PropTypes from "prop-types";

const { TabPane } = Tabs;

class HdTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // onTabClick = e => {
  //   console.log("点击tab回调", e);
  // };
  // onNextClick = e=>{
  //   console.log("Next回调",e);
  // }
  // onPrevClick = e=>{
  //   console.log("Prev回调",e);
  // }

  render() {
    const { data, size, animated, forceRender, onTabClick, onNextClick, onPrevClick, onChange } = this.props;
    return (
      <div>
        <Tabs
          animated={animated}
          forceRender={forceRender}
          onTabClick={onTabClick}
          onChange={onChange}
          onNextClick={onNextClick}
          onPrevClick={onPrevClick}
          size={size}
          defaultActiveKey={data ? data[0].namne : ""}
        >
          {data
            ? data.map((item, index) => {
                return (
                  <TabPane key={item.name} tab={item.name}>
                    {item.render()}
                  </TabPane>
                );
              })
            : ""}
        </Tabs>
      </div>
    );
  }
}

export default HdTab;
