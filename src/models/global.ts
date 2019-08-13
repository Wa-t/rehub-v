import { Subscription } from 'dva';
import { Reducer } from 'redux';
import { message } from 'antd';
import router from 'umi/router';
import { Effect } from './connect';
import { quireUser } from '../pages/Index/service';


export interface CurrentUser {
}
export interface GlobalModelState {
  currentUser?: CurrentUser
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    fetchUser: Effect;
  };
  reducers: {
    updateState: Reducer<GlobalModelState>
  };
  subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    currentUser: {}
  },

  effects: {
    * fetchUser({ payload }, { call, put, select }) {
      const res = yield call(quireUser, payload)

      if (!res) {
        message.warning('请输入github账号');
        return false;
      }
      yield put({
        type: 'updateState',
        payload: {
          ...res,
        },
      });
      router.push('dashboard');
    },
  },

  reducers: {
    updateState(state, action) {
      return {
        ...state,
        currentUser: { ...action.payload } || {},
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
