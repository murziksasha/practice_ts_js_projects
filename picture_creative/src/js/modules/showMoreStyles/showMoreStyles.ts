
import { getResource } from "../../services/requests/requests";

export function showMoreStyles(trigger: string, parentEl: string) { 
  const btn = document.querySelector<HTMLElement>(trigger);

  btn?.addEventListener('click', function(){
    getResource('http://localhost:3000/styles')
    .then(res => createCards(res))
    .catch(error => console.log(error));
    this.remove();
  });

  interface StyleObject  {
    src: string;
    title: string;
    link: string;
  }

  function createCards(response: StyleObject[] ) {
      response.forEach((item: StyleObject ) => {
        const {src, title, link} = item;
        let card = document.createElement('div');
        card.classList.add('animate__animated', 'animate__fadeInUp','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  
        card.innerHTML = `
          <div class='styles-block'>
            <img src=${src} alt = ${title}>
            <h4>${title}</h4>
            <a href=${link}>Подробнее</a>
          </div>
        `;

        document.querySelector(parentEl)?.appendChild(card);
      });
    console.log('something wrong')
  }




};