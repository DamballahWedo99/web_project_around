// //Tarjetas iniciales cuando se carga la página
let elementSection = document.querySelector(".elements");
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

document.addEventListener("DOMContentLoaded", function () {
  const cardTemplate = document.querySelector("#card-template").content;

  initialCards.forEach((card) => {
    const cardElement = cardTemplate
      .querySelector(".elements__container")
      .cloneNode(true);
    cardElement.querySelector(".elements__image").src = card.link;
    cardElement.querySelector(".elements__image").alt = card.name;
    cardElement.querySelector(".elements__name").textContent = card.name;

    elementSection.appendChild(cardElement);
  });
});

// Da funcionalidad para abrir el editor de perfil
let popup = document.querySelector(".popup");
let profileButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-icon");
let submitButton = document.getElementById("submit-button");

function toggleProfile() {
  popup.classList.toggle("popup_opened");
}

profileButton.addEventListener("click", toggleProfile);
closeButton.addEventListener("click", toggleProfile);
submitButton.addEventListener("click", toggleProfile);

// Da funcionalidad para modificar el perfil + arreglar "happypath"
profileButton.addEventListener("click", () => {
  let profileName = document.querySelector(".profile__name");
  let inputName = document.querySelector(".popup__input_name");
  let profileAbout = document.querySelector(".profile__job");
  let inputAbout = document.querySelector(".popup__input_about");
  let submitButton = document.getElementById("submit-button");

  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;

  submitButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
  });
});
