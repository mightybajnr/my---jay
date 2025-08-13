import {
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8 md:py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div>
        <div className="flex items-center justify-center relative">
          <img className="text-2xl w-12 md:w-20" src="/logo.png" alt="jay crafts logo" />          
          <span className="absolute left-10 md:left-20 font-bold text-xl">JayCraft</span>
        </div>
            <p className="text-gray-400 text-xs md:text-sm">
              Crafting beautiful jewelry since 2010
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-4">
              Learn
            </h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition text-xs md:text-sm"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition text-xs md:text-sm"
                >
                  Workshops
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition text-xs md:text-sm"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-4">
              Shop
            </h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition text-xs md:text-sm"
                >
                  Bead Kits
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition text-xs md:text-sm"
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition text-xs md:text-sm"
                >
                  Supplies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-4">
              Connect
            </h4>
            <div className="flex space-x-3 md:space-x-4 mb-3 md:mb-4">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition text-lg"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition text-lg"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition text-lg"
              >
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </div>
            <p className="text-gray-400 text-xs md:text-sm">
              hello@beadcraft.com
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-800 text-center text-gray-400 text-xs md:text-sm">
          <p>
            &copy; {new Date().getFullYear()} BeadCraft. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
