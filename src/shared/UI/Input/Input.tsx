import { FC } from 'react';

interface InputProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
  type?: string;
  className?: string;
  placeHolder?: string;
  autoFocus?: boolean;
}

const Input: FC<InputProps> = ({
  label,
  type,
  className,
  placeHolder,
  onChange,
  value,
  autoFocus,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-zinc-300">
        {label}
      </label>
      <input
        type={type || 'text'}
        className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 ${className}`}
        placeholder={placeHolder}
        autoFocus={autoFocus}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
