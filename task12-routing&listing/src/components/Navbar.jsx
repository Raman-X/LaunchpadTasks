import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-22 py-8 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-blue-400">Routing & Listing</h1>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-blue-500 hover:text-blue-600">
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
