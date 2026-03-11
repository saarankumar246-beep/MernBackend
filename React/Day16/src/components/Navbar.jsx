import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black text-white p-4 flex gap-6">
      <Link to="/dashboard">Home</Link>
      <Link to="/dashboard/profile">Profile</Link>
      <Link to="/dashboard/products">Products</Link>
    </div>
  );
}

export default Navbar;