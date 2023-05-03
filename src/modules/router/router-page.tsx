import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Sidebar } from 'lucide-react';
import { NotFoundPage } from '../not-found/NotFoundPage';
import { PrivateRoutes } from './private-routes';
import { HomePage } from '../home/HomePage';
import { BoardPage } from '../board/board-page';
import { TaskModal } from '../Task';
import { WelcomePage } from '../welcome/WelcomePage';

// TODO: Add error page for board(when no available id)
export const RouterPage: FC = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/welcome" />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Sidebar />}>
          <Route path="home" element={<HomePage />} />
          <Route path="board/:boardId" element={<BoardPage />}>
            <Route path="c/:columnId/:taskId" element={<TaskModal />} />
          </Route>
        </Route>
      </Route>
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  );
};
