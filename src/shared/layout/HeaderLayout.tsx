import { FC, PropsWithChildren } from 'react';

export const HeaderLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="h-32 shrink-0 basis-auto p-7">{children}</div>;
};
