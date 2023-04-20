import { Sidebar } from '@modules/Sidebar/components/Sidebar';
import { TaskModal } from '@modules/Task';
import { BoardPage } from '@page/BoardPage/components/BoardPage';
import { HomePage } from '@page/HomePage/components/HomePage';
import { NotFoundPage } from '@page/NotFoundPage';
import { WelcomePage } from '@page/WelcomePage';
import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';

//TODO Add error page for board(when no available id)

export const RouterPage: FC = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/welcome" />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Sidebar />}>
          <Route path="home" element={<HomePage />} />
          <Route path="board/:boardId" element={<BoardPage />}>
            <Route path="c/:columnId/t/:taskId" element={<TaskModal />} />
          </Route>
        </Route>
      </Route>
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  );
};
