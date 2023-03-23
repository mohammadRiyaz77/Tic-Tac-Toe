const openPlayerConfig = () => {
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
};
const closePlayerConfig = () => {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
};

const savePlayerConfigName = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("player-name");
  console.log(enteredPlayerName);
};
