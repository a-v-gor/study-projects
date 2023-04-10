export function burgerMenu() {
  const substrateLayer = document.querySelector(".substrate-burger-menu");
  const inputHamburger = document.querySelector(".nav__menu-toggle");
  const navItems = document.querySelector(".nav__list");

  function makeActiveBurg(elem) {
    const strClass = elem.classList;
    const strActiveClass = strClass + "_active";
    elem.classList.remove(strClass);
    elem.classList.add(strActiveClass);
  }

  function makeUnactiveBurg(elem) {
    const strActiveClass = elem.classList;
    const strUnactiveClass = strActiveClass.value.slice(0, -7);
    elem.classList.replace(strActiveClass, strUnactiveClass);
  }

  function disableScrollBurg() {
    const bodyClass = document.body.classList;
    const bodyClassStopScroll = document.body.classList + "_stop-scroll";
    document.body.classList.replace(bodyClass, bodyClassStopScroll);
  }
  
  function enableScrollBurg() {
    const bodyClassStopScroll = document.body.classList;
    const strClassEnable = document.body.classList.value.slice(0, -12);
    document.body.classList.replace(bodyClassStopScroll, strClassEnable);
  }
  
  function blockPageBurg() {
    makeActiveBurg(substrateLayer);
  }
  
  function unBlockPageBurg() {
    makeUnactiveBurg(substrateLayer);
  }

  function checkBurger() {
    console.log('checkburger');
    if (inputHamburger.checked) {
      disableScrollBurg();
      blockPageBurg();
    } else {
      enableScrollBurg();
      unBlockPageBurg();
    }
  }

  function toggleMenu() {
    if (inputHamburger.checked) {
      inputHamburger.checked = false;
      checkBurger()
    };  
  };

  function hideBurgerMenu(event) {
    const navigationItemsArr = Array.prototype.slice.call(document.querySelectorAll(".nav__link"));
    if ((inputHamburger.checked) && ((navigationItemsArr.includes(event.target)) || event.target == document.querySelector(".nav__link_active"))) {
      toggleMenu();
    }
  }

  function uncheckMenu() {
    inputHamburger.checked = false;
  };

  inputHamburger.addEventListener("input", checkBurger);
  substrateLayer.addEventListener("click", uncheckMenu);
  navItems.addEventListener("click", hideBurgerMenu);
}
