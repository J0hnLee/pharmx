'use client'
import React from "react"
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DesktopOutlined,
  ContainerOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Menu,Breadcrumb,theme,Layout,Button} from "antd";
import { useState } from "react";
// const Layout = dynamic(() => import('antd/lib/layout'), {
//   ssr: false,
// });

const { Header, Content, Footer, Sider } = Layout;

// const ProLayout = dynamic(() => import("@ant-design/pro-layout"), {
//   ssr: false,
// });
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}


const MainLayout:React.FC  =({children})=>{  
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const UrlLink=()=>{
    return(
        <div>
      <Link href="/dibeties">        
                <span className="text-1">
                    糖尿病 gg
                </span>
                {/* <DesktopOutlined/> */}
        </Link>
     </div>
    )
}

  const items: MenuItem[] = [
    getItem('Option 1', '1', <UrlLink />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),]
  
  return (
     <Layout style={{ height:"100vh" }}>
       <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
      </Header> 
        <Layout style={{ padding: "0px 0", background: colorBgContainer }}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        //TODO: 改乘用列表形式
        items={[
            {label:(< Link href="/Welcome">歡迎</Link>),key:'welcome',icon:<DesktopOutlined />},
            {label:(<Link href="/dibeties">        
                糖尿病</Link>),key:'dibeties',danger:true, icon:<ContainerOutlined />},
           

        ]}
      />
        
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