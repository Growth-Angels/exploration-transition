import AnimatedGradient from "./components/AnimatedGradient"
import GradientOnView from "./components/GradientOnView"
import "./index.scss"

function App() {
  return (
    <>
      <div
        style={{
          height: "100vh",
        }}
      ></div>
      <GradientOnView />
      <AnimatedGradient />
    </>
  )
}

export default App
