import Gradient from "../assets/gradient-secondary.png"
import { cubicBezier, motion as Motion } from "motion/react"
import { useRef } from "react"
import "./GradientOnView.scss"
import ScrollTo from "./lib/ScrollTo"
import useIsInView from "../hooks/useIsInview"

const easing = cubicBezier(0.16, 1, 0.3, 1)
export default function GradientOnViewSecondary({ prevTarget, nextTarget }) {
  const ref = useRef(null)
  const { isInView } = useIsInView(ref, "gradient-is-in-view-2")

  return (
    <div
      ref={ref}
      className="gradient-on-view section-full-height gradient-on-view--secondary"
      data-theme="dark"
      style={{
        ...(isInView && { backgroundColor: "#070921" }),
      }}
    >
      <Motion.div
        animate={{
          opacity: isInView ? 1 : 0,
          /*           y: isInView ? 0 : "98%", */
          height: isInView ? "100%" : "10%",
        }}
        initial={{ opacity: 0, /* y: "98%", */ height: "10%", transformOrigin: "bottom" }}
        transition={{ duration: 1.4, ease: easing }}
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
          Secondary
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
        {prevTarget && <ScrollTo target={prevTarget}>Scroll to previous</ScrollTo>}
        {nextTarget && <ScrollTo target={nextTarget}>Scroll to next</ScrollTo>}
      </div>
    </div>
  )
}
