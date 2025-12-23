import { axiosInstance } from './axiosInstance';

export const httpClient = {
  get: async <T>(url: string): Promise<T> => {
    const response = await axiosInstance.get<T>(url);
    return response.data;
  },

  post: async <T, B>(url: string, body: B): Promise<T> => {
    const response = await axiosInstance.post<T>(url, body);
    return response.data;
  },
};
