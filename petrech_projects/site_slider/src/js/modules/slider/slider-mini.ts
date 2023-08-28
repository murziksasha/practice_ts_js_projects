import Slider from "./slider";


export default class MiniSlider extends Slider{
  private slideLocalCounter = 0;
  private _length = this.slides.length - 1;

  constructor(public pageSelector: string, public nextSelector: string, public prevSelector: string) {
    super({pageSelector, nextSelector, prevSelector});
  }

  private _sliderClickNext(next = 1) {
    this.slideLocalCounter = this.slideLocalCounter + next;
    if(next === -1 ){
      if(this.slideLocalCounter < 0) this.slideLocalCounter = this.slides.length - 1;
      this.container?.insertBefore(this.slides[this.slideLocalCounter], this.slides[0]);
    } else {
      if(this.slideLocalCounter > this._length) this.slideLocalCounter = 0;
      this.container?.insertBefore(this.slides[this.slideLocalCounter], this.slides[0]);
    }
  }

  bindTriggers() {
    this.next?.addEventListener('click', () => this._sliderClickNext());

    this.prev?.addEventListener('click', ()=> this._sliderClickNext(-1));
  }

  init() {
    if(this.container) this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `;
    this.bindTriggers();
  }
}