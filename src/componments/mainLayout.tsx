import dynamic from "next/dynamic";
import defaultProps from './_defaultProps';
import Link from "next/link";
import Menu from "antd";
import {SmileFilled,TabletFilled} from '@ant-design/icons';
const ProLayout = dynamic(() => import("@ant-design/pro-layout"), {
  ssr: false,
});
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const MainLayout =({children})=>{
    return (
        //TODO:logo太小 改大一點
        <ProLayout title='理維' logo="https://leadway-web.vercel.app/img/android-chrome-512x512.png" 
        menu={{
            //collapsedShowGroupTitle: true,
            
          }}
        {...defaultProps}
        
      >
            <>
            
            <Link href='Welcome'>We</Link>
            {children}
            </>
            </ProLayout>
            
    )
}

export default MainLayout;