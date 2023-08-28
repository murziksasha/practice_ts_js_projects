
export default class Difference {
  private oldOfficer: HTMLElement | null;
  private newOfficer: HTMLElement | null;
  private items: string;
  private oldCounter: number = 0;
  private newCounter: number = 0;
  private oldItems: NodeListOf<HTMLElement> | undefined; 
  private newItems: NodeListOf<HTMLElement> | undefined; 

  constructor(
    public oldOfficerSelector: string,
    public newOfficerSelector: string,
    public itemsSelector: string
  ){
    this.oldOfficer = document.querySelector(oldOfficerSelector);
    this.newOfficer = document.querySelector(newOfficerSelector);
    this.items = itemsSelector;
    this.oldItems = this.oldOfficer?.querySelectorAll(itemsSelector);
    this.newItems = this.oldOfficer?.querySelectorAll(itemsSelector);
  }

  bindTriggers() {
    this.oldOfficer?.querySelector('plus')?.addEventListener('click', () => {
      if(this.oldItems && this.oldCounter !== this.oldItems.length - 2){
        this.oldItems[this.oldCounter].style.display = 'flex';
        this.oldCounter++;
      } else {
        if(this.oldItems){
          this.oldItems[this.oldCounter].style.display = 'flex';
          this.oldItems[this.oldItems.length - 1].remove();
        }
      }
    });

    this.newOfficer?.querySelector('plus')?.addEventListener('click', () => {
      if(this.newItems && this.newCounter !== this.newItems.length - 2){
        this.newItems[this.newCounter].style.display = 'flex';
        this.newCounter++;
      } else {
        if(this.newItems){
          this.newItems[this.newCounter].style.display = 'flex';
          this.newItems[this.newItems.length - 1].remove();
        }
      }
    });

  }

  hideItems(items: NodeListOf<HTMLElement> | undefined) {
    if(items) items.forEach((item, i, arr) => {
      if(i !== arr.length - 1) {
        if(item instanceof HTMLElement) item.style.display = 'none';
      }
    });
  }

  
    
  init() {
    this.hideItems(this.oldItems);
    this.hideItems(this.newItems);
    this.bindTriggers();
  }


}