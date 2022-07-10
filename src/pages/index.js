import '../pages/index.css';
import { Api } from '../components/Api.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWihtTrash } from '../components/PopupWihtTrash';
import { validElements,
         profileEditButton,
         popupFormEdit,
         popupFormAdd,
         profilePlusButton,
         profileAvatarButton,
         nameProfile,
         professionProfile,
         avatarProfile,
         popupFormAvatar} from '../utils/Constants.js';

const api = new Api ({
  baseUrl: `https://mesto.nomoreparties.co/v1/cohort-44`,
  headers: {
    authorization: '0c1e37c0-f7a4-43b6-ad4f-5f10e90dd5bc',
    'Content-Type': 'application/json',
  }
});


Promise.all([api.getUserInfo(), api.getCards()])
  .then(([me, cardsList]) => {
    userId = me._id;
    userInfo.setUserInfo(me);    
    cards.renderItems(cardsList);
  })
  .catch((err) => 
    console.log(err))
    .finally(() => 
  {})

let userId;

 // Информация о пользователе____________________________

  const userInfo =  new UserInfo(nameProfile, professionProfile, avatarProfile);

  // Попап редактирования профиля____________________________

const editProfilePopup = new PopupWithForm('.redactProfile', (data) =>  {  
  editProfilePopup.loading(true);
  api.changeProfileUser(data)
    .then((formData) => {
      userInfo.setUserInfo(formData);
      editProfilePopup.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editProfilePopup.loading(false)
    })
  
});
  editProfilePopup.setEventListeners();
  profileEditButton.addEventListener("click", () => {
    validationPopupEdit.resetPoputForm();
    editProfilePopup.setInputValues(userInfo.getUserInfo());
    editProfilePopup.open()
})

// Попап изменения аватара____________________________

const addAvatarPopup = new PopupWithForm('.redactAvatar', (formData) => {
    addAvatarPopup.loading(true),
    api.changeAvatarUser(formData)
      .then((data) => {
        userInfo.setUserInfo(data);
        addAvatarPopup.close()
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        addAvatarPopup.loading(false)
      })
  });

addAvatarPopup.setEventListeners();

// Кнопка редакт.аватара и ее обработчик

profileAvatarButton.addEventListener('click', () => {
  validationPopupAvatar.resetPoputForm();
  addAvatarPopup.open()
});

// Попап открытой картинки
const imagePopup = new PopupWithImage('.popup_pictures');
imagePopup.setEventListeners();

// Создаем попап с подтверждением удаления карточки

const trashCardPopup = new PopupWihtTrash('.closeEndPopup');
trashCardPopup.setEventListeners();

// попап с формой добавления карточки
    const addCardPopup = new PopupWithForm('.addCards', (formData) => {
        addCardPopup.loading(true),
        api.addCard(formData)
          .then((data) => {
            cards.addItem(data);
            addCardPopup.close()
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            addCardPopup.loading(false)
          })
        });
    addCardPopup.setEventListeners();
    profilePlusButton.addEventListener('click', function() {
    validationPopupAdd.resetPoputForm();
    addCardPopup.open()
});

const validationPopupEdit = new FormValidator(validElements,popupFormEdit);
validationPopupEdit.enableValidation();
const validationPopupAdd = new FormValidator(validElements,popupFormAdd);
validationPopupAdd.enableValidation();
const validationPopupAvatar = new FormValidator(validElements,popupFormAvatar);
validationPopupAvatar.enableValidation();



// КОТОРЫЕ СОЗДАЮТСЯ НА САЙТЕ
// Создание закрточки

const generateElementCards = (data) => {
  const card = new Card (data, "#element__template", () => imagePopup.open(data), () => {
    trashCardPopup.setRemove(() => {
      trashCardPopup.loading(true);
      api.deleteCard(data._id)
      .then(() => {
        card.deleteCard();
        trashCardPopup.close();
      })
      .catch((err) => 
          console.log(err))
        .finally(() => 
        trashCardPopup.loading(false))
    })
    trashCardPopup.open();
  }, 
  () => {
    if (!card.isLiked()) {
      api.addLike(data._id)
        .then((data) => {
          card.updateLikes(data);
          card.updateLikesActive();
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      api.deleteLike(data._id)
        .then((data) => {
          card.updateLikes(data);
          card.updateLikesActive();
        })
        .catch((err) => {
          console.log(err);
        })
  }
},
userId,
  )
  return card.generateCard();
}

const cards = new Section(
  (cardItems) => generateElementCards(cardItems),
  '.elements'
);
