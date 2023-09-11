export function drop() {
    const fileInputs = document.querySelectorAll('[name="upload"]');
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, (e) => preventDefaults(e), false);
        });
    });
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    function highlight(item) {
        const elem = item === null || item === void 0 ? void 0 : item.closest('.file_upload');
        if (elem) {
            elem.style.border = '5px solid yellow';
            elem.style.background = 'rgba(0, 0, 0, .7)';
        }
    }
    function unHighlight(item) {
        const elem = item === null || item === void 0 ? void 0 : item.closest('.file_upload');
        if (elem) {
            elem.style.border = 'none';
            elem.style.background = 'inherit';
        }
    }
    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });
    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHighlight(input), false);
        });
    });
    fileInputs.forEach(input => {
        input.addEventListener('drop', e => {
            var _a, _b;
            input.files = (_b = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.files) !== null && _b !== void 0 ? _b : null;
            let dots = '';
            let name = '';
            let arr = [];
            if (input.files !== null && input.files.length > 0) {
                arr = input.files[0].name.split('.');
                arr[0].length > 6 ? dots = '...' : '.';
                name = arr[0].substring(0, 6) + dots + arr[1];
            }
            if (input.previousElementSibling !== null) {
                input.previousElementSibling.textContent = name;
            }
        });
    });
}
//# sourceMappingURL=drop.js.map