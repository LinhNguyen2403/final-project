// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import roseLogo from "./Avatar/rose.jpg";
import userLogo from "./Avatar/lisa.jpg";
import generalLogo from "./Avatar/blackpink.jpg";
import { Icon } from '@iconify/react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  FolderViewOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import Calculator from "./Calculator/Calculator";
import Chessboard from "./Chessboard/Input/Input";
import ConvertRate from "./ConvertRate/ConvertRate";
import Pomodoro from "./Pomodoro/Pomodoro";
import { Layout, Menu, Button, Space, Avatar } from "antd";
import "./App.css";

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {
      label: <Link to="/Calculator"> Calculator </Link>,
      key: "/Calculator",
      icon: <Icon icon="cil:calculator" />,
    },
    {
      label: <Link to="/Chessboard"> Chessboard </Link>,
      key: "/Chessboard",
      icon: <Icon icon="fa6-solid:chess" />,
    },
    {
      label: <Link to="/ConvertRate"> ConvertRate </Link>,
      key: "/ConvertRate",
      icon: <Icon icon="mingcute:exchange-euro-line" />,
    },
    {
      label: <Link to="/Pomodoro"> Pomodoro </Link>,
      key: "/Pomodoro",
      icon: <Icon icon="game-icons:time-trap" />,
    },
  ];
  return (
    <BrowserRouter>
      <Layout style={{minHeight: '100vh'}}>
        <Sider
          className="my-sider"
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="dark"
          width={300}
        >
          {!collapsed ? (
            <Header className="my-header"
            style={{ background: "transparent"}}>
              <Avatar src={generalLogo} size={50}></Avatar>
              <p>APPLICATONS</p>
              
            </Header>
          ) : (
            <Header className="my-header">
              <Avatar src={roseLogo} size={50}></Avatar>
            </Header>
          )}
          <Menu
            className="menu-sider"
            theme="light"
            mode="inline"
            style={{ background: "transparent", fontSize: 18, color: "white"}}
            items={items}
          />
        </Sider>
        <Layout>
          <Header className="my-header" style={{ background: "#fff" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
            <ul className="header-nav d-none d-md-flex" role="navigation"></ul>
            <ul className="header-nav ms-auto nav-item" role="navigation"></ul>
            <ul className="header-nav ms-auto nav-item" role="navigation"></ul>
            <ul className="header-nav ms-auto nav-item" role="navigation">
              <div className="nav-item">
                <Space style={{ float: "right" }}>
                  <NotificationOutlined />
                  <UnorderedListOutlined />
                  <FolderViewOutlined />
                  <div>
                    <Avatar src={userLogo} size={50}></Avatar>
                  </div>
                </Space>
              </div>
            </ul>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: "transparent",
            }}
          >
            <Switch>
              <Route path="/Calculator">
                <Calculator></Calculator>
              </Route>
              <Route path="/Chessboard">
                <Chessboard></Chessboard>
              </Route>
              <Route path="/ConvertRate">
                <ConvertRate></ConvertRate>
              </Route>
              <Route path="/Pomodoro">
                <Pomodoro></Pomodoro>
              </Route>
            </Switch>
          </Content>
          <Footer className="footer">ExamApps ©2023 Created by Linda</Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
