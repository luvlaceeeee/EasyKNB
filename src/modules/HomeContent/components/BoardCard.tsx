import { FC } from 'react';
import { Link } from 'react-router-dom';

const BoardCard: FC<{ id: number }> = ({ id }) => {
  return (
    <Link
      to={`/board/${id}`}
      className="flex h-32 w-72 shrink-0 items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-6 shadow hover:bg-gray-100"
    >
      <h5 className="break-words text-center text-2xl font-medium text-gray-900">
        Agile board
      </h5>
    </Link>
  );
};

export default BoardCard;
