import { List } from "immutable-ext"

console.log(
  List.of(x => y => `${x}-${y}`)
    .ap(List(["teeshirt", "sweater"]))
    .ap(List(["large", "medium", "small"]))
)
