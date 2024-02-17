const audio = new Audio("./images/I-am-beom.mp3");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", function () {
  audio.play();
});

const message =
  "화면이 깨진다면 알아서 뷰포트 조절해서 적절한 위치에 범쌤을 위치시켜주세요..!";

window.alert(message);
