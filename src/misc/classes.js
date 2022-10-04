class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, ${this.name}`;
  }
}

const me = new Person("Dario");
const other = new Person();

console.log(me.getGreeting());
console.log(other.getGreeting());

class Student extends Person {
  constructor(name = "anonymous", age = "15", major = "None") {
    super(name, age);
    this.major = major;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old and studies ${this.major}`;
  }
}

const dude = new Student("Clyde");
console.log(dude.getDescription());
