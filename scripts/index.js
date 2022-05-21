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

/*-----------Объявляю переменные 2 попапа-------*/
const popupAddCards = document.querySelector(".addCards");
const profilePlusButton = document.querySelector(".profile__button");
const popupCloseCards = popupAddCards.querySelector(".popup__close");

const popupOpenImage = document.querySelector(".popup_pictures");
const popupBigPictures = popupOpenImage.querySelector(".popup__image");
const popupSubtitleBigImg = popupOpenImage.querySelector(".popup__subtitle");
const popupCloseBig = popupOpenImage.querySelector(".popup__close");

/*-----------Объявляю переменную кнопки сохранения создания карточки-------*/

const saveButtonCard = popupAddCards.querySelector(".popup__save");

/*-----------Объявляю функции-------*/
function openPopup(popup) {
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
    const popupOpenEsc = document.querySelector(".popup_open");
    closePopup(popupOpenEsc);
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
const formCards = popupAddCards.querySelector(".popup__form");
const popupInputNameCards = popupAddCards.querySelector(
  ".popup__input_type_name"
);
const popupInputDiscriptionCards = popupAddCards.querySelector(
  ".popup__input_type_discription"
);

/*-----------Обработчики событий-------*/
const addSubmitForm = (event) => {
  event.preventDefault();

  renderElementCards({
    name: popupInputNameCards.value,
    link: popupInputDiscriptionCards.value,
  });
  saveButtonCard.classList.add("popup__save_disabled");
  closePopup(popupAddCards);
  event.target.reset();
};

const handleDeleteCard = (event) => {
  event.target.closest(".element").remove();
};

const handleLikeCard = (event) => {
  event.target
    .closest(".element__like")
    .classList.toggle("element__like_active");
};

popupCloseBig.addEventListener("click", function () {
  closePopup(popupOpenImage);
});

/*-----------Генерация карточки-------*/
const generateElementCards = (card) => {
  const newElementCard = elementTemplate.cloneNode(true);

  const titleElementCard = newElementCard.querySelector(".element__title");
  const imageElementCards = newElementCard.querySelector(".element__image");
  titleElementCard.textContent = card.name;
  imageElementCards.src = card.link;
  imageElementCards.alt = card.name;

  const deleteButtonCard = newElementCard.querySelector(".element__remove");
  deleteButtonCard.addEventListener("click", handleDeleteCard);
  const likeButtonCard = newElementCard.querySelector(".element__like");
  likeButtonCard.addEventListener("click", handleLikeCard);

  imageElementCards.addEventListener("click", function () {
    popupSubtitleBigImg.textContent = card.name;
    popupBigPictures.src = card.link;
    popupBigPictures.alt = card.name;
    openPopup(popupOpenImage);
  });

  return newElementCard;
};

/*-----------Функция для рендера-------*/
const renderElementCards = (card) => {
  elementContainer.prepend(generateElementCards(card));
};

initialCards.forEach((card) => {
  renderElementCards(card);
});

popupAddCards.addEventListener("submit", addSubmitForm);
