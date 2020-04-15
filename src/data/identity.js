const Identity = x => ({
  map: f => Identity(f(x)),
  fold: f => f(x),
  ap: other => other.map(x),
  toString: () => `Identity(${x})`,
})

export default Identity
