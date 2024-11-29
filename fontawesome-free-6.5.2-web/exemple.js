// script.js
const images = document.querySelectorAll('.image');
const overlays = document.querySelectorAll('.image__overlay');

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        overlays[index].style.opacity = 1;
    });

    const closeButton = overlays[index].querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        overlays[index].style.opacity = 0;
    });
});
