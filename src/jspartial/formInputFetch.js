import { refs } from './createFirstLoadFetch';
import { fetchInputApi } from './fetchApi';
import { createFilmsFirstLoadCard } from './createFirstLoadFetch';
import { pagination } from './pagination';

export async function formInputFetchMovie(e) {
  e.preventDefault();

  const elem = e.currentTarget.elements;
  try {
    fetchInputApi(elem.searchQuery.value)
      .then(data => {
        if (data.results.length === 0) {
          refs.errorInput.classList.remove('hidden');
          return;
        }
        if (!refs.errorInput.classList.contains('hidden')) {
          refs.errorInput.classList.add('hidden');
        }
        refs.gallery.innerHTML = '';

        createFilmsFirstLoadCard(data.results);
        pagination(data);
        console.log(refs.form.searchQuery.value);
      })
      .catch(err => console.log(err));
  } catch {
    error => console.log(error);
  }
}
