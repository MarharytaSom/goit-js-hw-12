import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.photo-card a', {});

export function renderImages(images) {
  const galleryElement = document.getElementById('gallery');

  const markup = images.map(image => `
    <div class="photo-card">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${image.likes}</p>
        <p class="info-item"><b>Views:</b> ${image.views}</p>
        <p class="info-item"><b>Comments:</b> ${image.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
      </div>
    </div>
  `).join('');

  galleryElement.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}

export function clearGallery() {
  const galleryElement = document.getElementById('gallery');
  galleryElement.innerHTML = '';
}
