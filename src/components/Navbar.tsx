import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (path: string) => {
    navigate(path);
    closeMenu();
  };

  const menuItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/services', label: 'MY SERVICES' },
    { path: '/work-experience', label: 'WORK EXPERIENCE' },
    { path: '/past-work', label: 'PAST WORK' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-3 md:py-4">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="no-underline">
            <img src="/img/logo.jpg" alt="Logo" className="h-6 md:h-8" />
          </Link>
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2 outline-none focus:outline-none"
            aria-label="Toggle menu"
            onFocus={(e) => e.target.blur()}
          >
            <div className="w-8 md:w-14 h-0.5 bg-[#efeeec]"></div>
            <div className="w-8 md:w-14 h-0.5 bg-[#efeeec]"></div>
            <div className="w-8 md:w-14 h-0.5 bg-[#efeeec]"></div>
            <div className="w-8 md:w-14 h-0.5 bg-[#efeeec]"></div>
          </button>
        </div>
      </nav>

      {/* Slide-out Menu */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-1500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          transformOrigin: 'top left',
          transform: isMenuOpen
            ? 'translateX(0) translateY(0) rotate(0deg)'
            : 'translateX(-100%) translateY(-100%) rotate(-45deg)',
        }}
      >
        <div className="w-full h-full bg-[#151513] flex flex-col md:flex-row relative overflow-hidden">
          {/* Left Section - Photo */}
          <div className="hidden md:block flex-1 relative">
            <img
              src="/img/Glenn.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section - Menu Content */}
          <div className="flex-1 flex flex-col justify-between p-6 md:p-12 relative overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-4xl font-light bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity z-10"
              aria-label="Close menu"
            >
              ×
            </button>

            {/* Logo */}
            <div className="mb-8 md:mb-12 flex justify-start">
              <img src="/img/logo.jpg" alt="Logo" className="h-6 md:h-8" />
            </div>

            {/* Menu Items */}
            <div className="flex-1 flex flex-col justify-center">
              <ul className="list-none m-0 p-0 space-y-4 md:space-y-6">
                {menuItems.map((item) => (
                  <li key={item.path} className="m-0">
                    <button
                      onClick={() => handleLinkClick(item.path)}
                      className="text-white bg-transparent border-none cursor-pointer text-left hover:opacity-80 transition-opacity"
                      style={{
                        fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                        fontSize: 'clamp(32px, 5vw, 60px)',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        letterSpacing: '0em',
                        lineHeight: '0.3em',
                        color: '#efeeec'
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media & Contact */}
            <div className="space-y-4 mt-8 md:mt-0">
              <div className="space-y-2">
                <div className="text-white text-sm">Instagram</div>
                <div className="text-white text-sm">LinkedIn</div>
                <div className="text-white text-sm">Spotify</div>
              </div>
              <div className="space-y-2 pt-4">
                <div className="text-white text-sm">+447544179311</div>
                <div className="text-white text-sm">glenn@glennwilmore.co.uk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
