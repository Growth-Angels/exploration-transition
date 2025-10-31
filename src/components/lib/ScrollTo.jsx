import "./ScrollTo.scss"
export default function ScrollTo({ target, children, variant }) {
  return (
    <a href={target} className={`scroll-to scroll-to--${variant || "primary"}`}>
      {children}
    </a>
  )
}
