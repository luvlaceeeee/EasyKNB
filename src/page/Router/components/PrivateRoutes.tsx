import { useAtom } from 'jotai';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthAtom } from '../../../shared/store/AuthStore';

const PrivateRoutes = () => {
  const [auth] = useAtom(isAuthAtom);
  return auth ? <Outlet /> : <Navigate to="/welcome" />;
};

export default PrivateRoutes;
