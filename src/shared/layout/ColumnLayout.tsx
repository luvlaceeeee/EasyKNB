import { FC } from 'react';
import { LayoutProps } from './layoutTypes';

const ColumnLayout: FC<LayoutProps> = ({ children }) => {
  return <div className="flex flex-1">{children}</div>;
};

export default ColumnLayout;
