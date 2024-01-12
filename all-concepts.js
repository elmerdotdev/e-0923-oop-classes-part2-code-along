// SUPERCLASS
class Vehicle {
  constructor(make, model) {
    this._make = make
    this._model = model
  }

  get make() {
    return this._make
  }

  set make(newMake) {
    this._make = newMake
  }

  get model() {
    return this._model
  }

  set model(newModel) {
    this._model = newModel
  }

  message() {
    return `I have a ${this._make} ${this._model}.`
  }
}

// CHILD CLASS
class Car extends Vehicle {
  constructor(make, model, color) {
    super(make, model)
    this._color = color
  }

  get color() {
    return this._color
  }

  set color(newColor) {
    this._color = newColor
  }

  message() {
    return `${super.message()} It is color ${this._color}.`
  }
}

// CHILD OF CAR CLASS

class ElectricCar extends Car {
  constructor(make, model, color, batteryCapacity) {
    super(make, model, color)
    this._batteryCapacity = batteryCapacity
  }

  get batteryCapacity() {
    return this._batteryCapacity
  }

  set batteryCapacity(newCapacity) {
    this._batteryCapacity = newCapacity
  }

  message() {
    return `${super.message()} It has a battery capacity of ${this._batteryCapacity}.`
  }
}

class GasolineCar extends Car {
  constructor(make, model, color, mileage) {
    super(make, model, color)
    this._mileage = mileage
  }

  message() {
    return `${super.message()} It has a mileage of ${this._mileage} kms.`
  }
}

const myCar = new Car('Honda', 'Civic', 'Red')
console.log(myCar.message())
const mySecondCar = new ElectricCar('Tesla', 'Y', 'White', '50,000 kwh')
mySecondCar.color = 'Black'
console.log(mySecondCar.message())
const myThirdCar = new GasolineCar('Toyota', 'Corolla', 'Grey', 200000)
console.log(myThirdCar.message())