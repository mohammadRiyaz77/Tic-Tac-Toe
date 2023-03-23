const openPlayerConfig = (event) => {
    editPlayer  = +event.target.dataset.playerid; //convert string into number 

  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
};
const closePlayerConfig = () => {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  document.querySelector("#player-name").value ="";
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

  const updatedPalyerDataElement = document.querySelector(`#player-${editPlayer}-data`);
  updatedPalyerDataElement.children[1].textContent = enteredPlayerName;

  if(editPlayer === 1) players[0].name = enteredPlayerName;
  
  else players[1].name = enteredPlayerName;
   

  closePlayerConfig();
};
