import React from "react";
import { Spin } from "antd";

function Loading(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "auto",
        paddingTop: 50,
        textAlign: "center"
      }}
    >
      <Spin tip="加载中..." size="large" />
    </div>
  );
}

export default Loading;
