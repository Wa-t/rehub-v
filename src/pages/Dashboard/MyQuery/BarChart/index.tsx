import { Layout } from 'antd';
import * as React from 'react';
import { AutoWrapper } from 'src-root/components';

import { Content, Footer, Header, Sider } from './Components';
import { IProps } from './interface';
import model from './model';

@AutoWrapper({ KOSconfig: { model, namespace: "barChart" } })
export default class BarChart extends React.Component<IProps> {
  public render() {
    const { name, showSavedItem, tabs, history, match } = this.props;
    const headerProps = {
      name,
      tabs,
      showSavedItem
    };
    return (
      <div className="page-section">
        <Layout>
          <Header {...headerProps} />
          <Layout>
            <Content history={history} match={match} />
            <Sider />
          </Layout>
          <Footer />
        </Layout>
      </div>
    );
  }
}
