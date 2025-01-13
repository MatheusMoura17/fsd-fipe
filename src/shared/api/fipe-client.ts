import axios from 'axios';

export const fipeClient = axios.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1',
  timeout: 30000,
});
