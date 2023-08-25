// import 'youtube'; // Import the YouTube Player API typings


export default class VideoPlayer {

  private btns: HTMLElement[] | null;
  private overlay: HTMLElement | null;
  private close: HTMLElement | null;
  private player: any;

  constructor(
    public triggers: string,
    public overlaySelector: string,
  ){
    this.btns = Array.from(document.querySelectorAll(triggers)) as HTMLElement[];
    this.overlay = document.querySelector(overlaySelector) as HTMLElement;
    this.close = this.overlay.querySelector('.close');
  }

  bindTriggers() {
    this.btns?.forEach(btn => {
      btn.addEventListener('click', () => {
        if(document.querySelector('iframe#frame')){
          if(this.overlay)this.overlay.style.display = 'flex';
        } else {
          const path = btn.getAttribute('data-url');
          if(path) this.createPlayer(path);
        }
      })
    });
  }

  createPlayer(url: string){
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`
    });

    console.log(this.player);
    if(this.overlay)this.overlay.style.display = 'flex';

  }

  private hideYouTubeFrame() {
    if(this.overlay)this.overlay.style.display = 'none';
    this.player.stopVideo();
  }

  bindCloseBtn() {
    this.close?.addEventListener('click', this.hideYouTubeFrame.bind(this));
    this.overlay?.addEventListener('click', this.hideYouTubeFrame.bind(this));
  }

  init() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if(firstScriptTag.parentNode) firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.bindTriggers();
    this.bindCloseBtn();

  }


}