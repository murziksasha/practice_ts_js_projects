


export function createImgTask() {

  const btn = document.querySelector('button') as HTMLButtonElement;
  const imgContainer = document.querySelector('.images') as HTMLDivElement;
  let currentImg: any;

  const wait = (seconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

 const createImage = (imgPath: string): Promise<HTMLImageElement> => {
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

  const loadNPause = async (arr: string[]) => {
    try {
      const img1 = await createImage(arr[0]);
      console.log('img 1 loaded');
      await wait(2);
      img1.style.display = 'none';
      
      const img2 = await createImage(arr[1]);
      console.log('img 2 loaded');
      await wait(2);
      img2.style.display = 'none';

      const img3 = await createImage(arr[2]);
      console.log('img 3 loaded');
      await wait(2);
      img3.style.display = 'none';
    } catch (err) {
      console.error(err + '  😞');
    }
  }

  const dataForImg = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

  btn?.addEventListener('click', () => loadNPause(dataForImg));

  const loadAll = async (arr: string[]) => {
    arr.map(img => {
      // const imgMy = createImage(img);
      const imgMy = createImage(img);
      console.log(img);

    })
  }

  // loadAll(dataForImg)


}