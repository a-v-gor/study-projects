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

    function addID (str: string, obj: IGameObj): string {
      let copyStr = str;
      copyStr += ` id="${obj.id}"`
      return copyStr;
    }

    // function addCodeToEditor(): void {
    //   const editorField: HTMLElement = <HTMLElement> document.querySelector('.html-editor__code-page');
    //   editorField.innerHTML = '';

    //   function createNode(obj: IGameObj): Node {
    //     const result: HTMLElement = document.createElement(`pre`);
    //     result.classList.add('html-editor__code');
    //     if (obj.position === 'onTable') {
    //       result.classList.add('html-editor__on-table');
    //     }
    //     let strResult = obj.tag;
    //     if (obj.id) {
    //       strResult = addID(strResult, obj);
    //     }
    //     result.innerText = `  <${strResult} />`;
    //     return result;
    //   }

    //   function addFirstLastTableStr(strText: string) {
    //     const str = document.createElement('pre');
    //     str.classList.add('html-editor__code-table');
    //     str.innerText = strText;
    //     editorField.appendChild(str);
    //   }

    //   addFirstLastTableStr('<div class="table">');
    //   obj.tags.forEach((item) => {
    //     editorField.appendChild(createNode(item));
    //   });
    //   addFirstLastTableStr('</div>');
    // }

    function addCodeToEditor(): void {
      const editorField: HTMLElement = <HTMLElement> document.querySelector('.html-editor__code-page');
      editorField.innerHTML = '';

      function createNode(obj: IGameObj): Node {
        const result: HTMLElement = document.createElement(`pre`);
        let tabulation = '  ';
        result.classList.add('html-editor__code');
        if (obj.position === 'onTable') {
          result.classList.add('html-editor__on-table');
        } else if (obj.position === 'child') {
          result.classList.add('html-editor__child');
          tabulation += '  '
        }
        let strResult = obj.tag;
        if (obj.id) {
          strResult = addID(strResult, obj);
        }

        if (Array.isArray(obj.children)) {
          obj.children.forEach((i) => {
            createNode(i);
          })
        }

        result.innerText = `${tabulation}<${strResult} />`;
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

    function returnTagDescriptionElement(strOpen: string, strClose: string): HTMLElement {
      const descrBlock = document.createElement('div');
      descrBlock.classList.add(`object-tag__descr`);
      descrBlock.innerText = `<${strOpen}></${strClose}>`;
      return descrBlock;
    }

    function addObjectOnTable(obj: IGameObj, parentNode: HTMLElement = table): void {
      console.log(obj);
      
      const newObject = document.createElement('div');
      let objClassName = `table__${obj.tag}`;
      let openTag = obj.tag;

      if (obj.id === 'fancy') {
        openTag = addID(openTag, obj);
        objClassName += '_fancy';
      }
      newObject.classList.add(objClassName);
      newObject.classList.add(`object-tag`);

      
      if (obj.position === 'onTable') {
        newObject.classList.add(`object-tag__on-table`);
      } else if (obj.position === 'child') {
        newObject.classList.add(`object-tag__child`);
      }

      // Check if tag to select
      if (obj.toSelect) {
        newObject.classList.add(`object-tag__strobe`);
      }

      const description = returnTagDescriptionElement(openTag, obj.tag);

      // Add element on page
      parentNode.appendChild(newObject);
      table.appendChild(description);

      // Add child objects
      if (Array.isArray(obj.children)) {
        obj.children.forEach((i) => {
          addObjectOnTable(i, newObject);
        })
      }
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
    if (description !== null) {
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
  }
}