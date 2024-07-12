// Variables
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

const cardTemplate = document.querySelector("#card-template");
const popupProfile = document.querySelector("#popup-profile");
const popupCards = document.querySelector("#popup-cards");
const profileButton = document.querySelector(".profile__edit-button");
const cardButton = document.querySelector(".profile__add-button-container");
const closeButtonProfile = document.querySelector(".popup__close-icon_profile");
const closeButtonCards = document.querySelector(".popup__close-icon_cards");
const profileName = document.querySelector(".profile__name");
const inputName = document.querySelector(".popup__input_name");
const profileAbout = document.querySelector(".profile__job");
const inputAbout = document.querySelector(".popup__input_about");
const submitButtonProfile = document.querySelector("#submit-profile");
const submitButtonCard = document.querySelector("#submit-card");
const inputTitle = document.querySelector(".popup__input_title");
const inputImageUrl = document.querySelector(".popup__input_image-url");

// funciones
function toggleProfile() {
  popupProfile.classList.toggle("popup_opened");
}

function toggleCards() {
  popupCards.classList.toggle("popup_opened");
}

function addCard(card) {
  const cardElement = cardTemplate
    .cloneNode(true)
    .content.querySelector(".elements__container");
  cardElement.querySelector(".elements__image").src =
    card.link || inputImageUrl.value;
  cardElement.querySelector(".elements__image").alt = card.name;
  cardElement.querySelector(".elements__name").textContent =
    card.name || inputTitle.value;

  document.querySelector(".elements").prepend(cardElement);
}

// Eventlisteners
initialCards.forEach((card) => {
  addCard(card);
});

profileButton.addEventListener("click", toggleProfile);
cardButton.addEventListener("click", toggleCards);
closeButtonProfile.addEventListener("click", toggleProfile);
closeButtonCards.addEventListener("click", toggleCards);

submitButtonProfile.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value || "Jacques Cousteau";
  profileAbout.textContent = inputAbout.value || "Explorador";
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

document.querySelector(".elements").addEventListener("click", function (evt) {
  if (evt.target.classList.contains("elements__trash-can")) {
    const card = evt.target.closest(".elements__container");
    if (card) {
      card.remove();
    }
  }
});
