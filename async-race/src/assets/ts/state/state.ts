import { IDataGarage } from './iDataGarage';

export default class State {
  dataGarage: IDataGarage;

  dataWinners: {
    saved: boolean,
    pageNum: string,
    sort?: string,
  };

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
    this.dataWinners = {
      saved: false,
      pageNum: '',
      sort: '',
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
    const updateCarIdInput: HTMLInputElement = <HTMLInputElement> updateForm.querySelector('.set-car__id');

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
      const updateCarId: number = +checkIfInputNull(updateCarIdInput);

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
          carId: updateCarId,
        },
      };
    } else if (operation === 'load' && this.dataGarage.saved) {
      this.dataGarage.saved = false;
      currPageNumSpan.innerText = this.dataGarage.pageNum;
      createCarNameInput.value = this.dataGarage.createCar.carName;
      createCarColorInput.value = this.dataGarage.createCar.carColor;
      updateCarNameInput.value = this.dataGarage.updateCar.carName;
      updateCarColorInput.value = this.dataGarage.updateCar.carColor;
      if (this.dataGarage.updateCar.carId) {
        updateCarIdInput.value = String(this.dataGarage.updateCar.carId);
      }
    }
  }

  getSetWinnersSettings(operation: string) {
    const currPageNumSpan: HTMLSpanElement = <HTMLSpanElement>document.getElementById('page-winners-num');
    if (operation === 'save') {
      const currPageNum: string = currPageNumSpan.innerText;
      const sortElem: HTMLSpanElement = <HTMLSpanElement>document.querySelector('.sort-active');
      if (sortElem !== null) {
        this.dataWinners.sort = sortElem.id;
      }
      this.dataWinners.saved = true;
      this.dataWinners.pageNum = currPageNum;
    } else if (operation === 'load' && this.dataWinners.saved) {
      this.dataWinners.saved = false;
      currPageNumSpan.innerText = this.dataWinners.pageNum;
      if (this.dataWinners.sort !== undefined && this.dataWinners.sort.length) {
        const id = this.dataWinners.sort;
        // const sortArrw: HTMLSpanElement = <HTMLSpanElement>document.getElementById(id);
        // sortArrw.classList.add('sort-active');
      }
    }
  }

  saveGarageState(): void {
    this.getSetCarSettings('save');
  }

  loadGarageState(): void {
    this.getSetCarSettings('load');
  }

  saveWinnersState(): void {
    this.getSetWinnersSettings('save');
  }

  loadWinnersState(): void {
    this.getSetWinnersSettings('load');
  }
}
