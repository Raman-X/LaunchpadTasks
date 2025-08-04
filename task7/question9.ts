const myObject = {
  id: "my-object",
  createLogger(): () => void {
    return () => {
      console.log(`Logger for ${this.id}`);
    };
  },
};

const logger: () => void = myObject.createLogger();
logger(); // Logger for my-object
