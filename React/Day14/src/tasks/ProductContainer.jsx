import ProductList from "./ProductList";

function ProductContainer() {

  const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ProductList products={products} />
    </div>
  );
}

export default ProductContainer;