import { useEffect, useRef } from 'react';
import GamingCarousel from '../components/GamingCarousel';
import LeftImageCarousel from '../components/LeftImageCarousel';
import StatsSection from '../components/StatsSection';
import ProjectDescription from '../components/ProjectDescription';
import useImageHover from '../hooks/useImageHover';
import PillButtons from '../components/PillButtons';
import { gamingData } from '../data/gamingData';

const Gaming = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const { hoverHandlers, initialStyle } = useImageHover();
  const { hero, videoCarousel, stats, video2, imageSections, customSections } = gamingData;

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

    // Animate phone
    if (phoneRef.current) {
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
      observer.observe(phoneRef.current);
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
                <span className="block">{hero.title.line3}</span>
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
        </div>
      </section>

      {/* Video and Carousel Section */}
      <section className="w-full bg-[#efeeec] py-8 md:py-16">
        <div className="mx-2 md:mx-5 rounded-2xl md:rounded-4xl bg-[#151513]">
          <div className="px-4 md:px-6 py-4 md:py-6">

        {/* Video Section */}
        <div className="w-full relative rounded-xl md:rounded-2xl" style={{ height: 'auto', minHeight: '300px' }}>
          <video
            src={videoCarousel.video}
            loop
            preload="auto"
            playsInline
            autoPlay
            muted
            style={{
              cursor: 'auto',
              width: '100%',
              height: '100%',
              borderRadius: '0px',
              display: 'block',
              objectFit: 'fill',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              objectPosition: '50% 50%'
            }}
            className="rounded-t-xl md:rounded-t-2xl"
          />
        </div>

        {/* Carousel Section */}
        <div className="w-full">
          <GamingCarousel />
        </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <StatsSection items={stats} />

        {/* Video Section */}
        <section className="w-full bg-[#efeeec]">
        <div className="w-full relative max-w-[1400px] mx-auto" style={{ height: 'auto', minHeight: '300px'}}>
          <video
            src={video2}
            loop
            preload="auto"
            playsInline
            autoPlay
            muted
            style={{
              cursor: 'auto',
              width: '100%',
              height: '100%',
              borderRadius: '0px',
              display: 'block',
              objectFit: 'fill',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              objectPosition: '50% 50%'
            }}
          />
        </div>
      </section>
            {/* Project Description Section */}
            <ProjectDescription
              title={customSections[0].title}
              paragraphs={customSections[0].paragraphs}
            />

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
              {index === 0 ? (
                <div 
                  className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8"
                  ref={(el) => {
                    if (el) {
                      const observer = new IntersectionObserver(
                        (entries) => {
                          entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                              const heading = entry.target.querySelector('h2') as HTMLElement;
                              const paragraphs = entry.target.querySelectorAll('p');
                              if (heading) {
                                heading.style.opacity = '1';
                                heading.style.transform = 'translateX(0)';
                              }
                              paragraphs.forEach((p, idx) => {
                                setTimeout(() => {
                                  (p as HTMLElement).style.opacity = '1';
                                  (p as HTMLElement).style.transform = 'translateY(0)';
                                }, idx * 100);
                              });
                              observer.unobserve(entry.target);
                            }
                          });
                        },
                        { threshold: 0.1 }
                      );
                      observer.observe(el);
                    }
                  }}
                >
                  {/* Left Side - Heading with Icon */}
                  <div className="flex-1 w-full md:w-auto flex items-start gap-3 md:gap-4">
                    <div 
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#151513',
                        flexShrink: 0,
                        marginTop: '4px'
                      }}
                    />
                    <h2 
                      className="text-[#151513] mb-0 font-inter-display-sm text-left"
                      style={{
                        opacity: 0,
                        transform: 'translateX(-30px)',
                        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                      }}
                    >
                      {customSections[1].title}
                    </h2>
                  </div>

                  {/* Right Side - Content Paragraphs */}
                  <div className="flex-1 w-full md:w-auto max-w-full md:max-w-[700px] space-y-4 md:space-y-6">
                    {customSections[1].paragraphs.map((para, idx) => (
                      <p 
                        key={idx}
                        className="text-[#151513] text-sm md:text-base leading-relaxed font-inter-display-base"
                        style={{
                          opacity: 0,
                          transform: 'translateY(20px)',
                          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                        }}
                      >
                        {para.split('\n\n').map((line, lineIdx) => (
                          <span key={lineIdx}>
                            {line}
                            {lineIdx < para.split('\n\n').length - 1 && <><br /><br /></>}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <ProjectDescription
                  title={section.projectDescription.title}
                  paragraphs={section.projectDescription.paragraphs}
                  noSectionWrapper={section.projectDescription.noSectionWrapper}
                />
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Gaming;

