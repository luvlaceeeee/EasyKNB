import { FC, PropsWithChildren } from 'react';

const HeaderLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="h-32 shrink-0 basis-auto p-7">{children}</div>;
};

export default HeaderLayout;
