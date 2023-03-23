const playerConfigOverlayElement = document.querySelector("#config-overlay");
const backDropElement = document.querySelector("#backdrop");
const formElement = document.querySelector("form");
const errorOutputElement = document.querySelector("#config-error-msg");
const editPlayer1BtnElement = document.querySelector("#edit-playerOne-btn");
const editPlayer2BtnElement = document.querySelector("#edit-playerTwo-btn");

const cancelCongigBtnElement = document.querySelector("#cancel-config-btn");

editPlayer1BtnElement.addEventListener("click",openPlayerConfig);
editPlayer2BtnElement.addEventListener("click",openPlayerConfig);

cancelCongigBtnElement.addEventListener("click", closePlayerConfig);
backDropElement.addEventListener("click" , closePlayerConfig);

formElement.addEventListener("submit" ,savePlayerConfigName);