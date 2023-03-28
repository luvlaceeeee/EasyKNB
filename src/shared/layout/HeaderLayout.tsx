import { FC, PropsWithChildren } from 'react';

const HeaderLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-1/6 shrink-0 basis-auto border-b-2 border-zinc-400 border-opacity-20">
      {children}
    </div>
  );
};

export default HeaderLayout;
