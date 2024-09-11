import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

export const extractColors = async (url: string) => {
  const response = await axios.post(`${API_BASE_URL}/extract-colors`, { url });
  return response.data;
};
