import IGameObj from './IGameObj';
import ILevel from './ILevel';

interface IDataForHighLight {
  objsOnTable: NodeListOf<HTMLElement>;
  objectsChild: NodeListOf<HTMLElement>;
  stringsOnTableInEditor: NodeListOf<HTMLElement>;
  stringsChildInEditor: NodeListOf<HTMLElement>;
  descriptionsOnTable: NodeListOf<HTMLElement>;
  descriptionsChild: NodeListOf<HTMLElement>;
}

export default class Game {
  table: HTMLElement;

  constructor() {
    this.table = <HTMLElement> document.querySelector('.game-field__table');
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

  private addListeners(arrElements: NodeListOf<HTMLElement>, arrCodeStrings: NodeListOf<HTMLElement>, arrDescriptions: NodeListOf<HTMLElement>, className: string): void {
    arrElements.forEach((i,idx) => {
      i.addEventListener('mouseover', (e: Event) => {
        const element: HTMLElement = <HTMLElement> e.target;
        if (element.classList.contains('object-tag')) {
          element.classList.add('object-tag_light');
        }
        arrCodeStrings[idx].classList.add(className);
        this.showDescription(arrDescriptions, idx);
        const child: HTMLElement = <HTMLElement> i.querySelector('.html-editor__child');
        if (child) {
          const strings: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>> i.querySelectorAll('.html-editor__code');
          const openTagStr = strings[0];
          const closeTagStr = strings[strings.length - 1];
          openTagStr.classList.add('html-editor__code_light');
          closeTagStr.classList.add('html-editor__code_light');
        }
      });
      i.addEventListener('mouseout', (e: Event) => {
        const element: HTMLElement = <HTMLElement> e.target;
        if (element.classList.contains('object-tag_light')) {
          element.classList.remove('object-tag_light');
        }
        arrCodeStrings[idx].classList.remove(className);
        this.hideDescription();
        const child: HTMLElement = <HTMLElement> i.querySelector('.html-editor__child');
        if (child) {
          const strings: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>> i.querySelectorAll('.html-editor__code');
          const openTagStr = strings[0];
          const closeTagStr = strings[strings.length - 1];
          openTagStr.classList.remove('html-editor__code_light');
          closeTagStr.classList.remove('html-editor__code_light');
        }
      });
    })
  }

  private removeListeners(arrElements: NodeListOf<HTMLElement>, arrElemsToLight: NodeListOf<HTMLElement>, arrDescriptions: NodeListOf<HTMLElement>, className: string): void {
    arrElements.forEach((i,idx) => {
      i.removeEventListener('mouseover', () => {
        arrElemsToLight[idx].classList.add(className);
        this.showDescription(arrDescriptions, idx);
      });
      i.removeEventListener('mouseout', () => {
        arrElemsToLight[idx].classList.remove(className);
        this.hideDescription();
      });
    })
  }

  private returnDataForHighLight(): IDataForHighLight {
    const result: IDataForHighLight = {
      objsOnTable: document.querySelectorAll('.object-tag__on-table'),
      objectsChild: document.querySelectorAll('.object-tag__child'),
      stringsOnTableInEditor: document.querySelectorAll('.html-editor__code-block'),
      stringsChildInEditor: document.querySelectorAll('.html-editor__child'),
      descriptionsOnTable: document.querySelectorAll('.object-tag__descr_onTable'),
      descriptionsChild: document.querySelectorAll('.object-tag__descr_child'),
    };
    return result;
  }

  public highlightObjects(): void {
    const data: IDataForHighLight = this.returnDataForHighLight();

    this.addListeners(data.objsOnTable, data.stringsOnTableInEditor, data.descriptionsOnTable, 'html-editor__code_light');
    this.addListeners(data.objectsChild, data.stringsChildInEditor, data.descriptionsChild, 'html-editor__code_light');
    this.addListeners(data.stringsOnTableInEditor, data.objsOnTable, data.descriptionsOnTable, 'object-tag_light');
    this.addListeners(data.stringsChildInEditor, data.objectsChild, data.descriptionsChild, 'object-tag_light');
  }

  public clearLevel() {
    const data: IDataForHighLight = this.returnDataForHighLight();

    this.table.innerHTML = '';
    this.removeListeners(data.objsOnTable, data.stringsOnTableInEditor, data.descriptionsOnTable, 'html-editor__code_light');
    this.removeListeners(data.objectsChild, data.stringsChildInEditor, data.descriptionsChild, 'html-editor__code_light');
    if (document.querySelector('.levels__list-item_active')) {
      const activeLevelListElement: HTMLLIElement = <HTMLLIElement> document.querySelector('.levels__list-item_active');
      activeLevelListElement.classList.remove('levels__list-item_active');
    }
  }

  public drawLevel(obj: ILevel): void {
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
      if (obj.children) {
        newObject.classList.add(`object-tag__parent`);
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
      table.appendChild(description);

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