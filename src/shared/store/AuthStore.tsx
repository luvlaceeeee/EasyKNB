import { atom } from 'jotai';

export interface IUser {
  id: number;
  email: string;
  name: string;
  surname: string;
  avatar: string;
  yandexID: string;
  fullName: string;
}

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
