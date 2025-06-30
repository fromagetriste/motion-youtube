const Navbar = () => {
  return (
    <nav className="w-[90%] z-50 backdrop-blur-md bg-white/5 border-b border-white/20 shadow-sm rounded-md mx-auto mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Logo or Brand */}
          <div className="flex-shrink-0 text-white font-bold text-xl">
            Motion Tutorial
          </div>

          {/* Right Side: Navigation Links */}
          <div className="flex space-x-6 text-white font-medium">
            <a href="#" className="hover:text-gray-300 transition">
              Home
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              About
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Services
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
