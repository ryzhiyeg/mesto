import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const validElements = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error-visible",
};

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];


/*-----------Объявляю переменные профиля-------*/

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileEditButton = document.querySelector(".profile__edit-button");

/*-----------Объявляю переменные 1 попапа-------*/
const popupRedactProfile = document.querySelector(".redactProfile");
const popupContainer = popupRedactProfile.querySelector(".popup__form");
const popupInputNameProfile = popupRedactProfile.querySelector(
  ".popup__input_type_name"
);
const popupInputDiscriptionProfile = popupRedactProfile.querySelector(
  ".popup__input_type_discription"
);
const popupCloseProfile = popupRedactProfile.querySelector(".popup__close");
const popupFormEdit = document.querySelector(".popup__form-edit");
const popupFormAdd = document.querySelector(".popup__form-add");

/*-----------Объявляю переменные 2 попапа-------*/
const popupAddCards = document.querySelector(".addCards");
const profilePlusButton = document.querySelector(".profile__button");
const popupCloseCards = popupAddCards.querySelector(".popup__close");

const popupOpenImage = document.querySelector(".popup_pictures");
const popupCloseBig = popupOpenImage.querySelector(".popup__close");

/*-----------Объявляю переменную кнопки сохранения создания карточки-------*/

const buttonSaveCard = popupAddCards.querySelector(".popup__save");



/*-----------Объявляю функции-------*/
 export function openPopup(popup) {
  popup.classList.add("popup_open");
  popup.addEventListener("mousedown", closePopupClickOverlay);
  document.addEventListener("keyup", handleButtonEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
  popup.removeEventListener("mousedown", closePopupClickOverlay);
  document.removeEventListener("keyup", handleButtonEscape);
}

/*-----------Объявляю функцию закрытия попапа на Esc-------*/
const handleButtonEscape = (evt) => {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_open");
    closePopup(popup);
  }
};

/*-----------Объявляю функцию закрытия попапа Overlay-------*/

function closePopupClickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

profileEditButton.addEventListener("click", function () {
  popupInputNameProfile.value = profileTitle.textContent;
  popupInputDiscriptionProfile.value = profileSubtitle.textContent;
  openPopup(popupRedactProfile);
});

function handlerFormSubmitProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputNameProfile.value;
  profileSubtitle.textContent = popupInputDiscriptionProfile.value;
  closePopup(popupRedactProfile);
}

popupContainer.addEventListener("submit", handlerFormSubmitProfile);

popupCloseProfile.addEventListener("click", function () {
  closePopup(popupRedactProfile);
});

/*-----------Объявляю функции 2го попапа-------*/

profilePlusButton.addEventListener("click", function () {
  openPopup(popupAddCards);
});

popupCloseCards.addEventListener("click", function () {
  closePopup(popupAddCards);
});

/*-----------ДОБАВЛЕНИЕ КАРТОЧЕК-------*/

const elementTemplate = document
  .querySelector("#element__template")
  .content.querySelector(".element");

/*-----------Дом Элементы-------*/
const elementContainer = document.querySelector(".elements");
const popupInputNameCards = popupAddCards.querySelector(
  ".popup__input_type_name"
);
const popupInputDiscriptionCards = popupAddCards.querySelector(
  ".popup__input_type_discription"
);

/*-----------Обработчики событий-------*/
const addSubmitForm = (event) => {
  event.preventDefault();
  const data = {}
  data.name = popupInputNameCards.value;
  data.link = popupInputDiscriptionCards.value;
  renderCards(data);
  buttonSaveCard.classList.add('popup__save_disabled');
  closePopup(popupAddCards);
  popupContainer.reset();
};  

popupCloseBig.addEventListener("click", function () {
  closePopup(popupOpenImage);
});

/*-----------Генерация карточки-------*/

function generateElementCards(data) {
  const card = new Card(data, "#element__template");
  const cardElement = card.generateCard();
return cardElement;
}

const renderCards = (data) => {
  elementContainer.prepend(generateElementCards(data));
};
initialCards.forEach((data) => {
  renderCards(data);
});

/*-----------Функция для валидации-------*/

const validationPopupEdit = new FormValidator(validElements,popupFormEdit);
validationPopupEdit.enableValidation();
const validationPopupAdd = new FormValidator(validElements,popupFormAdd);
validationPopupAdd.enableValidation();


popupAddCards.addEventListener("submit", addSubmitForm);
