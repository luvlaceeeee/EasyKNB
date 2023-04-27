import { FC, ReactNode } from 'react';
import { Spinner } from '../Spinner/Spinner';

export interface TaskModalButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  children?: ReactNode;
}

export const TaskModalButton: FC<TaskModalButtonProps> = (props) => {
  const { disabled, onClick, autoFocus, children, isLoading, text, className } =
    props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex w-full rounded-sm bg-zinc-300 px-4 py-1.5 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-400 disabled:opacity-50 disabled:hover:bg-zinc-300 dark:bg-zinc-600 dark:bg-opacity-80 dark:text-white dark:hover:bg-zinc-700 disabled:dark:hover:bg-zinc-600 ${className}`}
      autoFocus={autoFocus}
    >
      {children}
      {isLoading ? <Spinner /> : text}
    </button>
  );
};
