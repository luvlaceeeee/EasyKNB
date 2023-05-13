import { IUser } from '@/shared/types';
import { FC } from 'react';

export const TaskFooter: FC<{ makers?: IUser[] }> = ({ makers }) => {
  return (
    <div>
      {makers?.map((maker) => (
        <img className="h-7 w-7 rounded-full" src={maker.avatar} />
      ))}
    </div>
  );
};
