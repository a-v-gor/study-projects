import './sources.css';
import { ISourceObj } from '../iSrcObj';

interface ISources {
  draw(data: ISourceObj[]): void
}

class Sources implements ISources {
    draw(data: ISourceObj[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceCloneItemName = sourceClone.querySelector('.source__item-name') as Node;
            sourceCloneItemName.textContent = item.name;
            const sourceCloneItem = sourceClone.querySelector('.source__item') as HTMLElement;
            sourceCloneItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources') as HTMLElement;
        sources.append(fragment);
    }
}

export default Sources;
