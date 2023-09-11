

export function drop() {
  const fileInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="upload"]');

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, (e)=> preventDefaults(e), false);
    });
  });

  function preventDefaults(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item: HTMLElement){
    const elem: HTMLElement | null = item?.closest('.file_upload');
    if(elem){
      elem.style.border = '5px solid yellow';
      elem.style.background = 'rgba(0, 0, 0, .7)';
    }
  }

  function unHighlight(item: HTMLElement){
    const elem: HTMLElement | null = item?.closest('.file_upload');
    if(elem){
      elem.style.border = 'none';
      elem.style.background = 'inherit';
    }
  }

  ['dragenter','dragover'].forEach(eventName => {
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
        input.files = e.dataTransfer?.files ?? null;
        let dots: string = '';
        let name: string = '';
        let arr: string[] = [];
        if (input.files !== null && input.files.length > 0) {
          arr = input.files[0].name.split('.');
          arr[0].length > 6 ? dots = '...' : '.';
          name = arr[0].substring(0, 6) + dots + arr[1];
        }
        if(input.previousElementSibling !==null){
          input.previousElementSibling.textContent = name;
        }
      });
  });

}