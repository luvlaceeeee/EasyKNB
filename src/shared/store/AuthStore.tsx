import { atom } from 'jotai';
import { IUser } from '../types/IUser';

export const userAtom = atom<IUser>({
  id: 1,
  email: 'eee@.ss',
  name: 'Никита',
  surname: 'Литвинков',
  avatar: 'null',
  yandexID: 'null',
  fullName: 'Никита Литвинков',
});

export const userIdAtom = atom<number>((get) => get(userAtom).id);

export const isAuthAtom = atom(true);
