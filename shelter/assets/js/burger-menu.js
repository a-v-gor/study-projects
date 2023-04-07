const substrateLayer = document.querySelector(".substrate-burger-menu");
const inputHamburger = document.querySelector(".nav__menu-toggle");
const navItems = document.querySelector(".nav__list");

export function burgerMenu() {
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
  
  function blockPage() {
    makeActive(substrateLayer);
  }
  
  function unBlockPage() {
    makeUnactive(substrateLayer);
  }

  function checkBurger() {
    if (inputHamburger.checked) {
      disableScroll();
      blockPage();
    } else {
      enableScroll();
      unBlockPage();
    }
  }

  function toggleMenu() {
    if (inputHamburger.checked) {
      inputHamburger.checked = false;
      checkBurger()
    };  
  };

  function hideBurgerMenu (event) {
    const navigationItemsArr = Array.prototype.slice.call(document.querySelectorAll(".nav__link"));
    if ((inputHamburger.checked) && ((navigationItemsArr.includes(event.target)) || event.target == document.querySelector(".nav__link_active"))) {
      toggleMenu();
    }
  }

  inputHamburger.addEventListener("input", checkBurger);
  substrateLayer.addEventListener("click", toggleMenu);
  navItems.addEventListener("click", hideBurgerMenu);
}
