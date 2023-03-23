import { FC } from 'react';

interface ContentProps {
  children: React.ReactNode;
}

const ContentLayout: FC<ContentProps> = ({ children }) => {
  return (
    <div
      className={`flex h-screen flex-col ${'pl-60'} transition-all duration-300 ease-out`}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
