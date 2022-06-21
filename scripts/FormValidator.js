export class FormValidator {
    constructor(validElements,formElement) {
        this._validElements = validElements;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._validElements.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._validElements.submitButtonSelector);
        this._inactiveButtonClass = validSettings.inactiveButtonClass;
        this._inputErrorClass = formElement.querySelector(this._validSettings.inputErrorClass);
    }

// Метод, который добавляет класс с ошибкой
    _showError = (inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._validElements.errorClass);
      inputElement.classList.add(this._validElements.inputErrorClass);
    }

// Метод, который удаляет класс с ошибкой
    _hideError = (inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._validElements.inputErrorClass);
      errorElement.classList.remove(this._validElements.errorClass);
      errorElement.textContent = "";
    }
// Метод, который показывает текст ошибки в зависимости от валидности поля ввода
    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
          _showError(inputElement, inputElement.validationMessage);
        } else {
          _hideError(inputElement);
        }
      };

// Метод, включения кнопки
    _disableButton = () => {
        this._buttonElement.classList.add(this._inactiveButtonClass); 
        this._buttonElement.disabled = true;
  }


// Метод, выключения кнопки

    _disableButtonRemove = () => {
        this.buttonElement.classList.remove(this.inactiveButtonClass);
        this.buttonElement.disabled = false;
  } 


// Метод, который включает/выключает кнопку
    _toggleButtonState = () => {
        if (hasInvalidInput()) {
            _disableButton();
          } else {
            _disableButtonRemove()
          }
    }

// Слушатель события
    _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(inputElement);
        toggleButtonState();
      });
    });
  };

// Метод, который отображает все форсы на странице

    _enableValidation = () => {
    this._formElement.addEventListener("submit", (evt) => {
     evt.preventDefault();
      });  
     this._setEventListeners();
    }
}

