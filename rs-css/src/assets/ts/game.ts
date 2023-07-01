import returnGameData from './returnGameData';
import ILevel from './ILevel';
import IGameObj from './IGameObj';

export default class Game {
  table: HTMLElement;
  gameData: ILevel[]

  constructor() {
    this.table = <HTMLElement>document.querySelector('.game-field__table');
    this.gameData = returnGameData();
  }

  clearTable(): void {
    this.table.innerHTML = '';
  }

  drawLevel(numOfLevel: number) {
    const gameData = this.gameData;
    const table = this.table;
    function addLevelDescription(): void {
      const descriptionBlock: HTMLElement = <HTMLElement> document.querySelector('.game-field__task-text');
      descriptionBlock.innerText = gameData[numOfLevel].description;
    }

    function addCodeToEditor(): void {
      const editorField: HTMLElement = <HTMLElement> document.querySelector('.html-editor__code-page');
      editorField.innerHTML = '';

      function createNode(obj: IGameObj): Node {
        const result: HTMLElement = document.createElement(`pre`);
        result.classList.add('html-editor__code');
        if (obj.onTable) {
          result.classList.add('html-editor__on-table');
        }
        result.innerText = `  <${obj.tag} />`;
        return result;
      }

      function addFirstLastTableStr(strText: string) {
        const str = document.createElement('pre');
        str.classList.add('html-editor__code-table');
        str.innerText = strText;
        editorField.appendChild(str);
      }
      
      addFirstLastTableStr('<div class="table">');
      gameData[numOfLevel].tags.forEach((item) => {
        editorField.appendChild(createNode(item));
      });
      addFirstLastTableStr('</div>');
    }

    function addObjectOnTable(obj: IGameObj): void {
      const newObject = document.createElement('div');
      newObject.classList.add(`table__${obj.tag}`);
      newObject.classList.add(`object-tag`);
      const descrBlock = document.createElement('div');
      descrBlock.classList.add(`object-tag__descr`);
      descrBlock.innerText = `<${obj.tag}></${obj.tag}>`;
      if (obj.onTable) {
        newObject.classList.add(`object-tag__on-table`);
      }
      if (obj.toSelect) {
        newObject.classList.add(`object-tag__strobe`);
      }
      table.appendChild(newObject);
      table.appendChild(descrBlock);
    }

    addLevelDescription();
    gameData[numOfLevel].tags.forEach((i): void => {
      addObjectOnTable(i);
    });
    addCodeToEditor();
  }

  highlightObj() {
    const table = this.table;
    const objs = table.querySelectorAll('.object-tag');
    const stringsInEditor = document.querySelectorAll('.html-editor__code');
    function showDescription(num: number): void {
      const descriptions = table.querySelectorAll('.object-tag__descr');
      descriptions[num].classList.add('object-tag__descr_active');
    }
    function hideDescription() {
      const description = table.querySelector('.object-tag__descr_active')
      if (description) {
        description.classList.remove('object-tag__descr_active');
      }
    }

    objs.forEach((i,idx) => {
      i.addEventListener('mouseover', () => {
        stringsInEditor[idx].classList.add('html-editor__code_light');
        showDescription(idx);
      });
      i.addEventListener('mouseout', () => {
        stringsInEditor[idx].classList.remove('html-editor__code_light');
        hideDescription();
      });
    })
    stringsInEditor.forEach((i,idx) => {
      i.addEventListener('mouseover', () => {
        objs[idx].classList.add('table__code_light');
        showDescription(idx);
      });
      i.addEventListener('mouseout', () => {
        objs[idx].classList.remove('table__code_light');
        hideDescription();
      });
    })
  }
}