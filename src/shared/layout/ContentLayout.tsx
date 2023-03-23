import { FC } from 'react';
import { LayoutProps } from './layoutTypes';

const ContentLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={`flex h-screen flex-col ${'pl-60'} transition-all duration-300 ease-out`}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
