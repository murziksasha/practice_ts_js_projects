export function createImgTask() {
    const btn = document.querySelector('button');
    const imgContainer = document.querySelector('.images');
    let currentImg;
    const wait = (seconds) => {
        return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    };
    const createImage = (imgPath) => {
        return new Promise((resolve, reject) => {
            const img = document.createElement('img');
            img.src = imgPath;
            img.addEventListener('load', () => {
                imgContainer === null || imgContainer === void 0 ? void 0 : imgContainer.append(img);
                resolve(img);
            });
            img.addEventListener('error', () => {
                const error = new Error('img not loaded...');
                reject(error);
            });
        });
    };
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
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
            .then(img => {
            currentImg = img;
            console.log('img 2 loaded');
            return wait(2);
        })
            .then(() => {
            currentImg.style.display = 'none';
        })
            .catch(err => console.error(err + '  😞'));
    });
}
//# sourceMappingURL=createImgTask.js.map