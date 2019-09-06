import React from "react";
import TweenOne from "rc-tween-one";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { getChildrenToRender } from "./utils";

const { Item, SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen
    });
  };

  render() {
    const { dataSource, isMobile, docs, ...props } = this.props;
    const { phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = navData.map(item => {
      const { children: a, subItem, ...itemProps } = item;
      if (subItem) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <div {...a} className={`header0-item-block ${a.className}`.trim()}>
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName="header0-item-child"
          >
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? <a {...childItem}>{childItem.children.map(getChildrenToRender)}</a> : <div {...childItem}>{childItem.children.map(getChildrenToRender)}</div>;
              return (
                <Item key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }

      return (
        <Item key={item.name} {...itemProps}>
          {/*  通过判断 a.href 是否包含 http 决定是内部页面还是外部页面 */}
          {a.href.includes("http") ? (
            <a {...a} className={`header0-item-block dsfsd ${a.className}`.trim()}>
              {a.children.map(getChildrenToRender)}
            </a>
          ) : (
            <Link
              to={a.href}
              {...a}
              className={`header0-item-block dsfsd ${a.className}`.trim()}
              onClick={() => {
                docs();
              }}
            >
              {a.children.map(getChildrenToRender)}
            </Link>
          )}
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne component="header" animation={{ opacity: 0, type: "from" }} {...dataSource.wrapper} {...props}>
        <div {...dataSource.page} className={`${dataSource.page.className}${phoneOpen ? " open" : ""}`}>
          <TweenOne animation={{ x: -30, type: "from", ease: "easeOutQuad" }} {...dataSource.logo}>
            <img width="100%" src={dataSource.logo.children} alt="img" />
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={
              isMobile
                ? {
                    height: 0,
                    duration: 300,
                    onComplete: e => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = "auto";
                      }
                    },
                    ease: "easeInOutQuad"
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu mode={isMobile ? "inline" : "horizontal"} defaultSelectedKeys={["sub0"]} theme="dark">
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;
