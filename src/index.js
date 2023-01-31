import { firstLoadFetchFilmCards } from './jspartial/createFirstLoadFetch';
import { fetchInputApi } from './jspartial/fetchApi';
firstLoadFetchFilmCards();
fetchInputApi('babylon').then(data => console.log(data));
