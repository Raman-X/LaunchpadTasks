type User = {
  name: string;
  welcome: () => void;
};

const user: User = {
  name: "Alice",
  welcome: function () {
    console.log(`Welcome, ${this.name}!`);
  },
};

user.welcome(); // ✅ Welcome, Alice!
