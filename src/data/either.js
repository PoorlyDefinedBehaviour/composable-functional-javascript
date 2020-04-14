/* eslint-disable no-unused-vars */
export const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  chain: f => f(x),
  toString: () => `Right(${x})`,
})

export const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  chain: f => Left(x),
  toString: () => `Left(${x})`,
})

export const fromNullable = x =>
  x === null || x === undefined ? Left(x) : Right(x)
