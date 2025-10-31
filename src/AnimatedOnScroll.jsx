import AnimatedGradient from "./components/AnimatedGradient"
import GradientOnView from "./components/GradientOnView"
import GradientOnViewSecondary from "./components/GradientOnViewSecondary"
import ScrollTo from "./components/lib/ScrollTo"

export default function AnimatedOnScroll() {
  return (
    <>
      <div id="top" className="section-full-height" style={{ justifyContent: "center" }}>
        <ScrollTo target={"#first"}>Scroll to first</ScrollTo>
      </div>
      <div id="first">
        <GradientOnView prevTarget={"#top"} nextTarget={"#second"} />
      </div>
      <div id="second">
        <GradientOnViewSecondary prevTarget={"#first"} />
      </div>
    </>
  )
}
