import { createBrowserRouter } from "react-router-dom"

import Header from "../parts/Header"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main Route yee</div>
  },
  {
    path: "homepage",
    element: <Header />
  }
])