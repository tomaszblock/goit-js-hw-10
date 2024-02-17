import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorEle = document.querySelector('.error');

try {
  loader.classList.remove('hidden');
  errorEle.style.display = 'none';
  fetchBreeds().then(data => renderSelect(data));
} catch (error) {
  errorEle.style.display = 'block';
  console.log(error);
}

function renderSelect(breeds) {
  const markup = breeds
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  breedSelect.insertAdjacentHTML('beforeend', markup);
  loader.classList.add('hidden');
  errorEle.style.display = 'none';
}

breedSelect.addEventListener('change', e => {
  loader.classList.remove('hidden');
  errorEle.style.display = 'none';
  fetchCatByBreed(e.target.value).then(data => renderCat(data[0]));
});

function renderCat(catData) {
  const { url } = catData;
  const { description, name, temperament } = catData.breeds[0];
  const catResult = document.querySelector('.cats');
  if (catResult !== null) {
    catResult.remove();
  }
  catInfo.insertAdjacentHTML(
    'beforeend',
    `<div class="cats">
    <h2>${name}</h2>
    <p>${description}</p>
    <p><strong>Temperament:</strong> ${temperament}</p>
    <img src="${url}" alt="${name}" />
    </div>`
  );
  loader.classList.add('hidden');
}
