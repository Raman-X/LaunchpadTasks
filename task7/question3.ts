type User = {
  name: string;
  logName: () => void;
};

const user: User = {
  name: "Bob",
  logName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  },
};
user.logName();
