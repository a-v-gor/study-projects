export function createResultBody() {
  document.body.innerHTML = `
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
    </header>
    <main class="main">
      <div class="wrapper results">
        <h1 class="results__title">Результаты</h1>
        <p class="results__text">Вы набрали <span class="result-points">000</span> очков. <span class="link-to-main">Попробуйте еще раз.</span></p>
        <p class="results__text">Вы набрали максимальное количество очков. Поздравляем!</p>
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
