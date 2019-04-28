import { Layout } from 'antd';
import { KosProps } from 'kos-core';
import * as React from 'react';
import { AutoWrapper } from 'src-root/components';

import model from '../model';

interface IProps extends KosProps {}

@AutoWrapper({ KOSconfig: { model, namespace: "dataCenter" } })
export class Sider extends React.Component<IProps> {
  public updateName(name: string) {
    this.props.dispatch!({
      type: "updateState",
      payload: {
        name
      }
    });
  }

  public render() {
    return (
      <div style={{ borderRight: "1px solid #ccc", marginRight: "16px" }}>
        <Layout.Sider className="page-sider">Sider</Layout.Sider>
      </div>
    );
  }
}
