import { atom } from 'jotai';
import { IUser } from '../types/IUser';

export const userAtom = atom<IUser>({
  id: 1,
  email: 'eee@.ss',
  name: 'Avilio',
  surname: 'Bruno',
  avatar:
    'https://sun9-31.userapi.com/impg/isjEmyfk5Q2x-oPznsh5pDiktKy8WXSCzKYwfw/cejg6hJfz5A.jpg?size=736x736&quality=95&sign=f9c18865eed5d6aa2182344ee6248cbd&type=album',
  yandexID: 'null',
  fullName: 'Avilio Bruno',
});

export const userIdAtom = atom<number>((get) => get(userAtom).id);

export const isAuthAtom = atom(true);
