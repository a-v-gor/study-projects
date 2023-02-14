import { createPageHTML } from "./createPageHTML";
import { returnGameBody } from "./returnGameBody";
import { makeHeaderActive } from "./makeHeaderActive";
import birdsData from "./birds";

export function returnGamePage() {
  createPageHTML(returnGameBody());
  makeHeaderActive();
  const variants = {};
  for (let i = 0; i < birdsData.length; i++) {
    variants[i] = birdsData[i];
  }
  const variant = variants[0];

  const answerVariants = document.querySelectorAll(".answer-variants__li");
  for (let i = 0; i < 6; i++) {
    answerVariants[i].innerHTML = variant[i].name;
  }

  // Player

  const audio = document.querySelector(".player__audio");
  const playButton = document.querySelector(".player__play-button_paused");
  const progressBar = document.querySelector(".player__progress");

  audio.src = variant[0].audio;
  
  function togglePlay(){
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    
  }

  function updateButton() {
    if (audio.paused) {
      playButton.classList.remove("player__play-button_playing");
      playButton.classList.add("player__play-button_paused");
    } else {
      playButton.classList.remove("player__play-button_paused");
      playButton.classList.add("player__play-button_playing");
    }
  }

  function backgroundProgress() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #3ca33c 0%, #3ca33c ${value*100}%, #cde4cd ${value*100}%, #cde4cd 100%)`;
  }

  function handleProgress() {
    progressBar.value = audio.currentTime / audio.duration;
    progressBar.backProgress = backgroundProgress;
    progressBar.backProgress();
  }

  playButton.addEventListener("click", togglePlay);
  audio.addEventListener("play", updateButton);
  audio.addEventListener("pause", updateButton);
  audio.addEventListener("timeupdate", handleProgress);
}