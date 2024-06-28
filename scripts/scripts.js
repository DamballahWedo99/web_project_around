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

// Da funcionalidad para modificar el perfil
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
