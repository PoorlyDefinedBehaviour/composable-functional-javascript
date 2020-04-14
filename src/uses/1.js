import Identity from "../data/identity"

const nextCharForNumberString = str =>
  Identity(str)
    .map(s => s.trim())
    .map(Number)
    .map(x => x + 1)
    .map(String.fromCharCode)

export default nextCharForNumberString
