import { FC } from 'react';

const WelcomePage: FC = () => {
  const handlerClick = () => {
    localStorage.setItem('userId', '1');
  };

  return (
    <div>
      <button onClick={handlerClick} className="m-10 bg-slate-400 p-5">
        State user id to local storage
      </button>
    </div>
  );
};

export default WelcomePage;
