import { FC } from 'react';
import { IconButtonProps } from './buttonTypes';

const IconButton: FC<IconButtonProps> = ({ icon, handlerFn }) => {
  return (
    <button
      onClick={handlerFn}
      className="inline-flex items-center rounded-lg p-2.5 text-center text-sm font-medium transition-all duration-300 ease-out hover:bg-gray-200"
    >
      {icon}
    </button>
  );
};

export default IconButton;
