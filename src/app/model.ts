// import { message } from "antd";
import { GetKosState, KosDispatch, KosModel as IModel } from 'kos-core';
import {inquireUser } from "./services";

export interface IInitial {
  userData: object,
}

class Model implements IModel<IInitial> {
  public namespace: string = "system";
  public initial = {
    userData: {},
  };
  public reducers = {
    updateState(state: any, action: any) {
      return {
        ...state,
        ...action.payload
      };
    }
  };
  public asyncs = {
    async queryUser(dispatch: KosDispatch, getState?: GetKosState<IInitial>) {
      const res = await inquireUser();
      dispatch({
        type: 'updateState',
        payload: {
          userData: res,
        }
      })
    }
  };
  public setup = (
    dispatch: (action: any) => void,
    getState: () => { userData: object }
  ) => {
    dispatch({
      type: "queryUser"
    });
  };
}
export default new Model();
