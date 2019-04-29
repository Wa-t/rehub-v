import { login } from "@/app/login/services";
import { message } from "antd";
import { KosModel as IModel } from "kos-core";


export interface IInitial {
  isLogin: boolean;
  loginForm: object;
}

class Login implements IModel<IInitial> {
  public namespace: string = "login";
  public initial = {
    isLogin: true,
    loginForm: {
      username: "",
      password: ""
    }
  };
  public validators = [
    {
      formName: "loginForm",
      validators: [
        {
          field: "username",
          rules: "required",
          help: "请输入用户名"
        },
        {
          field: "password",
          rules: "required",
          help: "请输入密码"
        }
      ]
    }
  ];
  public reducers = {
    updateState(state: any, payload: any) {
      return {
        ...state,
        ...payload
      };
    },
    toggleCollapsed(state: any) {
      return {
        ...state,
        collapsed: !state.collapsed
      };
    }
  };
  public asyncs = {
    async login(dispatch: (action: any) => void, getState?: () => IInitial) {
      const { loginForm } = getState!(); // !: getState 必传
      const { code } = await login(loginForm);
      if (code === "200") {
        message.success("登录成功");
        dispatch({
          type: "system/login"
        });
      }
    }
  };
  public setup = (
    dispatch: (action: any) => void,
    getState: () => { isLogin: boolean }
  ) => {
    //
  };
}

export default new Login();
