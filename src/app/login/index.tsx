import { Button, Input, Row } from "antd";
import KOS, { KosProps } from "kos-core";
import * as React from "react";
import { Field, Form } from "src_components/kos-form-antd";
import "./login.less";
import model from "./model";

interface IProps extends KosProps {
  mess: "string";
}

@KOS.Wrapper({ model })
class Login extends React.PureComponent<IProps> {
  public handleSubmit() {
    const { dispatch } = this.props;
    const { getNamespace } = this.props;
    Form.validate(getNamespace!(), "loginForm", (result: object) => {
      if (result) {
        dispatch!({
          type: "login"
        });
      }
    });
  }
  public submitForm = () => {
    const { dispatch } = this.props;
    dispatch!({
      type: "login"
    });
  };
  public render() {
    return (
      <div className="form">
        <div className="logo">
          <span className="imgs" />
          <span>登 录</span>
        </div>
        <Form name="loginForm" onSubmit={() => this.submitForm()}>
          <Field label="用户名：" field="username">
            <Input placeholder="用户名" />
          </Field>
          <Field label="密码：" field="password">
            <Input type="password" placeholder="密码" />
          </Field>
          <Row>
            <Button htmlType="submit" type="primary" onClick={() => this.handleSubmit()}>
              登录
            </Button>
            <p>
              <span>kos-admin</span>
            </p>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Login;
