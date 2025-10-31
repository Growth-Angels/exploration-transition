import AnimatedGradient from "./components/AnimatedGradient"
import AnimatedGradientSecondary from "./components/AnimatedGradientSecondary"

export default function AnimatedWhileInView() {
  return (
    <>
      <div id="first">
        <AnimatedGradient nextTarget={"#second"} />
      </div>
      <div id="second">
        <AnimatedGradientSecondary prevTarget={"#first"} />
      </div>
    </>
  )
}
