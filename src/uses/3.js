import { Right, Left } from "../data/either"

const panic = () => {
  throw new Error("oops")
}

Right(2)
  .map(x => x + 1)
  .map(x => x / 2)
  .fold(panic, console.log)

const findColor = name => {
  const colors = { red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }
  const color = colors[name]
  return color ? Right(color) : Left(null)
}

console.log(
  "findColor",
  findColor("green")
    .map(color => color.slice(1))
    .fold(
      () => "not found",
      color => color.toUpperCase()
    )
)

console.log(
  "findColor",
  findColor("red")
    .map(color => color.slice(1))
    .fold(
      () => "not found",
      color => color.toUpperCase()
    )
)

const fromNullable = x => (x === null || x === undefined ? Left(x) : Right(x))

const findColorV2 = name => {
  const colors = { red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }
  return fromNullable(colors[name])
}

console.log(
  "findColorV2",
  findColorV2("green")
    .map(color => color.slice(1))
    .fold(
      () => "not found",
      color => color.toUpperCase()
    )
)

console.log(
  "findColorV2",
  findColorV2("red")
    .map(color => color.slice(1))
    .fold(
      () => "not found",
      color => color.toUpperCase()
    )
)
