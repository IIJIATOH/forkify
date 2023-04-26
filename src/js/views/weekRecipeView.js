import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class weekRecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage =
    'No recipes found on your weekend! Please add some recipes ;)';
  _btn = document.querySelector('.nav__btn--calender');
  addHandlerCalender(handler) {
    this._btn.addEventListener('click', function () {
      handler();
    });
  }
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) return '';
    this._data = data;
    const markup = this._generateMarkup();
    if (!render) return markup;
    this._clear();
    this.insertHTMLAfterBegin(markup);
  }
  _generateMarkup() {
    return `<div class='week'>
    <div class='monday'>
    <h1>MONDAY</h1>
    ${this._data[0]
      .map(result => previewView.render(result, false))
      .join('')}</div>
    <div class='tuesday'>
    <h1>TUESDAY</h1>
    ${this._data[1]
      .map(result => previewView.render(result, false))
      .join('')}</div>
    <div class='wednesday'>
    <h1>WEDNESDAY</h1>
    ${this._data[2]
      .map(result => previewView.render(result, false))
      .join('')}</div>
    <div class='thursday'>
    <h1>THURSDAY</h1>
    ${this._data[3]
      .map(result => previewView.render(result, false))
      .join('')}</div>   
    <div class='friday'>
    <h1>FRIDAY</h1>
    ${this._data[4]
      .map(result => previewView.render(result, false))
      .join('')}</div>    
    <div class='saturday'>
    <h1>SATURDAY</h1>
    ${this._data[5]
      .map(result => previewView.render(result, false))
      .join('')}</div>   
    <div class='sunday'>
    <h1>SUNDAY</h1>
    ${this._data[6]
      .map(result => previewView.render(result, false))
      .join('')}</div>   
    </div>;`;
  }
}
export default new weekRecipeView();
