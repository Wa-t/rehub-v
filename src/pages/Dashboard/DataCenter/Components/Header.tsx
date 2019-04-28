import { Layout } from 'antd';
import { KosProps } from 'kos-core';
import * as React from 'react';
import { AutoWrapper } from 'src-root/components';

import model from '../model';

interface IProps extends KosProps {
  name: string;
  showSavedItem: boolean;
  tabs: any;
}

@AutoWrapper({ KOSconfig: { model, namespace: "dataCenter" } })
export class Header extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  public onClose() {
    this.props.dispatch!({
      type: "updateState",
      payload: {
        showSavedItem: false
      }
    });
  }
  public showDrawer() {
    this.props.dispatch!({
      type: "updateState",
      payload: {
        showSavedItem: true
      }
    });
  }

  public render() {
    return <Layout.Header>Header</Layout.Header>;
  }
}
