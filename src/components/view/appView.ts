import News from './news/news';
import Sources from './sources/sources';
import { IDataNews } from '../view/iDataNews';

interface IAppView {
  _news: News;
  _sources: Sources;

  drawNews(data: IDataNews): void;
  drawSources(data: IDataNews): void;
}

export class AppView implements IAppView{
  _news: News;
  _sources: Sources;

    constructor() {
        this._news = new News();
        this._sources = new Sources();
    }

    drawNews(data: IDataNews) {
        const values = data?.articles ? data?.articles : [];
        this._news.draw(values);
    }

    drawSources(data: IDataNews) {
        const values = data?.sources ? data?.sources : [];
        this._sources.draw(values);
    }
}

export default AppView;
