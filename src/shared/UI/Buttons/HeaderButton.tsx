import { FC } from 'react';

export interface HeaderButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

const HeaderButton: FC<HeaderButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border-2 border-gray-200 bg-white py-3 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-700 ${className}`}
    >
      {text}
    </button>
  );
};

export default HeaderButton;
