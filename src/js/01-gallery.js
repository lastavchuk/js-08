import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

function render(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
           <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join('');
}

const gallery = document.querySelector('.gallery');

gallery.innerHTML = render(galleryItems);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
