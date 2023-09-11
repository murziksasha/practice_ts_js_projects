

export function images(){
  const imgPopup = document.createElement('div') as HTMLDivElement;
  const workSection = document.querySelector('.works') as HTMLDivElement;
  const bigImage = document.createElement('img') as HTMLImageElement;

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  bigImage.style.cssText = `
    width: 700px;
    height: 500px;
  `;

  imgPopup.style.cssText = `
    justify-content: center;
    align-items: center;
    display: none;
    `;

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if(target && target.classList.contains('preview')){
      imgPopup.style.display = 'flex';
      if(target.parentElement as HTMLAnchorElement && target.parentNode as HTMLAnchorElement){
        const path = (target.parentNode as HTMLAnchorElement).getAttribute('href');
        if(path) {
          bigImage.setAttribute('src', path);
          document.body.style.overflow = 'hidden';

        }
      }
    }
    if(target && target.matches('div.popup')){ //то что пользователь кликнул на подложку
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';

    }
    document.addEventListener('keydown', e => {
      const target = e.code;
      if(target === 'Escape'){
          imgPopup.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
  });

}