import React from "react";
import { Layout, Menu, Breadcrumb, Table, Input, Button, Icon } from "antd";
import Highlighter from "react-highlight-words";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

const { Header, Sider, Footer, Content } = Layout;
const { SubMenu } = Menu;
const data = [
  {
    key: "1",
    name: "John Brown",
    date_time: "25th Dec 2019, 12:30 PM",
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Joe Black",
    date_time: "27th Dec 2019, 03:30 PM",
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Jim Green",
    date_time: "27th Dec 2019, 09:00 AM",
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    date_time: "31th Dec 2019, 11:15 AM",
    address: "London No. 2 Lake Park"
  }
];

class ScheduleCall extends React.Component {
  state = {
    collapsed: false,
    searchText: "",
    searchedColumn: ""
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      )
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: "30%",
        ...this.getColumnSearchProps("name")
      },
      {
        title: "Call Date & Time",
        dataIndex: "date_time",
        key: "date_time",
        width: "20%",
        ...this.getColumnSearchProps("date_time")
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        ...this.getColumnSearchProps("address")
      }
    ];
    return (
      <Layout>
        <Route>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["8"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="dashboard" />
                <span>
                  <Link to="/">Dashboard</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="schedule" />
                <span>Schedule Call</span>
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
              <Breadcrumb.Item>Schedule Call</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Table columns={columns} dataSource={data} />
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

export default withRouter(ScheduleCall);
