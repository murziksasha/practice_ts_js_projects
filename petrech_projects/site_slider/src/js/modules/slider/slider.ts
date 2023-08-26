interface ISliderParametr {
  pageSelector: string;
  btnsSelector: string;
  next: string;
  prev: string;
}

export default class Slider {
  protected page: HTMLElement | null;
  protected btns: HTMLElement[] | null;
  protected slides: HTMLElement[] = [];
  protected slideIndex: number = 1;
  protected blockHanson: HTMLDivElement | null;

  // constructor(
  //   public pageSelector: string,
  //   public btnsSelector: string,
  // )
  constructor({ pageSelector = '', btnsSelector = '', next = '', prev = '' }: Partial<ISliderParametr>) {
    this.page = document.querySelector(pageSelector);
    this.btns = Array.from(document.querySelectorAll(btnsSelector)) as HTMLElement[];
    if (this.page) {
      this.slides = Array.from(this.page.children) as HTMLElement[];
    }
    this.blockHanson = document.querySelector('div.hanson') as HTMLDivElement;

  }

}
