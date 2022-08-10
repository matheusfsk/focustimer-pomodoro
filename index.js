import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

const sound = Sound();

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

///////////////////////////////

buttonPlay.addEventListener("click", function () {
  controls.play();
  timer.countdown();
  sound.pressButton();
});

buttonPause.addEventListener("click", function () {
  controls.pause();
  timer.hold();
  sound.pressButton();
});

buttonStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
  sound.pressButton();
});

/////////////////SOUND//////////////////

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.toggle("hide");
  buttonSoundOff.classList.toggle("hide");
  sound.bgAudio.pause();
});
buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.toggle("hide");
  buttonSoundOff.classList.toggle("hide");
  sound.bgAudio.play();
});

//////////////////SOUND /////////////////

buttonSet.addEventListener("click", function () {
  let newMinutes = controls.getMinutes();

  if (!newMinutes) {
    timer.reset();
    return;
  }

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
});
