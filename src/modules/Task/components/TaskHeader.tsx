import { FC } from 'react';

export const TaskHeader: FC<{ title: string }> = ({ title }) => (
  <div className="text-lg font-black">{title}</div>
);
