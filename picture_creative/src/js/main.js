import { modal } from "./modules/modal/modal";
import { slider } from "./modules/slider/slider";
import { forms } from "./modules/forms/forms";
window.addEventListener('DOMContentLoaded', () => {
    modal('.popup-design', '.button.button-order.button-design', false, 'show');
    modal('.popup-consultation', '.button.button-order.button-consultation', false, 'show');
    modal('.popup-gift', '.fixed-gift.wow.pulse.infinite', true, 'show');
    slider('.main-slider-item', 'vertical');
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    forms();
});
//# sourceMappingURL=main.js.map