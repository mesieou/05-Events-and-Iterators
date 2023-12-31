// TODO: Write your gambling application here.

let cards = document.querySelectorAll('.scratchcard');
let balanceElement = document.querySelector('#balance');
let balance = parseInt(balanceElement.textContent, 10)

cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    let cardAmount = event.currentTarget.dataset.amount
    if (balance.textContent == 0) {
      alert('Game Over')
    } else {
      console.log(balanceElement.textContent)
      balanceElement.textContent = balance + parseInt(cardAmount, 10) - 10;
    }
  });
});
