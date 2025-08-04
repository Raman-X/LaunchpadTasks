function test(): void {
  var a: number; // declare variable a of type number
  function foo(): number {
    // foo returns a number
    return 2;
  }

  console.log(a); // 'a' is declared but not initialized yet → undefined
  console.log(foo());
  a = 1;
}

test();
