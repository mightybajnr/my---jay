import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBarsStaggered,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className=" text-white py-4 px-6 flex justify-between items-center ">
        <div className="flex items-center justify-center relative">
          <img className="text-2xl w-12 md:w-20" src="/logo.png" alt="jay crafts logo" />          
          <span className="absolute left-10 md:left-20 font-bold text-xl">JayCraft</span>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#learn"
            style={{
              color: "#ffffff",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffc900")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            Learn
          </a>
          <a
            href="#products"
            style={{
              color: "#ffffff",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffc900")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            Products
          </a>
          <a
            href="#about"
            style={{
              color: "#ffffff",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffc900")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            About
          </a>
          <a
            href="#testimonials"
            style={{
              color: "#ffffff",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffc900")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            Testimonials
          </a>
          <Link
            to="/shopPage"
            style={{
              backgroundColor: "#2563eb",
              color: "#fff",
              padding: "0.5rem 1rem",
              borderRadius: "0.375rem",
              display: "flex",
              alignItems: "center",
              transition: "background-color 0.2s",
              marginLeft: "1rem",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1d4ed8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#2563eb")
            }
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Shop Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon
            icon={mobileMenuOpen ? faTimes : faBarsStaggered}
            className="text-2xl cursor-pointer"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white py-4 px-6 absolute w-full z-40">
          <div className="flex flex-col space-y-4">
            <a
              href="#learn"
              className="hover:text-blue-600 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Learn
            </a>
            <a
              href="#products"
              className="hover:text-blue-600 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#about"
              className="hover:text-blue-600 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="hover:text-blue-600 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <Link
              to="/shopPage"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center justify-center transition mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
