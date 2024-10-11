import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Shop from "./components/Shop"
import BMICalc from "./components/BMICalc"
import ProductForm from "./components/ProductForm"
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/bmi" element={<BMICalc />} />
        <Route path="/productForm" element={<ProductForm />} />
      </Routes>
    </>
  )
}

export default App
