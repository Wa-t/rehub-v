import React, { useEffect, useRef } from 'react';
import { autobind } from 'core-decorators'
import { Input, Button, Form } from 'antd';
import { connect } from 'dva';
import { ConnectState } from '@/models/connect';
import * as Skins from '@/components/Skins';
import { IProps, IState } from './interface';
import styles from './index.less';

const { Background } = Skins.Default;



// interface Index {
//   props: IProps;
//   state: IState;
// }

// @connect((state, dispatch) => ({
//   state,
//   dispatch
// }))
@autobind
class Index extends React.Component<IProps, IState> {
  // canvas: HTMLCanvasElement;
  // ctx: CanvasRenderingContext2D;
  step = 0;

  constructor(props: IProps) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  loadCanvas = (element: HTMLCanvasElement) => {
    if (element) {
      this.setState({
        // canvas: element,
      })
    }
  }


  componentDidMount() {
    // this.loopAnimation();
  }

  // loopAnimation() {
  //   const { canvas } = this.state;
  //   const { parentNode } = canvas;
  //   // const { offsetWidth, offsetHeight } = parentNode;
  //   const ctx = canvas.getContext('2d');
  //   canvas.width = parentNode.offsetWidth;
  //   canvas.height = parentNode.offsetHeight;

  //   //清空canvas
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   //绘制矩形
  //   ctx.fillStyle = "rgba(0,222,255, 0.2)";
  //   //角度增加一度
  //   this.step++;
  //   //角度转换成弧度
  //   const angle = this.step * Math.PI / 180;
  //   //矩形高度的变化量
  //   const deltaHeight = Math.sin(angle) * 50;
  //   ctx.beginPath();
  //   //在矩形的左上与右上两个顶点加上高度变化量
  //   ctx.moveTo(0, canvas.height);
  //   ctx.moveTo(0, canvas.height / 2 + deltaHeight);
  //   ctx.lineTo(canvas.width, canvas.height / 2 + deltaHeight);
  //   ctx.lineTo(canvas.width, canvas.height);
  //   ctx.lineTo(0, canvas.height);
  //   ctx.lineTo(0, canvas.height / 2);

  //   ctx.moveTo(-100 + deltaHeight * 5, canvas.height / 2 + deltaHeight);
  //   ctx.quadraticCurveTo(canvas.width + deltaHeight * 5, canvas.height / 3 + deltaHeight, canvas.width + 1000 + deltaHeight * 5, canvas.height / 2 + deltaHeight)

  //   // ctx.closePath();
  //   ctx.fill();

  //   window.requestAnimFrame(this.loopAnimation);
  // }
  onSubmit() {
    this.props.form.validateFields((err, values) => {
      const { dispatch } = this.props;

      dispatch({
        type: 'global/fetchUser',
        payload: {
          username: values.username,
        }
      })
      this.setState({
        loading: true,
      })
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.container}>
        <Background />
        <Form layout="inline" className={styles.form}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your github username!' }],
            })(
              <Input placeholder="请输入GitHub账号" className={styles.nameInput} />,
            )}

          </Form.Item>
          <Form.Item>
            <Button onClick={this.onSubmit} className={styles.submit} loading={this.state.loading}>生成</Button>
          </Form.Item>
        </Form>
        {/* <canvas ref={this.loadCanvas} id="canvas" style={{ position: 'absolute', bottom: 0, left: 0, zIndex: -1 }} /> */}
      </div>
    );
  }
}

const mapStateToProps = () => ({})
export default connect(mapStateToProps)(Form.create()(Index))
