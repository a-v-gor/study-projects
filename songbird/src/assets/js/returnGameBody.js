export function returnGameBody() {
  return `
  <main class="main">
    <div class="wrapper main__wrapper">
      <div class="top-panel">
        <div class="top-panel__questions">
          <h2 class="top-panel game-title">Вопросы</h2>
          <ul class="top-panel__questions-ul">
            <li class="top-panel__questions-li">Вопрос 1</li>
            <li class="top-panel__questions-li">Вопрос 2</li>
            <li class="top-panel__questions-li">Вопрос 3</li>
            <li class="top-panel__questions-li">Вопрос 4</li>
            <li class="top-panel__questions-li">Вопрос 5</li>
            <li class="top-panel__questions-li">Вопрос 6</li>
          </ul>
        </div>
        <div class="top-panel__score">
          <h2 class="top-panel game-title">Счет</h2>
          <p class="top-panel__score-text">0</p>
        </div>
      </div>
      <div class="player-right-bird-info">
        <div class="player">
          <audio class = "player__audio" src="" preload="metadata"></audio>
          <div class="player__controls">
            <button class="player__play-button_paused"></button>
            <input class="player__progress" type="range" name="progressBar" id="" value="0" min="0" max = "1" step="0.01">
            <div class="player__volume-group">
              <button class="player__volume-btn"></button>
              <input class="player__input-volume" type="range" name="volume" id="" min="0" max = "1" step="0.01">
            </div>
            <div class="player__time">
              <time class="player__time-elapsed">00:00</time>
              <span class="player__time-slash"> / </span>
              <time class="player__duration">00:00</time>
            </div>
          </div>
        </div>
        <div class="bird-info">
          <div class="bird-info__img"><img src="./assets/img/bird.svg" alt="птица" class="bird-info__pict"></div>
          <div class="bird-info__name">Название птицы</div>
        </div>
      </div>
      <div class="bottom-panel">
        <div class="answer-variants">
          <h2 class="answer-variants__title game-title">Варианты ответов</h2>
          <ol class="answer-variants__ol">
            <li class="answer-variants__li">Название птицы</li>
            <li class="answer-variants__li">Название птицы</li>
            <li class="answer-variants__li">Название птицы</li>
            <li class="answer-variants__li">Название птицы</li>
            <li class="answer-variants__li">Название птицы</li>
            <li class="answer-variants__li">Название птицы</li>
          </ol>
        </div>
        <div class="choosed-bird-info">
          <div class="choosed-bird-info__invitation">
            <p class="choosed-bird-info__text">
              Включите воспроизведение и выберите ответ из предложенных вариантов.
            </p>
          </div>
          <div class="choosed-bird-info__info">
              <div class="choosed-bird-info__info-img"><img src="./assets/img/bird.svg" alt="птица" class="choosed-bird-info__pict"></div>
              <div class="choosed-bird-info__info-rname">Название птицы</div>
              <div class="choosed-bird-info__info-lname">Название птицы на латыни</div>
              <div class="choosed-bird-info__player choosed-bird-player">
                <audio class = "choosed-bird-player__audio" src="" preload="metadata"></audio>
                <div class="choosed-bird-player__controls">
                  <button class="choosed-bird-player__play-button_paused"></button>
                  <input class="choosed-bird-player__progress" type="range" name="progressBar" id="" value="0" min="0" max = "1" step="0.01">
                  <div class="choosed-bird-player__volume-group">
                    <button class="choosed-bird-player__volume-btn"></button>
                    <input class="choosed-bird-player__input-volume" type="range" name="volume" id="" min="0" max = "1" step="0.01">
                  </div>
                  <div class="choosed-bird-player__time">
                    <time class="choosed-bird-player__time-elapsed">00:00</time>
                    <span class="choosed-bird-player__time-slash"> / </span>
                    <time class="choosed-bird-player__duration">00:00</time>
                  </div>
                </div>
              </div>
              <div class="choosed-bird-info__short-info">Краткая информация</div>
          </div>
        </div>
      </div>
    </div>
  </main>`;
}
