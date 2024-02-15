import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_1T2Qt2sssSM6PMhgPSyC71r3eyhiN4K4USfZzFJuaxfoMSev79MsDa1DaB0yFXV4';

const fetchBreedsBtn = document.querySelector('.btn');

fetchBreedsBtn.addEventListener('click', () => {
  try {
    axios
      .get(`https://api.thecatapi.com/v1/breeds`)
      .then(res => res.data)
      .then(data => console.log(data));
  } catch (error) {
    console.log(error);
  }
});
