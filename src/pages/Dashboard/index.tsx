import { AutoWrapper } from '@/components';
import * as Skins from '@/components/Skins';
import ReactEcharts from 'echarts-for-react';
import * as React from 'react';
import { IProps } from './interface';
import model from './model';



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
      <div>
        <Box title="这是个标题1">
          <ReactEcharts option={this.options} />
        </Box>
        <Box title="这是个标题2">
          <ReactEcharts option={this.options} />
        </Box>
        <Box title="这是个标题3">
          <ReactEcharts option={this.options} />
        </Box>
        <Box title="这是个标题4">
          <ReactEcharts option={this.options} />
        </Box>
        <Box title="这是个标题5">
          <ReactEcharts option={this.options} />
        </Box>
      </div>
    );
  }
}
