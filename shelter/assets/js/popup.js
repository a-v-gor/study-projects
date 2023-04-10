export function popup(petscardsClass) {
  const petsCards = document.querySelector(petscardsClass);
  const substrateLayer = document.querySelector(".substrate-burger-menu");

  let petsData;

  function makePopup(event) {
    console.log(event.target);
    const id = event.target.dataset.id;
    const petInfo = petsData[id];
    const popup = `
    <div class="popup-pet-card">
      <img src="${petInfo['img']}" alt="pet" class="popup-img">
      <article class="popup-article">
        <div class="popup-header">
          <h2 class="article__title popup-title">${petInfo['name']}</h2>
          <p class="popup-subtitle">${petInfo['type']} - ${petInfo['breed']}</p>
        </div>
        <p class="article__text popup-article-text">${petInfo['description']}</p>
        <ul class="popup-description-pet">
          <li><span class="popup-caract">Age: </span>${petInfo['age']}</li>
          <li><span class="popup-caract">Inoculations: </span>${petInfo['inoculations'].join(', ')}</li>
          <li><span class="popup-caract">Diseases: </span>${petInfo['diseases'].join(', ')}</li>
          <li><span class="popup-caract">Parasites: </span>${petInfo['parasites'].join(', ')}</li>
        </ul>
      </article>
      <button type="button" class="our-friends__nav-elem close-popup"></button>
    </div>`;
    document.querySelector(".our-friends").insertAdjacentHTML("beforeend", popup);
    setTimeout(showPopup, 0);
  }

  function makeActive(elem) {
    const strClass = elem.classList;
    const strActiveClass = strClass + "_active";
    elem.classList.remove(strClass);
    elem.classList.add(strActiveClass);
  }

  function makeUnactive(elem) {
    const strActiveClass = elem.classList;
    const strUnactiveClass = strActiveClass.value.slice(0, -7);
    elem.classList.remove(strActiveClass);
    elem.classList.add(strUnactiveClass);
  }

  function blockPage() {
    makeActive(substrateLayer);
  }
  
  function unBlockPage() {
    makeUnactive(substrateLayer);
  }

  function disableScroll() {
    const bodyClass = document.body.classList;
    const bodyClassStopScroll = document.body.classList + "_stop-scroll";
    document.body.classList.remove(bodyClass);
    document.body.classList.add(bodyClassStopScroll);
  }
  
  function enableScroll() {
    const bodyClassStopScroll = document.body.classList;
    const strClassEnable = document.body.classList.value.slice(0, -12);
    document.body.classList.remove(bodyClassStopScroll);
    document.body.classList.add(strClassEnable);
  }
  
  function showPopup() {
    blockPage();
    disableScroll();
    document.querySelector('.popup-pet-card').classList.add('active');
  }
  
  function hidePopup(event) {
    if ((event.target == substrateLayer) || (event.target == document.querySelector('.close-popup'))) {
      if (document.querySelector('.popup-pet-card')) {
        document.querySelector('.popup-pet-card').classList.remove('active');
      };
      unBlockPage();
      enableScroll();
      setTimeout(removePopup, 1000);
    }
  }
  
  function removePopup() {
    if (document.querySelector('.popup-pet-card')) {
      document.querySelector('.popup-pet-card').remove();
    }
  }
  
  function markClosePopupBtn() {
    if (document.querySelector('.close-popup')) {
      document.querySelector('.close-popup').classList.add('active');
    }
  }
  
  function deMarkClosePopupBtn() {
    if (document.querySelector('.close-popup')) {
      document.querySelector('.close-popup').classList.remove('active');
    }
  }

  function startPopup() {
    fetch("../assets/json/pets.json")
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log("Problem. Status Code: " + response.status);
          return;
        }
        
        response.json().then(function(data) {
          petsData = data;
          
        })
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
  }

  function markClosePopupBtn() {
    if (document.querySelector('.close-popup')) {
      document.querySelector('.close-popup').classList.add('active');
    }
  }
  
  function deMarkClosePopupBtn() {
    if (document.querySelector('.close-popup')) {
      document.querySelector('.close-popup').classList.remove('active');
    }
  }

  document.addEventListener("DOMContentLoaded", startPopup);
  petsCards.addEventListener("click", makePopup);
  document.addEventListener("click", hidePopup);
  substrateLayer.addEventListener("mouseover", markClosePopupBtn);
  substrateLayer.addEventListener("mouseout", deMarkClosePopupBtn);
}