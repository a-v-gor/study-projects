export default class Elements {
  document: Document;

  constructor() {
    this.document = document;
  }

  getCreateCarForm() {
    return <HTMLElement> this.document.getElementById('create-car');
  }
}
