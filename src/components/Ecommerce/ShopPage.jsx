import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "./ProductCard";
import CartSidebar from "./CartSidebar";
import SearchFilter from "./SearchFilter";
import Footer from "../Landing/Footer"

const ShopPage = () => {
  // Mock data
  const mockProducts = [
    {
      id: 1,
      name: "Glass Bead Collection",
      description: "Assorted colorful glass beads for jewelry making",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop",
      category: "Glass",
      rating: 4,
      reviews: 24,
    },
    {
      id: 2,
      name: "Wooden Bead Set",
      description: "Natural wooden beads in various sizes",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&auto=format&fit=crop",
      category: "Wood",
      rating: 5,
      reviews: 18,
    },
    {
      id: 3,
      name: "Crystal Beads",
      description: "Premium quality crystal beads",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop",
      category: "Crystal",
      rating: 4,
      reviews: 32,
    },
    {
      id: 4,
      name: "Pearl Bead Strand",
      description: "Elegant freshwater pearls",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1586449480533-27ddc8d1c8d8?w=500&auto=format&fit=crop",
      category: "Pearl",
      rating: 5,
      reviews: 15,
    },
  ];

  const [products] = useState(mockProducts);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Add to cart function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-center relative">
          <img className="text-2xl w-12 md:w-20" src="/logo.png" alt="jay crafts logo" />          
          <span className="absolute left-10 md:left-20 font-bold text-xl">JayCraft</span>
        </div>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 items-center">
              <Link to="/" className="text-white hover:text-yellow-400 transition">
                Home
              </Link>
              <Link               
                to="/login" 
                className="text-white border p-2 rounded-xl hover:text-yellow-400 transition"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="text-blue-800 p-2 rounded-xl border hover:bg-transparent bg-white hover:text-yellow-400 transition"
              >
                Sign Up
              </Link>
              <button
                className="relative p-2 hover:bg-blue-700 rounded-full"
                onClick={() => setShowCart(!showCart)}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                className="relative p-2 hover:bg-blue-700 rounded-full"
                onClick={() => setShowCart(!showCart)}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBarsStaggered} className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-700 py-4 px-6">
            <div className="flex flex-col space-y-4">
              <Link               
                to="/login" 
                className="text-white border p-2 w-16 rounded-xl hover:text-yellow-400 transition"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="text-blue-800 p-2  w-20 rounded-xl border hover:bg-transparent bg-white hover:text-yellow-400 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          categories={["All", ...new Set(products.map((p) => p.category))]}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-700">
              No products found
            </h2>
            <p className="text-gray-500">Try adjusting your search or filter</p>
          </div>
        )}
      </main>

      {/* Shopping Cart Sidebar */}
      <CartSidebar
        showCart={showCart}
        setShowCart={setShowCart}
        cart={cart}
        setCart={setCart}
      />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ShopPage;