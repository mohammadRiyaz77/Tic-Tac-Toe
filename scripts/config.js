const openPlayerConfig = () => {
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
};
const closePlayerConfig = () => {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
};

const savePlayerConfigName = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("player-name").trim();
  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Please, enter a valid name !";
    return;
  }
};
