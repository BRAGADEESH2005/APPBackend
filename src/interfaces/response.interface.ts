export interface CustomResponse {
  status: 'Success' | 'Failure';
  data?: any;
  message?: string;
  error?: string;
}

export type ResponseType = Promise<CustomResponse>;
