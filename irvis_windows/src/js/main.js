import './slider';
import { modal } from './modules/modal/modal';
import { tabs } from './modules/tabs/tabs';
import { forms } from './modules/forms/forms';
import { changeModalState } from './modules/changeModalState/changeModalState';
import { timer } from './modules/timer/timer';
window.addEventListener('DOMContentLoaded', () => {
    let deadline = '20-05-2023';
    let modalState = {};
    changeModalState(modalState);
    modal('div.popup_engineer', 'button.header_btn.text-uppercase.text-left.popup_engineer_btn');
    modal('.popup', 'a.phone_link');
    modal('.popup', '.feedback_block.text-center a.phone_link');
    //модалки по расчету стоимости
    modal('.popup_calc', '.popup_calc_btn', false, undefined, false);
    modal('.popup_calc_profile', '.popup_calc_button', false, undefined, false);
    modal('.popup_calc_end', '.popup_calc_profile_button', false, undefined, false);
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    //внутренние табы с калькулятором и расчетами
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'flex');
    forms(modalState, 'status', 'input[name="user_phone"]');
    timer(deadline, '#timer');
});
//# sourceMappingURL=main.js.map