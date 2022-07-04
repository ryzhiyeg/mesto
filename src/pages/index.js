import '../pages/index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { validElements, initialCards, profileEditButton, popupRedactProfile, popupInputNameProfile, popupInputDiscriptionProfile, popupFormEdit, popupFormAdd, popupAddCards, profilePlusButton, buttonSaveCard} from '../utils/Constants.js';

const validationPopupEdit = new FormValidator(validElements,popupFormEdit);
validationPopupEdit.enableValidation();
const validationPopupAdd = new FormValidator(validElements,popupFormAdd);
validationPopupAdd.enableValidation();

function handlerFormSubmitProfile(data) {
  const { name, discription } = data;
  userInfo.setUserInfo(name, discription)
  editProfilePopup.close();
};

const addSubmitForm = (data) => {
  const card = generateElementCards({
    name : data['title'],
    link : data.discription
  })
  cards.addItem(card)
  addCardPopup.close()
  validationPopupAdd.resetPoputForm();
};

/*-----------Генерация карточки-------*/

function generateElementCards(data) {
  const card = new Card(data, "#element__template", () =>{
    imagePopup.open(data.name, data.link)
  });
  return card.generateCard();
}

profileEditButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo()
  popupInputNameProfile.value = data.name;
  popupInputDiscriptionProfile.value = data.job;
  editProfilePopup.open()
  validationPopupEdit.resetPoputForm();
});


profilePlusButton.addEventListener('click', function() {
  addCardPopup.open()
});

const renderCards = (data, wrap) => {
  const card = generateElementCards(data);
  wrap.prepend(card);
};

const cards = new Section({ items: initialCards, renderer: renderCards}, '.elements');
const imagePopup = new PopupWithImage('.popup_pictures');
const addCardPopup = new PopupWithForm('.addCards', addSubmitForm);
const editProfilePopup = new PopupWithForm('.redactProfile', handlerFormSubmitProfile);
const userInfo =  new UserInfo({nameProfile: '.profile__title', professionProfile: '.profile__subtitle'})


addCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
imagePopup.setEventListeners();
cards.renderItem();


