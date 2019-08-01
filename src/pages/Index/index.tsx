import React, { useEffect, useRef } from 'react';
import { autobind } from 'core-decorators'
import Link from 'umi/link';
import router from 'umi/router';
import { Input, Button, Form, message } from 'antd';
import Particles from 'react-particles-js';
import { connect } from 'dva';
import request from '@/utils/request';
import styles from './index.less';
import { IProps, IState } from './interface';
import { ConnectProps } from '@/models/connect'
import { GlobalModelState } from '@/models/global'

@autobind
// @connect(({ state }) => ({ state }))
class Index extends React.Component<IProps, IState> {
  // canvas: HTMLCanvasElement;
  // ctx: CanvasRenderingContext2D;
  step = 0;

  constructor(props: IProps) {
    super(props)
    // this.state = {
    //   canvas: null
    // }
  }

  loadCanvas = (element: HTMLCanvasElement) => {
    if (element) {
      this.setState({
        canvas: element,
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
  onGoDashboard() {
    router.push('dashboard');
  }
  onSubmit() {
    this.props.form.validateFields((err, values) => {
      if (err) {
        message.warning('请输入github账号');
        return false;
      }

      // this.props.dispatch()

      request({
        url: `https://api.github.com/users/${values.username}`,
        method: 'get',
      }).then(res => {
        window.localStorage.setItem('currentUser', JSON.stringify(res))
        router.push('dashboard');
      }).catch(e => {
        message.error(e);
      })


      // console.log(res)
      // if (res.name === values.username) {
      //   console.log(12)
      // }
    });
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    return (
      <div className={styles.container}>
        <Particles
          style={{
            position: 'absolute',
            zIndex: -10,
            background: 'linear-gradient(45deg, rgb(0, 47, 57) 0%, rgb(0, 33, 47) 100%)'
          }}
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                random: true,
                speed: 1,
                direction: "bottom",
                out_mode: "out"
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                }
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0
                },
                repulse: {
                  distance: 400,
                  duration: 4
                }
              }
            }
          }}
        />
        <Form layout="inline" className={styles.form}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your github username!' }],
            })(
              <Input placeholder="请输入GitHub账号" className={styles.nameInput} />,
            )}

          </Form.Item>
          <Form.Item>
            <Button onClick={this.onSubmit} className={styles.submit}>生成</Button>
          </Form.Item>
        </Form>
        {/* <canvas ref={this.loadCanvas} id="canvas" style={{ position: 'absolute', bottom: 0, left: 0, zIndex: -1 }} /> */}
      </div>
    );
  }
}


export default Form.create<IProps>()(Index)
