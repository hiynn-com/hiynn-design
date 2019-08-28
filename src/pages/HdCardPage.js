import React, { Component } from "react";
import { HdCard } from "../../components";
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

class HdCardPage extends Component {
  render() {
    return (
      <div>
        <HdCard type="inline" />
        <div>
          <HdCard />
        </div>
      </div>
    );
  }
}

export default HdCardPage;
