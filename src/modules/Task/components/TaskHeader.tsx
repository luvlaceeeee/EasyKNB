import { FC } from 'react';

export const TaskHeader: FC<{ title: string }> = ({ title }) => {
  // const capitalizeTitle = title.slice(0, 24) + `${title.length > 24 ? '...' : ''}`;
  //TODO Change title to input
  return (
    <div className="flex justify-between">
      {/* <input value={capitalizeTitle} /> */}
      <span className="text-lg font-black">{title}</span>
    </div>
  );
};
