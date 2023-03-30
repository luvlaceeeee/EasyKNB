import { FC, PropsWithChildren } from 'react';

const Modal: FC<
  PropsWithChildren<{ isOpen: boolean; setOpen: (arg0: boolean) => void }>
> = ({ children, isOpen, setOpen }) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40"
    >
      <div className="rounded-lg bg-white p-6">{children}</div>
    </div>
  );
};

export default Modal;
