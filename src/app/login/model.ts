import { inquireUser } from "@/app/login/services";
import { saveSession } from '@/common/utils'
import history from '@/common/utils/history';
import { KosModel as IModel } from "kos-core";




export interface IInitial {
  username: string,
}

class Login implements IModel<IInitial> {
  public namespace: string = "login";
  public initial = {
    username: '',
  };
  public reducers = {
  };
  public asyncs = {
    async queryUser(dispatch: (action: any) => void, getState?: () => IInitial, action?: any) {
      const { payload } = action;
      const { code, data } = await inquireUser(payload);
      if (code === 200) {
        dispatch!({
          type: 'system/setState',
          payload: {
            userData: data,
          }
        });
        saveSession('isLogin', true)
        setTimeout(() => {
          history.push('/dashboard')
        }, 1000)
      }
    }
  };
  public setup = (
    dispatch: (action: any) => void,
  ) => {
    //
  };
}

export default new Login();
