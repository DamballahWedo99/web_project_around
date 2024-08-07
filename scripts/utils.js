const popupProfile = document.querySelector("#popup-profile");
const popupCards = document.querySelector("#popup-cards");
const popupImage = document.querySelector("#popup-image");
const profileButton = document.querySelector(".profile__edit-button");
const cardButton = document.querySelector(".profile__add-button-container");
const closeButtonProfile = document.querySelector(".popup__close-icon_profile");
const closeButtonCards = document.querySelector(".popup__close-icon_cards");
const closeButtonImage = document.querySelector("#image-close-icon");
const inputTitle = document.querySelector("#title");
const inputImageUrl = document.querySelector("#image-url");

const toggleProfile = () => {
  profileButton.addEventListener("click", () => {
    popupProfile.classList.toggle("popup_opened");
  });

  closeButtonProfile.addEventListener("click", () => {
    popupProfile.classList.toggle("popup_opened");
  });

  formValidator.resetValidation();
};

const toggleCards = () => {
  cardButton.addEventListener("click", () => {
    popupCards.classList.toggle("popup_opened");
    inputTitle.value = "";
    inputImageUrl.value = "";
  });

  closeButtonCards.addEventListener("click", () => {
    popupCards.classList.toggle("popup_opened");
  });

  formValidator.resetValidation();
};

const toggleImage = () => {};

// function toggleProfile() {
//   popupProfile.classList.toggle("popup_opened");
//   formValidator.resetValidation();
// }

// function toggleCards() {
//   popupCards.classList.toggle("popup_opened");
//   inputTitle.value = "";
//   inputImageUrl.value = "";
//   formValidator.resetValidation();
// }

// function toggleImage() {
//   popupImage.classList.toggle("popup_opened");
// }

// const popupRemove = () => {
//   document.querySelectorAll(".popup").forEach((popup) => {
//     popup.classList.remove("popup_opened");
//   });
// };

// const toggleEscape = (evt) => {
//   if (evt.key === "Escape") {
//     popupRemove();
//   }
// };

// const toggleClick = () => {
//   const popupList = Array.from(document.querySelectorAll(".popup"));

//   popupList.forEach((popup) => {
//     popup.addEventListener("click", function (evt) {
//       if (!evt.target.closest(".popup__container")) {
//         popupRemove();
//       }
//     });
//   });
// };

export { toggleProfile, toggleCards };
