import { KosProps } from 'kos-core';

interface ICommon {
  name: string;
}

export interface IProps extends KosProps, ICommon {
  routers: any;
  loginLoading: boolean;
}

export interface IInit extends ICommon {
  loginForm?: string;
}
