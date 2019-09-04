import React from "react";
import { Button } from "antd";
import QueueAnim from "rc-queue-anim";
import Texty from "rc-texty";
import "rc-texty/assets/index.css";
import { Link } from "react-router-dom";

class Banner extends React.PureComponent {
  render() {
    const { docs, ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    const children = dataSource.textWrapper.children.map(item => {
      const { name, texty, ...$item } = item;

      if (name.match("button")) {
        return (
          <span key={name}>
            {item.href ? (
              <Link
                to={item.href}
                key={name}
                {...$item}
                onClick={() => {
                  docs();
                }}
                style={{ fontSize: "16px", color: "#fff" }}
              >
                {item.children}
              </Link>
            ) : (
              <Button type="primary" key={name} {...$item}>
                {item.children}
              </Button>
            )}
          </span>
        );
      }

      return (
        <div key={name} {...$item}>
          {texty ? <Texty type="mask-bottom">{item.children}</Texty> : item.children}
        </div>
      );
    });
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim key="QueueAnim" type={["bottom", "top"]} delay={200} {...dataSource.textWrapper}>
          {children}
        </QueueAnim>
      </div>
    );
  }
}
export default Banner;
