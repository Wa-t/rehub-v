import * as React from "react";
import { AutoWrapper, Loader } from "src-root/components";

import router from "./router";

@AutoWrapper({ router })
export default class MyQuery extends React.Component<{
  routers: any;
  loginLoading: boolean;
}> {
  public render() {
    return (
      <div>
        <div>{this.props.routers}</div>
        <Loader spinning={this.props.loginLoading} fullScreen={false} />
      </div>
    );
  }
}
