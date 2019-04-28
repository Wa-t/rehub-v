import { Icon, Layout } from 'antd';
import * as React from 'react';

export const Header = (props: { toggle: () => void; collapsed: boolean }) => (
  <Layout.Header className="header">
    <Icon
      className="trigger"
      type={props.collapsed ? "menu-unfold" : "menu-fold"}
      onClick={props.toggle}
    />
  </Layout.Header>
);
