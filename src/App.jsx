import { Route, Routes } from "react-router-dom"

import { NavBar } from "./components/navBar/navBar"
import { HomePage } from "./pages/homePage/homePage"
import { DeptPage } from "./pages/descPage/descPage"
import { ProductsPage } from "./pages/productPage/productsPage"

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dept" element={<DeptPage />} />
        <Route path="/product" element={<ProductsPage />} />
      </Routes>
    </div>
  )
}

export default App
