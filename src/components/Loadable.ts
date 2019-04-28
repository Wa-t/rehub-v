import Loadable from 'react-loadable';

import { Loader } from './Loader';

export default function(loader: any) {
  return Loadable({
    loader,
    loading: Loader
  });
}
