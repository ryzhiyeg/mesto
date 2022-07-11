export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeButton = this._popup.querySelector(".popup__close");
    }

    open() {
      this._popup.classList.add("popup_open");
        document.addEventListener("keyup", this._handleEscClose);
    }

    close() {
      this._popup.classList.remove("popup_open");
        document.removeEventListener("keyup", this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
    }
    }
    _setEventListeners () {
      this._closeButton.addEventListener('click', () => {
        this.close();
      })
      
      this._popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_open')) {
          this.close();
        }
      });
    }
 
}