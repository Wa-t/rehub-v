import { AutoWrapper } from '@/components';
import ReactEcharts from 'echarts-for-react';
import * as React from 'react';
import { IProps } from './interface';
import model from './model';



@AutoWrapper({ KOSconfig: { model }})
export class Dashboard extends React.Component<IProps> {
  public options = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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
    return (
      <ReactEcharts option={this.options} />
    );
  }
}
