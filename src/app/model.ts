import { message } from "antd";
import { KosModel as IModel } from "kos-core";
import { checkLogin as cLogin } from "./services";

export interface IInitial {
  collapsed: boolean;
  isLogin: boolean;
}

class Model implements IModel<IInitial> {
  public namespace: string = "system";
  public initial = {
    collapsed: false,
    isLogin: false
  };
  public reducers = {
    toggleCollapsed(state: any) {
      return {
        ...state,
        collapsed: !state.collapsed
      };
    },
    setState(state: any, action: any) {
      return {
        ...state,
        ...action.payload
      };
    }
  };
  public asyncs = {
    async login(dispatch: (action: any) => void) {
      await dispatch({
        type: "setState",
        payload: {
          isLogin: true
        }
      });
      window.location.replace("#/a");
    },
    async checkLogin(dispatch: (action: any) => void) {
      const { code } = await cLogin();
      if (code === "200") {
        message.success("已登录");
        dispatch({
          type: "setState",
          payload: {
            isLogin: true
          }
        });
      } else {
        window.location.replace("#/login");
      }
    }
  };
  public setup = (
    dispatch: (action: any) => void,
    getState: () => { isLogin: boolean }
  ) => {
    const { isLogin } = getState();
    if (!isLogin) {
      dispatch({
        type: "checkLogin"
      });
    }
  };
}
export default new Model();
