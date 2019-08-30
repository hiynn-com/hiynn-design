import React, { Component } from "react";
import HdAdmin from "../../components/hd-admin";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";

class HdAdminPage extends Component {
  render() {
    return (
      <PreviewLayout>
        <HdAdmin>
          <div>
            <h1>筹备中，敬请期待 。。。</h1>
          </div>
        </HdAdmin>
      </PreviewLayout>
    );
  }
}

export default HdAdminPage;
