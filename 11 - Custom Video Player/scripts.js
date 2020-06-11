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

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

function skip() {
  console.log(this.dataset.skip)
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  console.log(this.value)
  console.log(this.name)
  video[this.name] = this.value

}


// Event Listeners
toggle.addEventListener('click', togglePlay)

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))