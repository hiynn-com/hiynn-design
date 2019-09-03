import React, { Component } from "react";
import introductionMd from "../md/introduction.md";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";

class IntroductionPage extends Component {
  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={introductionMd} />
      </PreviewLayout>
    );
  }
}

export default IntroductionPage;
