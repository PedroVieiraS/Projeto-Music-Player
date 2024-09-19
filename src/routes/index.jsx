import { Routes, Route } from "react-router-dom"

import {DefaultLayout} from "../layout/DefaultLayout"
import {Home} from "../pages/Home"
import {Favorites} from "../pages/Favorites"
import {NotFound} from "../pages/NotFound"
import { Api } from "../pages/api"
import { PegarMusica } from "../pages/PegarMusica"



export function Routers() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        
        <Route path="*" element={<NotFound />} />
        <Route path="/api" element={<Api />} />
        <Route path="/pegarmusica" element={<PegarMusica />} />
      </Route>
    </Routes>
  );
}
