import React, { ReactNode } from 'react';
import { Spinner } from '../Spinner/Spinner';

export interface DefaultButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  children?: ReactNode;
}

export const DefaultButton = React.forwardRef<
  HTMLButtonElement,
  DefaultButtonProps
>((props, ref) => {
  const { disabled, onClick, autoFocus, children, isLoading, text, className } =
    props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex w-full items-center justify-center rounded-lg bg-gray-700 px-5 py-2.5 text-center text-lg font-medium text-white transition-all hover:bg-gray-800 disabled:opacity-75 disabled:hover:bg-gray-700 dark:bg-zinc-600 dark:hover:bg-zinc-700 disabled:dark:hover:bg-zinc-600 ${className}`}
      ref={ref}
      autoFocus={autoFocus}
    >
      {children}
      {isLoading ? <Spinner /> : text}
    </button>
  );
});
