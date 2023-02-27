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
  const volume = document.querySelector(".player__input-volume");
  const volumeButton = document.querySelector(".player__volume-btn");
  const duration = document.querySelector(".player__duration");
  const timeElapsed = document.querySelector(".player__time-elapsed");

  audio.src = variant[0].audio;
  
  function togglePlay(){
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    
  }

  function updatePlayButtonIcon() {
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

  function scrub() {
    audio.currentTime = progressBar.value * audio.duration;
  }

  function volumeUpdate() {
    if (audio.muted) {
      audio.muted = false;
    }  
    audio.volume = volume.value;
  }

  function updateVolumeIcon() {
    if (audio.muted || audio.volume == 0) {
      volumeButton.classList.remove("player__volume-btn");
      volumeButton.classList.add("player__volume-btn_mute");
    } else {
      volumeButton.classList.remove("player__volume-btn_mute");
      volumeButton.classList.add("player__volume-btn");
    }
  }

  function toggleMute () {
    audio.muted = !audio.muted;
  
    if (audio.muted) {
      volume.setAttribute("data-volume", volume.value);
      volume.value = 0;
    } else {
      volume.value = volume.dataset.volume;
    }
    volume.b = backgroundProgress;
    volume.b();
  }

  function formatTime(timeInSecs) {
    const result = new Date(timeInSecs * 1000).toISOString().slice(11,19);
  
    return {
      minutes: result.slice(3, 5),
      seconds: result.slice(6),
    };
  }
  
  function initializeAudio() {
    const videoDuration = Math.round(audio.duration);
    const time = formatTime(videoDuration);
    duration.innerText = `${time.minutes}:${time.seconds}`;
    duration.setAttribute("datetime", `${time.minutes}m ${time.seconds}s`);
  }
  
  function updateTimeElapsed() {
    const time = formatTime(Math.round(audio.currentTime));
    timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
    timeElapsed.setAttribute("datetime", `${time.minutes}m ${time.seconds}s`);
  }

  playButton.addEventListener("click", togglePlay);
  audio.addEventListener("play", updatePlayButtonIcon);
  audio.addEventListener("pause", updatePlayButtonIcon);
  audio.addEventListener("timeupdate", handleProgress);
  progressBar.addEventListener("input", scrub);
  volume.addEventListener("input", volumeUpdate);
  volume.addEventListener("input", backgroundProgress);
  audio.addEventListener("volumechange", updateVolumeIcon);
  volumeButton.addEventListener("click", toggleMute);
  audio.addEventListener("loadedmetadata", initializeAudio);
  audio.addEventListener("timeupdate", updateTimeElapsed);
}