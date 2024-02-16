const audio = new Audio("./images/I-am-beom.mp3");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", function () {
  audio.play();
});
