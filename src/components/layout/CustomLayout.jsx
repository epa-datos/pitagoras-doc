import React from "react";
import { Layout } from "antd";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import "./_layout.scss";
const { Header, Content, Sider } = Layout;

const CustomLayout = () => (
  <Layout>
    <Header className="hero-header">
      <span className="hero-title">Pitágoras Add-on</span>
    </Header>
    <Layout>
      <Sider
        width={200}
        theme="light"
        style={{
          padding: "2rem 1rem 2rem 0rem",
        }}
      >
        <Sidebar />
      </Sider>
      <Layout
        style={{
          padding: "1rem 2.5rem",
        }}
      >
        <Content>
          <MainContainer />
        </Content>
      </Layout>
    </Layout>
  </Layout>
);
export default CustomLayout;
