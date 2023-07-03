import IGameObj from './IGameObj';
import ILevel from './ILevel';

export default class Game {
  table: HTMLElement;

  constructor() {
    this.table = <HTMLElement> document.querySelector('.game-field__table');
  }

  private getObjectsOnTable(): NodeListOf<HTMLDivElement> {
    return this.table.querySelectorAll('.object-tag__on-table');
  }

  private getObjectsChild(): NodeListOf<HTMLDivElement> {
    return this.table.querySelectorAll('.object-tag__child');
  }

  private getStringsOnTableInEditor(): NodeListOf<HTMLElement> {
    return document.querySelectorAll('.html-editor__code-block');
  }

  private getStringsChildInEditor(): NodeListOf<HTMLElement> {
    return document.querySelectorAll('.html-editor__child');
  }

  private getDescriptionsOnTable(): NodeListOf<HTMLElement> {
    return document.querySelectorAll('.object-tag__descr_onTable');
  }

  private getDescriptionsChild(): NodeListOf<HTMLElement> {
    return document.querySelectorAll('.object-tag__descr_child');
  }

  private showDescription(arrDescriptions: NodeListOf<HTMLElement>, num: number): void {
    arrDescriptions[num].classList.add('object-tag__descr_active');
  }

  private hideDescription() {
    const description = document.querySelector('.object-tag__descr_active');
    if (description) {
      description.classList.remove('object-tag__descr_active');
    }
  }

  public highlightObjects(): void {
    const objsOnTable = this.getObjectsOnTable();
    const objectsChild = this.getObjectsChild();
    const stringsOnTableInEditor = this.getStringsOnTableInEditor();
    const stringsChildInEditor = this.getStringsChildInEditor();
    const descriptionsOnTable = this.getDescriptionsOnTable();
    const descriptionsChild = this.getDescriptionsChild();
    const showDescription = this.showDescription;
    const hideDescription = this.hideDescription;

    function addListeners(arrElements: NodeListOf<HTMLElement>, arrCodeStrings: NodeListOf<HTMLElement>, arrDescriptions: NodeListOf<HTMLElement>, className: string) {
      arrElements.forEach((i,idx) => {
        i.addEventListener('mouseover', () => {
          arrCodeStrings[idx].classList.add(className);
          showDescription(arrDescriptions, idx);
        });
        i.addEventListener('mouseout', () => {
          arrCodeStrings[idx].classList.remove(className);
          hideDescription();
        });
      })
    }
    addListeners(objsOnTable, stringsOnTableInEditor, descriptionsOnTable, 'object-tag__descr_active');
    addListeners(objectsChild, stringsChildInEditor, descriptionsChild, 'object-tag__descr_active');
  }

  public clearLevel() {
    this.table.innerHTML = '';
    if (document.querySelector('.levels__list-item_active')) {
      const activeLevelListElement: HTMLLIElement = <HTMLLIElement> document.querySelector('.levels__list-item_active');
      activeLevelListElement.classList.remove('levels__list-item_active');
    }
  }

  drawLevel(obj: ILevel) {
    const table = this.table;

    function addLevelDescription(object: ILevel): void {
      const descriptionBlock: HTMLElement = <HTMLElement> document.querySelector('.game-field__task-text');
      descriptionBlock.innerText = object.description;
    }

    function addID (str: string, obj: IGameObj): string {
      let copyStr = str;
      copyStr += ` id="${obj.id}"`
      return copyStr;
    }

    function addCodeToEditor(): void {
      const editorField: HTMLElement = <HTMLElement> document.querySelector('.html-editor__code-page');
      editorField.innerHTML = '';

      function addBlockCodeToEditor(obj: IGameObj): Node {
        function returnPreElement(str:string, object: IGameObj): HTMLPreElement {
          const result: HTMLPreElement = document.createElement(`pre`);
          let tabulation = '  ';
          result.classList.add('html-editor__code');
          if (object.position === 'onTable') {
            result.classList.add('html-editor__on-table');
          } else if (object.position === 'child') {
            result.classList.add('html-editor__child');
            tabulation += '  '
          }
          let strResult = object.tag;

          if (str === 'last') {
            result.innerText = `${tabulation}</${strResult}>`;
          } else {
            if (object.id) {
              strResult = addID(strResult, object);
            }
            if (str === 'full') {
              result.innerText = `${tabulation}<${strResult} />`;
            } else if (str === 'first') {
              result.innerText = `${tabulation}<${strResult}>`;
            }
          }
          return result;
        }
        
        const blockResult: HTMLDivElement = document.createElement(`div`);
        blockResult.classList.add('html-editor__code-block');

        if (obj.children === undefined) {
          blockResult.appendChild(returnPreElement('full', obj));
        } else if (Array.isArray(obj.children)) {
          const openTag: HTMLPreElement = returnPreElement('first', obj);
          const closeTag: HTMLPreElement = returnPreElement('last', obj);
          blockResult.appendChild(openTag);
          obj.children.forEach((i) => {
            const newPreStr: HTMLPreElement = returnPreElement('full', i);
            blockResult.appendChild(newPreStr);
          })
          blockResult.appendChild(closeTag);
        }        
        return blockResult;
      }

      function addFirstLastTableStr(strText: string) {
        const str = document.createElement('pre');
        str.classList.add('html-editor__code-table');
        str.innerText = strText;
        editorField.appendChild(str);
      }

      addFirstLastTableStr('<div class="table">');
      obj.tags.forEach((item) => editorField.appendChild(addBlockCodeToEditor(item)));
      addFirstLastTableStr('</div>');
    }

    function returnTagDescriptionElement(strOpen: string, object: IGameObj): HTMLElement {
      const descrBlock = document.createElement('div');
      descrBlock.classList.add(`object-tag__descr`);
      descrBlock.classList.add(`object-tag__descr_${object.position}`);
      descrBlock.innerText = `<${strOpen}></${object.tag}>`;
      return descrBlock;
    }

    function addObject(obj: IGameObj, parentNode: HTMLElement = table): void {
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

      const description = returnTagDescriptionElement(openTag, obj);

      // Add element on page
      parentNode.appendChild(newObject);
      parentNode.appendChild(description);

      // Add child objects
      if (Array.isArray(obj.children)) {
        obj.children.forEach((i) => {
          addObject(i, newObject);
        })
      }
    }

    
    obj.tags.forEach((i): void => {
      addObject(i);
    });
    addLevelDescription(obj);
    addCodeToEditor();
  }
}