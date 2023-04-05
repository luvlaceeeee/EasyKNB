import { FC } from 'react';

export const TaskContent: FC<{ desc: string }> = ({ desc }) => {
  const capitalizeDesc = desc.slice(0, 60) + `${desc.length > 60 && '...'}`;
  return (
    <div>
      <span className="text-zinc-500">{capitalizeDesc}</span>
    </div>
  );
};
