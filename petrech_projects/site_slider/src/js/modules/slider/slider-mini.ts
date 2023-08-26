import Slider from "./slider";


export default class MiniSlider extends Slider{
  constructor(public pageSelector: string, public nextSelector: string, public prevSelector: string) {
    super({pageSelector, nextSelector, prevSelector});
    
  }

  init() {
    console.log(this.container, this.next, this.prev)
  }
}