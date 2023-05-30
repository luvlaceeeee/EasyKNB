import { FC, PropsWithChildren } from 'react';

export const BoardColumnLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="scrollbar flex flex-1 items-start space-x-7 overflow-y-hidden scroll-smooth p-7 pb-5 pt-2">
      {children}
    </div>
  );
};
