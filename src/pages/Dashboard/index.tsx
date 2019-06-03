import { AutoWrapper } from '@/components';
import * as Skins from '@/components/Skins';
import ReactEcharts from 'echarts-for-react';
import * as React from 'react';
import { Col, Container, Row, setConfiguration } from 'react-grid-system';
import './index.less';
import { IProps } from './interface';
import model from './model';


setConfiguration({ containerWidths:  [1366]})

@AutoWrapper({ KOSconfig: { model }})
export class Dashboard extends React.Component<IProps> {
  public options = {
    xAxis: {
        type: 'category',
        data: this.props.repoList.map((repo: any) => repo.name)
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
  }

  public render() {

    const Box = Skins.Default.Box;

    return (
      <Container>
        <div className="header">
          <Row>
            <Col md={12}>
              <Box title="GITHUB DATA CENTER" tHeight="60px" />
            </Col>
          </Row>
        </div>
        <Row>
          <Col md={4}>
            <Box title="这是个标题11" bHeight="250px">
              <ReactEcharts option={this.options} />
            </Box>
          </Col>
          <Col md={4}>
            <Box title="这是个标题12" bHeight="250px">
              <ReactEcharts option={this.options} />
            </Box>
          </Col>
          <Col md={4}>
            <Box title="这是个标题13" bHeight="250px">
              <ReactEcharts option={this.options} />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Box title="这是个标题21">
              <ReactEcharts option={this.options} />
            </Box>
          </Col>
          <Col md={6}>
            <Box title="这是个标题22">
              <ReactEcharts option={this.options} />
            </Box>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12}>
            <Box title="这是个标题31">
              <ReactEcharts option={this.options} />
            </Box>
          </Col>
        </Row> */}
      </Container>
    );
  }
}
