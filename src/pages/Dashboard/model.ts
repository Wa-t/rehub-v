import { GetKosState, KosDispatch, KosModel as IModel } from 'kos-core';

import { IInit } from './interface';
import { login } from './services';

class Model implements IModel<IInit> {
  public namespace: string;
  public initial: any = {
    name: "123"
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
    async login(dispatch: KosDispatch, getState?: GetKosState<IInit>) {
      const { loginForm } = getState!();
      await login(loginForm);
    }
  };
}

export default new Model();
