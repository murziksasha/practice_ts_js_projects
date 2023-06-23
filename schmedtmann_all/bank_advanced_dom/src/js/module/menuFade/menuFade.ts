

export function menuFade() {
  const nav = document.querySelector('.nav');

  const handleHover = (e: Event, opacity: string) => {
    const target = e.target as HTMLElement;
    if(target && target.classList.contains('nav__link')){
      const siblings = target.closest('.nav')?.querySelectorAll('.nav__link');
      const logo = target.closest('.nav')?.querySelector('img') as HTMLImageElement;
      siblings?.forEach((el: Element) => {
        if(el !== target){
          const siblingElement = el as HTMLElement; 
          siblingElement.style.opacity = opacity;
        }
      });
      logo.style.opacity = opacity;
    }
  }
  
  nav?.addEventListener('mouseover', e => handleHover(e, '0.5'));

  nav?.addEventListener('mouseout', e => handleHover(e, '1'));

};