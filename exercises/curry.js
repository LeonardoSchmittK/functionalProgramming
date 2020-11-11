const sumNums = (x) => (y) => (z) => x + y + z;
const parts = sumNums(2); // applying the sumNums by "pieces"
console.log(parts(3)(5));
console.log(sumNums(2)(1)(10));
