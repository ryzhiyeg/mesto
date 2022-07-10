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
  
  export  const popupRemoveCards = document.querySelector(".closeEndPopup");

  export  const profileEditButton = document.querySelector(".profile__edit-button");
  export  const popupRedactProfile = document.querySelector(".redactProfile");
  export  const popupAddCards = document.querySelector(".addCards");

  
  export  const popupInputNameProfile = popupRedactProfile.querySelector(".popup__input_type_name");
  export  const popupInputDiscriptionProfile = popupRedactProfile.querySelector(".popup__input_type_discription");

  export  const popupFormEdit = document.querySelector(".popup__form-edit");
  export  const popupFormAdd = document.querySelector(".popup__form-add");

  export  const profilePlusButton = document.querySelector(".profile__button");
  export  const buttonSaveCard = popupAddCards.querySelector(".popup__save");

 

  export  const popupAddAvatar = document.querySelector(".redactAvatar");
  export  const profileAvatarButton = document.querySelector(".profile__button_avatar");
  export  const popupInputLinkProfile = popupAddAvatar.querySelector(".popup__input_type_discription");
  export  const popupFormAvatar = document.querySelector(".popup__form-avatar");
  


  export const nameProfile = '.profile__title';
  export const professionProfile = '.profile__subtitle';
  export const avatarProfile = '.profile__avatar';
