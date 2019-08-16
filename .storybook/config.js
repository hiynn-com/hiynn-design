import { addParameters, configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withOptions } from "@storybook/addon-options";
import { themes } from "@storybook/theming";

import { name, repository, version } from "../package.json";

// automatically import all files ending in *.stories.js
// const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  // req.keys().forEach(filename => req(filename));
  require("../stories/index.stories");
  require("../stories/components.stories");
}
// Option defaults:
addParameters({
  options: {
    name: `${name}`,
    url: repository,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: false,
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: false,
    /**
     * theme storybook, see link below
     */
    theme: themes.dark
  }
});

configure(loadStories, module);
