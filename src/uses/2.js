import Identity from "../data/identity"

export const moneyToFloat = str =>
  Identity(str)
    .map(s => s.replace(/%/g, ""))
    .map(s => parseFloat(s), 10)

export const percentToFloat = str =>
  Identity(str.replace(/%/g, ""))
    .map(s => parseFloat(s, 10))
    .map(x => x * 0.01)

export const applyDiscount = price => discount =>
  moneyToFloat(price).map(cost =>
    percentToFloat(discount).map(savings => cost - cost * savings)
  )
