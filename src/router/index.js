import { createBrowserRouter } from "react-router-dom"

import Header from "../parts/Header"
import HomePage from "../pages/HomePage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "homepage",
    element: <Header />
  }
])