import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstant';
import { handleAsyncOperationErrors } from './handleAsyncOperationErrors';
import { IFormState } from '@/types/FormState.types';

export interface IPostAssignmentResponse {
  data: IFormState;
  message: string;
  status: string;
}

export interface IPostAssignmentError {
  message: string;
  errors: string[];
}

export const onPostAssignment = async (data: IFormState) => {
  return await handleAsyncOperationErrors<IPostAssignmentResponse, IPostAssignmentError>(
    async (): Promise<IPostAssignmentResponse> => {
      const postAssignmentResponse: AxiosResponse<IPostAssignmentResponse> = await axiosInstance.post(
        '/assignments',
        data
      );
      return postAssignmentResponse.data;
    }
  );
};
