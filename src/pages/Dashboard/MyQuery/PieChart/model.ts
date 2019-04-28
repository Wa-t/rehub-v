import { GetKosState, KosDispatch, KosModel as IModel } from 'kos-core';

import { IPortA } from './dto';
import { IInit } from './interface';
import { portA } from './service';

class Model implements IModel<IInit> {
  public namespace: string;
  public initial: {
    name: "123";
    showSavedItem: false;
    tabs: [];
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
    async getPortA(dispatch: KosDispatch, getState?: GetKosState<IInit>) {
      const listData: IPortA = await portA("111");
      console.log(listData);
    }
  };
  public setup = () => {
    // `setup` functon could be removed if empty inside.
  };
}

export default new Model();
