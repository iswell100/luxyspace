import { createBrowserRouter } from "react-router-dom"

import HomePage from "../pages/HomePage"
import Details from "../pages/Details"
import Cart from "../pages/Cart"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/categories/:idc",
    element: <Details />
  },
  {
    path:"/cart",
    element: <Cart />
  }
])