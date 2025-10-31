import { NavLink, Outlet } from "react-router"

export default function MainLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Animated on scroll</NavLink>
          <NavLink to="/animated-while-in-view">Animated while in view</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
