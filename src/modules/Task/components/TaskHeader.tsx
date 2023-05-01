import { FC } from 'react';

export const TaskHeader: FC<{ title: string }> = ({ title }) => (
  <div className="w-2/3 text-lg font-black">{title}</div>
);
