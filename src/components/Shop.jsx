import { useSelector, useDispatch } from "react-redux"
import Product from "./Product"

const Shop = () => {

    const products = useSelector(state => state.shop.products)
    const dispatch = useDispatch()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Shop</h1>
      <div className="flex flex-wrap justify-center">
        {products.map(product => <Product key={product.id} product={product} className="m-4" />)}
      </div>
    </div>
  )
}

export default Shop

