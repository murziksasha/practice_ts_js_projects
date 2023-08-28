import MainSlider from "./modules/slider/slider-main.js";
import MiniSlider from "./modules/slider/slider-mini.js";
import VideoPlayer from "./modules/playVideo/playVideo.js";
import Difference from "./modules/difference/difference.js";
document.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider('.page', '.next');
    slider.render();
    const showUpSlider = new MiniSlider('.showup__content-slider', '.showup__next', '.showup__prev');
    showUpSlider.init();
    const modulesSlider = new MiniSlider('.modules__content-slider', '.modules__info-btns .slick-next', '.modules__info-btns .slick-prev');
    modulesSlider.init();
    const feedSlider = new MiniSlider('.feed__slider', '.feed__slider .slick-next', '.feed__slider .slick-prev');
    feedSlider.init();
    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
    new Difference('.officerold', '.officernew', '.officer__card-item').init();
});
//# sourceMappingURL=main.js.map