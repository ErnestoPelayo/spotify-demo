import { BrowserRouter, Route, Routes } from "react-router-dom"
import Search from "./pages/Search"
import Dashboard from "./pages/Dashboard"
import LayoutMain from "./Layout/LayoutMain"
import Library from "./pages/Library"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<LayoutMain />}>
                <Route element={<Dashboard />} index />
                <Route element={<Search />} path="/search" />
                <Route element={<Library />} path="/library" />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter
