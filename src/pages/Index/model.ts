import { Effect } from 'dva';
import { Reducer } from 'redux';
// import { CurrentUser } from './interface';
import { queryUsers } from './service';



export interface UserModelState {
    // currentUser?: CurrentUser;
}

export interface UserModelType {
    namespace: 'index';
    state: UserModelState;
    effects: {
        queryUser: Effect;
    };
    // reducers: {
    //     updateState: Reducer<UserModelState>;
    // };
}

const UserModel: UserModelType = {
    namespace: 'index',

    state: {
        currentUser: {},
    },

    effects: {
        * queryUser(_, { call, put }) {
            const response = yield call(queryUsers);
            yield put({
                type: 'global/updateState',
                payload: response,
            });
        },
    },
};

export default UserModel;
