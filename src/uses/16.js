import Task from "data.task"
import { Left, Right } from "../data/either"

const fake = id => ({ id, name: `john doe ${id}`, best_friend_id: id + 1 })

const Db = {
  find: id =>
    (id > 2 ? id |> fake |> Right : "user not found" |> Left) |> Task.of,
}

const eitherToTask = either => either.fold(Task.rejected, Task.of)

Db.find(3)
  .chain(eitherToTask)
  .chain(user => Db.find(user.best_friend_id))
  .chain(eitherToTask)
  .fork(console.error, console.log)

Db.find(1)
  .chain(eitherToTask)
  .chain(user => Db.find(user.best_friend_id))
  .chain(eitherToTask)
  .fork(console.error, console.log)
