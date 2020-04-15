const add = x => y => x + y

const inc = add(1)

console.log("inc(2)", inc(2))

const mod = x => y => y % x

const isOdd = mod(2)

const filter = pred => xs => xs.filter(pred)

const map = pred => xs => xs.map(pred)

const getAllOdds = filter(isOdd)

console.log("getAllOdds([1, 2, 3, 4, 5])", getAllOdds([1, 2, 3, 4, 5]))

const replace = regex => replacement => string =>
  string.replace(regex, replacement)

const censor = replace(/[aeiou]/g)("*")

const censorAll = map(censor)

console.log("censorAll(['hello','world'])", censorAll(["hello", "world"]))
