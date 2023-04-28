
export function forms(classModal: string, PhoneInputDataAtt: string): void {

  const formsAll = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const phoneInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(PhoneInputDataAtt);


  phoneInputs.forEach((item) => {
    item.addEventListener('input', () =>{
      item.value = item.value.replace(/\D/g, '');
    });
  })

  interface Message {
    loading: string;
    success: string;
    failure: string;
  }
  const message: Message = {
    loading: '../../../assets/img/spinner.svg',
    success: 'Thank you, we\'ll call you soon...',
    failure: 'Something wrong... Try again!'
  }

  formsAll.forEach(item => {
    bindPostData(item);
  });

  const postData = async (url: string, data: any) => {
    const res: any = await fetch(url, {
      method: 'POST',
        // headers: { //когда json то необходимо!
        //   'Content-type': 'application/json'
        // },
        body: data
    });
    // return res.json();
    return await res.text();
  };

  function bindPostData(form: HTMLFormElement) {
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


      postData('assets/server.php', formData) //json когда надо отправлять JSON
      .then(data =>{
        console.log(data);
        showThanksModal(form, message.success);
        statusMessage.remove();
      })
      .catch(()=>{
        showThanksModal(form, message.failure);
      })
      .finally(()=>{
        form.reset();
        statusMessage.remove();
      })

    });
  }


  function showThanksModal(itemForm: HTMLFormElement, message: string) {

    const thanksModal = document.createElement('div');
    thanksModal.classList.add(classModal);
    thanksModal.textContent = message;
    itemForm.insertAdjacentElement('beforeend', thanksModal);

    setTimeout(() => {
      if(thanksModal){
        thanksModal.remove();
      }
    }, 4000);
  }



}