// SUPERCLASS
class Animal {
  constructor(name, species) {
    this._name = name
    this._species = species
  }

  //getter and setter
  get name() {
    return this._name
  }
  set name(newName) {
    this._name = newName
  }
  get species() {
    return this._species
  }
  set species(newSpecies) {
    this._species = newSpecies
  }

  // methods
  eat(food) {
    return `My ${this._name} is a ${this._species} and it likes to eat ${food}`
  }
}

// const animal1 = new Animal('Cat', 'Persian')
// animal1.name = 'Dog'
// animal1.species = 'Labrador'
// console.log(animal1.eat('Biscuits'))

class Dog extends Animal {
  constructor(name, species, nickname) {
    super(name, species)
    this._nickname = nickname
  }

  get nickname() {
    return this._nickname
  }

  set nickname(newNickname) {
    this._nickname = newNickname
  }

  run() {
    return `My ${this._species} ${this._name} named ${this._nickname} likes to run.`
  }
}

const pet1 = new Dog('Dog', 'Labrador', 'Julie')
console.log(pet1.run())
pet1.nickname = 'Josue'
console.log(pet1.run())

class Wolf extends Dog {
  constructor(name, species, nickname, status) {
    super(name, species, nickname)
    this._status = status
  }

  run() {
    return `${super.run()} It is ${this._status}.`
  }
}

const pet2 = new Wolf('Wolf', 'Husky', 'Jonathan', 'Domesticated')
console.log(pet2.run())
pet2.nickname = 'Judy'
console.log(pet2.run())