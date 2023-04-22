import axios, { AxiosInstance } from 'axios';

export const http: AxiosInstance = axios.create({
  baseURL: String(import.meta.env.VITE_APP_API_URL || ''),
});
