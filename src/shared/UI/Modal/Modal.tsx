import { FC, PropsWithChildren } from 'react';

const Modal: FC<
  PropsWithChildren<{ isOpen: boolean; setOpen: (arg0: boolean) => void }>
> = ({ children, isOpen, setOpen }) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className={`${
        !isOpen && 'pointer-events-none opacity-0'
      } fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-opacity`}
    >
      <div
        className="rounded-lg bg-white p-6 shadow-xl dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
