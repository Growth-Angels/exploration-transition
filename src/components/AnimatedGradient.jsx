import Aurora from "./lib/Aurora"
import "./AnimatedGradient.scss"
import useIsInView from "../hooks/useIsInview"
import { useRef } from "react"
import ScrollTo from "./lib/ScrollTo"
export default function AnimatedGradient({ prevTarget, nextTarget }) {
  const ref = useRef(null)
  const { isInView: _ } = useIsInView(ref, "gradient-is-in-view-1")
  return (
    <div ref={ref} className="section-full-height animated-gradient" data-theme="dark">
      <div className="container">
        <h1>Animated gradient</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni et minima laborum magnam tempora rerum quibusdam, numquam
          distinctio, perspiciatis tenetur possimus delectus deleniti sed iure quis corporis temporibus nulla sunt?
        </p>
        {prevTarget && <ScrollTo target={prevTarget}>Scroll to previous</ScrollTo>}
        {nextTarget && <ScrollTo target={nextTarget}>Scroll to next</ScrollTo>}
      </div>
      <Aurora colorStops={["#35D6BE", "#7A22AC", "#002898"]} blend={0.3} amplitude={1} speed={0.8} />
    </div>
  )
}
