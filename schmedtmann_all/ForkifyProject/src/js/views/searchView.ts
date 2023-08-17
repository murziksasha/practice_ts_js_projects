class SearchView {
  private _parentElement = document.querySelector('.search') as HTMLElement;

  getQuery() {
    const queryElement = this._parentElement.querySelector('.search__field') as HTMLInputElement;
    const result = queryElement.value;
    this.clearInput();
    return result;
  }

  private clearInput() {
    const queryElement = this._parentElement.querySelector('.search__field') as HTMLInputElement;
    queryElement.value = '';
  }

  addHandlerSearch(handler: any) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }

}

export default new SearchView();

