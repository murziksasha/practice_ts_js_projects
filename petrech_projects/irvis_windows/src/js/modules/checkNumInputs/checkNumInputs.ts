

export function checkNumInputs(selector: any) {
  const numInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(selector);
  numInputs.forEach((item) => {
    item.addEventListener('input', () =>{
      item.value = item.value.replace(/\D/g, '');
    });
  });
}