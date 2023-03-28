import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../../modules/Sidebar/components/Sidebar';
import HomePage from '../../HomePage/components/HomePage';
import PrivateRoutes from './PrivateRoutes';

const RouterPage: FC = () => {
  return (
    <Routes>
      {/* <Route path="" element={<Navigate to="/welcome" />} /> */}
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Sidebar />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Route>
      {/* <Route path="/welcome" element={<WelcomePage />} /> */}
    </Routes>
  );
};

export default RouterPage;
