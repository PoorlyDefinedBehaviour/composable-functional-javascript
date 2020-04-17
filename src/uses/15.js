import Task from "data.task"
import { Right } from "../data/either"
import Identity from "../data/identity"

const eitherToTask = either => either.fold(Task.rejected, Task.of)

const identityToEither = identity => identity.fold(Right)

const task = Identity(5) |> identityToEither |> eitherToTask

task.map(x => x * 2).fork(console.error, console.log)
