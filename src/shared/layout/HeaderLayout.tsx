import { FC } from 'react';
import { LayoutProps } from './layoutTypes';

const HeaderLayout: FC<LayoutProps> = ({ children }) => {
  return <div className="shrink-0 basis-auto">{children}</div>;
};

export default HeaderLayout;
