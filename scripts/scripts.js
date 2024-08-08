// Variables
import Card from "./card.js";
import FormValidator from "./formValidator.js";
import {
  profileHandler,
  cardHandler,
  imageHandler,
  toggleClick,
  toggleEscape,
} from "./utils.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const formValidator = new FormValidator(
  {
    inputSelector: ".popup__input",
    fieldsetSelector: ".popup__info-field",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_active",
  },
  ".popup__form"
);

const elements = document.querySelector(".elements");

// Eventlisteners
initialCards.forEach((formData) => {
  const card = new Card(formData, "#card-template");
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
});

formValidator.enableValidation();

profileHandler();
cardHandler(elements);
imageHandler();
toggleEscape();
toggleClick();
