const audio = new Audio("./images/I-am-beom.mp3");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", function () {
  audio.play();
});

const message =
  "전체 화면으로 봐주시고, 화면이 깨진다면 알아서 뷰포트 조절해주세요..! 찡긋O_<";

window.alert(message);
