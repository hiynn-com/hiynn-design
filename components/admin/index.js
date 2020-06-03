import React, { Component } from "react";
import { PageHeader, Layout, Icon, Modal } from "antd";
import { If, Then } from "react-if";
const { Header, Footer, Sider, Content } = Layout;
class HdAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backIcon: false,
      visible: true
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.backIcon) {
      this.setState({
        backIcon: nextProps.backIcon
      });
    }
  }
  render() {
    const { route } = this.props;
    console.log("route --- --- ", this.props);

    const { className, children, title, subTitle, side, search, topRight, topFooter, onBack, modal, visible, handleOk, handleCancel } = this.props;
    return (
      <div className={`${className ? `${className} master-page-container` : "master-page-container"}`}>
        <Layout className="mp-layout">
          <If condition={title !== null && typeof title !== "undefined" && (side === null || typeof side === "undefined")}>
            <Then>
              <div className="holder-top">
                <PageHeader backIcon={onBack ? <Icon type="arrow-left" /> : false} onBack={() => onBack()} title={title} subTitle={subTitle} extra={topRight} footer={topFooter} />
              </div>
            </Then>
          </If>
          <Layout className="mpl-layout">
            <If condition={side !== null && typeof side !== "undefined"}>
              <Then>
                <Sider className="mp-side" theme="light" width="280">
                  <PageHeader className="mp-ph" title={title} subTitle={subTitle} />
                  <div className="mp-side-content">{side}</div>
                </Sider>
              </Then>
            </If>
            <Content>
              <If condition={search !== null && typeof search !== "undefined"}>
                <Then>
                  <div className="holder-search">{search}</div>
                </Then>
              </If>
              <div className={[side !== null && typeof side !== "undefined" ? "holder-content-side" : "holder-content"]}>{children}</div>
            </Content>
          </Layout>
        </Layout>
        <If condition={modal !== null && typeof modal !== "undefined"}>
          <Then>
            <Modal title={modal.title} visible={modal.visible} onOk={modal.handleOk} onCancel={modal.handleCancel}>
              {modal.content}
            </Modal>
          </Then>
        </If>
      </div>
    );
  }
}

export default HdAdmin;
