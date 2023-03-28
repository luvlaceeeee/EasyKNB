import { FC } from 'react';

export interface HeaderButtonProps {
  handlerFn: () => void;
  text: string;
  className?: string;
}

const HeaderButton: FC<HeaderButtonProps> = ({
  text,
  handlerFn,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={handlerFn}
      className={`rounded-xl border-2 border-gray-200 bg-white py-3 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-700 ${className}`}
    >
      {text}
    </button>
  );
};

export default HeaderButton;
