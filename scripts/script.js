/*-----------Объявляю переменные профиля-------*/
const profileTitle = document.querySelector ('.profile__title');
const profileSubtitle = document.querySelector ('.profile__subtitle');
const profileEditButton = document.querySelector ('.profile__edit-button');
/*-----------Объявляю переменные попапа-------*/
const popup = document.querySelector ('.popup');
const popupContainer = document.querySelector ('.popup__form');
const popupInputname = document.querySelector ('.popup__input_name');
const popupInputdiscription = document.querySelector ('.popup__input_discription');
const popupClose = document.querySelector ('.popup__close');
const popupSave = document.querySelector ('.popup__save');
/*-----------Объявляю функции-------*/
function popupList () {
    popup.classList.add('popup__open');
    popupInputname.value = profileTitle.innerText;
    popupInputdiscription.value = profileSubtitle.innerText;
}
profileEditButton.addEventListener('click', popupList);


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.innerText = popupInputname.value;
    profileSubtitle.innerText = popupInputdiscription.value;
    popupCloseList ();
}

popupSave.addEventListener('click', formSubmitHandler);
popupClose.addEventListener('click', popupCloseList);


function popupCloseList () {
    popup.classList.remove('popup__open');
    }
