export interface IDataGarage {
  saved: boolean,
  pageNum: string,
  createCar: {
    carName: string,
    carColor: string
  },
  updateCar: {
    carName: string,
    carColor: string,
    carId: string,
  },
}
