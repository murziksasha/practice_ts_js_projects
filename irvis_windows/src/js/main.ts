import './slider';
import { modal } from './modules/modal/modal';
import { tabs } from './modules/tabs/tabs';
import { forms } from './modules/forms/forms';
import { changeModalState } from './modules/changeModalState/changeModalState';

window.addEventListener('DOMContentLoaded', () => {

  let modalState = {};
  changeModalState(modalState);


modal('div.popup_engineer', 'button.header_btn.text-uppercase.text-left.popup_engineer_btn');
modal('.popup', 'a.phone_link', /** true */);
modal('.popup', '.feedback_block.text-center a.phone_link');
//модалки по расчету стоимости
modal('.popup_calc', '.popup_calc_btn', false, undefined, false);
modal('.popup_calc_profile', '.popup_calc_button' , false, undefined, false);
modal('.popup_calc_end', '.popup_calc_profile_button', false, undefined, false);

tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
tabs('.decoration_slider','.no_click','.decoration_content > div > div','after_click');
//внутренние табы с калькулятором и расчетами
tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'flex');

forms('status', 'input[name="user_phone"]');














});