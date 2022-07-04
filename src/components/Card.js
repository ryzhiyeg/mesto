
export class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._cardSelector = cardSelector;
        this._popupOpenImage = document.querySelector('.popup_pictures');
        this._element = this._getTemplate();
        this._titleElement =  this._element.querySelector('.element__title');
        this._buttonDeleteCard = this._element.querySelector('.element__remove');
        this._buttonlikeCard = this._element.querySelector('.element__like');
        this._cardImage = this._element.querySelector('.element__image');
        this._popupOpenImage = document.querySelector(".popup_pictures");
        this._popupBigPictures = this._popupOpenImage.querySelector(".popup__image");
        this._popupSubtitleBigImg = this._popupOpenImage.querySelector(".popup__subtitle");
    }

    _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element')
   .cloneNode(true);

   return cardElement;
    }

    _buttonLike(event) {
        event.target.classList.toggle('element__like_active');
      }

    _buttonDelete() {
        this._element.remove();
      }

    _setEventListeners() {
     //  кнопка лайка карточки
    this._element.querySelector('.element__like').addEventListener("click", (event) => {this._buttonLike(event)});
// Кнопка удаления карточки
     this._buttonDeleteCard.addEventListener("click", (event) => {this._buttonDelete(event)});

    // Нажатие на картинку
    this._cardImage.addEventListener("click", (event) => {this._handleCardClick(event)});
    }

        //  Генерируем карточку
    generateCard() {
        this._setEventListeners();
    
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._titleElement.textContent = this._name;

  
          return this._element;
        }

}

