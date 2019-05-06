import { inquireUser } from "@/app/login/services";
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
      const res = await inquireUser(payload);
      dispatch!({
        type: 'system/setState',
        payload: {
          userData: res,
        }
      });
    }
  };
  public setup = (
    dispatch: (action: any) => void,
  ) => {
    //
  };
}

export default new Login();
