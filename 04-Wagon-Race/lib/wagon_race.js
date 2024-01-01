// TODO: write your code here
const playerOneClass = '#player1-race';
const playertwoClass = '#player2-race';

const getPosition = (playerClass) => {
  let player = document.querySelector(`${playerClass} .active`);
  return player.cellIndex;
};

const getPlayer = (playerClass) => {
  return document.querySelector(`${playerClass} .active`);
};

const getTracks = (playerClass) => {
  return document.querySelectorAll(`${playerClass} td`);
};

const announceWinner = (playerClass) => {
  const tracks = getTracks(playerClass)
  const position = getPosition(playerClass)

  if (position == tracks.length - 1 ) {
    if (playerClass == '#player1-race') {
      alert('Player one wins!')
      location.reload();
    } else {
      alert('Player two wins!')
      location.reload();
    };
  };
};

const movePlayer = (playerClass) => {
  const tracks = getTracks(playerClass)
  let position = getPosition(playerClass)
  let player = getPlayer(playerClass)

  player.classList.remove('active');

  position += 1;
  tracks[position].classList.add('active');
};

document.addEventListener('keydown', (event) => {
  if (event.key == 'q') {
    movePlayer(playerOneClass);
    announceWinner(playerOneClass);
  } if (event.key == 'p') {
    movePlayer(playertwoClass);
    announceWinner(playertwoClass)
  }
});
