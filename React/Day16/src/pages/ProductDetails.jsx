import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Product Details</h1>

      <p className="text-xl mb-6">
        Product ID: <span className="font-bold">{id}</span>
      </p>

      <button
        onClick={() => navigate("/products")}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Back
      </button>
    </div>
  );
}

export default ProductDetails;