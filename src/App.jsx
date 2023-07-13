// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import roseLogo from "../public/Avatar/rose.jpg";
import userLogo from "../public/Avatar/lisa.jpg";
import generalLogo from "../public/Avatar/blackpink.jpg";
import { Icon} from '@iconify/react';
import { MenuFoldOutlined, MenuUnfoldOutlined,SearchOutlined} from "@ant-design/icons";
import Calculator from "./Calculator/Calculator";
import Chessboard from "./Chessboard/Input/Input";
import ConvertRate from "./ConvertRate/ConvertRate";
import Pomodoro from "./Pomodoro/Pomodoro";
import LanguageSwitcher from './LanguageSwitcher'
import { Layout, Menu, Button, Avatar, Input } from "antd";
import "./App.css";
import Language from "./Languages/index"

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [lang, setLang] = useState("vi");
  const items = [
    {
      label: <Link to="/Calculator">{Language('Calculator',lang)}</Link>,
      key: "/Calculator",
      icon: <Icon icon="cil:calculator" />,
    },
    {
      label: <Link to="/Chessboard"> {Language('Chessboard',lang)} </Link>,
      key: "/Chessboard",
      icon: <Icon icon="fa6-solid:chess" />,
    },
    {
      label: <Link to="/ConvertRate"> {Language('ConvertRate',lang)}</Link>,
      key: "/ConvertRate",
      icon: <Icon icon="mingcute:exchange-euro-line" />,
    },
    {
      label: <Link to="/Pomodoro">{Language('Pomodoro',lang)}</Link>,
      key: "/Pomodoro",
      icon: <Icon icon="game-icons:time-trap" />,
    },
  ];
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          className="my-sider"
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="dark"
          width={300}
        >
          {!collapsed ? (
            <Header className="my-header" style={{ background: "transparent" }}>
              <Avatar src={generalLogo} size={50}></Avatar>
              <p style={{ padding: 10 }}>{Language('FINAL PROJECT',lang)}</p>
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
            style={{ background: "transparent", fontSize: 18, color: "white" }}
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
            <Input
              prefix={<SearchOutlined style={{ color: "#ccc" }} />}
              placeholder="Search"
              style={{ flex: 1, marginRight:20 }}
            />
            <LanguageSwitcher 
              lang={lang}
              languages={[
                { lang: "vi", label: "VIE" },
                { lang: "en", label: "ENG" },
                { lang: "kr", label: "KOR" }
              ]}
              onClick={(newLang) => setLang(newLang)}
            />
            <div style={{ marginRight: 5, marginLeft: 5, color: "black" }}>
              <Avatar src={userLogo} size={35}></Avatar>
              <span>Nguyễn Thị Linh</span>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
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
