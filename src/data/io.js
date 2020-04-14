const IO = g => ({
  map: f => IO(() => f(g())),
  fold: f => f(g()),
  toString: () => `IO(${g})`,
})

IO.of = x => IO(() => x)

export default IO
