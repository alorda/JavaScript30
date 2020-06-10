// Get elements
const player = document.querySelector('.player')
// const video = player.querySelector('.viewer')
const video = player.querySelector('.player__video')
const progress = player.querySelector('progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

// Functions
function togglePlay() {
  console.log(video);
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

// Event Listeners

video.addEventListener('click', (e) => togglePlay(e))
toggle.addEventListener('click', (e) => togglePlay(e))