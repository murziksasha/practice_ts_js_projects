class SearchView {
    constructor() {
        this._parentElement = document.querySelector('.search');
    }
    getQuery() {
        const queryElement = this._parentElement.querySelector('.search__field');
        const result = queryElement.value;
        this.clearInput();
        return result;
    }
    clearInput() {
        const queryElement = this._parentElement.querySelector('.search__field');
        queryElement.value = '';
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', e => {
            e.preventDefault();
            handler();
        });
    }
}
export default new SearchView();
//# sourceMappingURL=searchView.js.map