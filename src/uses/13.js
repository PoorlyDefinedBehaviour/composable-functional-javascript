import Task from "data.task"

const Db = {
  find: id =>
    new Task((reject, resolve) =>
      setTimeout(() => resolve({ id, title: `Project ${id}` }), 100)
    ),
}

const reportHeader = projectA => projectB =>
  `Report ${projectA.title} compared to ${projectB.title}`

Task.of(reportHeader)
  .ap(Db.find(2))
  .ap(Db.find(8))
  .fork(() => console.log("oops"), console.log)

const liftA2 = f => fx => fy => fx.map(f).ap(fy)

liftA2(reportHeader)(Db.find(10))(Db.find(20)).fork(
  () => console.log("oops"),
  console.log
)
