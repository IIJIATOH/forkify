import View from './View';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.pagination__btn');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const _generateMarkupNumbPage = function () {
      if (numPages === 1) return '';
      let markup = '';
      for (let i = 1; i <= numPages; i++) {
        markup += `<a href="#" data-goto = ${i} class="pagination__link pagination__btn" /> ${i}</a>`;
      }
      return markup;
    };
    console.log(_generateMarkupNumbPage());
    // page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
      <button data-goto= "${
        curPage + 1
      }" class="btn--inline pagination__btn pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      <div>
    ${_generateMarkupNumbPage()}
    </div>`;
    }
    // last page
    if (curPage === numPages && numPages > 1) {
      return `
      <div>
    ${_generateMarkupNumbPage()}
    </div>
      <button data-goto= "${
        curPage - 1
      }" class="btn--inline pagination__btn pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
    </button>`;
    }
    // other page
    if (curPage < numPages) {
      return `
      <button data-goto= "${
        curPage - 1
      }" class="btn--inline pagination__btn pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
    </button>
    <div>
    ${_generateMarkupNumbPage()}
    </div>

    <button data-goto= "${
      curPage + 1
    }" class="btn--inline pagination__btn pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
    // page 1, and there are NO other pages
    return 'only 1 page';
  }
}

export default new PaginationView();
