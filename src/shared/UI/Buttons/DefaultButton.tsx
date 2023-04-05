import { FC, PropsWithChildren } from 'react';
import { Spinner } from '../Spinner/Spinner';

export interface DefaultButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  className?: string;
  isLoading?: boolean;
}

export const DefaultButton: FC<PropsWithChildren<DefaultButtonProps>> = ({
  onClick,
  text,
  className,
  isLoading,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-center rounded-lg bg-gray-700 px-5 py-2.5 text-center text-lg font-medium text-white transition-all hover:bg-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-700 ${className}`}
    >
      {children}
      {isLoading ? <Spinner /> : text}
    </button>
  );
};
