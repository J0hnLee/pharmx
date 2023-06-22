'use client'
import React from "react"
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {Menu,Breadcrumb,theme,Layout,Button} from "antd";
import { useState } from "react";
// const Layout = dynamic(() => import('antd/lib/layout'), {
//   ssr: false,
// });

const { Header, Content, Footer, Sider } = Layout;

// const ProLayout = dynamic(() => import("@ant-design/pro-layout"), {
//   ssr: false,
// });


const MainLayout:React.FC  =({children})=>{  
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
     <Layout style={{ height:"100vh" }}>
       <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
      </Header> 
        <Layout style={{ padding: "0px 0", background: colorBgContainer }}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" mode="inline"  defaultSelectedKeys={['1']}>
            <Link href="/dibeties">
            <Menu.Item >
                <span className="text-1">
                    糖尿病
                </span>
            </Menu.Item>
              </Link>
            <Link href="/Welcome">
            <Menu.Item>
                <span className="nav-text">
                    新的layout
                </span>
            </Menu.Item>
            </Link>
          </Menu>
          </Sider>
          <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={{ padding: "0 0px", minHeight: 480 }}>
           <div>
            {children}
           </div>
            
          </Content>
      </Layout>
        
        </Layout>
      
      
   </Layout>
  );
};
  

export default MainLayout;