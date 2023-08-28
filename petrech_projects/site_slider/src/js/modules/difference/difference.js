export default class Difference {
    constructor(oldOfficerSelector, newOfficerSelector, itemsSelector) {
        var _a, _b;
        this.oldOfficerSelector = oldOfficerSelector;
        this.newOfficerSelector = newOfficerSelector;
        this.itemsSelector = itemsSelector;
        this.oldCounter = 0;
        this.newCounter = 0;
        this.oldOfficer = document.querySelector(oldOfficerSelector);
        this.newOfficer = document.querySelector(newOfficerSelector);
        this.items = itemsSelector;
        this.oldItems = (_a = this.oldOfficer) === null || _a === void 0 ? void 0 : _a.querySelectorAll(itemsSelector);
        this.newItems = (_b = this.oldOfficer) === null || _b === void 0 ? void 0 : _b.querySelectorAll(itemsSelector);
    }
    bindTriggers() {
        var _a, _b, _c, _d;
        (_b = (_a = this.oldOfficer) === null || _a === void 0 ? void 0 : _a.querySelector('plus')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            if (this.oldItems && this.oldCounter !== this.oldItems.length - 2) {
                this.oldItems[this.oldCounter].style.display = 'flex';
                this.oldCounter++;
            }
            else {
                if (this.oldItems) {
                    this.oldItems[this.oldCounter].style.display = 'flex';
                    this.oldItems[this.oldItems.length - 1].remove();
                }
            }
        });
        (_d = (_c = this.newOfficer) === null || _c === void 0 ? void 0 : _c.querySelector('plus')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
            if (this.newItems && this.newCounter !== this.newItems.length - 2) {
                this.newItems[this.newCounter].style.display = 'flex';
                this.newCounter++;
            }
            else {
                if (this.newItems) {
                    this.newItems[this.newCounter].style.display = 'flex';
                    this.newItems[this.newItems.length - 1].remove();
                }
            }
        });
    }
    hideItems(items) {
        if (items)
            items.forEach((item, i, arr) => {
                if (i !== arr.length - 1) {
                    if (item instanceof HTMLElement)
                        item.style.display = 'none';
                }
            });
    }
    init() {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        this.bindTriggers();
    }
}
//# sourceMappingURL=difference.js.map