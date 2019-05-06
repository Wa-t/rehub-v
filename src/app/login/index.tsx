import { Button, Form, Input, message, Row } from "antd";
import KOS, { KosProps } from "kos-core";
import * as React from "react";
import "./login.less";
import model from "./model";

interface IProps extends KosProps {
  username: "string";
}

@KOS.Wrapper({ model })
class Login extends React.PureComponent<IProps> {
  public handleChange = (e: any) => {
    const { dispatch } = this.props;
    dispatch!({
      type: 'setState',
      payload: {
        username: e.target.value,
      },
    });
  }
  public handleSubmit = (): boolean | void => {
    const { dispatch, username } = this.props;
    if (!username) {
      message.warning('请输入账户名称');
      return false;
    }
    dispatch!({
      type: 'queryUser',
      payload: {
        username,
      },
    });
  }
  public render() {
    console.log(this.props)
    return (
      <div className="form">
        <Form name="loginForm">
          <Input placeholder="用户名" onChange={this.handleChange} />
          <Row>
            <Button type="primary" onClick={this.handleSubmit}>
              生成
            </Button>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Login;
