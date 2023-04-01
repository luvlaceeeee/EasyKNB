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
      className={`rounded-lg p-2.5 transition-all duration-300 ease-out hover:bg-gray-200 dark:text-white ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
