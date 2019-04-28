import * as React from 'react';
import { AutoWrapper, Loader } from 'src-root/components';

import { IProps } from './interface';
import model from './model';
import router from './router';

@AutoWrapper({ KOSconfig: { model }, router })
export class Dashboard extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <div>{this.props.routers}</div>
        <Loader spinning={this.props.loginLoading} fullScreen={false} />
      </div>
    );
  }
}
