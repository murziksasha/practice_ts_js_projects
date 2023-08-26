// import 'youtube'; // Import the YouTube Player API typings
export default class VideoPlayer {
    constructor(triggers, overlaySelector) {
        this.triggers = triggers;
        this.overlaySelector = overlaySelector;
        this.btns = Array.from(document.querySelectorAll(triggers));
        this.overlay = document.querySelector(overlaySelector);
        this.close = this.overlay.querySelector('.close');
    }
    bindTriggers() {
        var _a;
        (_a = this.btns) === null || _a === void 0 ? void 0 : _a.forEach(btn => {
            btn.addEventListener('click', () => {
                if (document.querySelector('iframe#frame')) {
                    if (this.overlay)
                        this.overlay.style.display = 'flex';
                }
                else {
                    const path = btn.getAttribute('data-url');
                    if (path)
                        this.createPlayer(path);
                }
            });
        });
    }
    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`
        });
        console.log(this.player);
        if (this.overlay)
            this.overlay.style.display = 'flex';
    }
    hideYouTubeFrame() {
        if (this.overlay)
            this.overlay.style.display = 'none';
        this.player.stopVideo();
    }
    bindCloseBtn() {
        var _a, _b;
        (_a = this.close) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.hideYouTubeFrame.bind(this));
        (_b = this.overlay) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.hideYouTubeFrame.bind(this));
    }
    init() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag.parentNode)
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        this.bindTriggers();
        this.bindCloseBtn();
    }
}
//# sourceMappingURL=playVideo.js.map