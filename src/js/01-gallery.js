import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(e) {
  return e
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" />
	</a>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
gallery.on('show.simplelightbox');
