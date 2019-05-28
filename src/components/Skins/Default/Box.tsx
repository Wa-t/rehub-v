import * as React from 'react';
import './index.less';

interface IBox {
  title?: any
  width?: number,
  height?: number,
  style?: object,
  children?: any
}
const Box = ({
  title = '',
  style = {},
  width = 320,
  height = 300,
  children,
}: IBox) => {
  return(
    <div className="default-box-wrapper" style={{ ...style, width }}>
      {
        title && <div className="default-box-title">
          {title}
        </div>
      }
      <div className="default-box-body" style={{ height }}>
        {children}
      </div>
    </div>
  )
};

export default Box;