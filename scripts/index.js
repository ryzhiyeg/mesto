/*-----------Объявляю переменные профиля-------*/
const profileTitle = document.querySelector ('.profile__title');
const profileSubtitle = document.querySelector ('.profile__subtitle');
const profileEditButton = document.querySelector ('.profile__edit-button');
/*-----------Объявляю переменные попапа-------*/
const popup = document.querySelector ('.popup');
const popupContainer = document.querySelector ('.popup__form');
const popupInputName = document.querySelector ('.popup__input_name');
const popupInputDiscription = document.querySelector ('.popup__input_discription');
const popupClose = document.querySelector ('.popup__close');
/*-----------Объявляю функции-------*/
function popupList () {
    popup.classList.add('popup_open');  
    popupInputName.value = profileTitle.textContent;
    popupInputDiscription.value = profileSubtitle.textContent;
}
profileEditButton.addEventListener('click', popupList);


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputDiscription.value;
    popupCloseList ();
}

function popupCloseList () {
    popup.classList.remove('popup_open');
    }

    popupClose.addEventListener('click', popupCloseList);