import { checkNumInputs } from '../checkNumInputs/checkNumInputs';
export function forms(state, classModal, PhoneInputDataAtt) {
    const formsAll = document.querySelectorAll('form');
    checkNumInputs(PhoneInputDataAtt);
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
            // headers: { //когда json то необходимо!
            //   'Content-type': 'application/json'
            // },
            body: data
        });
        // return res.json();
        return await res.text();
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
            if (form.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            postData('assets/server.php', formData) //json когда надо отправлять JSON
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
                statusMessage.remove();
            });
        });
    }
    function showThanksModal(itemForm, message) {
        const thanksModal = document.createElement('div');
        thanksModal.classList.add(classModal);
        thanksModal.textContent = message;
        itemForm.insertAdjacentElement('beforeend', thanksModal);
        setTimeout(() => {
            if (thanksModal) {
                thanksModal.remove();
            }
        }, 4000);
    }
}
//# sourceMappingURL=forms.js.map