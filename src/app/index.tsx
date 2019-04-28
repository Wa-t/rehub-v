import './index.less';

import { Layout } from 'antd';
import KOS, { KosProps } from 'kos-core';
import * as React from 'react';
import { Loader } from 'src_components/Loader';

import { siderMenus } from '../common/utils/Menus';
import Pages from '../pages';
import { Footer, Header, Sider } from './layout';
import model from './model';

interface IM {
  path: string;
  Component: string;
  icon: string;
  name?: string;
  mpid: string;
  route: string;
}

interface II {
  collapsed: boolean;
  isLogin: boolean;
}
interface IProps extends KosProps<II> {
  collapsed: boolean;
  isLogin: boolean;
  location: any;
}

const { Content } = Layout;

// const cloneRouters = loadsh.cloneDeep(siderMenus);
@KOS.Wrapper({ model, autoReset: false })
export class App extends React.PureComponent<IProps> {
  public toggle() {
    const { dispatch } = this.props;
    dispatch!({
      type: "toggleCollapsed"
    });
  }
  public render() {
    const { collapsed, location, isLogin } = this.props;
    /*
      对从menus文件引入的对象 进行处理
      将占位符部分都去掉
    */
    const handledRouters = (siderMenus as IM[]).map(_ => {
      _.route = _.route.replace(/\/:.*$/g, "");
      return _.route;
    });
    /*
        将处理完的routers对象进行遍历
        寻找 location.pathname 是否包含 routers的子元素(这样判断 由于有url params 存在)
        errPage 用于判断 是否渲染正常页面
    */
    const errPage = handledRouters.find((item: any) => {
      return location.pathname.includes(item);
    });

    const headerProps = {
      toggle: () => this.toggle(),
      collapsed
    };
    const siderProps = {
      collapsed,
      siderMenus,
      location
    };
    return (
      <div>
        {!isLogin ? (
          <Loader spinning={true} fullScreen={true} />
        ) : (
          <Layout className="main">
            <Sider {...siderProps} />
            <Layout>
              <Header {...headerProps} />
              <Content className="content">
                <div className="content-wrapper">
                  {errPage ? <Pages /> : <span>404 访问页面不存在</span>}
                </div>
              </Content>
              <Footer />
            </Layout>
          </Layout>
        )}
      </div>
    );
  }
}

export default App;
