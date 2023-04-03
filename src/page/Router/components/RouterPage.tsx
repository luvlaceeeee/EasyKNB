import { Sidebar } from '@modules/Sidebar/components/Sidebar';
import { BoardPage } from '@page/BoardPage/components/BoardPage';
import { HomePage } from '@page/HomePage/components/HomePage';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';

export const RouterPage: FC = () => {
  return (
    <Routes>
      {/* <Route path="" element={<Navigate to="/welcome" />} /> */}
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Sidebar />}>
          <Route path="home" element={<HomePage />} />
          <Route path="board/:boardId" element={<BoardPage />} />
        </Route>
      </Route>
      {/* <Route path="/welcome" element={<WelcomePage />} /> */}
    </Routes>
  );
};
