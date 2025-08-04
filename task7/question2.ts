type User = {
  name: string;
  greet(this: User): void;
};

const user: User = {
  name: "Alice",
  greet: function (this: User) {
    console.log(`Hello, ${this.name}`);
  },
};

const greetUser = user.greet.bind(user);
greetUser(); // ✅ Hello, Alice
