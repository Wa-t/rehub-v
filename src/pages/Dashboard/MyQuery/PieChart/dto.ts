interface ICommon {
  name: string;
}

export interface IPortA extends ICommon {
  routers: any;
  loginLoading: boolean;
}

export interface IPortB extends ICommon {
  loginForm?: string;
}
