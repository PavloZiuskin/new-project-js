import { fetchApi } from './fetchApi';

const refs = {
  gallery: document.querySelector('.gallery'),
};
function createFilmsFirstLoadCard(cards) {
  const createMurkap = cards
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
  refs.gallery.insertAdjacentHTML('beforeend', createMurkap);
}

export async function firstLoadFetchFilmCards() {
  try {
    await fetchApi()
      .then(data => {
        createFilmsFirstLoadCard(data.results);
        console.log(data);
      })
      .catch(err => console.log(err));
  } catch {
    error => console.log(console.log(error));
  }
}
