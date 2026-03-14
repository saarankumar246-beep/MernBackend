import { useState } from "react";

function Product() {
  const [product, setProduct] = useState({
    name: "Laptop",
    price: 50000,
    stock: 5
  });

  const updateStock = () => {
    setProduct({ ...product, stock: product.stock + 1 });
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <h2>{product.price}</h2>
      <h2>{product.stock}</h2>

      <button onClick={updateStock}>
        Add Stock
      </button>
    </div>
  );
}

export default Product 