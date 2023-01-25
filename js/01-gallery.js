import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryItemsMarkUp(galleryItems);

function createGalleryItemsMarkUp (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
    }).join("");
    
    
}


galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `)

    instance.show()

    galleryContainer.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            galleryContainer.removeEventListener('keydown', event);
            instance.close();
            console.log("click event listener was removed from btn");
            }
    });
}



