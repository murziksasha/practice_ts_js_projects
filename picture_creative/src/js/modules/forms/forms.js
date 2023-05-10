var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function forms() {
    const formsAll = document.querySelectorAll('form');
    const upload = document.querySelectorAll('[name="upload"]');
    const message = {
        loading: 'Loading...',
        success: 'Thank you, we\'ll call you soon...',
        failure: 'Something wrong... Try again!',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };
    const animShow = 'animate__fadeInUp';
    const animHide = 'animate__fadeOutUp';
    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };
    formsAll.forEach(item => {
        bindPostData(item);
    });
    upload.forEach((item) => {
        item.addEventListener('input', () => {
            let dots = '';
            let name = '';
            let arr = [];
            if (item.files !== null && item.files.length > 0) {
                arr = item.files[0].name.split('.');
                arr[0].length > 6 ? dots = '...' : '.';
                name = arr[0].substring(0, 6) + dots + arr[1];
            }
            if (item.previousElementSibling !== null) {
                item.previousElementSibling.textContent = name;
            }
        });
    });
    const postData = (url, data) => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url, {
            method: 'POST',
            // headers: { //когда json то необходимо!
            //   'Content-type': 'application/json'
            // },
            body: data
        });
        // return res.json();
        return yield res.text();
    });
    function clearInputs() {
        upload.forEach(item => {
            if (item.previousElementSibling !== null) {
                item.previousElementSibling.textContent = 'Файл не выбран';
            }
        });
    }
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showThanksModal(form, message.loading, message.spinner, 400);
            const formData = new FormData(form);
            // const json = JSON.stringify(Object.fromEntries(formData.entries()));
            let api; // динамический путь куда будем отправлять данные из разных форм
            form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);
            postData(api, formData) //json когда надо отправлять JSON
                .then(data => {
                console.log(data);
                showThanksModal(form, message.success, message.ok);
            })
                .catch(() => {
                showThanksModal(form, message.failure, message.fail);
                console.log('catch');
            })
                .finally(() => {
                form.reset();
                form.classList.add(animShow);
                clearInputs();
            });
        });
    }
    ;
    function showThanksModal(itemForm, message, imgSrc, timeSec = 3000) {
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
    display: block;
    margin: 0 auto;
  `;
        statusMessage.classList.add('animate__animated', animShow, 'status');
        statusMessage.textContent = message;
        const imgStatusMessage = document.createElement('img');
        imgStatusMessage.classList.add('animate__animated', animShow, 'status');
        imgStatusMessage.src = imgSrc;
        imgStatusMessage.style.cssText = `
    display: block;
    margin: 0 auto;
    `;
        const parent = itemForm.parentNode;
        if (parent) {
            itemForm.parentNode.appendChild(statusMessage);
            itemForm.parentNode.appendChild(imgStatusMessage);
        }
        //красиво с анимацией скрываем нашу форму (она не удалится, будет прозрачная)
        setTimeout(() => {
            itemForm.classList.add('animate__animated', animHide);
            itemForm.classList.add('hide');
        }, 400);
        setTimeout(() => {
            if (statusMessage || imgStatusMessage) {
                statusMessage.remove();
                imgStatusMessage.remove();
                itemForm.classList.remove('hide', animHide);
            }
        }, timeSec);
    }
    ;
}
//# sourceMappingURL=forms.js.map