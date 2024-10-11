import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="px-4 py-2 text-lg font-semibold text-white hover:text-blue-300 rounded-md"
  >
    {children}
  </Link>
);

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg flex justify-between items-center py-4 px-5">
      <Link
        to="/"
        className="text-xl font-bold text-white hover:text-blue-300"
      >
        Shop
      </Link>
      <div className="flex items-center">
        <NavLink to="/bmi">BMI Calculator</NavLink>
        <NavLink to="/productForm">Product Form</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;