import returnGameData from './returnGameData';
import ILevel from './ILevel';

const gameData: ILevel[] = returnGameData();

export default class Game {
  table: HTMLElement;

  constructor() {
    this.table = <HTMLElement>document.querySelector('.game-field__table');
  }

  clearTable(): void {
    this.table.innerHTML = '';
  }

  addObjectToTable(strClasslist: string): void {
    const newObject = document.createElement('div');
    newObject.classList.add(strClasslist);
    this.table.appendChild(newObject);
  }

  addLevelDescription(num: number): void {
    const descriptionBlock: HTMLElement = <HTMLElement> document.querySelector('.game-field__task-text');
    descriptionBlock.innerText = gameData[num].description;
  }

  addCodeToEditor(num: number): void {
    function returnHTML(num: number): string {
      let result = '';
  
      function addString(strTag: string): string {
        return `<pre class="html-editor__code">  &lt;${strTag}&gt;<br></pre>`
      }
  
      gameData[num].tags.forEach((item) => {
        result += addString(item.tag);
      });
      console.log(result);
      
      return result;
    }

    const firstString = '&lt;div class = "table"&gt;<br>';
    const lastString = '&lt;/div&gt;';
    const middleString = returnHTML(num);
    const HTMLEditor: HTMLElement = <HTMLElement> document.querySelector('.html-editor__code-page');
    HTMLEditor.innerHTML = '';
    HTMLEditor.innerHTML = `${firstString}${middleString}${lastString}`;
  }

  drawLevel(numOfLevel: number) {
    this.addLevelDescription(numOfLevel);
    gameData[numOfLevel].tags.forEach((i) => {
      this.addObjectToTable(i.tag);
    });
    this.addCodeToEditor(numOfLevel);
  }
}