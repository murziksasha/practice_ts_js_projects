import './slider';
import { modal } from './modules/modal/modal';
import { tabs } from './modules/tabs/tabs';
import { forms } from './modules/forms/forms';
window.addEventListener('DOMContentLoaded', () => {
    modal('div.popup_engineer', 'button.header_btn.text-uppercase.text-left.popup_engineer_btn');
    modal('div.popup', 'a.phone_link');
    modal('div.popup', '.feedback_block.text-center a.phone_link');
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    forms('status');
    // calculator();
});
//# sourceMappingURL=main.js.map