// Get elements
const player = document.querySelector('.player')
// const video = player.querySelector('.viewer')
const video = player.querySelector('.player__video')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullscreenBtn = player.querySelector('.fullscreen')

// Functions
function togglePlay() {
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
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

function toggleFullscreen(e) {
  console.log({e})
  if (document.fullscreenEnabled && video.requestFullscreen) {
    video.requestFullscreen()
  } else {
// TODO I need a way to handle any errors
  }
}

// TODO : How do you add controls and a warning when users go into fullscreen mode? 

// Event Listeners
toggle.addEventListener('click', togglePlay)

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))

// Scrubber
let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

fullscreenBtn.addEventListener('click', toggleFullscreen)
