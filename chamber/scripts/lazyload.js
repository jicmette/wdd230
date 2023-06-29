const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
  threshold: .3,
  rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImages(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, imgOptions);
    imagesToLoad.forEach((image) => {
    observer.observe(image);
  });
} else {
    imagesToLoad.forEach((image) => {
        loadImages(image);
});

}
