import { useEffect, useRef, useState } from 'react';
import ServicesCarousel from '../components/ServicesCarousel';
import LeftImageCarousel from '../components/LeftImageCarousel';

const MyServices = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#fff]">
        {/* Content Container */}
        <div className="relative z-10 w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-4 md:px-6 lg:px-8 py-8 md:py-0">
          {/* Left Side - Text Content */}
          <div className="flex-1 w-full md:w-auto max-w-full md:max-w-[700px]">
            {/* Main Heading */}
            <h1 
              className="mb-4 md:mb-6 border-b-1 border-red-[#151513]"
              style={{
                fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                fontSize: 'clamp(36px, 6vw, 88px)',
                fontStyle: 'normal',
                fontWeight: 600,
                letterSpacing: '-3px',
                lineHeight: 'clamp(40px, 6.5vw, 90px)',
                textAlign: 'left',
                color: 'rgb(21, 21, 19)',
                animation: 'fadeInUp 1s ease-out',
              }}
            >
              <span className="block">Creative Web</span>
              <span className="block">Design &</span>
              <span className="block">Development</span>
            </h1>
            
            {/* Paragraph Text */}
            <p 
              className="text-black text-sm md:text-base leading-relaxed mb-4 md:mb-6"
              style={{
                fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: 400,
                lineHeight: '1.6em',
                animation: 'fadeInUp 1s ease-out 0.2s both',
              }}
            >
              In the past eight years, I've built over 80 websites for all kinds of people, from beauty brands and real estate teams to game studios and local musicians. Each project has a different goal, but the process always feels the same to me: create something that looks great and actually works. From clean, simple layouts to bold, expressive designs, I focus on shaping a site to fit the client, not the other way around. Whether it's an online store or a portfolio, I care about building something that feels right and gets maximum results.
            </p>
            
            {/* Pill Buttons/Tags */}
            <div className="flex gap-2 md:gap-3 flex-wrap" >
              <button className="bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span  style={{
              fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 600,
              lineHeight: '1.3em',
            }}>Web</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-4 md:h-4">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="bg-[#9ca3af] text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:opacity-80 transition-opacity" style={{
              fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 600,
              lineHeight: '1.3em',
            }}>
                Portfolio
              </button>
              <button className="bg-[#9ca3af] text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:opacity-80 transition-opacity" style={{
              fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 600,
              lineHeight: '1.3em',
            }}>
                Development
              </button>
            </div>
          </div>

          {/* Right Side - Video Display */}
          <div className="flex-1 w-full md:w-auto flex items-center justify-center">
            <div className="relative w-full aspect-video overflow-hidden mix-blend-screen">
              <video
                src="/video/services-1.mp4"
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
          </div>
        </div>
      </section>

      {/* Video and Carousel Section */}
      <section className="w-full bg-[#efeeec]">
        <div className="mx-2 md:mx-5 rounded-2xl md:rounded-4xl bg-[#151513]">
          <div className="px-4 md:px-6 py-4 md:py-6">

        {/* Video Section */}
        <div className="w-full relative rounded-xl md:rounded-2xl" style={{ height: 'auto', minHeight: '300px' }}>
          <video
            src="/video/services-2.mp4"
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
          <ServicesCarousel />
        </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-[#efeeec] py-8 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          {/* First Block */}
          {[
            { 
              title: '3 MONTHS OR LESS',
              text: 'Every project I take on is built with efficiency in mind. From initial strategy to final launch, I specialize in delivering custom, high-quality websites in three months or less. By keeping communication clear and the process streamlined, I\'m able to get brands online quickly without sacrificing design or performance.'
            },
            { 
              title: 'LEAD COSTS CUT BY 91%',
              text: 'Lead cost was reduced from $600 to $50, resulting in a 91 percent decrease in cost per acquisition. This was achieved by developing custom tools and interactive widgets that improved the website\'s user experience and made it easier for visitors to convert.'
            },
            { 
              title: '42% ENGAGEMENT RATE GROWTH',
              text: 'By focusing on user experience and clean, intentional design, my websites encourage visitors to take action. The Jon Campbell Team saw a 42% increase in overall engagement, including more clicks, shares, and form submissions. Every page is built to guide users naturally and help brands build real connections with their audience.'
            }
          ].map((block, index, array) => {
            const blockRef = useRef<HTMLDivElement>(null);
            const [isVisible, setIsVisible] = useState(false);

            useEffect(() => {
              const observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      setTimeout(() => {
                        setIsVisible(true);
                      }, index * 150);
                      observer.unobserve(entry.target);
                    }
                  });
                },
                { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
              );

              if (blockRef.current) {
                observer.observe(blockRef.current);
              }

              return () => {
                if (blockRef.current) {
                  observer.unobserve(blockRef.current);
                }
              };
            }, [index]);

            return (
              <div 
                key={index}
                ref={blockRef}
                className={`flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8 py-6 md:py-8 ${index < array.length - 1 ? 'border-b border-[#151513]' : ''}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.8s ease-out ${index * 0.15}s, transform 0.8s ease-out ${index * 0.15}s`,
                }}
              >
                <div className="flex-1 w-full md:w-auto">
                  <h2 
                    className="text-[#151513] mb-0"
                    style={{
                      fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                      fontSize: 'clamp(28px, 5vw, 56px)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      letterSpacing: '2px',
                      lineHeight: '1.1em',
                      textAlign: 'left'
                    }}
                  >
                    {block.title}
                  </h2>
                </div>
                <div className="flex-1 w-full md:w-auto max-w-full md:max-w-[600px]">
                  <p 
                    className="text-[#151513] text-sm md:text-base leading-relaxed"
                    style={{
                      fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      fontWeight: 400,
                      lineHeight: '1.6em',
                    }}
                  >
                    {block.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-[#efeeec]">
        <div className="w-full relative max-w-[1400px] mx-auto" style={{ height: 'auto', minHeight: '300px'}}>
          <video
            src="/video/services-3.mp4"
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
      <section className="w-full bg-[#efeeec] py-8 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
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
                className="text-[#151513] mb-0"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(13px, 2vw, 15px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '-1px',
                  lineHeight: '1.2em',
                  textAlign: 'left',
                  opacity: 0,
                  transform: 'translateX(-30px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                }}
              >
                Leveling Up Level 8's Web Design
              </h2>
            </div>

            {/* Right Side - Content Paragraphs */}
            <div className="flex-1 w-full md:w-auto max-w-full md:max-w-[700px] space-y-4 md:space-y-6">
              <p 
                className="text-[#151513] text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 400,
                  lineHeight: '1.6em',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                For this project, I designed a full website for LEVEL8, a high-end travel case brand known for their premium luggage and travel accessories. The goal was to create a sleek, modern shopping experience that matched the luxury and precision of their products.
              </p>
              
              <p 
                className="text-[#151513] text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 400,
                  lineHeight: '1.6em',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                I built the entire site layout and UI in Figma, focusing on clean structure, elegant typography, and strong visual hierarchy to keep things both high-end and approachable. Each section was carefully planned to balance storytelling with product visibility, leading customers naturally from brand messaging to conversion points.
              </p>
              
              <p 
                className="text-[#151513] text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 400,
                  lineHeight: '1.6em',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                Once the static designs were in place, I worked closely with ZAM's motion designer Tigran Azatyan to add that final layer of polish. They introduced subtle animations and motion transitions throughout the site to make the user experience feel more dynamic and refined.
              </p>
              
              <p 
                className="text-[#151513] text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 400,
                  lineHeight: '1.6em',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                From concept to completion, this site was about blending modern design with luxury product storytelling to help LEVEL8 stand out in the competitive travel space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jon Campbell Team Section with Background */}
      <section className="w-full relative mx-auto bg-[#efeeec]">
        {/* Background Image */}
        <div className="max-w-[1400px] mx-auto">
        <img
          src="/img/services slide/services-bg-1.jpg"
          alt=""
          className="w-full object-cover h-[400px] md:h-[500px] lg:h-[640px] rounded-lg md:rounded-xl transition-all duration-700 cursor-pointer"
          style={{
            zIndex: 0,
            transform: 'scale(1)',
            filter: 'brightness(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.filter = 'brightness(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.filter = 'brightness(1)';
          }}
        />
        <div className="w-full py-4">
          <div className="relative w-full overflow-hidden flex flex-col">
            {/* Carousel Row */}
            <div className="w-full">
              <LeftImageCarousel 
                images={['3-1.gif', '3-2.jpg', '3-3.jpg', '3-4.jpg']} 
                imagePath="/img/services slide"
                direction="left"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto px-4 md:px-6 lg:px-8 relative py-12 md:py-16 lg:py-24" >
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
                className="text-[#151513] mb-0"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(13px, 2vw, 15px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '-1px',
                  lineHeight: '1.2em',
                  textAlign: 'left',
                  opacity: 0,
                  transform: 'translateX(-30px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                }}
              >
                Leveling Up Level 8's Web Design
              </h2>
            </div>

            {/* Right Side - Content Paragraphs */}
            <div className="flex-1 w-full md:w-auto max-w-full md:max-w-[700px] space-y-4 md:space-y-6">
              <p 
                className="text-[#151513] text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 400,
                  lineHeight: '1.6em',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                For the Jon Campbell Team, I led a full rebrand to help position them as a top-tier force in the real estate market. Their old identity felt scattered and didn't reflect the scale of their business, so I created a unified, premium brand system from the ground up.
              </p>
              
              <p 
                className="text-[#151513] text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 400,
                  lineHeight: '1.6em',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                Using Figma, I built a full visual identity that included a bold new logo, geometric brand mark, typography, color palette, and supporting pattern work. Everything was designed to feel modern, trustworthy, and instantly recognizable. I also designed a custom website focused on user experience and lead generation.
              </p>
              
              <p 
                className="text-[#151513] text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 400,
                  lineHeight: '1.6em',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                The site integrated a fast, SEO-friendly IDX property search and featured a clean, responsive layout that made navigation smooth across all devices. Every page was planned to feel simple and professional while driving conversions. Beyond digital, I carried the brand through print materials, signage, and motion assets. I created an animated logo and branded video assets to help build a consistent presence across social media and marketing content.
              </p>
              
              <p 
                className="text-[#151513] text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 400,
                  lineHeight: '1.6em',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                To finish the project, I delivered a full asset library and CMS training, making it easy for the team to manage content while keeping the brand locked in. The end result was a major success. Lead costs dropped from $600 to $50, website traffic grew by over 40 percent in the first 90 days, and search rankings improved significantly in just a few months.
              </p>
            </div>
          </div>
          
          {/* See Website Button */}
          <div className="flex justify-center mt-8 md:mt-12">
            <a
              href="https://www.joncampbellteam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 bg-[#151513] text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:opacity-80 transition-opacity"
              style={{
                fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: 600,
              }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-4 md:h-4">
                  <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>See Website</span>
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Second Background Image with Carousel Section */}
      <section className="w-full relative mx-auto bg-[#efeeec]">
        {/* Background Image */}
        <div className="max-w-[1400px] mx-auto">
        <img
          src="/img/services slide/services-bg-2.jpg"
          alt=""
          className="w-full object-cover h-[400px] md:h-[500px] lg:h-[640px] rounded-lg md:rounded-xl transition-all duration-700 cursor-pointer"
          style={{
            zIndex: 0,
            transform: 'scale(1)',
            filter: 'brightness(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.filter = 'brightness(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.filter = 'brightness(1)';
          }}
        />
        <div className="w-full py-4">
          <div className="relative w-full overflow-hidden flex flex-col">
            {/* Carousel Row */}
            <div className="w-full">
              <LeftImageCarousel 
                images={['4-1.jpg', '4-2.jpg', '4-3.jpg', '4-4.jpg', '4-5.jpg']} 
                imagePath="/img/services slide"
                direction="left"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto px-4 md:px-6 lg:px-8 relative py-12 md:py-16 lg:py-24" >
          <div 
            className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8"
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const heading = entry.target.querySelector('h2') as HTMLElement;
                        const paragraph = entry.target.querySelector('p') as HTMLElement;
                        if (heading) {
                          heading.style.opacity = '1';
                          heading.style.transform = 'translateX(0)';
                        }
                        if (paragraph) {
                          paragraph.style.opacity = '1';
                          paragraph.style.transform = 'translateY(0)';
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
                className="text-[#151513] mb-0"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(13px, 2vw, 15px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '-1px',
                  lineHeight: '1.2em',
                  textAlign: 'left',
                  opacity: 0,
                  transform: 'translateX(-30px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                }}
              >
                Leveling Up The Biggest Team In Texas
              </h2>
            </div>

            {/* Right Side - Content Paragraphs */}
            <div className="flex-1 w-full md:w-auto max-w-full md:max-w-[700px] space-y-4 md:space-y-6">
              <p 
                className="text-[#151513] text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 400,
                  lineHeight: '1.6em',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
                }}
              >
                I partnered with Chris Watters and Ed Prather to completely transform their online presence, building a sleek, high-performing website designed to drive leads and showcase his real estate expertise. The site features a custom IDX property search, streamlined navigation, and a clean, modern design that positions his brand as a market leader. Focused on both form and function, this project helped elevate Chris's digital brand while boosting conversions.
              </p>
            </div>
          </div>
          
          {/* See Website Button */}
          <div className="flex justify-center mt-8 md:mt-12">
            <a
              href="https://www.christopherwatters.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 bg-[#151513] text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:opacity-80 transition-opacity"
              style={{
                fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: 600,
              }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-4 md:h-4">
                  <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>See Website</span>
            </a>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default MyServices;

