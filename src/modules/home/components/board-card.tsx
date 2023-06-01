import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IBoardCardProps {
  id: number;
  title: string;
}

export const BoardCard: FC<IBoardCardProps> = ({ id, title }) => {
  return (
    <Link
      to={`/board/${id}`}
      className={
        'border-sec flex h-32 w-72 shrink-0 items-center justify-center rounded-lg border border-secondary bg-secondary/50 p-6 shadow hover:bg-secondary/70'
      }
    >
      <h5 className="break-all text-2xl text-gray-900 dark:text-zinc-200">
        {title}
      </h5>
    </Link>
  );
};
