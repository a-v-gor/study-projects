const petsCards = document.querySelector('.our-friends__cards');

export function carousel() {
  let winWidth;
  let petsData;

  function getPetsData() {
    fetch("../assets/json/pets.json")
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log("Problem. Status Code: " + response.status);
          return;
        }
        
        response.json().then(function(data) {
          petsData = data;
          console.log(petsData);
        })
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
  }



  function getUniqueNums() {
    let rezult = [];
    const num = (winWidth == "desktop") ? 6 : (winWidth == "tablet") ? 4 : 2

    for (; rezult.length < num;) {
      let rand = Math.floor(Math.random()* 8);
      if (!(rezult.includes(rand))){
        rezult.push(rand);
      }
    }

    rezult = rezult.concat(rezult.slice(0, rezult.length / 2));
    return rezult;
  }

  function generatePetsCard(id) {
    const petImg = petsData[id]["img"];
    const petName = petsData[id]["name"];
    const petCard = `
    <div class="our-friends__card" data-id="${id}">
      <img class="our-friends__pet-img" src="${petImg}" alt="pet">
      <p class="our-friends__pet-text">${petName}</p>
      <button class="link-btn our-friends__card-link">Learn more</button>
    </div>`
    return petCard;
  }

  function generatePetsCards() {
    const cardsIDs = getUniqueNums();
    for (let i = 0; i <= cardsIDs.length; i++) {
      petsCards.insertAdjacentHTML("beforeend", generatePetsCard(cardsIDs[i]));
    }
  }

  function changeWinWidth() {
    if (!(getWinWidth() == winWidth)) {
      winWidth = getWinWidth();
      console.log(winWidth);
      // generatePetsCards();
    }
  }

  function getWinWidth() {
    const newWinWidth = (window.innerWidth > 1099) ? "desktop" : (window.innerWidth > 739) ? "tablet" : "mobile";
    return newWinWidth;
  }

  document.addEventListener("DOMContentLoaded", getPetsData);
  document.addEventListener("DOMContentLoaded", changeWinWidth);
  window.addEventListener("resize", changeWinWidth);
}