import { NavLink } from "react-router"

export default function Index() {
  return (
    <div className="container">
      <p>Intéractions GA Exploration</p>
      <ul>
        <li>
          <NavLink to="/animated-on-scroll">Animated on scroll</NavLink>
        </li>
      </ul>
    </div>
  )
}
