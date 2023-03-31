import { FC } from 'react';

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
      className={`w-full rounded-lg bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-gray-800 ${className}`}
    >
      {isLoading ? '...Loading' : text}
    </button>
  );
};

export default DefaultButton;
