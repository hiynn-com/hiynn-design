import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("欢迎", module).add("使用storybook", () => <Welcome showApp={linkTo("Button")} />);

storiesOf("按钮", module)
  .add("文本", () => <Button onClick={action("clicked")}>Hello Button</Button>)
  .add("表情包", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
