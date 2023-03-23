import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from '../../../modules/Sidebar/components/Sidebar';
import WelcomePage from '../../WelcomePage/components/WelcomePage';

const RouterPage: FC = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/" element={<Sidebar />}></Route>
    </Routes>
  );
};

export default RouterPage;
