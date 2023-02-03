import { fetchApi } from './fetchApi';
import { formInputFetchMovie } from './formInputFetch';
import {
  pagination,
  onClickIncrementPage,
  onClickDecrementPage,
  onClickPaginationBtnNumber,
} from './pagination';

export const refs = {
  gallery: document.querySelector('.gallery'),
  form: document.querySelector('.form-search'),
  errorInput: document.querySelector('.js-error-fetch'),
  firstPage: document.querySelector('.js-pagination--firstPage'),
  minus2Page: document.querySelector('.js-pagination--minus2Page'),
  minus1Page: document.querySelector('.js-pagination--minus1Page'),
  activPage: document.querySelector('.js-pagination--activPage'),
  plus1Page: document.querySelector('.js-pagination--plus1Page'),
  plus2Page: document.querySelector('.js-pagination--plus2Page'),
  lastPage: document.querySelector('.js-pagination--lastPage'),
  minusQuery: document.querySelector('.js-btn__minusQuery'),
  plusQuery: document.querySelector('.js-btn__plusQuery'),
  containerPage: document.querySelector('.js-pagination__page'),
};

refs.form.addEventListener('submit', formInputFetchMovie);
refs.minusQuery.addEventListener('click', onClickDecrementPage);
refs.plusQuery.addEventListener('click', onClickIncrementPage);
refs.containerPage.addEventListener('click', onClickPaginationBtnNumber);
export function createFilmsFirstLoadCard(cards) {
  refs.gallery.innerHTML = cards
    .map(
      ({ id, original_title, release_date, poster_path }) => `
        <li class="gallary__card" data-setId="${id}">
            <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}" />
            <div>
                <h2>${original_title}</h2>
                <h3>
                <span></span>
                 <span>${release_date}</span>
                </h3>
            </div>
        </li>`
    )
    .join('');
}

export async function firstLoadFetchFilmCards(pageCurrent) {
  try {
    await fetchApi(pageCurrent)
      .then(data => {
        createFilmsFirstLoadCard(data.results);
        pagination(data);
        console.log(data);
      })
      .catch(err => console.log(err));
  } catch {
    error => console.log(console.log(error));
  }
}
