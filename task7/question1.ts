interface Person {
  name: string;
  sayHi: () => void;
}

const person: Person = {
  name: "Alice",
  sayHi: function () {
    console.log(`Hi, my name is ${this.name}.`);
  },
};
person.sayHi();
