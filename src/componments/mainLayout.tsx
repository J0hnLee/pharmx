'use client'
import React from "react"
import dynamic from "next/dynamic";
import Link from "next/link";
import {Menu,Breadcrumb,theme,Layout} from "antd";

// const Layout = dynamic(() => import('antd/lib/layout'), {
//   ssr: false,
// });

const { Header, Content, Footer, Sider } = Layout;

// const ProLayout = dynamic(() => import("@ant-design/pro-layout"), {
//   ssr: false,
// });


const MainLayout:React.FC  =({children})=>{  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
     <Layout style={{ height:"100vh" }}>
       <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        
        
      </Header> 
       <Content style={{ padding: "0 50px" }}>
        
        <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
          <Menu>
            <Link href="/dibeties">
            <Menu.Item>
                <span className="nav-text">
                    糖尿病
                </span>
            </Menu.Item>
              </Link>
            <Link href="/testLayout">
        
            <Menu.Item>
                <span className="nav-text">
                    新的layout
                </span>
            </Menu.Item>
        
    </Link>
</Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 480 }}>
           {children}
           
            
          </Content>
        </Layout>
      </Content>
      
    </Layout>
  );
};
  

export default MainLayout;