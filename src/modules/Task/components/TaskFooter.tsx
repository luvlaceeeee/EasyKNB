import { FC } from 'react';

export const TaskFooter: FC<{ avatar: string }> = ({ avatar }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img className="h-7 w-7 rounded-full" src={avatar} />
      </div>
    </div>
  );
};
