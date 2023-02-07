export function returnResultBody() {
  return `
  <main class="main">
    <div class="wrapper results">
      <h1 class="results__title">Результаты</h1>
      <p class="results__text">Вы набрали <span class="result-points">000</span> очков. <span class="link-to-main">Попробуйте еще раз.</span></p>
      <p class="results__text">Вы набрали максимальное количество очков. Поздравляем!</p>
    </div>
  </main>`;
}
