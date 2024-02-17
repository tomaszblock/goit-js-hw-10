import axios from 'axios';
export const fetchBreeds = () => {
  axios.defaults.headers.common['x-api-key'] =
    'live_1T2Qt2sssSM6PMhgPSyC71r3eyhiN4K4USfZzFJuaxfoMSev79MsDa1DaB0yFXV4';

  return axios.get(`https://api.thecatapi.com/v1/breeds`).then(res => res.data);
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => res.data);
};
