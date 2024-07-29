// Variables
import { enableValidation } from "./validate.js";

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

const elements = document.querySelector(".elements");
const cardTemplate = document.querySelector("#card-template");
const popupProfile = document.querySelector("#popup-profile");
const popupCards = document.querySelector("#popup-cards");
const popupImage = document.querySelector("#popup-image");
const popupImageTitle = document.querySelector(".popup__image-title");
const popupFullImage = document.querySelector(".popup__image");
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
  enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    fieldsetSelector: ".popup__info-field",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_active",
  });
}

function toggleCards() {
  popupCards.classList.toggle("popup_opened");
  inputTitle.value = "";
  inputImageUrl.value = "";
  enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    fieldsetSelector: ".popup__info-field",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_active",
  });
}

function toggleImage() {
  popupImage.classList.toggle("popup_opened");
}

function addCard(card) {
  const cardElement = cardTemplate
    .cloneNode(true)
    .content.querySelector(".elements__container");
  cardElement.querySelector(".elements__image").src =
    card.link || inputImageUrl.value;
  if (cardElement.querySelector(".elements__image").src === "") {
    cardElement.querySelector(".elements__image").src =
      "https://plus.unsplash.com/premium_photo-1719930222062-5e63c50077cc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
  cardElement.querySelector(".elements__image").alt = card.name;
  cardElement.querySelector(".elements__name").textContent =
    card.name || inputTitle.value;
  if (cardElement.querySelector(".elements__name").textContent === "") {
    cardElement.querySelector(".elements__name").textContent = "Título";
  }

  document.querySelector(".elements").prepend(cardElement);
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
initialCards.forEach((card) => {
  addCard(card);
});

profileButton.addEventListener("click", toggleProfile);
cardButton.addEventListener("click", toggleCards);
elements.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("elements__image")) {
    const card = evt.target.closest(".elements__container");
    const imgCard = card.querySelector(".elements__image").src;
    const titleCard = card.querySelector(".elements__name").textContent;

    popupFullImage.src = imgCard;
    popupFullImage.alt = titleCard;
    popupImageTitle.textContent = titleCard;
    toggleImage();
  }
});
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

submitButtonCard.addEventListener("click", function (evt) {
  evt.preventDefault();
  addCard(evt);
  inputTitle.value = "";
  inputImageUrl.value = "";
  toggleCards();
});

elements.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("elements__like-icon")) {
    evt.target.classList.toggle("elements__like-icon-active");
  }
});

elements.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("elements__trash-can")) {
    const card = evt.target.closest(".elements__container");
    if (card) {
      card.remove();
    }
  }
});

document.addEventListener("keydown", toggleEscape);
toggleClick();
