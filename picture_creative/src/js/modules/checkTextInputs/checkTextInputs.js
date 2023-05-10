export function checkTextInputs(selector) {
    const txtInputs = document.querySelectorAll(selector);
    txtInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-яё А-ЯЁ]/ig)) {
                e.preventDefault();
            }
        });
    });
}
export function checkMailInputs(selector) {
    const mailInputs = document.querySelectorAll(selector);
    mailInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key.match(/[^a-zA-Z0-9._%+-@]/gi)) {
                e.preventDefault();
            }
        });
    });
    mailInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const regex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
            if (!input.value) {
                input.setCustomValidity('Email адрес обязателен');
                e.preventDefault();
            }
            else if (!regex.test(input.value)) {
                input.setCustomValidity('Неправильно введен адрес');
                e.preventDefault();
            }
            else {
                input.setCustomValidity('');
            }
        });
    });
}
//# sourceMappingURL=checkTextInputs.js.map