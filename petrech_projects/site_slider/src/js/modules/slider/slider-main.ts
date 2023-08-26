

import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(public pageSelector: string, public btnsSelector: string){
    super({pageSelector, btnsSelector});

    this.showSlides(this.slideIndex);

  }

  
  showSlides(n: number) {
    if (n > this.slides.length) this.slideIndex = 1;
    if (n < 1) this.slideIndex = this.slides.length;
    try {
      if (!this.blockHanson) return;
      this.blockHanson.style.opacity = '0';

      if (n === 3) {
        this.blockHanson.classList.add('animate__animated');
        setTimeout(() => {
          if (this.blockHanson) {
            this.blockHanson.classList.add('animate__fadeInUpBig');
            this.blockHanson.style.opacity = '1';
          }
        }, 3000);
      } else {
        this.blockHanson.classList.remove('animate__fadeInUpBig');
      }
    } catch (e) {}
    this.slides.forEach(slide => {
      slide.style.display = 'none';
    });
    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  plusSlides(n: number) {
    this.showSlides((this.slideIndex += n));
  }

  render() {
    this.btns?.forEach(item => {
      item.addEventListener('click', () => {
        this.plusSlides(1);
      });
      item.parentNode?.previousSibling?.previousSibling
        ? item.parentNode.previousSibling?.previousSibling.addEventListener('click', e => {
            e.preventDefault();
            this.slideIndex = 1;
            this.showSlides(this.slideIndex);
          })
        : null;
    });
  }
}