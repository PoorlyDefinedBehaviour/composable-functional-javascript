import { List } from "immutable-ext"
import Sum from "../data/sum"

console.log(
  "List.of(Sum(1), Sum(2), Sum(3)).fold(Sum.empty())",
  List.of(Sum(1), Sum(2), Sum(3)).fold(Sum.empty()).toString()
)

console.log(
  "List.of(1,2,3).map(Sum).fold(Sum.empty())",
  List.of(1, 2, 3).map(Sum).fold(Sum.empty()).toString()
)

console.log(
  "List.of(1,2,3).foldMap(Sum, Sum.empty())",
  List.of(1, 2, 3).foldMap(Sum, Sum.empty()).toString()
)
