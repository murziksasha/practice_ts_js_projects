export function forms(classModal) {
    const formsAll = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const message = {
        loading: '../../../assets/img/spinner.svg',
        success: 'Thank you, we\'ll call you soon...',
        failure: 'Something wrong... Try again!'
    };
    formsAll.forEach(item => {
        bindPostData(item);
    });
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return res.json();
    };
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
            form.insertAdjacentElement('beforeend', statusMessage);
            const formData = new FormData(form);
            // const json = JSON.stringify(Object.fromEntries(formData.entries()));
            postData('http://localhost:3000/requests', formData) //json когда надо отправлять JSON
                .then(data => {
                console.log(data);
                showThanksModal(form, message.success);
                statusMessage.remove();
            })
                .catch(() => {
                showThanksModal(form, message.failure);
            })
                .finally(() => {
                form.reset();
            });
        });
    }
    function showThanksModal(itemForm, message) {
        const thanksModal = document.createElement('div');
        thanksModal.classList.add(classModal);
        thanksModal.textContent = message;
        itemForm.insertAdjacentElement('afterend', thanksModal);
        setTimeout(() => {
            if (thanksModal) {
                thanksModal.remove();
            }
        }, 4000);
    }
}
//# sourceMappingURL=forms.js.map