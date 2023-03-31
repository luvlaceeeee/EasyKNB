import { FC } from 'react';

export interface DefaultButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  className?: string;
}

const DefaultButton: FC<DefaultButtonProps> = ({
  onClick,
  text,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-lg bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-gray-800 ${className}`}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
