import { FC } from 'react';

export const TaskContent: FC<{ desc: string }> = ({ desc }) => {
  return (
    <div>
      <span className="text-zinc-500">{desc}</span>
    </div>
  );
};
