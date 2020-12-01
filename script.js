window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);
  if(!audio) return; // stops the function from running all together

  // rewinds to start of sound
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

// add event listener to each key
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


function removeTransition(e){
  if(e.propertyName !== 'transform') return; //skip it if its not a transform
  this.classList.remove('playing')
}

