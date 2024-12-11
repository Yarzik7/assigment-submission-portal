import axios, { AxiosError } from 'axios';

type TAsyncOperation<T> = () => Promise<T>;

export const handleAsyncOperationErrors = async <T, E = AxiosError>(asyncOperation: TAsyncOperation<T>): Promise<T | E> => {
  try {
    return await asyncOperation();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data ?? { error: error.name, message: error.message, statusCode: error.code };
    }

    return error as E;
  }
};
