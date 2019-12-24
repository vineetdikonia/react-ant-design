import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Header, Sider, Footer, Content } = Layout;
const { SubMenu } = Menu;
class Dashboard extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Route>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="schedule" />
                <span>
                  <Link to="/schedule-call">Schedule Call</Link>
                </span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="pic-center" />
                    <span>Masters</span>
                  </span>
                }
              >
                <Menu.Item key="2">Departments</Menu.Item>
                <Menu.Item key="3">Holidays</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="user" />
                    <span>Employees</span>
                  </span>
                }
              >
                <Menu.Item key="4">Add New</Menu.Item>
                <Menu.Item key="5">List Active</Menu.Item>
                <Menu.Item key="6">Live Inactive</Menu.Item>
              </SubMenu>
              <Menu.Item key="7">
                <Icon type="file" />
                <span>Documents</span>
              </Menu.Item>
            </Menu>
          </Sider>
        </Route>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              This is Dashboard
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design Demo ©2019 Created by Dikonia
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Dashboard);
