import ReactEcharts from "echarts-for-react";
import * as React from "react";

interface IProps {
  option: any;
  style?: object;
}

export default class Chart extends React.Component<IProps> {
  public componentDidMount() {
    // TODO
  }
  public render() {
    return this.props.option ? <ReactEcharts option={this.props.option} style={{width: '100%',height:'100%', ...this.props.style}} /> : '';
  }
}
