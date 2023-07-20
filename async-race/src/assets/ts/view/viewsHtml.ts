const viewsHtml = {
  garageViewHtml: `
    <section class="view garage">
      <div class="page-info garage__info">
        <h2 class="title page-info__title">Garage</h2>
        <p class="page-info__text">Total number of cars: <span id="cars-num-text"></span></p>
        <p class="page-info__text">Page #<span id="page-cars-num">1</span></p>
      </div>
      <section class="garage__set-car set-car">
        <h3 class="title set-car__title">Create and update cars</h3>
        <form id="create-car" class="set-car__form">
          <input type="text" name="carName" class="set-car__name">
          <input type="color" name="carColor" class="set-car__color">
          <input type="submit" class="set-car__button" value="Create">
        </form>
        <form id="update-car" class="set-car__form">
          <input type="text" class="set-car__name">
          <input type="color" class="set-car__color">
          <input type="submit" class="set-car__button" value="Update">
        </form>
        <button class="set-car__btn-generate">Generate cars</button>
      </section>
      <section class="garage__race-btns race-btns">
        <h3 class="title race-btns__title">Race</h3>
        <button class="race-btns__start">Start</button>
        <button class="race-btns__reset">Reset</button>
      </section>
      <section class="garage__cars cars">
        <h3 class="title cars-list__title">Cars</h3>
        <div class="cars__list">
        </div>
      </section>
    </section>`,
  winnersViewHtml: `
  <section class="view winners">
    <div class="page-info winners__info">
      <h2 class="title page-info__title">Winners</h2>
      <p class="page-info__text">Total number of winners: <span id="winners-num-text"></span></p>
      <p class="page-info__text">Page #<span id="page-winners-num">1</span></p>
    </div>
  </section>`,
};

export default viewsHtml;
