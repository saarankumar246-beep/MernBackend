import { Link } from "react-router-dom";

function Products() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Tablet" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="bg-gray-100 p-4 rounded">
            <Link
              to={`/products/${product.id}`}
              className="text-blue-600 font-semibold"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;