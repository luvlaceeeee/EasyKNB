import { IUser } from '@shared/types';
import { FC } from 'react';

export const TaskFooter: FC<{ makers?: IUser[] }> = ({ makers }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        {makers?.map((maker) => (
          <img className="h-7 w-7 rounded-full" src={maker.avatar} />
        ))}
      </div>
    </div>
  );
};
