class Card {
    constructor(title, image) {
    
        this._title = title ;
        this._image = image ;
       
    }

    _getTemplate() {
    const elementTemplate = document
   .querySelector("#element__template")
   .content.querySelector(".element")
   .cloneNode(true);

   return elementTemplate;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__image').src = this._cardImage;  
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._title;
        this._element.querySelector('.element__remove') = this._buttonDeleteCard;
        this._element.querySelector('.element__like') = this._buttonlikeCard;

      }

    _setEventListeners() {
        //  кнопка лайка карточки
        this._buttonlikeCard.addEventListener("click", () => {
        this._buttonLike;
        }

         // Кнопка удаления карточки
        this._buttonDeleteCard.addEventListener("click", () => {
        this._buttonDelete;
        }

        // Нажатие на картинку
        this._cardImage.addEventListener("click", () => {
        this. _handleClickImage;
        }
        
    }

    _buttonLike() {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
      }

    _buttonDelete() {
        this._element.remove()
      }

    _handleClickImage() {
        this._cardImage.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        openPopup(this._popupOpenImage);
    }

    

      

}
