import { FC } from 'react';
import { LayoutProps } from './layoutTypes';

const HeaderLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-1/5 shrink-0 basis-auto border-b-2 border-zinc-400 border-opacity-20">
      {children}
    </div>
  );
};

export default HeaderLayout;
