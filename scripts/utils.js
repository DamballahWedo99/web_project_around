import Card from "./card.js";
import FormValidator from "./formValidator.js";

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

const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__edit-button");
const closeButtonProfile = document.querySelector(".popup__close-icon_profile");
const profileAbout = document.querySelector(".profile__job");
const profileName = document.querySelector(".profile__name");
const inputName = document.querySelector("#name");
const inputAbout = document.querySelector("#about");
const submitButtonProfile = document.querySelector("#submit-profile");

const popupCards = document.querySelector("#popup-cards");
const cardButton = document.querySelector(".profile__add-button-container");
const closeButtonCards = document.querySelector(".popup__close-icon_cards");
const submitButtonCard = document.querySelector("#submit-card");
const inputTitle = document.querySelector("#title");
const inputImageUrl = document.querySelector("#image-url");

const popupImage = document.querySelector("#popup-image");
const closeButtonImage = document.querySelector("#image-close-icon");

// Profile
function toggleProfile() {
  popupProfile.classList.toggle("popup_opened");
}

const profileHandler = () => {
  profileButton.addEventListener("click", () => {
    toggleProfile();
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
  });

  closeButtonProfile.addEventListener("click", () => {
    toggleProfile();
    formValidator.resetValidation();
  });

  submitButtonProfile.addEventListener("click", (evt) => {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    toggleProfile();
  });
};

// Card
function toggleCard() {
  popupCards.classList.toggle("popup_opened");
}

const cardHandler = (elements) => {
  cardButton.addEventListener("click", () => {
    toggleCard();
  });

  closeButtonCards.addEventListener("click", () => {
    toggleCard();
    inputTitle.value = "";
    inputImageUrl.value = "";
    formValidator.resetValidation();
  });

  submitButtonCard.addEventListener("click", function (evt) {
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
    toggleCard();
    formValidator.resetValidation();
  });
};

// image
function toggleImage() {
  popupImage.classList.toggle("popup_opened");
}

const imageHandler = () => {
  closeButtonImage.addEventListener("click", () => {
    toggleImage();
  });
};

// keyboard and outside click
const popupRemove = () => {
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.classList.remove("popup_opened");
    inputTitle.value = "";
    inputImageUrl.value = "";
    formValidator.resetValidation();
  });
};

const toggleEscape = () => {
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      popupRemove();
    }
  });
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

export { profileHandler, cardHandler, imageHandler, toggleClick, toggleEscape };
