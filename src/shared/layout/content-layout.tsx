import { FC, PropsWithChildren } from 'react';

export const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={'flex h-screen flex-col pl-24 dark:bg-zinc-900'}>
      {children}
    </div>
  );
};
