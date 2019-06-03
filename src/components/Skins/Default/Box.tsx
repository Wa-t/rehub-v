import * as React from 'react';
import './index.less';

interface IBox {
  title?: any
  width?: string,
  tHeight?: string,
  bHeight?: string,
  style?: object,
  children?: any
}
const Box = ({
  title = '',
  style = {},
  width = '100%',
  bHeight = '300px',
  tHeight = '46px',
  children,
}: IBox) => {
  return(
    <div className="default-box-wrapper" style={{ ...style, width }}>
      {
        title && <div className="default-box-title" style={{ height: tHeight, lineHeight: tHeight }}>
          {title}
        </div>
      }
      {
        children && <div className="default-box-body" style={{ height: bHeight }}>
          {children}
        </div>
      }
    </div>
  )
};

export default Box;