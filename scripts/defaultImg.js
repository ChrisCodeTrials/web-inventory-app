const images = document.querySelectorAll('img');

images.forEach(img => {
  img.addEventListener('error', function handleError() {
    const defaultImage = '../storeLogo.png'
    img.src = defaultImage;
    img.alt = 'default';
  });
});
