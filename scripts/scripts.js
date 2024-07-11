// //Tarjetas iniciales cuando se carga la página
document.addEventListener("DOMContentLoaded", function () {
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

  const cardTemplate = document.querySelector("#card-template").content;

  initialCards.forEach((card) => {
    const cardElement = cardTemplate
      .querySelector(".elements__container")
      .cloneNode(true);
    cardElement.querySelector(".elements__image").src = card.link;
    cardElement.querySelector(".elements__image").alt = card.name;
    cardElement.querySelector(".elements__name").textContent = card.name;

    document.querySelector(".elements").append(cardElement);
  });
});

// Da funcionalidad para abrir el editor de perfil + agregar tarjetas
const popupProfile = document.querySelector(".popup_profile");
const popupCards = document.querySelector(".popup_cards");
const profileButton = document.querySelector(".profile__edit-button");
const cardButton = document.querySelectorAll(".profile__add-button");
const closeButtonProfile = document.querySelector(".popup__close-icon_profile");
const closeButtonCards = document.querySelector(".popup__close-icon_cards");

function toggleProfile() {
  popupProfile.classList.toggle("popup_opened");
}

function toggleCards() {
  popupCards.classList.toggle("popup_opened");
}

profileButton.addEventListener("click", toggleProfile);
cardButton.forEach((button) => {
  button.addEventListener("click", toggleCards);
});
closeButtonProfile.addEventListener("click", toggleProfile);
closeButtonCards.addEventListener("click", toggleCards);

// Da funcionalidad para modificar el perfil
const profileName = document.querySelector(".profile__name");
const inputName = document.querySelector(".popup__input_name");
const profileAbout = document.querySelector(".profile__job");
const inputAbout = document.querySelector(".popup__input_about");
const submitButtonProfile = document.querySelector("#submit-profile");

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

// Da funcionalidad de agregar tarjetas
const submitButtonCard = document.querySelector("#submit-card");

submitButtonCard.addEventListener("click", function (evt) {
  evt.preventDefault();
  const inputTitle = document.querySelector(".popup__input_title");
  const inputImageUrl = document.querySelector(".popup__input_image-url");
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".elements__container")
    .cloneNode(true);
  cardElement.querySelector(".elements__image").src = inputImageUrl.value;
  cardElement.querySelector(".elements__image").alt = inputTitle.value;
  cardElement.querySelector(".elements__name").textContent = inputTitle.value;
  document.querySelector(".elements").prepend(cardElement);
  inputTitle.value = "";
  inputImageUrl.value = "";
  toggleCards();
});

// Da funcionalidad de remover tarjetas
document.querySelector(".elements").addEventListener("click", function (evt) {
  if (evt.target.classList.contains("elements__trash-can")) {
    const card = evt.target.closest(".elements__container");
    if (card) {
      card.remove();
    }
  }
});
