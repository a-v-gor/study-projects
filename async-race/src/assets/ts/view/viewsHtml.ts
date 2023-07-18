const viewsHtml = {
  garageViewHtml: `
    <section class="view garage">
      <div class="page-info garage__info">
        <h2 class="page-info__title">Garage</h2>
        <p class="page-info__text">Total number of cars: <span id="cars-num-text"></span></p>
        <p class="page-info__text">Page #<span id="page-cars-num">1</span></p>
      </div>
      <div class="set-car">
        <form class="set-car__form" id="create-car">
          <input type="text" class="set-car__name">
          <input type="color" class="set-car__color">
          <input type="submit" class="set-car__button" value="Create">
        </form>
        <form class="set-car__form" id="update-car">
          <input type="text" class="set-car__name">
          <input type="color" class="set-car__color">
          <input type="submit" class="set-car__button" value="Update">
        </form>
      </div>
    </section>`,
  winnersViewHtml: `
  <section class="view winners">
    <div class="page-info winners__info">
      <h2 class="page-info__title">Winners</h2>
      <p class="page-info__text">Total number of winners: <span id="winners-num-text"></span></p>
      <p class="page-info__text">Page #<span id="page-winners-num">1</span></p>
    </div>
  </section>`,
};

export default viewsHtml;
