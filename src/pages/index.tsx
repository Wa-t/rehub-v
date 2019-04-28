import * as React from 'react';
import { AutoWrapper } from 'src-root/components';

import router from './router';

@AutoWrapper({ router })
class RouteMap extends React.PureComponent<{ routers?: JSX.Element }> {
  public render() {
    return <div>{this.props.routers}</div>;
  }
}

export default RouteMap;
