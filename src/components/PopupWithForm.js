import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._button = this._form.querySelector('.popup__save');
        this._inputs = [...this._form.querySelectorAll('.popup__input')];
    }

    _getInputValues() {
        this._formValues = {};
        this._inputs.forEach((input) => {
            this._formValues[input.name] = input.value;
        })
        return this._formValues;
    }

    setInputValues(data) {
        this._inputs.forEach((input) => {
          if (data[input.name]){
            input.value = data[input.name];
          }
        });
      }

    close() {
        super.close();
        this._form.reset();
    }

    loading (isLoading) {
        if (isLoading) {
            this._button.textContent = 'Сохранение...';
        } else {
            this._button.textContent = 'Сохранить';
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
    }

}