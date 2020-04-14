const All = x => ({
  x,
  concat: o => All(x && o.x),
  toString: () => `All(${x})`,
})

All.empty = () => All(true)

export default All
