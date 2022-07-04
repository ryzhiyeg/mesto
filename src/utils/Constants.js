export const validElements = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error-visible",
  };
  
  export const initialCards = [
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
  
  export  const profileEditButton = document.querySelector(".profile__edit-button");
  export  const popupRedactProfile = document.querySelector(".redactProfile");
  export  const popupInputNameProfile = popupRedactProfile.querySelector(
    ".popup__input_type_name"
  );
  export  const popupInputDiscriptionProfile = popupRedactProfile.querySelector(
    ".popup__input_type_discription"
  );
  export  const popupFormEdit = document.querySelector(".popup__form-edit");
  export  const popupFormAdd = document.querySelector(".popup__form-add");
  export  const popupAddCards = document.querySelector(".addCards");
  export  const profilePlusButton = document.querySelector(".profile__button");
  export  const buttonSaveCard = popupAddCards.querySelector(".popup__save");
