import { useEffect } from "react"
import { useLocation } from "react-router"

export default function ThemeWatcher() {
  const location = useLocation()

  useEffect(() => {
    // On garde en mémoire les sections actuellement visibles
    const visibleSections = new Set()

    const handleGradientInView = (e) => {
      const { visible, id } = e.detail

      // Chaque composant doit avoir un id unique
      if (!id) return

      if (visible) {
        visibleSections.add(id)
      } else {
        visibleSections.delete(id)
      }

      const hasVisible = visibleSections.size > 0
      document.documentElement.classList.toggle("theme-dark", hasVisible)
    }

    window.addEventListener("gradient-is-in-view", handleGradientInView)

    return () => {
      window.removeEventListener("gradient-is-in-view", handleGradientInView)
    }
  }, [location])

  return null
}
