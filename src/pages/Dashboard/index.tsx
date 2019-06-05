import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Col, Container, Row, setConfiguration } from 'react-grid-system';
import Chart from '@/components/Chart';
import * as Skins from '@/components/Skins';
import { IProps } from './interface';
import mapOption from '../../../mock/mapOption';
import calendar from '../../../mock/calendar';
import './index.less';


const Box = Skins.Default.Box;

setConfiguration({ containerWidths:  [1366]})

const Dashboard: React.FC<IProps> = ({
  loading
}) => {
  console.log('mapOption', mapOption)
  const optionsLeft1 = {
    grid: {
      top: 20,
      bottom: 30,
    },
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLabel: {
          color: '#dafef9'
        },
        axisLine: {
            lineStyle: {
            color: '#dafef9'
          }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
          color: '#dafef9'
        }
      }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }],
    // color: '#dafef9'
  }
  const optionsLeft2 = {
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'pie'
    }]
  }
  return (
    <Container>
      <Row className="header">
        <Col md={12}>
          <Box title="GITHUB DATA CENTER" tHeight="60px" />
        </Col>
      </Row>
      <Row className="container">
        <Col md={3} className="left">
          <Box title={<div style={{ textAlign: 'left', paddingLeft: 16 }}>这是个标题left</div>} bHeight="200px">
            <Chart option={optionsLeft1} />
          </Box>
          <Box title={<div style={{ textAlign: 'left', paddingLeft: 16 }}>这是个标题left</div>} bHeight="250px" style={{ marginTop: 16 }}>
            <Chart option={optionsLeft2} />
          </Box>
        </Col>
        <Col md={6} className="center">
          <Box title="模拟迁徙" bHeight="350px">
            <Chart option={mapOption} />
          </Box>
          <Box title="github提交记录" bHeight="104px" style={{ marginTop: 16 }}>
            <Chart option={calendar} />
          </Box>
        </Col>
        <Col md={3} className="right">
          <Box title={<div style={{ textAlign: 'left', paddingLeft: 16 }}>这是个标题right</div>} bHeight="200px">
            <Chart option={optionsLeft1} />
          </Box>
          <Box title={<div style={{ textAlign: 'left', paddingLeft: 16 }}>这是个标题right</div>} bHeight="250px" style={{ marginTop: 16 }}>
            <Chart option={optionsLeft1} />
          </Box>
        </Col>
      </Row>
      <Row className="footer" style={{ marginTop: 14 }}>
        <Col md={12} >
          <Box title="FOOTER" tHeight="60px" />
        </Col>
      </Row>
    </Container>)
}

export default Dashboard;
