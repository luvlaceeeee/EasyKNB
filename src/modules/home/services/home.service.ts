import { $api } from '@/shared/api';
import { IHomeBoard } from '../interfaces';

const findBoardsByUserId = (userId: number): Promise<IHomeBoard[]> =>
    $api.get<IHomeBoard[]>('/boards', {
      params: {
        userId: userId,
      },
    }).then(({data}) => data);

const createBoardByUserID = (userId: number, title: string): Promise<void> =>
  $api.post(
    '/boards',
    {
      title: title,
    },
    {
      params: {
        userId: userId,
      },
    }
  );

export const HomeService = {
  findBoardsByUserId,
  createBoardByUserID,
};
