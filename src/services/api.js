import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
  timeout: 15000,
});

export const getTopAnime = async () => {
  try {
    const response = await api.get('/top/anime?limit=8');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching anime:', error);
    throw error;
  }
};

export const getTopManga = async () => {
  try {
    const response = await api.get('/top/manga?limit=8');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching manga:', error);
    throw error;
  }
};