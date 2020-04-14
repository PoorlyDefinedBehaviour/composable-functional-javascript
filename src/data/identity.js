const Identity = x => ({
  map: f => Identity(f(x)),
  fold: f => f(x),
  toString: () => `Identity(${x})`,
})

export default Identity
