export function resizePictures(imgSelector) {
    const blocks = document.querySelectorAll(imgSelector);
    function showImg(block, curr) {
        const img = block.querySelector('img');
        if (img) {
            img.src = img.src.slice(0, -4) + '-1.png';
            img.classList.add('animate__animated', 'animate__flipInX');
        }
        const insideElements = block.querySelectorAll('p:not(.sizes-hit)');
        insideElements.forEach(item => {
            item.classList.add('hide');
        });
    }
    function hideImg(block, curr) {
        const img = block.querySelector('img');
        if (img) {
            img.src = img.src.slice(0, -6) + '.png';
            img.classList.remove('animate__animated', 'animate__flipInX');
        }
        const insideElements = block.querySelectorAll('p:not(.sizes-hit)');
        insideElements.forEach(item => {
            item.classList.remove('hide');
        });
    }
    blocks.forEach((item, i) => {
        item.addEventListener('mouseover', () => showImg(item, i));
        item.addEventListener('mouseout', () => hideImg(item, i));
    });
}
//# sourceMappingURL=resizePictures.js.map