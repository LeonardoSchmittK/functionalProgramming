function impartial(x = 0, y = 0, z = 0) {
  return x + y + z;
}

const partialFn = impartial.bind(null, 2, 2);

console.log(partialFn(2));
