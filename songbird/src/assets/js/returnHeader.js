export function returnHeader () {
  return `
    <header class="header">
      <div class="wrapper">
        <div class="header__wrapper">
          <div class="header__logo-wrapper">
            <div class="header__logo">
              <div class="header__logo-text">Songbird</div>
            </div>
          </div>
          <nav class="header__nav header-nav">
            <input
              class="header-nav__menu-toggle"
              id="menu-toggle"
              type="checkbox"
            />
            <label class="header-nav__menu-btn" for="menu-toggle">
              <span class="header-nav__hamburger-line"></span>
            </label>
            <ul class="header-nav__ul">
              <li class="header-nav__li">Домой</li>
              <li class="header-nav__li">Игра</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>`;
}