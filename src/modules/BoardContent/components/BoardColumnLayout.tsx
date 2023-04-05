import { FC, PropsWithChildren } from 'react';

export const BoardColumnLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="scrollbar flex flex-1 items-start space-x-7 overflow-auto scroll-smooth p-7 pt-0">
      {children}
    </div>
  );
};
