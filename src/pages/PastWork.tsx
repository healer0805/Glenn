import LeftImageCarousel from "../components/LeftImageCarousel";
import RightImageCarousel from "../components/RightImageCarousel";
import useImageHover from "../hooks/useImageHover";
import { pastWorkData } from "../data/pastWorkData";
import ProjectDescription from "../components/ProjectDescription";

const PastWork = () => {
  const { hoverHandlers, initialStyle } = useImageHover();
  const { hero, imageSections } = pastWorkData;
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={hero.backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            zIndex: 0
          }}
        />
        
        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex-[2] flex flex-col justify-between p-6 md:p-8 lg:p-12">
            {/* Headline */}
            <div>
              <h1 
                className="text-white mb-4 md:mb-6 font-inter-display-regular text-left"
                style={{
                  animation: 'fadeInUp 1s ease-out',
                }}
              >
                {hero.title.line1}<br />
                {hero.title.line2}
              </h1>
              
              {/* Divider Line */}
              <div className="w-full h-px bg-white mb-4 md:mb-6" style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}></div>
              
              {/* Body Text */}
              <p 
                className="text-white text-sm md:text-base leading-relaxed max-w-full md:max-w-[600px] font-inter-display-semibold"
                style={{
                  animation: 'fadeInUp 1s ease-out 0.4s both',
                }}
              >
                {hero.description}
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-2 md:gap-3 flex-wrap mt-6 md:mt-8">
              {hero.buttons.map((button, index) => (
                <button key={index} className={`${index === 0 ? "bg-white text-[#2a2a2a] px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 hover:opacity-80 transition-opacity" : "bg-transparent text-white border border-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:opacity-80 transition-opacity"} font-inter-display-semibold`}
                >
                  {index === 0 && (
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-3 md:h-3">
                        <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  <span>{button.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col justify-between p-6 md:p-8 lg:p-12">
            {/* Headline */}
            <h2 
              className="text-white font-inter-display-regular text-left"
              style={{
                animation: 'fadeInRight 1s ease-out 0.6s both',
              }}
            >
              {hero.titleRight.line1}<br />
              {hero.titleRight.line2}
            </h2>
            
            {/* Scroll Indicator */}
            <div className="flex justify-end">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
                <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
      {imageSections.map((section, index) => (
        <section key={index} className={`w-full relative mx-auto bg-[#efeeec] ${index === 0 ? 'py-16' : ''}`}>
          {/* Background Image */}
          <div className="max-w-[1400px] mx-auto">
            <img
              src={section.backgroundImage}
              alt=""
              className="w-full object-cover h-[400px] md:h-[500px] lg:h-[640px] rounded-lg md:rounded-xl transition-all duration-700 cursor-pointer"
              style={{
                zIndex: 0,
                ...initialStyle,
              }}
              {...hoverHandlers}
            />
            <div className="w-full py-4">
              <div className="relative w-full overflow-hidden flex flex-col">
                {/* Carousel Row */}
                <div className="w-full">
                  {section.carousel.direction === 'left' ? (
                    <LeftImageCarousel 
                      images={section.carousel.images} 
                      imagePath={section.carousel.imagePath}
                      direction="left"
                      height="100%"
                    />
                  ) : (
                    <RightImageCarousel 
                      images={section.carousel.images} 
                      imagePath={section.carousel.imagePath}
                      direction="right"
                      height="100%"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="mx-auto px-4 md:px-6 lg:px-8 relative py-12 md:py-16 lg:py-24" >
              <ProjectDescription
                title={section.projectDescription.title}
                paragraphs={section.projectDescription.paragraphs}
                noSectionWrapper={true}
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default PastWork;

