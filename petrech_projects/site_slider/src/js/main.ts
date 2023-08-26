import MainSlider from "./modules/slider/slider-main.js";
import VideoPlayer from "./modules/playVideo/playVideo.js";

document.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider('.page', '.next');
  slider.render();
  
  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();




});