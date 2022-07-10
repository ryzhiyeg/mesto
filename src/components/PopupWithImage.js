import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {   
        super(popupSelector);
        this.image = this._popup.querySelector('.popup__image');
        this.title = this._popup.querySelector('.popup__subtitle');
    }

    open({name, link}) {
        this.image.src = link;
        this.image.alt = name;
        this.title.textContent = name;
        super.open();
    }
}