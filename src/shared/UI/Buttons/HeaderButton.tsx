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
      className={`rounded-lg border border-gray-200 bg-white py-4 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-700 ${className}`}
    >
      {text}
    </button>
  );
};

export default HeaderButton;
