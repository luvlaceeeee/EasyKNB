import { FC } from 'react';

interface ContentProps {
  children: React.ReactNode;
}

const ContentLayout: FC<ContentProps> = ({ children }) => {
  return <div className={`flex h-screen flex-col ${'pl-28'}`}>{children}</div>;
};

export default ContentLayout;
