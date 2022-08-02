import './news.css';
import { IResDataArticle } from '../iDataArticle';

class News {
    draw(data: IResDataArticle[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            const newsCloneItem = newsClone.querySelector('.news__item') as HTMLElement;

            if (idx % 2) newsCloneItem.classList.add('alt');

            const newsClonePhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            newsClonePhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            const newsCloneAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            newsCloneAuthor.textContent = item.author || item.source.name;
            const newsCloneMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            newsCloneMetaDate.textContent = String(item.publishedAt)
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            const newsCloneTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            newsCloneTitle.textContent = item.title;
            const newsCloneSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            newsCloneSource.textContent = item.source.name;
            const newsCloneContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            newsCloneContent.textContent = item.description;
            const newsCloneReadMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            newsCloneReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsElem = document.querySelector('.news') as HTMLElement;
        newsElem.innerHTML = '';
        newsElem.appendChild(fragment);
    }
}

export default News;
