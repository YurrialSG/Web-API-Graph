import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { useLocation, Link } from 'react-router-dom'
const { Header, Sider, Content } = Layout;

export default function ContentWrapper({ children }) {
    const location = useLocation()
    return (
        <Layout style={{ minHeight: '100vh', background: '#fff' }}>
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[location.pathname]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="/login">
                        <Link to="/login">
                            Login
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/register">
                        <Link to="/register">
                            Register
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0px 40px' }}>

                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={200} style={{ height: '100%', background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[location.pathname]}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '40px' }}
                            >
                            <Menu.Item key="/home">
                                <Link to="/home">
                                    <Icon type="dashboard" />
                                    <span>Home</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[location.pathname]}
                            defaultOpenKeys={['sub2']}
                            style={{ height: '40px' }}
                            >
                            <Menu.Item key="/products">
                                <Link to="/products">
                                    <Icon type="folder" />
                                    <span>Produtos</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[location.pathname]}
                            defaultOpenKeys={['sub3']}
                            style={{ height: '40px' }}
                            >
                            <Menu.Item key="/users">
                                <Link to="/users">
                                    <Icon type="user" />
                                    <span>Usuários</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {children}
                    </Content>
                </Layout>
            </Content>
        </Layout>
    );
}
