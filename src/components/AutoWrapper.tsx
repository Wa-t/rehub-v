import KOS from 'kos-core';
import * as loadsh from 'lodash';
import * as React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

import { siderMenus } from '../common/utils/Menus';
const routeMenus = loadsh.cloneDeep(siderMenus);

const sortList = (a: any, b: any) => {
  const pathA = a.path;
  const pathB = b.path;
  if (pathA.indexOf(pathB) === 0) {
    return -1;
  } else if (pathB.indexOf(pathA) === 0) {
    return 1;
  }
  return -1;
};

const RouterWrapper = ({ router = {}, history = {} }) => {
  if (!(router instanceof Array)) {
    throw new Error("router config is expected an Array!");
  }
  if (router.length <= 0) {
    return null;
  }
  const sortRouter = router.sort(sortList);
  return (
    <Switch>
      {sortRouter.map(_ => {
        const { Component, path } = _;

        const currentRoute = loadsh.find(routeMenus, (item: any) => {
          return item.path === path;
        });
        const childPath = currentRoute.route.toLowerCase();
        return (
          <Route
            key={childPath}
            path={childPath}
            render={() => <Component history={history} namespacePath={path} />}
          />
        );
      })}
    </Switch>
  );
};

export const AutoWrapper = (config: {
  KOSconfig?: any;
  router?: any[];
}): any => (Component: React.ComponentClass<any>) => {
  const KOSconfig = config.KOSconfig || {};

  const KosWrapper = KOS.Wrapper({
    namespace: Symbol("namespace"),
    autoReset: false,
    ...KOSconfig
  })(Component);

  class Cp extends React.PureComponent<
    RouteComponentProps<any> & { routers: JSX.Element; namespacePath?: string }
  > {
    public render() {
      const { namespacePath = "", history } = this.props;
      const Rt = <RouterWrapper history={history} router={config.router} />;
      let viewNamespace;
      if (namespacePath.indexOf(':') >= 0) {
        viewNamespace = namespacePath.substr(0, namespacePath.indexOf(':') - 1);
      } else {
        viewNamespace = namespacePath;
      }
      // 判断是否使用KOS
      if (KOSconfig.model) {
        const namespace = KOSconfig.model.namespace || KOSconfig.namespace || viewNamespace;
        return (
          <KosWrapper
            namespace={namespace}
            history={history}
            {...this.props}
            routers={Rt}
          />
        );
      }
      return <Component {...this.props} history={history} routers={Rt} />;
    }
  }

  return withRouter(Cp);
};
