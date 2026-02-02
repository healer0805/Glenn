import { useEffect, useRef, useState } from 'react';
import LogoCarousel from '../components/LogoCarousel';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-bg-dark overflow-hidden">
        {/* Video Background Container */}
        <div className="absolute inset-0 w-full h-full opacity-100">
          <div className="w-full h-full" style={{ transform: 'scale(1.2) rotate(27deg) translateX(5%) translateY(-17%)', opacity: 1, mixBlendMode: 'screen' }}>
            <video
              src="/video/home-hero-bg.mp4"
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
              className="text-tx-light mb-4 md:mb-6 animate-fade-in-up"
              style={{
                fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                fontSize: 'clamp(48px, 8vw, 148px)',
                fontStyle: 'normal',
                fontWeight: 400,
                letterSpacing: '0em',
                lineHeight: '0.9em',
                textAlign: 'left',
                animation: 'fadeInUp 1s ease-out',
              }}
            >
              NICKOLAS KOSSUP
            </h1>
            <p 
              className="text-tx-light text-bolder text-sm md:text-base leading-relaxed max-w-full md:max-w-[450px]"
              style={{
                animation: 'fadeInUp 1s ease-out 0.2s both',
              }}
            >
              16+ years of professional experience as a multi-media designer specializing in web design, branding, marketing, and print. Bringing both creative vision and technical expertise to every project and role. Diverse industry experience including gaming, tech, retail, real estate, beauty, and more.
            </p>
          </div>

          {/* Right Side - Services/Expertise List */}
          <div className="flex-1 w-full md:w-auto flex flex-col items-start md:items-end md:pr-[12rem]">
            <div className="text-left md:text-right space-y-2 text-[#161616] text-base md:text-lg font-medium">
              {['Award Winning', 'Art Director | Designer', 'UX/UI Design', 'Web Development', 'Motion Animation', 'Brand Identity Design'].map((item, index) => (
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
                className="text-[#222725]"
                style={{
                  fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                  fontSize: 'clamp(48px, 8vw, 148px)',
                  fontStyle: 'normal',
                  fontWeight: 400,  
                  letterSpacing: '0em',
                  lineHeight: '0.9em',
                  opacity: 0,
                  transform: 'translateX(-50px)',
                  transition: 'opacity 1s ease-out, transform 1s ease-out',
                }}
              >
                <span className="block">MY</span>
                <span className="block">EXPERTISE</span>
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
                TAILORED SOLUTIONS DESIGNED TO ELEVATE YOUR BRAND AND DRIVE RESULTS.
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
                Expertise
              </h3>

          {/* Services List */}
          <div className="mt-8">
            {/* Services List */}
            <div className="space-y-0">
              {[
                { num: '01', name: 'Website Design & Development' },
                { num: '02', name: 'UX/UI Design' },
                { num: '03', name: 'Brand Identity Design' },
                { num: '04', name: 'Motion Animation' },
                { num: '05', name: 'Digital Marketing & Campaigns' },
                { num: '06', name: 'Typography' },
                { num: '07', name: 'Landing Page Design' },
                { num: '08', name: 'Package Design' },
                { num: '09', name: 'Hosting & Deployment' },
                { num: '10', name: 'Presentation Design' },
              ].map((service, index) => {
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
                className="text-tx-light"
                style={{
                  fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                  fontSize: 'clamp(48px, 8vw, 148px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '0em',
                  lineHeight: '0.9em',
                  opacity: 0,
                  transform: 'translateX(-50px)',
                  transition: 'opacity 1s ease-out, transform 1s ease-out',
                }}
              >
                <span className="block">SELECTED</span>
                <span className="block">WORK</span>
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
                  LATEST WORK
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
                IMPACTFUL SOLUTIONS THAT<br />
                STAND OUT,<br />
                CAPTURE ATTENTION,<br />
                AND DRIVE MEASURABLE SUCCESS
              </p>
            </div>
          </div>

          {/* Work Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4 md:px-[1.7rem]">
            {[
              { 
                image: 'CZzxOhu4atI4gRONKCKvhUU7Ts0.jpg',
                title: 'Gaming',
                subtitle: 'Marketing'
              },
              { 
                image: 'NWuFIEw5APVBJGA4CS5Rj8Foo.jpg',
                title: 'Web Design',
                subtitle: 'Development'
              },
              { 
                image: 'sPCHqJJFFQ18pNJsnejn0r7A0lo.jpg',
                title: 'Branding',
                subtitle: 'Design'
              },
              { 
                image: 'VSG0e7NupLZb0oxt7zCQqEYM4.jpg',
                title: 'Past Work',
                subtitle: 'Various'
              },
            ].map((work, index) => {
              const workRef = useRef<HTMLDivElement>(null);
              const [isVisible, setIsVisible] = useState(false);
              const imageRef = useRef<HTMLDivElement>(null);

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
              <div 
                key={index} 
                ref={workRef}
                className="bg-[#efeeec] rounded-2xl md:rounded-3xl overflow-hidden p-2 md:p-[.7rem]"
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
                    src={`/img/selected work/${work.image}`}
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
                    EXPLORE
                  </button>
                  </div>
                  
                </div>
              </div>
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
                className="text-[#222725]"
                style={{
                  fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                  fontSize: 'clamp(48px, 8vw, 148px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '0em',
                  lineHeight: '0.9em',
                  opacity: 0,
                  transform: 'translateX(-50px)',
                  transition: 'opacity 1s ease-out, transform 1s ease-out',
                }}
              >
                <span className="block">INDUSTRY</span>
                <span className="block">APPROVED</span>
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
                HEAR FROM CLIENTS AND OTHER PROFESSIONALS ON WHAT YOU CAN EXPECT WHEN WORKING WITH ME.
              </p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                text: "Nick's ability to innovate and deliver designs that impress regardless is a rare talent. Nick takes ownership in his projects. It was always a pleasure working with him.",
                name: "Alan Voong",
                title: "Sr Full Stack Engineer",
                company: "PlayStation",
                profileImage: "/img/testimonials/alan.jpg"
              },
              {
                text: "He's got a great taste that you can always count on, making designs that speak to the audience, whether it's for video games or editorial websites. It's great working w/ him!",
                name: "Ting Sang",
                title: "Marketing Manager",
                company: "Lightspeed Studio",
                profileImage: "/img/testimonials/ting.jpg"
              },
              {
                text: "Nick is an extremely talented designer with passion for days. His creative experience is super diverse which lends itself to a very strong leadership quality he posses.",
                name: "Carlos Estrada",
                title: "Associate Creative Director",
                company: "Apple",
                profileImage: "/img/testimonials/carlos.jpg"
              },
              {
                text: "Nick is an amazing animator and designer and brings an innovative and creative voice to any project he is a part of. Look forward to working with Nick soon.",
                name: "Kayvan Ghavim",
                title: "Alum",
                company: "Red Bull, Buzzfeed, Mashable, Twitch, CNET",
                profileImage: "/img/testimonials/kayvan.jpg"
              },
              {
                text: "Nick is a very talented designer who helps produce a lot of excellent pieces for our company's game projects. He is crucial to our social/community campaigns.",
                name: "Yiyan Lin",
                title: "Assistant Producer",
                company: "Tencent Games",
                profileImage: "/img/testimonials/yiyan.jpg"
              },
              {
                text: "He is extremely talented, hardworking, and sociable. Apart from consistently delivering high-level designs, he is also encouraging among his peers, especially during stressful times.",
                name: "Celine Chang",
                title: "Associate Producer",
                company: "Respawn Entertainment",
                profileImage: "/img/testimonials/celine.jpg"
              }
            ].map((testimonial, index) => {
              const testimonialRef = useRef<HTMLDivElement>(null);
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
                      src={testimonial.profileImage} 
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
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-5 h-5 md:w-6 md:h-6 bg-[#cdcccc] rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] md:text-xs font-bold">in</span>
                </div>
                
                {/* Star Rating - Below Profile Picture */}
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#222725] text-base md:text-xl">★</span>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-[#222725] text-sm md:text-base leading-relaxed mb-4 md:mb-6" style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 18px)',
                  fontStyle: 'normal',
                  fontWeight: 500,  
                  letterSpacing: '-0.1px',
                  lineHeight: '24px',
                }}>{testimonial.text}</p>
                
                {/* Reviewer Info */}
                <div className="border-t border-[#ffffff] pt-3 md:pt-4">
                  <p className="text-[#222725] font-bold text-sm md:text-base" style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif'}}>{testimonial.name} • {testimonial.title}</p>
                  <p className="text-[#222725] text-xs md:text-sm mt-1" style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif', fontWeight: 500}}>{testimonial.company}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Employment History Section */}
      <section className="py-8 md:py-16 bg-[#efeeec]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-[2rem]">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8" ref={(el) => {
            if (el) {
              const observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      const title = entry.target.querySelector('h2') as HTMLElement;
                      const tagline = entry.target.querySelector('.employment-tagline') as HTMLElement;
                      if (title) {
                        title.style.opacity = '1';
                        title.style.transform = 'translateX(0)';
                      }
                      if (tagline) {
                        tagline.style.opacity = '1';
                        tagline.style.transform = 'translateY(0)';
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
            {/* Left Side - Title, Tagline, and Contact */}
            <div className="flex flex-col px-0 md:px-[1rem] w-full md:w-auto">
              <h2 
                className="text-[#222725] mb-6 md:mb-8"
                style={{
                  fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                  fontSize: 'clamp(48px, 8vw, 148px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '0em',
                  lineHeight: '0.9em',
                  opacity: 0,
                  transform: 'translateX(-50px)',
                  transition: 'opacity 1s ease-out, transform 1s ease-out',
                }}
              >
                <span className="block">EMPLOYMENT</span>
                <span className="block">HISTORY</span>
              </h2>
              
              {/* Separator Line */}
              <div className="border-b border-[#222725] mb-6 md:mb-8"></div>
              
              
            </div>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col">
            {/* Tagline */}
            <div className="mb-6 md:mb-8">
                <p 
                  className="text-[#222725] font-bold employment-tagline"
                  style={{
                    fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                    fontSize: 'clamp(32px, 5vw, 56px)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    letterSpacing: '0em',
                    lineHeight: '1.1em',
                    opacity: 0,
                    transform: 'translateY(30px)',
                    transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
                  }}
                >
                  <span className="block">SHAPING BRANDS</span>
                  <span className="block">ELEVATING EXPERIENCES.</span>
                </p>
              </div>
              
              {/* Contact Link */}
              <div className="flex items-center gap-2">
                <a href="/contact" className="text-[#222725] text-sm md:text-base underline decoration-[#222725] underline-offset-4">
                  CONTACT
                </a>
                <div 
                  className="flex items-center justify-center"
                  style={{
                    backgroundColor: '#222725',
                    borderRadius: '3px',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#efeeec',
                      borderRadius: '9999px',
                      width: '4px',
                      height: '4px',
                    }}
                  ></div>
                </div>
              </div>
          </div>
            {/* Right Side - Employment List */}
            <div className="flex-1 max-w-full md:max-w-2xl">
              {[
                { company: 'SAMSUNG', title: 'Senior Designer' },
                { company: 'ZAM Agency', title: 'Design Manager' },
                { company: 'BROWGAL', title: 'Lead Visual Designer' },
                { company: 'SPECTRUM', title: 'Northeast Divisional Designer' },
                { company: 'SONA Enterprises', title: 'Multi-Media Designer' },
                { company: 'KOURY WEB', title: 'Graphic Designer' },
              ].map((job, index, array) => {
                const jobRef = useRef<HTMLDivElement>(null);
                const [isVisible, setIsVisible] = useState(false);

                useEffect(() => {
                  const observer = new IntersectionObserver(
                    (entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                          setTimeout(() => {
                            setIsVisible(true);
                          }, index * 80);
                          observer.unobserve(entry.target);
                        }
                      });
                    },
                    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
                  );

                  if (jobRef.current) {
                    observer.observe(jobRef.current);
                  }

                  return () => {
                    if (jobRef.current) {
                      observer.unobserve(jobRef.current);
                    }
                  };
                }, [index]);

                return (
                <div 
                  key={index}
                  ref={jobRef}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                    transition: `opacity 0.5s ease-out ${index * 0.08}s, transform 0.5s ease-out ${index * 0.08}s`,
                  }}
                >
                  <div className="flex items-center justify-between py-3">
                    <p 
                      className="text-[#222725] text-base"
                      style={{
                        fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        letterSpacing: '-0.1px',
                        lineHeight: '24px',
                      }}
                    >
                      {job.company} - {job.title}
                    </p>
                    <button
                      className="flex items-center justify-center bg-[#222725] text-white w-8 h-8 rounded-sm hover:opacity-80 transition-opacity"
                      style={{
                        fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                        fontSize: '18px',
                        fontWeight: 400,
                      }}
                    >
                      +
                    </button>
                  </div>
                  {index < array.length - 1 && (
                    <div className="border-b border-[#222725]"></div>
                  )}
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

export default Home;
