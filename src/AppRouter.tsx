import { BrowserRouter, Route, Routes } from "react-router-dom"
import Search from "./pages/Search"
import Dashboard from "./pages/Dashboard"
import LayoutMain from "./Layout/LayoutMain"
import Library from "./pages/Library"
import DetailArtist from "./pages/DetailArtist"
import DetailAlbum from "./pages/DetailAlbum"
import AllArtist from "./pages/AllArtist"

const AppRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<LayoutMain />}>
                <Route element={<Dashboard />} index />
                <Route element={<AllArtist />} path="/artist" />
                <Route element={<Search />} path="/search" />
                <Route element={<Library />} path="/library" />
                <Route element={<DetailArtist />} path={`/artist/:id`} />
                <Route element={<DetailAlbum />} path={`/album/:id`} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter
