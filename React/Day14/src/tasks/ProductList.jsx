function ProductList({ products }) {
  return (
    <div style={{display:"flex", gap:"20px"}}>
      {products.map((product) => (
        <div 
          key={product.id} 
          style={{
            border:"1px solid #ccc",
            padding:"15px",
            width:"150px",
            borderRadius:"8px"
          }}
        >
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;