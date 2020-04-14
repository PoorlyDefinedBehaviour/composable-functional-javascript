const Sum = x => ({
  x,
  concat: o => Sum(x + o.x),
  toString: () => `Sum(${x})`,
})

Sum.empty = () => Sum(0)

export default Sum
