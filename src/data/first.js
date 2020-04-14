const First = x => ({
  // eslint-disable-next-line no-unused-vars
  concat: _ => First(x),
  toString: () => `First(${x})`,
})

export default First
