import Task from "data.task"
import { Map } from "immutable-ext"

const httpGet = path => Task.of(`${path} result`)

Map({ home: "/", about: "/about_us", blog: "blog" })
  .traverse(Task.of, httpGet)
  .fork(console.error, console.log)
