function createCounter(): () => void {
  let count: number = 0;
  return function (): void {
    count++;
    console.log(count);
  };
}

const counter: () => void = createCounter();
counter();
counter();
