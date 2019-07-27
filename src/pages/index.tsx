import React, { useEffect, useRef } from 'react';
import { formatMessage } from 'umi-plugin-locale';
import { autobind } from 'core-decorators'
import Link from 'umi/link';
import styles from './index.less';
import { IProps } from './interface';
import { element } from 'prop-types';

@autobind
class Index extends React.Component {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  step = 0;

  constructor(props: IProps) {
    super(props)
    this.canvas = null
    this.ctx = null;
  }

  canvasRef = (element: HTMLCanvasElement) => {
    this.canvas = element
  }


  componentDidMount() {
    this.loopAnimation();
  }

  loopAnimation() {
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.canvas.parentNode.offsetWidth;
    this.canvas.height = this.canvas.parentNode.offsetHeight;

    //清空canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //绘制矩形
    this.ctx.fillStyle = "rgba(0,222,255, 0.2)";
    //角度增加一度
    this.step++;
    //角度转换成弧度
    const angle = this.step * Math.PI / 180;
    //矩形高度的变化量
    const deltaHeight = Math.sin(angle) * 50;
    this.ctx.beginPath();
    //在矩形的左上与右上两个顶点加上高度变化量
    this.ctx.moveTo(0, this.canvas.height);
    this.ctx.moveTo(0, this.canvas.height / 2 + deltaHeight);
    this.ctx.lineTo(this.canvas.width, this.canvas.height / 2 + deltaHeight);
    this.ctx.lineTo(this.canvas.width, this.canvas.height);
    this.ctx.lineTo(0, this.canvas.height);
    this.ctx.lineTo(0, this.canvas.height / 2);

    this.ctx.moveTo(-100 + deltaHeight * 5, this.canvas.height / 2 + deltaHeight);
    this.ctx.quadraticCurveTo(this.canvas.width + deltaHeight * 5, this.canvas.height / 3 + deltaHeight, this.canvas.width + 1000 + deltaHeight * 5, this.canvas.height / 2 + deltaHeight)

    // this.ctx.closePath();
    this.ctx.fill();

    window.requestAnimFrame(this.loopAnimation);
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}><Link to="/dashboard">Go to Dashboard</Link></div>
        <canvas ref={this.canvasRef} id="canvas" style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 1 }} />
      </div>
    );
  }
}


export default Index
