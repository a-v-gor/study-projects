const baseUrl = 'http://127.0.0.1:3000';

async function setNumOfCars() {
  fetch(`${baseUrl}/garage?_limit=10`)
    .then((response) => response.headers.get('X-Total-Count'))
    .then((result) => {
      const numOfCarsText: HTMLSpanElement = <HTMLSpanElement> document.getElementById('cars-num-text');
      numOfCarsText.innerText = String(result);
    })
    .catch((error) => error.message);
}

async function setNumOfWinners() {
  fetch(`${baseUrl}/winners?_limit=7`)
    .then((response) => response.headers.get('X-Total-Count'))
    .then((result) => {
      const numOfWinnersText: HTMLSpanElement = <HTMLSpanElement> document.getElementById('winners-num-text');
      numOfWinnersText.innerText = String(result);
    })
    .catch((error) => error.message);
}

setNumOfCars();
setNumOfWinners();
