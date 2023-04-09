import { Sidebar } from '@modules/Sidebar/components/Sidebar';
import { BoardPage } from '@page/BoardPage/components/BoardPage';
import { HomePage } from '@page/HomePage/components/HomePage';
import { NotFoundPage } from '@page/NotFoundPage';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';

//TODO Add error page for board(when no available id)

export const RouterPage: FC = () => {
  return (
    <Routes>
      {/* <Route path="" element={<Navigate to="/welcome" />} /> */}
      <Route path="*" element={<NotFoundPage />} />
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
