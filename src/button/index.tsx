import React from 'react'
import t from 'prop-types';

export interface ButtonProps {
  /**
   * @description       Button 的类型
   * @default           'info'
   */
  kind?: 'info' | 'error' | 'warning';
  children?: React.ReactNode
}

export type KindMap = Record<Required<ButtonProps>['kind'], string>;

const kinds: KindMap = {
  info: '#5352ED',
  error: '#FF4757',
  warning: '#FFA502',
};

const prefixCls = 'self-button';

const Button: React.FC<ButtonProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
)


Button.propTypes = {
  kind: t.oneOf(['info', 'error', 'warning']),
};

export default Button;