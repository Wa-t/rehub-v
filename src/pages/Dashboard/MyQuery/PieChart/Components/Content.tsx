import { Button, Layout } from 'antd';
import { KosProps } from 'kos-core';
import * as React from 'react';
import { AutoWrapper } from 'src-root/components';

import model from '../model';

interface IProps extends KosProps {
  location: any;
  history: any;
}

@AutoWrapper({ KOSconfig: { model, namespace: "pieChart" } })
export class Content extends React.Component<IProps> {
  public updateName(name: string) {
    this.props.dispatch!({
      type: "updateState",
      payload: {
        name
      }
    });
  }
  public handleUrl = () => {
    const { history } = this.props;
    history.push("/dashboard/myquery/bar/11/22");
  };
  public render() {
    const { location } = this.props;
    console.log(location.query, "location");
    return (
      <Layout.Content>
        Pie content:
        <Button onClick={this.handleUrl}>To BAR page with router params</Button>
      </Layout.Content>
    );
  }
}
