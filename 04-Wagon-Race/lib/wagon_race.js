// TODO: write your code here
const playerOneClass = '#player1-race'
const playertwoClass = '#player2-race'


const playerOne = document.querySelector("#player1-race .active")
const playerTwo = document.querySelector("#player2-race .active")
let playerOnePosition = playerOne.cellIndex
let playerTwoPosition = playerTwo.cellIndex


const movePlayer = (playerClass) => {
  const tracks = document.querySelectorAll(`${playerClass} td`)
  let player = document.querySelector(`${playerClss} .active`)

  const newPosition = car.cellIndex + 1

  car.classList.remove('active')
  tracks[newPosition].classList.add('active')
};



// Add event listener for player one with keyup
// add class to the next position

// Add event listener for player two
