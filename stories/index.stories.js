import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import buttonMd from "./md/button.md";
storiesOf("欢迎", module)
  .add("快速上手", () => <div>sdfds</div>, {
    notes: "A very simple example of addon notes"
  })
  .add("定制主题", () => <div>sdfsdffsfs</div>);
