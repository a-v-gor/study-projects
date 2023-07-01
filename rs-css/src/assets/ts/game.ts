import returnGameData from './returnGameData';
import ILevel from './ILevel';
import IGameObj from './IGameObj';

const gameData: ILevel[] = returnGameData();

export default class Game {
  table: HTMLElement;

  constructor() {
    this.table = <HTMLElement>document.querySelector('.game-field__table');
  }

  clearTable(): void {
    this.table.innerHTML = '';
  }

  addObjectOnTable(obj: IGameObj): void {
    const newObject = document.createElement('div');
    newObject.classList.add(`table__${obj.tag}`);
    newObject.classList.add(`object-tag`);
    newObject.setAttribute(`title`, `<${obj.tag}></${obj.tag}>`);
    if (obj.onTable) {
      newObject.classList.add(`object-tag__on-table`);
    }
    if (obj.toSelect) {
      newObject.classList.add(`object-tag__strobe`);
    }
    this.table.appendChild(newObject);
  }

  drawLevel(numOfLevel: number) {
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

    addLevelDescription();
    gameData[numOfLevel].tags.forEach((i): void => {
      this.addObjectOnTable(i);
    });
    addCodeToEditor();
  }

  highlightObj() {
    const objsOnTable = document.querySelectorAll('.object-tag__on-table');
    const stringsInEditor = document.querySelectorAll('.html-editor__on-table');
    objsOnTable.forEach((i,idx) => {
      i.addEventListener('mouseover', (e) => {
        console.log(e.target);
        
        stringsInEditor[idx].classList.add('html-editor__code_light');
      });
      i.addEventListener('mouseout', () => stringsInEditor[idx].classList.remove('html-editor__code_light'));
    })
    stringsInEditor.forEach((i,idx) => {
      i.addEventListener('mouseover', () => {
        // objsOnTable[idx].classList.add('table__code_light');
        console.log(objsOnTable[idx]);
        
        const mouseoverEvent = new Event('mouseover', { bubbles: true });
        objsOnTable[idx].dispatchEvent(mouseoverEvent);
      });
      i.addEventListener('mouseout', () => {
        // objsOnTable[idx].classList.remove('table__code_light');
        console.log('out');
        
        const mouseoutEvent = new Event('mouseout', { bubbles: true });
        objsOnTable[idx].dispatchEvent(mouseoutEvent);
      });
      // i.addEventListener('mouseout', () => objsOnTable[idx].classList.remove('table__code_light'));
    })
  }
}