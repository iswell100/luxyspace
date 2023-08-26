import { createBrowserRouter } from "react-router-dom"

import HomePage from "../pages/HomePage"
import Details from "../pages/Details"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/categories/:idc",
    element: <Details />
  }
])