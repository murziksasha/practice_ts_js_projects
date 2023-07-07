export function createImgTask() {
    const btn = document.querySelector('button');
    const imgContainer = document.querySelector('.images');
    let currentImg;
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
            console.log('img 1 loaded');
            return img;
        })
            .then(img => setTimeout(() => img.style.display = 'none', 2000))
            .catch(err => console.error(err + '  😞'));
    });
}
//# sourceMappingURL=createImgTask.js.map