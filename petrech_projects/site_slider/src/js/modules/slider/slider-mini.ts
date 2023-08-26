import Slider from "./slider";


export default class MiniSlider extends Slider{
  constructor(public pageSelector: string, public nextSelector: string, public prevSelector: string) {
    super({pageSelector, nextSelector, prevSelector});
    
  }

  init() {
    if(this.container) this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `;
  }
}