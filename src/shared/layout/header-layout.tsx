import { FC, PropsWithChildren } from 'react';

export const HeaderLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="h-32 p-7">{children}</div>;
};
