import { KosProps } from 'kos-core';

interface ICommon {
  name: string;
}

export interface IProps extends KosProps, ICommon {
  options?: any;
}

export interface IInit extends ICommon {
  loginForm?: string;
}
