import { useAuthStore } from '@/shared/store/auth.store';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
  const isAuth = useAuthStore((state) => state.isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/welcome" />;
};
