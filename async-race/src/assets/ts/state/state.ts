import { IDataGarage } from './iDataGarage';

export default class State {
  dataGarage: IDataGarage;

  // dataWinners: {};

  constructor() {
    this.dataGarage = {
      saved: false,
      pageNum: '',
      createCar: {
        carName: '',
        carColor: '',
      },
      updateCar: {
        carName: '',
        carColor: '',
        carId: 0,
      },
    };
  }

  getSetCarSettings(operation: string) {
    const currPageNumSpan: HTMLSpanElement = <HTMLSpanElement> document.getElementById('page-cars-num');
    const createForm: HTMLFormElement = <HTMLFormElement> document.getElementById('create-car');
    const createCarNameInput: HTMLInputElement = <HTMLInputElement> createForm.querySelector('.set-car__name');
    const createCarColorInput: HTMLInputElement = <HTMLInputElement> createForm.querySelector('.set-car__color');
    const updateForm: HTMLFormElement = <HTMLFormElement> document.getElementById('update-car');
    const updateCarNameInput: HTMLInputElement = <HTMLInputElement> updateForm.querySelector('.set-car__name');
    const updateCarColorInput: HTMLInputElement = <HTMLInputElement> updateForm.querySelector('.set-car__color');

    function checkIfInputNull(elem: HTMLInputElement) {
      let result = '';
      if (elem) {
        result = elem.value;
      }
      return result;
    }

    if (operation === 'save') {
      const currPageNum: string = currPageNumSpan.innerText;
      const createCarName: string = checkIfInputNull(createCarNameInput);
      const createCarColor: string = checkIfInputNull(createCarColorInput);
      const updateCarName: string = checkIfInputNull(updateCarNameInput);
      const updateCarColor: string = checkIfInputNull(updateCarColorInput);

      this.dataGarage = {
        saved: true,
        pageNum: currPageNum,
        createCar: {
          carName: createCarName,
          carColor: createCarColor,
        },
        updateCar: {
          carName: updateCarName,
          carColor: updateCarColor,
          carId: 0,
        },
      };
    } else if (operation === 'load' && this.dataGarage.saved) {
      this.dataGarage.saved = false;
      currPageNumSpan.innerText = this.dataGarage.pageNum;
      createCarNameInput.value = this.dataGarage.createCar.carName;
      createCarColorInput.value = this.dataGarage.createCar.carColor;
      updateCarNameInput.value = this.dataGarage.updateCar.carName;
      updateCarColorInput.value = this.dataGarage.updateCar.carColor;
    }
  }

  saveGarageState(): void {
    this.getSetCarSettings('save');
  }

  loadGarageState(): void {
    this.getSetCarSettings('load');
  }
}
