import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { UserTable } from "~/componments/tables";
const { Header, Content, Footer, Sider } = Layout;
import Link from "next/link";
const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const AppLayout: React.FC = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
            {children}
           <UserTable/> 
            
         </div> 
    
  );
};

export default AppLayout;