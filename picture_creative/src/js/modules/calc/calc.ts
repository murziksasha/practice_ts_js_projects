

export function calc(size: string, material: string, options: string, promocode: string, result: string) {

  const sizeBlock = document.querySelector(size) as HTMLSelectElement;
  const materialBlock = document.querySelector(material) as HTMLSelectElement;
  const optionsBlock = document.querySelector(options) as HTMLSelectElement;
  const promocodeBlock = document.querySelector(promocode) as HTMLInputElement;
  const resultBlock: HTMLInputElement | null = document.querySelector(result);
  if(!resultBlock) return;

  let sum = 0;

  const calcFunction = () => {
    sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
    if(sizeBlock.value === '' || materialBlock.value === ''){
        resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
    } else if (promocodeBlock.value === 'IWANTPOPART'){
        resultBlock.textContent = Math.round(sum * 0.7).toString();
    } else {
      resultBlock.textContent = sum.toString();
    }
  };

  sizeBlock.addEventListener('change', calcFunction);
  materialBlock.addEventListener('change', calcFunction);
  optionsBlock.addEventListener('change', calcFunction);
  promocodeBlock.addEventListener('input', calcFunction);

}