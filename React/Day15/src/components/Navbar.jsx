import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-center gap-10 text-lg font-medium">

        <Link 
        to="/" 
        className="hover:text-yellow-400 transition">
        Home
        </Link>

        <Link 
        to="/about" 
        className="hover:text-yellow-400 transition">
        About
        </Link>

        <Link 
        to="/contact" 
        className="hover:text-yellow-400 transition">
        Contact
        </Link>

      </div>
    </nav>
  )
}

export default Navbar