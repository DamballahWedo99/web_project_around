// Variables
import FormValidator from "./formValidator.js";
import Card from "./card.js";

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
const popupProfile = document.querySelector("#popup-profile");
const popupCards = document.querySelector("#popup-cards");
const popupImage = document.querySelector("#popup-image");
const profileButton = document.querySelector(".profile__edit-button");
const cardButton = document.querySelector(".profile__add-button-container");
const closeButtonProfile = document.querySelector(".popup__close-icon_profile");
const closeButtonCards = document.querySelector(".popup__close-icon_cards");
const closeButtonImage = document.querySelector("#image-close-icon");
const profileName = document.querySelector(".profile__name");
const inputName = document.querySelector("#name");
const profileAbout = document.querySelector(".profile__job");
const inputAbout = document.querySelector("#about");
const submitButtonProfile = document.querySelector("#submit-profile");
const submitButtonCard = document.querySelector("#submit-card");
const inputTitle = document.querySelector("#title");
const inputImageUrl = document.querySelector("#image-url");

// funciones
function toggleProfile() {
  popupProfile.classList.toggle("popup_opened");
  formValidator.resetValidation();
}

function toggleCards() {
  popupCards.classList.toggle("popup_opened");
  inputTitle.value = "";
  inputImageUrl.value = "";
  formValidator.resetValidation();
}

function toggleImage() {
  popupImage.classList.toggle("popup_opened");
}

const popupRemove = () => {
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.classList.remove("popup_opened");
  });
};

const toggleEscape = (evt) => {
  if (evt.key === "Escape") {
    popupRemove();
  }
};

const toggleClick = () => {
  const popupList = Array.from(document.querySelectorAll(".popup"));

  popupList.forEach((popup) => {
    popup.addEventListener("click", function (evt) {
      if (!evt.target.closest(".popup__container")) {
        popupRemove();
      }
    });
  });
};

// Eventlisteners
initialCards.forEach((cardData) => {
  const card = new Card(cardData, "#card-template");
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
});

submitButtonCard.addEventListener("click", (evt) => {
  evt.preventDefault();

  const cardData = {
    name: inputTitle.value,
    link: inputImageUrl.value,
  };

  const card = new Card(cardData, "#card-template");
  const cardElement = card.generateCard();
  elements.prepend(cardElement);

  inputTitle.value = "";
  inputImageUrl.value = "";
  toggleCards();
});

formValidator.enableValidation();

profileButton.addEventListener("click", toggleProfile);
cardButton.addEventListener("click", toggleCards);
closeButtonProfile.addEventListener("click", toggleProfile);
closeButtonCards.addEventListener("click", toggleCards);
closeButtonImage.addEventListener("click", toggleImage);

submitButtonProfile.addEventListener("click", function () {
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  toggleProfile();
});

profileButton.addEventListener("click", () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

document.addEventListener("keydown", toggleEscape);
toggleClick();
