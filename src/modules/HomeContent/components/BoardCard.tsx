import { FC } from 'react';
import { Link } from 'react-router-dom';

const BoardCard: FC<{ id: number; title: string }> = ({ id, title }) => {
  return (
    <Link
      to={`/board/${id}`}
      className="flex h-32 w-72 shrink-0 items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-6 shadow transition-all hover:bg-gray-100 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
    >
      <h5 className="break-words text-center text-2xl font-medium text-gray-900 dark:text-zinc-200">
        {title}
      </h5>
    </Link>
  );
};

export default BoardCard;
