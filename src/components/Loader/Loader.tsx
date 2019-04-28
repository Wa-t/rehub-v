import './Loader.less';

import classNames from 'classnames';
import * as React from 'react';

export const Loader = (props: { spinning: boolean; fullScreen: boolean }) => (
  <div
    className={classNames("loader", {
      hidden: !props.spinning,
      fullScreen: props.fullScreen
    })}
  >
    <div className="warpper">
      <div className="inner" />
      <div className="text">LOADING</div>
    </div>
  </div>
);
