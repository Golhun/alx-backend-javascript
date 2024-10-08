import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() { return this._range; }

  set range(value) { this._range = value; }

  cloneCar() {
    const { brand, motor, color } = this;
    return new Car(brand, motor, color);
  }
}

