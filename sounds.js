export default function () {
  const audio = document.querySelector("audio");
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const bgAudio = audio;

  bgAudio.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  return { pressButton, timeEnd, bgAudio };
}
