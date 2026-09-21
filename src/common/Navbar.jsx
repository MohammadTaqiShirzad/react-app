import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="z-10 w-11/12 mx-auto sticky top-5 rounded-full bg-blue-950 text-white py-4 px-20 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <img src="/logo.png" alt="Logo" className="size-10 rounded-full" />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="hover:underline ">
              Product
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
