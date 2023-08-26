import MainSlider from "./modules/slider/slider-main.js";
import MiniSlider from "./modules/slider/slider-mini.js";
import VideoPlayer from "./modules/playVideo/playVideo.js";

document.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider('.page', '.next');
  slider.render();

  const showUpSlider = new MiniSlider('.showup__content-slider', '.showup__next', '.showup__prev');
  showUpSlider.init();
  
  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();




});