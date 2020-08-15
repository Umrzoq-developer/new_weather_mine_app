import React from "react";
import { Layout, Typography, Menu } from "antd";
import { } from "@ant-design/icons";
import { MenuList } from './MainStyle';

const Main = () => {
    const { Header, Content, Sider } = Layout;
    const { Title } = Typography;

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider onScroll collapsible>
                <Title mark level={4} className="text-center mt-4">
                    Weather App
                </Title>
                <MenuList theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </MenuList>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: "0 16px" }}>
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, minHeight: 360 }}
                    >
                        Bill is a cat.
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Main;
