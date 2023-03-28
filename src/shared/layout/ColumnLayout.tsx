import { FC, PropsWithChildren } from 'react';

const ColumnLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-1 flex-col">{children}</div>;
};

export default ColumnLayout;
