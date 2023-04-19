import { FC } from 'react';
import { Link } from 'react-router-dom';

export const WelcomePage: FC = () => {
  return (
    <div>
      <Link to={'/home'}>
        <button className="m-10 bg-slate-400 p-5">
          Welcome page is loading...
        </button>
      </Link>
    </div>
  );
};
