import Api from './api';
import ICar from './iCar';

export default class Car implements ICar {
  name: string;

  color: string;

  id?: number;

  constructor(name: string, color: string, id?: number) {
    this.name = name;
    this.color = color;
    this.id = id;
  }

  async create() {
    const api = new Api();
    await api.newCar(this.name, this.color);
  }

  // update() {

  // }
}
