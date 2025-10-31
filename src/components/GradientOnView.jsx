import Gradient from "../assets/gradient-1.svg"
import { cubicBezier, motion as Motion } from "motion/react"
import { useRef } from "react"
import "./GradientOnView.scss"
import ScrollTo from "./lib/ScrollTo"
import useIsInView from "../hooks/useIsInview"

const easing = cubicBezier(0.33, 1, 0.68, 1)
export default function GradientOnView({ prevTarget, nextTarget }) {
  const ref = useRef(null)
  const { isInView } = useIsInView(ref, "gradient-is-in-view-1")

  return (
    <div ref={ref} className="gradient-on-view section-full-height" data-theme="dark">
      <Motion.div
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : "-100%",
        }}
        initial={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.8, ease: easing }}
        className="animated-bg"
      >
        <img src={Gradient} alt="Gradient" />
      </Motion.div>
      <div className="container">
        <h1
          className="font-heading"
          style={{
            ...(isInView && {
              color: "white",
            }),
          }}
        >
          Primary
        </h1>
        <p
          style={{
            ...(isInView && {
              color: "white",
            }),
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit omnis neque qui debitis cumque, laborum optio autem nulla
          sapiente sint recusandae ut quas aspernatur quibusdam illo ratione, corporis eius! Repellendus.
        </p>
        {prevTarget && (
          <ScrollTo variant={"secondary"} target={prevTarget}>
            Scroll to previous
          </ScrollTo>
        )}
        {nextTarget && <ScrollTo target={nextTarget}>Scroll to next</ScrollTo>}
      </div>
    </div>
  )
}
