


export function createImgTask() {

  const btn = document.querySelector('button') as HTMLButtonElement;
  const imgContainer = document.querySelector('.images') as HTMLDivElement;
  let currentImg: any;

  const wait = (seconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

 const createImage = (imgPath: string)=> {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img') as HTMLImageElement;
    img.src = imgPath;
    img.addEventListener('load', () => {
      imgContainer?.append(img);
      resolve(img);
    });
    img.addEventListener('error', () => {
      const error = new Error('img not loaded...');
      reject(error)
    });
  })
 }


  btn?.addEventListener('click', () => {
    createImage('img/img-1.jpg')
    .then(img => {
      currentImg = img;
      console.log('img 1 loaded');
      return wait(2);
    })
    .then(img => {
      currentImg.style.display = 'none';
      return createImage('img/img-2.jpg');
    })
    .then(img =>{
      currentImg = img;
      console.log('img 2 loaded');
      return wait(2);
    })
    .then (() => {
      currentImg.style.display = 'none';
    })
    .catch(err => console.error(err + '  😞'))
  });


}