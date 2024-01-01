// TODO: Write your gambling application here.

let cards = document.querySelectorAll('.scratchcard');
let balanceElement = document.querySelector('#balance');
let balance = parseInt(balanceElement.textContent, 10)

cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    let card = event.currentTarget
    let cardAmount = card.dataset.amount
    let netSpentReceived = parseInt(cardAmount, 10) - 10;

    if (balance.textContent == 0) {
      alert('Game Over')
    } else {
      if (card.classList.contains('disabled')) {
      } else {
        card.dataset.scratched = "true";
        balanceElement.textContent = balance + netSpentReceived;
        balance += netSpentReceived;
        card.insertAdjacentHTML('beforeEnd', `$${cardAmount}.00`)
      };
      card.classList.add('disabled');
    }
  });
});
