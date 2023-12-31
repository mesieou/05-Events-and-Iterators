// TODO: React to a click on the button!
const click = document.querySelector('#clickme')

click.addEventListener('click', (event) => {
  event.currentTarget.textContent = 'Bingo!';
  event.currentTarget.classList.add('disabled');
  let audio = new Audio ('../sound.mp3')
  audio.play();
})
