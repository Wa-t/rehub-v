import { Button, Layout } from 'antd';
import { KosProps } from 'kos-core';
import * as React from 'react';
import { AutoWrapper } from 'src-root/components';

import model from '../model';

interface IProps extends KosProps {
  history: any;
  match: any;
}

@AutoWrapper({ KOSconfig: { model, namespace: "barChart" } })
export class Content extends React.Component<IProps> {
  public handleUrl1 = () => {
    const { history } = this.props;
    history.push({
      pathname: "/dashboard/myquery/pie",
      query: { id: "789", name: "654" }
    });
  };
  public handleUrl2 = () => {
    const { history } = this.props;
    history.push({
      pathname: "/dashboard/datacenter"
    });
  };

  public render() {
    console.log("this.props ==>", this.props);
    return (
      <Layout.Content>
        <Button.Group>
          <Button onClick={this.handleUrl1}>
            To PIE page with query string
          </Button>
          <Button onClick={this.handleUrl2}>
            To data center page with nothing
          </Button>
        </Button.Group>
      </Layout.Content>
    );
  }
}
