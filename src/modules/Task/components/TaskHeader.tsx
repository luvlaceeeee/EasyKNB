import { FC } from 'react';

export const TaskHeader: FC<{ title: string }> = ({ title }) => {
  const capitalizeTitle = title.slice(0, 24) + `${title.length > 24 && '...'}`;
  return (
    <div className="flex justify-between">
      <span className="text-lg font-black">{capitalizeTitle}</span>
    </div>
  );
};
