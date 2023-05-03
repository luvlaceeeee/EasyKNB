import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/shared/store';

export const PrivateRoutes = () => {
  const isAuth = useAuthStore((state) => state.isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/welcome" />;
};
