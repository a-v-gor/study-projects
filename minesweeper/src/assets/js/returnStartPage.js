export default function returnStartPage() {
  document.body.innerHTML = `
  <header class="header">
  <div class="wrapper header-wrapper">
    <h1 class="logo">Minesweeper</h1>
    <nav class="header__nav header-nav">
      <input class="header-nav__menu-toggle" id="menu-toggle" type="checkbox">
      <label class="header-nav__menu-btn" for="menu-toggle">
        <span class="header-nav__hamburger-line"></span>
      </label>
      <ul class="header-nav__ul">
        <li class="header-nav__li">Домой</li>
        <li class="header-nav__li">Игра</li>
      </ul>
    </nav>
  </div>
</header>
<main class="main">
  <div class="wrapper main-wrapper">
    <div class="stat">
      <div class="stat__timer">Time: 00</div>
      <div class="stat__player">
        <img src="./assets/img/smile-0.svg" alt="emoji" class="stat__img">
      </div>
      <div class="stat__moves">Moves: 00</div>
    </div>
    <div class="field">
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
      <div class="field__cell"></div>
    </div>
  </div>
</main>
<footer class="footer">
  <div class="wrapper footer-wrapper">
    <a class="footer__github" href="https://github.com/a-v-gor"></a>
    <div class="footer__year">2023</div>
    <a class="footer__rss-logo" href="https://rs.school/js/"></a>
  </div>
</footer>`;
}
