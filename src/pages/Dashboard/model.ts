import { GetKosState, KosDispatch, KosModel as IModel } from 'kos-core';

import { IInit } from './interface';
import { inquireUser } from './services';

class Model implements IModel<IInit> {
  public namespace: string = 'dashboard';
  public initial: any = {
    userData: {}
  };
  public reducers: any = {
    updateState(state: IInit, { payload }: { payload: IInit }) {
      return {
        ...state,
        ...payload
      };
    }
  };
  public asyncs: any = {
    async queryUser(dispatch: KosDispatch, getState?: GetKosState<IInit>) {
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
      // type: "queryUser"
    });
  };
}

export default new Model();
