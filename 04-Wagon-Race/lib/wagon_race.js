// TODO: write your code here
const playerOneClass = '#player1-race'
const playertwoClass = '#player2-race'


const movePlayer = (playerClass) => {
  const tracks = document.querySelectorAll(`${playerClass} td`);
  let player = document.querySelector(`${playerClass} .active`);
  let position = player.cellIndex

  player.classList.remove('active')

  position += 1
  tracks[position].classList.add('active')
};

document.addEventListener('keydown', (event) => {
  if (event.key == 'q') {
    movePlayer(playerOneClass)
  } if (event.key == 'p') {
    movePlayer(playertwoClass)
  }
});
