import { IUser } from '../types/IUser';
import { create } from 'zustand';

type AuthStore = {
  user: IUser;
  isAuth: boolean;
};

type AuthAction = {
  updateUser: (user: AuthStore['user']) => void;
  updateIsAuth: (isAuth: AuthStore['isAuth']) => void;
};

const mockUser: IUser = {
  id: 1,
  email: 'eee@.ss',
  name: 'Avilio',
  surname: 'Bruno',
  avatar:
    'https://sun9-31.userapi.com/impg/isjEmyfk5Q2x-oPznsh5pDiktKy8WXSCzKYwfw/cejg6hJfz5A.jpg?size=736x736&quality=95&sign=f9c18865eed5d6aa2182344ee6248cbd&type=album',
  yandexID: 'null',
  fullName: 'Avilio Bruno',
};

export const useAuthStore = create<AuthStore & AuthAction>((set) => ({
  user: mockUser,
  isAuth: true,
  updateUser: (user) => set(() => ({ user })),
  updateIsAuth: (isAuth) => set(() => ({ isAuth })),
}));
