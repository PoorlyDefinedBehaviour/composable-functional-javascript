import Identity from "../data/identity"

console.log(
  "Identity(x => x + 1).ap(Identity(2))",
  Identity(x => x + 1)
    .ap(Identity(2))
    .toString()
)

console.log(
  "Identity(x => y => x + 1).ap(Identity(2)).ap(Identity(2))",
  Identity(x => y => x + y)
    .ap(Identity(2))
    .ap(Identity(2))
    .toString()
)

console.log(
  "Identity(2).map(x => x + 2) === Identity(x => x + 2).ap(Identity(2))",
  Identity(2)
    .map(x => x + 2)
    .toString() ===
    Identity(x => x + 2)
      .ap(Identity(2))
      .toString()
)

const add = x => y => x + y

const liftA2 = f => fx => fy => fx.map(f).ap(fy)

console.log(
  "liftA2(add, Identity(2), Identity(2)",
  liftA2(add)(Identity(2))(Identity(2)).toString()
)
