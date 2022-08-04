import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IDataNews } from '../view/iDataNews';

class App {
  _controller: AppController;
  _view: AppView;
  constructor() {
    this._controller = new AppController();
    this._view = new AppView();
  }
  
  start() {
    const sourcesElem = document.querySelector('.sources') as HTMLElement;
    sourcesElem
    .addEventListener('click', (e) => this._controller.getNews(e, (data: IDataNews) => this._view.drawNews(data)));
    this._controller.getSources((data) => this._view.drawSources(data));
  }
}

export default App;
