import { Layout } from 'antd';
import * as React from 'react';

import { Menus } from './Menu';

interface IMenu {
  path: string;
  Component: string;
  icon: string;
  name?: string;
  mpid: string;
  route: string;
}
interface IProps {
  collapsed: boolean;
  siderMenus: IMenu[];
  location: any;
}

export const Sider = ({ collapsed, ...props }: IProps) => (
  <Layout.Sider
    className="sider"
    trigger={null}
    collapsible={true}
    collapsed={collapsed}
  >
    <div className="logo" />
    <Menus {...props} />
  </Layout.Sider>
);
