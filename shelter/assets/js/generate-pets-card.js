export function generatePetsCard(id, petsData) {
  const petImg = petsData[id]["img"];
  const petName = petsData[id]["name"];
  const petCard = `
  <div class="our-friends__card" data-id="${id}">
    <img class="our-friends__pet-img" src="${petImg}" alt="pet" data-id="${id}">
    <p class="our-friends__pet-text">${petName}</p>
    <button class="link-btn our-friends__card-link" data-id="${id}">Learn more</button>
  </div>`
  return petCard;
}