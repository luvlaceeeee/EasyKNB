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
      className={`${className} inline-flex items-center rounded-lg p-2.5 text-center text-sm font-medium transition-all duration-300 ease-out hover:bg-gray-200`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
