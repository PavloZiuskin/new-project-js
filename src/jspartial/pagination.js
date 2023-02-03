import { refs } from './createFirstLoadFetch';
export function pagination(data) {
  switch (data.page) {
    case 2:
      refs.firstPage.textContent = 1;
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page;
      refs.minus2Page.classList.add('btn-active');
      refs.minus1Page.textContent = data.page + 1;
      refs.activPage.textContent = data.page + 2;
      refs.plus1Page.textContent = data.page + 3;
      refs.plus2Page.textContent = data.page + 4;
      console.log(refs.firstPage);
      break;

    // case значення:
    //   інструкції;
    //   break;

    default:
      refs.firstPage.textContent = 1;
      refs.firstPage.classList.add('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page + 1;
      refs.minus1Page.textContent = data.page + 2;
      refs.activPage.textContent = data.page + 3;
      refs.plus1Page.textContent = data.page + 4;
      refs.plus2Page.textContent = data.page + 5;
      console.log(refs.firstPage);
  }
}
