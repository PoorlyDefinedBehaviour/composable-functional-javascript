import fs from "fs"
import { Left, Right } from "../data/either"

const tryCatch = f => {
  try {
    return Right(f())
  } catch (error) {
    return Left(error)
  }
}

const getPort = () =>
  tryCatch(() => fs.readFileSync("file.txt"))
    .chain(content => tryCatch(() => JSON.parse(content)))
    .fold(
      () => 3000,
      data => data.port
    )

console.log("getPort", getPort())
