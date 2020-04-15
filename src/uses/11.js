import { Either } from "../data/either"

const liftA2 = f => fx => fy => fx.map(f).ap(fy)

const $ = selector => Either.of({ selector, height: 10 })

const getScreenSize = screen => head => foot =>
  screen - (head.height + foot.height)

console.log(
  "Either.of(getScreenSize(800)).ap($('header')).ap($('footer'))",
  Either.of(getScreenSize(800)).ap($("header")).ap($("footer")).toString()
)

console.log(
  "liftA2(getScreenSize(800), $('header'), $('footer'))",
  liftA2(getScreenSize(800))($("header"))($("footer")).toString()
)
