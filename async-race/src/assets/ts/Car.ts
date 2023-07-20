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
}
