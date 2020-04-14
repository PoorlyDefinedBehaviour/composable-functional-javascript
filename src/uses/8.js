import fs from "fs"
import Task from "data.task"

Task.of(1)
  .map(x => x + 1)
  .fork(
    e => console.log("error", e),
    x => console.log("success", x)
  )

Task.rejected("oops")
  .map(x => x + 1)
  .fork(
    e => console.log("error", e),
    x => console.log("success", x)
  )

const readFile = filePath => encoding =>
  new Task((reject, resolve) =>
    fs.readFile(filePath, encoding, (error, result) =>
      error ? reject(error) : resolve(result)
    )
  )

const writeFile = filePath => content =>
  new Task((reject, resolve) =>
    // eslint-disable-next-line no-unused-vars
    fs.writeFile(filePath, content, (error, _) =>
      error ? reject(error) : resolve()
    )
  )

readFile("file.txt")("utf8")
  .map(content => content.replace(/a/g, "b"))
  .chain(writeFile("file2.txt"))
  .fork(
    () => console.log("app error"),
    () => console.log("app success")
  )
