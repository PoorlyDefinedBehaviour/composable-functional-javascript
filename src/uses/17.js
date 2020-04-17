import { Left, Right } from "../data/either"

// String ~ [Char]
const Iso = (to, from) => ({
  to,
  from,
})

const chars = Iso(
  s => s.split(""),
  s => s.join("")
)

"hello world" |> chars.to |> chars.from |> console.log

const isNullOrUndefined = x => x === null || x === undefined

// [a] ~ Either null a
const singleton = Iso(
  either =>
    either.fold(
      () => [],
      x => [x]
    ),
  ([x]) => (isNullOrUndefined(x) ? Left(x) : Right(x))
)

const toString = x => x.toString()

const map = f => x => x.map(f)

const filterEither = (either, predicate) =>
  singleton.to(either).filter(predicate) |> singleton.from

filterEither(Right("hello"), x => /h/.test(x))
  |> map(s => s.toUpperCase())
  |> toString
  |> console.log
