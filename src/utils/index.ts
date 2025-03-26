import { CustomResponse } from 'src/interfaces/response.interface';

export const getSuccessResponse = (data: any, message: string): CustomResponse => ({
  status: 'Success',
  data,
  message,
});

export const getFailureResponse = (error: string): CustomResponse => ({
  status: 'Failure',
  error,
});
