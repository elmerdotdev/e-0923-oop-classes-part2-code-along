class Person {
  constructor(fname, lname, age) {
    this._firstname = fname
    this._lastname = lname
    this._age = age
  }

  get firstname() {
    return this._firstname
  }

  get lastname() {
    return this._lastname
  }

  set firstname(value) {
    this._firstname = value
  }

  get age() {
    return this._age
  }

  set age(value) {
    if (value > 18) {
      this._age = value
    } else {
      throw new Error('Too young!')
    }
  }
}

const person1 = new Person('John', 'Smith', 16)


// COMPUTED VALUES

class Rectangle {
  constructor(width, height) {
    this._width = width
    this._height = height
  }

  get width() {
    return this._width
  }

  set width(value) {
    this._width = value
  }

  get area() {
    return this._width * this._height
  }
}

const shape1 = new Rectangle(4, 5)
shape1.width = 6
// console.log(shape1.area)


// SETTER GETTER WITH SUPER

class Animal {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(newName) {
    this._name = newName
  }
}

class Dog extends Animal {
  get name() {
    return `Dog: ${super.name}`
  }

  set name(newName) {
    super.name = newName
  }
}

const pet1 = new Dog('Maxx')
console.log(pet1.name)
pet1.name = 'Bruno'
console.log(pet1.name)