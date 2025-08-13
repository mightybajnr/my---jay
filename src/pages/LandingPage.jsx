import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";
import {
  faShoppingCart,
  faGem,
  faVideo,
  faStar,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import HeroSection from "../components/Landing/HeroSection";

const LandingPage = () => {
  // Sample data
  const tutorials = [
    {
      id: 1,
      title: "Basic Beading Techniques",
      description: "Learn fundamental stitches and patterns",
      level: "Beginner",
      thumbnail: "",
    },
    {
      id: 2,
      title: "Advanced Jewelry Making",
      description: "Create professional-quality jewelry pieces",
      level: "Advanced",
      thumbnail: "",
    },
    {
      id: 3,
      title: "Bead Embroidery",
      description: "Incorporate beads into fabric designs",
      level: "Intermediate",
      thumbnail: "",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Beginner's Bead Kit",
      price: 29.99,
      image: "",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Premium Crystal Collection",
      price: 49.99,
      image: "",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Deluxe Beading Tools",
      price: 39.99,
      image: "",
      rating: 5.0,
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "The tutorials made beading so accessible! I've created pieces I'm truly proud of.",
      author: "Sarah K.",
    },
    {
      id: 2,
      quote:
        "The quality of beads from this shop is unmatched. Worth every penny!",
      author: "Michael T.",
    },
    {
      id: 3,
      quote: "From complete beginner to selling my creations in just 3 months!",
      author: "Lisa M.",
    },
  ];

  return (
    <div className="font-sans text-gray-900">
      <div
        style={{ backgroundColor: "#15105a" }}
        className=" sticky top-0 z-50"
      >
        <div className="lg:container lg:mx-auto lg:max-w-7xl lg:px-4 md:mr-0 md:ml-0 text-xl">
          <Navbar />
        </div>
      </div>
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <section id="about" className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Beading Philosophy
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
              At BeadCraft, we combine traditional techniques with modern
              designs to help you create jewelry that stands out.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            <div className="text-center p-4 md:p-6 rounded-lg bg-gray-50 border border-gray-200">
              <div className="text-blue-600 text-3xl md:text-4xl mb-3 md:mb-4">
                <FontAwesomeIcon icon={faVideo} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                Expert Tutorials
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                100+ step-by-step guides for all levels
              </p>
            </div>
            <div className="text-center p-4 md:p-6 rounded-lg bg-gray-50 border border-gray-200">
              <div className="text-yellow-500 text-3xl md:text-4xl mb-3 md:mb-4">
                <FontAwesomeIcon icon={faGem} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                Quality Materials
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Only the finest beads and supplies
              </p>
            </div>
            <div className="text-center p-4 md:p-6 rounded-lg bg-gray-50 border border-gray-200">
              <div className="text-black text-3xl md:text-4xl mb-3 md:mb-4">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                Creative Community
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Join thousands of passionate crafters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="learn" className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Learn Beading Techniques
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
              Free tutorials to help you master the craft
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border border-gray-200"
              >
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 md:p-6">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm mb-2 md:mb-3">
                    {tutorial.level}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                    {tutorial.description}
                  </p>
                  <a
                    href={`/tutorials/${tutorial.id}`}
                    className="text-blue-600 font-medium flex items-center hover:text-blue-800 text-sm md:text-base"
                  >
                    Watch Tutorial{" "}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="ml-2 text-xs md:text-sm"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-12">
            <a
              href="/tutorials"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 md:px-6 md:py-3 rounded-md font-medium transition text-sm md:text-base"
            >
              View All Tutorials
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Premium Beading Supplies
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
              Everything you need to bring your designs to life
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border border-gray-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-1 md:mb-2">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {product.name}
                    </h3>
                    <span className="text-base md:text-lg font-bold">
                      ${product.price}
                    </span>
                  </div>
                  <div className="flex items-center mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className={`text-xs md:text-sm ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-gray-600 text-xs md:text-sm ml-1 md:ml-2">
                      ({product.rating})
                    </span>
                  </div>
                  <Link                  
                    to={`/shopPage/${product.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md font-medium transition text-sm md:text-base"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-12">
            <Link 
              to="/shopPage"
              className="inline-block bg-black hover:bg-gray-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium transition text-sm md:text-base"
            >
              Visit Our Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-12 md:py-16 px-6 bg-blue-800 text-white"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What Our Community Says
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white bg-opacity-10 p-4 md:p-6 rounded-lg border border-blue-700"
              >
                <div className="mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={`testimonial-${testimonial.id}-star-${i}`} // Add this
                      icon={faStar}
                      className="text-xs md:text-sm text-yellow-400"
                    />
                  ))}
                </div>
                <p className="italic mb-3 md:mb-4 text-sm md:text-base">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-sm md:text-base">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Ready to Start Creating?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            Join our community of bead artists today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/shopPage"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 md:px-8 md:py-4 rounded-md font-medium text-sm md:text-lg transition flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2 md:mr-3" />
              Get Your Starter Kit
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
