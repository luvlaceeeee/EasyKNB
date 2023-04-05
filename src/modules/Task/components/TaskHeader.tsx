import { FC } from 'react';

export const TaskHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex justify-between">
      <span className="text-lg font-black">{title}</span>
    </div>
  );
};
