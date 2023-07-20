export default function createStartPage(): void {
  const code = `
  <header class="header">
    <div class="wrapper header__wrapper">
      <h1 class="title header__title">Async Race</h1>
      <div class="view-btns">
        <button class="view-btns__btn">Garage</button>
        <button class="view-btns__btn">Winners</button>
      </div>
    </div>
  </header>
  <main class="main">
    <div class="wrapper main__wrapper">
    </div>
  </main>
  <footer class="footer">
    <div class="wrapper">
    </div>
  </footer>`;
  document.body.innerHTML = code;
}
