import axios from 'axios';

export const BASIC_URL = 'http://localhost:7841';

const $api = axios.create({
  baseURL: BASIC_URL,
});

export default $api;
