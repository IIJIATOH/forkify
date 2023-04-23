import View from './View';
import icons from 'url:../../img/icons.svg';
class ShoppingCartView extends View {
  _parentElement = document.querySelector('.recipe');
  _btn = document.querySelector('.nav__btn--shoping-cart');
  _errorMessage = 'No ingridients in  shopping cart';
  // Add ingridients
  addHandlerAddIngridientsToList(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--addIng');
      if (!btn) return;
      handler();
    });
  }
  // Delete ingridients
  addHandlerDeleteIngridientsFromList(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--delete-all-ing');
      if (!btn) return;
      handler();
    });
  }
  addHandlerShoppingCart(handler) {
    this._btn.addEventListener('click', handler);
  }
  _generateMarkup() {
    console.log(this._data.flat());
    return `<div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this._data.flat().map(this._generateMarkupIngridient).join('')}
      </ul>
    </div>;
    <button class="btn--delete-all-ing">Delete All ingridients</button>
    `;
  }
  _generateMarkupIngridient(ing) {
    return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${
          ing.quantity ? new Fraction(ing.quantity).toString() : ''
        }</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>
    `;
  }
}
export default new ShoppingCartView();
