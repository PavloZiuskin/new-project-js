import { refs, firstLoadFetchFilmCards } from './createFirstLoadFetch';
import { fetchInputApi } from './fetchApi';
import { createFilmsFirstLoadCard } from './createFirstLoadFetch';
export function pagination(data) {
  switch (data.page) {
    case 1:
      refs.firstPage.textContent = 1;
      refs.plus2Page.classList.remove('btn-active');
      refs.plus1Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');

      refs.firstPage.classList.add('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page + 1;
      refs.minus1Page.textContent = data.page + 2;
      refs.activPage.textContent = data.page + 3;
      refs.plus1Page.textContent = data.page + 4;
      refs.plus2Page.textContent = data.page + 5;

      break;
    case 2:
      refs.firstPage.textContent = 1;
      refs.firstPage.classList.remove('btn-active');
      refs.plus2Page.classList.remove('btn-active');
      refs.plus1Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page;
      refs.minus2Page.classList.add('btn-active');
      refs.minus1Page.textContent = data.page + 1;
      refs.activPage.textContent = data.page + 2;
      refs.plus1Page.textContent = data.page + 3;
      refs.plus2Page.textContent = data.page + 4;
      console.log(refs.firstPage);
      break;

    case 3:
      refs.firstPage.textContent = 1;
      refs.minus2Page.classList.remove('btn-active');
      refs.plus2Page.classList.remove('btn-active');
      refs.plus1Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');

      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 1;
      refs.minus1Page.classList.add('btn-active');
      refs.minus1Page.textContent = data.page;
      refs.activPage.textContent = data.page + 1;
      refs.plus1Page.textContent = data.page + 2;
      refs.plus2Page.textContent = data.page + 3;
      break;
    case 4:
      refs.firstPage.textContent = 1;
      refs.minus1Page.classList.remove('btn-active');
      refs.plus2Page.classList.remove('btn-active');
      refs.plus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');

      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 2;
      refs.activPage.classList.add('btn-active');
      refs.minus1Page.textContent = data.page - 1;
      refs.activPage.textContent = data.page;
      refs.plus1Page.textContent = data.page + 1;
      refs.plus2Page.textContent = data.page + 2;
      break;
    case 5:
      refs.firstPage.textContent = 1;
      refs.activPage.classList.remove('btn-active');
      refs.plus2Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 3;
      refs.plus1Page.classList.add('btn-active');
      refs.minus1Page.textContent = data.page - 2;
      refs.activPage.textContent = data.page - 1;
      refs.plus1Page.textContent = data.page;
      refs.plus2Page.textContent = data.page + 1;
      break;
    case 6:
      refs.firstPage.textContent = 1;
      refs.plus1Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 4;
      refs.plus2Page.classList.add('btn-active');
      refs.minus1Page.textContent = data.page - 3;
      refs.activPage.textContent = data.page - 2;
      refs.plus1Page.textContent = data.page - 1;
      refs.plus2Page.textContent = data.page;
      break;
    case data.total_pages:
      refs.firstPage.textContent = 1;
      refs.plus2Page.classList.remove('btn-active');
      refs.plus1Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 4;
      refs.lastPage.classList.add('btn-active');
      refs.minus1Page.textContent = data.page - 3;
      refs.activPage.textContent = data.page - 2;
      refs.plus1Page.textContent = data.page - 1;
      refs.plus2Page.textContent = data.page;
      break;

    default:
      refs.firstPage.textContent = 1;
      refs.plus2Page.classList.remove('btn-active');
      refs.plus1Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.activPage.classList.add('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 2;
      refs.minus1Page.textContent = data.page - 1;
      refs.activPage.textContent = data.page;
      refs.plus1Page.textContent = data.page + 1;
      refs.plus2Page.textContent = data.page + 2;
  }

  switch (data.total_pages) {
    case 1:
      refs.plus2Page.classList.add('hidden');
      refs.plus1Page.classList.add('hidden');
      refs.minus1Page.classList.add('hidden');
      refs.minus2Page.classList.add('hidden');
      refs.lastPage.classList.add('hidden');
      refs.activPage.classList.add('hidden');

      break;
    case 2:
      refs.plus2Page.classList.add('hidden');
      refs.plus1Page.classList.add('hidden');
      refs.minus1Page.classList.add('hidden');
      refs.minus2Page.classList.remove('hidden');
      refs.lastPage.classList.add('hidden');
      refs.activPage.classList.add('hidden');
    case 3:
      refs.plus2Page.classList.add('hidden');
      refs.plus1Page.classList.add('hidden');
      refs.minus1Page.classList.remove('hidden');
      refs.minus2Page.classList.remove('hidden');
      refs.lastPage.classList.add('hidden');
      refs.activPage.classList.add('hidden');
    case 4:
      refs.plus2Page.classList.add('hidden');
      refs.plus1Page.classList.add('hidden');
      refs.minus1Page.classList.remove('hidden');
      refs.minus2Page.classList.remove('hidden');
      refs.lastPage.classList.add('hidden');
      refs.activPage.classList.remove('hidden');
    case 5:
      refs.plus2Page.classList.add('hidden');
      refs.plus1Page.classList.remove('hidden');
      refs.minus1Page.classList.remove('hidden');
      refs.minus2Page.classList.remove('hidden');
      refs.lastPage.classList.add('hidden');
      refs.activPage.classList.remove('hidden');
    case 6:
      refs.plus2Page.classList.remove('hidden');
      refs.plus1Page.classList.remove('hidden');
      refs.minus1Page.classList.remove('hidden');
      refs.minus2Page.classList.remove('hidden');
      refs.lastPage.classList.add('hidden');
      refs.activPage.classList.remove('hidden');

    default:
      refs.plus2Page.classList.remove('hidden');
      refs.plus1Page.classList.remove('hidden');
      refs.minus1Page.classList.remove('hidden');
      refs.minus2Page.classList.remove('hidden');
      refs.lastPage.classList.remove('hidden');
      refs.activPage.classList.remove('hidden');

      break;
  }
}

let pageActive = 1;
export async function onClickIncrementPage() {
  try {
    if (refs.form.searchQuery.value !== '') {
      pageActive += 1;
      await fetchInputApi(refs.form.searchQuery.value, pageActive)
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
        })
        .catch(err => console.log(err));
      return;
    }
    if (refs.lastPage.classList.contains('btn-active')) {
      refs.plusQuery.disabled = true;
      return;
    }

    refs.minusQuery.disabled = false;
    pageActive += 1;
    firstLoadFetchFilmCards(pageActive);
  } catch {
    err => console.log(err);
  }
}
export async function onClickDecrementPage() {
  pageActive -= 1;
  try {
    if (refs.form.searchQuery.value !== '') {
      await fetchInputApi(refs.form.searchQuery.value, pageActive)
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
        })
        .catch(err => console.log(err));
      return;
    }
    if (!pageActive) {
      refs.minusQuery.disabled = true;
      return;
    }
    refs.plusQuery.disabled = false;
    firstLoadFetchFilmCards(pageActive);
  } catch {
    err => console.log(err);
  }
}
export async function onClickPaginationBtnNumber(e) {
  const evtTarget = e.target;
  pageActive = Number(evtTarget.textContent);

  try {
    if (evtTarget.nodeName !== 'BUTTON') {
      return;
    }
    if (refs.form.searchQuery.value !== '') {
      await fetchInputApi(refs.form.searchQuery.value, pageActive)
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
        })
        .catch(err => console.log(err));
      return;
    }
    firstLoadFetchFilmCards(evtTarget.textContent);

    console.log(evtTarget);
  } catch {
    err => console.log(err);
  }
}
