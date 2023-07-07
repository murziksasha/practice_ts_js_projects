


export function createImgTask() {

  const btn = document.querySelector('button') as HTMLButtonElement;
  const imgContainer = document.querySelector('.images') as HTMLDivElement;
  let currentImg;

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
    .then(img => {console.log('img 1 loaded')
      return img;
    })
    .then(img => setTimeout(()=> img.style.display = 'none', 2000))
    .catch(err => console.error(err + '  😞'))
  });


}