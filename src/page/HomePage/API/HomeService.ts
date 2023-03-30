import $api from '../../../shared/API/axiosConfig';
import { IHomeBoard } from '../types/IHomeBoard';

const findBoardByUserId = async (userId: number) => {
  const { data } = await $api.get<IHomeBoard[]>('/boards', {
    params: {
      userId: userId,
    },
  });
  return data;
};

const createBoardByUserID = async (userId: number, title: IHomeBoard) => {
  const { data } = await $api.post<IHomeBoard>(
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
};

const BoardService = {
  findBoardByUserId,
  createBoardByUserID,
};

export default BoardService;
