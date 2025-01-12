import axios from 'axios';
import {API_URL as FIPE_API_URL} from '../config.ts/backend';

export const fipeClient = axios.create({
  baseURL: FIPE_API_URL,
  timeout: 30000,
});
