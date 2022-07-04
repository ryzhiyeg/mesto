import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {   
        super(popupSelector);
        
    }

    open(text, link) {

        const image = this._popup.querySelector('.popup__image');
        const title = this._popup.querySelector('.popup__subtitle');

        image.src = link;
        image.alt = text;
        title.textContent = text;
        super.open();
    }
}