import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-4">
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center md:flex-col md:gap-4">
        <Link to="/" className="text-2xl font-bold text-[#646cff] no-underline">
          Portfolio
        </Link>
        <ul className="flex list-none m-0 p-0 gap-8 md:flex-wrap md:justify-center md:gap-4">
          <li className="m-0">
            <Link to="/" className="text-tx-light no-underline transition-colors hover:text-[#646cff]">
              Home
            </Link>
          </li>
          <li className="m-0">
            <Link to="/about" className="text-tx-light no-underline transition-colors hover:text-[#646cff]">
              About
            </Link>
          </li>
          <li className="m-0">
            <Link to="/services" className="text-tx-light no-underline transition-colors hover:text-[#646cff]">
              My Services
            </Link>
          </li>
          <li className="m-0">
            <Link to="/work-experience" className="text-tx-light no-underline transition-colors hover:text-[#646cff]">
              Work Experience
            </Link>
          </li>
          <li className="m-0">
            <Link to="/past-work" className="text-tx-light no-underline transition-colors hover:text-[#646cff]">
              Past Work
            </Link>
          </li>
          <li className="m-0">
            <Link to="/education" className="text-tx-light no-underline transition-colors hover:text-[#646cff]">
              Education
            </Link>
          </li>
          <li className="m-0">
            <Link to="/contact" className="text-tx-light no-underline transition-colors hover:text-[#646cff]">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
