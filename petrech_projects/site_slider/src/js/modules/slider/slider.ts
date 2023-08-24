export default class Slider {
  private page: HTMLElement | null;
  private btns: HTMLElement[] | null;
  private slides: HTMLElement[] = [];
  private slideIndex: number = 1;

  constructor(
    public pageSelector: string,
    public btnsSelector: string,
  ){
    this.page = document.querySelector(pageSelector);
    this.btns = Array.from(document.querySelectorAll(btnsSelector)) as HTMLElement[];
    if(this.page){
      this.slides = Array.from(this.page.children) as HTMLElement[];
    }
    this.showSlides(this.slideIndex);
  }

  showSlides(n: number){
    if(n > this.slides.length) this.slideIndex = 1;
    if(n < 1) this.slideIndex = this.slides.length;
    this.slides.forEach(slide => {
      slide.style.display = 'none';
    });
    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }


  render() {
    this.btns?.forEach(item => {
      item.addEventListener('click', () => {
        this.plusSlides(1);
      });
      item.parentNode?.previousSibling?.previousSibling ? item.parentNode.previousSibling?.previousSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      }) : null;
    });
  }
}