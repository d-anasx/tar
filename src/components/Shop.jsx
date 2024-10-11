import { useSelector } from "react-redux";
import Product from "./Product";

const Shop = () => {
  const products = useSelector((state) => state.shop.products);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Shop</h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">No products available. Add some products to get started!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;