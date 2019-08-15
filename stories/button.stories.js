import React from "react";
import { storiesOf } from "@storybook/react";
import Demo from "../components/demo";
import "../components/demo/style";
storiesOf("Demo", module).add("基本用法", () => <Demo />);
