export function createStartBody() {
  document.body.innerHTML = `
  <header class="header">
      <div class="wrapper">
        <div class="header__wrapper">
          <div class="header__logo-wrapper">
            <div class="header__logo">
              <div class="header__logo-text">
                Songbird
              </div>
            </div>
          </div>
          <nav class="header__nav header-nav">
            <input class="header-nav__menu-toggle" id="menu-toggle" type="checkbox">
            <label class="header-nav__menu-btn" for="menu-toggle">
              <span class="header-nav__hamburger-line"></span>
            </label>
            <ul class="header-nav__ul">
              <li class="header-nav__li">Home</li>
              <li class="header-nav__li">Game</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="wrapper">
        <div class="main__wrapper">
          <h1 class="title">Songbird</h1>
          <button class="main__start">Start</button>
        </div>
        <div class="main__back-circle"></div>
        <div class="main__back-lbird"></div>
        <div class="main__back-rbird"></div>
      </div>
    </main>
    <footer class="footer">
      <div class="wrapper">
        <div class="footer__wrapper">
          <div class="footer__github-wrapper">
            <div class="footer__github"></div>
          </div>
          <div class="footer__year">2022</div>
          <div class="footer__rss-wrapper">
            <div class="footer__rss-logo"></div>
          </div>
        </div>
      </div>
    </footer>`;
}
