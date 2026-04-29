import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks = [
    { name: 'Main', path: '/' },
    { name: 'Album', path: '/Album' },
  ];

  // Fungsi pembantu untuk menutup menu mobile
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
      <div className="pointer-events-auto bg-black/80 backdrop-blur-md px-4 py-2">

        <div className="flex items-center justify-center gap-6 mt-1">

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-blue-400 text-xs font-medium transition duration-300"

              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Burger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden mt-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg transition-all duration-300 overflow-hidden pointer-events-auto ${isOpen ? "max-h-64 p-2" : "max-h-0"
          }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={closeMenu}
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 rounded-md"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;