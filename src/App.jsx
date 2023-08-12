import { Route, Routes } from "react-router-dom"

import { NavBar } from "./components/navBar/navBar"
import { HomePage } from "./pages/homePage/homePage"
import { DeptPage } from "./pages/deptPage/deptPage"
import { ProductsPage } from "./pages/productPage/productsPage"
import { IndividualCategoryPage } from "./pages/individualCategoryPage/individualCategoryPage"

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dept" element={<DeptPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/dept/:deptname" element={<IndividualCategoryPage />} />
      </Routes>
    </div>
  )
}

export default App
