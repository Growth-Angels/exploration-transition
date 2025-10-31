import { useInView } from "motion/react"
import { useEffect } from "react"

export default function useIsInView(ref, id, options = { amount: 0.9 }) {
  const isInView = useInView(ref, options)

  useEffect(() => {
    if (!ref.current) return

    const event = new CustomEvent("gradient-is-in-view", {
      detail: { visible: isInView, id },
    })
    window.dispatchEvent(event)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, id])

  return { isInView }
}
