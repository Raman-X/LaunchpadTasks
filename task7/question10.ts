function makeAdder(x: number): (y: number) => number {
  return function (y: number): number {
    return x + y;
  };
}

let add = makeAdder(5);
console.log(add(2));
//Answer: 7
