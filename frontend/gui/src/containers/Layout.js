import React from 'react';

import SideNavMenu from '../components/SideNavMenu'
import logo from '../images/logo.png'

import { Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;

const PapiroLayout = (props) => {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" >
                    <img src={logo} alt="Papiro Documentação de APIs"/>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <SideNavMenu />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 280, }}>
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default PapiroLayout;