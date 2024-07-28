import { BrowserRouter, Route, Routes } from "react-router-dom"
import Search from "./pages/Search"
import Dashboard from "./pages/Dashboard"
import LayoutMain from "./Layout/LayoutMain"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<LayoutMain />}>
                <Route element={<Dashboard />} index />
                <Route element={<Search />} path="/search" />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter
