import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_JLKhZxskbzcrsqTWiM6f61vvtiB9iYS1dag3hByMnOhHScQE3Xg6Gc20jzY1hsr9';
const baseUrl = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios
    .get(`${baseUrl}/breeds`)
    .then(response => response.data)
    .catch(error => {
      console.error('Oops! Something went wrong! Try reloading the page!', error);
      loader.style.display = 'none';
      throw error;
      
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${baseUrl}/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Oops! Something went wrong! Try reloading the page!', error);
      loader.style.display = 'none';
      throw error;
    });
}
