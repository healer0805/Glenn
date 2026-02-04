import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoCarousel from '../components/LogoCarousel';
import { homeData } from '../data/homeData';

const Home = () => {
  const { hero, myExpertise, selectedWork, industryApproved } = homeData;
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-bg-dark overflow-hidden">
        {/* Video Background Container */}
        <div className="absolute inset-0 w-full h-full opacity-100">
          <div className="w-full h-full" style={{ transform: 'scale(1.2) rotate(27deg) translateX(5%) translateY(-17%)', opacity: 1, mixBlendMode: 'screen' }}>
            <video
              src={hero.video}
              loop
              preload="auto"
              playsInline
              autoPlay
              muted
              className="w-full h-full block object-fill cursor-auto rounded-none"
              style={{ objectPosition: '50% 50%', backgroundColor: 'rgba(247, 247, 242, 0)' }}
            />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left Side - Name and Professional Summary */}
          <div className="flex-1 w-full md:w-auto">
            <h1 
              className="text-tx-light mb-4 md:mb-6 animate-fade-in-up font-anton-large text-left"
            >
              {hero.name}
            </h1>
            <p 
              className="text-tx-light text-bolder text-sm md:text-base leading-relaxed max-w-full md:max-w-[450px]"
              style={{
                animation: 'fadeInUp 1s ease-out 0.2s both',
              }}
            >
              {hero.description}
            </p>
          </div>

          {/* Right Side - Services/Expertise List */}
          <div className="flex-1 w-full md:w-auto flex flex-col items-start md:items-end md:pr-[12rem]">
            <div className="text-left md:text-right space-y-2 text-[#161616] text-base md:text-lg font-medium">
              {hero.expertise.map((item, index) => (
                <div 
                  key={index}
                  className=""
                  style={{
                    animation: `fadeInRight 0.8s ease-out ${0.4 + index * 0.1}s both`,
                    opacity: 0,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <LogoCarousel />
        </div>
      </section>

      {/* My Expertise Section */}
      <section className="py-8 md:py-16 bg-[#efeeec]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start justify-between border-b border-solid border-[#222725] pb-6 md:pb-8 gap-4 md:gap-0">
            {/* Left Side - Main Title */}
            <div className="flex flex-col" ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const h2 = entry.target.querySelector('h2') as HTMLElement;
                        if (h2) {
                          h2.style.opacity = '1';
                          h2.style.transform = 'translateX(0)';
                        }
                        observer.unobserve(entry.target);
                      }
                    });
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}>
              <h2 
                className="text-[#222725] font-anton-large"
                style={{
                  opacity: 0,
                  transform: 'translateX(-50px)',
                  transition: 'opacity 1s ease-out, transform 1s ease-out',
                }}
              >
                <span className="block">{myExpertise.title.line1}</span>
                <span className="block">{myExpertise.title.line2}</span>
              </h2>
            </div>
            
            {/* Right Side - Tagline */}
            <div className="flex-1 max-w-full md:max-w-md md:ml-8" ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const p = entry.target.querySelector('p') as HTMLElement;
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
            }}>
              <p 
                className="text-[#222725] text-sm md:text-base leading-relaxed"
                style={{
                  opacity: 0,
                  transform: 'translateX(50px)',
                  transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s',
                }}
              >
                {myExpertise.tagline}
              </p>
            </div>
          </div>
              <h3 
                className="text-[#222725] text-base leading-relaxed text-lg font-bold mt-6"
                ref={(el) => {
                  if (el) {
                    const observer = new IntersectionObserver(
                      (entries) => {
                        entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                            const h3 = entry.target as HTMLElement;
                            h3.style.opacity = '1';
                            h3.style.transform = 'translateY(0)';
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
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s',
                }}
              >
                {myExpertise.expertiseLabel}
              </h3>

          {/* Services List */}
          <div className="mt-8">
            {/* Services List */}
            <div className="space-y-0">
              {myExpertise.services.map((service, index) => {
                const serviceRef = useRef<HTMLDivElement>(null);
                const [isVisible, setIsVisible] = useState(false);

                useEffect(() => {
                  const observer = new IntersectionObserver(
                    (entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                          setTimeout(() => {
                            setIsVisible(true);
                          }, index * 50);
                          observer.unobserve(entry.target);
                        }
                      });
                    },
                    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
                  );

                  if (serviceRef.current) {
                    observer.observe(serviceRef.current);
                  }

                  return () => {
                    if (serviceRef.current) {
                      observer.unobserve(serviceRef.current);
                    }
                  };
                }, [index]);

                return (
                <div 
                  key={index} 
                  ref={serviceRef}
                  className="relative w-full flex flex-row py-2" 
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                    transition: `opacity 0.6s ease-out ${index * 0.05}s, transform 0.6s ease-out ${index * 0.05}s`,
                  }}
                >
                  {/* Column 1: Blank - No border */}
                  <div className="w-[30%]" style={{ flexShrink: 0 }}></div>
                  
                  {/* Columns 2-4 Container with border */}
                  <div className="flex-1 relative" style={{ opacity: 1 }}>
                    <div className="flex flex-row items-center w-full" style={{ width: '100%', opacity: 1 }}>
                      {/* Column 2: Number */}
                      <div className="w-[30%]" style={{ opacity: 1, flexShrink: 0 }}>
                        <p className="text-[#222725] text-lg font-medium">{service.num}</p>
                      </div>
                      
                      {/* Column 3: Service Name */}
                      <div className="w-24" style={{ flex: 1, opacity: 1, minWidth: 0 }}>
                        <p className="text-[#222725] text-lg font-medium text-left">{service.name}</p>
                      </div>
                      
                      {/* Column 4: Field/Bullet */}
                      <div className="w-24" style={{ opacity: 1, flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
                        <div 
                          className="flex items-center justify-center"
                          style={{
                            backgroundColor: 'rgb(21, 21, 19)',
                            borderRadius: '5px',
                            width: '12px',
                            height: '12px',
                            opacity: 1,
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: 'rgb(226, 225, 223)',
                              borderRadius: '9999px',
                              width: '4px',
                              height: '4px',
                              opacity: 1,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Underline - Only for columns 2-4 */}
                    <div
                      className="w-full"
                      style={{
                        backgroundColor: 'rgb(84, 84, 84)',
                        height: '1px',
                        opacity: 1,
                        marginTop: '8px',
                      }}
                    ></div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-8 md:py-16 bg-[#efeeec]">
        <div className="mx-2 md:mx-5 bg-[#151513] rounded-2xl md:rounded-4xl pt-8 md:pt-[5rem] pb-4 md:pb-[2rem]">
          {/* Header Section */}
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-start justify-between mb-8 md:mb-12 border-b border-tx-light pb-6 md:pb-8 gap-4 md:gap-0">
            {/* Left Side - Title */}
            <div className="flex flex-col" ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const h2 = entry.target.querySelector('h2') as HTMLElement;
                        const subtitle = entry.target.querySelector('.work-subtitle') as HTMLElement;
                        if (h2) {
                          h2.style.opacity = '1';
                          h2.style.transform = 'translateX(0)';
                        }
                        if (subtitle) {
                          subtitle.style.opacity = '1';
                          subtitle.style.transform = 'translateY(0)';
                        }
                        observer.unobserve(entry.target);
                      }
                    });
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}>
              <h2 
                className="text-tx-light font-anton-large"
                style={{
                  opacity: 0,
                  transform: 'translateX(-50px)',
                  transition: 'opacity 1s ease-out, transform 1s ease-out',
                }}
              >
                <span className="block">{selectedWork.title.line1}</span>
                <span className="block">{selectedWork.title.line2}</span>
              </h2>
              <div className="mt-4 border-t border-tx-light pt-2">
                <p 
                  className="text-tx-light text-sm md:text-base uppercase work-subtitle"
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                    transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
                  }}
                >
                  {selectedWork.subtitle}
                </p>
              </div>
            </div>
            
            {/* Right Side - Tagline */}
            <div className="flex-1 max-w-full md:max-w-md md:ml-8" ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const p = entry.target.querySelector('p') as HTMLElement;
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
            }}>
              <p 
                className="text-tx-light text-sm md:text-base leading-relaxed uppercase"
                style={{
                  opacity: 0,
                  transform: 'translateX(50px)',
                  transition: 'opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s',
                }}
              >
                {selectedWork.tagline.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < selectedWork.tagline.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Work Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4 md:px-[1.7rem]">
            {selectedWork.works.map((work, index) => {
              const workRef = useRef<HTMLDivElement>(null);
              const [isVisible, setIsVisible] = useState(false);
              const imageRef = useRef<HTMLDivElement>(null);

              const getWorkPath = (title: string) => {
                const pathMap: { [key: string]: string } = {
                  'Gaming': '/gaming',
                  'Web Design': '/branding',
                  'Development': '/services',
                  'Past Work': '/past-work'
                };
                return pathMap[title] || '/';
              };

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
                  { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
                );

                if (workRef.current) {
                  observer.observe(workRef.current);
                }

                return () => {
                  if (workRef.current) {
                    observer.unobserve(workRef.current);
                  }
                };
              }, [index]);

              useEffect(() => {
                const handleMouseMove = (e: MouseEvent) => {
                  if (!imageRef.current) return;
                  const rect = imageRef.current.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  
                  imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                };

                const handleMouseLeave = () => {
                  if (imageRef.current) {
                    imageRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                  }
                };

                const imageElement = imageRef.current;
                if (imageElement) {
                  imageElement.addEventListener('mousemove', handleMouseMove);
                  imageElement.addEventListener('mouseleave', handleMouseLeave);
                }

                return () => {
                  if (imageElement) {
                    imageElement.removeEventListener('mousemove', handleMouseMove);
                    imageElement.removeEventListener('mouseleave', handleMouseLeave);
                  }
                };
              }, []);

              return (
              <Link 
                key={index}
                to={getWorkPath(work.title)}
                className="block"
              >
              <div 
                ref={workRef}
                className="bg-[#efeeec] rounded-2xl md:rounded-3xl overflow-hidden p-2 md:p-[.7rem] cursor-pointer"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transition: `opacity 0.8s ease-out ${index * 0.1}s, transform 0.8s ease-out ${index * 0.1}s`,
                }}
              >
                {/* Image */}
                <div 
                  ref={imageRef}
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl md:rounded-2xl transition-transform duration-300"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img
                    src={`${selectedWork.imagePath}/${work.image}`}
                    alt={work.title}
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{
                      transform: 'scale(1)',
                      filter: 'brightness(1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.15)';
                      e.currentTarget.style.filter = 'brightness(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.filter = 'brightness(1)';
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 md:p-6 bg-bg-light">
                  {/* Carousel Dots */}
                  <div className="flex gap-2 mb-3 md:mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#cdcccc]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#cdcccc]"></div>
                  </div>
                  
                  {/* Title and Subtitle */}
                  <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-0">
                  <div className="mb-2 md:mb-4">
                    <h3 className="text-[#090909] text-xl md:text-2xl mb-1">{work.title}</h3>
                    <p className="text-[#686867] text-sm md:text-base">{work.subtitle}</p>
                    </div>
                  {/* Explore Button */}
                  <button className="bg-[#e0eaea] text-[#363636] px-4 md:px-[2rem] py-2 md:h-[3.5rem] rounded-full border-solid text-base md:text-xl border-1 hover:opacity-80 transition-opacity w-full md:w-auto">
                    {selectedWork.exploreButton}
                  </button>
                  </div>
                  
                </div>
              </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Approved Section */}
      <section className="py-8 md:py-16 bg-[#efeeec]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-[2rem]">
          {/* Header Section */}
          <div className="relative mb-8 md:mb-12 border-b border-[#222725] pb-6 md:pb-8" ref={(el) => {
            if (el) {
              const observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      const title = entry.target.querySelector('h2') as HTMLElement;
                      const tagline = entry.target.querySelector('.tagline-text') as HTMLElement;
                      if (title) {
                        title.style.opacity = '1';
                        title.style.transform = 'translateX(0)';
                      }
                      if (tagline) {
                        tagline.style.opacity = '1';
                        tagline.style.transform = 'translateX(0)';
                      }
                      observer.unobserve(entry.target);
                    }
                  });
                },
                { threshold: 0.1 }
              );
              observer.observe(el);
            }
          }}>
            {/* Left Side - Title */}
            <div className="flex flex-col px-0 md:px-[1rem]">
              <h2 
                className="text-[#222725] font-anton-large"
                style={{
                  opacity: 0,
                  transform: 'translateX(-50px)',
                  transition: 'opacity 1s ease-out, transform 1s ease-out',
                }}
              >
                <span className="block">{industryApproved.title.line1}</span>
                <span className="block">{industryApproved.title.line2}</span>
              </h2>
            </div>
            
            {/* Right Side - Tagline */}
            <div className="absolute bottom-4 md:bottom-8 right-0 max-w-full md:max-w-md">
              <p 
                className="text-[#222725] text-xs md:text-sm lg:text-base leading-relaxed text-right tagline-text"
                style={{
                  opacity: 0,
                  transform: 'translateX(50px)',
                  transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s',
                }}
              >
                {industryApproved.tagline}
              </p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {industryApproved.testimonials.map((testimonial, index) => {
              const testimonialRef = useRef<HTMLDivElement>(null);
              const [isVisible, setIsVisible] = useState(false);
              
              const avatarImages = [
                '0YbymN8GFN9zCjXEIlgK0hfWNvo.jpeg',
                'HLOcKvlzZh7JCgUEsh8WryRxdII.jpeg',
                'ju18HECMp2ulGR2aQOyXXm5xQ.jpeg',
                'lqKUdZjC2dWuFRsE392pYugkA.jpeg',
                'ULiTBX2FDjSzY9U5A26yptl1mY.jpeg',
                'yOidLN3h5pSfZv3HChaIcfiHdE.jpeg'
              ];
              
              const avatarImage = `/img/avatars/${avatarImages[index] || avatarImages[0]}`;

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
                  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
                );

                if (testimonialRef.current) {
                  observer.observe(testimonialRef.current);
                }

                return () => {
                  if (testimonialRef.current) {
                    observer.unobserve(testimonialRef.current);
                  }
                };
              }, [index]);

              return (
              <div 
                key={index} 
                ref={testimonialRef}
                className="bg-[#e2e1df] rounded-lg p-4 md:p-6 relative hover:shadow-lg transition-shadow duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                  transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
                }}
              >
                {/* Profile Picture - Top Left */}
                <div className="mb-3 md:mb-4">
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-300 transition-transform duration-300 cursor-pointer"
                    style={{
                      transform: 'scale(1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.transform = 'scale(1.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    <img 
                      src={avatarImage} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-transform duration-300"
                      style={{
                        transform: 'scale(1)',
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
                
                {/* LinkedIn Icon - Top Right */}
                <div 
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-5 h-5 md:w-6 md:h-6 bg-[#cdcccc] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                  style={{
                    transform: 'scale(1)',
                    backgroundColor: '#cdcccc',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.15)';
                    e.currentTarget.style.backgroundColor = '#0077b5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.backgroundColor = '#cdcccc';
                  }}
                >
                  <span className="text-white text-[10px] md:text-xs font-bold">in</span>
                </div>
                
                {/* Star Rating - Below Profile Picture */}
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#222725] text-base md:text-xl">★</span>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-[#222725] text-sm md:text-base leading-relaxed mb-4 md:mb-6 font-inter-display-medium">{testimonial.text}</p>
                
                {/* Reviewer Info */}
                <div className="border-t border-[#ffffff] pt-3 md:pt-4">
                  <p className="text-[#222725] font-bold text-[18px] md:text-[19px]! font-inter-display-base text-[black]">{testimonial.name} • {testimonial.title}</p>
                  <p className="text-[#222725] text-[14px] md:text-[15px]! mt-1 font-inter-display-base font-medium">{testimonial.company}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
