import "./AnimatedGradient.scss"
import DarkVeil from "./lib/DarkVeil"
import ScrollTo from "./lib/ScrollTo"
export default function AnimatedGradientSecondary({ prevTarget, nextTarget }) {
  return (
    <div className="section-full-height animated-gradient animated-gradient--secondary" data-theme="dark">
      <div className="container">
        <h1>Animated gradient</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni et minima laborum magnam tempora rerum quibusdam, numquam
          distinctio, perspiciatis tenetur possimus delectus deleniti sed iure quis corporis temporibus nulla sunt?
        </p>
        {prevTarget && <ScrollTo target={prevTarget}>Scroll to previous</ScrollTo>}
        {nextTarget && <ScrollTo target={nextTarget}>Scroll to next</ScrollTo>}
      </div>
      <div className="aurora-container">
        <DarkVeil warpAmount={1.6} color="#35D6BE" speed={0.6} />
      </div>
      <div
        className="aurora-container"
        style={{
          mixBlendMode: "multiply",
        }}
      >
        <DarkVeil warpAmount={0} color="#0022ffff" speed={0.6} />
      </div>
      <div
        className="aurora-container"
        style={{
          mixBlendMode: "multiply",
        }}
      >
        <DarkVeil warpAmount={0.3} color="#0022ffff" speed={0.6} />
      </div>
      <div className="aurora-container">
        <DarkVeil warpAmount={0} color="#070921" speed={0.6} />
      </div>
    </div>
  )
}
