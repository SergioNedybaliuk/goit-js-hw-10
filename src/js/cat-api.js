import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_JLKhZxskbzcrsqTWiM6f61vvtiB9iYS1dag3hByMnOhHScQE3Xg6Gc20jzY1hsr9';
const baseUrl = 'https://api.thecatapi.com/v1/images/search';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${baseUrl}?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
