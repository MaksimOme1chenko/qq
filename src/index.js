const button = document.querySelector(".button")
const popup = document.querySelector(".popup")
const closeButton = document.querySelector(".popup__button-close")
function openPopup(){
    popup.classList.add("popup_is-opened")
}

function closePopup(){
    popup.classList.remove("popup_is-opened")
}

closeButton.addEventListener('click', closePopup)
button.addEventListener('click', openPopup)
