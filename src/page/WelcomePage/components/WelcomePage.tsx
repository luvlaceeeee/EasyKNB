import { FC } from 'react';
import { Link } from 'react-router-dom';

const WelcomePage: FC = () => {
  const handlerClick = () => {
    localStorage.setItem('userId', '1');
  };

  return (
    <div>
      <Link to={'/space'}>
        <button onClick={handlerClick} className="m-10 bg-slate-400 p-5">
          log in with user id=1
        </button>
      </Link>
    </div>
  );
};

export default WelcomePage;
