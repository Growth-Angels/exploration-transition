import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.scss"
import { BrowserRouter, Routes, Route } from "react-router"
import AnimatedOnScroll from "./AnimatedOnScroll.jsx"
import Index from "./Index.jsx"
import MainLayout from "./MainLayout.jsx"
import AnimatedWhileInView from "./AnimatedWhileInView.jsx"
import ThemeWatcher from "./components/ThemeWatcher.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeWatcher />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<AnimatedOnScroll />} />
          <Route path="/animated-while-in-view" element={<AnimatedWhileInView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
