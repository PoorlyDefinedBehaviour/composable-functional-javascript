import IO from "../data/io"

IO.of("64")
  .map(s => s.trim())
  .map(Number)
  .map(x => x + 1)
  .map(String.fromCharCode)
  .fold(console.log)
