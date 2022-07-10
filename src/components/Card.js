export class Card {
    constructor(data, cardSelector, handleCardClick, handleDeleteClick, handleLikeClick, userId) {
        this._data = data;
        this._id = data.id;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._ownerId = data.owner.id 
        this._userId = userId;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._cardSelector = cardSelector;
        this._handleLikeClick = handleLikeClick;
    }

    _getTemplate() {
    this._element = document.querySelector(this._cardSelector).content.querySelector('.element')
   .cloneNode(true);

    this.like = this._element.querySelector('.element__like');
    this.photo = this._element.querySelector('.element__image');
    this.trash = this._element.querySelector('.element__remove');
    }

    _handleLikeClick() {
      this.like.target.classList.toggle('element__like_active');
      }

    updateLikes(data) {
      this._likes = data.likes;
      }

    isLiked () {
        return Boolean(this._likes.find((item) => 
        item._id === this._userId));
      }

      // Активация кнопки лайка
    updateLikesActive() {
      this._likesCounter.textContent = this._likes.length;
      if (this.isLiked()) {
      this.like.classList.add('element__like_active');
        } else {
      this.like.classList.remove('element__like_active');
        }
      }

      deleteCard() {
        this._element.remove();
      }

    _setEventListeners() {
     //  кнопка лайка 

     this.like.addEventListener('click', () => this._handleLikeClick());
    
     // Кнопка удаления карточки
     this.trash.addEventListener("click", () =>  this._handleDeleteClick());

     // Нажатие на картинку
     this.photo.addEventListener("click", () => this._handleCardClick(this._data));
    }


        //  Генерируем карточку
    generateCard() {
        this._getTemplate();
        this._element.querySelector('.element__title').textContent = this._name;
    
        this.photo.src = this._link;
        this.photo.alt = this._name;

        this._likesCounter = this._element.querySelector('.element__like-counter')
        this._likesCounter.textContent = this._likes.length;

        if (this._ownerId !== this._userId) {
          this.trash.classList.add('element__remove-hidden')
        } 
    
        if (this.isLiked()) {
          this.like.classList.add('element__like_active')
        }

        this._setEventListeners();

          return this._element;
        }


}
