class SearchView {
  _parentEl = document.querySelector('.search');
  _header = document.querySelector('.header');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
  addHandlerSort(handler) {
    this._header.addEventListener('click', function (e) {
      const btn = e.target.closest('.sort__btn');
      e.preventDefault();
      if (!btn) return;
      handler();
    });
  }
}

export default new SearchView();
