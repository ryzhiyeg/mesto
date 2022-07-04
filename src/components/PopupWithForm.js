import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector)
        
        this._form = this._popup.querySelector('.popup__form');
        this._handleFormSubmit = handleFormSubmit;
        this.inputs = [...this._form.querySelectorAll('.popup__input')]

    }

    _getInputValues() {
        const formValues = {};
        this.inputs.forEach(input => {
            formValues[input.name] = input.value;
        })

        return formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', () => {
            this._handleFormSubmit(this._getInputValues())
        })
    }

    close() {
        super.close();
        this._form.reset();
 }
}