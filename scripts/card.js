class Card {
  constructor(cardData, templateSelector) {
    this._cardLink = cardData.link;
    this._cardName = cardData.name;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__container")
      .cloneNode(true);

    return cardElement;
  }

  _setCardData(cardElement) {
    cardElement.querySelector(".elements__image").src = this._cardLink;
    cardElement.querySelector(".elements__image").alt = this._cardName;
    cardElement.querySelector(".elements__name").textContent = this._cardName;
  }

  _toggleLike(cardElement) {
    cardElement
      .querySelector(".elements__like-icon")
      .classList.toggle("elements__like-icon-active");
  }

  _deleteCard(cardElement) {
    cardElement.remove();
  }

  _viewImage() {
    const popupImage = document.querySelector("#popup-image");
    const popupFullImage = document.querySelector(".popup__image");
    const popupImageTitle = document.querySelector(".popup__image-title");

    popupFullImage.src = this._cardLink;
    popupFullImage.alt = this._cardName;
    popupImageTitle.textContent = this._cardName;
    popupImage.classList.add("popup_opened");
  }

  _setEventListeners(cardElement) {
    cardElement
      .querySelector(".elements__like-icon")
      .addEventListener("click", () => {
        this._toggleLike(cardElement);
      });

    cardElement
      .querySelector(".elements__trash-can")
      .addEventListener("click", () => {
        this._deleteCard(cardElement);
      });

    cardElement
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._viewImage();
      });
  }

  generateCard() {
    const cardElement = this._getTemplate();
    this._setCardData(cardElement);
    this._setEventListeners(cardElement);
    return cardElement;
  }
}

export default Card;
