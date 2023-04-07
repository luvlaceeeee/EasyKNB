import { FC, PropsWithChildren } from 'react';

export const Modal: FC<
  PropsWithChildren<{
    isOpen: boolean;
    setOpen: React.Dispatch<
      React.SetStateAction<{
        target: string;
        state: boolean;
      }>
    >;
  }>
> = ({ children, isOpen, setOpen }) => {
  return (
    <div
      onClick={() => setOpen({ target: '', state: false })}
      className={`${
        !isOpen && 'pointer-events-none opacity-0'
      } fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-opacity`}
    >
      <div
        className={` ${
          !isOpen && 'opacity-0'
        } rounded-lg bg-white p-6 shadow-xl dark:bg-zinc-900`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
