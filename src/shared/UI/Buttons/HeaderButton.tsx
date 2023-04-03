import { FC } from 'react';

export interface HeaderButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

export const HeaderButton: FC<HeaderButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border-2 border-gray-200 bg-white py-3 px-4 text-sm font-medium text-gray-900 transition-all hover:bg-gray-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 ${className}`}
    >
      {text}
    </button>
  );
};
