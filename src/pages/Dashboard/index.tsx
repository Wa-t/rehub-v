import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Col, Container, Row, setConfiguration } from 'react-grid-system';
import ReactEcharts from 'echarts-for-react';
import * as Skins from '@/components/Skins';
import { IProps } from './interface';
import './index.less';


const Box = Skins.Default.Box;

setConfiguration({ containerWidths:  [1366]})

const Dashboard: React.FC<IProps> = ({
  loading
}) => {
  const options = {
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
  }
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
          <ReactEcharts option={options} />
        </Box>
      </Col>
      <Col md={4}>
        <Box title="这是个标题12" bHeight="250px">
          <ReactEcharts option={options} />
        </Box>
      </Col>
      <Col md={4}>
        <Box title="这是个标题13" bHeight="250px">
          <ReactEcharts option={options} />
        </Box>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Box title="这是个标题21">
          <ReactEcharts option={options} />
        </Box>
      </Col>
      <Col md={6}>
        <Box title="这是个标题22">
          <ReactEcharts option={options} />
        </Box>
      </Col>
    </Row>
  </Container>)
}

export default Dashboard;
