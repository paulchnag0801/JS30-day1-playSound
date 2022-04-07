
//play function
function playSound(e) {
  let keyNo = e.keyCode || this.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${keyNo}"]`);
  const key = document.querySelector(`div[data-key="${keyNo}"]`);
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

//移除樣式
function removeTransition(e) {
  if (e.propertyName !== "transform") return
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound) //鍵盤
keys.forEach(key => key.addEventListener('click', playSound))//滑鼠