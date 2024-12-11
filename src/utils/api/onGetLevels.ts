import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstant';
import { handleAsyncOperationErrors } from './handleAsyncOperationErrors';
import { ILevelsResponse } from '@/types/FormState.types';

export const onGetLevels = async () => {
  return await handleAsyncOperationErrors<ILevelsResponse>(async (): Promise<ILevelsResponse> => {
    const getLevelsResponse: AxiosResponse<ILevelsResponse> = await axiosInstance.get('/levels');

    return getLevelsResponse.data;
  });
};
