interface ISliderParametr {
  pageSelector: string;
  btnsSelector: string;
  nextSelector: string;
  prevSelector: string;
}

export default class Slider {
  protected container: HTMLElement | null  = null;
  protected btns: HTMLElement[] | null = [];
  protected prev: HTMLElement | null = null;
  protected next: HTMLElement | null= null;
  protected slides: HTMLElement[] = [];
  protected slideIndex: number = 1;
  protected blockHanson: HTMLDivElement | null = null;


  constructor({ pageSelector, btnsSelector, nextSelector , prevSelector  }: Partial<ISliderParametr>) {
    if(typeof pageSelector === 'string')this.container = document.querySelector(pageSelector);
    if(typeof btnsSelector === 'string')this.btns = Array.from(document.querySelectorAll(btnsSelector)) as HTMLElement[];
    if (this.container) {
      this.slides = Array.from(this.container.children) as HTMLElement[];
    }
    this.blockHanson = document.querySelector('div.hanson') as HTMLDivElement;
    if(typeof nextSelector === 'string') this.next = document.querySelector(nextSelector);
    if(typeof prevSelector === 'string') this.prev = document.querySelector(prevSelector);

  }

}
