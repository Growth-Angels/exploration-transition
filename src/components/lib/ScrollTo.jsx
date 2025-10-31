import "./ScrollTo.scss"

export default function ScrollTo({ target, children, variant }) {
  const handleClick = (e) => {
    e.preventDefault()
    const el = document.querySelector(target)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button onClick={handleClick} className={`scroll-to scroll-to--${variant || "primary"}`}>
      {children}
    </button>
  )
}
