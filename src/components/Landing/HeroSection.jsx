import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-800 to-black text-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Master the Art of Beading
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Create stunning jewelry with our premium beads and expert guidance
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#learn"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-medium transition text-sm sm:text-base"
            >
              Start Learning
            </a>
            <Link 
              to="/shoppage"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-6 py-3 rounded-md font-medium transition text-sm sm:text-base"
            >
              Shop Kits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default HeroSection 
