import Slider from "./modules/slider/slider.js";
import VideoPlayer from "./modules/slider/playVideo/playVideo.js";

document.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.page', '.next');
  slider.render();
  
  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();




});