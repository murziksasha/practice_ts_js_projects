import { modal } from "./modules/modal/modal";
import { slider } from "./modules/slider/slider";
import { forms } from "./modules/forms/forms";
import { mask } from "./modules/mask/mask";
import { checkTextInputs } from "./modules/checkTextInputs/checkTextInputs";
import { checkMailInputs } from "./modules/checkTextInputs/checkTextInputs";
import { showMoreStyles } from "./modules/showMoreStyles/showMoreStyles";
import { calc } from "./modules/calc/calc";
import { filter } from "./modules/filter/filter";
import { resizePictures } from './modules/resizePictures/resizePictures';
import { accordion } from "./modules/accordion/accordion";
import { burger } from "./modules/burger/burger";
import { scrolling } from "./modules/scrolling/scrolling";
import { drop } from "./modules/drop/drop";

window.addEventListener('DOMContentLoaded', () => {

  modal('.popup-design', '.button.button-order.button-design', false, 'show');
  modal('.popup-consultation', '.button.button-order.button-consultation', false, 'show');
  modal('.popup-gift', '.fixed-gift.wow.pulse.infinite', true, 'show');

  slider('.main-slider-item', 'vertical');
  slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');

  forms();

  mask('[name="phone"]');

  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  checkMailInputs('[name="email"]');

  showMoreStyles('button.button-styles', '#styles div.row');

  calc('#size', '#material', '#options', 'input.promocode', 'div.calc-price');

  filter('.portfolio-menu', '.btnPortfolio');

  resizePictures('.sizes-block');

  accordion('div#accordion', '.accordion-block');

  burger('.burger-menu', '.burger');

  scrolling('a.pageup');

  drop();










});