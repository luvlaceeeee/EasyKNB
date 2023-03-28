import { FC } from 'react';
import { Link } from 'react-router-dom';

const WelcomePage: FC = () => {
  return (
    <div>
      <Link to={'/home'}>
        <button className="m-10 bg-slate-400 p-5">log in with user id=1</button>
      </Link>
    </div>
  );
};

export default WelcomePage;
