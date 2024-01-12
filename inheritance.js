// SUPERCLASS / PARENT CLASS
class Person {
  constructor(fname, lname, age) {
    this.firstname = fname
    this.lastname = lname
    this.age = age
  }

  greeting() {
    return `Hello my name is ${this.firstname} ${this.lastname} and I am ${this.age} years old.`
  }
}

// CHILD CLASS
class Student extends Person {
  constructor(fname, lname, age, idNumber) {
    super(fname, lname, age)
    this.idNumber = idNumber
  }

  greeting() {
    return `${super.greeting()} My ID number is ${this.idNumber}.`
  }
}

// CHILD CLASS 2
class Teacher extends Person {
  constructor(fname, lname, age, subject) {
    super(fname, lname, age)
    this.subject = subject
  }

  greeting() {
    return `${super.greeting()} I am teaching ${this.subject}.`
  }
}

class TeachersAssistant extends Teacher {
  constructor(fname, lname, age, subject, availability){
    super(fname, lname, age, subject)
    this.availability = availability
  }

  greeting() {
    return `${super.greeting()} I am available every ${this.availability}.`
  }
}

const person1 = new Person('Jane', 'Doe', 30)
console.log(person1.greeting())

const student1 = new Student('John', 'Smith', 20, 98765)
console.log(student1.greeting())

const teacher1 = new Teacher('Billy', 'Willy', 50, 'HTML')
console.log(teacher1.greeting())

const ta1 = new TeachersAssistant('Charlie', 'Brown', 21, 'HTML', 'Friday')
console.log(ta1.greeting())


////// ANIMALS

class Animal {
  constructor(type, sound) {
    this.type = type
    this.sound = sound
  }

  speak() {
    return `${this.type} can ${this.sound}`
  }
}

class Dog extends Animal {
  constructor(type, sound, name) {
    super(type, sound)
    this.name = name
  }

  speak() {
    return `${super.speak()}. Her name is ${this.name}`
  }
}

class Parrot extends Animal {
  constructor(type, sound, action) {
    super(type, sound)
    this.action = action
  }

  movement() {
    return `${this.type} makes ${this.sound} sound and can ${this.action}.`
  }
}

const pet1 = new Dog('Dog', 'bark', 'Jonnie')
console.log(pet1.speak())
const pet2 = new Parrot('Parrot', 'sing', 'fly')
console.log(pet2.movement())