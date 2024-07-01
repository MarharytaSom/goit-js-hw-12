import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const loadMoreButton = document.getElementById('load-more');

let query = '';
let page = 1;

searchForm.addEventListener('submit', onSearch);
loadMoreButton.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();
  query = event.currentTarget.elements.query.value.trim();
  if (!query) return;

  page = 1;
  clearGallery();
  loadMoreButton.classList.add('hidden');

  try {
    const data = await fetchImages(query, page);
    renderImages(data.hits);
    if (data.totalHits > data.hits.length) {
      loadMoreButton.classList.remove('hidden');
    }
  } catch (error) {
    console.error('Error on search:', error);
  }
}

async function onLoadMore() {
  page += 1;
  try {
    const data = await fetchImages(query, page);
    renderImages(data.hits);
    const { height: cardHeight } = document
      .querySelector('.photo-card')
      .getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    if (page * 15 >= data.totalHits) {
      loadMoreButton.classList.add('hidden');
      alert("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    console.error('Error on load more:', error);
  }
}
