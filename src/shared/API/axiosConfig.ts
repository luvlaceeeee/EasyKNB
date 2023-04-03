import axios from 'axios';

export const BASIC_URL = 'http://localhost:8080';

export const $api = axios.create({
  baseURL: BASIC_URL,
});
