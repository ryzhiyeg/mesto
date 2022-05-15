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
const popupContainer = document.querySelector(".popup__form");
const popupInputName = document.querySelector(".popup__input_type_name");
const popupInputDiscription = document.querySelector(
  ".popup__input_type_discription"
);
const popupClose = document.querySelector(".popup__close");

/*-----------Объявляю переменные 2 попапа-------*/
const popupAddCards = document.querySelector(".addCards");
const profilePlusButton = document.querySelector(".profile__button");
const popupCloseCards = popupAddCards.querySelector(".popup__close");

const popapOpenImage = document.querySelector(".popap__pictures");
const popapBigPictures = popapOpenImage.querySelector(".popup__image");
const popapSubtitleBigImg = popapOpenImage.querySelector(".popup__subtitle");
const popapCloseBig = popapOpenImage.querySelector(".popup__close");

/*-----------Объявляю функции-------*/
function popupFirstList() {
  popupRedactProfile.classList.add("popup_open");
  popupInputName.value = profileTitle.textContent;
  popupInputDiscription.value = profileSubtitle.textContent;
}
profileEditButton.addEventListener("click", popupFirstList);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputDiscription.value;
  popupCloseList();
}

popupContainer.addEventListener("submit", formSubmitHandler);

function popupCloseList() {
  popupRedactProfile.classList.remove("popup_open");
}

popupClose.addEventListener("click", popupCloseList);

/*-----------Объявляю функции 2го попапа-------*/
function openPopapCards() {
  popupAddCards.classList.add("popup_open");
}

profilePlusButton.addEventListener("click", openPopapCards);

function closePopapCards() {
  popupAddCards.classList.remove("popup_open");
}

popupCloseCards.addEventListener("click", closePopapCards);

/*-----------ДОБАВЛЕНИЕ КАРТОЧЕК-------*/

const elementTemplate = document
  .querySelector("#element__template")
  .content.querySelector(".element");

/*-----------Дом Элементы-------*/
const elementContainer = document.querySelector(".elements");
const formCards = popupAddCards.querySelector(".popup__form");
const popapInputName = popupAddCards.querySelector(".popup__input_type_name");
const popapInputDiscription = popupAddCards.querySelector(
  ".popup__input_type_discription"
);

/*-----------Обработчики событий-------*/
const addSubmitForm = (event) => {
  event.preventDefault();

  renderElementCards({
    name: popapInputName.value,
    link: popapInputDiscription.value,
  });
  closePopapCards();
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

function popapOpenBigPictures() {
  popapOpenImage.classList.add("popup_open");
}

function popapCloseBigPictures() {
  popapOpenImage.classList.remove("popup_open");
}
popapCloseBig.addEventListener("click", popapCloseBigPictures);

/*-----------Генерация карточки-------*/
const generateElementCards = (instalFile) => {
  const newElementCard = elementTemplate.cloneNode(true);

  const titleElementCard = newElementCard.querySelector(".element__title");
  const imageElementCards = newElementCard.querySelector(".element__image");
  titleElementCard.textContent = instalFile.name;
  imageElementCards.src = instalFile.link;

  const deleteButtonCard = newElementCard.querySelector(".element__remove");
  deleteButtonCard.addEventListener("click", handleDeleteCard);
  const likeButtonCard = newElementCard.querySelector(".element__like");
  likeButtonCard.addEventListener("click", handleLikeCard);

  imageElementCards.addEventListener("click", function () {
    popapSubtitleBigImg.textContent = instalFile.name;
    popapBigPictures.src = instalFile.link;
    popapOpenBigPictures();
  });

  return newElementCard;
};

/*-----------Функция для рендера-------*/
const renderElementCards = (instalFile) => {
  elementContainer.prepend(generateElementCards(instalFile));
};

initialCards.forEach((instalFile) => {
  renderElementCards(instalFile);
});

popupAddCards.addEventListener("submit", addSubmitForm);

 