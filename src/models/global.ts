import { Subscription } from 'dva';
import { Reducer } from 'redux';
import { Effect } from './connect';



export interface GlobalModelState {

}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    clearNotices: Effect;
  };
  reducers: {
    changeLayoutCollapsed: Reducer<GlobalModelState>;
  };
  subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
  },

  effects: {
    *clearNotices({ payload }, { put, select }) {
      yield put({
        type: 'saveClearedNotices',
        payload,
      });
      const count: number = yield select(state => state.global);
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: count,
        },
      });
    },
  },

  reducers: {
    changeLayoutCollapsed(state = { notices: [], collapsed: true }, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },

  },

  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof (window as any).ga !== 'undefined') {
          (window as any).ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};

export default GlobalModel;
