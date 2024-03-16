import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import api from './axios';

export const getData = async <T, D>(url: string, config?: AxiosRequestConfig<D>) => {
  try {
    const res: AxiosResponse<T> = await api.get(url, config);
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export const postData = async <T, D>(url: string, config?: AxiosRequestConfig<D>) => {
  try {
    const res: AxiosResponse<T> = await api.post(url, config);
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}