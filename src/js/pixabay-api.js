import axios from 'axios';

const API_KEY = '44648144-e72e61b3f392a294e0f76f542';
const BASE_URL = 'https://pixabay.com/api/';

async function fetchImages(query, page = 1, perPage = 15) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}

export { fetchImages };
