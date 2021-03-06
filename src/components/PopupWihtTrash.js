import {Popup} from "./Popup.js";
export class PopupWihtTrash extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._trashButton = this._popup.querySelector('.popup__save');
    }
    
    loading (isLoading) {
        if(isLoading) {
            this._trashButton.textContent = 'Удаление...'
        } else {
            this._trashButton.textContent = 'ДА'
        }
      }


    setRemove(remove) {
        this._handleSubmitRemove = remove;
    }

    _setEventListeners() {
        super._setEventListeners();
        this._trashButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleSubmitRemove();
          });
    }
}