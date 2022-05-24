const validElements = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error-visible",
};


// Функция, которая добавляет класс с ошибкой
const showError = (formElement, inputElement, errorMessage, validElements) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validElements.errorClass);
  inputElement.classList.add(validElements.inputErrorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideError = (formElement, inputElement, validElements) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validElements.inputErrorClass);
  errorElement.classList.remove(validElements.errorClass);
  errorElement.textContent = "";
};

// функция возвращает или убирает текст ошибки

const checkInputValidity = (formElement, inputElement, validElements) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, validElements);
  } else {
    hideError(formElement, inputElement, validElements);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function disableButton(buttonElement, inactiveButtonClass) {
  buttonElement.classList.add(inactiveButtonClass); 
  buttonElement.disabled = true;
} 

function disableButtonRemove(buttonElement, inactiveButtonClass) {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.disabled = false;
} 

const toggleButtonState = (inputList, buttonElement, validElements) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, validElements.inactiveButtonClass);
  } else {
    disableButtonRemove(buttonElement, validElements.inactiveButtonClass)
  }
};

const setEventListeners = (
  formElement,
  validElements
) => {
  const inputList = Array.from(formElement.querySelectorAll(validElements.inputSelector));
  const buttonElement = formElement.querySelector(validElements.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validElements);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, validElements);
      toggleButtonState(inputList, buttonElement, validElements);
    });
  });
};

function enableValidation(validElements) {
  const formList = Array.from(
    document.querySelectorAll(validElements.formSelector)
  );
  formList.forEach((formElement) => {
    setEventListeners(formElement, validElements);
  });
}

enableValidation(validElements);
