import { useEffect, useRef, useState } from 'react';
import useImageHover from '../hooks/useImageHover';
import { aboutData } from '../data/aboutData';

const About = () => {
  const { hoverHandlers, initialStyle } = useImageHover();
  const { aboutSection, corePrinciples } = aboutData;
  return (
    <div className="w-full pt-24">
      {/* About Gleen Section */}
      <section className="bg-bg-dark py-8 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          {/* Header Section */}
          <div 
            className="flex flex-col md:flex-row items-start justify-between mb-6 md:mb-8 border-b border-[#545454] pb-6 md:pb-8 gap-4 md:gap-0"
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const h1 = entry.target.querySelector('h1') as HTMLElement;
                        const p = entry.target.querySelector('p') as HTMLElement;
                        if (h1) {
                          h1.style.opacity = '1';
                          h1.style.transform = 'translateX(0)';
                        }
                        if (p) {
                          p.style.opacity = '1';
                          p.style.transform = 'translateX(0)';
                        }
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
            {/* Left Side - Title */}
            <div className="flex flex-col">
              <h1
                className="text-tx-light font-anton-large"
                style={{
                  opacity: 0,
                  transform: 'translateX(-50px)',
                  transition: 'opacity 1s ease-out, transform 1s ease-out',
                }}
              >
                <span className="block">{aboutSection.title.line1}</span>
                <span className="block">{aboutSection.title.line2}</span>
              </h1>
            </div>

            {/* Right Side - Tagline */}
            <div className="flex-1 max-w-full md:max-w-md md:ml-8 self-end">
              <p 
                className="text-tx-light text-sm md:text-base leading-relaxed text-left md:text-right font-inter-display-lg"
                style={{
                  opacity: 0,
                  transform: 'translateX(50px)',
                  transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s',
                }}
              >
                {aboutSection.tagline}
              </p>
            </div>
          </div>

          {/* Welcome To / My Life */}
          <div 
            className="flex items-center justify-between mb-6 md:mb-8 font-inter-display-lg"
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const divs = entry.target.querySelectorAll('div');
                        divs.forEach((div, idx) => {
                          setTimeout(() => {
                            const divElement = div as HTMLElement;
                            if (divElement) {
                              divElement.style.opacity = '1';
                              divElement.style.transform = 'translateY(0)';
                            }
                          }, idx * 150);
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
            <div 
              className="text-tx-light"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              }}
            >
              {aboutSection.welcomeText.left}
            </div>
            <div 
              className="text-tx-light"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s',
              }}
            >
              {aboutSection.welcomeText.right}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24">
          {/* Header Image */}
          <div 
            className="w-full h-[auto] overflow-hidden mb-12 rounded-lg transition-transform duration-700"
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        if (target) {
                          target.style.opacity = '1';
                          target.style.transform = 'translateX(0)';
                        }
                        observer.unobserve(entry.target);
                      }
                    });
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}
            style={{
              opacity: 0,
              transform: 'translateX(-50px)',
              transition: 'opacity 1s ease-out, transform 1s ease-out',
            }}
          >
            <img
              src={aboutSection.image}
              alt="Gleen Wilmore"
              className="w-full h-full object-cover transition-all duration-500 cursor-pointer"
              style={{
                ...initialStyle,
              }}
              {...hoverHandlers}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Text Content */}
          <div 
            className="space-y-4 md:space-y-6 font-inter-display-lg"
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const paragraphs = entry.target.querySelectorAll('p');
                        paragraphs.forEach((p, idx) => {
                          setTimeout(() => {
                            const pElement = p as HTMLElement;
                            if (pElement) {
                              pElement.style.opacity = '1';
                              pElement.style.transform = 'translateY(0)';
                            }
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
            {aboutSection.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-tx-light"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-8 md:py-16 bg-[#efeeec]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          {/* Header Section */}
          <div 
            className="flex flex-col md:flex-row items-start justify-between mb-6 md:mb-8 border-b border-[#222725] pb-6 md:pb-8 gap-4 md:gap-0"
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const h2 = entry.target.querySelector('h2') as HTMLElement;
                        const p = entry.target.querySelector('p') as HTMLElement;
                        if (h2) {
                          h2.style.opacity = '1';
                          h2.style.transform = 'translateX(0)';
                        }
                        if (p) {
                          p.style.opacity = '1';
                          p.style.transform = 'translateX(0)';
                        }
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
            {/* Left Side - Main Title */}
            <div className="flex flex-col">
              <h2
                className="text-[#222725] font-anton-large"
                style={{
                  opacity: 0,
                  transform: 'translateX(-50px)',
                  transition: 'opacity 1s ease-out, transform 1s ease-out',
                }}
              >
                <span className="block">{corePrinciples.title.line1}</span>
                <span className="block">{corePrinciples.title.line2}</span>
              </h2>
            </div>

            {/* Right Side - Tagline */}
            <div className="flex-1 max-w-full md:max-w-md md:ml-8">
              <p 
                className="text-[#222725] text-sm md:text-base leading-relaxed text-left md:text-right"
                style={{
                  opacity: 0,
                  transform: 'translateX(50px)',
                  transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s',
                }}
              >
                {corePrinciples.tagline}
              </p>
            </div>
          </div>

          {/* Principles List */}
          <div className="mt-6 md:mt-8 font-inter-display-lg">
            {/* Headers */}
            <div className="flex mb-4 pb-2">
              <div className="w-[20%]">
                <span className="text-[#222725] text-base">CORE</span>
              </div>
              <div className="flex-1 text-right">
                <span className="text-[#222725] text-base">VALUES</span>
              </div>
            </div>

            {/* Principles List */}
            <div className="space-y-0">
              {corePrinciples.principles.map((principle, index) => {
                const principleRef = useRef<HTMLDivElement>(null);
                const [isVisible, setIsVisible] = useState(false);

                useEffect(() => {
                  const observer = new IntersectionObserver(
                    (entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                          setTimeout(() => {
                            setIsVisible(true);
                          }, index * 100);
                          observer.unobserve(entry.target);
                        }
                      });
                    },
                    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
                  );

                  if (principleRef.current) {
                    observer.observe(principleRef.current);
                  }

                  return () => {
                    if (principleRef.current) {
                      observer.unobserve(principleRef.current);
                    }
                  };
                }, [index]);

                return (
                <div 
                  key={index} 
                  ref={principleRef}
                  className="relative w-full flex flex-row py-2"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                    transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
                  }}
                >
                  {/* Column 1: Number */}
                  <div className="w-[30%]"></div>
                  <div className="flex w-[70%] border-b border-[#222725]">
                  <div className="w-[20%]" style={{ flexShrink: 0 }}>
                    <p className="text-[#222725] text-lg font-medium">{principle.num}</p>
                  </div>
                    {/* Column 2: Core Principle */}
                    <div className="w-[40%]" style={{ flexShrink: 0 }}>
                      <p className="text-[#222725] text-lg font-medium text-left">{principle.core}</p>
                    </div>
                    {/* Column 3: Value Description */}
                    <div className="flex-1" style={{ minWidth: 0 }}>
                      <p className="text-[#222725] text-lg font-medium text-left">{principle.value}</p>
                    </div>
                  </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

