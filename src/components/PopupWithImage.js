import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {   
        super(popupSelector);
        this.image = this._popup.querySelector('.popup__image');
        this.title = this._popup.querySelector('.popup__subtitle');
    }

    open(text, link) {

        this.image.src = link;
        this.image.alt = text;
        this.title.textContent = text;
        super.open();
    }
}