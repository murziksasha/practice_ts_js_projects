

export function lazyImgLoader() {

  const imgTargets = document.querySelectorAll('img[data-src]');

  const loadImg = ((entries: IntersectionObserverEntry [], observer: IntersectionObserver ) => {
    const [entry] = entries;
    const targetElement = entry.target as HTMLImageElement;
    if(!entry.isIntersecting) return;
    if(targetElement && targetElement.dataset.src){
      targetElement.src = targetElement.dataset.src;
      targetElement.addEventListener('load', () => {
        targetElement.classList.remove('lazy-img');
      });
    }

    observer.unobserve(targetElement);

  });

  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px'  //'-200px'
  });
  imgTargets.forEach(img => imgObserver.observe(img));

}