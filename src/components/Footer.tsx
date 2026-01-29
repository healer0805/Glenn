import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { num: '01', name: 'Home', path: '/' },
    { num: '02', name: 'About', path: '/about' },
    { num: '03', name: 'My Services', path: '/services' },
    { num: '04', name: 'Work Experience', path: '/work-experience' },
    { num: '05', name: 'Past Work', path: '/past-work' },
    { num: '06', name: 'Education', path: '/education' },
    { num: '07', name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-bg-dark mt-auto bg-[#efeeec] p-4">
      <div className="bg-[#000] rounded-2xl p-4">
        {/* Background Image Section */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-2xl opacity-19">
        <img 
          src="/img/footer-bg.jpg" 
          alt="Footer background" 
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center top' }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="bg-bg-dark">
        <div className="mx-auto px-[2rem] py-16">
          <div className="grid grid-cols-3 gap-12">
            {/* Left Column - Contact Information */}
            <div className="flex flex-col">
              <h3 
                className="text-tx-light"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: '36px',
                  fontWeight: 400,
                }}
              >
                Stay connected®
              </h3>
              
              <a 
                href="mailto:glenn@glennwilmore.co.uk"
                className="text-tx-light mb-6 hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: '60px',
                  fontWeight: 500,
                  lineHeight: '1.1em',
                  textDecoration: 'none',
                  color: '#efeeec',
                }}
              >
                glenn@glennwilmore.co.uk
              </a>
              
              <p 
                className="text-tx-light mb-8"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '1.5em',
                }}
              >
                Crafted with creativity and passion. Let's stay connected reach out anytime!
              </p>
              
              {/* Contact Now Button */}
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-white text-bg-dark pl-1 pr-3 py-1 rounded-full border border-white hover:opacity-90 transition-opacity w-fit"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center border border-bg-dark bg-[#151513]">
                  <span className="text-[#efeeec] text-xl">→</span>
                </div>
                <span className="text-[#151513] font-[sans-serif] font-bold">Contact Now</span>
              </Link>
            </div>
              <div className="flex flex-col"></div>
            {/* Right Column - Navigation Menu */}
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <div key={index}>
                  <Link 
                    to={item.path}
                    className="flex items-center justify-between py-3 text-tx-light hover:opacity-80 transition-opacity"
                    style={{
                      fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      textDecoration: 'none',
                      color: '#efeeec',
                    }}
                  >
                    <span>
                      {item.num}/ {item.name}
                    </span>
                    <span className="text-tx-light">→</span>
                  </Link>
                  {index < navItems.length - 1 && (
                    <div className="border-b border-tx-light opacity-100"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Strip - Copyright and Back to Top */}
        <div className="border-t border-tx-light border-opacity-30">
          <div className="max-w-[1400px] mx-auto px-[2rem] py-6 flex items-center justify-between">
            <p 
              className="text-tx-light m-0"
              style={{
                fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              Copyright © Nickolas Anthony Kossup {new Date().getFullYear()}
            </p>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-tx-light hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer"
              style={{
                fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              <span>↻</span>
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
