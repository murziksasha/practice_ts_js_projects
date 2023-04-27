"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./slider");
const modal_1 = require("./modules/modal");
window.addEventListener('DOMContentLoaded', () => {
    const btnHeaderMeasure = document.querySelector('button.header_btn.text-uppercase.text-left.popup_engineer_btn');
    (0, modal_1.modal)(btnHeaderMeasure);
});
//# sourceMappingURL=main.js.map