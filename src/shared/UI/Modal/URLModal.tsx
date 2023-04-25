import { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

export const URLModal: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      className={`fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-opacity`}
    >
      <div
        className={`relative z-20 w-[700px] rounded-lg bg-white shadow-xl dark:bg-zinc-900 dark:text-zinc-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
