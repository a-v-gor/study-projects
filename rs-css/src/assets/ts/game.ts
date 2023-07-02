import IGameObj from './IGameObj';
import ILevel from './ILevel';

export default class Game {
  table: HTMLElement;

  constructor() {
    this.table = <HTMLElement>document.querySelector('.game-field__table');
  }

  clearLevel() {
    const objs = this.table.querySelectorAll('.object-tag');
    const stringsInEditor = document.querySelectorAll('.html-editor__code');
    objs.forEach((i,idx) => {
      i.removeEventListener('mouseover', () => {
        stringsInEditor[idx].classList.add('html-editor__code_light');
        this.showDescription(idx);
      });
      i.removeEventListener('mouseout', () => {
        stringsInEditor[idx].classList.remove('html-editor__code_light');
        this.hideDescription();
      });
    })
    stringsInEditor.forEach((i,idx) => {
      i.removeEventListener('mouseover', () => {
        objs[idx].classList.add('table__code_light');
        this.showDescription(idx);
      });
      i.removeEventListener('mouseout', () => {
        objs[idx].classList.remove('table__code_light');
        this.hideDescription();
      });
    })
    this.table.innerHTML = '';
    if (document.querySelector('.levels__list-item_active')) {
      const activeLevelListElement: HTMLLIElement = <HTMLLIElement> document.querySelector('.levels__list-item_active');
      activeLevelListElement.classList.remove('levels__list-item_active');
    }
  }

  drawLevel(obj: ILevel) {
    const table = this.table;

    function addLevelDescription(): void {
      const descriptionBlock: HTMLElement = <HTMLElement> document.querySelector('.game-field__task-text');
      descriptionBlock.innerText = obj.description;
    }

    function addID (str: string, obj: IGameObj) {
      let copyStr = str;
      copyStr += ` id="${obj.id}"`
      return copyStr;
    }

    function addCodeToEditor(): void {
      const editorField: HTMLElement = <HTMLElement> document.querySelector('.html-editor__code-page');
      editorField.innerHTML = '';

      function createNode(obj: IGameObj): Node {
        const result: HTMLElement = document.createElement(`pre`);
        result.classList.add('html-editor__code');
        if (obj.position === 'onTable') {
          result.classList.add('html-editor__on-table');
        }
        let strResult = obj.tag;
        if (obj.id) {
          strResult = addID(strResult, obj);
        }
        result.innerText = `  <${strResult} />`;
        return result;
      }

      function addFirstLastTableStr(strText: string) {
        const str = document.createElement('pre');
        str.classList.add('html-editor__code-table');
        str.innerText = strText;
        editorField.appendChild(str);
      }

      addFirstLastTableStr('<div class="table">');
      obj.tags.forEach((item) => {
        editorField.appendChild(createNode(item));
      });
      addFirstLastTableStr('</div>');
    }

    function addObjectOnTable(obj: IGameObj): void {
      const newObject = document.createElement('div');
      let className = `table__${obj.tag}`;
      let openTag = obj.tag;
      if (obj.id === 'fancy') {
        openTag = addID(openTag, obj);
        className += '_fancy';
      }

      newObject.classList.add(className);
      newObject.classList.add(`object-tag`);
      const descrBlock = document.createElement('div');
      descrBlock.classList.add(`object-tag__descr`);
      descrBlock.innerText = `<${openTag}></${obj.tag}>`;
      if (obj.position === 'onTable') {
        newObject.classList.add(`object-tag__on-table`);
      }
      if (obj.toSelect) {
        newObject.classList.add(`object-tag__strobe`);
      }
      table.appendChild(newObject);
      table.appendChild(descrBlock);
    }

    addLevelDescription();
    obj.tags.forEach((i): void => {
      addObjectOnTable(i);
    });
    addCodeToEditor();
  }

  showDescription(num: number): void {
    const descriptions = this.table.querySelectorAll('.object-tag__descr');
    descriptions[num].classList.add('object-tag__descr_active');
  }

  hideDescription() {
    const description = this.table.querySelector('.object-tag__descr_active')
    if (description) {
      description.classList.remove('object-tag__descr_active');
    }
  }

  highlightObj() {
    const table = this.table;
    const objs = table.querySelectorAll('.object-tag');
    const stringsInEditor = document.querySelectorAll('.html-editor__code');

    objs.forEach((i,idx) => {
      i.addEventListener('mouseover', () => {
        stringsInEditor[idx].classList.add('html-editor__code_light');
        this.showDescription(idx);
      });
      i.addEventListener('mouseout', () => {
        stringsInEditor[idx].classList.remove('html-editor__code_light');
        this.hideDescription();
      });
    })
    stringsInEditor.forEach((i,idx) => {
      i.addEventListener('mouseover', () => {
        objs[idx].classList.add('table__code_light');
        this.showDescription(idx);
      });
      i.addEventListener('mouseout', () => {
        objs[idx].classList.remove('table__code_light');
        this.hideDescription();
      });
    })
  }
}