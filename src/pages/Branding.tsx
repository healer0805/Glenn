import { useEffect, useRef } from 'react';
import LeftImageCarousel from '../components/LeftImageCarousel';
import ProjectDescription from '../components/ProjectDescription';
import useImageHover from '../hooks/useImageHover';
import PillButtons from '../components/PillButtons';
import { brandingData } from '../data/brandingData';

const Branding = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { hoverHandlers, initialStyle } = useImageHover();
  const { hero, imageSections } = brandingData;

  useEffect(() => {
    // Animate title
    if (titleRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).style.opacity = '1';
              (entry.target as HTMLElement).style.transform = 'translateY(0)';
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(titleRef.current);
    }

    // Animate paragraph
    if (paragraphRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                (entry.target as HTMLElement).style.opacity = '1';
                (entry.target as HTMLElement).style.transform = 'translateY(0)';
              }, 200);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(paragraphRef.current);
    }

    // Animate card
    if (cardRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                (entry.target as HTMLElement).style.opacity = '1';
                (entry.target as HTMLElement).style.transform = 'translateY(0) rotate(0deg)';
              }, 600);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(cardRef.current);
    }
  }, []);

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
                ref={titleRef}
                className="text-white mb-4 md:mb-6 font-inter-display-xl-bold text-left"
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: 'opacity 1s ease-out, transform 1s ease-out',
                }}
              >
                <span className="block">{hero.title.line1}</span>
                <span className="block">{hero.title.line2}</span>
              </h1>
              
              {/* Body Text */}
              <p 
                ref={paragraphRef}
                className="text-white text-sm md:text-base leading-relaxed max-w-full md:max-w-[600px] mb-6 md:mb-8 font-inter-display-base"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s',
                }}
              >
                {hero.description}
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <PillButtons
              primaryButton={hero.buttons.primary}
              secondaryButtons={hero.buttons.secondary}
              variant="light"
              withAnimation={true}
            />
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col justify-end items-end p-6 md:p-8 lg:p-12">
            {/* Card/Booklet */}
            <div
              ref={cardRef}
              className="relative w-[280px] md:w-[320px] lg:w-[360px] h-[360px] md:h-[400px] lg:h-[440px] bg-[#2a3441] rounded-lg shadow-2xl"
              style={{
                opacity: 0,
                transform: 'translateY(50px) rotate(-5deg)',
                transition: 'opacity 1s ease-out 0.6s, transform 1s ease-out 0.6s',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Logo Content on Card */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <p 
                  className="text-[#d4af37] mb-2 font-playfair-italic"
                >
                  {hero.card.text1}
                </p>
                <h2 
                  className="text-[#d4af37] mb-4 font-playfair-large"
                >
                  {hero.card.text2}
                </h2>
                <p 
                  className="text-[#d4af37] font-inter-display-xs-uppercase"
                >
                  {hero.card.text3}
                </p>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white animate-bounce"
              >
                <path 
                  d="M7 10L12 15L17 10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {imageSections.map((section, index) => (
        <section key={index} className="w-full relative mx-auto bg-[#efeeec]">
          {/* Background Image */}
          <div className="max-w-[1400px] mx-auto pt-12">
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
                  <LeftImageCarousel 
                    images={section.carousel.images} 
                    imagePath={section.carousel.imagePath}
                    direction="left"
                    height="100%"
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto px-4 md:px-6 lg:px-8 relative py-12 md:py-16 lg:py-24" >
              <ProjectDescription
                title={section.projectDescription.title}
                paragraphs={section.projectDescription.paragraphs}
                noSectionWrapper={section.projectDescription.noSectionWrapper}
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Branding;

