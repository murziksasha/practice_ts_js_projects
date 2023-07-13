var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    const loadNPause = (arr) => __awaiter(this, void 0, void 0, function* () {
        try {
            const img1 = yield createImage(arr[0]);
            console.log('img 1 loaded');
            yield wait(2);
            img1.style.display = 'none';
            const img2 = yield createImage(arr[1]);
            console.log('img 2 loaded');
            yield wait(2);
            img2.style.display = 'none';
            const img3 = yield createImage(arr[2]);
            console.log('img 3 loaded');
            yield wait(2);
            img3.style.display = 'none';
        }
        catch (err) {
            console.error(err + '  😞');
        }
    });
    const dataForImg = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => loadNPause(dataForImg));
    const loadAll = (arr) => __awaiter(this, void 0, void 0, function* () {
        arr.map(img => {
            // const imgMy = createImage(img);
            const imgMy = createImage(img);
            console.log(img);
        });
    });
    // loadAll(dataForImg)
}
//# sourceMappingURL=createImgTask.js.map