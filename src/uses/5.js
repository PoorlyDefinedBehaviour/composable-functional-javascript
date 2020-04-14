const Sum = x => ({
  x,
  concat: o => Sum(x + o.x),
  inspect: () => `Sum(${x})`,
  empty: () => Sum(0),
})

console.log("Sum(1).concat(Sum(2))", Sum(1).concat(Sum(2)).inspect())
console.log(
  "Sum(1).concat(Sum(2)).concat(Sum(3))",
  Sum(1).concat(Sum(2)).concat(Sum(3)).inspect()
)
console.log(
  "Sum(1).concat(Sum(2).concat(Sum(3)))",
  Sum(1)
    .concat(Sum(2).concat(Sum(3)))
    .inspect()
)

const All = x => ({
  x,
  concat: o => All(x && o.x),
  inspect: () => `All(${x})`,
  empty: () => All(true),
})

console.log(
  "All(true).concat(All(false))",
  All(true).concat(All(false)).inspect()
)

console.log(
  "All(true).concat(All(true))",
  All(true).concat(All(true)).inspect()
)

const First = x => ({
  // eslint-disable-next-line no-unused-vars
  concat: _ => First(x),
  inspect: () => `First(${x})`,
})

console.log(
  "First('hello').concat(First('world'))",
  First("hello").concat(First("world")).inspect()
)

console.log(
  "First('world').concat(First('hello'))",
  First("world").concat(First("hello")).inspect()
)
