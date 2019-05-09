import { GetKosState, KosDispatch, KosModel as IModel } from 'kos-core';

import { IInit } from './interface';
import { inquireRepos } from './services';

class Model implements IModel<IInit> {
  public namespace: string = 'dashboard';
  public initial: any = {
    userData: {},
    repoList: []
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
    async queryRepos(dispatch: KosDispatch, getState?: GetKosState<IInit>) {
      const { code, data } = await inquireRepos();
      if (code === 200) {
        dispatch({
          type: 'updateState',
          payload: {
            repoList: data,
          }
        })
      }
    }
  };
  public setup = (
    dispatch: (action: any) => void,
    getState: () => { userData: object }
  ) => {
    dispatch({
      type: "queryRepos"
    });
  };
}

export default new Model();
