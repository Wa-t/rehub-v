import { IPortA } from './dto';

export function portA(data: any): Promise<IPortA> {
  return new Promise(resolve => {
    resolve({
      name: "aaa",
      routers: "111",
      loginLoading: false
    });
  });
}
