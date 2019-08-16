import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import Demo from "../components/hd-layout";
import "../components/hd-layout/style";
import { withInfo } from "@storybook/addon-info";
import { linkTo } from "@storybook/addon-links";
import buttonMd from "./md/button.md";
import "@storybook/addon-notes/register-panel";

storiesOf("组件", module)
  .addDecorator(storyFn => <div style={{ textAlign: "center", background: "red" }}>{storyFn()}</div>)
  .add("LayoutPage", () => <Demo onClick={linkTo("Demo", "Button2")} />, {
    notes: {
      markdown: buttonMd
    }
  })
  .add("MasterPage", () => <Demo />);
