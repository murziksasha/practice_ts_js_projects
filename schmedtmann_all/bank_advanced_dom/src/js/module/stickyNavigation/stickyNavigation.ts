

export function stickyNavigation() {

  const nav = document.querySelector('.nav');
  const section1 = document.querySelector('#section--1');

  const initialCoords = section1?.getBoundingClientRect();
  console.log(initialCoords)

  window.addEventListener('scroll', () => {
    if(initialCoords){
      window.scrollY > initialCoords.top ?  nav?.classList.add('sticky') : nav?.classList.remove('sticky');
    }
  });


}