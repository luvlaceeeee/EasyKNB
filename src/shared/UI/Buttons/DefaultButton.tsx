import { FC } from 'react';
import Spinner from '../Spinner/Spinner';

export interface DefaultButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  className?: string;
  isLoading?: boolean;
}

const DefaultButton: FC<DefaultButtonProps> = ({
  onClick,
  text,
  className,
  isLoading,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-lg bg-gray-700 px-5 py-2.5 text-center text-lg font-medium text-white transition-all hover:bg-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-700 ${className}`}
    >
      {isLoading ? <Spinner /> : text}
    </button>
  );
};

export default DefaultButton;
