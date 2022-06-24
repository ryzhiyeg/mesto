export class FormValidator {
    constructor(validElements,formElement) {
        this._validElements = validElements;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._validElements.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._validElements.submitButtonSelector);
        this._inactiveButtonClass = this._validElements.inactiveButtonClass;
        this._inputErrorClass = validElements.inputErrorClass;
    }

// Метод, который добавляет класс с ошибкой
    _showError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._validElements.errorClass);
      inputElement.classList.add(this._validElements.inputErrorClass);
    }

// Метод, который удаляет класс с ошибкой
    _hideError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._validElements.inputErrorClass);
      errorElement.classList.remove(this._validElements.errorClass);
      errorElement.textContent = "";
    }
// Метод, который показывает текст ошибки в зависимости от валидности поля ввода
    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
          this._showError(inputElement, inputElement.validationMessage);
        } else {
          this._hideError(inputElement);
        }
      };


// Метод, включеной кнопки

    disabledButtonRemove = () => {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(this._inactiveButtonClass);
  } 

// Метод, выключенной кнопки
    _disabledButton = () => {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._inactiveButtonClass); 
  }


  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

// Метод, который включает/выключает кнопку
    _toggleButtonState () {
        if (this._hasInvalidInput(this._inputList)) {
          this._disabledButton(this._buttonElement);
          } else {
            this.disabledButtonRemove(this._buttonElement);
          }
    }

// Слушатель события
    _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

// Метод, который отображает все формы на странице

    enableValidation = () => {
    this._formElement.addEventListener("submit", (evt) => {
     evt.preventDefault();
      });  
     this._setEventListeners();
    }
}

