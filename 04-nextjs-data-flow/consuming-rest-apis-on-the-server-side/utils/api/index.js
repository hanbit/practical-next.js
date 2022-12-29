import axios from 'axios';

const api = (path, authorize) => {
  const headers = authorize ? { authorization: 'realworldnextjs' } : null;

  return axios.create({
    baseURL: 'https://localhost:3000',
    headers,
  });
};

export default api;
