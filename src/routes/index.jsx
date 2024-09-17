import { Routes, Route } from "react-router-dom"

import {DefaultLayout} from "../layout/DefaultLayout"
 
import {Home} from "../pages/Home"
import {Favorites} from "../pages/Favorites"
import {NotFound} from "../pages/NotFound"

export function Routers() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
