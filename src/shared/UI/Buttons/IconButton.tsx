import { FC } from 'react';

export interface IconButtonProps {
  icon: React.ReactNode;
  handlerFn: () => void;
  className?: string;
}

const IconButton: FC<IconButtonProps> = ({ icon, handlerFn, className }) => {
  return (
    <button
      onClick={handlerFn}
      className={`rounded-lg p-2.5 transition-all duration-300 ease-out hover:bg-gray-200 dark:text-zinc-200 dark:hover:bg-zinc-800 ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
