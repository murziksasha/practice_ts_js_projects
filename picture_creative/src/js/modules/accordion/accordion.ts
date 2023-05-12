

export function accordion(triggersSelector: string, itemsSelector: string) {
  const parentEl = document.querySelector(triggersSelector);
  const blocks = document.querySelectorAll(itemsSelector);

  blocks.forEach(item => {
    item.classList.add('animate__animated', 'animate__fadeInDown');
  });

    parentEl?.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      if(target && target.closest('p.accordion-heading > span')){
        target.parentElement?.classList.toggle('active-style');
        const nextSibling = target.parentElement?.nextElementSibling as HTMLElement;
        if(target.parentElement?.classList.contains('active-style')){
          if(nextSibling){
            nextSibling.style.maxHeight = nextSibling?.scrollHeight + 80 + 'px';
          }
        } else {
          nextSibling.style.maxHeight = '0px';
        }
      }
    });
}